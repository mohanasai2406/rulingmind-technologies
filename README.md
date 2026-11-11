# rm-technologies-web

rulingmindtech.com: Next.js 14 (App Router), TypeScript, Tailwind CSS, AWS Amplify

    npm install
    cp .env.example .env.local
    npm run dev     # http://localhost:3000

## Sitemap (from the wireframe)
/ , /about , /services (+ 14 /[slug]) , /industries (+ 9) , /solutions (+ 10) , /our-work (+ /[slug]) , /insights (+ /[slug]) , /careers , /contact , /sitemap.xml , /robots.txt
See docs/ARCHITECTURE.md for the platform plan and roadmap.

Journey: Home > Services > Service page > "Get a Consultation" > Contact form (service pre-selected).

## Content
All copy is in `lib/content.ts`. Case studies, articles and leadership are SAMPLE content: replace before launch.
Company details (email, phone, address) are in `contactInfo`.

## Contact form to CRM
`POST /api/contact` validates, saves to DynamoDB (backup), upserts the contact in HubSpot (`lib/crm.ts`), then emails the team via SES.
1. HubSpot: Settings > Integrations > Private Apps; create an app with scope `crm.objects.contacts.write`; put the token in `HUBSPOT_TOKEN`.
2. DynamoDB table:

        aws dynamodb create-table --table-name rm-contact-enquiries \
          --attribute-definitions AttributeName=id,AttributeType=S \
          --key-schema AttributeName=id,KeyType=HASH \
          --billing-mode PAY_PER_REQUEST --region ap-south-1

3. SES: verify `CONTACT_FROM` (and `CONTACT_TO` while in sandbox).
4. IAM: role from `iam-policy.json` attached as the Amplify compute role.
5. Amplify env vars: `APP_REGION`, `CONTACT_TABLE`, `CONTACT_FROM`, `CONTACT_TO`, `HUBSPOT_TOKEN`.
To use another CRM (Zoho, Salesforce), replace the body of `pushLeadToCrm` in `lib/crm.ts`.
