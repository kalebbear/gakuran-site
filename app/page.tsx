import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "./components";

export const metadata: Metadata = {
  title: "Gakuran Roblox Wiki, Controls & Fighting Styles",
  description: "A practical Gakuran Roblox wiki with beginner routes, controls, fighting styles, character guides and carefully checked community resources.",
  alternates: { canonical: "/" },
};

const guides = [
  { href: "/controls", icon: "⌨", tag: "BEGINNER", title: "Controls Guide", text: "All core PC keybinds, combat stance, blocking and movement in one place." },
  { href: "/fighting-styles", icon: "拳", tag: "COMBAT", title: "Fighting Styles", text: "Compare play styles and learn what to check before using a reroll." },
  { href: "/character", icon: "人", tag: "CUSTOMIZE", title: "Character Guide", text: "Faces, ethnicity, hairstyles, hair colors, surnames and accessories." },
  { href: "/trello", icon: "↗", tag: "RESOURCES", title: "Trello & Links", text: "Open the public board and verify links against the correct Roblox experience." },
];

export default function Home() {
  return <div className="game-home"><Header/><main>
    <section className="game-hero">
      <div className="hero-panel">
        <div className="game-badges"><span>ROBLOX</span><span>FIGHTING</span><span>ROLEPLAY</span></div>
        <p className="game-update">GAKURAN COMMUNITY WIKI · AUGUST 2026</p>
        <h1>Master school life.<br/><em>Survive the fight.</em></h1>
        <p className="game-intro">Your fast, practical field guide to Gakuran—learn the controls, understand fighting styles, and build your character without digging through scattered posts.</p>
        <div className="hero-actions">
          <Link className="game-button play" href="/guides"><span>▶</span> START HERE</Link>
          <a className="game-button secondary" href="https://www.roblox.com/games/128736949265057/Gakuran" target="_blank" rel="noreferrer">PLAY ON ROBLOX ↗</a>
        </div>
        <div className="hero-facts"><div><b>May 2007</b><span>Setting</span></div><div><b>Roblox</b><span>Platform</span></div><div><b>RP + PvP</b><span>Game type</span></div></div>
      </div>
      <div className="game-visual">
        <div className="scene-art" aria-label="Stylized Japanese school combat scene"><div className="sun"></div><div className="school"><i></i><i></i><i></i><i></i><i></i><i></i></div><div className="fighter fighter-one"><i></i><b></b><span></span></div><div className="fighter fighter-two"><i></i><b></b><span></span></div><div className="scene-lines"></div></div>
        <div className="visual-overlay"><span>学乱</span><div><b>GAKURAN</b><small>PLAYER FIELD GUIDE</small></div></div>
        <div className="live-chip"><i></i> CHECK LIVE STATUS ON ROBLOX</div>
      </div>
    </section>

    <section className="start-bar"><b>NEW PLAYER?</b><span>Follow the fastest route from first join to your first fight.</span><Link href="/controls">1. Controls</Link><Link href="/fighting-styles">2. Pick a style</Link><Link href="/character">3. Character</Link></section>

    <section className="game-section">
      <div className="game-section-head"><div><span>EXPLORE THE WIKI</span><h2>What do you need help with?</h2></div><Link href="/guides">VIEW ALL GUIDES →</Link></div>
      <div className="game-guide-grid">{guides.map(g=><Link href={g.href} className="game-guide-card" key={g.href}><div className="game-icon">{g.icon}</div><span>{g.tag}</span><h3>{g.title}</h3><p>{g.text}</p><b>OPEN GUIDE <i>→</i></b></Link>)}</div>
    </section>

    <section className="game-section two-column">
      <div className="quick-panel"><div className="panel-title"><span>QUICK REFERENCE</span><h2>Essential controls</h2></div><div className="mini-controls"><div><kbd>T</kbd><span>Combat stance</span></div><div><kbd>F</kbd><span>Block</span></div><div><kbd>Q</kbd><span>Dash</span></div><div><kbd>R</kbd><span>Heavy attack</span></div></div><Link href="/controls">SEE EVERY KEYBIND →</Link></div>
      <div className="safe-panel"><span className="shield">✓</span><div><p>SOURCE-AWARE WIKI</p><h2>No fake codes.<br/>No invented stats.</h2><span>Changing mechanics are labeled for verification, and conflicting community claims are never presented as official facts.</span></div></div>
    </section>

    <section className="roblox-cta"><div><span>READY TO ENTER THE SCHOOL?</span><h2>Open the official Gakuran experience.</h2></div><a href="https://www.roblox.com/games/128736949265057/Gakuran" target="_blank" rel="noreferrer">PLAY ON ROBLOX ↗</a></section>
  </main><Footer/></div>;
}
