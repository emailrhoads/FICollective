import ZoomLink from '../ZoomLink';
import { Button } from "@/components/ui/button";

export default function ZoomLinkExample() {
  return (
    <div className="p-8">
      <ZoomLink href="/example">
        <Button className="font-mono">
          [ CLICK TO ZOOM ]
        </Button>
      </ZoomLink>
    </div>
  );
}
