# GitHub Readme to HTML Static Site

NPM module to convert GitHub markdown to HTML with GitHub-like styling and static assets. Output is ready to serve via static file hosting like Netlify with a push of a button.

### Install

```
npm install github-readme-to-html
```

### Run

```
npx github-readme-to-html [readme file] [output page title] [assets dir]
  readme file defaults to ./README.md
  output page title defaults to 'Read Me'
  assets dir defaults to ./assets
```

### Output

All output goes to ./dist

```
- dist/
  - index.html
  - assets/
    - .
    - .
    - .
```

Input: [ORIGINAL.md](ORIGINAL.md)

Output: https://github-readme-to-html.netlify.app/

---

This project is based on https://github.com/KrauseFx/markdown-to-html-github-style
