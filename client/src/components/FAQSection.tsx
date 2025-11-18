import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What happens after I join?",
    answer: "Welcome to FI Collective! After joining, you'll receive immediate access to our community. We'll send you a welcome packet with your member credentials, access codes for the space, and an invitation to our next Tuesday dinner. You'll also get added to our community calendar and member directory so you can connect with fellow members right away."
  },
  {
    question: "How soon do I get access?",
    answer: "Immediate access! Once your membership is confirmed, you'll receive login credentials for our space within 24 hours. You can start using the co-working area, join our community calendar, and attend events right away. No waiting period—just join and start participating!"
  },
  {
    question: "How do I learn about events?",
    answer: "Events are shared through multiple channels to ensure you never miss a gathering. You'll receive calendar invites via email, updates in our community app, and announcements in our weekly newsletter. Our Google Calendar integration makes it easy to add events to your personal calendar, and we also send friendly reminders before each gathering."
  },
  {
    question: "Who can I reach out to?",
    answer: "You can reach out to anyone in our community! We have community coordinators who help new members get settled, event organizers for specific gatherings, and fellow members who are always happy to share their experiences. Our founder is also available for guidance, and we maintain an open-door policy for questions and support."
  },
  {
    question: "How often are events?",
    answer: "Events happen regularly throughout the week and month. Our signature Tuesday dinners happen every week, while monthly events include workshops, speaker series, and outdoor activities. We also have quarterly volunteering opportunities and seasonal celebrations. Plus, members are always organizing impromptu gatherings and study sessions."
  },
  {
    question: "Can I cancel if I don't like it?",
    answer: "Absolutely, with no hard feelings! We want members who truly enjoy our community. You can cancel your membership at any time with 30 days notice. We believe in building genuine relationships, not trapping people in commitments. If it doesn't feel like the right fit, we're happy to help you find other communities that might be a better match."
  }
];

export default function FAQSection() {
  return (
    <section className="py-24 px-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-2 border-border rounded-sm px-6 bg-card relative"
              data-testid={`accordion-faq-${index}`}
            >
              {/* Decorative corner */}
              <div className="absolute top-2 right-2 text-primary/10 text-sm font-serif">❦</div>
              
              <AccordionTrigger className="font-display text-base md:text-lg text-left hover:no-underline py-6 font-semibold">
                <span className="font-mono text-xs text-primary mr-3">Q{String(index + 1).padStart(2, '0')}.</span>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-display text-base text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
