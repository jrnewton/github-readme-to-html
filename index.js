const showdown = require('showdown');
const fs = require('fs-extra');
const readmeFile = process.argv[2] || 'README.md';
const pageTitle = process.argv[3] || 'Read Me';
const outputFile = process.argv[4] || 'index.html';

fs.readFile(process.cwd() + '/' + readmeFile, function (err, data) {
  if (err) {
    throw err;
  }
  const text = data.toString();

  converter = new showdown.Converter({
    ghCompatibleHeaderId: true,
    simpleLineBreaks: true,
    ghMentions: true,
    tables: true,
    emoji: true
  });

  converter.setFlavor('github');

  const preContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${pageTitle}</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="assets/style.css">
      </head>
      <body>
        <main>
    `;

  const postContent = `
        </main>
      </body>
    </html>`;

  html = preContent + converter.makeHtml(text) + postContent;

  fs.ensureDirSync(process.cwd() + '/dist');

  const filePath = process.cwd() + '/dist/' + outputFile;
  fs.writeFile(filePath, html, { flag: 'w' }, function (err) {
    if (err) {
      console.log('Failed, could not open', filePath, err);
    } else {
      console.log('Done, saved to ' + filePath);

      fs.copySync(process.cwd() + '/assets', process.cwd() + '/dist/assets');
    }
  });
});
