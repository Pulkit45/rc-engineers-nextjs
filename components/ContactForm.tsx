"use client";
import { useState } from "react";

export default function ContactForm(){
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone:"", message:"" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent){
    e.preventDefault();
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`);
    const mailto = `mailto:rcengineers95@gmail.com?subject=Website%20Inquiry&body=${body}`;
    setLoading(true);
    window.location.href = mailto;
    setTimeout(()=>{ setLoading(false); setSent(true); }, 800);
  }

  return (
    <div>
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border border-[var(--border)] bg-white">
          📩 Contact Us
        </span>
        <h3 className="mt-3 text-3xl md:text-4xl font-extrabold">
          Share your requirement — <span className="gradient-text">we'll respond fast</span>
        </h3>
        <p className="mt-2 text-[var(--muted)]">Typical response within minutes during working hours.</p>
      </div>

      <form onSubmit={handleSubmit} className="card p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="text-sm font-medium text-[var(--text)] mb-1 block">Name</label>
            <input name="name" required value={form.name} onChange={handleChange} placeholder="Your name" className="mt-1 w-full px-4 py-3"/>
          </div>
          <div>
            <label className="text-sm font-medium text-[var(--text)] mb-1 block">Email</label>
            <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" className="mt-1 w-full px-4 py-3"/>
          </div>
          <div>
            <label className="text-sm font-medium text-[var(--text)] mb-1 block">Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className="mt-1 w-full px-4 py-3"/>
          </div>
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-[var(--text)] mb-1 block">Message</label>
            <textarea name="message" required rows={6} value={form.message} onChange={handleChange} placeholder="Tell us about the turbine, OEM, symptoms, and timeline…" className="mt-1 w-full px-4 py-3"/>
            <p className="mt-2 text-xs text-[var(--muted)]">
              Tip: Include unit rating, make, last overhauling date, alarms/fault codes, and location.
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end">
          <button disabled={loading} className="btn btn-primary px-8 py-4 text-base font-bold">
            {loading ? "Opening your email…" : "Send Inquiry"}
          </button>
        </div>

        {sent && (
          <div className="mt-4 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-emerald-700">
            <strong className="mr-1">Thanks!</strong>Your email client has opened—hit "Send" to complete.
          </div>
        )}
      </form>
    </div>
  );
}
