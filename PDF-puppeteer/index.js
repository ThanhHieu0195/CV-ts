const puppeteer = require("puppeteer");
const path = require("path");
const DELTA = 0.27;
(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-gpu",
        "--hide-scrollbars",
        "--disable-web-security",
      ],
    });
    console.info("start save PDF");

    const page = await browser.newPage();
    const userId = "tran-cao-thanh-hieu-02";

    await page.goto(`http://localhost:3000/profiles/${userId}`);
    await page.waitForTimeout(5000);
    await page.screenshot({
      path: path.join(__dirname, "..", "public", "imgs", userId + ".png"),
    });
    await page.pdf({
      printBackground: true,
      margin: {
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
      },
      path: path.join(__dirname, "..", "public", "pdf", userId + ".pdf"),
    });
    await browser.close();
    console.info("done!!");
  } catch (error) {
    console.error(error);
  }
})();
