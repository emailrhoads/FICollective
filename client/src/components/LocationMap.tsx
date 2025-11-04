import { Card } from "@/components/ui/card";
import { MapPin, Clock, Coffee } from "lucide-react";

export default function LocationMap() {
  return (
    <section className="py-20 md:py-32 px-8 md:px-16 border-t-2 border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-primary/20 text-4xl font-serif">❦</div>
          <div className="font-mono text-xs tracking-wider text-primary uppercase mb-2">
            LOCUS NOSTER
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4 italic">
            Visit Our Headquarters
          </h2>
          <p className="font-display text-lg text-muted-foreground italic">
            Our headquarters building resides on Main Street in Longmont. Call upon us during operating hours—we'd be delighted to show you around.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card className="p-8 rounded-sm space-y-8 border-2">
            <div className="flex items-start gap-4">
              <div className="border-2 border-primary/30 p-3 rounded-sm">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 text-foreground">
                  Headquarters Location
                </h3>
                <p className="font-display text-muted-foreground italic">
                  FI Collective HQ<br />
                  Main Street<br />
                  Longmont, CO 80501
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="border-2 border-primary/30 p-3 rounded-sm">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 text-foreground">
                  Operating Hours
                </h3>
                <div className="font-display text-muted-foreground space-y-1">
                  <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                  <p>Saturday: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="border-2 border-primary/30 p-3 rounded-sm">
                <Coffee className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 text-foreground">
                  Included Provisions
                </h3>
                <ul className="font-display text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> High-speed connectivity
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Complimentary coffee & tea
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Meeting chambers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Quiet focus sanctuaries
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Event facilities
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden rounded-sm border-2" data-testid="card-map">
            <div className="relative w-full h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.6951748382847!2d-105.10342492398154!3d40.16738297147854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bec2a2f4d3e79%3A0x9c0f0c0f0c0f0c0f!2sMain%20St%2C%20Longmont%2C%20CO!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FI Collective Headquarters on Main Street, Longmont"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
