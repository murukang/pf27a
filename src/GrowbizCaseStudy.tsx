import { useEffect } from 'react'
import Arrow from './Arrow'
import BenefitTable from './CaseStudyTable'

const headings = ['Problem area', 'Research focus', 'Key output']
function GrowbizScreen({ name, alt, width, height }: { name:string; alt:string; width:number; height:number }) {
  return <figure className="growbiz-screen"><img src={`/images/growbiz/${name}.webp`} alt={alt} width={width} height={height} loading={name === 'dashboard' ? 'eager' : 'lazy'} /><figcaption>{alt}</figcaption></figure>
}
const financeFindings = [
  ['Difficulty understanding the overall financial position', 'The consolidated dashboard provides a single place to monitor business activity, identify potential risks, and review operational and financial performance.'],
  ['Limited visibility into income and expense trends', 'Users can more readily identify broad cash-flow trends, compare monthly performance, and recognise periods that may require further investigation.'],
  ['Difficulty identifying major operating expenses', 'The category-level view makes major cost drivers easier to identify and provides a starting point for expense investigation and budget review.'],
  ['Finding and interpreting individual transactions takes effort', 'Transaction records become easier to scan and interpret, while the dedicated Transactions view provides a path to more detailed financial investigation.'],
]

export default function GrowbizCaseStudy() {
  useEffect(() => { document.title = 'Growbiz ERP Application — UX Case Study | Murukan Gopinathan' }, [])
  return <main className="retreat-case growbiz-case section-pad" id="case-top"><div className="case-container">
    <p className="growbiz-kicker">Case study 3</p>
    <div className="case-title-row"><h1>Growbiz <span>ERP Application</span></h1><nav className="case-jump" aria-label="Case study sections"><a href="#growbiz-dashboard">01 <span>Dashboard</span></a><a href="#growbiz-projects">02 <span>Projects</span></a><a href="#growbiz-reports">03 <span>Reports</span></a></nav></div>
    <div className="growbiz-project-meta"><p><strong>Project Name:</strong> <b>Growbiz,</b> ERP Application</p><p><strong>My role:</strong> UX Researcher, Designer, Collaboration with client-side Marketing team, Users and Developers.</p></div>
    <p className="case-section-kicker">UX problems, research focus, and design output</p>

    <section className="growbiz-section" id="growbiz-dashboard" aria-labelledby="growbiz-dashboard-title"><h2 id="growbiz-dashboard-title">Dashboard</h2><div className="growbiz-dashboard-panel"><div className="growbiz-screen-row">
      <GrowbizScreen name="dashboard" alt="Growbiz business dashboard with KPI cards, project performance, deadlines, team workload and revenue versus expenses" width={1559} height={1026} />
      <div className="growbiz-copy"><h3 className="growbiz-problem">Problem</h3><p className="growbiz-muted">Business owners need to understand the current state of operations quickly. When important metrics, project updates, and financial information are difficult to scan, it becomes harder to identify priorities.</p>
        <h3>Research focus</h3><ul><li>What information does the owner need immediately after logging in?</li><li>Which metrics support daily business decisions?</li><li>How can overdue work and important changes stand out?</li><li>Which information should be visible without opening multiple modules?</li></ul>
        <h3>UX Output</h3><ul><li>Redesigned dashboard with prominent KPI cards.</li><li>Clear separation of business overview and financial view.</li><li>Period selector for contextual reporting.</li><li>Project performance, upcoming deadlines, team workload, revenue versus expenses, and recent activity.</li><li>Quick-access summary cards for proposals, clients, invoices, and team members.</li></ul>
        <h3 className="growbiz-outcome">Outcome</h3><p>The dashboard is structured to support faster business monitoring, better prioritisation, and fewer navigation steps for common overview tasks.</p>
      </div>
    </div></div></section>

    <section className="growbiz-section" id="growbiz-finance" aria-labelledby="growbiz-finance-title"><h2 id="growbiz-finance-title">Finance Dashboard screen</h2><div className="growbiz-screen-row growbiz-finance-row"><div className="growbiz-copy growbiz-finance-findings">{financeFindings.map(([problem, outcome]) => <div className="growbiz-finding" key={problem}><h3 className="growbiz-problem">Problem</h3><p className="growbiz-muted">{problem}</p><h3 className="growbiz-outcome">Outcome</h3><p>{outcome}</p></div>)}</div>
      <GrowbizScreen name="finance" alt="Growbiz Finance dashboard showing income, expenses, net profit, receivables, a monthly comparison chart and transaction records" width={1384} height={1142} />
    </div><BenefitTable title="Finance — Research focus & design output" headings={headings} rows={[
      ['Limited financial visibility', 'Identify the most important financial indicators', 'Four KPI cards'],
      ['Unclear financial trends', 'Compare income and expenses over time', 'Six-month comparison chart'],
      ['Expense opacity', 'Identify major cost categories', 'Expense breakdown'],
      ['Outstanding receivables', 'Understand unpaid invoices and collection priorities', 'Pending receivables KPI'],
    ]} /></section>

    <section className="growbiz-section growbiz-project-panel" id="growbiz-projects" aria-labelledby="growbiz-projects-title"><h2 id="growbiz-projects-title">Project Management screen</h2><div className="growbiz-screen-row growbiz-project-row">
      <GrowbizScreen name="projects" alt="Growbiz Project Management portfolio with progress KPIs, search and filters, and project cards showing status, budget, dates and assigned team members" width={1342} height={1128} />
      <div className="growbiz-copy"><h3 className="growbiz-outcome">UX focus</h3><p>Business performance analysis, revenue reporting, project health, sales conversion, and team utilisation.</p>
        <div className="growbiz-finding"><h3 className="growbiz-problem">Problem</h3><p className="growbiz-muted">Limited visibility across multiple projects.</p><h3 className="growbiz-outcome">UX output</h3><ul><li>Four portfolio-level KPI cards: Active Projects, Portfolio Progress, Needs Attention, and Total Budget.</li><li>A centralised project list presented as individual project cards.</li><li>Visible project status, completion percentage, due date, budget, task completion, and assigned team members.</li></ul></div>
        <div className="growbiz-finding"><h3 className="growbiz-problem">Problem</h3><p className="growbiz-muted">A project can be approaching its deadline, falling behind schedule, or waiting for a decision. If these conditions are not clearly communicated, project managers may discover delivery risks too late.</p><h3 className="growbiz-outcome">UX output</h3><ul><li>A dedicated Needs Attention KPI.</li><li>Colour-coded status badges: In Progress, Review, Planning, On Hold, and Completed.</li><li>Due dates displayed prominently on project cards.</li><li>Progress indicators to support rapid assessment.</li><li>Search and filter controls to narrow the project list.</li></ul></div>
      </div>
    </div>
    <div className="growbiz-project-notes"><div className="growbiz-finding"><h3 className="growbiz-problem">Problem</h3><p>Project progress is difficult to compare.</p><h3 className="growbiz-outcome">UX outcome</h3><p>Managers can compare projects more quickly, identify work that may be stalled, and understand delivery status without opening each project individually.</p></div>
      <div className="growbiz-finding"><h3 className="growbiz-problem">Problem</h3><p>A project may involve multiple designers, researchers, and other team members. Project managers need to know who is assigned and whether the team has enough capacity to complete the work.</p><h3 className="growbiz-outcome">UX outcome</h3><p>The interface makes team allocation more visible and provides a foundation for better coordination. A separate workload or capacity view would be needed to identify over-allocation reliably.</p></div>
      <div className="growbiz-finding"><h3 className="growbiz-problem">Problem</h3><p>Project information lacks a consistent visual hierarchy.</p><h3 className="growbiz-outcome">UX outcome</h3><p>Standardised project cards make progress, status, dates, budgets, and assignments easier to scan and compare.</p></div>
      <div className="growbiz-observation"><h3 className="growbiz-outcome">Observation</h3><p>“Needs Attention” does not explain why a project is flagged.</p><h3 className="growbiz-outcome">Recommended improvement</h3><p>Show specific reasons, such as overdue, blocked, over budget, or awaiting approval.</p></div>
    </div><BenefitTable title="Project Management — Research focus & design output" headings={headings} rows={[
      ['Unclear project progress', 'Establish a consistent way to compare completion', 'Progress bars, percentages, task counts'],
      ['Difficult project discovery', 'Understand search and filtering needs', 'Search, filters, Portfolio and Board views'],
      ['Unclear team allocation', 'Improve visibility of project assignments', 'Team avatars and task counts'],
      ['Inconsistent information presentation', 'Prioritise attributes needed for decisions', 'Standardised project cards and visual hierarchy'],
    ]} /></section>

    <section className="growbiz-section" id="growbiz-reports" aria-labelledby="growbiz-reports-title"><h2 id="growbiz-reports-title">Reports screen</h2><div className="growbiz-screen-row">
      <GrowbizScreen name="reports" alt="Growbiz Reports dashboard with revenue trends, revenue by service, project performance, a sales conversion funnel and report library" width={1574} height={1164} />
      <div className="growbiz-copy growbiz-report-copy"><p>I designed a Reports Dashboard for an internal <strong>Digital Business Operations Management System</strong> to <em>help business owners and managers understand performance</em> across finance, project delivery, sales, and team utilisation.</p><p>The central UX challenge was to bring information from multiple business functions into one reporting experience while making it <em>easy to identify trends, compare performance, and investigate potential risks.</em></p>
        <h3 className="growbiz-analysis-title">Visual UX analysis</h3><h3>Business overview</h3><p className="growbiz-outcome">Total Revenue · Active Projects · Active Clients · Team Utilisation</p><p>The KPI cards <em>provide a compact overview</em> of commercial performance, delivery activity, client growth, and resource utilisation.</p>
        <h3>Performance analysis</h3><p className="growbiz-outcome">Revenue Overview · Revenue by Service</p><p>The revenue chart reveals changes over time, operational and commercial health, project performance, and pipeline conversion.</p><p>The project table brings <em>delivery progress and margin</em> into the same view. The sales funnel provides visibility into <em>the progression</em> from new leads to successful conversions.</p>
      </div>
    </div>
    <div className="growbiz-report-notes"><h3>Detailed reporting</h3><p className="growbiz-outcome">Report Library · Export Report</p><p>Dedicated reports provide a path from high-level indicators to more detailed analysis, while export supports sharing and offline review.</p><h3 className="growbiz-outcome">What works well in the design?</h3><ul><li><strong>Clear information hierarchy:</strong> The dashboard progresses from summary metrics to charts, tables, and detailed reports.</li><li><strong>Multiple analytical perspectives:</strong> Revenue, projects, sales, and team capacity are represented in a single interface.</li><li><strong>Appropriate visualisation choices:</strong> A line chart supports trend analysis, horizontal bars support category comparison, a table supports project comparison, and a funnel supports pipeline-stage analysis.</li><li><strong>Contextual performance indicators:</strong> Percentage changes, targets, and industry benchmarks help users interpret headline numbers.</li><li><strong>Direct navigation:</strong> View Projects and Report Library cards provide pathways to deeper information.</li></ul></div>
    <BenefitTable title="Reports — Research focus & design output" headings={headings} rows={[
      ['Fragmented business performance', 'Identify key business health indicators', 'Consolidated KPI cards'],
      ['Unclear revenue trends', 'Compare performance over time', 'Revenue Overview chart'],
      ['Limited service-level insight', 'Understand revenue contribution by service', 'Revenue by Service breakdown'],
      ['Project delivery and margin risks', 'Compare project progress, margins, and status', 'Project Performance table'],
      ['Poor sales-pipeline visibility', 'Identify conversion patterns and weak stages', 'Pipeline Conversion visualisation'],
      ['Unclear team utilisation', 'Compare capacity with utilisation targets', 'Team Utilisation KPI and detailed report'],
    ]} /></section>
    <footer className="case-footer"><a href="/#recent-works">Back to recent works</a><a href="/#contact">Discuss this project <Arrow /></a></footer>
  </div></main>
}
