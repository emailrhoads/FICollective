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
    answer: "FI Collective is a community and co-working space for people pursuing Financial Independence. We provide a professional workspace, networking opportunities, and educational programming focused on achieving financial freedom through smart investing, intentional living, and community support."
  },
  {
    question: "What does 'FI' stand for?",
    answer: "FI stands for Financial Independence—the ability to live without depending on employment income. It's about building passive income streams, strategic investing, and intentional living to achieve freedom from the traditional 9-5. Some pursue early retirement (FIRE), while others want more flexibility and choices in life."
  },
  {
    question: "What programs and events do you offer?",
    answer: "We host weekly community dinners every Thursday, a monthly speaker series covering personal finance, sustainability, and passion projects, skill-building workshops (investing, tax optimization, side hustles), book clubs, holiday parties, and quarterly volunteer days. All programs are included with membership."
  },
  {
    question: "How much is membership?",
    answer: "We offer three tiers: Part-Time ($99/month) for 10 days access, Full-Time ($199/month) for unlimited access, and Dedicated Desk ($299/month) with your own assigned workspace. All memberships include WiFi, beverages, and access to all community programs. Day passes are $25."
  },
  {
    question: "Do I need to be pursuing FIRE to join?",
    answer: "Not at all! While FI Collective is designed for people interested in Financial Independence, we welcome anyone who values intentional financial planning, entrepreneurship, and community. Whether you're just starting your FI journey, running a business, or already financially independent, you'll find your people here."
  },
  {
    question: "What amenities are included?",
    answer: "All members enjoy high-speed WiFi, unlimited coffee and tea, meeting rooms, quiet focus areas, event space, printing facilities, and lockers. Full-Time and Dedicated Desk members also get 24/7 access and priority booking for meeting rooms."
  },
  {
    question: "Tell me more about the weekly dinners.",
    answer: "Every Thursday evening, members gather for a potluck-style dinner. It's a casual way to connect with others on the FI path, share strategies, troubleshoot challenges, and build genuine friendships. These dinners often lead to mastermind groups, accountability partnerships, and lasting community bonds."
  },
  {
    question: "What topics do your speakers cover?",
    answer: "Our monthly speaker series features experts on personal finance (index investing, real estate, tax strategies), sustainability (minimalism, renewable energy, eco-friendly living), and passion projects (turning hobbies into income, building location-independent businesses). We also host member-led talks where people share their FI journey and lessons learned."
  },
  {
    question: "What kind of volunteering does the community do?",
    answer: "We organize quarterly volunteer days focused on community impact: food bank support, environmental cleanup projects, and financial literacy workshops for underserved communities. FI gives us freedom—we channel that freedom into making a positive difference locally."
  },
  {
    question: "Can I try it before joining?",
    answer: "Absolutely! We offer day passes for $25 with full access to the space. We also host free community events monthly that are open to the public—a great way to meet members, see the space, and experience our community vibe before committing."
  }
];

export default function FAQSection() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4 tracking-tight">
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
              className="border border-border rounded-lg px-6 bg-card"
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
