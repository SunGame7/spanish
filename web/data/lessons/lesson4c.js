// Lesson 4c – Present Indicative: Stem-Changing Verbs
// Edit this file to update lesson content.
// See js/lesson-engine.js for all supported node types and options.

const LESSON_DATA = [
    {
        "type": "text",
        "content": "The **ŏ** character in latin makes the \"o\" sound when unstressed and the \"ue\" sound when stressed. We don't have this character in Spanish, but follow the principle (ex. dŏrmir → dormir)"
    },
    {
        "type": "table-pronoun",
        "label": ["dormir", "present ind."],
        "headers": false,
        "cells": [
            "__d**ue**r__mo",        "d**o**r__mi__mos",
            "__d**ue**r__mes, dorm__í__s", "d**o**r__mí__s",
            "__d**ue**r__me",       "__d**ue**r__men"
        ]
    },

    { "type": "break" },

    {
        "type": "text",
        "content": "The **ŭ** character is similar. It's only in jugar!\nUnstressed: u &nbsp;&nbsp;&nbsp; Stressed: ue"
    },
    {
        "type": "table-pronoun",
        "label": ["jugar", "present ind."],
        "headers": false,
        "cells": [
            "__j**ue**__go",              "j**u**__ga__mos",
            "__j**ue**__gas, jug__á__s",  "j**u**g__áis__",
            "__j**ue**__gan",             "__j**ue**__gan"
        ]
    },

    { "type": "break" },

    {
        "type": "text",
        "content": "The **ě** character is similar.\nUnstressed: e &nbsp;&nbsp;&nbsp; Stressed: ie"
    },
    {
        "type": "table-pronoun",
        "label": ["querer", "present ind."],
        "headers": false,
        "cells": [
            "__qu**ie**__ro",              "qu**e**r__e__mos",
            "__qu**ie**__res, quer__és__", "qu**e**r__é__is",
            "__qu**ie**__re",              "__qu**ie**__ren"
        ]
    },

    { "type": "break" },

    {
        "type": "text",
        "content": "The **ĭ** character in latin, and sometimes an overstressed **ě**, act similarly.\nUnstressed: e &nbsp;&nbsp;&nbsp; Stressed: i"
    },
    {
        "type": "table-pronoun",
        "label": ["pedir", "present ind."],
        "headers": false,
        "cells": [
            "__p**i**__do",              "p**e**__di__mos",
            "__p**i**__des, p**e**d__ís__",  "p**e**d__ís__",
            "__p**i**__de",              "__p**i**__den"
        ]
    },
    {
        "type": "text",
        "content": "When you hear a verb being conjugated, identify if it falls into any of these categories."
    },

    { "type": "break" },

    {
        "type": "check",
        "question": "For stem-changing verbs, which forms do NOT trigger the stressed vowel change?",
        "answer": "**Nosotros** and **vosotros** — these are unstressed, so the latin vowel stays in its unstressed form."
    }
];
