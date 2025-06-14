PR.registerLangHandler(PR.createSimpleLexer([
    [
        "pln",
        /^[\t\n\f\r ]+/,
        null,
        " \t\r\n"
    ]
], [
    [
        "str",
        /^"(?:[^\n\f\r"\\]|\\(?:\r\n?|\n|\f)|\\[\S\s])*"/,
        null
    ],
    [
        "str",
        /^'(?:[^\n\f\r'\\]|\\(?:\r\n?|\n|\f)|\\[\S\s])*'/,
        null
    ],
    [
        "lang-css-str",
        /^url\(([^"')]*)\)/i
    ],
    [
        "kwd",
        /^(?:url|rgb|!important|@import|@page|@media|@charset|inherit)(?=[^\w-]|$)/i,
        null
    ],
    [
        "lang-css-kw",
        /^(-?(?:[_a-z]|\\[\da-f]+ ?)(?:[\w-]|\\\\[\da-f]+ ?)*)\s*:/i
    ],
    [
        "com",
        /^\/\*[^*]*\*+(?:[^*/][^*]*\*+)*\//
    ],
    [
        "com",
        /^(?:<\!--|--\>)/
    ],
    [
        "lit",
        /^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i
    ],
    [
        "lit",
        /^#[\da-f]{3,6}/i
    ],
    [
        "pln",
        /^-?(?:[_a-z]|\\[\da-f]+ ?)(?:[\w-]|\\\\[\da-f]+ ?)*/i
    ],
    [
        "pun",
        /^[^\s\w"']+/
    ]
]), [
    "css"
]);
PR.registerLangHandler(PR.createSimpleLexer([], [
    [
        "kwd",
        /^-?(?:[_a-z]|\\[\da-f]+ ?)(?:[\w-]|\\\\[\da-f]+ ?)*/i
    ]
]), [
    "css-kw"
]);
PR.registerLangHandler(PR.createSimpleLexer([], [
    [
        "str",
        /^[^"')]+/
    ]
]), [
    "css-str"
]);

//# sourceMappingURL=map.js.9e57885a.js.map
