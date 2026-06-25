const fs = require('fs');
const path = require('path');

const mdPath = path.join(__dirname, 'Enneagram_Questionnaire_By_Type.md');
const templatePath = path.join(__dirname, 'app_template.js');
const outputPath = path.join(__dirname, 'app.js');

try {
  const mdContent = fs.readFileSync(mdPath, 'utf8');
  let templateContent = fs.readFileSync(templatePath, 'utf8');

  // Replace /* __MARKDOWN_CONTENT__ */ with stringified mdContent
  templateContent = templateContent.replace('/* __MARKDOWN_CONTENT__ */', JSON.stringify(mdContent));

  fs.writeFileSync(outputPath, templateContent, 'utf8');
  console.log('Successfully generated app.js from template with embedded Markdown fallback!');
} catch (err) {
  console.error('Error generating app.js:', err);
  process.exit(1);
}
