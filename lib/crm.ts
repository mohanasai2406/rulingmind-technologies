// CRM adapter. HubSpot is implemented; swap this file to use Zoho, Salesforce, etc.
export type Lead = { name: string; email: string; company?: string; service: string; message: string };

export async function pushLeadToCrm(lead: Lead): Promise<void> {
  const token = process.env.HUBSPOT_TOKEN;
  if (!token) {
    console.warn("HUBSPOT_TOKEN not set; skipping CRM sync");
    return;
  }
  const [firstname, ...rest] = lead.name.split(/\s+/);
  const res = await fetch("https://api.hubapi.com/crm/v3/objects/contacts/batch/upsert", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      inputs: [{
        idProperty: "email",
        id: lead.email,
        properties: {
          email: lead.email, firstname, lastname: rest.join(" "), company: lead.company,
          hs_lead_status: "NEW", message: `[${lead.service}] ${lead.message}`,
        },
      }],
    }),
  });
  if (!res.ok) throw new Error(`HubSpot ${res.status}: ${await res.text()}`);
}
