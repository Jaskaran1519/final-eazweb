"use client"
import { useState } from 'react';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [purpose, setPurpose] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, phoneNumber, purpose }),
            });
            
            if (response.ok) {
                setMessage('Thank you! We will get back to you soon.');
                setEmail('');
                setPhoneNumber('');
            } else {
                setMessage('An error occurred. Please try again.');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="w-[90%] mx-auto max-w-6xl my-16 rounded-xl p-10 flex flex-col items-center bg-gradient-to-r from-zinc-900 to-[#0d0c0d]">
            <h1 className="text-4xl text-center font-bold mt-5">Elevate your business with us</h1>
            <div className="mt-10 max-w-[500px] text-center mx-auto">
                <p>Drop your email and phone number below to get started with your project. We will get back to you within 24 hours</p>
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full mx-auto mt-10 space-y-4">
                    <div className="relative w-full">
                        <input
                            type="email"
                            placeholder="email@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full text-[1rem] px-10 py-5 pr-40 rounded-full bg-transparent border border-gray-300"
                            required
                        />
                    </div>
                    <div className="relative w-full">
                        <input
                            type="tel"
                            placeholder="Phone number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-full text-[1rem] px-10 py-5 pr-40 rounded-full bg-transparent border border-gray-300"
                            required
                        />
                    </div>
                    <div className="relative w-full">
                        <select
                            value={purpose}
                            onChange={(e) => setPurpose(e.target.value)}
                            className="w-full text-[1rem] px-10 py-5 pr-40 rounded-full bg-transparent border border-gray-300 appearance-none"
                            required
                        >
                            <option value="" disabled>Select purpose</option>
                            <option value="project">I have a project</option>
                            <option value="quote">I want to get a quote</option>
                            <option value="discuss">I want to discuss something</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-300">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                    <button type="submit" className="bg-[#deff00] text-black font-semibold px-6 py-3 rounded-full w-full">
                        Get Notified
                    </button>
                </form>
                {message && <p className="mt-4 text-sm">{message}</p>}
            </div>
        </div>
    )
}
