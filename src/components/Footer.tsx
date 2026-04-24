const Footer = () => {
  return (
    <footer className="mt-32 border-t border-border/60 bg-secondary/40">
      <div className="container-luxe py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl tracking-[0.3em] mb-4">Adorzia</div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            A curated marketplace for the world's most considered fashion designers. Independent ateliers, ethically made, delivered worldwide.
          </p>
        </div>
        <div>
          <h4 className="eyebrow mb-5">Discover</h4>
          <ul className="space-y-3 text-sm">
            <li><a className="link-underline" href="/collections">Collections</a></li>
            <li><a className="link-underline" href="/designers">Designers</a></li>
            <li><a className="link-underline" href="/journal">Journal</a></li>
            <li><a className="link-underline" href="/journal">Atelier Stories</a></li>
          </ul>
        </div>
        <div>
          <h4 className="eyebrow mb-5">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-4">Receive seasonal lookbooks and private previews.</p>
          <form className="flex border-b border-foreground/40 py-2">
            <input type="email" placeholder="your@email.com" className="flex-1 bg-transparent text-sm focus:outline-none placeholder:text-muted-foreground" />
            <button type="submit" className="text-xs uppercase tracking-[0.25em]">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-luxe py-6 flex flex-col md:flex-row justify-between text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Adorzia Maison. All rights reserved.</span>
          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
