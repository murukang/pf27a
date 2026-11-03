import { forwardRef } from 'react'

const BalanceHarmonyModal = forwardRef<HTMLDialogElement>(function BalanceHarmonyModal(_, ref) {
  return <dialog ref={ref} id="balance-harmony-modal" className="hierarchy-dialog balance-dialog" aria-labelledby="balance-harmony-title" onClick={event => {
    if (event.target === event.currentTarget) {
      const bounds = event.currentTarget.getBoundingClientRect()
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close()
    }
  }}>
    <header className="hierarchy-header"><h2 id="balance-harmony-title">Balance and harmony</h2><button type="button" autoFocus aria-label="Close balance and harmony" onClick={event => event.currentTarget.closest('dialog')?.close()}>×</button></header>
    <div className="hierarchy-content balance-content">
      <section className="hierarchy-section" aria-label="Creating balance and harmony in UI design">
        <p>Balance and harmony in UI design ensure that colors, typography, layout, and other elements work together to create a consistent, visually appealing, and user-friendly experience.</p>
        <div className="balance-importance"><h3>Why it’s important:</h3><p>Having balance and harmony helps everything on your page fit together well. This makes the design not only look good but also easier to use. It helps people quickly understand what’s on the screen and how to use it.</p></div>
        <div className="balance-guidance"><h3>How to apply balance and harmony</h3><p>Achieving balance and harmony requires a keen eye for detail and a solid understanding of design fundamentals. To make it easier, consider the following:</p>
          <ol>
            <li><h4>Proportion and scale:</h4><p>Make sure that no single element overpowers the others. Everything should have its own space and prominence, but not to the extent where it becomes a distraction.</p></li>
            <li><h4>Color harmony:</h4><p>Overusing a single color can make a design feel monotonous or overwhelming. Use complementary or analogous colors to bring variation and emotional balance to your design.</p></li>
            <li><h4>Element relationships:</h4><p>Maintain consistent spacing, typography, and element sizes to create a harmonious relationship between all the components in your UI.</p></li>
          </ol>
        </div>
        <div className="hierarchy-comparison balance-comparison">
          <figure className="hierarchy-example is-weak"><span className="hierarchy-verdict" role="img" aria-label="Unbalanced design">👎</span><img src="/images/balance-harmony/ice-cream-unbalanced.webp" alt="Kiwi ice cream card with an oversized product image on a bright green circle, a small description and review row, and an oversized green Get now button that dominates the card." /></figure>
          <figure className="hierarchy-example is-good"><span className="hierarchy-verdict" role="img" aria-label="Balanced design">👍</span><img src="/images/balance-harmony/ice-cream-balanced.webp" alt="Balanced kiwi ice cream card with a smaller image on a soft peach circle, a clear heading, readable description, proportionate review row and a compact green Get now button." /></figure>
        </div>
        <div className="balance-explanation"><p><strong>First Design:</strong> Oversized images and buttons dominate the screen, distracting users from important information. Excessive use of green creates a monotonous and visually overwhelming interface.</p><p><strong>Second Design:</strong> Balanced image sizes, clear headings, well-proportioned buttons, and thoughtful color usage create a cleaner, more harmonious interface. This improves visual hierarchy, readability, and user focus.</p></div>
      </section>
    </div>
  </dialog>
})

export default BalanceHarmonyModal
