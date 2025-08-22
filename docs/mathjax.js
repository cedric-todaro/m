MathJax = {
  loader: {
    load: [
      "[tex]/autoload",
      "[tex]/physics",
      "[tex]/mathtools",
      "[tex]/ams",
      "[tex]/cases",
      "[tex]/textmacros",
    ],
  },
  tex: {
    packages: [
      "autoload",
      "base",
      "cases",
      "physics",
      "ams",
      "mathtools",
      "textmacros",
      "newcommand",
    ], // extensions to use
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
    processEscapes: true, // use \$ to produce a literal dollar sign
    processEnvironments: true, // process \begin{xxx}...\end{xxx} outside math mode
  },
  startup: {
    ready() {
      MathJax.startup.defaultReady();
      const { STATE } = MathJax._.core.MathItem;
      MathJax.tex2mml(String.raw`
        \let\nc\newcommand
        \let\rnc\newcommand
        \let\le\leqslant
        \let\ge\geqslant
        \let\cbox\colorbox
        \nc{\N}{\mathbb{N}}
        \nc{\Z}{\mathbb{Z}}
        \nc{\D}{\mathbb{D}}
        \nc{\Q}{\mathbb{Q}}
        \nc{\R}{\mathbb{R}}
        \nc{\C}{\mathbb{C}}
        \nc{\pa}[1]{\left(#1\right)}
        \rnc{\iff}{\Leftrightarrow}
      `);
    },
  },
  output: {
    font: "mathjax-schola",
  },
};

(function () {
  var script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/mathjax@4/tex-svg.js";
  script.defer = true;
  document.head.appendChild(script);
})();
