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
    question: "What constitutes FI Collective?",
    answer: "FI Collective represents a curated community and workspace for individuals pursuing Financial Independence. We furnish professional chambers, networking opportunities, and educational programming centered on achieving financial freedom through strategic investing, intentional living, and community support."
  },
  {
    question: "What does 'FI' signify?",
    answer: "FI denotes Financial Independence—the capacity to exist without dependence upon employment income. It concerns building passive revenue streams, strategic investing, and intentional living to achieve liberation from traditional employment constraints. Some pursue early retirement (FIRE), whilst others seek increased flexibility and life choices."
  },
  {
    question: "What programs and gatherings do you offer?",
    answer: "We host weekly community dinners each Thursday, a monthly speaker series addressing personal finance, sustainability, and passion projects, skill-building workshops (investing, tax optimization, entrepreneurial ventures), book clubs, holiday celebrations, and quarterly volunteer initiatives. All programs are included with membership."
  },
  {
    question: "What is the membership investment?",
    answer: "We offer three tiers: Part-Time ($99/monthly) for 10 days access, Full-Time ($199/monthly) for unlimited access, and Dedicated Desk ($299/monthly) with your assigned workspace. All memberships include connectivity, refreshments, and access to all community programs. Day passes are available for $25."
  },
  {
    question: "Must I be pursuing FIRE to join?",
    answer: "Not at all! Whilst FI Collective is designed for those interested in Financial Independence, we welcome anyone who values intentional financial planning, entrepreneurship, and community. Whether you're commencing your FI journey, operating a business, or already financially independent, you'll discover your people here."
  },
  {
    question: "What amenities are included?",
    answer: "All members enjoy high-speed connectivity, unlimited coffee and tea, meeting chambers, quiet focus sanctuaries, event space, printing facilities, and lockers. Full-Time and Dedicated Desk members also receive round-the-clock access and priority booking for meeting chambers."
  },
  {
    question: "Tell me more about the weekly dinners.",
    answer: "Each Thursday evening, members gather for a potluck-style dinner. It's a casual opportunity to connect with others on the FI path, share strategies, troubleshoot challenges, and build genuine friendships. These dinners often lead to mastermind groups, accountability partnerships, and lasting community bonds."
  },
  {
    question: "What topics do your speakers address?",
    answer: "Our monthly speaker series features experts on personal finance (index investing, real estate, tax strategies), sustainability (minimalism, renewable energy, eco-friendly living), and passion projects (turning hobbies into income, building location-independent businesses). We also host member-led talks where people share their FI journey and lessons learned."
  },
  {
    question: "What kind of volunteering does the community undertake?",
    answer: "We organize quarterly volunteer days focused on community impact: food security support, environmental stewardship projects, and financial literacy workshops for underserved communities. FI grants us freedom—we channel that freedom into making a positive local difference."
  },
  {
    question: "Can I trial before joining?",
    answer: "Absolutely! We offer day passes for $25 with full access to the space. We also host complimentary community events monthly that are open to the public—an excellent way to meet members, see the space, and experience our community atmosphere before committing."
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
