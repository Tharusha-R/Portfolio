// app/api/contact/route.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    // Email HTML template
    const html = `
      <div style="font-family: Arial, sans-serif; color:#111;">
        <h1 style="color:#3b82f6;">📩 New Portfolio Message</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <hr style="margin:10px 0;"/>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr style="margin:10px 0;"/>
        <p style="font-size:12px;color:#666;">This message was sent via your Portfolio Contact Form.</p>
      </div>
    `;

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["rukshanbandara1130@gmail.com"], // Replace with your email
      subject: `📩 New Message from ${name}`,
      html,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json({ success: false }, { status: 500 });
  }
}
