# Google Ads Transparency Center & Competitor Ad Pixel Spend Spy API

[![Run on Apify Cloud](https://img.shields.io/badge/Apify_Cloud-Run_Free_($5%2Fmo_Credit)-10b981?style=for-the-badge&logo=apify)](https://apify.com/lucacelli/google-ads-transparency-ad-spy-scraper)
[![34-Tool MCP Server](https://img.shields.io/badge/Claude_%26_Cursor_MCP-34_B2B_Tools-6366f1?style=for-the-badge)](https://github.com/ocakciomursel-pixel/lucacelli-b2b-mcp-server)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](./LICENSE)

Audit competitor domains for Google Ads Transparency URLs, Google Ads Conversion IDs (AW-), GTM tags, Meta/LinkedIn/TikTok pixels, ads.txt SSPs & marketing contacts ($0.75/1k advertisers).

- **Run Directly on Apify Store:** [https://apify.com/lucacelli/google-ads-transparency-ad-spy-scraper](https://apify.com/lucacelli/google-ads-transparency-ad-spy-scraper)
- **Browser Cloud Playground & CSV Exporter:** [https://ocakciomursel-pixel.github.io/lucacelli-b2b-mcp-server/](https://ocakciomursel-pixel.github.io/lucacelli-b2b-mcp-server/)
- **Clay.com 25-Column HTTP API Waterfall Pack (`$9`):** [Instant Download](https://buy.polar.sh/polar_cl_lDIkQ1BPDRI7qCNwAxGz8U0HlRs2higwma1EL1EYP5C)
- **Full B2B Outbound Agency Pro Vault — Clay + 7x Chained n8n + Python SDK (`$19`):** [Unlock Full Pro Vault](https://buy.polar.sh/polar_cl_j0IOeyioFqMjcNZRqTo0Cqk6HGslU1yArpHUV47NP1j)

---

## 1. Run via Zero-Install CLI or Node.js

Get your free API token (`$5.00/month` free compute credit included — ~6,000+ free leads/month) at [console.apify.com/settings/integrations](https://console.apify.com/settings/integrations):

```bash
export APIFY_TOKEN="apify_api_YOUR_TOKEN"
node index.mjs
```

## 2. Connect to Claude Desktop, Cursor & Windsurf (MCP)

```json
{
  "mcpServers": {
    "lucacelli-b2b": {
      "command": "npx",
      "args": ["-y", "github:ocakciomursel-pixel/lucacelli-b2b-mcp-server"],
      "env": {
        "APIFY_TOKEN": "apify_api_YOUR_TOKEN"
      }
    }
  }
}
```

## 3. Clay.com HTTP API Enrichment Column

- **Method:** `POST`
- **Endpoint:** `https://api.apify.com/v2/acts/lucacelli~google-ads-transparency-ad-spy-scraper/run-sync-get-dataset-items?token=YOUR_APIFY_TOKEN`
- **Body:**
```json
{
  "domains": [
    "monday.com",
    "clickup.com",
    "pipedrive.com"
  ],
  "maxItems": 15
}
```
