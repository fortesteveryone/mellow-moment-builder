import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const SPREADSHEET_ID = "1rwZcbCXbrpbHit7umHADYuxcC9MSQR_NSS5dvcidSfI";
const RANGE = "Sheet1!A:F";

const inputSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().min(3).max(50),
  interest: z.string().trim().min(1).max(100),
  activity: z.string().trim().max(2000).optional().default(""),
});

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inputSchema.parse(data))
  .handler(async ({ data }) => {
    const lovableKey = process.env.LOVABLE_API_KEY;
    const sheetsKey = process.env.GOOGLE_SHEETS_API_KEY;
    if (!lovableKey || !sheetsKey) {
      throw new Error("Google Sheets connection is not configured.");
    }

    const url = `https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}:append?valueInputOption=USER_ENTERED`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": sheetsKey,
      },
      body: JSON.stringify({
        values: [[
          new Date().toISOString(),
          data.name,
          data.email,
          data.phone,
          data.interest,
          data.activity ?? "",
        ]],
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Sheets append failed", res.status, text);
      throw new Error(`Failed to submit inquiry (${res.status})`);
    }

    return { ok: true as const };
  });