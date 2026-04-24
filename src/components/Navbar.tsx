import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Search, User, ShoppingBag } from "lucide-react";
import SearchOverlay from "@/components/SearchOverlay";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/60">
        <div className="container-luxe flex items-center justify-between py-5">
          <div className="flex-1 hidden md:flex items-center gap-8">
            <NavLink to="/" end className="link-underline text-sm tracking-wide" activeClassName="text-foreground">Home</NavLink>
            <NavLink to="/collections" className="link-underline text-sm tracking-wide" activeClassName="text-foreground">Collections</NavLink>
            <NavLink to="/shop" className="link-underline text-sm tracking-wide" activeClassName="text-foreground">Shop</NavLink>
            <NavLink to="/designers" className="link-underline text-sm tracking-wide" activeClassName="text-foreground">Designers</NavLink>
            <NavLink to="/journal" className="link-underline text-sm tracking-wide" activeClassName="text-foreground">Journal</NavLink>
          </div>
          <Link to="/" className="font-display text-2xl md:text-3xl tracking-[0.3em] flex-1 text-center">
            Adorzia
          </Link>
          <div className="flex-1 flex items-center justify-end gap-5 text-foreground/80">
            <button aria-label="Search" onClick={() => setSearchOpen(true)} className="hover:text-accent transition-colors"><Search className="h-[18px] w-[18px]" strokeWidth={1.25} /></button>
            <button aria-label="Account" className="hover:text-accent transition-colors"><User className="h-[18px] w-[18px]" strokeWidth={1.25} /></button>
            <button aria-label="Bag" className="hover:text-accent transition-colors relative">
              <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.25} />
              <span className="absolute -top-1.5 -right-2 text-[10px] tracking-normal text-accent">0</span>
            </button>
          </div>
        </div>
        <nav className="md:hidden border-t border-border/60 flex justify-center gap-8 py-3">
          <NavLink to="/" end className="text-xs uppercase tracking-[0.2em]" activeClassName="text-foreground">Home</NavLink>
          <NavLink to="/collections" className="text-xs uppercase tracking-[0.2em]" activeClassName="text-foreground">Collections</NavLink>
          <NavLink to="/shop" className="text-xs uppercase tracking-[0.2em]" activeClassName="text-foreground">Shop</NavLink>
          <NavLink to="/designers" className="text-xs uppercase tracking-[0.2em]" activeClassName="text-foreground">Designers</NavLink>
          <NavLink to="/journal" className="text-xs uppercase tracking-[0.2em]" activeClassName="text-foreground">Journal</NavLink>
        </nav>
      </header>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default Navbar;
