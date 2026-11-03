import { useEffect, useRef, useState } from 'react'
import { designPrinciples, navigation, recentWorks } from './data'
import Arrow from './Arrow'
import RetreatCaseStudy from './RetreatCaseStudy'
import G2OCaseStudy from './G2OCaseStudy'
import GrowbizCaseStudy from './GrowbizCaseStudy'
import VisualHierarchyModal from './VisualHierarchyModal'
import ProximityModal from './ProximityModal'
import ClarityModal from './ClarityModal'
import AlignmentModal from './AlignmentModal'
import ContrastModal from './ContrastModal'
import SimplicityModal from './SimplicityModal'
import WhitespaceModal from './WhitespaceModal'
import LayoutModal from './LayoutModal'
import BalanceHarmonyModal from './BalanceHarmonyModal'
import ConsistencyModal from './ConsistencyModal'
import VisualCuesModal from './VisualCuesModal'
import DepthTextureModal from './DepthTextureModal'
import ColorModal from './ColorModal'
import TypographyModal from './TypographyModal'
import InteractionCostModal from './InteractionCostModal'
import OtherTipsModal from './OtherTipsModal'


function Header({ homeLinks = false }: { homeLinks?: boolean }) {
  const homeHref = (href: string) => homeLinks ? `/${href}` : href
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => { const update = () => setScrolled(window.scrollY > 20); update(); addEventListener('scroll', update, { passive: true }); return () => removeEventListener('scroll', update) }, [])
  const close = () => setOpen(false)
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
    <div className="nav-wrap"><a className="brand" href={homeHref('#home')} aria-label="Murukan Gopinathan home"><span className="brand-mark">MG</span><span className="brand-name">Murukan<br />Gopinathan</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(([name, href]) => <a key={href} href={homeHref(href)}>{name}</a>)}</nav>
      <a className="nav-cta" href={homeHref('#contact')}>Resume <span className="resume-icon" aria-hidden="true"><img className="resume-icon-default" src="/images/download.svg" alt="" width="18" height="18" /><img className="resume-icon-hover" src="/images/download-hover.svg" alt="" width="18" height="18" /></span></a>
      <button className={`menu-toggle ${open ? 'is-open' : ''}`} aria-label="Toggle navigation" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}><i /><i /></button>
    </div>
    <nav id="mobile-navigation" className={`mobile-menu ${open ? 'is-open' : ''}`} aria-label="Mobile navigation" inert={!open}>{navigation.map(([name, href], index) => <a key={href} href={homeHref(href)} onClick={close}><span>0{index + 1}</span>{name}</a>)}</nav>
  </header>
}

function SectionLabel({ index, children, light = false }: { index: string, children: string, light?: boolean }) { return <div className={`section-label ${light ? 'light' : ''}`}><span>{index}</span><p>{children}</p>{(index === '01' || index === '02') && <Arrow />}</div> }

function ProcessTimeline() {
  return <div className="practice-wrap">
    <div className="practice-header"><span>End-to-end practice</span><p>From research → concept → interface → prototype → development-ready code.</p></div>
    <div className="practice-track" role="img" aria-label="End-to-end practice with an AI assisted speedy process across the central workflow">
      <i className="practice-start" aria-hidden="true" /><div className="practice-band"><div className="practice-caption">ai assisted speedy process</div><div className="practice-dots" aria-hidden="true">{Array.from({ length:5 }, (_, index) => <i key={index} />)}</div></div>
    </div>
    <ol className="practice-stages">{['Problem', 'Research', 'UX', 'UI', 'Prototype', 'Code', 'Test'].map((stage, index) => <li key={stage}><span>{String(index + 1).padStart(2, '0')}</span><strong>{stage}</strong></li>)}</ol>
  </div>
}

function Hero() { return <><section className="hero section-pad" id="home"><div className="hero-grid" /><div className="hero-top"><p className="eyebrow"><b className="status-dot" /> Senior UX / Product Designer</p><p className="hero-index">Portfolio / 2026</p></div><div className="hero-copy"><img className="hero-art" src="/images/problem-solving-maze.jpg" alt="" aria-hidden="true" width="1536" height="1024" decoding="async" /><h1 className="hero-title">Here is how I solve<br /> complex <span>product<br className="title-break" /> problems</span></h1><div className="hero-intro"><p className="hero-description">With 10+ years of experience in UX, UI and product design, I combine research-driven design thinking with AI-powered workflows to move from complex problems to meaningful product experiences—faster and with greater technical alignment.</p><div className="hero-actions"><a href="#contact" className="button button-secondary">Let’s work Together <Arrow /></a><a href="#recent-works" className="button button-primary">View Recent Work <Arrow /></a></div></div><div className="hero-tags">{['UI','UX','UX Research','Visual Design','Interaction Design','Design to Code'].map(tag => <span key={tag}>{tag}</span>)}</div></div><ProcessTimeline /><div className="hero-footer"><p>Figma Design · Make · Claude · Codex · AI-assisted workflows · Prototyping · Design Systems</p><p className="scroll-note">Scroll to explore <i /></p></div></section><section className="principle-strip" aria-label="Design principle"><p className="principle"><span>Human expertise</span><span className="symbol">+</span><span>AI acceleration</span><span className="symbol">=</span><strong>Faster &amp; Better Product Outcomes</strong></p></section></> }

