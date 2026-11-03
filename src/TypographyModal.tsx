import { forwardRef } from 'react'

type Example = { image: string, alt: string }
type TypographySection = {
  id: string
  title: string
  paragraphs: string[]
  bullets?: string[]
  examples?: [Example, Example]
  wide?: boolean
  illustration?: Example
  notes?: string[]
}

const sections: TypographySection[] = [
  {
    id: 'font', title: 'Choosing the right font',
    paragraphs: [
      'Choosing the right font is essential for communicating the intended tone and message. For formal industries like law, accounting, or education, serif typefaces can create a classic, professional, and trustworthy impression.',
      'For industries like beauty and lifestyle, script typefaces can create a warm, elegant, and personalized feel, making the design more inviting and expressive.',
    ],
    examples: [
      { image: 'font-decorative', alt: 'Article card using a decorative blackletter heading and condensed body text that make reading harder.' },
      { image: 'font-readable', alt: 'The same article using a clear serif heading and readable sans-serif body text.' },
    ],
    notes: [
      'Choose a font that balances readability, visual appeal, and the intended design tone. The right font enhances user experience and ensures effective communication.',
      'Fonts like Inter, Gotham, Lato, Open Sans, San Francisco, Helvetica, Manrope, and Roboto offer a strong balance of aesthetics, clarity, and versatility, making them popular choices for UI design.',
      'Never use fonts without a proper license. If you’re on the hunt for free fonts that are safe to use, a reliable resource is Google Fonts.',
    ],
  },
  {
    id: 'families', title: 'Use max 2 different fonts',
    paragraphs: ['Using too many fonts can make a UI look cluttered, inconsistent, and confusing. Limit your design to one or two typefaces to maintain visual harmony, clarity, and brand consistency.'],
    examples: [
      { image: 'fonts-many', alt: 'Music interface mixing Poppins, Open Sans, Times and Telex for different interface elements.' },
      { image: 'fonts-unified', alt: 'Music interface using Inter consistently for headings, labels and buttons.' },
    ],
    notes: [
      'Using multiple fonts can make a design look cluttered, while limiting typography to one or two fonts creates a cleaner, more consistent interface.',
      'Best Practice: Use one versatile font with different sizes and weights to establish visual hierarchy. For more variety, pair two complementary fonts—one for headings and another for body text.',
      'Effective font combinations include Playfair Display + Source Sans Pro, Raleway + Merriweather, and Montserrat + Open Sans.',
    ],
  },
  {
    id: 'line-length', title: 'Ideal line length',
    paragraphs: ['Optimize Line Length for Better Readability', 'Line length plays a crucial role in making body text easy to read and understand. Proper line length improves readability, reduces eye strain, and enhances user experience.'],
    bullets: ['Desktop: Aim for 45–75 characters per line for comfortable reading. This range optimizes the balance between readability and visual appeal.', 'Mobile: Aim for 30–40 characters per line to maintain readability on smaller screens.'],
    illustration: { image: 'line-length-guide', alt: 'Line-length diagram comparing text widths at 20, 45, 75 and 100 characters; the middle range is highlighted as a readable guideline.' },
    notes: ['While 45–75 characters per line is a useful guideline, the ideal line length may vary depending on the content, layout, and device. Maintain flexibility to ensure optimal readability and user experience.'],
  },
  {
    id: 'reading-width', title: 'Improve Readability by Controlling Line Length',
    paragraphs: ['Text stretching across the full page width makes reading difficult, increasing eye movement and strain.'],
    wide: true,
    examples: [
      { image: 'line-length-wide', alt: 'Dog community website with body text stretching across the full content width.' },
      { image: 'line-length-contained', alt: 'Dog community website with a narrower body-text column for more comfortable reading.' },
    ],
    notes: ['Best Practice: Limit line length to approximately 75 characters for a more comfortable reading experience.', 'Both centered and left-aligned layouts can maintain optimal line lengths. However, left-aligned text is generally preferred for longer content, as it provides a consistent starting point for each line, improving readability and scanning.'],
  },
  {
    id: 'paragraphs', title: 'Shorter Paragraphs for Better Readability',
    paragraphs: ['Long blocks of text can overwhelm users and reduce engagement. Break content into shorter, easily digestible paragraphs to improve readability, comprehension, and user experience.'],
    examples: [
      { image: 'paragraph-long', alt: 'GreenMeal description presented as one long uninterrupted paragraph.' },
      { image: 'paragraph-short', alt: 'GreenMeal description broken into three shorter paragraphs with clear visual breaks.' },
    ],
    notes: ['Shorter paragraphs create visual breaks, making content easier to scan, understand, and absorb. They also help highlight key information and improve the overall reading experience.'],
  },
  {
    id: 'subheadings', title: 'Subheadings to Improve Content Scannability',
    paragraphs: ['Subheadings guide users through content, highlight key information, and make text easier to scan and understand. Use spacing, icons, or dividers to create clear visual separation and improve content hierarchy.'],
    examples: [
      { image: 'subheads-missing', alt: 'GreenMeal card with a single heading followed by a long block of text.' },
      { image: 'subheads-clear', alt: 'GreenMeal card with descriptive subheadings, small icons and dividers separating ingredients, cuisines and customization.' },
    ],
  },
  {
    id: 'text-colors', title: 'Optimize Text Contrast for Better Readability',
    paragraphs: ['Avoid overly harsh contrast, such as pure black text (#000000) on white or pure white text (#FFFFFF) on dark backgrounds, when softer alternatives suit the design.', 'Use off-black or dark gray for headings and a slightly lighter gray for body text to create visual hierarchy and a balanced appearance.', 'Best Practice: Maintain sufficient contrast between text and background to ensure readability and accessibility, following WCAG guidelines.'],
    wide: true,
    examples: [
      { image: 'contrast-harsh', alt: 'Dark and light ice-cream cards using pure white or pure black for both headings and body text.' },
      { image: 'contrast-soft', alt: 'Ice-cream cards using softer heading and body colors: #F2F2F2 and #CACACA in dark mode, #1A1A1A and #4E4E4E in light mode.' },
    ],
    notes: ['The first example uses pure black text on white, creating a strong contrast. The second uses dark gray headings and slightly lighter body text, offering a softer, more balanced appearance. Choosing appropriate text colors improves visual hierarchy, readability, and overall UI aesthetics.'],
  },
  {
    id: 'weights', title: 'Font Weights to Establish Visual Hierarchy',
    paragraphs: ['Font weights help emphasize important information, improve readability, and create a clear visual hierarchy.', 'Best Practice: Use bold, semibold, or medium weights for headings to draw attention. For body text, use regular weights to maintain readability and ensure headings remain visually prominent.'],
    wide: true,
    examples: [
      { image: 'weight-flat', alt: 'Canine connection card with regular weight applied equally to the heading and body.' },
      { image: 'weight-hierarchy', alt: 'Canine connection card with a bold heading and regular body text, creating a clear distinction.' },
    ],
    notes: ['Using the same font weight for headings and body text weakens visual hierarchy. Applying bold to headings and regular to body text creates clear distinction, helping users quickly identify key information and scan content more effectively.'],
  },
  {
    id: 'light-headings', title: 'Exceptions: Using Lighter Font Weights for Headings',
    paragraphs: ['Modern websites like Pleo and Linear demonstrate that lighter font weights can also create effective visual hierarchy.', 'Instead of relying on bold text, they use larger font sizes, stronger color contrast, and spacing to distinguish headings from body text.', 'Best Practice: Visual hierarchy doesn’t depend on font weight alone. A balanced combination of size, color, weight, and spacing can create a clean, modern, and readable interface.'],
  },
  {
    id: 'faint-text', title: 'Avoid Extremes in Typography',
    paragraphs: ['Extreme styling choices can compromise readability, accessibility, and user experience.', 'Avoid Overly Light Text Colors', 'Very light gray text may look minimal and modern, but it reduces contrast and makes content difficult to read, especially in bright environments or for users with visual impairments.'],
    examples: [
      { image: 'text-faint', alt: 'Yellow fish card with faint #A9A9A9 body text; the reference marks its contrast as failing WCAG checks.' },
      { image: 'text-readable', alt: 'Yellow fish card with darker #626262 body text; the reference marks its contrast as passing WCAG checks.' },
    ],
    notes: ['Best Practice: Use text colors with sufficient contrast against the background to ensure clear, comfortable, and accessible reading.'],
  },
  {
    id: 'thin-text', title: 'Avoid extra light font weights',
    paragraphs: ['Extra-light fonts may look modern and elegant, but their thin strokes can reduce readability, especially on smaller screens, in poor lighting, or for users with visual impairments.'],
    examples: [
      { image: 'weight-thin', alt: 'Coral reef card with extra-light body text.' },
      { image: 'weight-regular', alt: 'Coral reef card with regular-weight body text for clearer reading.' },
    ],
    notes: ['Best Practice: Use regular or medium font weights for body text to ensure clear, comfortable, and accessible reading.'],
  },
  {
    id: 'size-priority', title: 'Use Font Size to Communicate Importance',
    paragraphs: ['Font size is a powerful tool for establishing visual hierarchy. Larger text naturally attracts more attention, helping users identify important information and prioritize actions.'],
    examples: [
      { image: 'size-wrong', alt: 'Traffic-light card emphasizing Start the engine and go full speed while the instruction to wait for green is small.' },
      { image: 'size-priority', alt: 'Traffic-light card emphasizing Wait until you see the green light, with the supporting action smaller.' },
    ],
    notes: ['Best Practice: Use larger font sizes for headings and key messages, while keeping supporting content smaller. A clear size hierarchy improves scannability, guides user attention, and enhances the overall user experience.'],
  },
  {
    id: 'heading-size', title: 'Establish a clear heading hierarchy', paragraphs: [], wide: true,
    examples: [
      { image: 'watch-flat', alt: 'Watch promotion with a heading nearly the same size as its body text.' },
      { image: 'watch-hierarchy', alt: 'Watch promotion with a larger Timeless elegance watch edition heading above smaller supporting text.' },
    ],
    notes: ['Larger headings create a clear visual hierarchy, even when using the same font and color as body text. When headings and body text share the same size, the hierarchy becomes weak, making it harder for users to identify important information and stay engaged.'],
  },
  {
    id: 'readable-size', title: 'Use font sizes that are readable',
    paragraphs: ['It’s not just about what looks good; it’s about what’s easy on the eyes. Your main goal here is readability.'],
    examples: [
      { image: 'body-small', alt: 'Sea turtles card with a 32px heading, 16px tabs and very small 10px body text.' },
      { image: 'body-readable', alt: 'Sea turtles card retaining the heading and tabs while increasing body text to 16px.' },
    ],
    notes: ['A font size of 16px is a recommended starting point for body text, offering a good balance of readability and visual comfort. However, the ideal size may vary depending on the font, platform, and device.', 'Avoid font sizes below 12px for body text, as they can reduce legibility and create accessibility issues.', 'Best Practice: Prioritize readability over aesthetics. Test typography across different devices and screen sizes to ensure a comfortable and accessible reading experience.'],
  },
  {
    id: 'line-height', title: 'Use Proper Line Height for Better Readability',
    paragraphs: ['Adequate line height improves text readability by creating comfortable spacing between lines, reducing visual clutter, and enhancing the overall reading experience.'],
    examples: [
      { image: 'leading-tight', alt: 'The magic of coffee card with tightly packed lines of body text.' },
      { image: 'leading-readable', alt: 'Coffee card with generous space between lines for more comfortable reading.' },
    ],
    notes: ['Choose line spacing that gives text room to breathe, and test it with the actual font, content, and device sizes. Prioritize a comfortable and accessible reading experience.'],
  },
  {
    id: 'heading-leading', title: 'Use Tighter Line Height for Headings and More Spacing for Paragraphs',
    paragraphs: ['Headings benefit from tighter line spacing to create a compact, impactful appearance, while paragraphs need more generous spacing for comfortable reading.', 'Best Practice: Use smaller line heights for headings (1.1–1.3) and larger line heights for body text (1.5–1.6) to improve visual hierarchy, readability, and overall user experience.'],
    wide: true,
    examples: [
      { image: 'leading-reversed', alt: 'Nature card with loose 160% heading line height and tight 120% body line height.' },
      { image: 'leading-balanced', alt: 'Nature card with compact 120% heading line height and comfortable 160% body line height.' },
    ],
    notes: ['As font size increases, line height can be proportionally smaller. Larger headings benefit from tighter spacing, while smaller body text requires more generous spacing for readability.', 'Best Practice: For a 36px heading, use a line height of approximately 1.3 (130%) to maintain visual balance and readability.'],
  },
  {
    id: 'background-contrast', title: 'Maintain Sufficient Contrast Between Text and Background',
    paragraphs: ['Low-contrast text may look visually appealing but can reduce readability and accessibility, especially for users with visual impairments or in poor lighting conditions.', 'Best Practice: Prioritize readability by ensuring sufficient contrast between text and background, following WCAG accessibility guidelines.'],
    wide: true,
    examples: [
      { image: 'background-low', alt: 'Purple dog card with white text; the reference marks its contrast as failing WCAG checks.' },
      { image: 'background-clear', alt: 'Purple dog card with dark text; the reference marks its contrast as passing WCAG checks.' },
    ],
    notes: ['Maintain a minimum 4.5:1 contrast ratio for normal text to meet WCAG AA accessibility standards. Large text requires at least 3:1.', 'Best Practice: Use tools like WebAIM Contrast Checker, Coolors, or Figma contrast-checking plugins to validate color combinations and ensure accessible, readable text.'],
  },
  {
    id: 'alignment', title: 'Use Left-Aligned Text for Better Readability',
    paragraphs: ['Left-aligned text provides a consistent starting point for each line, making longer paragraphs easier to read and scan. It supports the natural reading flow of left-to-right languages.', 'Best Practice: Use left alignment for body text to improve readability, consistency, and user experience.'],
    examples: [
      { image: 'alignment-center', alt: 'Sleep article card with centered heading and long paragraphs, creating changing line-start positions.' },
      { image: 'alignment-left', alt: 'Sleep article card with left-aligned heading and paragraphs providing a consistent starting point.' },
    ],
    notes: ['Center alignment works well for headings, short messages, and decorative elements, while right alignment can serve specific design purposes.', 'Best Practice: Use left alignment for paragraphs, lists, and long-form content in left-to-right languages. Reserve center or right alignment for specific situations to maintain readability and visual balance.'],
  },
  {
    id: 'applied', title: 'Applying Typography Principles in UI Design',
    paragraphs: ['Compare the two card designs to understand how typography impacts readability and visual appeal.', 'The well-designed card demonstrates effective use of font choice, size, weight, line height, alignment, and contrast, showing how small typography improvements can significantly enhance visual hierarchy, accessibility, and user experience.'],
    wide: true,
    examples: [
      { image: 'applied-weak', alt: 'Japan article card with a small loosely spaced heading, tight centered body text and a low-contrast button, with typography annotations.' },
      { image: 'applied-clear', alt: 'Improved Japan article card with a larger bold heading, comfortable left-aligned body text and a readable button, with typography annotations.' },
    ],
    notes: ['Not only will you see the aesthetic improvement, but also notice how these elements come together to make the text more readable and engaging. It’s a practical reminder that applying solid typography principles can elevate your design from good to great!'],
  },
]

