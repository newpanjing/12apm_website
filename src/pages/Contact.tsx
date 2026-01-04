
import { Mail, MessageCircle, HelpCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Support & Contact</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Have questions about your order or need help with installation? We're here to help.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 text-center">
          <Mail className="h-10 w-10 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
          <p className="text-slate-400 mb-4">Get a response within 24 hours.</p>
          <a href="mailto:support@12apm.com" className="text-yellow-400 font-semibold hover:underline">support@12apm.com</a>
        </div>

        <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 text-center">
          <MessageCircle className="h-10 w-10 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Social Media</h3>
          <p className="text-slate-400 mb-4">Follow us for updates and inspiration.</p>
          <span className="text-slate-300">@12apmlights</span>
        </div>

        <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 text-center">
          <HelpCircle className="h-10 w-10 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">FAQ</h3>
          <p className="text-slate-400 mb-4">Find answers to common questions.</p>
          <a href="#faq" className="text-yellow-400 font-semibold hover:underline">View FAQ</a>
        </div>
      </div>

      <div id="faq" className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Do you ship internationally?",
              a: "Currently, we ship primarily through Amazon to ensure the fastest delivery. Availability depends on Amazon's shipping policies in your region."
            },
            {
              q: "Are the outdoor lights waterproof?",
              a: "Yes! Our outdoor string lights are IP65 waterproof rated, making them safe for use in rain and snow."
            },
            {
              q: "What is the warranty period?",
              a: "We offer a 1-year warranty on all our products. If you experience any issues, please contact our support team."
            },
            {
              q: "Can I connect multiple strands?",
              a: "Most of our string lights are designed to be connectable. Please check the specific product details for the maximum number of connectable strands."
            }
          ].map((item, index) => (
            <div key={index} className="bg-slate-900 p-6 rounded-lg border border-slate-800">
              <h4 className="text-lg font-semibold text-white mb-2">{item.q}</h4>
              <p className="text-slate-400">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
