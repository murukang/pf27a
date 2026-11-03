export const navigation = [
  ['Home', '#home'], ['About', '#about'], ['Recent works', '#recent-works'], ['Design Systems', '#design-systems'], ['Contact', '#contact'],
] as const

export const capabilities = ['UX research', 'Requirement analysis', 'Information architecture', 'User flows', 'Wireframing', 'Interaction design', 'Visual design', 'Prototyping', 'Usability testing', 'Design systems', 'AI-assisted exploration', 'Design-to-code']

export const recentWorks = [
  {
    cardTitle: 'Retreat', cardSubtitle: 'Real estate website',
    summary: 'A property discovery experience that helps homebuyers compare villas, understand key features, and arrange a site visit.',
    focus: 'Build interest, support confident property decisions, and create a clear path from exploration to enquiry.',
    slug: 'retreat', category: 'Website', name: 'Retreat - Real estate',
    project: 'Retreat — Real Estate Website', platform: 'Website / Responsive concept.',
    role: 'UX Research & UI Design', users: 'Property buyers and prospective homebuyers.',
    image: `${import.meta.env.BASE_URL}images/retreat-preview.png`, imageAlt: 'Retreat property website with a modern villa and property discovery features',
    sections: [
      { title: 'Project objective', body: 'Design a property discovery experience that helps prospective buyers compare residential properties, understand key features, and book a site visit through a clear, low-friction journey.' },
      { title: 'Project focus', items: [
        { label: 'Home page: Create interest', body: 'Introduce the property’s lifestyle benefits, communicate the value proposition, and direct visitors toward exploring properties or scheduling a visit.' },
        { label: 'Explore Projects: Support decisions', body: 'Present available villas with images, prices, specifications, amenities, and site-visit calls to action.' },
        { label: 'Contact Us: Generate leads', body: 'Collect buyer contact information and preferred appointment times to enable the sales team to follow up.' },
      ] },
    ],
    storyNote: 'Explore the UX case study evaluation of the Retreat real estate website.',
  },
  {
    cardTitle: 'G2O', cardSubtitle: 'Shipping & cargo planning',
    summary: 'An enterprise application that helps maritime planners manage cargo, multi-port rotations, and vessel stability in one connected workflow.',
    focus: 'Simplify loading plan creation with a guided six-step flow and live hydrostatic calculations.',
    slug: 'g2o', category: 'Web Application', name: 'G2O - Shipping',
    project: 'G2O — Bulk Cargo Management Application', platform: 'Web Application.',
    role: 'UX Research & UI Design', users: 'Shipping Cargo Planners',
    image: `${import.meta.env.BASE_URL}images/g2o-preview.png`, imageAlt: 'G2 Ocean shipping application login screen over a cargo vessel at sea',
    sections: [
      { title: 'The Product', body: 'G2O Bulk Cargo Management Application, an enterprise web solution built for maritime shipping planners.' },
      { title: 'The Challenge', body: 'Managing complex multi-port rotations, cargo co-stowage rules, and vessel stability across disconnected tools and spreadsheets created heavy cognitive overload and high risk for operational errors.' },
      { title: 'The Outcome', body: 'For the Loading Plan Creation module, a unified 6-step progressive disclosure architecture anchored to live hydrostatic calculations—cutting workflow friction, reducing planning time, and supporting total vessel safety compliance.' },
    ],
    storyNote: 'Explore the Loading Plan Creation module of the G2O Bulk Cargo Management Application.',
  },
  {
    cardTitle: 'Growbiz', cardSubtitle: 'Business management system',
    summary: 'A unified ERP workspace that connects project workflows and financial information, giving managers a clearer view of business operations.',
    focus: 'Bring task ownership, project progress, and cash flow together to improve coordination and operational visibility.',
    slug: 'growbiz', category: 'ERP Application', name: 'Growbiz - Business Management System',
    project: 'Growbiz - Business Management System', platform: 'Website',
    role: 'Lead UX Researcher & UI Designer', users: 'Managers and top-level executives',
    image: `${import.meta.env.BASE_URL}images/growbiz-preview.png`, imageAlt: 'Growbiz ERP dashboard showing project performance, revenue, expenses and team workload',
    sections: [
      { title: 'The product', body: 'Growbiz is a unified business management platform designed to streamline operations.' },
      { title: 'The Challenge', body: 'Managers often struggle with scattered communication, opaque task ownership, and disconnects between project progress and cash flow. Managing complex, multi-stage projects on disconnected tools leads to delayed handoffs, lost revenue visibility, and reduced operational efficiency.' },
      { title: 'The Outcome', body: 'A clear, unified ERP command center that connects workflows and financial tracking, helping Growbiz managers scale operations with consistency and strategic visibility.' },
    ],
    storyNote: 'Explore the Growbiz Business Management System case study.',
  },
]

export const designPrinciples = [
  ['Visual hierarchy', 'Organizing screen elements'],
  ['Proximity', 'Grouping related elements and separating unrelated'],
  ['Clarity', 'Frictionless experience'],
  ['Alignment', 'Arrangement of elements'],
  ['Contrast', 'Making it easier to see and act'],
  ['Simplicity', 'Making it straightforward for users to accomplish their goals'],
  ['Whitespace', 'Making room to breathe, enhances readability and focus'],
  ['Layout', 'Putting elements is about where and how, not just what they are'],
  ['Balance and harmony', 'Helps users to predict how things work'],
  ['Consistency', 'Helps users to predict how things work'],
  ['Visual cues', 'Making information easier to grasp'],
  ['Depth and texture', 'Patterns, needs and opportunity areas'],
  ['Color', 'Sets the mood, conveys brand personality, and can influence user behavior'],
  ['Typography', 'Defines how users feel about what the words say'],
  ['Interaction cost', 'Interaction cost is the effort required for users to achieve their goals through a user interface.'],
  ['Others', 'General tips'],
] as const
