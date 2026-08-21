import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gakuran Wiki & Beginner Guides | Gakuran Archive",
  description: "Independent Gakuran wiki with beginner guides for fighting styles, controls, character creation, faces, ethnicity, hair and more.",
};

const guides = [
  { href: "/fighting-styles", tag: "COMBAT", title: "Fighting Styles", text: "Understand style roles, rerolls, and what to verify before choosing." },
  { href: "/controls", tag: "START HERE", title: "Controls & Keybinds", text: "Learn movement, combat stance, blocking, dodging, and core inputs." },
  { href: "/character", tag: "CHARACTER", title: "Character Guide", text: "Navigate faces, ethnicity, hair, surnames, and customization topics." },
];

export default function Home() {
  return <main>
    <header className="site-header">
      <Link className="brand" href="/"><span>学乱</span> GAKURAN ARCHIVE</Link>
      <nav aria-label="Main navigation"><Link href="/guides">Guides</Link><Link href="/fighting-styles">Styles</Link><Link href="/character">Character</Link><Link href="/controls">Controls</Link></nav>
    </header>
    <section className="hero">
      <div className="eyebrow">COMMUNITY FIELD GUIDE · UPDATED AUG 2026</div>
      <h1>The Gakuran Wiki<br />Built for Players.</h1>
      <p className="hero-copy">A focused, source-aware guide to Gakuran&apos;s combat, controls, and character systems—without invented codes or unverified stats.</p>
      <div className="hero-actions"><Link className="button primary" href="/guides">Browse all guides</Link><a className="button ghost" href="https://www.roblox.com/games/128736949265057/Gakuran" target="_blank" rel="noreferrer">Open on Roblox ↗</a></div>
      <div className="stamp" aria-hidden="true">学<br /><small>2007</small></div>
    </section>
    <section className="quick-strip" aria-label="Quick links"><span>START HERE</span><Link href="/controls">Learn the controls →</Link><Link href="/fighting-styles">Compare fighting styles →</Link><Link href="/character">Build your character →</Link></section>
    <section className="section-shell">
      <div className="section-heading"><div><p className="kicker">ESSENTIAL FILES</p><h2>Choose your next guide</h2></div><Link href="/guides">View guide index →</Link></div>
      <div className="card-grid">{guides.map((guide,index)=><Link className="guide-card" href={guide.href} key={guide.href}><div className="card-index">0{index+1}</div><span>{guide.tag}</span><h3>{guide.title}</h3><p>{guide.text}</p><b>READ GUIDE →</b></Link>)}</div>
    </section>
    <section className="notice section-shell"><div><p className="kicker">SOURCE POLICY</p><h2>Facts first. Rumors labeled.</h2></div><p>This is an independent community guide. Game identity and status are checked against Roblox; changing mechanics should be verified in-game. Where public sources conflict, the page says so clearly.</p></section>
    <footer><span>GAKURAN ARCHIVE</span><p>Unofficial community resource. Not affiliated with Roblox or the game developers.</p></footer>
  </main>;
}
