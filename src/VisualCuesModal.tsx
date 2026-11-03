import { forwardRef } from 'react'

function VisualCueExample({ image, good = false, alt }: { image: string, good?: boolean, alt: string }) {
  return <figure className={`hierarchy-example ${good ? 'is-good' : 'is-weak'}`}>
    <span className="hierarchy-verdict" role="img" aria-label={good ? 'Clear visual cues' : 'Missing visual cues'}>{good ? '👍' : '👎'}</span>
    <img src={`${import.meta.env.BASE_URL}images/visual-cues/${image}.webp`} alt={alt} />
  </figure>
}

const VisualCuesModal = forwardRef<HTMLDialogElement>(function VisualCuesModal(_, ref) {
  return <dialog ref={ref} id="visual-cues-modal" className="hierarchy-dialog visual-cues-dialog" aria-labelledby="visual-cues-title" onClick={event => {
    if (event.target === event.currentTarget) {
      const bounds = event.currentTarget.getBoundingClientRect()
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close()
    }
  }}>
    <header className="hierarchy-header"><h2 id="visual-cues-title">Visual cues</h2><button type="button" autoFocus aria-label="Close visual cues" onClick={event => event.currentTarget.closest('dialog')?.close()}>×</button></header>
    <div className="hierarchy-content visual-cues-content">
      <section className="hierarchy-section" aria-label="Using visual cues to communicate information">
        <p>Visuals make interfaces more engaging, memorable, and easier to understand. They help communicate information quickly, guide users, and improve the overall user experience.</p>
        <div className="visual-cues-delivery">
          <VisualCueExample image="delivery-text" alt="Three text-only delivery cards: Step 1 Place Your Order, Step 2 On the Way, and Step 3 Get It Delivered, each with a supporting description." />
          <VisualCueExample image="delivery-illustrated" good alt="The same delivery steps enhanced with ordering, bicycle delivery and doorstep handover illustrations, plus three-segment progress indicators highlighting each step." />
        </div>
        <div className="hierarchy-comparison visual-cues-inboxes">
          <VisualCueExample image="inbox-text" alt="Text-only inbox listing messages from Sarah Johnson, Starbucks, John Doe and Lyft, without sender avatars or logos." />
          <VisualCueExample image="inbox-initials" good alt="Inbox with colored circular initial avatars beside each sender, adding recognizable visual markers to the message list." />
          <VisualCueExample image="inbox-avatars" good alt="Inbox with profile photos for Sarah Johnson and John Doe and recognizable Starbucks and Lyft logos beside their messages." />
        </div>
        <p className="visual-cues-caption">Using a consistent icon set, whether custom-designed or open-source, helps maintain visual harmony. Choose icons that match your brand style and avoid mixing different sets with inconsistent sizes, shapes, or visual details.</p>
      </section>
    </div>
  </dialog>
})

export default VisualCuesModal
