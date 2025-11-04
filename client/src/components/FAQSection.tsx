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
    question: "What is FI Collective?",
    answer: "FI Collective is a community and co-working space dedicated to people pursuing Financial Independence (FI). We provide a professional workspace, networking opportunities, and educational events focused on achieving financial freedom and early retirement."
  },
  {
    question: "What does 'FI' stand for?",
    answer: "FI stands for Financial Independence - the ability to live without being dependent on employment income. It's about building passive income streams, strategic investing, and intentional living to achieve freedom from the traditional 9-5 grind."
  },
  {
    question: "How much are membership dues?",
    answer: "We offer flexible membership tiers: Part-Time ($99/month) for 10 days access, Full-Time ($199/month) for unlimited access, and Dedicated Desk ($299/month) which includes your own assigned workspace. All memberships include WiFi, beverages, and access to community events."
  },
  {
    question: "What amenities are included?",
    answer: "All members get high-speed WiFi, unlimited coffee and tea, access to meeting rooms, quiet focus areas, event space, printing facilities, and lockers. Full-Time and Dedicated Desk members also get 24/7 access and priority booking for meeting rooms."
  },
  {
    question: "Do I need to be pursuing FIRE to join?",
    answer: "While FI Collective is designed for people interested in Financial Independence and Retire Early (FIRE), we welcome anyone who values intentional financial planning, entrepreneurship, and community. Whether you're just starting your FI journey or already financially independent, you'll find like-minded people here."
  },
  {
    question: "What kind of events do you host?",
    answer: "We host regular workshops on investing, real estate, side hustles, and tax optimization. We also organize monthly networking meetups, book clubs focused on FI literature, and guest speaker sessions. All events are included with membership."
  },
  {
    question: "Can I try it before committing to a membership?",
    answer: "Absolutely! We offer day passes for $25, which gives you full access to the space for one day. We also host free community events monthly that are open to the public - a great way to meet members and see the space."
  },
  {
    question: "Is there parking available?",
    answer: "Yes! We have a dedicated parking lot with free parking for all members. There's also plenty of street parking available on Main Street. We're also bike-friendly with secure bike storage available."
  }
];

export default function FAQSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <pre className="text-xl md:text-2xl font-bold text-foreground mb-4 leading-tight">
{`┌──────────────────────────────┐
│  FREQUENTLY ASKED QUESTIONS  │
└──────────────────────────────┘`}
          </pre>
          <p className="font-mono text-sm text-muted-foreground mt-4">
            ▸ Everything you need to know about FI Collective
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-md px-6 bg-card"
              data-testid={`accordion-faq-${index}`}
            >
              <AccordionTrigger className="font-mono text-sm md:text-base text-left hover:no-underline py-4">
                <span className="text-primary mr-2" aria-hidden="true">▸</span>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-mono text-sm text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
