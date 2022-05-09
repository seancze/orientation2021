# SUTD Orientation 2021 Website

This repository houses the frontend codebase to serve the website for SUTD Orientation 2021. For the 2020 site, [check out the site done by @jamestiotio](https://github.com/jamestiotio/orientation2020).

[![Netlify Status](https://api.netlify.com/api/v1/badges/74349fa5-f0ff-40ce-a63e-603d8c3c4b72/deploy-status)](https://app.netlify.com/sites/orientation2021/deploys)

## Technologies Used

- ReactJS
- TailwindCSS

## Setup

- Project setup: `npm install`
- Launch a local site: `npm start`

### Customize configuration

Change the DNS record of `sutd.edu.sg` to the corresponding Netlify's subdomain:

| DNS Type     | From              | To                            | Expire |
| ------------ | ----------------- | ----------------------------- | ------ |
| CNAME Record | `orientation`     | `orientation2021.netlify.app` | 86400  |
| CNAME Record | `www.orientation` | `orientation2021.netlify.app` | 86400  |

## Credits

- SUTD Orientation 2021 Creative Media Sub-Committee Folks:
  - Acqquilaa - Graphic designer
  - [Chester](https://github.com/chesnutcase) - Telegram bot developer
  - Jennifer - Graphic designer | Social media lead
  - Jeremy - T-shirt designer
  - Jonathan - Photographer
  - Julia - T-shirt designer
  - [Long Tran](https://github.com/TNBL265) - Telegram bot developer
  - Nathan - Story writer
  - Neha - Productions I/C | Story writer
- Lee Sea Ming, Crystal Qua, and Suharti Abdul Kadir from the Office of Student Life
- SUTD's IT department for helping out with the DNS records setup
- The rest of the SUTD Orientation 2021 team