function About() { return <section className="about section-pad" id="about"><SectionLabel index="01">About / Philosophy</SectionLabel><div className="about-layout"><div className="about-heading"><span className="about-kicker">I believe</span><h2 className="section-title">Design starts with<br />understanding<br /><em>the problem.</em></h2></div><div className="about-copy"><p className="lead-copy">I believe good product design <span>begins before the first wireframe.</span> It starts by understanding users, business objectives, constraints, workflows and the context in which a product is actually used.</p><p>My role is to turn that understanding into a clear product direction—and carry the thinking all the way through to a refined, buildable experience. I work closely with product, engineering and business teams to connect customer needs with technical reality.</p><p>AI expands how quickly I can explore, prototype and validate. But research, judgment and empathy remain at the center of every decision.</p></div></div><div className="about-card"><div className="about-card-top"><div className="about-summary"><p className="about-quote"><span>“</span>I’m an experienced product/UX designer who understands complex enterprise problems and combines human-centred design with AI-assisted product design and development.</p><ul className="about-highlights"><li>10+ &nbsp; Years Experience</li><li>Enterprise Domain Experience</li><li>AI Assisted Design and Development</li></ul><p className="about-domains"><strong>My experience across:</strong><br />UX · UI · Visual design · Enterprise applications · Data-heavy interfaces · Research · Usability · Prototyping · Design systems · AI-assisted workflows · Design-to-code<br />and domains such as SaaS B2B, Maritime/cargo, Insurance, Telecom and many others.</p></div><div className="about-principle"><span>My design<br />principle / 2026</span><p>Design thinking<br /><em>Product mindset</em></p></div></div><div className="about-career">{[['Now', 'Senior UX / Product Designer', 'Product strategy, AI-enabled workflows and design leadership'], ['2019–24', 'Lead UX / UI Designer', 'Complex platforms, research and scalable design systems'], ['2014–19', 'UX Designer · Visual & Interaction Designer', 'Digital products, brand systems and front-end collaboration'], ['till 2014', 'Web Designer · Visual & Interaction Designer', 'Digital products, brand systems and front-end collaboration']].map(([year, title, detail]) => <div className="about-career-row" key={year}><span>{year}</span><strong>{title}</strong><p>{detail}</p></div>)}</div><p className="about-skill-note"><strong>Skills:</strong> Figma (Design, Motion, Make AI, Collaboration), Design-to-Code, Visual Design (Adobe, Canva, Art craft)</p></div></section> }

type RecentProject = typeof recentWorks[number]

function StoryContent({ project }: { project: RecentProject }) {
  return <><dl className="recent-facts">
    <div><dt>Project:</dt><dd>{project.project}</dd></div>
    <div><dt>Platform:</dt><dd>{project.platform}</dd></div>
    <div><dt>My role:</dt><dd>{project.role}</dd></div>
    <div><dt>Primary users:</dt><dd>{project.users}</dd></div>
  </dl><div className="recent-story">{project.sections.map(section => <div className="recent-story-section" key={section.title}>
    <h4>{section.title}</h4>
    {section.body && <p>{section.body}</p>}
    {section.items?.map(item => <p key={item.label}><strong>{item.label}</strong><br />{item.body}</p>)}
  </div>)}</div></>
}

