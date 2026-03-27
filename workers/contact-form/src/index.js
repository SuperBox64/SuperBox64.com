import { EmailMessage } from "cloudflare:email";
import { createMimeMessage } from "mimetext";

export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "https://superbox64.com",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    try {
      const { name, email, message } = await request.json();

      if (!name || !email || !message) {
        return new Response(
          JSON.stringify({ error: "All fields are required" }),
          { status: 400, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "https://superbox64.com" } }
        );
      }

      const msg = createMimeMessage();
      msg.setSender({ name: "SuperBox64 Contact Form", addr: "contact@superbox64.com" });
      msg.setRecipient("starplayr@icloud.com");
      msg.setHeader("Reply-To", email);
      msg.setSubject("SuperBox64 inquiry from " + name);
      msg.addMessage({
        contentType: "text/plain",
        data: [
          "New message from SuperBox64.com contact form",
          "─".repeat(40),
          "",
          "Name:  " + name,
          "Email: " + email,
          "",
          "Message:",
          message,
          "",
          "─".repeat(40),
          "Reply directly to this email to respond to " + name,
        ].join("\n"),
      });

      const emailMessage = new EmailMessage(
        "contact@superbox64.com",
        "starplayr@icloud.com",
        msg.asRaw()
      );

      await env.SEND_EMAIL.send(emailMessage);

      return new Response(
        JSON.stringify({ success: true }),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://superbox64.com",
          },
        }
      );
    } catch (e) {
      return new Response(
        JSON.stringify({ error: "Failed to send message. Please try again." }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://superbox64.com",
          },
        }
      );
    }
  },
};
