import puppeteer from "puppeteer";
import { env } from "../../../next.config";

export default async function handler(req, res) {
  const data = req.query.data;
  const params = data
    .replace(/\+/g, "%2B")
    .replace(/-/g, "%2D")
    .replace(/\*/g, "%2A")
    .replace(/%/g, "%25")
    .replace(/\//g, "%2F");

  const browser = await puppeteer.launch({
    headless: "new",
  });

  const page = await browser.newPage();

  const website_url = `${process.env.NEXT_PUBLIC_SITE_URL}/?data=${params}`;

  console.log(website_url);

  await page.goto(website_url);

  await page.waitForSelector(".react-flow", {
    visible: true,
  });

  await page.emulateMediaType("screen");

  await page.addStyleTag({
    content:
      ".controls, #player-controls, #blocks-bar-container, .navbar, #variables-manager { display: none}",
  });

  const pdf = await page.pdf({
    path: "pdfs/crazy-blocks.pdf",
    margin: { top: "100px", right: "50px", bottom: "100px", left: "50px" },
    printBackground: true,
    format: "A4",
  });

  await browser.close();
  res.send(pdf);
}
