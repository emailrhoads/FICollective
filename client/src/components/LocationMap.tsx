import { Card } from "@/components/ui/card";
import { MapPin, Clock, Coffee } from "lucide-react";

export default function LocationMap() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Visit Our Headquarters
          </h2>
          <p className="text-lg text-muted-foreground">
            Our HQ building is located on Main Street in Longmont. Drop by during open hours—we'd love to show you around!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card className="p-8 rounded-2xl space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 text-foreground">
                  Headquarters
                </h3>
                <p className="text-muted-foreground">
                  FI Collective HQ<br />
                  Main Street<br />
                  Longmont, CO 80501
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 text-foreground">
                  Hours
                </h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                  <p>Saturday: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Coffee className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 text-foreground">
                  What's Included
                </h3>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> High-speed WiFi
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Free coffee & tea
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Meeting rooms
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Quiet focus areas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Event space
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden rounded-2xl" data-testid="card-map">
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
