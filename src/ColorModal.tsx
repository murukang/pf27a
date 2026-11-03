import { forwardRef } from 'react'

function ColorExample({ image, good = false, alt }: { image: string, good?: boolean, alt: string }) {
  return <figure className={`hierarchy-example ${good ? 'is-good' : 'is-weak'}`}>
    <span className="hierarchy-verdict" role="img" aria-label={good ? 'Effective color use' : 'Ineffective color use'}>{good ? '👍' : '👎'}</span>
    <img src={`/images/color/${image}.webp`} alt={alt} />
  </figure>
}

const ColorModal = forwardRef<HTMLDialogElement>(function ColorModal(_, ref) {
  return <dialog ref={ref} id="color-modal" className="hierarchy-dialog color-dialog" aria-labelledby="color-title" onClick={event => {
    if (event.target === event.currentTarget) {
      const bounds = event.currentTarget.getBoundingClientRect()
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close()
    }
  }}>
    <header className="hierarchy-header"><h2 id="color-title">Color</h2><button type="button" autoFocus aria-label="Close color" onClick={event => event.currentTarget.closest('dialog')?.close()}>×</button></header>
    <div className="hierarchy-content color-content">
      <p className="color-introduction">Color in UI design goes beyond visual appeal. It communicates brand identity, sets the mood, guides user actions, and influences emotions. A well-chosen color scheme creates a comfortable, engaging, and meaningful user experience.</p>
      <section className="hierarchy-section" aria-labelledby="color-less"><h3 id="color-less">Less Is More</h3><p>Overusing primary brand colors can overwhelm users, distract from important content, and create visual imbalance. Use colors thoughtfully to maintain a clean, balanced, and visually appealing interface.</p>
        <div className="hierarchy-comparison color-pair">
          <ColorExample image="brand-overused" alt="Personal Account banking screen overusing bright pink for its heading, profile icon, Send and Request buttons, section headings, add-contact control and all navigation icons." />
          <ColorExample image="brand-selective" good alt="Banking screen retaining the pink payment card and selected accents, with neutral headings, light grey action buttons and muted inactive navigation icons." />
        </div>
        <div className="color-caption"><p><strong>First Design:</strong> Overusing the primary color creates visual clutter and makes it difficult for users to identify important actions. When everything is highlighted, nothing stands out.</p><p><strong>Second Design:</strong> Using the primary color selectively for buttons, links, and key actions improves visual hierarchy, guides user attention, and makes navigation more intuitive.</p><p><strong>Key Takeaway:</strong> Use a balanced color palette and highlight only essential elements to maintain clarity, consistency, and usability.</p></div>
      </section>
      <section className="hierarchy-section" aria-labelledby="color-background"><h3 id="color-background">Background color</h3><p>Neutral background colors, such as light grey, beige, or soft white, create a clean and balanced interface. They help important content and primary colors stand out, reduce visual distractions, and improve user focus and readability.</p>
        <div className="hierarchy-comparison color-pair">
          <ColorExample image="background-dark" good alt="Dark portfolio screen using a deep navy background, light text and bright orange, green and pink chart accents." />
          <ColorExample image="background-light" good alt="Light portfolio screen using a soft white background, dark text and the same bright orange, green and pink chart accents." />
        </div>
        <p className="color-caption">Dark mode can reduce glare and improve viewing comfort, especially in low-light environments. Offering both light and dark modes allows users to choose their preferred experience, making the interface more flexible, accessible, and user-friendly.</p>
      </section>
      <section className="hierarchy-section" aria-labelledby="color-meaning"><h3 id="color-meaning">Relying solely on color</h3><p>Avoid relying only on color to communicate errors, success, or warnings, as not all users perceive colors the same way. Combine colors with icons and clear text messages to improve accessibility and understanding. For example, use a red error indicator, an alert icon, and a message like “Enter an amount greater than $1.”</p>
        <div className="hierarchy-comparison color-pair">
          <ColorExample image="error-color-only" alt="Sale amount field containing $0.01 with only a red border to indicate a problem, without an explanation." />
          <ColorExample image="error-explained" good alt="Sale amount field with a red border, alert icon and explanatory message: Enter amount bigger than $1." />
        </div>
        <h4 className="color-state-title">Error</h4>
        <div className="hierarchy-comparison color-pair">
          <ColorExample image="error-amber" alt="Invalid sale amount styled in amber with an alert icon and error message, using a warning color for an error." />
          <ColorExample image="error-red" good alt="Invalid sale amount styled in familiar red with an alert icon and clear error message." />
        </div>
        <h4 className="color-state-title">Success</h4>
        <div className="hierarchy-comparison color-pair">
          <ColorExample image="success-pink" alt="Validated email field with a pink border and checkmark, using a brand color for a success state." />
          <ColorExample image="success-green" good alt="Validated email field with a green border and checkmark, using a familiar success-state color." />
        </div>
        <p className="color-caption">Use familiar color conventions for system states, such as red for errors and green for success, to help users quickly understand messages. Avoid changing these meanings to match brand colors, as it can cause confusion. Instead, adjust the shades to complement your brand while maintaining clarity and consistency.</p>
      </section>
    </div>
  </dialog>
})

export default ColorModal
