// app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Hole die JSON-Daten vom Request
    const { name, email, message } = await request.json();

    // Input-Validierung
    if (!name || !email || !message) {
        return new Response(JSON.stringify({ success: false, error: 'All fields are required.' }), {
            status: 400,
        });
    }
  
    // E-Mail-Format validieren
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return new Response(JSON.stringify({ success: false, error: 'Invalid email address.' }), {
                status: 400,
            });
        }
  
    // Limit für Nachrichtenlänge
    if (message.length > 1000) {
        return new Response(JSON.stringify({ success: false, error: 'Message is too long.' }), {
            status: 400,
        });
    }

    // Erstelle den Nodemailer-Transporter. Hier als Beispiel mit Gmail.
    // Hinweis: Für Gmail benötigst du ein App-Passwort oder musst unsicheren Zugriff aktivieren.
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Deine Gmail-Adresse, z.B. 'timon.kayser@gmail.com'
        pass: process.env.EMAIL_PASS, // Dein App-Passwort (in .env.local speichern)
      },
    });

    // Konfiguriere die E-Mail
    const mailOptions = {
      from: process.env.EMAIL_USER, // Der Absender, den der Nutzer eingegeben hat (wird oft überschrieben)
      replyTo: email,
      to: process.env.EMAIL_USER, // Empfänger – z.B. deine eigene E-Mail
      subject: `Neue Portfolio Nachricht: ${name} (${email})`,
      text: message,
    };

    // Sende die E-Mail
    await transporter.sendMail(mailOptions);

    // Erfolgreiche Antwort zurückgeben
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error('Fehler beim Senden der Mail:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Mail konnte nicht gesendet werden' }),
      { status: 500 }
    );
  }
}