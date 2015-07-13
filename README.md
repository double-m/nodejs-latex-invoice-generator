# nodejs-latex-invoice-generator

Generate invoices editing `values.def` and executing

```
$ npm install
$ node lib/index.js values.def
```

Note: this model is customized upon the italian *regime dei minimi*, year 2015.

## Prerequisites

The following commands must be globally available: `pdflatex`, `node`, `npm`.

## TODO

- `tmp-static-info.def` -> `invoice.pdf` (no calculations via LaTeX)
- JS static object -> `invoice.pdf`
- `values.json` -> JS static object -> `invoice.pdf`
- new tree structure to be used to store the invoices
- automatic invoice number
