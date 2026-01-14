const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <h3 className="text-xl font-sans font-semibold tracking-[0.15em] text-foreground/60">
              SINGAPORE
            </h3>
            <p className="text-sm font-sans tracking-[0.4em] text-muted-foreground/60">
              HOROLOGY
            </p>
          </div>
          <p className="text-muted-foreground text-sm text-center">
            Craftsmanship. Integrity. Precision.
          </p>
          <p className="text-muted-foreground/60 text-xs">
            © {new Date().getFullYear()} Singapore Horology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
