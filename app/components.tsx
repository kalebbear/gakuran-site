import Link from "next/link";

export function Header(){return <header className="site-header"><Link className="brand" href="/"><span>学乱</span> GAKURAN ARCHIVE</Link><nav aria-label="Main navigation"><Link href="/guides">Guides</Link><Link href="/fighting-styles">Styles</Link><Link href="/character">Character</Link><Link href="/controls">Controls</Link></nav></header>}
export function Footer(){return <footer><span>GAKURAN ARCHIVE</span><p>Unofficial community resource. Not affiliated with Roblox or the game developers.</p></footer>}
export function Breadcrumbs({current}:{current:string}){return <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>{current}</span></div>}
export function SourceNote({children}:{children:React.ReactNode}){return <aside className="source-note"><b>VERIFICATION NOTE</b><p>{children}</p></aside>}