const avoid = [
  'Using pure black (#000000) or pure white (#FFFFFF) for both headings and paragraphs without considering the design context.',
  'Using the same color for headings and paragraphs without a clear hierarchy.',
  'Using the same weight for headings and paragraphs.',
  'Using a bigger line height for headings than for paragraphs.',
  'Using bad contrast solely for an aesthetic look.',
  'Using very small font sizes that compromise readability.',
  'Using extra-thin font weights like Inter Extra Light or Inter Thin for body text.',
  'Using more than two different fonts.',
  'Using fonts that compromise either aesthetics or readability.',
]
const prefer = [
  'Use darker colors for headings and lighter colors for paragraphs to differentiate content and guide the user’s eye, while maintaining sufficient contrast.',
  'Use bold, semibold, or medium headings and regular body text to distinguish hierarchical elements.',
  'Use smaller line heights for headings and larger line heights for paragraphs to create balanced visual flow.',
  'Use good color contrast between text and background to meet WCAG Level AA accessibility standards.',
  'Use readable font sizes. Start around 16px for main copy and adjust for the platform and specific font.',
  'Choose clear, readable typefaces for body copy and test them with your actual content and audience.',
  'Use no more than two fonts. Start with one family in different weights and sizes; pair complementary families when appropriate.',
  'Use left-aligned text for paragraphs in left-to-right languages; reserve center or right alignment for specific cases.',
  'Give longer text blocks adequate space between paragraphs to improve readability and scanning.',
]

