// Lesson 1 – Subjects & Pronouns
// Edit this file to update lesson content.
// See js/lesson-engine.js for all supported node types and options.

const LESSON_DATA = [
    {
        "type": "text",
        "content": "A sentence tells part of a story. Each clause has a **subject**, and a **predicate**. A subject falls into one of these categories:"
    },
    {
        "type": "list",
        "items": [
            "**1st** — The speaker",
            "**2nd** — Who the speaker is talking to",
            "**3rd** — Someone / something else"
        ]
    },
    {
        "type": "text",
        "content": "We also consider **plurality**: whether they are singular or plural."
    },

    { "type": "break" },

    {
        "type": "table-pronoun",
        "label": "Pronouns for 1+ men are as follows:",
        "cols2plus": true,
        "cells": ["yo", "nosotros", "tú, vos", "vosotros", "usted", "ustedes", "él", "ellos"]
    },
    {
        "type": "text",
        "content": "Fully female individuals/groups use the following:"
    },
    {
        "type": "table-pronoun",
        "cols2plus": true,
        "cells": ["yo", "nosotras", "tú, vos", "vosotras", "usted", "ustedes", "ella", "ellas"]
    },
    {
        "type": "text",
        "content": "Note the \"2nd+\" category: __Ud.__ and __Uds.__ are used for unfamiliarity/formality. These follow the exact same rules as their 3rd person counterparts, to show respect."
    },

    { "type": "break" },

    {
        "type": "check",
        "question": "Which pronoun would you use to address a group of women you know well?",
        "answer": "**Vosotras** (Spain) or **ustedes** in Latin America, since vosotros/vosotras is not commonly used there."
    }
];
