import { forwardRef } from 'react'

function LayoutExample({ image, good = false, alt }: { image: string, good?: boolean, alt: string }) {
  return <figure className={`hierarchy-example ${good ? 'is-good' : 'is-weak'}`}>
    <span className="hierarchy-verdict" role="img" aria-label={good ? 'Clear layout' : 'Unclear layout'}>{good ? '👍' : '👎'}</span>
    <img src={`/images/layout/${image}.webp`} alt={alt} />
  </figure>
}

const LayoutModal = forwardRef<HTMLDialogElement>(function LayoutModal(_, ref) {
  return <dialog ref={ref} id="layout-modal" className="hierarchy-dialog layout-dialog" aria-labelledby="layout-title" onClick={event => {
    if (event.target === event.currentTarget) {
      const bounds = event.currentTarget.getBoundingClientRect()
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close()
    }
  }}>
    <header className="hierarchy-header"><h2 id="layout-title">Layout</h2><button type="button" autoFocus aria-label="Close layout" onClick={event => event.currentTarget.closest('dialog')?.close()}>×</button></header>
    <div className="hierarchy-content layout-content">
      <section className="hierarchy-section" aria-label="Good layout and user priorities">
        <p>Whitespace is the empty space between design elements, regardless of its color or background. It improves readability, creates visual balance, and helps users focus on important content. Without enough whitespace, an interface can feel cluttered, confusing, and overwhelming.</p>
        <div className="layout-reasons"><h3>Good layout matters for two main reasons</h3><ol><li>Aesthetics: A visually pleasing layout catches the user’s eye, setting the stage for a positive user experience.</li><li>Usability: An intuitive layout guides the user logically through tasks, helping them find what they need easily.</li></ol></div>
        <div className="hierarchy-comparison layout-pizza-intro">
          <LayoutExample image="pizza-horizontal" alt="Horizontal pizza card with a small food image, price and Order now button separated by dividers, and the description below." />
          <LayoutExample image="pizza-focused" good alt="Vertical pizza card with a large food image, followed by the title, description, price and a wide Order now button." />
        </div>
        <p className="layout-caption">Understanding user priorities is essential in UI design. The second layout uses large, appealing food images to create a premium feel and increase perceived value. Its clean, simple design also helps users quickly browse and compare pizza options without unnecessary distractions.</p>
      </section>
      <section className="hierarchy-section" aria-label="Arranging information in a logical order">
        <p>Now let’s look at another example. Here, we’ve got a large image, and all the elements are the same size and color. But the way these elements are arranged makes a noticeable difference.</p>
        <div className="hierarchy-comparison layout-pair">
          <LayoutExample image="pizza-disordered" alt="Pizza card beginning with the price, then the image and title, followed by the Order now button and finally the description." />
          <LayoutExample image="pizza-ordered" good alt="Pizza card with a logical reading order: image, title, brief description, price and finally the Order now button." />
        </div>
        <p className="layout-caption">The first layout starts off with the price at the top, followed by the picture, the name of the pizza, the “Order Now” button, and finally, more details about the pizza.</p>
        <p className="layout-caption">The second layout takes a different approach: it starts with the picture at the top, followed by the name, a brief description of the pizza, the price, and then the “Order Now” button.</p>
      </section>
      <section className="hierarchy-section" aria-label="Comparing options with selectable cards">
        <p>Traditional vertical text lists may be clear and easy to use, but they often lack visual appeal and differentiation, making the user experience less engaging and memorable.</p>
        <div className="hierarchy-comparison layout-plans">
          <LayoutExample image="plans-list" alt="Basic, Economy and Pro subscription options presented as a plain vertical radio-button list of credits and monthly prices." />
          <LayoutExample image="plans-cards" good alt="Basic, Economy and Pro presented as separate cards with clear credit counts and monthly prices; the selected Economy card has a green outline." />
        </div>
        <p className="layout-caption">Replacing traditional lists with selectable cards creates a more engaging and visually appealing interface. Cards can use labels, colors, icons, and images to provide better context, making options easier to understand, compare, and select.</p>
      </section>
      <section className="hierarchy-section" aria-labelledby="layout-forms-title">
        <h3 id="layout-forms-title">Form layout <span>inspired by the final output</span></h3>
        <p>Forms are essential for collecting user information but are often overlooked in UI design. By designing forms around how the information will be used or displayed, we can make them more intuitive, engaging, and easier to complete.</p>
        <figure className="layout-final-display"><img src="/images/layout/listing-display.webp" alt="Final display of a Toyota RAV4 Hybrid listing, with annotations identifying the image, product and price, description, location, and tags or categories." /></figure>
        <p>Suppose you’re designing a form for a marketplace platform where users list items they want to sell. Instead of a standard, linear form, you could design the form layout to mirror the final listing page.</p>
        <div className="hierarchy-comparison layout-pair">
          <LayoutExample image="form-linear" alt="Standard Create new listing form with vertically stacked Item, Price, Description, Categories, Location and Images fields." />
          <LayoutExample image="form-contextual" good alt="Listing form mirroring the final card: image upload at the top, item and price side by side, then description, location and tags." />
        </div>
        <p className="layout-caption">If a user is listing a car, for instance, they could input the car’s name, price, description and location in fields arranged similarly to how the information will appear in the final listing. This approach gives users a sense of how their listing will look and function, making the form-filling process more relatable and engaging.</p>
      </section>
    </div>
  </dialog>
})

export default LayoutModal
