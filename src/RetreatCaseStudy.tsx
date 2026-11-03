import { useEffect } from 'react'
import Arrow from './Arrow'
import BenefitTable from './CaseStudyTable'

function ScreenImage({ name, alt }: { name: string; alt: string }) {
  return <figure className="case-screen"><img src={`/images/retreat/${name}.webp`} alt={alt} width="1476" height="930" loading="lazy" /><figcaption>{alt}</figcaption></figure>
}
const journey = [
  ['Discover', 'Understand the offer and explore properties.', 'Promotional claims may be unclear.', 'Clarify the offer, eligibility and primary CTA.'],
  ['Evaluate', 'Filter and compare available homes.', 'Important differences are difficult to scan.', 'Standardise property attributes and strengthen comparison.'],
  ['Book', 'Enter contact details and select a slot.', 'Required fields and availability may be unclear.', 'Guide users through a validated booking flow.'],
  ['Confirm', 'Review the appointment and next steps.', 'Users may wonder what to do after booking.', 'Provide a clear summary, calendar option and rescheduling path.'],
]
const benefitHeadings = ['Design Aspect', 'UX/UI Mechanism', 'Business & User Impact']

export default function RetreatCaseStudy() {
  useEffect(() => { document.title = 'Retreat — Website UX Case Study | Murukan Gopinathan' }, [])
  return <main className="retreat-case section-pad" id="case-top">
    <div className="case-container">
      <div className="case-title-row"><h1><span className="case-number">03 - </span>Retreat - <span>Website</span></h1><nav className="case-jump" aria-label="Case study sections"><a href="#case-research">01 <span>Research</span></a><a href="#case-design">02 <span>Design</span></a><a href="#case-confirmation">03 <span>Confirmation</span></a></nav></div>
      <section className="case-intro" aria-label="Project overview">
        <p><strong className="case-yellow">Project:</strong><br /><strong>Real Estate Property Discovery &amp; Site Visit Booking.</strong><br />Website UX concept · Property discovery · Lead generation · Appointment scheduling</p>
        <p><strong className="case-yellow">My role:</strong> UX Research &amp; UI Design<br /><strong className="case-yellow">Primary users:</strong> Property buyers and prospective homebuyers</p>
        <h2>Project objective</h2><p>Design a property discovery experience that helps prospective buyers compare residential properties, understand key features, and book a site visit through a clear, low-friction journey.</p>
      </section>

      <section className="case-section case-narrow" id="case-research">
        <h2>Research plan</h2>
        <h3>1. User interviews</h3><p>Explored how buyers shortlist properties, compare prices and amenities, and decide whether to schedule a visit.</p>
        <h3>2. Evaluation</h3><p>Checked navigation, content hierarchy, filter usability, form clarity, feedback and error prevention against established usability principles.</p>
        <h3>Research questions</h3><ul>
          <li>What information do buyers need before deciding to visit a property?</li>
          <li>Can users compare properties without opening each listing individually?</li>
          <li>Do users understand the promotional interest rate and its conditions?</li>
          <li>Can users identify available dates and time slots without confusion?</li>
          <li>Do users trust the confirmation and understand what happens next?</li>
        </ul>
      </section>

      <section className="case-section case-narrow" aria-labelledby="case-persona">
        <h2 id="case-persona">User Persona</h2><p>Potential user<br />Name: <strong>Ronald Mic</strong></p>
        <h3>Needs</h3><ul><li>Transparent pricing and financing information.</li><li>Clear comparisons of size, location and amenities.</li><li>Reliable availability for site visits.</li><li>Immediate booking confirmation.</li></ul>
        <h3>Pain points</h3><ul><li>Repeatedly opening listings to compare features.</li><li>Unclear promotional terms.</li><li>Uncertainty about booking availability.</li><li>Not knowing whether a booking was successful.</li></ul>
        <blockquote className="case-persona-quote"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="12" cy="7" r="4" /><path d="M4 22v-2a8 8 0 0 1 16 0v2" /></svg><p>“I want to shortlist the right properties quickly and book a visit without having to call the sales team for every detail.”</p></blockquote>
      </section>

      <section className="case-section case-narrow" aria-labelledby="case-journey"><h2 id="case-journey">User journey analysis</h2><ol className="case-journey">{journey.map(([title, task, risk, opportunity], index) => <li key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{task}<br /><strong>Risk:</strong> {risk}<br /><strong>Opportunity:</strong> {opportunity}</p></li>)}</ol></section>

      <section className="case-section case-problem" aria-labelledby="case-problem-title"><h2 id="case-problem-title" className="case-rose">The problem</h2><p>Property buyers often need to evaluate several properties before deciding which ones are worth visiting. When property information is difficult to compare, pricing and amenities are unclear, or appointment booking requires too many steps, users may abandon the website or contact the sales team for basic information.</p>
        <h3 className="case-cyan">Core UX challenge</h3><p>How might we help property buyers move from browsing properties to confidently booking a site visit with minimal effort?</p>
        <h3>Problems identified in the initial UX assessment and solved</h3><ul><li><strong className="case-rose">Unclear promotional messaging.</strong><br />Clear descriptions and offers make the actual financial benefit easier to understand.</li><li><strong className="case-rose">Property comparison requires effort.</strong><br />Show price, location, area, bedrooms and amenities consistently across properties, with visible filters.</li><li><strong className="case-rose">Confirmation could be more actionable.</strong><br />Provide clear appointment details and convenient options to manage the visit.</li></ul>
      </section>

      <section className="case-section" id="case-design"><p className="case-section-kicker">UX problems, research focus, and design output</p><h2>Screen 1 — Homepage</h2><p>Design intent: Communicate the brand promise, showcase the residential offering and encourage users to explore properties or schedule a visit.</p>
        <h3 className="case-screen-heading">Homepage — Low wireframe</h3>
        <div className="case-screen-row"><ScreenImage name="wireframe" alt="Retreat homepage wireframe with annotations for navigation, hero message, offer, property details and calls to action" /><div className="case-screen-copy"><h3>Style Guide</h3><div className="case-swatches">{[['Primary', '#006AFF'], ['Primary dark', '#032CA8'], ['Primary light', '#88D7FF'], ['Primary CTA', '#FFC60B'], ['CTA hover', '#FF950B'], ['Info green', '#F7FFF2'], ['Info green dark', '#B4E28E'], ['Validation', '#FF9E9E'], ['Error', '#D63232']].map(([name, color]) => <div key={name}><i style={{ background:color }} /><span>{name}<small>{color}</small></span></div>)}</div><div className="case-type-spec"><p><strong>Font:</strong> Manrope · 1rem · Regular (body)</p><p><strong>Font colors:</strong> #333333 (body), #666666 (medium), #999999 (light)</p><p><strong>Border:</strong> #E4E4E4</p></div></div></div>
      </section>

      <section className="case-section" aria-labelledby="case-home-final"><h2 id="case-home-final">Homepage — Final Prototype</h2><div className="case-screen-row"><ScreenImage name="homepage" alt="Retreat final homepage with a villa hero image, clear promotional offer and yellow Schedule a Site Visit button" /><div className="case-screen-copy"><h3>Home Page — UX improvements</h3><p><strong>Focus:</strong> Visual hierarchy, action intent alignment, information architecture, and readability.</p><ul className="case-decisions"><li><strong>Primary action (CTA) now <em>visually dominant.</em></strong><br />Prioritise “Schedule a Site Visit” as the primary CTA and “Explore Properties” as the secondary option to guide users from <em>browsing to booking.</em> Stronger visual prominence supports high-intent actions.</li><li><strong>Visual aesthetic:</strong> Clean, borderless typographic hierarchy over a natural scene delivers a <em>premium, uncluttered experience.</em></li><li><strong>Clarity improvement:</strong> Clarify the offer and <em>reduce cognitive friction.</em></li><li><strong>Information architecture:</strong> Remove overlapping translucent cards to create a <em>cleaner hero section.</em></li><li><strong>Scannability:</strong> Faster comprehension of key property details.</li><li><strong>Structural layout:</strong> Group villa specifications, location and approval details in the lower grass band. Apply the <em>Law of Proximity</em> to separate essential property information from lifestyle messaging and promotional offers.</li></ul></div></div>
        <BenefitTable title="Summary of Design Evolution (Before vs. After)" headings={['Design Aspect', 'Initial Version (Before)', 'Updated Version', 'UX Value Delivered']} rows={[
          ['Primary CTA', 'Low-contrast Schedule a Site Visit button', 'High-contrast accent yellow button', 'Directs high-intent users to the key business goal.'],
          ['Discount Callout', 'Ambiguous 10.50% display', 'Clear 10.50% off with an integrated context header', 'Reduces confusion about the promotional offer.'],
          ['Visual Structure', 'Fragmented translucent box overlays', 'Clean, borderless hierarchy over a natural scene', 'Creates a premium, uncluttered experience.'],
          ['Information Flow', 'Mixed content hierarchy', 'Hero → Offer → Actions → Location / Specs', 'Makes key property details easier to scan.'],
        ]} />
      </section>

      <section className="case-section" id="case-explore"><h2>Explore Page</h2><div className="case-screen-row"><ScreenImage name="explore" alt="Retreat Explore page with filters and three comparable property cards" /><div className="case-screen-copy"><h3>Explore properties — Key UX highlights &amp; design decisions</h3><p><strong>Focus:</strong> Information architecture, card layout systems, mental model alignment, and decision-making.</p><p>The Explore Page guides users from brand discovery to property evaluation through a clean three-column card layout showcasing project tiers, key specifications, amenities, and <em>clear conversion pathways.</em></p><ul className="case-decisions"><li><strong>Reduce choice overload:</strong> Help users quickly identify the best-value option.</li><li><strong>High-scannability card design:</strong> Organise pricing, location, specifications, amenities and CTAs into clear visual layers so users can <em>scan essential details and take action.</em></li><li><strong>Icon-assisted information design:</strong> Use intuitive line icons for property specifications and amenities to <em>reduce cognitive load and improve readability.</em></li><li><strong>Dual CTA hierarchy:</strong> Combine a secondary “View More” link with a prominent “Schedule Site Visit” button to support <em>exploratory users and decision-ready buyers</em> without cluttering the cards.</li></ul></div></div>
        <BenefitTable title="Summary of User & Business Benefits" headings={['Feature Element', 'Design Choice', 'User Experience Benefit']} rows={[
          ['Grid System', 'Balanced three-card horizontal layout', 'Equal visual weight for comparison with comfortable breathing room.'],
          ['Incremental Copywriting', '“All of [Tier] +” framing', 'Summarises baseline features across higher tiers.'],
          ['Filter Affordance', 'Filter icon and active status count', 'Shows available results and signals filtering capabilities.'],
          ['Image-overlay Headers', 'Dark gradient at the bottom of each card image', 'Protects property titles and price legibility against bright backgrounds.'],
        ]} />
      </section>

      <section className="case-section" id="case-booking"><h2>Booking Page</h2><div className="case-screen-row"><ScreenImage name="booking" alt="Retreat booking page with three contact fields, date availability and selectable time slots" /><div className="case-screen-copy"><h3>Book your site visit</h3><p><strong>Focus:</strong> Frictionless booking, scheduling psychology, form usability and state management.</p><p>The Book Your Site Visit page streamlines the journey through a single-screen booking interface with minimal inputs, real-time availability, and clear selection feedback, reducing cognitive load and potential drop-offs.</p><ul className="case-decisions"><li><strong>Frictionless booking design:</strong> Group contact fields in a compact row with intuitive icons. A date-strip calendar shows available slots and disabled states, <em>reducing perceived effort and preventing unavailable selections.</em></li><li><strong>Clear visual feedback:</strong> Use green highlights for selected dates and time slots, and muted grey for unavailable dates, reinforcing the <em>Visibility of System Status</em> heuristic.</li><li><strong>Action hierarchy:</strong> Emphasise the yellow Submit button while de-emphasising Reset, <em>guiding users toward confirmation and reducing accidental data loss.</em></li></ul></div></div>
        <BenefitTable title="Summary of User & Business Benefits" headings={benefitHeadings} rows={[
          ['Low-friction Inputs', 'Three essential fields with icon anchors', 'Minimises form abandonment from asking for too much information upfront.'],
          ['Slot Count Visibility', 'Real-time availability counts', 'Encourages prompt booking without deceptive patterns.'],
          ['Chunked Selection', 'Date selection with horizontal time-slot chips', 'Supports touch and click interaction across desktop, tablet and mobile.'],
        ]} />
      </section>

      <section className="case-section" id="case-confirmation"><h2>Confirmation Page</h2><div className="case-screen-row"><ScreenImage name="confirmation" alt="Retreat visit confirmation with agent details, appointment summary, calendar, reschedule and cancel actions" /><div className="case-screen-copy"><h3>Visit Confirmation Page — UX research report</h3><p><strong>Focus:</strong> Post-conversion UX, closure and reassurance, and post-booking engagement.</p><p>The Visit Confirmation Page provides clear booking confirmation, builds trust through agent details, and offers convenient actions to add to Google Calendar, reschedule, or cancel the visit.</p><ul className="case-decisions"><li><strong>Immediate confirmation:</strong> Use a clear success message and green status banner to <em>reassure users that their booking was received</em> and guide them to their email for visit details.</li><li><strong>Agent personalisation:</strong> Add the agent’s name and profile photo to <em>build trust and humanise the booking experience.</em></li><li><strong>Structured summary &amp; high scannability:</strong> Organise the appointment time, guest details, location and email confirmation in an icon-supported card for <em>quick verification at a glance.</em></li><li><strong>Utility actions &amp; flexibility:</strong> Add calendar integration and clear Reschedule and Cancel options to <em>empower users with self-service control and minimise support requests.</em></li></ul></div></div>
        <BenefitTable title="Summary of User & Business Benefits" headings={benefitHeadings} rows={[
          ['Agent Persona Card', 'Photo avatar and host name', 'Builds early rapport and reduces meeting anxiety for site visitors.'],
          ['Calendar Sync', 'Add to Google Calendar button', 'Integrates the visit into the user’s personal workflow.'],
          ['Status Banner', 'Green “Email sent” notification', 'Clear state confirmation helps prevent duplicate submissions.'],
          ['Self-service Actions', 'Standardised Reschedule and Cancel buttons', 'Lets users manage schedule changes independently.'],
          ['Direct Navigation Access', 'Get Directions / map link beside the address', 'Supports one-tap map navigation and easier travel to the site.'],
        ]} />
      </section>
      <footer className="case-footer"><a href="/#recent-works">← Back to recent works</a><a href="/#contact">Discuss this project <Arrow /></a></footer>
    </div>
  </main>
}