function RecentWorkCard({ project, index }: { project: RecentProject, index: number }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const openStory = () => dialog.current?.showModal()
  const storyUrl = project.slug === 'retreat' ? '/work/retreat' : project.slug === 'g2o' ? '/work/g2o' : project.slug === 'growbiz' ? '/work/growbiz' : null
  return <article className={`recent-card recent-card-${project.slug}`}>
    <div className="recent-card-heading"><p>Case study {String(index + 1).padStart(2, '0')} / {project.category}</p><div><h3>{project.cardTitle}</h3>{storyUrl ? <a className="recent-open" href={storyUrl} aria-label={`Read the ${project.name} case study`}><Arrow /></a> : <button className="recent-open" onClick={openStory} aria-label={`Read the ${project.name} case study`}><Arrow /></button>}</div><p className="recent-card-subtitle">{project.cardSubtitle}</p></div>
    {storyUrl ? <a className="recent-preview" href={storyUrl} aria-label={`Explore ${project.name}`}><img src={project.image} alt={project.imageAlt} width="443" height="278" loading="lazy" /></a> : <button className="recent-preview" onClick={openStory} aria-label={`Explore ${project.name}`}><img src={project.image} alt={project.imageAlt} width="443" height="278" loading="lazy" /></button>}
    <div className="recent-card-body">
      <div className="recent-card-summary"><h4>The project</h4><p>{project.summary}</p></div>
      <div className="recent-card-focus"><h4>Design focus</h4><p>{project.focus}</p></div>
      <dl className="recent-card-meta"><div><dt>My role</dt><dd>{project.role}</dd></div><div><dt>Designed for</dt><dd>{project.users}</dd></div></dl>
      <div className="recent-card-actions">{storyUrl ? <a className="recent-story-button" href={storyUrl}>View full story <Arrow /></a> : <button className="recent-story-button" onClick={openStory}>View full story <Arrow /></button>}<a className="recent-demo" href="#contact">Discuss this project <Arrow /></a></div>
    </div>
    <dialog ref={dialog} className="recent-dialog" aria-labelledby={`story-${project.slug}`} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close() }}>
      <div className="recent-dialog-top"><p>Case study {index + 1} / {project.category}</p><button onClick={() => dialog.current?.close()} aria-label="Close case study">×</button></div>
      <h2 id={`story-${project.slug}`}>{project.name}</h2><img src={project.image} alt={project.imageAlt} width="443" height="278" /><StoryContent project={project} /><a className="recent-story-button" href="#contact" onClick={() => dialog.current?.close()}>Discuss this project <Arrow /></a>
    </dialog>
  </article>
}

function RecentWorks() { return <section className="recent-works section-pad" id="recent-works" aria-labelledby="recent-works-title"><span id="skills" className="legacy-skills-anchor" aria-hidden="true" /><SectionLabel index="02">Recent works</SectionLabel><div className="recent-works-head"><h2 className="section-title" id="recent-works-title">Thinking broadly<br /><span>Designing deeply</span></h2><p>A connected practice across strategy, experience design, visual craft and technical delivery.</p></div><div className="recent-works-grid">{recentWorks.map((project, index) => <RecentWorkCard project={project} index={index} key={project.slug} />)}</div></section> }

