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
    answer: "FI Collective is a community garden where you cultivate financial independence. We provide the fertile soil (workspace), the tools (education), fellow gardeners (community), and shared harvests (dinners and events). Think of it as tending your financial garden amongst friends who are growing their own."
  },
  {
    question: "What does 'FI' signify?",
    answer: "FI means Financial Independence—planting enough investment seeds that their growth eventually sustains you without traditional employment. Some harvest early (FIRE - early retirement), others tend their garden while working, and some simply enjoy the peace of knowing their garden is thriving and productive."
  },
  {
    question: "What's your investment philosophy?",
    answer: "To vanguard the fidelity of our garden, we generally believe in flat-fee advisors and low-cost index fund ETFs. Plant it, let it grow, keep what you've cultivated. There are always exceptions—we're not a one-size-fits-all garden. We're here to help you grow your own, unique garden."
  },
  {
    question: "Do people actually work in the co-working space?",
    answer: "As little as possible! The space isn't buzzing with daily workers—it's more like a quiet greenhouse for seasonal preparation. Members come for Tuesday dinners, monthly events, workshops, and the occasional focused work session. Think of it as your quiet place to prepare seasonal efforts, not a bustling daily office."
  },
  {
    question: "What programs and gatherings do you offer?",
    answer: "Spring brings new workshops (planting investment seeds). Summer grows our speaker series and book clubs. Autumn delivers our Tuesday harvest dinners and celebrations. Winter offers reflection and planning sessions. Plus quarterly volunteering where we help others start their own gardens. All seasons, all programs included with membership."
  },
  {
    question: "What is the membership investment?",
    answer: "We offer three tiers: Part-Time ($XX/monthly) for 10 days access, Full-Time ($YY/monthly) for unlimited access, and Dedicated Desk ($ZZZ/monthly) with your assigned workspace. All memberships include connectivity, refreshments, and access to all community programs and Tuesday dinners. Day passes available for those testing the soil."
  },
  {
    question: "Must I be pursuing FIRE to join?",
    answer: "Not at all! Whether you're just planting your first seeds, actively tending an established garden, or already harvesting from years of growth—you're welcome here. We're gardeners at different seasons of our journeys, learning from each other and partaking in what we've grown together."
  },
  {
    question: "Tell me more about the Tuesday dinners.",
    answer: "Every Tuesday evening, we gather for potluck harvest dinners. Bring what you've made, partake in what others have brought, share cultivation strategies, and most importantly to build genuine friendships. These aren't networking events—they're family dinners amongst people who understand the journey. Many lasting partnerships and friendships grow from these weekly gatherings."
  },
  {
    question: "What topics do your speakers address?",
    answer: "Our master gardeners (speakers) share wisdom on cultivating wealth: index fund composting, real estate harvests, tax-efficient pruning, sustainable living, and turning passions into perennial income. We also hear from members about their own gardens—what they've planted, what's thrived, what they'd prune differently."
  },
  {
    question: "Can I trial before joining?",
    answer: "Absolutely! Come test the soil with a day pass. We also host monthly open events where you can meet fellow gardeners, see the space, and understand if our garden is the right place for your seeds to grow. No commitment required—just curiosity and interest in cultivating financial independence."
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
