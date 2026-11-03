import { forwardRef } from 'react'

function WhitespaceExample({ image, good = false, alt }: { image: string, good?: boolean, alt: string }) {
  return <figure className={`hierarchy-example ${good ? 'is-good' : 'is-weak'}`}>
    <span className="hierarchy-verdict" role="img" aria-label={good ? 'Balanced whitespace' : 'Unbalanced whitespace'}>{good ? '👍' : '👎'}</span>
    <img src={`/images/whitespace/${image}.webp`} alt={alt} />
  </figure>
}

const WhitespaceModal = forwardRef<HTMLDialogElement>(function WhitespaceModal(_, ref) {
  return <dialog ref={ref} id="whitespace-modal" className="hierarchy-dialog whitespace-dialog" aria-labelledby="whitespace-title" onClick={event => {
    if (event.target === event.currentTarget) {
      const bounds = event.currentTarget.getBoundingClientRect()
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close()
    }
  }}>
    <header className="hierarchy-header"><h2 id="whitespace-title">Whitespace</h2><button type="button" autoFocus aria-label="Close whitespace" onClick={event => event.currentTarget.closest('dialog')?.close()}>×</button></header>
    <div className="hierarchy-content">
      <section className="hierarchy-section whitespace-content" aria-label="Making room to breathe">
        <p>Whitespace is the empty space between design elements, regardless of its color or background. It improves readability, creates visual balance, and helps users focus on important content.</p>
        <p>Without enough whitespace, an interface can feel cluttered, confusing, and overwhelming.</p>
        <div className="hierarchy-comparison whitespace-navigation">
          <WhitespaceExample image="navigation-cramped" alt="Cramped Tasking sidebar with tight padding around the logo and Dashboard, Analytics, Support and Shop navigation groups." />
          <WhitespaceExample image="navigation-spacious" good alt="Tasking sidebar with generous logo padding, a spacious Dashboard selection and clear separation between Analytics and Support navigation groups." />
        </div>
        <p className="whitespace-caption">Start with more whitespace than you think you need, then gradually reduce it to find the right balance. This helps create a clean, readable design and prevents clutter that can make the interface difficult to navigate.</p>
      </section>
      <section className="hierarchy-section whitespace-spacing" aria-labelledby="whitespace-spacing-title">
        <h3 id="whitespace-spacing-title">Establish a spacing and sizing system</h3>
        <p>Use a consistent spacing system to maintain balanced whitespace throughout your design. Choose a base unit, such as 4px, and apply multiples like 4px, 8px, 16px, 24px, and 32px. This creates a clean, organized, and visually consistent interface.</p>
        <div className="hierarchy-comparison whitespace-forms">
          <WhitespaceExample image="spacing-inconsistent" alt="Contact form with inconsistent spacing annotations: 7 pixels after the heading, repeated 19-pixel gaps between sections, 8 pixels from a label to its field and 21 pixels before the privacy checkbox." />
          <WhitespaceExample image="spacing-consistent" good alt="Improved contact form using a consistent spacing scale: 16 pixels after the heading, 40 pixels between major groups, 8 pixels between labels and inputs, and 24 pixels between related fields." />
        </div>
        <p className="whitespace-caption">A consistent spacing system creates a balanced design, makes adjustments easier, and supports the Law of Proximity. Using fixed spacing rules, such as 8px between related elements, helps users recognize relationships, reduces cognitive load, and makes the interface easier to navigate.</p>
      </section>
    </div>
  </dialog>
})

export default WhitespaceModal
