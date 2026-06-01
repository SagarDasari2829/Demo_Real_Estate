import React from "react";

export default function InquiryForm({ subject = "Property inquiry" }) {
  return (
    <form className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="rounded-md border border-slate-200 px-4 py-3 outline-none transition focus:border-estate-green focus:ring-4 focus:ring-emerald-100" placeholder="Full name" />
        <input className="rounded-md border border-slate-200 px-4 py-3 outline-none transition focus:border-estate-green focus:ring-4 focus:ring-emerald-100" placeholder="Phone number" />
      </div>
      <input className="rounded-md border border-slate-200 px-4 py-3 outline-none transition focus:border-estate-green focus:ring-4 focus:ring-emerald-100" defaultValue={subject} />
      <textarea className="min-h-28 rounded-md border border-slate-200 px-4 py-3 outline-none transition focus:border-estate-green focus:ring-4 focus:ring-emerald-100" placeholder="Tell us your preferred location, budget, plot size, or construction requirement." />
      <button type="submit" className="primary-button w-full sm:w-auto">
        Send Inquiry
      </button>
    </form>
  );
}
