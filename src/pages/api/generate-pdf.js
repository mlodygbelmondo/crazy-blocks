import puppeteer from "puppeteer";
import { env } from "../../../next.config";

export default async function handler(req, res) {
  const browser = await puppeteer.launch({
    headless: "new",
  });

  const page = await browser.newPage();

  const website_url = `${env.NEXT_PUBLIC_SITE_URL}/pdf`;

  await page.goto(website_url, { waitUntil: "networkidle0" });

  await page.emulateMediaType("screen");

  await page.addStyleTag({
    content: ".controls, #blocks-bar-container, .navbar { display: none}",
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
