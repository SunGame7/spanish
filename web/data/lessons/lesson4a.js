// Lesson 4a – Present Indicative: Regular Conjugation
// Edit this file to update lesson content.
// See js/lesson-engine.js for all supported node types and options.

const LESSON_DATA = [
    {
        "type": "text",
        "content": "Spanish conjugations vary by pronoun and also depend on the infinitive form of the verb."
    },
    {
        "type": "table-pronoun",
        "label": "-ar verbs",
        "cols2plus": false,
        "cells": ["-o", "-amos", "-as, -ás", "-áis", "-a", "-an"]
    },
    {
        "type": "table-pronoun",
        "label": "-er/-ir verbs",
        "cols2plus": false,
        "cells": ["-o", "-emos/imos", "-es, -és/ís", "-éis/ís", "-e", "-en"]
    },
    {
        "type": "list",
        "items": [
            "*second person singular will always show tú then vos, if there is a discrepancy",
            "* third person includes usted/ustedes",
            "Only vos, vosotros, and nosotros have distinct -ir endings. Vos and vosotros are the same for -ir verbs."
        ]
    },

    { "type": "break" },

    {
        "type": "check",
        "question": "What ending does the yo form always take in the present indicative, for regular verbs?",
        "answer": "**-o** — e.g. hablo, como, vivo."
    }
];
