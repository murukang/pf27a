import { forwardRef } from 'react'

function AlignmentExample({ image, good = false, alt }: { image: string, good?: boolean, alt: string }) {
  return <figure className={`hierarchy-example ${good ? 'is-good' : 'is-weak'}`}>
    <span className="hierarchy-verdict" role="img" aria-label={good ? 'Consistent alignment' : 'Inconsistent alignment'}>{good ? '👍' : '👎'}</span>
    <img src={`/images/alignment/${image}.webp`} alt={alt} />
  </figure>
}

const AlignmentModal = forwardRef<HTMLDialogElement>(function AlignmentModal(_, ref) {
  return <dialog ref={ref} id="alignment-modal" className="hierarchy-dialog alignment-dialog" aria-labelledby="alignment-title" onClick={event => {
    if (event.target === event.currentTarget) {
      const bounds = event.currentTarget.getBoundingClientRect()
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close()
    }
  }}>
    <header className="hierarchy-header"><h2 id="alignment-title">Alignment</h2><button type="button" autoFocus aria-label="Close alignment" onClick={event => event.currentTarget.closest('dialog')?.close()}>×</button></header>
    <div className="hierarchy-content">
      <section className="hierarchy-section alignment-content" aria-label="Consistent alignment across interface elements">
        <p>Alignment in UI design refers to the arrangement of elements in a way that creates visual order and harmony. It’s about lining up text, images, and other components along certain lines or axes to give your interface a polished, organized look. If your alignment is off, your design can look messy and hard to use.</p>
        <p className="hierarchy-intro-note">Sometimes a bad alignment can occur by misjudgment - aligning things incorrectly.</p>
        <div className="hierarchy-comparison alignment-comparison alignment-cactus">
          <AlignmentExample image="cactus-unclear" alt="Cactus card with the heading and icon on the left, but the body text and Learn more button indented to a different edge." />
          <AlignmentExample image="cactus-clear" good alt="Cactus card with the icon and heading together, and the paragraph and Learn more button aligned to one consistent left edge." />
        </div>
        <div className="hierarchy-comparison alignment-comparison">
          <AlignmentExample image="resources-unclear" alt="Resources menu with All, Illustrations, UI resources and Icons using inconsistent icon positions, label indents and row edges, shown against dashed guides." />
          <AlignmentExample image="resources-clear" good alt="Resources menu with consistent row boundaries, aligned icons and a shared left edge for all labels, shown against dashed guides." />
        </div>
        <div className="hierarchy-comparison alignment-comparison">
          <AlignmentExample image="product-unclear" alt="Dark Mode Mobile App Design Starter Kit card with centered rating and creator details, a left-aligned title and uneven content alignment." />
          <AlignmentExample image="product-clear" good alt="Product card with its rating, title, creator and FREE price aligned along the same left guide, and the Add to basket button aligned at the right." />
        </div>
        <p className="hierarchy-caption">Choose an alignment strategy and stick with it across similar elements to create a cohesive feel.</p>
      </section>
    </div>
  </dialog>
})

export default AlignmentModal
