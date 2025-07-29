interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What's your typical response time?",
    answer: "I usually respond within 24 hours during business days.",
  },
  {
    question: "Do you work on small projects?",
    answer: "Yes! I'm happy to work on projects of all sizes.",
  },
  {
    question: "What's your availability?",
    answer: "I'm currently accepting new projects for Q2 2024.",
  },
];

const FAQCard: React.FC = () => {
  return (
    <div className="max-w-md bg-white rounded-2xl shadow p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-6">Quick FAQ</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index}>
            <p className="font-semibold text-gray-800 text-sm mb-1">{faq.question}</p>
            <p className="text-gray-600 text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQCard;
