// Practice engine - driven by a PRACTICE_CONFIG global defined per-page.
//
// PRACTICE_CONFIG shape:
// {
//   title: "Practice 4a",
//   phases: [
//     {
//       type: "conj",
//       tense: "ind-pres",
//       count: [8, 10],             // exact number or [min, max]
//       practice: "4a",             // optional - restrict to verbs whose lessons[] includes this key
//                                   //            (verbs with no lessons field always pass)
//       yogo: false,                // optional - false = exclude yo-go, "only" = yo-go only, omit = all
//       stemchange: true,           // optional - true = stem-change only, false = regular only, omit = all
//       verbs: ["dormir", "querer"] // optional - whitelist by infinitive; overrides all other verb filters
//     },
//     { type: "sent", count: 5 }
//   ]
// }
// All questions from all phases are shuffled together before being presented.
//
// yo-go detection: verb["ind-pres"][0] ends with "go"
// stemchange detection: verb.latin !== verb.infinitive
//
// Requires globals: VERBS_DATA, SENTENCES_DATA, PRACTICE_CONFIG, Settings (js/settings.js)

const PRONOUNS = [
    ['yo'],
    ['tú'],
    ['vos'],
    ['él', 'ella', 'usted'],
    ['nosotros', 'nosotras'],
    ['vosotros', 'vosotras'],
    ['ellos', 'ellas', 'ustedes']
];
function pickPronoun(pi) {
    const opts = PRONOUNS[pi];
    return opts[Math.floor(Math.random() * opts.length)];
}

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function pickCount(spec) {
    return Array.isArray(spec)
        ? spec[0] + Math.floor(Math.random() * (spec[1] - spec[0] + 1))
        : spec;
}

function normalize(s) {
    return s.trim().toLowerCase()
        .normalize('NFD').replace(/[̀-ͯ]/g, '')
        .replace(/\s+/g, ' ');
}

function isYoGo(verb, tense) {
    return verb[tense]?.[0]?.endsWith('go') ?? false;
}

function isStemChange(verb) {
    return verb.latin !== undefined && verb.latin !== verb.infinitive;
}

function verbAllowed(verb, phase) {
    // lesson filter: verb.lessons must include phase.practice (or verb has no lessons field)
    if (phase.practice && verb.lessons && !verb.lessons.includes(phase.practice)) return false;
    // yo-go filter
    if (phase.yogo === false  &&  isYoGo(verb, phase.tense)) return false;
    if (phase.yogo === 'only' && !isYoGo(verb, phase.tense)) return false;
    // stem-change filter
    if (phase.stemchange === false &&  isStemChange(verb)) return false;
    if (phase.stemchange === true  && !isStemChange(verb)) return false;
    return true;
}

function buildQuestions() {
    const skipPronouns = new Set([
        ...( Settings.isOn('vos')       ? [] : [2] ),
        ...( Settings.isOn('vosotros')  ? [] : [5] ),
    ]);

    const conjQs = [], sentQs = [];
    for (const phase of PRACTICE_CONFIG.phases) {
        const n = pickCount(phase.count);
        if (phase.type === 'conj') {
            const whitelist = phase.verbs ? new Set(phase.verbs) : null;
            const pairs = [];
            for (const verb of VERBS_DATA) {
                const allowed = whitelist ? whitelist.has(verb.infinitive) : verbAllowed(verb, phase);
                if (!allowed) continue;
                for (let pi = 0; pi < 7; pi++)
                    if (!skipPronouns.has(pi) && verb[phase.tense]?.[pi] !== undefined)
                        pairs.push({ verb, pi, tense: phase.tense });
            }
            for (const { verb, pi, tense } of shuffle(pairs).slice(0, n))
                conjQs.push({ type: 'conj', pronoun: pickPronoun(pi), infinitive: verb.infinitive, latin: verb.latin, tense, answer: verb[tense][pi] });
        } else if (phase.type === 'sent') {
            for (const s of shuffle(SENTENCES_DATA).slice(0, n))
                sentQs.push({ type: 'sent', ...s });
        }
    }
    // Shuffle conj questions together across all phases, then append sentences at the end
    return [...shuffle(conjQs), ...sentQs];
}

