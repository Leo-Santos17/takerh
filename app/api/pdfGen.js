const puppeteer = require('puppeteer-core');
const chromium = require('@sparticuz/chromium')
const fs = require('fs').promises;
const ejs = require('ejs')
const config = require('../config/config')


async function pdfGen(filename, session)
{
    let browser;

    const launchOptions = isLocal
      ? {
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
          headless: true,
        }
      : {
          args: [...chromium.args, '--hide-scrollbars', '--disable-web-security'],
          defaultViewport: chromium.defaultViewport,
          executablePath: await chromium.executablePath(),
          headless: chromium.headless,
          ignoreHTTPSErrors: true,
        };
    
    browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // Carrega o template HTML
    let html = await fs.readFile('app/views/templates/'+filename+'.ejs', config.pdf.ENCRYPT_TYPE);
    const template = ejs.render(html, {session:session})
    await page.setContent(template, { waitUntil: config.pdf.LOAD_PAGE });

    const pdf = await page.pdf({ format: config.pdf.PAPER_SIZE, printBackground: true });
    await browser.close();
    
    return pdf;
}

module.exports = pdfGen