import PageTransition from '../PageTransition';

export default function PageTransitionExample() {
  return (
    <PageTransition location="/">
      <div className="p-8 text-center">
        <h1 className="font-mono text-2xl font-bold">Page Transition Example</h1>
        <p className="font-mono text-sm text-muted-foreground mt-4">
          This component wraps pages with zoom animations
        </p>
      </div>
    </PageTransition>
  );
}
