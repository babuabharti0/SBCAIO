export interface LeadData {
  name?: string;
  email?: string;
  company?: string;
  industry?: string;
  teamSize?: string;
  automationGoal?: string;
  source: "contact_form" | "chatbot";
}

export async function submitLead(data: LeadData): Promise<boolean> {
  try {
    const response = await fetch("https://babuabharti0.app.n8n.cloud/webhook/sbcaio-leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error("Failed to submit lead:", response.statusText);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error submitting lead:", error);
    return false;
  }
}
