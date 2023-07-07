# RevoU-FSSE-2023H2 _ Alifah Syamsul _ W4 Intermediate Assignment _ Frontend Infra

This repository contains the codebase for the `stormsky23.site` website, which was created as part of the intermediate assignment for the 4th week of RevoU Full-stack Software Engineering program in 2023H2. Here, you will find details of how the website was set up, deployed, and how it's currently managed. The website is accessible at [https://stormsky23.site](https://stormsky23.site) or [https://www.stormsky23.site](https://www.stormsky23.site).

## Domain Purchase and Setup

The domain `stormsky23.site` was bought from an Indonesian registrar called [Niagahoster](https://www.niagahoster.co.id/).

![Bought domain at Niagahoster](https://github.com/RevoU-FSSE-2/week-4-alifah_syamsul/blob/main/screenshots/1_buy-domain-at-niagahoster.png)  
![Paid & setup the domain at Niagahoster](https://github.com/RevoU-FSSE-2/week-4-alifah_syamsul/blob/main/screenshots/2_pay-domain-at-niagahoster.png)

## Development and Deployment

The website was developed using Visual Studio Code and the changes were committed from VS Code to this GitHub repository.

![Committed the code to Github from VS Code](https://github.com/RevoU-FSSE-2/week-4-alifah_syamsul/blob/main/screenshots/3_committing-changes-to-github-from-vscode.png)

Deployment was done via [Netlify](https://www.netlify.com/). To achieve this, I signed up to Netlify using my GitHub account, automatically connecting my GitHub to Netlify.

![Connected Github with Netlify](https://github.com/RevoU-FSSE-2/week-4-alifah_syamsul/blob/main/screenshots/4_configured-github-to-netlify.png)  
![Configured Github with Netlify (2)](https://github.com/RevoU-FSSE-2/week-4-alifah_syamsul/blob/main/screenshots/5_configured-github-to-netlify-2.png)

After the connection was established, I selected this repository for deployment.

![Deployed to Netlify](https://github.com/RevoU-FSSE-2/week-4-alifah_syamsul/blob/main/screenshots/6_netlify-domain-management.png)

## DNS Management

I used [Cloudflare's](https://www.cloudflare.com/) DNS to accelerate and secure the website. To accomplish this, the website's nameservers were pointed to Cloudflare's.

![Cloudflare's DNS management](https://github.com/RevoU-FSSE-2/week-4-alifah_syamsul/blob/main/screenshots/7_cloudflare-dns.png)  
![Cloudflare's DNS setup](https://github.com/RevoU-FSSE-2/week-4-alifah_syamsul/blob/main/screenshots/8_cloudflare-dns-package.png)

In Cloudflare's DNS Management, I added the DNS records containing the Netlify address of the website.

![Cloudflare DNS Management](https://github.com/RevoU-FSSE-2/week-4-alifah_syamsul/blob/main/screenshots/9_cloudflare-nameserver-instructions.png)  
![Connected Cloudflare to Netlify](https://github.com/RevoU-FSSE-2/week-4-alifah_syamsul/blob/main/screenshots/10_connected-cloudflare-to-netlify.png)

This setup ensures that when the custom domain (`stormsky23.site`) is accessed, the website's visitors are directed by Cloudflare to the website deployed on Netlify.

![Setting up Cloudflare's DNS contents to Netlify](https://github.com/RevoU-FSSE-2/week-4-alifah_syamsul/blob/main/screenshots/11_cloudflare-connected-with-netlify.png)

##  Final result

![Website can be accessed from stormsky23.site](https://github.com/RevoU-FSSE-2/week-4-alifah_syamsul/blob/main/screenshots/12_final-result.png)
