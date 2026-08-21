import { chromium } from "../../node_modules/playwright/index.mjs";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const output = path.resolve("../作业/关卡4-网站截图");
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true });
const desktop = await browser.newPage({ viewport: { width: 1440, height: 1050 }, deviceScaleFactor: 1 });
const routes = [
  ["首页", "/"],
  ["导航页", "/guides"],
  ["内页-controls", "/controls"],
];
const checks = [];
for (const [name, route] of routes) {
  await desktop.goto(`http://localhost:3000${route}`, { waitUntil: "networkidle" });
  const result = await desktop.evaluate(() => ({
    title: document.title,
    description: document.querySelector('meta[name="description"]')?.getAttribute("content") || "",
    h1: [...document.querySelectorAll("h1")].map((el) => el.textContent?.trim()),
    h2Count: document.querySelectorAll("h2").length,
    horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
  }));
  checks.push({ name, route, ...result });
  await desktop.screenshot({ path: path.join(output, `${name}.png`), fullPage: true });
}
const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
await mobile.goto("http://localhost:3000/", { waitUntil: "networkidle" });
checks.push({
  name: "手机端首页",
  route: "/",
  horizontalOverflow: await mobile.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth),
});
await mobile.screenshot({ path: path.join(output, "手机端首页.png"), fullPage: true });
await browser.close();
console.log(JSON.stringify(checks, null, 2));
