# RulingMindTech Platform: Architecture and Roadmap

## Decisions (Phase 1)
- **App:** Next.js 14 (App Router) + TypeScript + Tailwind CSS, Framer Motion, Lucide icons.
- **Backend:** Next.js Route Handlers (REST) in the same repo, one deployable on AWS Amplify. Chosen over NestJS to keep one build and one deploy. If load or team size grows, `lib/services/*` can move into a NestJS service without changing the UI.
- **Database:** PostgreSQL on Amazon RDS (private subnets) via Prisma. *Current contact API uses DynamoDB + SES + HubSpot; it moves to Prisma in Phase 6.*
- **Auth:** Amazon Cognito (candidates and admins); role-based access (admin, editor, recruiter, candidate).
- **Files:** resumes in a private S3 bucket (PDF/DOCX, size limit, pre-signed URLs, virus scan hook).
- **Email:** Amazon SES. **Monitoring:** CloudWatch. **CI/CD:** GitHub Actions to Amplify (dev, staging, production).
- **No AWS resources are created by this repo until you approve.**

## Request flow
User > DNS > AWS Amplify (Next.js) > Route Handlers > Prisma > RDS PostgreSQL (private)
Route Handlers > S3 (resumes) | Cognito (auth) | SES (email) | CloudWatch (logs/metrics)
GitHub > Actions (lint, test, build) > Amplify staging > manual approval > production

## Folder structure
    app/                 routes (pages, API, sitemap, robots)
      services|industries|solutions/[slug]   data-driven detail pages
      careers, contact, insights, our-work, about
      api/                REST endpoints (contact now; jobs, applications, admin later)
      admin/              (Phase 7) dashboard, RBAC-protected
    components/          Header (mega menu, search), Footer, ui, DetailPage, Reveal, Icon
    lib/                 content (sample catalog), search index, crm, validate, aws
    prisma/              (Phase 6) schema + migrations
    docs/                architecture, API, SOPs, test report
    .github/workflows/   (Phase 9) CI/CD

## Design system (Phase 2)
Navy `#081725`, accent blue `#1f6bff`, teal `#12b5b0`, soft `#f3f6f9`. Manrope (display) + DM Sans (body).
Utility classes in `app/globals.css` (`wrap`, `block`, `btn`, `btn-outline`, `eyebrow`, `h1`, `h2`, `split`, `more`).
Shared components: `PageHero`, `Intro`, `Cards`, `Photo`, `Cta`, `Icon`, `Reveal`.

## Roadmap
| Phase | Scope | Status |
|---|---|---|
| 1 | Requirements, structure, decisions | Done (this doc) |
| 2 | Design system and branding | Done |
| 3 | Homepage, header (mega menu, search), footer | Done |
| 4 | About, Services (14), Industries (9), Solutions (10) | Pages generated from sample data; copy needs review |
| 5 | Careers portal and full Contact module | Basic versions only |
| 6 | Backend APIs + Prisma/PostgreSQL | Contact API only (DynamoDB) |
| 7 | Admin dashboard | Not started |
| 8 | Cognito auth, RBAC, rate limiting, audit log | Security headers only |
| 9 | AWS infrastructure, CI/CD, staging | Not started (needs approval) |
| 10 | Testing, optimisation, handover docs | Not started |

## Content rules
All case studies, articles, leadership and the testimonial are clearly marked sample content. No achievements, clients, awards or testimonials are invented.
