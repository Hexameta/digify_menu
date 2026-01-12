import React, { useState, useEffect } from 'react';
import { 
  Menu, X, QrCode, Smartphone, BookOpen, 
  Zap, Layers, BarChart3, ListPlus, 
  Gamepad2, Leaf, ShieldCheck, Layout, 
  ChevronRight, Star, Check, Globe,
  RefreshCw, TrendingUp, MonitorSmartphone
} from 'lucide-react';
import digifyMenuLogoDark from './assets/logos/digifyMenuLogoDark.png';
import digifyMenuLogoWhite from './assets/logos/digifyMenuLogoWhite.png';
import demoQrCode from './assets/logos/demo-qr.png';

// --- Components ---

// 0. Demo QR Modal
const DemoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative animate-scale-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600"
        >
          <X size={20} />
        </button>
        
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">Experience the Demo</h3>
            <p className="text-slate-500 text-sm">Scan now from your phone to see the delivery-style menu in action.</p>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-2xl border-2 border-dashed border-slate-200">
            <img 
              src={demoQrCode} 
              alt="Scan to see demo" 
              className="w-full aspect-square rounded-xl shadow-lg border-4 border-white"
            />
          </div>
          
          <div className="flex items-center justify-center gap-2 text-orange-600 font-medium text-sm">
            <Smartphone size={16} />
            <span>Works on any smartphone</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 1. Navigation Bar
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={digifyMenuLogoDark} alt="Digify Menu Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-slate-600 hover:text-orange-600 transition-colors font-medium">Features</a>
          <a href="#showcase" className="text-slate-600 hover:text-orange-600 transition-colors font-medium">Showcase</a>
          <a href="#pricing" className="text-slate-600 hover:text-orange-600 transition-colors font-medium">Pricing</a>
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition-all transform hover:-translate-y-0.5">
            {/* Start Free Trial */}
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-4 flex flex-col space-y-4 shadow-xl">
          <a href="#features" className="text-slate-600 hover:text-orange-600 font-medium" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#showcase" className="text-slate-600 hover:text-orange-600 font-medium" onClick={() => setIsOpen(false)}>Showcase</a>
          <a href="#pricing" className="text-slate-600 hover:text-orange-600 font-medium" onClick={() => setIsOpen(false)}>Pricing</a>
          <button className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold">
            Start Free Trial
          </button>
        </div>
      )}
    </nav>
  );
};

