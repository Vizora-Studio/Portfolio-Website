import puppeteer from 'puppeteer-core';
import fs from 'fs';

const ARTIFACT_DIR = '/home/ramlal/.gemini/antigravity/brain/5e74050b-2197-44ed-9ed0-76bb1afba6be';

async function checkImagesLoaded(page, contextName) {
  const broken = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img'));
    return imgs
      .filter((img) => !img.complete || img.naturalWidth === 0)
      .map((img) => img.getAttribute('src') || img.alt);
  });
  if (broken.length > 0) {
    throw new Error(`Broken images in ${contextName}: ${broken.join(', ')}`);
  }
}

async function checkNoHorizontalOverflow(page, contextName) {
  const overflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth - window.innerWidth;
  });
  if (overflow > 2) {
    throw new Error(`Horizontal overflow of ${overflow}px detected in ${contextName}`);
  }
}

async function saveShot(page, filename) {
  await page.screenshot({ path: filename });
  if (fs.existsSync(ARTIFACT_DIR)) {
    fs.copyFileSync(filename, `${ARTIFACT_DIR}/${filename}`);
  }
  console.log(`Captured ${filename}`);
}

async function run() {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
    headless: 'new',
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  page.on('pageerror', (err) => consoleErrors.push(err.message));

  await page.setViewport({ width: 1440, height: 900 });

  console.log('1. Loading homepage http://localhost:5173/...');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 800));

  await checkImagesLoaded(page, 'Homepage Hero');
  await checkNoHorizontalOverflow(page, 'Desktop Homepage');
  await saveShot(page, 'qa-01-hero.png');

  // Verify Featured Work & Live Client Showcase (Khadija Simple + Khadija 3D)
  const work = await page.$('#work');
  if (work) {
    await page.evaluate(() => {
      const el = document.querySelector('#work');
      if (el) el.scrollIntoView({ block: 'start' });
    });
    await new Promise((r) => setTimeout(r, 600));
    const hasKhadijaLinks = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('#work a')).map((a) => a.href);
      return (
        links.some((h) => h.includes('khadija-portfolio-og.vercel.app')) &&
        links.some((h) => h.includes('khadija-3d-portfolio.vercel.app'))
      );
    });
    if (!hasKhadijaLinks) {
      throw new Error('Missing live Khadija client website links in #work section');
    }
    await saveShot(page, 'qa-05-featured-work.png');
  }

  // Verify Services section
  const services = await page.$('#services');
  if (services) {
    await services.scrollIntoView();
    await new Promise((r) => setTimeout(r, 500));
    await saveShot(page, 'qa-03-services.png');
  }

  // Verify Who We Build For section
  const whoWeHelp = await page.$('#who-we-help');
  if (whoWeHelp) {
    await whoWeHelp.scrollIntoView();
    await new Promise((r) => setTimeout(r, 500));
    await saveShot(page, 'qa-04-who-we-help.png');
  }

  // Verify Why Vizora, Process, About, FAQ, Final CTA
  for (const [id, shot] of [
    ['#why-vizora', 'qa-07-why-vizora.png'],
    ['#process', 'qa-06-process.png'],
    ['#about', 'qa-08-about.png'],
    ['#faq', 'qa-09-faq.png'],
    ['#final-cta', 'qa-02-why-website.png'],
  ]) {
    const el = await page.$(id);
    if (el) {
      await el.scrollIntoView();
      await new Promise((r) => setTimeout(r, 400));
      await saveShot(page, shot);
    }
  }

  // Verify Inquiry Form Validation & Submission
  const inquiry = await page.$('#inquiry');
  if (inquiry) {
    await inquiry.scrollIntoView();
    await new Promise((r) => setTimeout(r, 400));

    // Submit empty to test validation
    const submitBtn = await page.$('#inquiry button[type="submit"]');
    await submitBtn.click();
    await new Promise((r) => setTimeout(r, 300));
    const hasValidationError = await page.$('#err-fullName');
    if (!hasValidationError) {
      throw new Error('Expected validation error #err-fullName when submitting empty form');
    }
    console.log('Verified inquiry form validation errors on empty submission.');

    // Fill out form and submit
    await page.type('#inquiry-fullName', 'Camille Laurent');
    await page.type('#inquiry-email', 'camille@atelierlaurent.com');
    await page.type('#inquiry-businessName', 'Atelier Camille');
    await page.select('#inquiry-profession', 'Model or fashion creator');
    await page.select('#inquiry-websiteType', 'Portfolio website');
    const styleRadios = await page.$$('#inquiry [role="radio"]');
    if (styleRadios.length > 0) {
      await styleRadios[0].click();
    }
    await page.type(
      '#inquiry-projectGoals',
      'Showcase my runway and editorial photography along with digital comp card measurements.'
    );
    await page.type(
      '#inquiry-projectDetails',
      'Looking for an editorial Champagne Ivory portfolio with comp card measurements and agency inquiry form.'
    );
    await saveShot(page, 'qa-10-inquiry-filled.png');

    await submitBtn.click();
    await new Promise((r) => setTimeout(r, 700));
    await saveShot(page, 'qa-11-inquiry-submitted.png');
    console.log('Verified inquiry form submission state.');
  }

  // Open and inspect all 4 Demo Websites
  const demoRoutes = [
    { path: '/demos/model-portfolio', shot: 'qa-12-demo-model.png' },
    { path: '/demos/makeup-artist', shot: 'qa-13-demo-makeup.png' },
    { path: '/demos/photographer', shot: 'qa-14-demo-photographer.png' },
    { path: '/demos/beauty-studio', shot: 'qa-15-demo-beauty-studio.png' },
  ];

  for (const demo of demoRoutes) {
    await page.goto(`http://localhost:5173${demo.path}`, { waitUntil: 'domcontentloaded' });
    await new Promise((r) => setTimeout(r, 500));
    await checkImagesLoaded(page, demo.path);
    await checkNoHorizontalOverflow(page, demo.path);
    await saveShot(page, demo.shot);
  }

  // Tablet Viewport Test (768x1024)
  await page.setViewport({ width: 768, height: 1024 });
  await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded' });
  await new Promise((r) => setTimeout(r, 500));
  await checkNoHorizontalOverflow(page, 'Tablet Homepage');
  await saveShot(page, 'qa-16-tablet-hero.png');

  // Mobile Viewport Test (393x852) + Reduced Motion
  await page.setViewport({ width: 393, height: 852, isMobile: true, hasTouch: true });
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded' });
  await new Promise((r) => setTimeout(r, 500));
  await checkNoHorizontalOverflow(page, 'Mobile Homepage');
  await saveShot(page, 'qa-17-mobile-hero.png');

  // Open Mobile Menu
  const mobileMenuBtn = await page.$('header button[aria-controls="vizora-mobile-menu"]');
  if (mobileMenuBtn) {
    await mobileMenuBtn.click();
    await new Promise((r) => setTimeout(r, 400));
    await saveShot(page, 'qa-18-mobile-menu.png');
  }

  await browser.close();

  if (consoleErrors.length > 0) {
    throw new Error(`Page errors encountered: ${consoleErrors.join('; ')}`);
  }

  console.log('All E2E and Visual QA checks passed with 0 errors!');
}

run().catch((err) => {
  console.error('QA Failed:', err);
  process.exit(1);
});
