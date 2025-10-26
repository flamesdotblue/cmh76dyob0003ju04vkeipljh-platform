import React from 'react';
import { Upload, Shield, HelpCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50">
          <div className="flex h-14 items-center justify-between px-4 sm:px-6">
            <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <Upload size={18} />
              </span>
              <span className="text-gray-900">SendNow</span>
            </a>
            <nav className="hidden items-center gap-6 md:flex">
              <a href="#features" className="text-sm text-gray-700 hover:text-gray-900">Features</a>
              <a href="#security" className="text-sm text-gray-700 hover:text-gray-900 inline-flex items-center gap-1">
                <Shield size={16} /> Security
              </a>
              <a href="#help" className="text-sm text-gray-700 hover:text-gray-900 inline-flex items-center gap-1">
                <HelpCircle size={16} /> Help
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <button className="hidden rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 md:block">
                Sign in
              </button>
              <button className="rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-black">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
