"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type NavItem = { href: string; label: string; observe?: boolean };

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  const navItems: NavItem[] = useMemo(
    () => [
      { href: "/#services", label: "Services", observe: true },
      { href: "/about", label: "About", observe: false },
      { href: "/#expertise", label: "Expertise", observe: true },
      { href: "/#hours", label: "Hours", observe: true },
      { href: "/documents", label: "Documents", observe: false }
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle hash navigation on page load
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash && window.location.pathname === '/') {
        const id = hash.substring(1);
        const el = document.getElementById(id);
        if (el) {
          // Wait for page to fully load and render
          setTimeout(() => {
            const headerEl = document.querySelector('header');
            const headerHeight = headerEl ? headerEl.offsetHeight : 80;
            const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementTop - headerHeight - 20;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }, 300); // Increased delay to ensure page is fully loaded
        }
      }
    };

    // Handle initial hash
    handleHashNavigation();

    // Handle hash changes
    window.addEventListener('hashchange', handleHashNavigation);
    
    // Also handle when page becomes visible (for navigation from other pages)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        handleHashNavigation();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const ids = navItems.filter(n => n.observe && n.href.startsWith("/#")).map(n => n.href.split("#")[1]!);
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const io = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));
      if (visible[0]?.target?.id) setActive(visible[0].target.id);
    }, { root: null, rootMargin: "-30% 0px -60% 0px", threshold: [0, .25, .5, .75, 1] });
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, [navItems]);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("/#")) return;
    e.preventDefault();
    const id = href.split("#")[1];
    
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      // We're on home page, scroll to section
      const el = document.getElementById(id);
      if (!el) return;
      
      // Get header height
      const headerEl = document.querySelector('header');
      const headerHeight = headerEl ? headerEl.offsetHeight : 80;
      
      // Calculate scroll position
      const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementTop - headerHeight - 20;
      
      // Smooth scroll to element
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL
      history.replaceState(null, "", `/#${id}`);
    } else {
      // We're on a different page, navigate to home with hash
      // Use router.push for better Next.js navigation
      window.location.href = `/#${id}`;
    }
    
    setOpen(false);
  };

  const linkCls = (href: string) => {
    const id = href.startsWith("/#") ? href.split("#")[1] : "";
    const isActive = id && active === id;
    return [
      "relative transition-colors duration-300",
      isActive ? "text-[var(--text)]" : "text-[var(--text)]/80 hover:text-[var(--text)]",
      "after:absolute after:left-0 after:-bottom-1 after:h-0.5",
      "after:bg-gradient-to-r after:from-[var(--primary)] after:to-[#6aa6ff] after:transition-all after:duration-300",
      isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
    ].join(" ");
  };

  return (
    <header
    className={[
      "sticky top-0 z-50 transition-all duration-300",
      scrolled
        ? "bg-white/85 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,.06)] border-b border-white/60"
        : "bg-transparent border-b border-transparent"
    ].join(" ")}
  >  
      <nav className="container h-[var(--nav-h)] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 md:gap-4 group">
          <span className="relative rounded-xl overflow-hidden ring-1 ring-[var(--border)] bg-white">
            <Image src="/images/gaurs-icon.png" alt="GAUR'S emblem" width={48} height={48} className="h-10 w-10 md:h-12 md:w-12 object-contain transition-transform duration-300 group-hover:scale-110" priority />
          </span>
          <span className="leading-tight">
            <span className="block text-[20px] md:text-[22px] font-extrabold tracking-tight text-[var(--text)]">GAUR&apos;S</span>
            <span className="block text-[12px] md:text-[13px] text-[var(--muted)]">R &amp; C Engineers &amp; Associates</span>
          </span>
        </Link>

        <button onClick={() => setOpen(v => !v)} aria-label="Toggle menu" className="md:hidden rounded-xl px-3 py-2 text-xl border border-[var(--border)] text-[var(--text)] hover:bg-white transition-all">☰</button>

        <ul className="hidden md:flex items-center gap-7 text-[15px] font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} aria-current={item.href.startsWith("/#") && active === item.href.split("#")[1] ? "page" : undefined} onClick={(e) => handleAnchorClick(e, item.href)} className={linkCls(item.href)}>
                {item.label}
              </Link>
            </li>
          ))}
          <li><Link href="/contact" className="btn btn-primary shadow-[0_10px_26px_rgba(30,102,255,.20)]">Contact Us</Link></li>
        </ul>
      </nav>

      <div className={["md:hidden overflow-hidden transition-all duration-300 border-t", open ? "max-h-96 opacity-100 border-[var(--border)] bg-white/95 backdrop-blur" : "max-h-0 opacity-0 border-transparent bg-transparent"].join(" ")}>
        <ul className="container py-4 flex flex-col gap-1">
          {navItems.map((item, i) => (
            <li key={item.href} style={{ animationDelay: `${i * 0.05}s` }} className="animate-[fadeUp_.5s_ease-out_both]">
              <Link href={item.href} aria-current={item.href.startsWith("/#") && active === item.href.split("#")[1] ? "page" : undefined} onClick={(e) => handleAnchorClick(e, item.href)} className={["block py-2 px-1 rounded-lg", item.href.startsWith("/#") && active === item.href.split("#")[1] ? "text-[var(--text)] font-semibold" : "text-[var(--text)]/85 hover:bg-white"].join(" ")}>
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-1"><Link href="/contact" onClick={() => setOpen(false)} className="btn btn-primary w-fit">Contact Us</Link></li>
        </ul>
      </div>
    </header>
  );
}
