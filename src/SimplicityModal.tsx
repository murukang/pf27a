import { forwardRef } from 'react'

const SimplicityModal = forwardRef<HTMLDialogElement>(function SimplicityModal(_, ref) {
  return <dialog ref={ref} id="simplicity-modal" className="hierarchy-dialog simplicity-dialog" aria-labelledby="simplicity-title" onClick={event => {
    if (event.target === event.currentTarget) {
      const bounds = event.currentTarget.getBoundingClientRect()
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close()
    }
  }}>
    <header className="hierarchy-header"><h2 id="simplicity-title">Simplicity</h2><button type="button" autoFocus aria-label="Close simplicity" onClick={event => event.currentTarget.closest('dialog')?.close()}>×</button></header>
    <div className="hierarchy-content">
      <section className="hierarchy-section simplicity-content" aria-label="Focusing on essential features and information">
        <p>Simplicity in UI design means removing unnecessary elements and focusing on essential features and information, making the interface clean, clear, and easy to use.</p>
        <div className="simplicity-importance"><h3>Why is simplicity important</h3><p>A simple design reduces cognitive effort, making it easier for users to understand and navigate the interface. Overcomplicated or cluttered designs can overwhelm users, leading to confusion and reduced user engagement.</p></div>
        <div className="hierarchy-comparison simplicity-comparison">
          <figure className="hierarchy-example is-weak">
            <span className="hierarchy-verdict" role="img" aria-label="Cluttered design">👎</span>
            <img src={`${import.meta.env.BASE_URL}images/simplicity/cart-cluttered.webp`} alt="Cluttered shopping cart with large suit images and repeated material, view count, sales count and return-policy details competing with the price and checkout action." />
          </figure>
          <figure className="hierarchy-example is-good">
            <span className="hierarchy-verdict" role="img" aria-label="Simple design">👍</span>
            <img src={`${import.meta.env.BASE_URL}images/simplicity/cart-simple.webp`} alt="Simplified shopping cart with balanced suit images, clear product names, color and size, prices and quantity controls, followed by the total and a prominent Proceed to checkout button." />
          </figure>
        </div>
        <div className="simplicity-explanation">
          <p>The first design is cluttered with large product images and unnecessary details, such as view counts and return information. This distracts users from the main goal of checkout, making the cart screen confusing and difficult to scan quickly.</p>
          <p>The second design uses balanced product images, proper spacing, and clear typography to create a clean, easy-to-understand interface. This helps users focus on important information, reduces cognitive load, and improves the overall user experience.</p>
          <p>When you look at both designs, you can see how simplicity can either help or hurt the user experience. The first design overwhelms and confuses, while the second design, thanks to its simplicity, makes it easy for the user to understand the information before completing the purchase.</p>
        </div>
        <div className="simplicity-takeaway"><h3>What is important for the user</h3><p>Keep only the most important elements and information. Every additional button, image, or line of text clutters the UI. Don’t show users information that isn’t relevant to the task they’re trying to accomplish. This cuts down on cognitive load and keeps the focus where it should be.</p></div>
      </section>
    </div>
  </dialog>
})

export default SimplicityModal
