import { useEffect } from 'react'
import Arrow from './Arrow'
import BenefitTable from './CaseStudyTable'

const screens = [
  {
    id: 'schedule', title: 'Schedule / Cargo Input', image: 'schedule', width:1919, height:1074,
    alt: 'G2O Schedule and Cargo Input dashboard with voyage scheduling, collapsible cargo details and a stowage factor matrix',
    lead: 'The G2O Bulk Cargo Management Application tackles high-stakes, data-intensive maritime logistics. For shipping cargo planners, managing multi-port rotations, complex stowage factors (SF), and precise contractual quantities is a cognitive minefield traditionally plagued by fragmented legacy software and dense spreadsheets.',
    approach: 'The UI/UX solution for the Schedule / Cargo Input screen transforms this complexity into a structured, high-density yet breathable workspace. It honours core UX metrics—reducing cognitive load, minimising data-entry friction, and giving users control over multi-tier voyage parameters.',
    benefits: ['Information Architecture & Progressive Disclosure', 'Frictionless Data Management & Bulk Actions', 'Spatial Efficiency & High-density B2B Data Design', 'Error Prevention & System Status Visibility'],
    rows: [
      ['Managing port schedules alongside detailed cargo allocations can create cognitive overload and excessive information.', 'Use collapsible Cargo Details accordions to separate voyage-level schedules from port-specific cargo specifications.', 'Reduces cognitive load and context switching, helping planners review cargo details without losing sight of the voyage schedule.'],
      ['Maritime planning involves large datasets often initialised through external systems or templates.', 'Provide prominent Download Template, Upload Template, Run Optimizer, and Save Plan actions, with inline table editing.', 'Speeds up bulk data imports, reduces repetitive entry, and minimises errors.'],
      ['Enterprise users need high data visibility to make rapid operational decisions.', 'Display an SF Details matrix mapping cargo grades across Holds 1–5, with clear grid lines and total cargo indicators.', 'Minimises scrolling and enables quick comparison of hold capacities, stowage factors, and cargo allocations.'],
      ['Incorrect cargo dimensions, quantities, or stowage settings can cause costly operational and safety risks.', 'Use clear field labels, explicit stowage toggles, and auto-calculated cargo totals to guide accurate data entry.', 'Builds user confidence, reduces errors, and supports safer, more reliable cargo planning.'],
    ],
  },
  {
    id: 'mixing', title: 'Mixing Matrix', image: 'mixing', width:1900, height:1070,
    alt: 'G2O Mixing Matrix showing cargo compatibility checkmarks, a five-hold vessel silhouette, stability metrics and a port rotation track',
    lead: 'The Mixing Matrix addresses one of the most critical operational challenges in maritime bulk shipping: cargo compatibility and hold co-stowage validation. Cargo planners must rapidly verify which cargo grades can be mixed or loaded adjacent to one another without chemical contamination, physical damage, or violation of safety standards—all while monitoring real-time vessel stability.',
    approach: 'The design bridges abstract compatibility rules with physical vessel spatial representation on a single interactive screen, turning complex cargo physics into an intuitive, visually guided layout.',
    benefits: ['Matrix Grid for Rapid Decision-making', 'Visual-spatial Mapping (Hold Silhouette & Physical Perception)', 'Real-time Stability & Safety Metrics Panel', 'Linear Voyage Route Context (Port Rotation Track)'],
    rows: [
      ['Planners rely on manuals or spreadsheets to verify cargo compatibility.', 'Create a 2D cargo compatibility matrix with green checkmarks for allowed combinations and disabled self-intersections.', 'Simplifies compatibility checks and reduces time spent looking up cargo combinations.'],
      ['Interpreting tabular cargo data requires mental calculations and spatial visualisation, increasing cognitive load and loading errors.', 'Add a 2D vessel silhouette divided into Holds 1–5, displaying POL, POD, assigned tonnage, and colour-coded cargo allocations.', 'Connects numerical data with the physical vessel layout, improving spatial awareness of cargo distribution from bow to stern.'],
      ['Cargo mixing affects vessel stability, requiring separate screens to verify safety metrics.', 'Display real-time stability indicators below the vessel graphic: Draft, SF%, BM%, Trim, GM, and Displacement.', 'Enables immediate safety assessment during cargo planning without leaving the screen.'],
      ['Planners need to track cargo discharge locations and sequence across the voyage.', 'Add a colour-coded port timeline showing port sequences from BRRIG to USBCK and distances between legs in nautical miles.', 'Maintains geographic context and helps planners track cargo lifecycles alongside vessel hold arrangements.'],
    ],
  },
  {
    id: 'tank', title: 'Tank Condition', image: 'tank', width:1898, height:1056,
    alt: 'G2O Tank Condition dashboard with tank capacity, volume, weight, fill percentages, free surface moment values and live vessel context',
    lead: 'In maritime bulk shipping, managing liquid ballast water, fuel oil, diesel, and fresh water tanks is as crucial as managing dry cargo. Ballast and bunker distribution directly influence vessel trim, stability, list, hull stresses, and fuel efficiency.',
    approach: 'The Tank Condition interface addresses the operational challenge of monitoring fluid dynamics across specific port waypoints, such as Tank Condition at BRSFS. Structured tank data and persistent vessel feedback keep planning decisions connected to their physical consequences.',
    benefits: ['Context-aware Waypoint Switching & Sub-task Segmentation', 'Domain-optimised Data Architecture for Naval Hydrodynamics', 'One-click Operational Efficiency & Batch Triggers', 'Instant Visual Feedback (Dynamic Hydrostatic Verification)'],
    rows: [
      ['Tank levels change at each port due to bunkering, ballasting, and deballasting, creating confusion and risking miscalculations.', 'Provide a port-specific tank condition view with a dedicated Bunkering Plan sub-tab and a highlighted active port on the voyage timeline.', 'Links tank data to the selected port, preventing cross-port confusion and supporting accurate planning.'],
      ['Complex tank calculations, including Free Surface Moment (FSM), affect vessel stability and safety.', 'Organise tank data into structured columns for category, name, density, capacity, volume, weight, fill percentage, and FSM limits.', 'Uses familiar maritime terminology in a high-density, easily scannable layout for cargo planners and Chief Officers.'],
      ['Manually adjusting fill percentages across more than 20 tanks is tedious and error-prone.', 'Provide Max and Max FSM quick actions, plus bulk-editing tools for tank sequencing and Excel uploads.', 'Speeds up tank configuration, reduces manual input, and minimises data-entry errors.'],
      ['Ballast adjustments affect vessel draft and structural stresses, requiring continuous safety checks.', 'Keep a persistent bottom panel with updated draft, shear force, bending moment, trim, and GM metrics.', 'Enables real-time safety validation and confident what-if adjustments within vessel limits.'],
      ['Managing ballast and fuel across multiple ports relies on complex spreadsheets with limited visibility into vessel stability.', 'Unify FSM, volume, weight, fill percentage, bulk actions, stability metrics, and a port-rotation tracker in a port-specific dashboard.', 'Streamlines tank planning and enables faster stability and hull-stress validation through immediate visual feedback.'],
    ],
  },
  {
    id: 'port', title: 'Port Parameters', image: 'port', width:1898, height:1068,
    alt: 'G2O Port Parameters view showing port-specific draft limits, ballast operations, water density and a persistent vessel stability panel',
    lead: 'Every port operates under unique physical, environmental and legal constraints. Water density, maximum allowable drafts, local loadlines, air draft limits, and ballast operational rules vary across the voyage, from Rio Grande to Jacksonville.',
    approach: 'The Port Parameters interface configures and monitors these location-specific regulatory limits across the entire itinerary. A clean, scannable row-based matrix maintains a constant visual connection with the vessel’s stability dashboard.',
    benefits: ['Holistic Multi-port Parameter Comparison', 'Progressive Control Design & Intelligent Defaults', 'Consistent Spatial Anchoring & Persistent Safety Feedback'],
    rows: [
      ['Port rules scattered across documents and tabs increase the risk of missing draft limits and water-density variations.', 'Display port-specific constraints in a sequential table: draft, maximum trim, ballast modes, stress settings, maximum port draft, water density, hatch air draft, and allowed displacement.', 'Enables quick comparison of constraints across the voyage, reducing the risk of port fines, compliance issues, and vessel grounding.'],
      ['Repetitive configuration of loadline types and ballast operations slows down voyage planning.', 'Combine dropdowns, pre-filled numerical inputs, stress toggles, and grey read-only calculated metrics.', 'Speeds up planning through smart defaults and clear distinctions between editable inputs and system-calculated outputs.'],
      ['Planners need to understand how port restrictions affect vessel posture, stability, and safety margins.', 'Maintain the vessel silhouette, live hydrostatic metrics, and colour-coded port rotation map throughout parameter editing.', 'Ensures continuous situational awareness while planners validate loading plans against port constraints.'],
    ],
  },
  {
    id: 'speed', title: 'Speed / Fuel consumption', image: 'speed', width:1898, height:1052,
    alt: 'G2O Speed and Consumption screen with speed, fuel and fresh water variables above the vessel silhouette and port rotation map',
    lead: 'Voyage planners must carefully model trade-offs between vessel speed, fuel burn rates for Fuel Oil (FO) and Diesel Oil (DO), and freshwater dynamics—both at sea and while idling or operating in port. The Speed / Consumption screen provides a streamlined workspace for these operational variables.',
    approach: 'The layout isolates key hydrodynamic and engine consumption variables in a clean vertical key-value structure, directly connected to the overall vessel displacement and stability panel below.',
    benefits: ['High-scannability Key-value Layout for Rapid Modelling', 'Direct Correlation Between Engine Dynamics & Hull Displacement', 'Separation of Operational States (At Sea vs. At Port)'],
    rows: [
      ['Complex fuel and water consumption variables across sea and port operations increase clutter, entry errors, and planning time.', 'Organise speed, FO, DO, and freshwater inputs into a spacious two-column key-value layout.', 'Improves readability and enables faster speed–fuel trade-off evaluation for cargo planners and voyage managers.'],
      ['Fuel consumption reduces vessel displacement, affecting draft, trim, and stability.', 'Position fuel consumption parameters above persistent vessel visuals and hydrostatic metrics.', 'Supports dynamic what-if analysis, helping planners assess vessel conditions after long transit legs.'],
      ['Combining fuel consumption across sea and port operations can cause inaccurate cost estimates and operational discrepancies.', 'Separate fuel consumption inputs into distinct At Sea and At Port parameters across voyage legs and port stays.', 'Improves fuel cost accuracy, supports voyage charter calculations, and enables fuel-efficient planning decisions.'],
    ],
  },
  {
    id: 'output', title: 'Output (Final Report & Summary)', image: 'output', width:1898, height:1066,
    alt: 'G2O Output screen showing a departure report, collapsible weight totals, cargo hold summary and a vessel visualisation',
    lead: 'The Output screen concludes the Loading Plan Creation workflow. After navigating schedules, mixing rules, tank conditions, port parameters, and fuel consumption, cargo planners consolidate these complex inputs into an executive summary and departure report.',
    approach: 'A clean, hierarchical, exportable decision dashboard brings the underlying calculations together. It supports validation of the planner’s work and safety compliance, and provides the final operational report for port captains and vessel officers.',
    benefits: ['Progressive Disclosure for Multi-tiered Summary Data', 'Clear Visual Information Hierarchy', 'Seamless One-click Exportability', 'Visual Consistency Across the Entire Module'],
    rows: [
      ['Detailed weight breakdowns create visual fatigue and hide critical totals.', 'Use collapsible accordions for fuel oil, diesel, fresh water, ballast water, and hold details, with summary totals on the right.', 'Enables quick assessment of overall tonnage while allowing detailed audits when needed.'],
      ['Planners need to quickly distinguish vessel displacement indicators from cargo hold allocations.', 'Separate Departure Report Context—port, displacement, lightship weight, deadweight constant—from the Cargo Hold Summary.', 'Makes plan feasibility reviews easier before sign-off.'],
      ['External stakeholders may lack system access to view loading plans.', 'Add a prominent download icon in the top-right corner of the Output view.', 'Simplifies report sharing and supports offline operational handoffs.'],
      ['Switching between input tabs and output disconnects planners from the vessel’s spatial context.', 'Maintain a bottom panel with the 2D vessel silhouette, hydrostatic metrics, and port rotation map across all six screens.', 'Preserves spatial awareness and helps users connect output metrics to the vessel profile and route.'],
    ],
  },
]

