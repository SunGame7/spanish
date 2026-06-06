// Lesson 8 – Present Subjunctive
// Edit this file to update lesson content.
// See js/lesson-engine.js for all supported node types and options.

const LESSON_DATA = [
    {
        "type": "text",
        "content": "To express uncertain or hypothetical statements, or ones driven by emotion rather than fact, the **present subjunctive** tense is used."
    },
    {
        "type": "text",
        "content": "The \"opposite\" endings are used."
    },
    {
        "type": "text",
        "content": "**-ar verbs**"
    },
    {
        "type": "table-pronoun",
        "cells": ["-e", "-emos", "-es", "-éis", "-e", "-en"]
    },
    {
        "type": "text",
        "content": "**-er / -ir verbs**"
    },
    {
        "type": "table-pronoun",
        "cells": ["-a", "-amos", "-as", "-áis", "-a", "-an"]
    },

    { "type": "break" },

    {
        "type": "text",
        "content": "If the verb has an irregularity with **yo** in the present indicative, that irregularity is applied to all forms in the present subjunctive."
    },
    {
        "type": "table-pronoun",
        "label": ["tener", "present subj."],
        "headers": false,
        "cells": [
            "ten**g**a",   "ten**g**amos",
            "ten**g**as",  "ten**g**áis",
            "ten**g**a",   "ten**g**an"
        ]
    },
    {
        "type": "table-pronoun",
        "label": ["conducir", "present subj."],
        "headers": false,
        "cells": [
            "conduzca",  "conduzcamos",
            "conduzcas", "conduzcáis",
            "conduzca",  "conduzcan"
        ]
    },

    { "type": "break" },

    {
        "type": "text",
        "content": "Stem changes exist in the present subjunctive:"
    },
    {
        "type": "list",
        "items": [
            "e→ie and u→ue follow normal stress rules.",
            "e→i occurs regardless of stress.",
            "o→ue exists, but is always weakened (o→u) when unstressed."
        ]
    },
    {
        "type": "table-pronoun",
        "label": ["dormir", "present subj."],
        "headers": false,
        "cells": [
            "__d**ue**r__ma",   "dur__ma__mos",
            "__d**ue**r__mas",  "dur__má__is",
            "__d**ue**r__ma",   "__d**ue**r__man"
        ]
    },

    { "type": "break" },

    {
        "type": "text",
        "content": "There is also a series of six fully irregular present subjunctive verbs:"
    },
    {
        "type": "table-content",
        "rows": [
            ["Dar",   "dé, dés, dé, demos, deis, den"],
            ["Ir",    "vaya, vayas, vaya, vayamos, vayáis, vayan"],
            ["Ser",   "sea, seas, sea, seamos, seáis, sean"],
            ["Haber", "haya, hayas, haya, hayamos, hayáis, hayan"],
            ["Estar", "esté, estés, esté, estemos, estéis, estén"],
            ["Saber", "sepa, sepas, sepa, sepamos, sepáis, sepan"]
        ]
    }
];
