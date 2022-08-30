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
    const userId = "tran-cao-thanh-hieu-03";

    await page.goto(`http://localhost:3000/profiles/${userId}`);
    await page.waitForTimeout(5000);
    await page.screenshot({
      path: path.join(__dirname, "..", "public", "imgs", userId + ".png"),
    });

    // const pdfPath = path.join(
    //   __dirname,
    //   "..",
    //   "public",
    //   "pdf",
    //   userId + ".pdf"
    // );

    const pdfPath = path.join("/mnt/e", userId + ".pdf");
    let height = await page.evaluate(
      () => document.documentElement.offsetHeight
    );

    let width = await page.evaluate(() => document.documentElement.offsetWidth);

    console.log("Height", height);
    console.log("width", width);
    await page.addStyleTag({
      content: "@page { size: auto; }",
    });

    const actualWidth = width + 300;
    const actualHeight = height - 400;

    console.info("actualWidth", actualWidth);
    console.info("actualHeight", actualHeight);

    await page.pdf({
      printBackground: true,
      margin: {
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
      },
      path: pdfPath,
      width: actualWidth + "px",
      height: actualHeight + "px",
    });
    await browser.close();
    console.info("done!!");
  } catch (error) {
    console.error(error);
  }
})();
