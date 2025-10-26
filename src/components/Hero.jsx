import React from 'react';
import Spline from '@splinetool/react-spline';
import { Upload, Link as LinkIcon, Shield, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-white" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
            <Shield size={14} /> End-to-end privacy, no sign-up required
          </span>
          <h1 className="font-semibold tracking-tight text-gray-900 text-4xl sm:text-5xl md:text-6xl">
            Send large files fast and securely
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">
            Share up to 10GB per transfer with password protection, custom expiration, and instant links your recipients can trust.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#transfer" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-3 text-white hover:bg-black">
              <Upload size={18} /> Send files
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-900 hover:bg-gray-50">
              <LinkIcon size={18} /> Learn more
            </a>
          </div>
          <div className="mt-6 flex items-center gap-5 text-sm text-gray-600">
            <div className="inline-flex items-center gap-2"><Clock size={16} /> Links auto-expire</div>
            <div className="inline-flex items-center gap-2"><Shield size={16} /> Password optional</div>
            <div className="inline-flex items-center gap-2"><LinkIcon size={16} /> No account required</div>
          </div>
        </div>

        <div className="pointer-events-none absolute right-4 top-28 hidden w-full max-w-sm md:block">
          <UploadCard />
        </div>
      </div>
    </section>
  );
};

const UploadCard = () => {
  return (
    <div className="pointer-events-auto rounded-2xl border border-white/40 bg-white/80 p-4 shadow-xl backdrop-blur-lg">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-900">Quick Transfer</h3>
          <p className="text-xs text-gray-600">Drag & drop files here</p>
        </div>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
          <Upload size={16} />
        </span>
      </div>
      <div className="mt-3 space-y-2">
        <div className="flex items-center justify-between rounded-lg border border-dashed border-gray-300 bg-white/60 px-3 py-3 text-sm text-gray-600">
          <span>Choose files</span>
          <button className="rounded-md bg-gray-900 px-2 py-1 text-xs font-medium text-white hover:bg-black">Browse</button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <input type="email" placeholder="Recipient email" className="w-full rounded-lg border border-gray-300 bg-white/70 px-3 py-2 text-sm outline-none placeholder:text-gray-400 focus:border-gray-900" />
          <input type="text" placeholder="Your email (optional)" className="w-full rounded-lg border border-gray-300 bg-white/70 px-3 py-2 text-sm outline-none placeholder:text-gray-400 focus:border-gray-900" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <input type="password" placeholder="Password (optional)" className="w-full rounded-lg border border-gray-300 bg-white/70 px-3 py-2 text-sm outline-none placeholder:text-gray-400 focus:border-gray-900" />
          <select className="w-full rounded-lg border border-gray-300 bg-white/70 px-3 py-2 text-sm outline-none focus:border-gray-900">
            <option>Expires in 7 days</option>
            <option>Expires in 3 days</option>
            <option>Expires in 24 hours</option>
          </select>
        </div>
        <button className="mt-2 w-full rounded-lg bg-indigo-600 py-2 text-sm font-medium text-white hover:bg-indigo-700">Create link</button>
      </div>
    </div>
  );
};

export default Hero;
