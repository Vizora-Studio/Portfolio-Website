import puppeteer from 'puppeteer-core';
import fs from 'fs';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
    headless: 'new',
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 950 });

  console.log('Navigating to http://localhost:5173...');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 1000));

  // 1. Hero
  await page.screenshot({ path: 'qa-01-hero.png' });
  console.log('Captured qa-01-hero.png');

  // 2. Vision Section
  const vision = await page.$('#vision');
  if (vision) {
    await vision.scrollIntoView();
    await new Promise((r) => setTimeout(r, 600));
    await page.screenshot({ path: 'qa-02-vision.png' });
    console.log('Captured qa-02-vision.png');
  }

  // 3. Explore Portfolios
  const explore = await page.$('#explore');
  if (explore) {
    await explore.scrollIntoView();
    await new Promise((r) => setTimeout(r, 600));
    await page.screenshot({ path: 'qa-03-gallery.png' });
    console.log('Captured qa-03-gallery.png');

    // Click on the first creator card to open creator modal
    const firstCard = await page.$('#explore .cursor-pointer');
    if (firstCard) {
      await firstCard.click();
      await new Promise((r) => setTimeout(r, 600));
      await page.screenshot({ path: 'qa-04-creator-modal.png' });
      console.log('Captured qa-04-creator-modal.png');

      // Close modal by pressing Escape
      await page.keyboard.press('Escape');
      await new Promise((r) => setTimeout(r, 400));
    }
  }

  // 4. How It Works
  const howItWorks = await page.$('#how-it-works');
  if (howItWorks) {
    await howItWorks.scrollIntoView();
    await new Promise((r) => setTimeout(r, 600));
    await page.screenshot({ path: 'qa-05-how-it-works.png' });
    console.log('Captured qa-05-how-it-works.png');
  }

  // 5. Bookings & Collaborations
  const collaborate = await page.$('#collaborate');
  if (collaborate) {
    await collaborate.scrollIntoView();
    await new Promise((r) => setTimeout(r, 600));
    await page.screenshot({ path: 'qa-06-collaborate.png' });
    console.log('Captured qa-06-collaborate.png');
  }

  // 6. Featured Work
  const featured = await page.$('#featured');
  if (featured) {
    await featured.scrollIntoView();
    await new Promise((r) => setTimeout(r, 600));
    await page.screenshot({ path: 'qa-07-featured.png' });
    console.log('Captured qa-07-featured.png');
  }

  // 7. Why Vizora & Final CTA
  const whyVizora = await page.$('#why-vizora');
  if (whyVizora) {
    await whyVizora.scrollIntoView();
    await new Promise((r) => setTimeout(r, 600));
    await page.screenshot({ path: 'qa-08-why-vizora.png' });
    console.log('Captured qa-08-why-vizora.png');
  }

  // 8. Open Booking Modal via button
  const getStartedBtn = await page.$('header button');
  if (getStartedBtn) {
    await getStartedBtn.click();
    await new Promise((r) => setTimeout(r, 600));
    await page.screenshot({ path: 'qa-09-booking-modal.png' });
    console.log('Captured qa-09-booking-modal.png');
    await page.keyboard.press('Escape');
    await new Promise((r) => setTimeout(r, 400));
  }

  // 8b. Open Talent Apply Modal via hero secondary button
  const heroJoinBtn = await page.$('#hero button:nth-of-type(2)');
  if (heroJoinBtn) {
    await heroJoinBtn.click();
    await new Promise((r) => setTimeout(r, 600));
    await page.screenshot({ path: 'qa-12-talent-apply-modal.png' });
    console.log('Captured qa-12-talent-apply-modal.png');
    await page.keyboard.press('Escape');
    await new Promise((r) => setTimeout(r, 400));
  }

  // 9. Mobile Viewport Test (iPhone 14 Pro: 393 x 852)
  await page.setViewport({ width: 393, height: 852, isMobile: true, hasTouch: true });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: 'qa-10-mobile-hero.png' });
  console.log('Captured qa-10-mobile-hero.png');

  // Open mobile drawer
  const mobileToggle = await page.$('header .lg\\:hidden button');
  if (mobileToggle) {
    await mobileToggle.click();
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: 'qa-11-mobile-drawer.png' });
    console.log('Captured qa-11-mobile-drawer.png');
  }

  await browser.close();

  // Copy screenshots to artifact directory
  const artifactDir = '/home/ramlal/.gemini/antigravity/brain/13c2a3ac-0917-4c35-abfc-d5354b31744e';
  const files = [
    'qa-01-hero.png',
    'qa-02-vision.png',
    'qa-03-gallery.png',
    'qa-04-creator-modal.png',
    'qa-05-how-it-works.png',
    'qa-06-collaborate.png',
    'qa-07-featured.png',
    'qa-08-why-vizora.png',
    'qa-09-booking-modal.png',
    'qa-10-mobile-hero.png',
    'qa-11-mobile-drawer.png',
    'qa-12-talent-apply-modal.png',
  ];

  for (const f of files) {
    if (fs.existsSync(f)) {
      fs.copyFileSync(f, `${artifactDir}/${f}`);
      console.log(`Copied ${f} to artifacts directory`);
    }
  }

  console.log('Visual QA complete!');
}

run().catch((err) => {
  console.error('Error during QA:', err);
  process.exit(1);
});
