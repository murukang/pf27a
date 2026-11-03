import { forwardRef } from 'react'

function Example({ image, good = false, alt }: { image: string, good?: boolean, alt: string }) {
  return <figure className={`hierarchy-example ${good ? 'is-good' : 'is-weak'}`}>
    <span className="hierarchy-verdict" role="img" aria-label={good ? 'Clear hierarchy' : 'Unclear hierarchy'}>{good ? '👍' : '👎'}</span>
    <img src={`${import.meta.env.BASE_URL}images/visual-hierarchy/${image}.webp`} alt={alt} />
  </figure>
}

const VisualHierarchyModal = forwardRef<HTMLDialogElement>(function VisualHierarchyModal(_, ref) {
  return <dialog ref={ref} id="visual-hierarchy-modal" className="hierarchy-dialog" aria-labelledby="visual-hierarchy-title" onClick={event => {
    if (event.target === event.currentTarget) {
      const bounds = event.currentTarget.getBoundingClientRect()
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close()
    }
  }}>
    <header className="hierarchy-header"><h2 id="visual-hierarchy-title">Visual hierarchy</h2><button type="button" autoFocus aria-label="Close visual hierarchy" onClick={event => event.currentTarget.closest('dialog')?.close()}>×</button></header>
    <div className="hierarchy-content">
      <section className="hierarchy-section" aria-labelledby="hierarchy-information">
        <h3 id="hierarchy-information">Prioritizing information</h3>
        <p>Visual hierarchy is all about how you arrange elements on a screen to show their level of importance. The aim of visual hierarchy is to guide the user’s eye, attention and actions. To achieve this, designers utilize elements like size, color, weight, and position. If there is no visual hierarchy and everything looks the same—same size, same color—you’re basically shouting all the information at once, and nobody knows what to focus on.</p>
        <p className="hierarchy-intro-note">When all buttons have the same size and color, they appear equally important, making it difficult for users to identify the primary action.</p>
        <div className="hierarchy-comparison hierarchy-checkouts">
          <Example image="checkout-equal" alt="Unclear hierarchy: Remove, Continue shopping and Checkout all use the same dark purple styling." />
          <Example image="checkout-competing" alt="Competing emphasis: Remove, Continue shopping and Checkout each use a bright background color." />
          <Example image="checkout-clear" good alt="Clear hierarchy: green Checkout is primary, grey Continue shopping is secondary and Remove is a small text link." />
        </div>
        <p className="hierarchy-caption">“Checkout” is highlighted in green as the primary action, “Continue Shopping” uses grey for secondary importance, and “Remove” is least prominent, shown as underlined red text.</p>
        <div className="hierarchy-metrics">
          <Example image="metrics-labels" alt="Dashboard with large Earnings, Sales and Views labels, while the key values are small." />
          <Example image="metrics-values" good alt="Dashboard with prominent values: Earnings $4,981.00, Sales 591 and Views 2,121, with smaller supporting labels." />
        </div>
        <p className="hierarchy-caption">By making the key values stand out, you help users find what they’re looking for more easily.</p>
      </section>
      <section className="hierarchy-section" aria-labelledby="hierarchy-colour">
        <h3 id="hierarchy-colour">Colour to communicate priority</h3>
        <p>Color establishes visual hierarchy by using darker shades to draw attention to important elements, while lighter shades indicate lower priority.</p>
        <div className="hierarchy-comparison hierarchy-pair">
          <Example image="colour-weak" alt="Personal Injury Law card with a faint grey title and a dark paragraph that draws attention away from the heading." />
          <Example image="colour-clear" good alt="Personal Injury Law card with a dark title and a lighter grey supporting paragraph, establishing a clear reading order." />
        </div>
        <p className="hierarchy-caption">In the second example, the title is in dark black and the paragraph text is gray. The title rightfully commands attention, demonstrating effective hierarchy.</p>
      </section>
      <section className="hierarchy-section" aria-labelledby="hierarchy-size">
        <h3 id="hierarchy-size">Size and visual cues to differentiate priority</h3>
        <p>Presenting information without clear visual distinctions creates a monotonous interface, making it difficult for users to identify and prioritize important content.</p>
        <div className="hierarchy-comparison hierarchy-pair">
          <Example image="property-weak" alt="Villa listing with uniformly styled rows for type, price, location, size, bedrooms, bathrooms and contact details." />
          <Example image="property-clear" good alt="Villa listing with a prominent price, sale badge, clear title, location and amenity icons, and a separate agent contact area." />
        </div>
        <p className="hierarchy-caption">Formatting font weight, size, color, and icons helps guide users’ attention to the most important information.</p>
      </section>
    </div>
  </dialog>
})

export default VisualHierarchyModal