// 2. Hero Section
const Hero = ({ isDemoModalOpen, setIsDemoModalOpen }) => {
  const handleDemoClick = () => {
    // Simple check for mobile/tablet
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      window.location.href = 'https://menu.digifygarden.com';
    } else {
      setIsDemoModalOpen(true);
    }
  };

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-400/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-red-400/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] bg-yellow-400/20 rounded-full blur-[80px] animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-8">
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Digital. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 animate-gradient-x">
              Dynamic.
            </span> <br />
            Delicious.
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Stop wasting money on printing and start driving revenue. Update your pricing in seconds and highlight your most profitable dishes with a dynamic, mobile-managed menu system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 rounded-full bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 transition-colors shadow-xl shadow-orange-500/10 flex items-center justify-center gap-2">
              Start Free Trial <ChevronRight className="w-5 h-5" />
            </button>
            <button 
              onClick={handleDemoClick}
              className="px-8 py-4 rounded-full border border-gray-300 text-slate-700 font-medium text-lg hover:bg-white hover:border-orange-500 hover:text-orange-600 transition-colors flex items-center justify-center gap-2 bg-white/50 backdrop-blur-sm"
            >
              <Smartphone className="w-5 h-5" /> See Live Demo
            </button>
          </div>
          <p className="text-sm text-slate-400 italic">
            "Simply place a barcode on your tables for customers to scan - no app required."
          </p>
        </div>

        {/* Visual Mockups */}
        <div className="relative mx-auto lg:mr-0 w-full max-w-lg">
          {/* Phone Mockup */}
          <div className="relative z-10 w-64 mx-auto bg-white border-[10px] border-slate-900 rounded-[3rem] shadow-2xl overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
            {/* Screen Content */}
            <div className="bg-slate-50 h-[500px] w-full relative">
              {/* Header */}
              <div className="h-32 bg-gradient-to-br from-orange-400 to-red-500 p-4 flex flex-col justify-end">
                <div className="w-16 h-16 bg-white rounded-full shadow-lg mb-[-2rem] mx-auto flex items-center justify-center text-2xl">🍔</div>
              </div>
              {/* Menu Items */}
              <div className="pt-10 px-4 space-y-3">
                <div className="text-center text-slate-900 font-bold mb-4">Burger Bistro</div>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white p-3 rounded-xl flex items-center gap-3 shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-slate-200 rounded-lg"></div>
                    <div className="flex-1">
                      <div className="h-2 w-20 bg-slate-200 rounded mb-1"></div>
                      <div className="h-2 w-10 bg-slate-200 rounded"></div>
                    </div>
                    <div className="text-orange-500 font-bold">₹12</div>
                  </div>
                ))}
                <div className="mt-4 bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl text-center text-white text-xs font-bold shadow-lg shadow-orange-500/30">
                  🎉 You earned 50 points!
                </div>
              </div>
            </div>
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl"></div>
          </div>

          {/* Floating Cards Behind */}
          <div className="absolute top-10 right-0 lg:-right-10 bg-white/80 backdrop-blur-xl p-4 rounded-2xl border border-white shadow-xl animate-bounce-slow hidden sm:block">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg text-green-600"><TrendingUp size={20} /></div>
              <div>
                <p className="text-gray-500 text-xs">Sales Today</p>
                <p className="text-slate-900 font-bold text-lg">+128%</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-20 left-0 lg:-left-12 bg-white/80 backdrop-blur-xl p-4 rounded-2xl border border-white shadow-xl animate-bounce-slow delay-700 hidden sm:block">
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-2 rounded-lg text-orange-600"><QrCode size={20} /></div>
              <div>
                <p className="text-slate-900 font-bold">Scan for Menu</p>
                <p className="text-gray-500 text-xs">Contactless & Fast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. Features Grid
