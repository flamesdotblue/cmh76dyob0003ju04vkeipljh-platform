import React from 'react';
import { Upload, ShieldCheck, Link, Clock, Mail, Lock } from 'lucide-react';

const features = [
  {
    icon: Upload,
    title: 'Send up to 10GB',
    desc: 'Fast, reliable transfers optimized for large files and folders.'
  },
  {
    icon: ShieldCheck,
    title: 'Privacy-first',
    desc: 'End-to-end privacy with optional password protection.'
  },
  {
    icon: Link,
    title: 'Instant share links',
    desc: 'Generate a secure link you can share anywhere.'
  },
  {
    icon: Clock,
    title: 'Auto-expiring links',
    desc: 'Control how long your files stay available.'
  },
  {
    icon: Mail,
    title: 'Email delivery',
    desc: 'Send files directly to inboxes with one click.'
  },
  {
    icon: Lock,
    title: 'Access control',
    desc: 'Limit downloads and revoke access anytime.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative z-10 border-t border-gray-100 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Everything you need to share securely</h2>
          <p className="mt-3 text-base text-gray-600">A modern, secure way to send files to anyone—perfect for work, school, and personal use.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-700">
                  <f.icon size={20} />
                </span>
                <h3 className="text-lg font-medium text-gray-900">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>

        <div id="transfer" className="mt-16 grid items-stretch gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900">How it works</h3>
            <ol className="mt-4 space-y-4">
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">1</span>
                <div>
                  <p className="font-medium text-gray-900">Add your files</p>
                  <p className="text-sm text-gray-600">Drag & drop or browse to select files and folders.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">2</span>
                <div>
                  <p className="font-medium text-gray-900">Choose your options</p>
                  <p className="text-sm text-gray-600">Set a password, link expiry, and delivery method.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">3</span>
                <div>
                  <p className="font-medium text-gray-900">Share the link</p>
                  <p className="text-sm text-gray-600">Copy your secure link or send via email instantly.</p>
                </div>
              </li>
            </ol>
            <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black">
              Start a transfer
            </button>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900">Why SendNow?</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-600" /> Simple, clean interface focused on speed.</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-600" /> Secure by default with privacy controls.</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-600" /> Works on any device—no app required.</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-600" /> Blazing fast uploads with resumable support.</li>
            </ul>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="text-2xl font-semibold text-gray-900">10GB</p>
                <p className="text-xs text-gray-600">per transfer</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="text-2xl font-semibold text-gray-900">7 days</p>
                <p className="text-xs text-gray-600">max link lifetime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
