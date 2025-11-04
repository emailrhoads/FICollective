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
    answer: "FI Collective is a welcoming community and co-working space for people pursuing Financial Independence. We provide a comfortable workspace, networking opportunities, and educational events focused on achieving financial freedom through strategic investing, intentional living, and supportive community."
  },
  {
    question: "What does 'FI' stand for?",
    answer: "FI stands for Financial Independence—the ability to live without being dependent on employment income. It's about building passive income streams, smart investing, and intentional living to achieve freedom from the traditional 9-5 grind. Some pursue early retirement (FIRE), while others just want more choices in life."
  },
  {
    question: "How much are membership dues?",
    answer: "We offer flexible membership tiers: Part-Time ($99/month) for 10 days access, Full-Time ($199/month) for unlimited access, and Dedicated Desk ($299/month) with your own assigned workspace. All memberships include WiFi, beverages, and access to community events. Day passes are also available for $25."
  },
  {
    question: "What amenities are included?",
    answer: "All members enjoy high-speed WiFi, unlimited coffee and tea, access to meeting rooms, quiet focus areas, event space, printing facilities, and lockers. Full-Time and Dedicated Desk members also get 24/7 access and priority booking for meeting rooms."
  },
  {
    question: "Do I need to be pursuing FIRE to join?",
    answer: "Not at all! While FI Collective is designed for people interested in Financial Independence, we welcome anyone who values intentional financial planning, entrepreneurship, and community. Whether you're just starting your FI journey, running a side hustle, or already financially independent, you'll find like-minded people here."
  },
  {
    question: "What kind of events do you host?",
    answer: "We host regular workshops on investing, real estate, side hustles, and tax optimization. We also organize monthly networking meetups, book clubs focused on FI literature, guest speaker sessions, and casual community lunches. All events are included with membership, and some are open to the public."
  },
  {
    question: "Can I try it before committing?",
    answer: "Absolutely! We offer day passes for $25, which gives you full access to the space for one day. We also host free community events monthly that are open to the public—a great way to meet members, see the space, and get a feel for our community vibe."
  },
  {
    question: "Is there parking available?",
    answer: "Yes! We have a dedicated parking lot with free parking for all members. There's also plenty of street parking available on Main Street. We're bike-friendly too, with secure bike storage available inside the building."
  }
];

export default function FAQSection() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about joining our community
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-2xl px-6 bg-card"
              data-testid={`accordion-faq-${index}`}
            >
              <AccordionTrigger className="text-base md:text-lg text-left hover:no-underline py-6 font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