const features = [
  { icon: Layers, title: "Modern Delivery-Style UI", desc: "A premium interface that feels like a top-tier delivery app. Very easy for customers to use.", color: "from-blue-500 to-cyan-500" },
  { icon: Smartphone, title: "Update Prices from Phone", desc: "No more re-printing. Update any price or dish instantly directly from your smartphone.", color: "from-purple-500 to-pink-500" },
  { icon: Zap, title: "Ads & 'Must-Try' Items", desc: "Boost sales by showing high-margin items and banner ads inside the menu.", color: "from-yellow-500 to-orange-500" },
  { icon: Check, title: "Add-to-List Ordering", desc: "Customers build a wishlist for the waiter, speeding up order taking and accuracy.", color: "from-green-500 to-emerald-500" },
  { icon: BookOpen, title: "3D Flipbook Experience", desc: "Beautiful interactive 3D flipbook for a premium dine-in experience.", color: "from-indigo-500 to-violet-500" },
  { icon: RefreshCw, title: "Instant 86'ing", desc: "Out of stock? Hide items instantly across all tables in a single click.", color: "from-red-500 to-rose-500" },
  { icon: Gamepad2, title: "Gamified Rewards", desc: "Engage users with points, badges & challenges to keep them returning.", color: "from-orange-500 to-pink-500" },
  { icon: Leaf, title: "Eco-Friendly", desc: "Stop struggling with paper waste. Go paperless and reduce your carbon footprint.", color: "from-lime-500 to-green-500" },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold tracking-wide uppercase mb-2">Features</h2>
          <h3 className="text-4xl font-bold text-slate-900">Everything on the Menu</h3>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Powerful tools designed to modernize your restaurant operations.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl border border-slate-100 hover:border-orange-100 transition-all hover:-translate-y-1">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                <feature.icon className="text-white w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. Why Choose Us
const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
               Why Restaurants Love <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Digify</span>
             </h2>
             <div className="space-y-6">
               {[
                 { title: 'Visual Clarity, Less Doubts', desc: 'Dynamic tags like "Spicy" or "Must-Try" answer guest questions instantly, freeing up your staff and speeding up the ordering process.', icon: Zap },
                 { title: "Increase Average Order Value", desc: "Smart upsells and visual menus encourage customers to order more.", icon: TrendingUp },
                 { title: "Zero Printing Costs", desc: "Stop spending thousands on paper menus every time you change a price.", icon: Layout },
                 { title: "Works on Any Device", desc: "No app download needed. Works in any browser on iOS and Android.", icon: Globe },
                 { title: "Cloud-Based & Secure", desc: "Your data is backed up instantly and protected by enterprise security.", icon: ShieldCheck },
               ].map((item, i) => (
                 <div key={i} className="flex gap-4">
                   <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-orange-500">
                     <item.icon size={20} />
                   </div>
                   <div>
                     <h4 className="text-slate-900 font-bold text-lg">{item.title}</h4>
                     <p className="text-slate-500 text-sm">{item.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl transform rotate-3 blur-sm opacity-30"></div>
            <div className="relative bg-white border border-slate-200 p-8 rounded-2xl shadow-xl">
              <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
                <span className="text-slate-400 font-mono">dashboard_preview.exe</span>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              
              {/* Abstract Dashboard UI */}
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                   <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-100">
                     <div className="text-xs text-slate-400">Views</div>
                     <div className="text-xl font-bold text-slate-800">2.4k</div>
                   </div>
                   <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-100">
                     <div className="text-xs text-slate-400">Orders</div>
                     <div className="text-xl font-bold text-green-500">148</div>
                   </div>
                   <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-100">
                     <div className="text-xs text-slate-400">Revenue</div>
                     <div className="text-xl font-bold text-orange-500">₹3.2k</div>
                   </div>
                </div>
                <div className="h-40 bg-slate-50 rounded-lg flex items-end justify-between p-4 gap-2 border border-slate-100">
                   {[40, 70, 50, 90, 60, 80, 50].map((h, i) => (
                     <div key={i} className="w-full bg-orange-500/80 rounded-t hover:bg-orange-500 transition-colors" style={{height: `${h}%`}}></div>
                   ))}
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 h-24 bg-slate-50 rounded-lg p-3 border border-slate-100">
                    <div className="w-8 h-8 bg-orange-100 rounded mb-2"></div>
                    <div className="h-2 w-16 bg-slate-200 rounded"></div>
                  </div>
                  <div className="flex-1 h-24 bg-slate-50 rounded-lg p-3 border border-slate-100">
                    <div className="w-8 h-8 bg-red-100 rounded mb-2"></div>
                    <div className="h-2 w-16 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 5. UI Showcase Tabs
const Showcase = () => {
  const [activeTab, setActiveTab] = useState('mobile');

  const tabs = [
    { id: 'mobile', label: 'Mobile Menu', icon: Smartphone },
    { id: 'dashboard', label: 'Admin Dashboard', icon: BarChart3 },
    { id: 'rewards', label: 'Rewards System', icon: Star },
  ];

  return (
    <>
    </>
    // <section id="showcase" className="py-20 bg-white">
    //   <div className="max-w-5xl mx-auto px-4 text-center">
    //      <h2 className="text-4xl font-bold text-slate-900 mb-10">Designed for Experience</h2>
         
    //      <div className="flex justify-center space-x-2 mb-12">
    //         {tabs.map(tab => (
    //           <button
    //             key={tab.id}
    //             onClick={() => setActiveTab(tab.id)}
    //             className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all border ${
    //               activeTab === tab.id 
    //               ? 'bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/30' 
    //               : 'bg-white border-gray-200 text-slate-500 hover:bg-slate-50'
    //             }`}
    //           >
    //             <tab.icon size={18} />
    //             <span className="font-medium">{tab.label}</span>
    //           </button>
    //         ))}
    //      </div>

    //      <div className="relative bg-slate-50 rounded-3xl p-2 border border-slate-200 shadow-xl overflow-hidden min-h-[400px]">
    //         {/* Conditional Content based on Active Tab - Abstract UI */}
            
    //         {activeTab === 'mobile' && (
    //           <div className="flex justify-center items-center h-full py-8 animate-fade-in">
    //              <div className="flex gap-4 overflow-x-auto pb-4 px-4 snap-x">
    //                {[1,2,3].map(i => (
    //                  <div key={i} className="flex-shrink-0 w-64 bg-white border border-slate-100 rounded-2xl p-4 shadow-lg snap-center">
    //                     <div className="w-full h-32 bg-slate-100 rounded-lg mb-4 relative overflow-hidden">
    //                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent flex items-end p-2">
    //                           <span className="text-white font-bold text-sm">Delicious Item #{i}</span>
    //                        </div>
    //                     </div>
    //                     <div className="flex justify-between items-center">
    //                        <span className="text-orange-600 font-bold">$14.00</span>
    //                        <button className="bg-slate-900 text-white p-2 rounded-lg text-xs hover:bg-orange-500 transition-colors">Add +</button>
    //                     </div>
    //                  </div>
    //                ))}
    //              </div>
    //           </div>
    //         )}

    //         {activeTab === 'dashboard' && (
    //           <div className="h-full p-8 animate-fade-in">
    //             <div className="grid grid-cols-4 gap-4 mb-4">
    //               {[1,2,3,4].map(i => <div key={i} className="h-24 bg-white shadow-sm border border-slate-100 rounded-xl"></div>)}
    //             </div>
    //             <div className="h-64 bg-white shadow-sm border border-slate-100 rounded-xl flex items-center justify-center text-slate-400">
    //               Analytics Graph Placeholder
    //             </div>
    //           </div>
    //         )}

    //         {activeTab === 'rewards' && (
    //           <div className="flex flex-col items-center justify-center h-full py-12 animate-fade-in">
    //              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20">
    //                 <Star className="text-white w-12 h-12 fill-current" />
    //              </div>
    //              <h3 className="text-2xl font-bold text-slate-900 mb-2">Gold Member</h3>
    //              <p className="text-slate-500 mb-6">1,250 Points Balance</p>
    //              <div className="w-64 h-2 bg-slate-200 rounded-full overflow-hidden">
    //                <div className="w-3/4 h-full bg-yellow-500"></div>
    //              </div>
    //              <p className="text-xs text-slate-400 mt-2">250 points to Platinum</p>
    //           </div>
    //         )}
    //      </div>
    //   </div>
    // </section>
  );
};

// 6. Eco Friendly Section
const EcoFriendly = () => {
  return (
    <section className="py-20 bg-green-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-block p-3 rounded-full bg-green-100 mb-6">
          <Leaf className="text-green-600 w-8 h-8" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Go Digital. <span className="text-green-600">Go Green.</span></h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          Switch from paper menus to a sustainable digital alternative. Reduce waste, save trees, and cut printing costs to zero.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
           <div className="p-6 bg-white rounded-xl border border-green-100 shadow-sm">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-slate-600">Paper Reduction</div>
           </div>
           <div className="p-6 bg-white rounded-xl border border-green-100 shadow-sm">
              <div className="text-4xl font-bold text-green-600 mb-2">₹0</div>
              <div className="text-slate-600">Printing Costs</div>
           </div>
           <div className="p-6 bg-white rounded-xl border border-green-100 shadow-sm">
              <div className="text-4xl font-bold text-green-600 mb-2">Eco</div>
              <div className="text-slate-600">Brand Image</div>
           </div>
        </div>
      </div>
    </section>
  );
};

// 7. Testimonials
const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Trusted by Modern Restaurants</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Sarah Jenkins", role: "Owner, The Urban Cafe", text: "Digify transformed our ordering process. The flipbook menu looks amazing on iPads." },
            { name: "Marco Rossi", role: "Manager, Bella Italia", text: "Updating prices used to be a nightmare. Now it takes seconds. Highly recommended." },
            { name: "David Chen", role: "Founder, Wok & Roll", text: "The gamification features actually work. Customers love earning badges for trying new dishes." },
          ].map((t, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 relative">
              <div className="text-orange-300 text-4xl font-serif absolute top-4 left-4">"</div>
              <p className="text-slate-600 italic mb-6 mt-4 relative z-10">{t.text}</p>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-slate-300"></div>
                 <div>
                   <h4 className="text-slate-900 font-bold text-sm">{t.name}</h4>
                   <p className="text-slate-500 text-xs">{t.role}</p>
                 </div>
              </div>
              <div className="flex gap-1 text-orange-400 mt-4">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 8. Pricing
const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-slate-900">Simple, Transparent Pricing</h2>
             <p className="text-slate-500 mt-2">No hidden fees. Cancel anytime.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             {/* 6 Months Plan */}
             <div className="bg-white rounded-2xl p-8 border border-slate-200 flex flex-col shadow-sm hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">6 Months</h3>
                <div className="text-4xl font-bold text-slate-900 mb-2">Rs. 649</div>
                <div className="text-lg text-orange-600 font-medium mb-6">Just Rs. 108<span className="text-sm text-slate-400 font-normal">/mo</span></div>
                <ul className="space-y-4 mb-8 flex-1">
                   <li className="flex items-center text-slate-600 text-sm"><Check size={16} className="text-orange-500 mr-2" /> Digital Menu Management</li>
                   <li className="flex items-center text-slate-600 text-sm"><Check size={16} className="text-orange-500 mr-2" /> QR Code Generator</li>
                   <li className="flex items-center text-slate-600 text-sm"><Check size={16} className="text-orange-500 mr-2" /> Basic Analytics</li>
                   <li className="flex items-center text-slate-600 text-sm"><Check size={16} className="text-orange-500 mr-2" /> Ads & Promotions Support</li>
                </ul>
                <button className="w-full py-3 rounded-xl border border-orange-500 text-orange-600 font-bold hover:bg-orange-50 transition-colors">Choose 6 Months</button>
             </div>

             {/* 1 Year Plan - Featured */}
             <div className="bg-white rounded-2xl p-8 border-2 border-orange-500 relative shadow-2xl flex flex-col transform hover:scale-[1.02] transition-transform">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Best Value
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">1 Year</h3>
                <div className="text-4xl font-bold text-slate-900 mb-2">Rs. 1099</div>
                <div className="text-lg text-orange-600 font-medium mb-6">Just Rs. 91.5<span className="text-sm text-slate-400 font-normal">/mo</span></div>
                
                <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mb-8">
                   <p className="text-orange-800 text-sm font-bold flex items-center gap-2">
                     <Zap size={16} className="fill-current" /> 
                     Limited Offer: 2 Acrylic Menu Stands absolutely FREE!
                   </p>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                   <li className="flex items-center text-slate-700 text-sm"><Check size={16} className="text-orange-500 mr-2" /> Everything in 6 Months</li>
                   <li className="flex items-center text-slate-700 text-sm"><Check size={16} className="text-orange-500 mr-2" /> Flipbook Mode</li>
                   <li className="flex items-center text-slate-700 text-sm"><Check size={16} className="text-orange-500 mr-2" /> Advanced Rewards System</li>
                   <li className="flex items-center text-slate-700 text-sm"><Check size={16} className="text-orange-500 mr-2" /> Priority Implementation Support</li>
                </ul>
                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold shadow-lg hover:shadow-orange-500/50 transition-all">Start 1 Year Plan</button>
             </div>
          </div>
       </div>
    </section>
  );
};

// 9. Footer
const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={digifyMenuLogoWhite} alt="Digify Menu Logo" className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 text-sm">
              Empowering restaurants with next-gen digital tools. Digital. Dynamic. Delicious.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-orange-400 cursor-pointer">Features</li>
              <li className="hover:text-orange-400 cursor-pointer">Pricing</li>
              <li className="hover:text-orange-400 cursor-pointer">Showcase</li>
              <li className="hover:text-orange-400 cursor-pointer">Updates</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-orange-400 cursor-pointer">About Us</li>
              <li className="hover:text-orange-400 cursor-pointer">Careers</li>
              <li className="hover:text-orange-400 cursor-pointer">Blog</li>
              <li className="hover:text-orange-400 cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              {['Twitter', 'Facebook', 'Instagram', 'LinkedIn'].map((social, i) => (
                <div key={i} className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-orange-600 hover:text-white transition-colors cursor-pointer">
                  {social[0]}
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs text-gray-500">
               <span>Powered by</span>
               <span className="font-bold text-gray-300">HEXAMETA</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© 2024 Digify Menu. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-600">
            <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const DigifyLanding = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      <Navbar />
      <Hero isDemoModalOpen={isDemoModalOpen} setIsDemoModalOpen={setIsDemoModalOpen} />
      <Features />
      <WhyChooseUs />
      {/* <Showcase /> */}
      {/* <Testimonials /> */}
      <EcoFriendly />
      <Pricing />
      <Footer />
    </div>
  );
};

export default DigifyLanding;