import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <img
            src={logo}
            alt="Singapore Horology"
            className="h-12 w-auto brightness-0 invert opacity-60"
          />
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
