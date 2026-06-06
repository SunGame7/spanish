// Lesson 6 – Preterite Tense
// Edit this file to update lesson content.
// See js/lesson-engine.js for all supported node types and options.

const LESSON_DATA = [
    {
        "type": "text",
        "content": "The **preterite** describes completed actions or events with a clear beginning and end in the past."
    },
    {
        "type": "text",
        "content": "**Regular endings — -ar verbs**"
    },
    {
        "type": "table-pronoun",
        "cells": ["-é", "-amos", "-aste", "-asteis", "-ó", "-aron"]
    },
    {
        "type": "text",
        "content": "**Regular endings — -er / -ir verbs**"
    },
    {
        "type": "table-pronoun",
        "cells": ["-í", "-imos", "-iste", "-isteis", "-ió", "-ieron"]
    },

    { "type": "break" },

    {
        "type": "text",
        "content": "The unaccented endings are all two syllables. This prevents stress from falling on the first syllable, so the normal **e→ie**, **o→ue**, **u→ue**, and **e→i** stem changes do **not** occur in the preterite."
    },
    {
        "type": "text",
        "content": "However, when the **i** in the ending is followed by a vowel (3rd person), **ŏ**, **ŭ**, **ě**, and **ĭ** stems are weakened: o→u and e→i."
    },
    {
        "type": "list",
        "items": [
            "dormir → dur**mió**, dur**mieron**",
            "sentir → sin**tió**, sin**tieron**",
            "pedir → pid**ió**, pid**ieron**"
        ]
    },

    { "type": "break" },

    {
        "type": "text",
        "content": "There are also **irregular preterite stems** with a fixed set of endings."
    },
    {
        "type": "table-content",
        "rows": [
            ["tener → tuv-",  "saber → sup-"],
            ["estar → estuv-","querer → quis-"],
            ["andar → anduv-","poder → pud-"],
            ["hacer → hic-",  "poner → pus-"],
            ["decir → dij-",  "venir → vin-"],
            ["traer → traj-", ""]
        ]
    },
    {
        "type": "text",
        "content": "**Endings for irregular stems**"
    },
    {
        "type": "table-pronoun",
        "cells": ["-e", "-imos", "-iste", "-isteis", "-o", "-ieron"]
    },
    {
        "type": "text",
        "content": "Note: ~~hico~~ → **hizo** is the only spelling change."
    },

    { "type": "break" },

    {
        "type": "text",
        "content": "Three verbs have fully arbitrary preterite forms:"
    },
    {
        "type": "table-content",
        "rows": [
            ["ir / ser", "fui, fuiste, fue, fuimos, fuisteis, fueron"],
            ["ver",      "vi, viste, vio, vimos, visteis, vieron"],
            ["dar",      "di, diste, dio, dimos, disteis, dieron"]
        ]
    },

    { "type": "break" },

    {
        "type": "check",
        "question": "Why don't stem-changing verbs change in most preterite forms?",
        "answer": "The unaccented endings are two syllables, which prevents stress from landing on the stem vowel — so there is no trigger for the change."
    },
    {
        "type": "check",
        "question": "Which preterite forms DO trigger the stem weakening (e→i, o→u) for -ir stem-changing verbs?",
        "answer": "Only the 3rd person forms: **él/ella/usted** (-ió) and **ellos/ellas/ustedes** (-ieron) — because the ending begins with a vowel."
    }
];
