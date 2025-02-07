"use client";
import { useState } from "react";
// components/Contact.js
export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });

            if (!res.ok) {
                throw new Error("Fehler beim Senden");
            }

            const data = await res.json();
            if (data.success) {
                setStatus("success");
                // Formular zurücksetzen
                setName("");
                setEmail("");
                setMessage("");
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };
    
    return (
        <section id="contact" className="bg-black min-h-[40vh] py-10 px-4">
            <h1 className="border-b pb-4 border-gray-700 mx-10 text-center text-6xl font-bold">
                CONTACT
            </h1>
            <div className="mt-6 max-w-xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-mainAkzent text-glow">
                        Lets Connect!
                    </h2>
                    <p className="mt-2 text-sm text-gray-400">
                        Have a question, job opportunity, or just want to say hi? I’d love to hear from you!
                    </p>
                </div>
            </div>
            <div className="mt-6 flex flex-col md:flex-row gap-6">
                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 border border-gray-700 p-4 rounded w-full md:w-1/2">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-gray-200 mb-1">Name</label>
                        <input
                            id="name"
                            type="text"
                            className="p-2 rounded bg-gray-800 text-white focus:outline-none"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-gray-200 mb-1">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="p-2 rounded bg-gray-800 text-white focus:outline-none"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-gray-200 mb-1">Message</label>
                        <textarea
                            id="message"
                            rows="5"
                            className="p-2 rounded bg-gray-800 text-white focus:outline-none"
                            placeholder="Your message here..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="bg-mainAkzent text-white py-2 px-4 rounded hover:opacity-80 transition-opacity">
                        {status === "sending" ? "Sending..." : "Work with me"}
                    </button>

                    {status === "success" && <p className="text-green-500 mt-2">Thanks for your message!</p>}
                    {status === "error" && <p className="text-red-500 mt-2">Oops! Something went wrong.</p>}
                </form> 
                {/* Rechte Spalte */}
                <div className="p-4 w-full mt-8 md:w-1/2 flex flex-col items-center justify-center">
                    <h3 className="text-2xl font-bold text-center">
                        More Information
                    </h3>

                    {/* Liste mit Standort und E-Mail */}
                    <ul className="mt-6 flex flex-col gap-4 text-center border-b border-gray-700 pb-8 w-full">
                        <li className="flex items-center justify-center gap-2">
                            <img 
                                src="/images/Location.png" 
                                alt="Location Icon" 
                                className="h-6 w-6"
                            />
                            <span>Frankfurt, Germany</span>
                        </li>
                        <li className="flex items-center justify-center gap-2">
                            <img 
                                src="/images/mail.png" 
                                alt="Email Icon" 
                                className="h-6 w-6"
                            />
                            <span>timonkayser.contact@gmail.com</span>
                        </li>
                    </ul>
                    {/* Social Media Icons unter dem Trennstrich */}
                    <div className="mt-4 flex justify-center gap-6">
                        <a 
                            href="https://github.com/txmxn" 
                            target="_blank" 
                            rel="noreferrer"
                            className="hover:opacity-80 transition-opacity"
                        >
                        <img 
                            src="/images/github_logo.png" 
                            alt="GitHub" 
                            className="h-6 w-6"
                        />
                        </a>
                        <a 
                            href="https://linkedin.com/in/timon-kayser" 
                            target="_blank" 
                            rel="noreferrer"
                            className="hover:opacity-80 transition-opacity"
                        >
                        <img 
                            src="/images/linkedin_logo.png" 
                            alt="LinkedIn" 
                            className="h-6 w-6"
                        />
                        </a>
                        <a 
                            href="https://instagram.com/timon.ksr" 
                            target="_blank" 
                            rel="noreferrer"
                            className="hover:opacity-80 transition-opacity"
                        >
                        <img 
                            src="/images/instagram_logo.png" 
                            alt="Instagram" 
                            className="h-6 w-6"
                        />
                        </a>
                        <a 
                            href="https://threads.com/timon.ksr" 
                            target="_blank" 
                            rel="noreferrer"
                            className="hover:opacity-80 transition-opacity"
                        >
                        <img 
                            src="/images/threads_logo.png" 
                            alt="Threads" 
                            className="h-6 w-6"
                        />
                        </a>
                        {/*<a 
                            href="https://x.com/timon" 
                            target="_blank" 
                            rel="noreferrer"
                            className="hover:opacity-80 transition-opacity"
                        >
                        <img 
                            src="/images/x_logo.png" 
                            alt="X" 
                            className="h-6 w-6"
                        />
                        </a>*/}
                    </div> 
                </div>
            </div>
        </section>
    );
}