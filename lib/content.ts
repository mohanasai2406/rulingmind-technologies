export type Status = "Available Now" | "Pilot" | "Planned";
export type Item = { num?: string; icon?: string; title: string; text: string; href?: string; badge?: Status };

export const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=85`;
// TODO: replace placeholders with approved company details
export const contactInfo = { email: "hello@rulingmindtech.com", phone: "+91 00000 00000", address: "Office address (add before launch)" };

export type Offering = { slug: string; title: string; group?: string; icon: string; summary: string; points: { heading: string; items: string[] }[] };

const svc = (slug: string, title: string, group: string, icon: string, summary: string, benefits: string[], tech: string[], uses: string[]): Offering =>
  ({ slug, title, group, icon, summary, points: [{ heading: "Benefits", items: benefits }, { heading: "Technologies", items: tech }, { heading: "Use cases", items: uses }] });
const ind = (slug: string, title: string, icon: string, summary: string, challenges: string[], solutions: string[], benefits: string[]): Offering =>
  ({ slug, title, icon, summary, points: [{ heading: "Industry challenges", items: challenges }, { heading: "Technology solutions", items: solutions }, { heading: "Business benefits", items: benefits }] });
const sol = (slug: string, title: string, icon: string, summary: string, deliver: string[], outcomes: string[]): Offering =>
  ({ slug, title, icon, summary, points: [{ heading: "What we deliver", items: deliver }, { heading: "Outcomes", items: outcomes }] });

const CI = "Cloud & Infrastructure", AD = "AI, Data & Software", SC = "Security, Consulting & Operations";
export const services: Offering[] = [
  svc("cloud-computing-infrastructure", "Cloud Computing & Infrastructure", CI, "Cloud", "Design, build and run secure, scalable cloud environments.", ["Scalable capacity on demand", "Lower operating cost", "Resilient by design"], ["Virtual networks", "Containers", "Serverless", "Infrastructure as code"], ["Data centre to cloud moves", "Multi-region resilience"]),
  svc("aws-cloud-services", "AWS Cloud Services", CI, "Server", "Architecture, migration and operations on Amazon Web Services.", ["Well-architected workloads", "Cost visibility and control", "Secure landing zones"], ["EC2, ECS and EKS", "Lambda", "RDS and DynamoDB", "S3, CloudFront and Cognito"], ["Migrating applications to AWS", "Serverless web platforms"]),
  svc("azure-google-cloud", "Azure & Google Cloud", CI, "Layers", "Multi-cloud design and delivery across Microsoft Azure and Google Cloud.", ["Avoid vendor lock-in", "The right service for each workload", "Unified governance"], ["Azure App Service and AKS", "Google Kubernetes Engine", "BigQuery", "Terraform"], ["Hybrid and multi-cloud estates", "Data platforms on Google Cloud"]),
  svc("devops-automation", "DevOps & Automation", CI, "Workflow", "Faster, safer delivery through CI/CD, automation and observability.", ["Shorter release cycles", "Fewer manual errors", "Faster recovery"], ["GitHub Actions", "Terraform", "Docker and Kubernetes", "CloudWatch and Grafana"], ["Pipeline modernisation", "Environment automation"]),
  svc("ai-machine-learning", "AI & Machine Learning", AD, "Bot", "Practical AI solutions grounded in your data and workflows.", ["Automate repetitive work", "Better decisions from data", "Human-in-the-loop safeguards"], ["Python", "LLM and retrieval pipelines", "Amazon Bedrock and SageMaker", "MLOps"], ["Support assistants", "Document processing"]),
  svc("software-development", "Software Development", AD, "Code2", "Custom software engineered for quality, security and maintainability.", ["Fit-for-purpose products", "Clean, tested code", "Predictable delivery"], ["TypeScript and Node.js", "Java and Python", "REST and GraphQL APIs", "PostgreSQL"], ["Internal business platforms", "API-first products"]),
  svc("web-mobile-development", "Web & Mobile Application Development", AD, "Smartphone", "Fast, accessible web and mobile experiences for customers and teams.", ["Great user experience", "One codebase where possible", "Accessible and performant"], ["Next.js and React", "React Native", "Tailwind CSS", "Progressive web apps"], ["Customer portals", "Field-service mobile apps"]),
  svc("data-analytics-bi", "Data Analytics & Business Intelligence", AD, "BarChart3", "Turn raw data into dashboards and decisions people trust.", ["Single source of truth", "Self-service reporting", "Faster insight"], ["ETL and ELT pipelines", "Amazon Redshift and Athena", "Power BI and QuickSight", "dbt"], ["Executive dashboards", "Operational reporting"]),
  svc("enterprise-application-development", "Enterprise Application Development", AD, "Building2", "Scalable line-of-business applications and integrations.", ["Streamlined processes", "Integrated systems", "Role-based security"], ["Microservices", "Event-driven architecture", "SSO and role-based access", "Workflow engines"], ["ERP and CRM extensions", "Workflow automation apps"]),
  svc("iot-digital-engineering", "IoT & Digital Engineering", AD, "Cpu", "Connected products and data pipelines from device to dashboard.", ["Real-time visibility", "Predictive maintenance potential", "Secure device fleets"], ["MQTT", "AWS IoT Core", "Edge computing", "Time-series data"], ["Asset monitoring", "Smart facilities"]),
  svc("cybersecurity", "Cybersecurity", SC, "ShieldCheck", "Security built into your people, platforms and processes.", ["Reduced risk", "Stronger access controls", "Audit-ready practices"], ["IAM and MFA", "Vulnerability assessment", "Cloud security posture", "Security monitoring"], ["Security reviews", "Access hardening"]),
  svc("it-consulting", "IT Consulting", SC, "Lightbulb", "Independent advice on strategy, architecture and roadmaps.", ["Clear technology roadmap", "Reduced project risk", "Informed vendor choices"], ["Architecture reviews", "Cloud readiness assessments", "Cost optimisation", "Governance frameworks"], ["Digital strategy", "Technology due diligence"]),
  svc("managed-it-services", "Managed IT Services", SC, "Headset", "Proactive monitoring and support so your teams can focus on the business.", ["Less downtime", "Predictable cost", "One accountable partner"], ["24x7 monitoring", "Service desk", "Patch and asset management", "SLA reporting"], ["Outsourced IT operations", "Multi-site support"]),
  svc("application-support-maintenance", "Application Support & Maintenance", SC, "Wrench", "Keep critical applications reliable, secure and improving.", ["Stable applications", "Faster issue resolution", "Continuous improvement"], ["L1 to L3 support", "Incident and problem management", "Performance tuning", "Release management"], ["Legacy application care", "Post-launch support"]),
];

export const industries: Offering[] = [
  ind("banking-financial-services", "Banking & Financial Services", "Landmark", "Secure, compliant platforms and trusted customer journeys.", ["Legacy core systems", "Regulatory and security demands", "Rising digital expectations"], ["Cloud modernisation", "API-led integration", "Security and fraud analytics"], ["Faster product launches", "Stronger compliance posture", "Better customer experience"]),
  ind("healthcare-life-sciences", "Healthcare & Life Sciences", "HeartPulse", "Connected, privacy-aware digital experiences and data flows.", ["Fragmented patient data", "Privacy and compliance", "Manual administrative work"], ["Secure data platforms", "Portal and app development", "Workflow automation"], ["Better information access", "Reduced admin effort", "Safer data handling"]),
  ind("retail-ecommerce", "Retail & E-commerce", "ShoppingCart", "Omnichannel commerce, analytics and resilient platforms.", ["Peak-season load", "Disconnected channels", "Inventory visibility"], ["Scalable commerce platforms", "Customer and sales analytics", "AI-assisted support"], ["Stable peak performance", "Unified customer view", "Smarter inventory"]),
  ind("manufacturing", "Manufacturing", "Factory", "Connected operations, industrial data and process optimisation.", ["Siloed plant data", "Unplanned downtime", "Manual reporting"], ["IoT data pipelines", "Operational dashboards", "Managed IT across sites"], ["Real-time visibility", "Less downtime", "Faster decisions"]),
  ind("education", "Education", "GraduationCap", "Accessible learning platforms and streamlined institutional workflows.", ["Outdated portals", "Manual admissions and records", "Limited accessibility"], ["Student and staff portals", "Cloud hosting", "Analytics and reporting"], ["Better engagement", "Lower admin load", "Accessible on any device"]),
  ind("telecom-media", "Telecom & Media", "Radio", "Scalable platforms for high-volume services and content.", ["High traffic and data volumes", "Complex integrations", "Fast-changing customer needs"], ["Cloud-native platforms", "Streaming and data pipelines", "Observability and automation"], ["Elastic scale", "Faster feature delivery", "Reliable services"]),
  ind("energy-utilities", "Energy & Utilities", "Zap", "Reliable, data-driven operations for critical infrastructure.", ["Ageing systems", "Distributed assets", "Security of critical systems"], ["IoT and telemetry platforms", "Predictive analytics", "Security hardening"], ["Better asset visibility", "Fewer outages", "Lower operating risk"]),
  ind("travel-logistics", "Travel & Logistics", "Plane", "Real-time visibility and automation across journeys and supply chains.", ["Limited tracking visibility", "Manual coordination", "Seasonal demand swings"], ["Tracking and booking platforms", "Route and demand analytics", "Workflow automation"], ["End-to-end visibility", "Faster coordination", "Improved planning"]),
  ind("government-public-services", "Government & Public Services", "Building2", "Citizen-friendly, secure and accountable digital services.", ["Paper-based processes", "Accessibility requirements", "Strict security needs"], ["Digital service portals", "Secure cloud hosting", "Identity and access management"], ["Faster service delivery", "Greater transparency", "Stronger security"]),
];

export const solutions: Offering[] = [
  sol("enterprise-digital-transformation", "Enterprise Digital Transformation", "Rocket", "A joined-up roadmap from strategy to delivery.", ["Digital strategy and roadmap", "Platform and process redesign", "Change and adoption support"], ["Clear priorities", "Measurable business outcomes"]),
  sol("cloud-migration", "Cloud Migration", "Cloud", "Move workloads to the cloud with minimal disruption.", ["Discovery and readiness assessment", "Migration planning and execution", "Post-migration optimisation"], ["Lower risk moves", "Cost-aware cloud operations"]),
  sol("cloud-modernization", "Cloud Modernization", "RefreshCw", "Re-architect applications to use cloud-native capabilities.", ["Containerisation and serverless redesign", "CI/CD and observability", "Data and API modernisation"], ["Faster releases", "Better scalability"]),
  sol("ai-powered-business-solutions", "AI-Powered Business Solutions", "Bot", "Apply AI to real workflows, with people in control.", ["Use-case discovery", "AI assistants and automation", "Governance and monitoring"], ["Time saved on routine work", "Trustworthy AI in production"]),
  sol("enterprise-automation", "Enterprise Automation", "Workflow", "Automate repeatable processes across teams and systems.", ["Process analysis", "Workflow and integration automation", "Monitoring and support"], ["Fewer manual errors", "Faster turnaround"]),
  sol("data-engineering", "Data Engineering", "Database", "Reliable data pipelines and platforms for analytics and AI.", ["Pipeline and warehouse design", "Data quality and governance", "Analytics-ready models"], ["Trusted data", "Faster reporting"]),
  sol("application-modernization", "Application Modernization", "Layers", "Give ageing applications a secure, maintainable future.", ["Assessment and target architecture", "Incremental re-platforming", "Testing and rollout"], ["Lower maintenance cost", "Improved security"]),
  sol("infrastructure-management", "Infrastructure Management", "Server", "Keep infrastructure healthy, secure and cost-efficient.", ["Monitoring and incident response", "Patching and lifecycle management", "Cost and capacity reviews"], ["Higher availability", "Predictable operations"]),
  sol("cybersecurity-solutions", "Cybersecurity Solutions", "ShieldCheck", "Layered protection across identity, cloud and endpoints.", ["Risk assessment", "Identity and access controls", "Monitoring and response readiness"], ["Reduced exposure", "Audit-ready evidence"]),
  sol("digital-workplace", "Digital Workplace", "Monitor", "Secure, consistent tools and devices for every employee.", ["Device and endpoint management", "Identity and collaboration setup", "Support and onboarding"], ["Faster onboarding", "Consistent employee experience"]),
];

// Sample content: replace with real, approved case studies.
export const caseStudies = [
  { slug: "retail-cloud-migration", tag: "Cloud", client: "Retail client (sample)", title: "Cloud migration for a retail platform",
    summary: "Moved a monolithic store to a scalable AWS setup.",
    challenge: "Slow releases and downtime during peak sales.", solution: "Containerised services, CI/CD and auto-scaling on AWS.", result: "Faster releases and stable peak-season performance." },
  { slug: "support-ai-assistant", tag: "AI", client: "Services client (sample)", title: "AI assistant for customer support",
    summary: "Automated first-line answers from a company knowledge base.",
    challenge: "Support teams overloaded with repetitive questions.", solution: "A retrieval-based assistant integrated with the helpdesk.", result: "Shorter response times and happier agents." },
  { slug: "corporate-web-portal", tag: "Web", client: "Education client (sample)", title: "Corporate web portal",
    summary: "A fast, accessible portal for students and staff.",
    challenge: "Outdated site with poor mobile experience.", solution: "A responsive Next.js portal with a headless content model.", result: "Better engagement and easier content updates." },
  { slug: "managed-it-transformation", tag: "Cloud", client: "Manufacturing client (sample)", title: "Managed IT transformation",
    summary: "Unified monitoring and support across multiple sites.",
    challenge: "Fragmented tooling and slow incident response.", solution: "Central monitoring, a service desk and clear SLAs.", result: "Fewer incidents and faster resolution." },
] as const;

export const articles = [
  { slug: "choosing-the-right-cloud-strategy", category: "Cloud", date: "2026-10-01", title: "Choosing the right cloud strategy",
    summary: "A practical way to decide what to migrate, modernise or retire.",
    body: ["Cloud migration is not one decision but many. Start by listing your workloads and their business value.", "Group them into rehost, replatform, refactor or retire, then sequence the work by risk and impact.", "Finish with governance: cost, security and ownership defined from day one."] },
  { slug: "practical-ai-for-business", category: "AI", date: "2026-10-15", title: "Practical AI for business teams",
    summary: "Where AI helps today, and where it does not.",
    body: ["The best AI projects start with a narrow, repeatable task and a clear measure of success.", "Connect AI to your own data and workflows, and keep a human in the loop for important decisions."] },
  { slug: "security-basics-for-startups", category: "Security", date: "2026-10-28", title: "Security basics every startup needs",
    summary: "Five habits that prevent most common incidents.",
    body: ["Use multi-factor authentication everywhere and follow least-privilege access.", "Patch regularly, back up what matters, and test your recovery plan."] },
] as const;

export const positions = [
  { title: "Full-Stack Developer", type: "Full-time", team: "Engineering" },
  { title: "Cloud / DevOps Engineer", type: "Full-time", team: "Cloud" },
  { title: "UI/UX Designer", type: "Full-time", team: "Design" },
] as const;

export const values: Item[] = [
  { icon: "◎", title: "Customer first", text: "Listen deeply and make every decision with the customer in mind." },
  { icon: "✳", title: "Stay curious", text: "Keep learning and explore better ways to solve problems." },
  { icon: "↗", title: "Own the outcome", text: "Take responsibility and deliver work we can stand behind." },
];

export const leadership: Item[] = [
  { title: "[Name]", text: "Founder & CEO (add bio)" },
  { title: "[Name]", text: "Chief Technology Officer (add bio)" },
  { title: "[Name]", text: "Head of Delivery (add bio)" },
];

export const stats = [["Cloud", "Modern platforms"], ["AI-led", "Intelligent workflows"], ["Secure", "Built-in resilience"], ["Human", "Customer-first thinking"]];

export const serviceItems: Item[] = services.map((s) => ({ icon: s.icon, title: s.title, text: s.summary, href: `/services/${s.slug}` }));
export const workItems: Item[] = caseStudies.map((c) => ({ num: c.tag.toUpperCase(), title: c.title, text: c.summary, href: `/our-work/${c.slug}` }));

// TODO: add real social profile URLs. Empty entries are hidden.
export const socialLinks = [
  { label: "LinkedIn", url: "" }, { label: "X", url: "" }, { label: "YouTube", url: "" },
];
