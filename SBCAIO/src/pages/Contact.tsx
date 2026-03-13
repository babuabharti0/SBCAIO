import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, ChevronUp, ChevronDown, Users, Bookmark, MessageSquare, Lightbulb, CheckCircle2 } from 'lucide-react';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { submitLead } from '../lib/leadService';

const BASE_URL = 'https://sbcaio.com/';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onClick }) => (
  <div className="border-b border-black/10">
    <button 
      onClick={() => onClick()}
      className="w-full py-6 flex items-center justify-between text-left group"
    >
      <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-primary' : 'text-black group-hover:text-primary'}`}>
        {title}
      </span>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-black'}`}>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <div className="pb-6 text-gray-600 leading-relaxed">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    teamSize: '',
    automationGoal: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const success = await submitLead({ ...formData, source: 'contact_form' });
    setIsSubmitting(false);
    if (success) {
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        industry: '',
        teamSize: '',
        automationGoal: ''
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* Page Title Section */}
      <section className="pt-40 pb-20 bg-dark-classic text-white relative overflow-hidden">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 font-orbitron">Contact Us.</h1>
          <div className="flex items-center space-x-4 text-sm font-medium uppercase tracking-widest text-gray-400">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
            <span className="text-white">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <div className="text-primary font-orbitron font-bold mb-4 uppercase tracking-widest">Let's Talk</div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">Start the Conversation with Our <span className="heading-title-gradient">Team Today.</span></h2>
              <p className="text-gray-600 text-lg">Have a question or a project in mind? Our team is ready to explore ideas, solve challenges, and build smart solutions with you.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <a href="tel:+17253046728" className="flex items-center p-6 rounded-2xl bg-gray-50 hover:bg-primary hover:text-white transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary mr-4 group-hover:bg-white/20 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest opacity-60 mb-1">Phone</div>
                  <div className="font-bold">725-304-6728</div>
                </div>
              </a>
              <a href="mailto:ceo@sbcaio.com" className="flex items-center p-6 rounded-2xl bg-gray-50 hover:bg-primary hover:text-white transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary mr-4 group-hover:bg-white/20 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest opacity-60 mb-1">Email</div>
                  <div className="font-bold">ceo@sbcaio.com</div>
                </div>
              </a>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-black/5">
              <h3 className="text-2xl font-bold mb-6 font-orbitron">Request an Automation Plan</h3>
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 text-green-800 p-6 rounded-2xl flex items-start"
                >
                  <CheckCircle2 className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="font-medium">Thanks! Our team will review your automation opportunities and contact you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                      <input required type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Acme Corp" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                      <input required type="text" name="industry" value={formData.industry} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="E-commerce" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Team Size</label>
                    <input required type="text" name="teamSize" value={formData.teamSize} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="e.g. 1-10, 11-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Automation Goal</label>
                    <textarea required name="automationGoal" value={formData.automationGoal} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none" placeholder="What process would you like to automate?"></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors disabled:opacity-70 flex justify-center items-center"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get My Free Automation Plan'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help & Support Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-primary font-orbitron font-bold mb-4 uppercase tracking-widest">Help & Support</div>
            <h2 className="text-4xl md:text-5xl font-black mb-8">Get the Assistance <span className="heading-title-gradient">You Need.</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Users size={32} />, title: 'Community Forum', desc: 'Connect, share insights, and get help from fellow users and Thinkapt experts.' },
              { icon: <Bookmark size={32} />, title: 'Tutorials', desc: 'Step-by-step guides to help you master Thinkapt’s tools and techniques with ease.' },
              { icon: <MessageSquare size={32} />, title: 'Live Chat', desc: 'Instantly connect with our support team for real-time assistance.' },
              { icon: <Lightbulb size={32} />, title: 'Knowledge Base', desc: 'Access a comprehensive library of articles, guides, and FAQs.' }
            ].map((item, i) => (
              <a key={i} href="#" className="p-8 rounded-3xl bg-white shadow-lg border border-black/5 hover:border-primary/20 transition-all group">
                <div className="w-16 h-16 mb-6 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 font-orbitron">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="text-primary font-orbitron font-bold mb-4 uppercase tracking-widest">Common Questions</div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Answer to Your <span className="heading-title-gradient">Common Questions.</span></h2>
            <p className="text-gray-600">Curious about AI prompt engineering and how Thinkapt can help? Here are key questions to understand our services.</p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-xl">
            {[
              { q: "What types of prompts do you help create?", a: "We specialize in designing prompts for various AI models, including language generation, code completion, chatbots, and data analysis tools to improve accuracy and relevance." },
              { q: "How can prompt engineering improve AI performance?", a: "By carefully crafting prompts, we ensure AI understands context better, reduces errors, and produces more useful, targeted responses tailored to your specific needs." },
              { q: "Can Thinkapt make prompts that fit my industry?", a: "Totally! Whether you're in healthcare, finance, retail, or something else, we customize prompts to match your needs. It helps your AI respond more accurately." },
              { q: "How do you test and refine prompts?", a: "Our team uses iterative testing with real AI systems, analyzing output quality and making adjustments until the prompt yields consistent, reliable results." },
              { q: "Is prompt engineering suitable for all AI platforms?", a: "Yes, we work with a wide range of AI models, including OpenAI’s GPT, Google’s BERT, and other NLP and machine learning frameworks." },
              { q: "How long does it take to develop effective prompts?", a: "Depending on complexity, initial prompt drafts can be ready within days, with ongoing refinements over weeks to optimize performance." },
              { q: "How can I get started with Thinkapt?", a: "Simply reach out via our website or contact form. We’ll discuss your goals and create a customized plan for your AI prompt needs." }
            ].map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                title={faq.q} 
                isOpen={openFaq === idx} 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                {faq.a}
              </AccordionItem>
            ))}
          </div>
        </div>
        
        {/* Decorative Background Images */}
        <img 
          src={`${BASE_URL}wp-content/uploads/2025/07/ai-generative-app-woman-chatting-with-artificial-i-VR7EUAB.jpg`} 
          className="absolute top-20 -left-20 w-64 rounded-3xl opacity-10 rotate-12 hidden xl:block" 
          alt="" 
          referrerPolicy="no-referrer"
        />
        <img 
          src={`${BASE_URL}wp-content/uploads/2025/07/IMG-BSGPQHP.jpeg`} 
          className="absolute bottom-20 -right-20 w-64 rounded-3xl opacity-10 -rotate-12 hidden xl:block" 
          alt="" 
          referrerPolicy="no-referrer"
        />
      </section>
    </>
  );
};