export default function G2OCaseStudy() {
  useEffect(() => { document.title = 'G2O Bulk Cargo Management — UX Case Study | Murukan Gopinathan' }, [])
  return <main className="retreat-case g2o-case section-pad" id="case-top"><div className="case-container">
    <p className="g2o-kicker">Case study 2</p>
    <div className="case-title-row"><h1>G2O Bulk Cargo Management</h1><nav className="case-jump" aria-label="Case study sections"><a href="#g2o-schedule">01 <span>Schedule</span></a><a href="#g2o-tank">02 <span>Planning</span></a><a href="#g2o-output">03 <span>Output</span></a></nav></div>
    <section className="g2o-intro" aria-label="Module overview"><h2>Module: Loading Plan Creation</h2><p>The G2O Bulk Cargo Management Application simplifies complex maritime cargo planning, including multi-port rotations, stowage factors, and contractual quantities. The redesigned workflow transforms fragmented, data-heavy tasks into a structured, intuitive workspace—reducing cognitive load, minimising data-entry friction, and improving control over voyage planning.</p></section>
    {screens.map((screen, index) => <section className={`g2o-section ${index % 2 === 1 ? 'g2o-section-teal' : ''}`} id={`g2o-${screen.id}`} key={screen.id} aria-labelledby={`g2o-title-${screen.id}`}>
      <h2 id={`g2o-title-${screen.id}`}>{screen.title}</h2>
      <div className="g2o-screen-row"><div className="g2o-screen-copy"><p>{screen.lead}</p><p className="g2o-approach">{screen.approach}</p><h3>Core UX Benefits &amp; Evaluative Highlights</h3><ol>{screen.benefits.map(benefit => <li key={benefit}>{benefit}</li>)}</ol></div><figure className="g2o-screen"><img src={`/images/g2o/${screen.image}.webp`} width={screen.width} height={screen.height} alt={screen.alt} loading={index === 0 ? 'eager' : 'lazy'} /><figcaption>{screen.alt}</figcaption></figure></div>
      <BenefitTable title={`${screen.title} — Challenge, Solution & Benefit`} headings={['The Challenge', 'The UX Solution', 'UX Benefit']} rows={screen.rows} />
    </section>)}
    <footer className="case-footer"><a href="/#recent-works">← Back to recent works</a><a href="/#contact">Discuss this project <Arrow /></a></footer>
  </div></main>
}
