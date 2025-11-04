import { Card } from "@/components/ui/card";
import { Calendar, Users, BookOpen, Heart, Presentation, Lightbulb } from "lucide-react";
import communityImage from "@assets/generated_images/Community_gathering_image_6df5e78e.png";
import workspaceImage from "@assets/generated_images/Cozy_co-working_hero_image_b8d517c8.png";

export default function ProgramsShowcase() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4 tracking-tight">
            More Than Just a Workspace
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're building a community around financial independence, learning, and making an impact together.
          </p>
        </div>

        <div className="space-y-32">
          {/* Community Events */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src={communityImage} 
                alt="Community members gathering for dinner" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 tracking-tight">
                  Community & Connection
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Build genuine relationships with people who share your financial goals and values.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-l-primary">
                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Weekly Community Dinners</h4>
                      <p className="text-muted-foreground">
                        Every Thursday evening, members gather for a potluck dinner. Share a meal, swap FI strategies, and build lasting friendships.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-primary">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Holiday Celebrations</h4>
                      <p className="text-muted-foreground">
                        Annual holiday parties, summer BBQs, and seasonal gatherings that make FI Collective feel like home.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Learning & Growth */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 lg:order-2">
              <div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 tracking-tight">
                  Learn & Grow Together
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Expand your knowledge through expert speakers, hands-on workshops, and peer learning.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-l-primary">
                  <div className="flex items-start gap-4">
                    <Presentation className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Monthly Speaker Series</h4>
                      <p className="text-muted-foreground">
                        Guest speakers on personal finance, real estate investing, sustainable living, and passion projects that fund freedom.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-primary">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Skill-Building Workshops</h4>
                      <p className="text-muted-foreground">
                        Learn practical skills: tax optimization, index fund investing, starting a side hustle, budgeting tools, and more.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-primary">
                  <div className="flex items-start gap-4">
                    <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Book Clubs & Discussion Groups</h4>
                      <p className="text-muted-foreground">
                        Monthly book discussions on FI classics, sustainability, and personal development.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <div className="lg:order-1">
              <img 
                src={workspaceImage} 
                alt="Workshop session with community members" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Community Impact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-muted rounded-lg p-12 flex items-center justify-center min-h-[400px]">
                <Heart className="w-32 h-32 text-primary/20" />
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 tracking-tight">
                  Make an Impact
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Financial independence gives you the freedom to make a difference. We channel that freedom into meaningful community action.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-l-primary">
                  <div className="flex items-start gap-4">
                    <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Community Activism & Volunteering</h4>
                      <p className="text-muted-foreground">
                        Quarterly volunteer days supporting local causes: food banks, environmental cleanup, financial literacy workshops for underserved communities.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-muted/50">
                  <p className="text-foreground italic">
                    "FI isn't just about retiring early—it's about using your freedom to create positive change. That's what we do here."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">— Community Member</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
