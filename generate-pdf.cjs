const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF() {
    let browser;
    try {
        console.log('Launching browser...');
        browser = await puppeteer.launch({
            headless: 'new'
        });
        const page = await browser.newPage();

        // Try multiple common Vite ports
        const ports = [5173, 5174, 5175, 5176, 5177, 5178];
        let success = false;

        for (const port of ports) {
            try {
                console.log(`Trying http://localhost:${port}/aman_kumar.html...`);
                await page.goto(`http://localhost:${port}/aman_kumar.html`, {
                    waitUntil: 'networkidle2',
                    timeout: 5000 // Short timeout for checking
                });
                success = true;
                break;
            } catch (e) {
                continue;
            }
        }

        if (!success) {
            throw new Error('Could not connect to dev server on any common port. Please ensure "npm run dev" is running.');
        }

        console.log('Generating PDF...');
        await page.pdf({
            path: path.join(__dirname, 'public', 'aman_kumar.pdf'),
            format: 'A4',
            printBackground: true,
            margin: {
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px'
            }
        });

        console.log('PDF successully generated at public/aman_kumar.pdf');
    } catch (error) {
        console.error('Error generating PDF:', error);
        process.exit(1);
    } finally {
        if (browser) await browser.close();
    }
}

generatePDF();
