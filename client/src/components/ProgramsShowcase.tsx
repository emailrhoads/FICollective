import { Card } from "@/components/ui/card";
import { Calendar, Users, BookOpen, Heart, Presentation, Lightbulb } from "lucide-react";
import communityImage from "@assets/generated_images/Illustrated_community_dinner_04a805e7.png";
import moneyPlantIcon from "@assets/generated_images/Money_plant_illustration_6a80ce05.png";
import bookIcon from "@assets/generated_images/Book_learning_illustration_454db821.png";
import handsIcon from "@assets/generated_images/Helping_hands_illustration_e1cfca0d.png";

export default function ProgramsShowcase() {
  return (
    <section className="py-20 md:py-32 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header with decorative elements */}
        <div className="text-center mb-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-primary/20 text-4xl">✿</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4 italic">
            Beyond the Workspace
          </h2>
          <p className="font-display text-lg text-muted-foreground max-w-2xl mx-auto italic">
            Cultivating a community around financial independence, continuous learning, and collective impact.
          </p>
          <div className="mt-6 w-32 h-px bg-border mx-auto"></div>
        </div>

        <div className="space-y-24">
          {/* Community Events */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="border-2 border-border rounded-sm overflow-hidden relative">
              <img 
                src={communityImage} 
                alt="Community members gathering for dinner" 
                className="w-full"
              />
              {/* Corner ornaments */}
              <div className="absolute top-2 left-2 text-card text-2xl drop-shadow-md">✿</div>
              <div className="absolute top-2 right-2 text-card text-2xl drop-shadow-md">✿</div>
            </div>
            <div className="space-y-8">
              <div>
                <div className="font-mono text-xs tracking-wider text-primary uppercase mb-2">
                  COLLECTIO I • COMMUNITAS
                </div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 italic">
                  Community & Connection
                </h3>
                <p className="font-display text-lg text-muted-foreground leading-relaxed">
                  Cultivate genuine relationships with fellow travelers on the path to financial independence.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 border-2 border-l-4 border-l-primary rounded-sm">
                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-2">Weekly Community Dinners</h4>
                      <p className="font-display text-muted-foreground italic">
                        Thursday evenings: potluck gatherings where members share meals, exchange FI strategies, and forge lasting bonds.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-l-4 border-l-primary rounded-sm">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-2">Holiday Celebrations</h4>
                      <p className="font-display text-muted-foreground italic">
                        Annual festivities, summer gatherings, and seasonal celebrations that transform FI Collective into home.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-border"></div>
            <div className="text-primary/30 text-2xl">❖</div>
            <div className="w-16 h-px bg-border"></div>
          </div>

          {/* Learning & Growth */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 lg:order-2">
              <div>
                <div className="font-mono text-xs tracking-wider text-primary uppercase mb-2">
                  COLLECTIO II • ERUDITIO
                </div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 italic">
                  Learning & Growth
                </h3>
                <p className="font-display text-lg text-muted-foreground leading-relaxed">
                  Expand knowledge through expert speakers, hands-on workshops, and collaborative learning.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 border-2 border-l-4 border-l-primary rounded-sm">
                  <div className="flex items-start gap-4">
                    <Presentation className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-2">Monthly Speaker Series</h4>
                      <p className="font-display text-muted-foreground italic">
                        Distinguished guests on personal finance, real estate, sustainable living, and passion-driven ventures.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-l-4 border-l-primary rounded-sm">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-2">Skill-Building Workshops</h4>
                      <p className="font-display text-muted-foreground italic">
                        Practical instruction: tax optimization, index fund investing, entrepreneurial ventures, budgeting systems.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-l-4 border-l-primary rounded-sm">
                  <div className="flex items-start gap-4">
                    <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-2">Book Clubs & Discussion</h4>
                      <p className="font-display text-muted-foreground italic">
                        Monthly literary discussions on FI classics, sustainability, and personal development.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <div className="lg:order-1 border-2 border-border rounded-sm p-12 bg-muted/20 flex items-center justify-center min-h-[400px]">
              <img src={bookIcon} alt="Book and learning" className="w-48 h-48 opacity-60" />
            </div>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-border"></div>
            <div className="text-primary/30 text-2xl">❖</div>
            <div className="w-16 h-px bg-border"></div>
          </div>

          {/* Community Impact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="border-2 border-border rounded-sm p-12 bg-muted/20 flex items-center justify-center min-h-[400px]">
              <img src={handsIcon} alt="Community helping hands" className="w-48 h-48 opacity-60" />
            </div>
            <div className="space-y-8">
              <div>
                <div className="font-mono text-xs tracking-wider text-primary uppercase mb-2">
                  COLLECTIO III • IMPACTUS
                </div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 italic">
                  Making an Impact
                </h3>
                <p className="font-display text-lg text-muted-foreground leading-relaxed">
                  Financial independence grants freedom. We channel that freedom toward meaningful community action.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 border-2 border-l-4 border-l-primary rounded-sm">
                  <div className="flex items-start gap-4">
                    <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-2">Community Activism & Service</h4>
                      <p className="font-display text-muted-foreground italic">
                        Quarterly volunteer initiatives: food security support, environmental stewardship, financial literacy programs for underserved communities.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-muted/50 border-2 rounded-sm">
                  <p className="font-display text-foreground italic leading-relaxed">
                    "Financial independence transcends early retirement—it's about employing freedom to create positive change. This is our practice."
                  </p>
                  <p className="font-display text-sm text-muted-foreground mt-2">— Collected Wisdom, Member Archive</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