function TypographyExample({ example, good }: { example: Example, good: boolean }) {
  return <figure className={`hierarchy-example ${good ? 'is-good' : 'is-weak'}`}><span className="hierarchy-verdict" role="img" aria-label={good ? 'Readable typography' : 'Typography to improve'}>{good ? '👍' : '👎'}</span><img src={`${import.meta.env.BASE_URL}images/typography/${example.image}.webp`} alt={example.alt} /></figure>
}

const TypographyModal = forwardRef<HTMLDialogElement>(function TypographyModal(_, ref) {
  return <dialog ref={ref} id="typography-modal" className="hierarchy-dialog typography-dialog" aria-labelledby="typography-title" onClick={event => {
    if (event.target === event.currentTarget) {
      const bounds = event.currentTarget.getBoundingClientRect()
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close()
    }
  }}>
    <header className="hierarchy-header"><h2 id="typography-title">Typography</h2><button type="button" autoFocus aria-label="Close typography" onClick={event => event.currentTarget.closest('dialog')?.close()}>×</button></header>
    <div className="hierarchy-content typography-content">
      <p className="typography-introduction">Typography is a fundamental element of good design. It influences how users read, understand, and experience content across websites, apps, and digital platforms. Beyond the words themselves, the way text is presented shapes readability, perception, and the overall user experience.</p>
      {sections.map(section => <section key={section.id} className="hierarchy-section" aria-labelledby={`type-${section.id}`}>
        <h3 id={`type-${section.id}`}>{section.title}</h3>
        {section.paragraphs.map(text => <p key={text}>{text}</p>)}
        {section.bullets && <ul className="typography-bullets">{section.bullets.map(text => <li key={text}>{text}</li>)}</ul>}
        {section.illustration && <figure className="typography-illustration"><img src={`${import.meta.env.BASE_URL}images/typography/${section.illustration.image}.webp`} alt={section.illustration.alt} /></figure>}
        {section.examples && <div className={`hierarchy-comparison typography-pair ${section.wide ? 'typography-pair-wide' : ''}`}>{section.examples.map((example, index) => <TypographyExample key={example.image} example={example} good={index === 1} />)}</div>}
        {section.notes && <div className="typography-notes">{section.notes.map(text => <p key={text}>{text}</p>)}</div>}
      </section>)}
      <section className="typography-checklists" aria-label="Typography checklist">
        <div className="hierarchy-example is-weak"><span className="hierarchy-verdict" role="img" aria-label="Typography practices to avoid">👎</span><ol aria-label="Practices to avoid">{avoid.map(text => <li key={text}>{text}</li>)}</ol></div>
        <div className="hierarchy-example is-good"><span className="hierarchy-verdict" role="img" aria-label="Typography practices to use">👍</span><ol aria-label="Practices to use">{prefer.map(text => <li key={text}>{text}</li>)}</ol></div>
      </section>
    </div>
  </dialog>
})

export default TypographyModal