// ── State ──────────────────────────────────────────────────────────────────
let questions = [], current = 0, answered = false, results = [];

const $ = id => document.getElementById(id);

function render() {
    const q = questions[current];
    answered = false;
    $('feedback').textContent = '';
    $('feedback').className = 'feedback';
    $('answer-input').value = '';
    $('answer-input').disabled = false;
    $('next-btn').style.display = 'none';
    $('submit-btn').style.display = '';
    $('progress-fill').style.width = (current / questions.length * 100) + '%';

    $('phase-label').textContent =
        q.type === 'conj' ? 'Conjugation Drill' : 'Sentence Practice';

    if (q.type === 'conj') {
        const latinNote = (q.latin && q.latin !== q.infinitive)
            ? ` <span class="latin">(${q.latin})</span>` : '';
        $('prompt').innerHTML =
            `<span class="pronoun">(${q.pronoun})</span> <span class="blank">&nbsp;</span> ` +
            `<span class="hint">${q.infinitive}${latinNote} &mdash; ${q.tense}</span>`;
    } else {
        $('prompt').innerHTML = q.template.replace('________', '<span class="blank">&nbsp;</span>');
    }

    $('answer-input').focus();
}

function submit() {
    if (answered) return;
    const given = $('answer-input').value.trim();
    if (!given) { $('answer-input').focus(); return; }

    answered = true;
    $('answer-input').disabled = true;
    $('submit-btn').style.display = 'none';
    $('next-btn').style.display = '';

    const correct = normalize(given) === normalize(questions[current].answer);
    results.push({ q: questions[current], given, correct });

    $('feedback').className = 'feedback ' + (correct ? 'correct' : 'wrong');
    $('feedback').innerHTML = correct
        ? '✓ Correct!'
        : `✗ &nbsp; The answer is <strong>${questions[current].answer}</strong>`;
}

function next() {
    if (++current >= questions.length) finish(); else render();
}

function finish() {
    $('progress-fill').style.width = '100%';
    $('card').style.display = 'none';
    $('results').style.display = 'block';

    const correct = results.filter(r => r.correct).length;
    const total = results.length;
    $('score-display').textContent = `${correct} / ${total}`;
    $('score-label').textContent =
        correct === total      ? 'Perfect!' :
        correct >= total * 0.8 ? 'Great job!' :
        correct >= total * 0.6 ? 'Keep practicing.' :
        'Review the material and try again.';

    $('review-list').innerHTML = '';
    results.forEach(r => {
        const div = document.createElement('div');
        div.className = 'review-item ' + (r.correct ? 'ok' : 'err');
        div.innerHTML = r.correct
            ? (r.q.type === 'conj'
                ? `<b>(${r.q.pronoun}) ${r.q.answer}</b> - ${r.q.infinitive}`
                : `<b>${r.q.answer}</b> - ${r.q.template.replace('________', r.q.answer)}`)
            : `You wrote <em>${r.given}</em>, answer: <strong>${r.q.answer}</strong>`;
        $('review-list').appendChild(div);
    });
}

function startPractice() {
    current = 0; answered = false; results = [];
    questions = buildQuestions();
    $('card').style.display = 'block';
    $('results').style.display = 'none';
    $('h1').textContent = PRACTICE_CONFIG.title;
    render();
}

document.addEventListener('DOMContentLoaded', () => {
    $('submit-btn').addEventListener('click', submit);
    $('next-btn').addEventListener('click', next);
    document.addEventListener('keydown', e => {
        if (e.key === 'Enter') { if (!answered) submit(); else next(); }
    });
    startPractice();
});
