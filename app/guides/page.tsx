import type { Metadata } from "next";
import Link from "next/link";
import {Breadcrumbs,Footer,Header} from "../components";

export const metadata:Metadata={title:"Gakuran Guides: Combat, Controls & Character Wiki",description:"Browse Gakuran guides for fighting styles, controls, character creation, faces, ethnicity, hairstyles, hair colors, surnames and community links.",alternates:{canonical:"/guides"}};
const groups=[
  {n:"01",title:"Combat",items:[["Fighting Styles","/fighting-styles","Style roles, rerolls, and version-aware guidance."],["Controls & Keybinds","/controls","Movement, stance, attacks, block, and dodge."]]},
  {n:"02",title:"Character",items:[["Character Creation","/character","Start with the complete character system overview."],["Faces","/character#faces","Face options, rerolls, and verification limits."],["Ethnicity","/character#ethnicity","How ethnicity relates to a generated character."],["Hair & Surnames","/character#hair","Hair colors, hairstyles, and last names."]]},
  {n:"03",title:"Resources",items:[["Public Trello","/trello","Board access, source status, and safety checks."],["Official Roblox Page","https://www.roblox.com/games/128736949265057/Gakuran","Confirm the correct experience and live status."]]},
];
export default function Guides(){return <><Header/><main className="page-shell"><Breadcrumbs current="Guides"/><header className="page-hero"><p className="kicker">GUIDE INDEX</p><h1>All Gakuran Guides</h1><p>Start with controls, compare combat styles, or explore the character system. Pages separate confirmed information from details that still need an in-game check.</p></header><div className="directory">{groups.map(g=><section className="directory-group" key={g.title}><div className="directory-title"><span>{g.n}</span><h2>{g.title}</h2></div><div>{g.items.map(i=><Link href={i[1]} className="directory-link" key={i[0]}><div><h3>{i[0]}</h3><p>{i[2]}</p></div><b>→</b></Link>)}</div></section>)}</div></main><Footer/></>}
