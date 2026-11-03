import { forwardRef } from 'react'

function DepthExample({ image, good = false, alt }: { image: string, good?: boolean, alt: string }) {
  return <figure className={`hierarchy-example ${good ? 'is-good' : 'is-weak'}`}>
    <span className="hierarchy-verdict" role="img" aria-label={good ? 'Effective depth and texture' : 'Ineffective depth and texture'}>{good ? '👍' : '👎'}</span>
    <img src={`/images/depth-texture/${image}.webp`} alt={alt} />
  </figure>
}

const DepthTextureModal = forwardRef<HTMLDialogElement>(function DepthTextureModal(_, ref) {
  return <dialog ref={ref} id="depth-texture-modal" className="hierarchy-dialog depth-dialog" aria-labelledby="depth-texture-title" onClick={event => {
    if (event.target === event.currentTarget) {
      const bounds = event.currentTarget.getBoundingClientRect()
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close()
    }
  }}>
    <header className="hierarchy-header"><h2 id="depth-texture-title">Depth and texture</h2><button type="button" autoFocus aria-label="Close depth and texture" onClick={event => event.currentTarget.closest('dialog')?.close()}>×</button></header>
    <div className="hierarchy-content depth-content">
      <p className="depth-introduction">Depth and texture in UI design use shadows, borders, and background colors to create visual hierarchy, highlight interactive elements, and guide user attention. They improve both visual appeal and usability.</p>
      <section className="hierarchy-section" aria-labelledby="depth-shadows"><h3 id="depth-shadows">Shadows to add depth</h3><p>Shadows add depth to UI design, making interactive elements easier to recognize. They also create visual separation and improve the overall appearance of the interface.</p>
        <div className="hierarchy-comparison depth-pair">
          <DepthExample image="menu-flat" alt="Solutions dropdown without a shadow, blending into its surrounding page background." />
          <DepthExample image="menu-shadow" good alt="Solutions dropdown with a soft shadow, making the floating menu stand out from the page." />
        </div>
        <p className="depth-caption">The shadow not only adds a layer of depth, making the dropdown seem like it’s floating above the rest of the page, but it also helps the menu stand out from the background. This makes it easier for users to focus on the options available to them.</p>
      </section>
      <section className="hierarchy-section" aria-labelledby="depth-dynamic"><h3 id="depth-dynamic">Shadows over dynamic backgrounds</h3><p>In UI design, elements placed over complex backgrounds can be difficult to see. Adding shadows helps them stand out and improves visibility, especially for map labels and zoom controls.</p>
        <div className="hierarchy-comparison depth-pair depth-map-pair">
          <DepthExample image="map-flat" alt="A population label reading 128,200 on a map without a shadow." />
          <DepthExample image="map-shadow" good alt="The same map label with a soft shadow separating it from the map beneath." />
        </div>
      </section>
      <section className="hierarchy-section" aria-labelledby="depth-soft"><h3 id="depth-soft">Use soft shadows</h3><p>Harsh or overly strong shadows can make a UI look cluttered and unprofessional. Use soft, subtle shadows that blend naturally with the background to create depth while maintaining a clean, balanced design.</p>
        <div className="hierarchy-comparison depth-pair">
          <DepthExample image="shadow-harsh" alt="Natural ingredients product card with a dark, harsh drop shadow. Annotation: X 0, Y 0, Blur 48, Color #9F9F9F." />
          <DepthExample image="shadow-soft" good alt="Product card with a lighter, smoother drop shadow. Annotation: X 0, Y 12, Blur 48, Color #E9E9E9." />
        </div>
        <p className="depth-caption">The first card has a strong, rough shadow that doesn’t look great. The second card uses a lighter, smoother shadow that fits better with the design.</p>
      </section>
      <section className="hierarchy-section" aria-labelledby="depth-colour"><h3 id="depth-colour">Match your shadow color to the background</h3><p>When applying shadows, consider their color as well as softness and depth. Using shadow colors that complement the background creates a more natural, balanced, and visually consistent design.</p><p>In the first case, a grey shadow is applied to the element, and in the second case, the shadow has a tint of purple to match the background.</p>
        <div className="hierarchy-comparison depth-pair">
          <DepthExample image="purple-grey" alt="Beauty product card on a light purple background with a grey shadow. Annotation: X 0, Y 19, Blur 48, Color #C7C7C7." />
          <DepthExample image="purple-tinted" good alt="Beauty card with a purple-tinted shadow matching the background. Annotation: X 0, Y 19, Blur 56, Color #CFC9DD." />
        </div>
        <p className="depth-caption">The grey shadow clashes with the light purple background, reducing visual harmony and consistency.<br />In the second design, a subtle purple-tinted shadow blends naturally with the background, creating a cleaner, more balanced, and visually appealing interface.</p>
        <div className="hierarchy-comparison depth-pair">
          <DepthExample image="warm-grey" alt="Natural ingredients card on a warm cream background with a grey shadow. Annotation: X 0, Y 20, Blur 60, Color #D8D8D8." />
          <DepthExample image="warm-tinted" good alt="Natural ingredients card with a warm shadow matching its cream background. Annotation: X 0, Y 12, Blur 48, Color #E3D5B2." />
        </div>
        <p className="depth-caption">It’s an easy but impactful way to improve your designs, creating more coherent and engaging UIs.</p>
      </section>
      <section className="hierarchy-section" aria-labelledby="depth-system"><h3 id="depth-system">Define your shadow system</h3><p>A consistent shadow system defines how shadows are used across your UI. It helps maintain visual harmony, supports brand identity, and improves usability. Shadow styles should match the overall design, whether minimal, bold, or somewhere in between.</p>
        <figure className="depth-shadow-scale"><img src="/images/depth-texture/shadow-scale.webp" alt="Six white cards showing progressively stronger shadow styles labeled xs, sm, md, lg, xl and 2xl." /></figure>
        <div className="depth-system-notes"><p>A consistent shadow system can include three levels:</p><ul><li>Soft Shadow: Adds subtle depth to buttons, small cards, and thumbnails.</li><li>Medium Shadow: Creates more emphasis for elements like modals and pop-ups.</li><li>Strong Shadow: Highlights elevated or important elements, such as dropdown menus and alerts.</li></ul><p>Adjust shadow intensity, spread, and color based on the element’s purpose while maintaining visual consistency.</p></div>
      </section>
      <section className="hierarchy-section" aria-labelledby="depth-outlines"><h3 id="depth-outlines">Creating depth through outlines and background colours</h3><p>Subtle background colors and borders can add depth and improve visual hierarchy in UI design, especially in information-heavy dashboards. For example, placing white cards on a light grey background creates visual separation, making the interface more structured, balanced, and easier to navigate.</p>
        <div className="depth-stack">
          <DepthExample image="dashboard-flat" alt="Tasking dashboard with sales metrics and a customer-growth chart on one flat white surface." />
          <DepthExample image="dashboard-background" good alt="Tasking dashboard with white metric and chart cards separated by a light grey background." />
        </div>
        <p className="depth-caption">Thin borders or outlines help separate sections, guide user attention, and create a clear visual structure. They make complex interfaces easier to navigate while maintaining a clean, organized design.</p>
        <div className="depth-stack"><DepthExample image="dashboard-outlines" good alt="Tasking dashboard using thin subtle outlines around metrics, chart and navigation to define clear sections." /></div>
        <p className="depth-caption">All of these techniques not only improve the aesthetic quality of your design but also enhance usability. It’s a win-win, and once you start applying these simple adjustments, you’ll notice the positive impact they have on your designs.</p>
      </section>
      <section className="hierarchy-section" aria-labelledby="depth-borders"><h3 id="depth-borders">Don’t overdo it with borders</h3><p>Avoid overusing borders and background colors, as they can make the interface cluttered, confusing, and visually overwhelming. Use subtle outlines and limited colors to separate sections, maintain visual balance, and help users focus on important content.</p>
        <div className="hierarchy-comparison depth-pair">
          <DepthExample image="flavours-heavy" alt="Pick your flavours dialog with prominent input borders, repeated row dividers and separate background panels." />
          <DepthExample image="flavours-subtle" good alt="Cleaner flavour-selection dialog using whitespace, a subtle search background and fewer dividers." />
        </div>
        <p className="depth-caption">Use borders only when necessary to maintain a clean and balanced interface. Excessive borders create visual clutter, while thoughtful use of whitespace and subtle background colors can separate sections, guide attention, and improve usability.</p>
        <div className="depth-stack depth-orders">
          <DepthExample image="orders-heavy" alt="Recent orders table with strong horizontal lines and prominent borders around filter and pagination controls." />
          <DepthExample image="orders-subtle" good alt="Recent orders table with subtle dividers and light control outlines, keeping attention on order content." />
        </div>
        <p className="depth-caption">Less is often more. Go for subtle lines that perform their job without drawing unnecessary attention to themselves.</p>
      </section>
      <section className="hierarchy-section" aria-labelledby="depth-exceptions"><h3 id="depth-exceptions">Sometimes it’s okay to break the rules</h3><p>Thin, subtle borders create a clean and modern UI, but bold borders can also work when they match the design style or brand identity. For example, a flight search box with a 1px border looks minimal, while a 10px border creates a strong visual emphasis. Both approaches can be effective when used with purpose.</p>
        <div className="depth-stack">
          <DepthExample image="flight-thin" good alt="Flight search box with a thin border, white fields and a blue Search button." />
          <DepthExample image="flight-bold" good alt="Flight search box with a thicker blue border and rounded edges creating stronger visual emphasis." />
        </div>
        <p className="depth-caption">Both thin and thick borders can be effective when used with balance and purpose. Even bold borders can feel clean when their edges are smooth and their style matches the overall design. The key is to make thoughtful design choices that support visual harmony and usability.</p>
      </section>
      <section className="hierarchy-section" aria-labelledby="depth-glass"><h3 id="depth-glass">Glass effect</h3><p>Glassmorphism is a UI design style that uses frosted or blurred glass effects to create depth, texture, and a modern appearance. It adds visual appeal and makes interfaces more engaging. However, it should be used thoughtfully to match the brand identity and maintain usability.</p>
        <div className="depth-stack">
          <DepthExample image="player-solid" good alt="Life of parrots media player with a solid dark panel and readable text and controls." />
          <DepthExample image="player-glass" good alt="Life of parrots player with a dark green frosted-glass panel over a forest background, retaining readable text and controls." />
        </div>
        <p className="depth-caption">The glass effect enhances the player’s visual appeal, creating a modern and sophisticated look without affecting usability. It adds depth and elegance while maintaining a balanced, attractive, and distraction-free interface.</p>
        <div className="depth-stack"><DepthExample image="player-low-contrast" alt="A light translucent media player over a bright forest scene, reducing contrast and making white text harder to read." /></div>
        <p className="depth-caption">Using glass effects on overly light backgrounds can reduce contrast, readability, and accessibility. While glassmorphism adds a modern look, it should never compromise usability. Always prioritize clear content, sufficient contrast, and easy navigation over visual trends.</p>
      </section>
    </div>
  </dialog>
})

export default DepthTextureModal
