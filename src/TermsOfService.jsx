import React, { useEffect } from 'react';
import { FileText, Gavel, Scale, AlertCircle, ArrowLeft, Mail, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
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
              <Scale size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Terms of Service</h1>
              <p className="text-slate-500 font-medium">Last updated: January 2025</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none space-y-10">
            <section>
              <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-900 mb-4">
                <Gavel className="text-orange-500" size={24} /> 1. Acceptance of Terms
              </h2>
              <p className="text-slate-600 leading-relaxed">
                By accessing or using the Digify Menu platform, you agree to comply with and be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-900 mb-4">
                <FileText className="text-orange-500" size={24} /> 2. Description of Service
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Digify Menu provides a digital menu management platform for restaurants, including QR code generation, 
                menu hosting, update capabilities, and specialized features like 'Must-Try' lists and interactive flipbooks.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-900 mb-4">
                <Clock className="text-orange-500" size={24} /> 3. Subscription & Payments
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed">
                  We offer two primary subscription plans:
                </p>
                <ul className="list-disc pl-6 text-slate-600 text-sm space-y-2">
                  <li><strong>6 Months Plan:</strong> Rs. 649 (billed upfront).</li>
                  <li><strong>1 Year Plan:</strong> Rs. 1099 (billed upfront, includes 2 free acrylic stands).</li>
                </ul>
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  All payments are non-refundable unless specified otherwise by local law.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-900 mb-4">
                <AlertCircle className="text-orange-500" size={24} /> 4. User Responsibilities
              </h2>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>You are responsible for the accuracy of your menu content and prices.</li>
                <li>You must not use the service for any illegal or unauthorized purpose.</li>
                <li>You agree not to modify, adapt or hack the service.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-900 mb-4">
                <Scale className="text-orange-500" size={24} /> 5. Limitation of Liability
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Digify Menu (Hexameta) shall not be liable for any direct, indirect, incidental, or consequential damages 
                resulting from the use or inability to use the service, including restaurant revenue loss or data inaccuracies.
              </p>
            </section>

            <section className="bg-slate-950 p-8 rounded-3xl text-white">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
                <Mail className="text-orange-500" size={24} /> Contact Us
              </h2>
              <p className="text-slate-400 mb-6">
                If you have any questions about these Terms, please contact us at:
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

export default TermsOfService;
