#!/usr/bin/env node
/**
 * Zero-dependency Cloud Runner for lucacelli/google-ads-transparency-ad-spy-scraper
 * Free $5.00/mo API token: https://console.apify.com/settings/integrations
 */
const token = process.env.APIFY_TOKEN;
if (!token) {
  console.error('Set APIFY_TOKEN first -> https://console.apify.com/settings/integrations');
  process.exit(1);
}

const payload = {
  "domains": [
    "monday.com",
    "clickup.com",
    "pipedrive.com"
  ],
  "maxItems": 15
};

const res = await fetch(
  'https://api.apify.com/v2/acts/lucacelli~google-ads-transparency-ad-spy-scraper/run-sync-get-dataset-items?memory=256&timeout=120',
  {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }
);
const items = await res.json();
console.log(JSON.stringify(items, null, 2));