function DesignSystems() {
  const hierarchyDialog = useRef<HTMLDialogElement>(null)
  const proximityDialog = useRef<HTMLDialogElement>(null)
  const clarityDialog = useRef<HTMLDialogElement>(null)
  const alignmentDialog = useRef<HTMLDialogElement>(null)
  const contrastDialog = useRef<HTMLDialogElement>(null)
  const simplicityDialog = useRef<HTMLDialogElement>(null)
  const whitespaceDialog = useRef<HTMLDialogElement>(null)
  const layoutDialog = useRef<HTMLDialogElement>(null)
  const balanceDialog = useRef<HTMLDialogElement>(null)
  const consistencyDialog = useRef<HTMLDialogElement>(null)
  const visualCuesDialog = useRef<HTMLDialogElement>(null)
  const depthTextureDialog = useRef<HTMLDialogElement>(null)
  const colorDialog = useRef<HTMLDialogElement>(null)
  const typographyDialog = useRef<HTMLDialogElement>(null)
  const interactionCostDialog = useRef<HTMLDialogElement>(null)
  const otherTipsDialog = useRef<HTMLDialogElement>(null)
  const principleDialogs = [
    { id: 'visual-hierarchy-modal', ref: hierarchyDialog },
    { id: 'proximity-modal', ref: proximityDialog },
    { id: 'clarity-modal', ref: clarityDialog },
    { id: 'alignment-modal', ref: alignmentDialog },
    { id: 'contrast-modal', ref: contrastDialog },
    { id: 'simplicity-modal', ref: simplicityDialog },
    { id: 'whitespace-modal', ref: whitespaceDialog },
    { id: 'layout-modal', ref: layoutDialog },
    { id: 'balance-harmony-modal', ref: balanceDialog },
    { id: 'consistency-modal', ref: consistencyDialog },
    { id: 'visual-cues-modal', ref: visualCuesDialog },
    { id: 'depth-texture-modal', ref: depthTextureDialog },
    { id: 'color-modal', ref: colorDialog },
    { id: 'typography-modal', ref: typographyDialog },
    { id: 'interaction-cost-modal', ref: interactionCostDialog },
    { id: 'other-tips-modal', ref: otherTipsDialog },
  ]
  return <section className="design-systems section-pad" id="design-systems" aria-labelledby="design-systems-title">
    <span className="legacy-work-anchor" id="work" aria-hidden="true" />
    <div className="design-systems-inner">
      <SectionLabel index="03">Design Systems</SectionLabel>
      <h2 className="section-title" id="design-systems-title">The work behind<br /><span>the work.</span></h2>
      <div className="design-systems-intro">
        <p>User Interface (UI) and User Experience (UX) are deeply interconnected, and both are essential for a product’s success. A visually stunning UI will fail if the app is hard to navigate, while a highly functional UX will lose users if the design feels outdated. The most successful products combine intuitive, user-centered functionality with an appealing, modern aesthetic.</p>
        <p>As a UX designer, I focus on essential UI design principles that elevate digital products from good to exceptional. My focus is on improving usability, enhancing visual hierarchy, and making information easier to understand and navigate.</p>
        <p>Here I’m demonstrating some of <span>my design systems</span>, aimed at elevating <span>my designs from <strong>good to exceptional.</strong></span></p>
      </div>
      <ol className="design-principles">{designPrinciples.map(([name, detail], index) => <li className="design-principle" key={name}>
        {index < principleDialogs.length ? <button type="button" className="design-principle-trigger" aria-haspopup="dialog" aria-controls={principleDialogs[index].id} onClick={() => principleDialogs[index].ref.current?.showModal()}>
          <span className="design-principle-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><span className="design-principle-copy"><span className="design-principle-title">{name}</span><span className="design-principle-detail">{detail}</span></span><Arrow />
        </button> : <><span className="design-principle-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
        <div><h3>{name}</h3><p>{detail}</p></div><Arrow /></>}
      </li>)}</ol>
      <VisualHierarchyModal ref={hierarchyDialog} />
      <ProximityModal ref={proximityDialog} />
      <ClarityModal ref={clarityDialog} />
      <AlignmentModal ref={alignmentDialog} />
      <ContrastModal ref={contrastDialog} />
      <SimplicityModal ref={simplicityDialog} />
      <WhitespaceModal ref={whitespaceDialog} />
      <LayoutModal ref={layoutDialog} />
      <BalanceHarmonyModal ref={balanceDialog} />
      <ConsistencyModal ref={consistencyDialog} />
      <VisualCuesModal ref={visualCuesDialog} />
      <DepthTextureModal ref={depthTextureDialog} />
      <ColorModal ref={colorDialog} />
      <TypographyModal ref={typographyDialog} />
      <InteractionCostModal ref={interactionCostDialog} />
      <OtherTipsModal ref={otherTipsDialog} />
    </div>
  </section>
}


function ContactFooter() {
  return <section className="contact section-pad" id="contact">
    <div className="contact-top"><p className="eyebrow contact-eyebrow"><b className="status-dot" /> Available for selected opportunities</p><Arrow /></div>
    <div className="contact-main">
      <div className="contact-copy">
        <h2>Have a complex product<br />problem? <em>Let’s talk.</em></h2>
        <address className="contact-details">
          <div className="contact-phones"><a href="tel:+919986330787"><span className="contact-country-code">+91</span> 9986330787</a><span className="contact-phone-divider" aria-hidden="true">/</span><a href="tel:+918073795328" aria-label="Call +91 8073795328">8073795328</a></div>
          <a className="contact-email" href="mailto:g.mn3315@gmail.com">g.mn3315@gmail.com</a>
        </address>
        <p className="contact-tagline">Let’s make something meaningful.</p>
      </div>
      <a className="contact-button" href="mailto:g.mn3315@gmail.com">Start a conversation <Arrow /></a>
    </div>
    <footer className="contact-footer"><div className="footer-brand"><span className="brand-mark inverse">MG</span><p>Murukan Gopinathan<br />Senior UX / Product Designer</p></div><p className="copyright">&copy; 2025 Murukan Gopinathan<br />Designed with intent. Built with AI.</p></footer>
  </section>
}

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '')
  const isRetreat = path === '/work/retreat'
  const isG2O = path === '/work/g2o'
  const isGrowbiz = path === '/work/growbiz'
  const isCaseStudy = isRetreat || isG2O || isGrowbiz
  return <div className={`site-shell ${isCaseStudy ? 'case-study-shell' : ''}`}><Header homeLinks={isCaseStudy} />{isGrowbiz ? <GrowbizCaseStudy /> : isG2O ? <G2OCaseStudy /> : isRetreat ? <RetreatCaseStudy /> : <main><Hero /><About /><RecentWorks /><DesignSystems /><ContactFooter /></main>}</div>
}
