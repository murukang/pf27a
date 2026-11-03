import { forwardRef } from 'react'

const ProximityModal = forwardRef<HTMLDialogElement>(function ProximityModal(_, ref) {
  return <dialog ref={ref} id="proximity-modal" className="hierarchy-dialog proximity-dialog" aria-labelledby="proximity-title" onClick={event => {
    if (event.target === event.currentTarget) {
      const bounds = event.currentTarget.getBoundingClientRect()
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close()
    }
  }}>
    <header className="hierarchy-header"><h2 id="proximity-title">Proximity</h2><button type="button" autoFocus aria-label="Close proximity" onClick={event => event.currentTarget.closest('dialog')?.close()}>×</button></header>
    <div className="hierarchy-content">
      <section className="hierarchy-section proximity-content" aria-label="Grouping related elements">
        <p>Proximity means placing related elements close together and keeping unrelated elements apart to make the design easier to understand. It is a crucial UI design principle, rooted in Gestalt psychology’s “Law of Proximity.”</p>
        <p>In a contact form, if the “Surname” label is equally spaced between the “First Name” field and the “Surname” field, users may get confused about which field it belongs to. This makes the form harder to understand and use.</p>
        <div className="hierarchy-comparison proximity-comparison">
          <figure className="hierarchy-example is-weak">
            <span className="hierarchy-verdict" role="img" aria-label="Unclear proximity">👎</span>
            <img src={`${import.meta.env.BASE_URL}images/proximity/form-unclear.webp`} alt="Contact details form with the Surname label spaced equally, 28 pixels from the field above and 28 pixels from its own field, making the relationship unclear." />
          </figure>
          <figure className="hierarchy-example is-good">
            <span className="hierarchy-verdict" role="img" aria-label="Clear proximity">👍</span>
            <img src={`${import.meta.env.BASE_URL}images/proximity/form-clear.webp`} alt="Improved contact details form with the Surname label 12 pixels from its own field and 32 pixels from the field above, clearly grouping the label with its input." />
          </figure>
        </div>
        <p>In the improved form, the “Surname” label is placed 12px from its field and 32px from the “First Name” field above. This makes it clear which label belongs to which field. By grouping related elements closer together, the form becomes easier to understand and use.</p>
        <p>By correctly using proximity, you significantly reduce cognitive load, leading to a more efficient and enjoyable user experience.</p>
      </section>
    </div>
  </dialog>
})

export default ProximityModal
