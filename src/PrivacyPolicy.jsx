import React, { useEffect } from 'react';
import { Shield, Lock, Eye, FileText, ArrowLeft, Mail, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-slate-600 hover:text-orange-600 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
          <div className="text-orange-600 font-bold text-xl tracking-tight">Digify Menu</div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 lg:py-20">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-orange-100 rounded-2xl text-orange-600">
              <Shield size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Privacy Policy</h1>
              <p className="text-slate-500 font-medium">Last updated: January 2025</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none space-y-10">
            <section>
              <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-900 mb-4">
                <Eye className="text-orange-500" size={24} /> 1. Introduction
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Welcome to Digify Menu. We value your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you as to how we look after your personal data when you visit our website 
                or use our digital menu services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-900 mb-4">
                <Lock className="text-orange-500" size={24} /> 2. Data We Collect
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We collect and process data in different ways depending on whether you are a Restaurant Owner or a Guest (Customer).
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-2">For Restaurant Owners</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We collect contact information (name, email, phone number) and restaurant details to provide our services and manage your account.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-2">For Guests</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We do NOT collect personal data from guests browsing menus. We may collect anonymous usage data to help restaurants understand their menu performance.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-900 mb-4">
                <Globe className="text-orange-500" size={24} /> 3. How We Use Your Data
              </h2>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>To provide and manage our services.</li>
                <li>To process payments and prevent fraud.</li>
                <li>To communicate with you regarding updates, support, and marketing (if opted-in).</li>
                <li>To improve our digital menu platform and user experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-900 mb-4">
                <FileText className="text-orange-500" size={24} /> 4. Data Security
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
                used or accessed in an unauthorized way, altered or disclosed. We use industry-standard encryption and 
                secure cloud servers (Hexameta infrastructure) to protect your information.
              </p>
            </section>

            <section className="bg-slate-950 p-8 rounded-3xl text-white">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
                <Mail className="text-orange-500" size={24} /> Contact Us
              </h2>
              <p className="text-slate-400 mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <a 
                href="mailto:digifymenuofficial@gmail.com" 
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl transition-colors text-white font-medium"
              >
                <Mail size={20} />
                <span>digifymenuofficial@gmail.com</span>
              </a>
            </section>
          </div>
        </div>
      </main>

      <footer className="py-10 text-center border-t border-slate-200">
        <p className="text-slate-400 text-sm">© 2025 Digify Menu. Powered by HEXAMETA.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
