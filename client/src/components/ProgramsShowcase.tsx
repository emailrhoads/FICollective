import { Card } from "@/components/ui/card";
import { Calendar, Users, BookOpen, Heart, Presentation, Lightbulb } from "lucide-react";
import communityImage from "@assets/generated_images/Jovial_mixed-gender_community_dinner_ed95d9fd.png";
import moneyPlantIcon from "@assets/generated_images/Money_plant_illustration_6a80ce05.png";
import bookIcon from "@assets/generated_images/Book_learning_illustration_454db821.png";
import handsIcon from "@assets/generated_images/Helping_hands_illustration_e1cfca0d.png";

export default function ProgramsShowcase() {
  return (
    <section className="py-20 md:py-32 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header with decorative elements */}
        <div className="text-center mb-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-primary/20 text-4xl font-serif">❦</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4 italic">
            Tending Our Garden Together
          </h2>
          <p className="font-display text-lg text-muted-foreground max-w-2xl mx-auto italic">
            Spring plantings of knowledge. Summer growth of relationships. Autumn harvests of wisdom. Winter rest and reflection. Partaking in what we've grown, amongst friends.
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
              <div className="absolute top-2 left-2 text-card text-2xl drop-shadow-md font-serif">❦</div>
              <div className="absolute top-2 right-2 text-card text-2xl drop-shadow-md font-serif">❦</div>
            </div>
            <div className="space-y-8">
              <div>
                <div className="font-mono text-xs tracking-wider text-primary uppercase mb-2">
                  GARDEN I • COMMUNITY
                </div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 italic">
                  Partaking in the Harvest
                </h3>
                <p className="font-display text-lg text-muted-foreground leading-relaxed">
                  The best fruits taste sweeter amongst those who helped you grow. Weekly dinners and celebrations where we partake together in what we've cultivated.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 border-2 border-l-4 border-l-primary rounded-sm">
                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-2">Tuesday Harvest Dinners</h4>
                      <p className="font-display text-muted-foreground italic">
                        Weekly potluck gatherings where we partake in food, stories, and strategies amongst friends. Growing together, eating together, planning together.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-l-4 border-l-primary rounded-sm">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-2">Seasonal Celebrations</h4>
                      <p className="font-display text-muted-foreground italic">
                        Mark the seasons together—spring plantings, summer growth, autumn harvests, winter planning. These celebrations make our garden feel like home.
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
            <div className="text-primary/30 text-2xl font-serif">✺</div>
            <div className="w-16 h-px bg-border"></div>
          </div>

          {/* Learning & Growth */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-1 border-2 border-border rounded-sm p-12 bg-muted/20 flex items-center justify-center min-h-[400px]">
              <img src={bookIcon} alt="Book and learning" className="w-48 h-48 opacity-60" />
            </div>
            <div className="space-y-8 lg:order-2">
              <div>
                <div className="font-mono text-xs tracking-wider text-primary uppercase mb-2">
                  GARDEN II • CULTIVATION
                </div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 italic">
                  Tending & Growing
                </h3>
                <p className="font-display text-lg text-muted-foreground leading-relaxed">
                  Learn from master gardeners, share cultivation techniques, and tend your financial garden with expert guidance and peer wisdom.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 border-2 border-l-4 border-l-primary rounded-sm">
                  <div className="flex items-start gap-4">
                    <Presentation className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-2">Master Gardener Series</h4>
                      <p className="font-display text-muted-foreground italic">
                        Monthly talks from experienced cultivators on growing wealth, sustainable living, real estate harvests, and passion-driven work.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-l-4 border-l-primary rounded-sm">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-2">Cultivation Workshops</h4>
                      <p className="font-display text-muted-foreground italic">
                        Hands-on sessions: planting investment seeds, tax-efficient pruning, index fund composting, entrepreneurial propagation.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-l-4 border-l-primary rounded-sm">
                  <div className="flex items-start gap-4">
                    <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-2">Garden Library Circles</h4>
                      <p className="font-display text-muted-foreground italic">
                        Monthly book discussions on financial wisdom, sustainable growth, and cultivating meaningful work. Seeds of knowledge shared.
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
            <div className="text-primary/30 text-2xl font-serif">✺</div>
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
                  GARDEN III • GIVING BACK
                </div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 italic">
                  Giving Back
                </h3>
                <p className="font-display text-lg text-muted-foreground leading-relaxed">
                  A well-tended garden produces more than one household needs. We give back to the broader community through service, teaching neighbors to plant their own seeds.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 border-2 border-l-4 border-l-primary rounded-sm">
                  <div className="flex items-start gap-4">
                    <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-2">Quarterly Community Harvest</h4>
                      <p className="font-display text-muted-foreground italic">
                        Volunteer together: food security gardens, environmental planting, financial literacy seeds for neighbors. What we've grown, we give back to help others grow.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-muted/50 border-2 rounded-sm">
                  <p className="font-display text-foreground italic leading-relaxed">
                    "A thriving financial garden produces more than you can consume alone. True wealth means partaking in the harvest amongst those who helped you grow, and teaching those still learning to plant."
                  </p>
                  <p className="font-display text-sm text-muted-foreground mt-2">— Garden Wisdom, FI Collective</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
