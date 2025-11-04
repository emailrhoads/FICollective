import { Card } from "@/components/ui/card";

export default function LocationMap() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <pre className="text-xl md:text-2xl font-bold text-foreground mb-4 leading-tight">
{`┌─────────────────────┐
│  FIND US ON MAIN ST │
└─────────────────────┘`}
          </pre>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-mono font-bold text-base mb-2 text-foreground">
                  ▸ LOCATION
                </h3>
                <p className="font-mono text-sm text-muted-foreground">
                  FI Collective<br />
                  Main Street<br />
                  Longmont, CO 80501
                </p>
              </div>

              <div className="border-t border-border pt-4">
                <h3 className="font-mono font-bold text-base mb-2 text-foreground">
                  ▸ HOURS
                </h3>
                <p className="font-mono text-sm text-muted-foreground">
                  Monday - Friday: 8:00 AM - 8:00 PM<br />
                  Saturday: 9:00 AM - 6:00 PM<br />
                  Sunday: 10:00 AM - 4:00 PM
                </p>
              </div>

              <div className="border-t border-border pt-4">
                <h3 className="font-mono font-bold text-base mb-2 text-foreground">
                  ▸ AMENITIES
                </h3>
                <ul className="font-mono text-sm text-muted-foreground space-y-1">
                  <li>✓ High-speed WiFi</li>
                  <li>✓ Free coffee & tea</li>
                  <li>✓ Meeting rooms</li>
                  <li>✓ Quiet focus areas</li>
                  <li>✓ Event space</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-1 overflow-hidden" data-testid="card-map">
            <div className="relative w-full h-[400px] bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.6951748382847!2d-105.10342492398154!3d40.16738297147854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bec2a2f4d3e79%3A0x9c0f0c0f0c0f0c0f!2sMain%20St%2C%20Longmont%2C%20CO!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FI Collective Location on Main Street, Longmont"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
