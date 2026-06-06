// Lesson engine — driven by a LESSON_DATA global defined per-page.
//
// Supported node types:
//   { type: "text",    content: "..." }
//   { type: "list",    items: ["...", "..."] }         — arrow-bullet list
//   { type: "break" }                                  — pause; user clicks Next to continue
//   { type: "check",   question: "...", answer: "..." } — reveal-on-click flashcard
//   { type: "table-pronoun", label: "...", cells: [...], cols2plus: bool }
//       cells order (without 2nd+): [1sg, 1pl, 2sg, 2pl, 3sg, 3pl]
//       cells order (with    2nd+): [1sg, 1pl, 2sg, 2pl, 2+sg, 2+pl, 3sg, 3pl]
//   { type: "table-content", rows: [[col1, col2], ...] } — two-column, borderless
//
// Inline markup supported in any content/items/question/answer string:
//   **text**   → bold
//   __text__   → underline

function parseInline(s) {
    s = String(s);
    let result = '', i = 0;
    while (i < s.length) {
        if (s[i] === '*' && s[i+1] === '*') {
            const end = s.indexOf('**', i + 2);
            if (end !== -1) { result += '<strong>' + parseInline(s.slice(i + 2, end)) + '</strong>'; i = end + 2; continue; }
        } else if (s[i] === '_' && s[i+1] === '_') {
            const end = s.indexOf('__', i + 2);
            if (end !== -1) { result += '<u>' + parseInline(s.slice(i + 2, end)) + '</u>'; i = end + 2; continue; }
        } else if (s[i] === '~' && s[i+1] === '~') {
            const end = s.indexOf('~~', i + 2);
            if (end !== -1) { result += '<s>' + parseInline(s.slice(i + 2, end)) + '</s>'; i = end + 2; continue; }
        }
        result += s[i++];
    }
    return result;
}

function renderNode(node) {
    switch (node.type) {

        case 'text':
            return `<p>${parseInline(node.content)}</p>`;

        case 'list': {
            const items = node.items.map(i => `<li>${parseInline(i)}</li>`).join('');
            return `<ul class="lesson-list">${items}</ul>`;
        }

        case 'table-pronoun': {
            const c = node.cells;
            const has2plus = node.cols2plus;
            const label = node.label ? `<p class="table-label">${parseInline(node.label)}</p>` : '';
            if (node.headers === false) {
                // Plain 2-column grid — no header row, no row labels
                // label can be ["Verb", "tense"] to render a split title row inside the table
                let titleRow = '';
                if (Array.isArray(node.label)) {
                    titleRow = `<tr class="title-row"><td>${parseInline(node.label[0])}</td><td class="title-right">${parseInline(node.label[1])}</td></tr>`;
                }
                const cls = 'pronoun-table no-headers' + (node.center ? ' centered' : '');
                const pairs = [];
                for (let i = 0; i < c.length; i += 2)
                    pairs.push(`<tr><td>${parseInline(c[i])}</td><td>${parseInline(c[i+1])}</td></tr>`);
                return `<table class="${cls}">${titleRow}${pairs.join('')}</table>`;
            }
            const rows = has2plus
                ? [['1st', c[0], c[1]], ['2nd', c[2], c[3]], ['2nd+', c[4], c[5]], ['3rd', c[6], c[7]]]
                : [['1st', c[0], c[1]], ['2nd', c[2], c[3]], ['3rd', c[4], c[5]]];
            const thead = `<tr><th></th><th>Singular</th><th>Plural</th></tr>`;
            const tbody = rows.map(([row, sg, pl]) =>
                `<tr><td class="row-label">${row}</td><td>${parseInline(sg)}</td><td>${parseInline(pl)}</td></tr>`
            ).join('');
            return `${label}<table class="pronoun-table">${thead}${tbody}</table>`;
        }

        case 'table-content': {
            const rows = node.rows.map(([a, b]) =>
                `<tr><td>${parseInline(a)}</td><td>${parseInline(b)}</td></tr>`
            ).join('');
            return `<table class="content-table">${rows}</table>`;
        }

        case 'check': {
            const id = 'check-' + Math.random().toString(36).slice(2);
            return `<div class="check-card">
                <p class="check-q">${parseInline(node.question)}</p>
                <button class="reveal-btn" onclick="
                    this.style.display='none';
                    document.getElementById('${id}').style.display='block';
                ">Reveal answer</button>
                <div class="check-answer" id="${id}" style="display:none">${parseInline(node.answer)}</div>
            </div>`;
        }

        default:
            return '';
    }
}

// ── Engine ─────────────────────────────────────────────────────────────────

let segments = [];   // arrays of nodes, split at each 'break'
let segIndex = 0;

function buildSegments() {
    segments = [];
    let current = [];
    for (const node of LESSON_DATA) {
        if (node.type === 'break') {
            segments.push(current);
            current = [];
        } else {
            current.push(node);
        }
    }
    if (current.length) segments.push(current);
}

function showNextSegment() {
    const content = document.getElementById('lesson-content');
    const btn = document.getElementById('lesson-next-btn');

    if (segIndex < segments.length) {
        const block = document.createElement('div');
        block.className = 'lesson-segment';
        block.innerHTML = segments[segIndex].map(renderNode).join('');
        content.appendChild(block);
        segIndex++;
    }

    if (segIndex >= segments.length) {
        btn.style.display = 'none';
        const done = document.createElement('p');
        done.className = 'lesson-done';
        done.textContent = 'End of lesson.';
        content.appendChild(done);
    }

    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    buildSegments();
    document.getElementById('lesson-next-btn').addEventListener('click', showNextSegment);
    showNextSegment();
});
