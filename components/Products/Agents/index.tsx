"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// --- Types & Data ---
type SectionId = "overview" | "features" | "integration" | "examples" | "faq";

interface UseCaseProps {
    // We can expand this later to make it fully dynamic
    title?: string;
    subtitle?: string;
}

const SECTIONS = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Key Services" },
    { id: "examples", label: "Live Examples" },
    { id: "integration", label: "Integration" },
    { id: "faq", label: "FAQ" },
];

const ProductAgent: React.FC<UseCaseProps> = ({
    title = "Custom AI Agent Development",
    subtitle = "We design, build, and deploy intelligent AI workforces tailored to your unique business workflows."
}) => {
    const [activeSection, setActiveSection] = useState<SectionId>("overview");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Smooth scroll handler
    const scrollToSection = (id: SectionId) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setIsMobileMenuOpen(false);
    };

    // Scroll spy to update active section
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200; // Offset

            for (const section of SECTIONS) {
                const element = document.getElementById(section.id);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section.id as SectionId);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative min-h-screen bg-white dark:bg-blacksection text-black dark:text-white font-sans selection:bg-purple-500/30">

            {/* --- BACKGROUND EFFECTS (Borrowed from AiwareHeroTwo) --- */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 h-full w-full 
          bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
          dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] 
          bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"
                />
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-900/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-50 dark:opacity-30" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-900/20 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-50 dark:opacity-30" />
            </div>

            <div className="relative z-10 container mx-auto px-4 py-8 md:py-12 lg:py-20 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* --- SIDEBAR (Desktop) --- */}
                    <aside className="hidden lg:block w-64 shrink-0">
                        <div className="sticky top-24 space-y-8">
                            <div className="p-6 rounded-2xl border border-black/5 dark:border-white/10 bg-white/50 dark:bg-black/20 backdrop-blur-md">
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">On this page</h3>
                                <nav className="flex flex-col space-y-1">
                                    {SECTIONS.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id as SectionId)}
                                            className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === section.id
                                                ? "bg-black/5 dark:bg-white/10 text-black dark:text-white translate-x-1"
                                                : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                                                }`}
                                        >
                                            {section.label}
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            {/* Sidebar CTA */}
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-xl">
                                <h4 className="font-bold text-lg mb-2">Need a Custom Agent?</h4>
                                <p className="text-white/80 text-sm mb-4">Book a consultation to discuss your specific automation needs.</p>
                                <Link href="/contact" className="block w-full py-2 px-4 bg-white text-purple-600 rounded-lg text-center text-sm font-bold hover:bg-gray-100 transition-colors">
                                    Start Project
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* --- MAIN CONTENT --- */}
                    <main className="flex-1 min-w-0">

                        {/* Mobile Header (Menu Toggle) */}
                        <div className="lg:hidden flex items-center justify-between mb-8 pb-4 border-b border-gray-200 dark:border-gray-800">
                            <span className="font-serif italic text-xl">UseCase</span>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                            </button>
                        </div>

                        {/* Mobile Menu Dropdown */}
                        {isMobileMenuOpen && (
                            <div className="lg:hidden mb-8 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black/50">
                                <nav className="flex flex-col space-y-2">
                                    {SECTIONS.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id as SectionId)}
                                            className={`text-left px-3 py-2 rounded-lg font-medium text-sm ${activeSection === section.id ? 'bg-white dark:bg-white/10 shadow-sm' : ''}`}
                                        >
                                            {section.label}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        )}

                        {/* HERO SECTION */}
                        <section id="overview" className="mb-20 pt-4 scroll-mt-24">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-6">
                                    Service
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                                    {title}
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl">
                                    {subtitle}
                                </p>

                                {/* Hero Visual */}
                                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 bg-gray-100 dark:bg-gray-900 group">
                                    {/* Placeholder for actual image/video */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                                        <span className="text-gray-400 dark:text-gray-500 font-medium flex flex-col items-center gap-4">
                                            <svg className="w-12 h-12 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                            Hero Dashboard Interface
                                        </span>
                                    </div>

                                    {/* Overlay Elements (Fake UI) */}
                                    <div className="absolute top-4 left-4 right-4 h-8 bg-white dark:bg-black/50 rounded-lg backdrop-blur-sm flex items-center px-3 gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-400" />
                                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                        <div className="w-2 h-2 rounded-full bg-green-400" />
                                    </div>
                                </div>
                            </motion.div>
                        </section>

                        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent mb-20"></div>

                        {/* FEATURES SECTION */}
                        <section id="features" className="mb-20 scroll-mt-24">
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white text-sm">01</span>
                                Key Services
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: "Custom LLM Training",
                                        desc: "We fine-tune state-of-the-art models on your company data to ensure your agents speak your language and know your business inside out.",
                                        icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                    },
                                    {
                                        title: "Multi-Platform Deployment",
                                        desc: "Whether you need agents on WhatsApp, Slack, Microsoft Teams, or embedded in your web app, we build where your users are.",
                                        icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    },
                                    {
                                        title: "Workflow Automation",
                                        desc: "Our agents don't just chat; they work. We integrate with your APIs, databases, and tools (Zapier, Make, Salesforce) to perform actions autonomously.",
                                        icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                    },
                                    {
                                        title: "Enterprise Security",
                                        desc: "We prioritize data privacy and security, implementing strict access controls, encryption, and optional on-premise deployment.",
                                        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    }
                                ].map((feature, i) => (
                                    <div key={i} className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-purple-500/50 transition-colors shadow-lg shadow-gray-200/50 dark:shadow-none">
                                        <div className="w-12 h-12 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} /></svg>
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {feature.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* IMPLEMENTATION EXAMPLES SECTION */}
                        <section id="examples" className="mb-20 scroll-mt-24">
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center text-white text-sm">02</span>
                                Implementation Examples
                            </h2>

                            <div className="grid gap-6">
                                {/* Example 1 */}
                                <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 p-8 transition-all hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/10">
                                    <div className="flex flex-col md:flex-row gap-8 items-start">
                                        <div className="w-full md:w-1/3 shrink-0">
                                            <div className="aspect-video rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
                                                <span className="font-bold text-lg">Customer Support</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                                                24/7 Support Agent
                                                <span className="px-2 py-1 rounded text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">Live</span>
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                                Automatically handles 80% of L1 support tickets. Resets passwords, checks order status, and answers FAQs using your knowledge base. Escalates complex issues to human agents with full context.
                                            </p>
                                            <ul className="space-y-2 mb-6">
                                                <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                    <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    Reduces response time by 99%
                                                </li>
                                                <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                    <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    Integrates with Zendesk & Intercom
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Example 2 */}
                                <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 p-8 transition-all hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10">
                                    <div className="flex flex-col md:flex-row gap-8 items-start">
                                        <div className="w-full md:w-1/3 shrink-0">
                                            <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg">
                                                <span className="font-bold text-lg">Lead Generation</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                                                Inbound Lead Qualifier
                                                <span className="px-2 py-1 rounded text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">Beta</span>
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                                Engages website visitors in real-time. Qualifies leads by asking key budget and timeline questions, then schedules meetings directly into your sales team's calendar.
                                            </p>
                                            <ul className="space-y-2 mb-6">
                                                <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    Increases conversion rate by 3x
                                                </li>
                                                <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    Syncs with HubSpot & Salesforce
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Example 3 */}
                                <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 p-8 transition-all hover:border-pink-500/30 hover:shadow-xl hover:shadow-pink-500/10">
                                    <div className="flex flex-col md:flex-row gap-8 items-start">
                                        <div className="w-full md:w-1/3 shrink-0">
                                            <div className="aspect-video rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white shadow-lg">
                                                <span className="font-bold text-lg">Internal HR</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                                                Employee Assistant
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                                Instant answers for internal policy questions. "How many vacation days do I have left?" or "What's the expense reimbursement process?". Connects to your internal wiki and HRIS.
                                            </p>
                                            <ul className="space-y-2 mb-6">
                                                <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                    <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    Reduces HR admin workload
                                                </li>
                                                <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                    <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    Secure access via SSO
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* INTEGRATION SECTION */}
                        <section id="integration" className="mb-20 scroll-mt-24">
                            <div className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-white/5">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center text-white text-sm">03</span>
                                    Seamless Integration
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                                    We build agents that connect deeply with your existing stack. Whether it's your CRM, Database, or internal API, we ensure seamless data flow.
                                </p>

                                <div className="flex flex-wrap gap-4 mb-8">
                                    {["Next.js", "React", "Python", "Node.js", "Stripe"].map(tech => (
                                        <div key={tech} className="px-4 py-2 rounded-full bg-white dark:bg-black/50 border border-gray-200 dark:border-gray-700 text-sm font-semibold">
                                            {tech}
                                        </div>
                                    ))}
                                </div>

                                <div className="relative rounded-xl overflow-hidden bg-[#1e1e1e] p-4 font-mono text-sm text-gray-300 shadow-inner">
                                    <div className="flex items-center gap-2 mb-4 opacity-50">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                        <span className="ml-2 text-xs">integration.py</span>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-gray-500"># Securely connecting custom agent to your API</p>
                                        <p><span className="text-pink-500">import</span> ainsider_agent</p>
                                        <p>agent = ainsider_agent.connect(api_key=<span className="text-green-400">"..."</span>)</p>
                                        <p className="text-green-400">✓ Secure connection established</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* FAQ SECTION */}
                        <section id="faq" className="mb-20 scroll-mt-24">
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white text-sm">04</span>
                                Frequently Asked Questions
                            </h2>
                            <div className="space-y-4">
                                {[
                                    {
                                        q: "How much does a custom agent cost?",
                                        a: "Pricing depends on complexity and integration requirements. We essentially offer two models: a one-time development fee or a monthly retainer for continuous optimization. Contact us for a quote."
                                    },
                                    {
                                        q: "Do you provide ongoing support?",
                                        a: "Yes. AI agents require monitoring and fine-tuning. We offer support packages to ensure your agent stays accurate, efficient, and up-to-date with your latest business data."
                                    },
                                    {
                                        q: "Can you train the agent on our private data?",
                                        a: "Absolutely. RAG (Retrieval-Augmented Generation) is our specialty. We securely connect the agent to your documents, wikis, and databases without training public models on your data."
                                    }
                                ].map((faq, i) => (
                                    <details key={i} className="group p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 open:ring-1 open:ring-purple-500/20">
                                        <summary className="font-bold text-lg cursor-pointer flex items-center justify-between list-none">
                                            {faq.q}
                                            <span className="transition-transform group-open:rotate-180">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                            </span>
                                        </summary>
                                        <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </section>

                    </main>
                </div>
            </div>
        </div>
    );
};

export default ProductAgent;
