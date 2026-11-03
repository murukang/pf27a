import { forwardRef } from 'react'

function ConsistencyExample({ image, good = false, alt }: { image: string, good?: boolean, alt: string }) {
  return <figure className={`hierarchy-example ${good ? 'is-good' : 'is-weak'}`}>
    <span className="hierarchy-verdict" role="img" aria-label={good ? 'Consistent design' : 'Inconsistent design'}>{good ? '👍' : '👎'}</span>
    <img src={`${import.meta.env.BASE_URL}images/consistency/${image}.webp`} alt={alt} />
  </figure>
}

const ConsistencyModal = forwardRef<HTMLDialogElement>(function ConsistencyModal(_, ref) {
  return <dialog ref={ref} id="consistency-modal" className="hierarchy-dialog consistency-dialog" aria-labelledby="consistency-title" onClick={event => {
    if (event.target === event.currentTarget) {
      const bounds = event.currentTarget.getBoundingClientRect()
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close()
    }
  }}>
    <header className="hierarchy-header"><h2 id="consistency-title">Consistency</h2><button type="button" autoFocus aria-label="Close consistency" onClick={event => event.currentTarget.closest('dialog')?.close()}>×</button></header>
    <div className="hierarchy-content consistency-content">
      <div className="consistency-introduction"><p>Consistency in UI design means maintaining a similar look and behavior across screens, making the interface predictable and easy to use. While visual elements like images and backgrounds can vary, essential components such as buttons, headings, and input fields should remain consistent to improve usability and user experience.</p>
        <div className="consistency-reasons"><h3>Why is consistency important?</h3><ol>
          <li><h4>Ease of use:</h4><p>Consistent design elements make it easier for users to navigate your interface.</p></li>
          <li><h4>Builds trust:</h4><p>Consistency in design helps in building user trust, as it makes the interface appear more professional and reliable.</p></li>
          <li><h4>Reduces cognitive load:</h4><p>Consistency reduces the mental effort required to interact with the interface.</p></li>
          <li><h4>Cohesive Aesthetic:</h4><p>Maintaining a consistent look and feel across all elements not only makes your design visually appealing but also creates a unified experience that resonates with users.</p></li>
        </ol></div>
      </div>
      <section className="hierarchy-section" aria-labelledby="consistency-shapes">
        <h3 id="consistency-shapes">Maintain shape and corner radius consistency</h3><p>Lack of uniformity can confuse users, make your design look off-brand, and fails to create a cohesive look.</p>
        <div className="consistency-stack">
          <ConsistencyExample image="shapes-mixed" alt="Lion, Hippo and Elephant experience cards with mixed square and rounded card corners, image shapes, review avatars and Book now buttons." />
          <ConsistencyExample image="shapes-unified" good alt="The same experience cards using consistent rounded corners, circular illustrations and avatars, and rounded Book now buttons." />
        </div>
        <p className="consistency-caption">In contrast, the second design maintains a consistent, rounded appearance for all elements. This unified approach makes the UI easier to navigate and more pleasing to the eye, enhancing the overall user experience.</p>
      </section>
      <section className="hierarchy-section" aria-labelledby="consistency-buttons">
        <h3 id="consistency-buttons">Maintain button consistency</h3><p>Lack of uniformity can confuse users, make your design look off-brand, and fails to create a cohesive look.</p>
        <div className="consistency-stack">
          <ConsistencyExample image="buttons-mixed" alt="Experience cards using different orange, brown and purple colors for their Learn more and Book now buttons." />
          <ConsistencyExample image="buttons-unified" good alt="Experience cards using the same dark primary Book now button and light grey secondary Learn more button throughout." />
        </div>
        <div className="consistency-caption"><p><strong>First Design:</strong> Different button colors across cards create inconsistency, confuse users about their functions, and distract from the main content.</p><p><strong>Second Design:</strong> Consistent button colors—black for primary actions and light grey for secondary actions—create a clean, organized interface. This improves clarity, strengthens visual consistency, and helps users easily recognize actions.</p></div>
      </section>
      <section className="hierarchy-section" aria-labelledby="consistency-images">
        <h3 id="consistency-images">Maintain image consistency</h3><p>To maintain visual consistency with images of different shapes and sizes, place them inside a uniform shape, such as a circle. Adjust their size and position to create a balanced, clean, and harmonious interface.</p>
        <div className="consistency-stack">
          <ConsistencyExample image="images-mixed" alt="Sweet Indulgence, Adventure and Wellness gift-box cards with illustrations of different shapes and sizes." />
          <ConsistencyExample image="images-unified" good alt="Gift-box illustrations placed inside equally sized pastel circles to create a consistent visual frame." />
        </div>
        <div className="consistency-caption"><p><strong>First Design:</strong> Images with different shapes and sizes create an inconsistent, disconnected appearance, reducing visual harmony.</p><p><strong>Second Design:</strong> Placing images inside uniformly sized circles creates a cleaner, more balanced, and visually consistent interface, improving the overall user experience.</p></div>
      </section>
      <section className="hierarchy-section" aria-labelledby="consistency-cards">
        <h3 id="consistency-cards">Maintain card length consistency</h3><p>When designing layouts with three or more cards, maintain equal card heights for a clean, balanced, and consistent appearance. Keep headings and descriptions similar in length to ensure proper alignment and improve readability.</p>
        <div className="consistency-stack">
          <ConsistencyExample image="cards-uneven" alt="Forest Bungalows, Trailer Homes and Mountain Lodges cards with different description lengths, unequal heights and misaligned Explore offers buttons." />
          <ConsistencyExample image="cards-concise" good alt="Three equal-height accommodation cards with concise headings and descriptions and aligned Explore offers buttons." />
          <ConsistencyExample image="cards-aligned" good alt="Equal-height accommodation cards with varied content lengths and extra whitespace keeping all Explore offers buttons aligned at the bottom." />
        </div>
        <p className="consistency-caption">When card content varies in length, keep all cards the same height and align CTA buttons at the bottom. Allow extra space between the content and buttons to maintain a clean, balanced, and consistent layout.</p>
      </section>
      <section className="hierarchy-section" aria-labelledby="consistency-icons">
        <h3 id="consistency-icons">Maintain icon consistency</h3><p>Maintain consistent icon sizes, styles, and visual details across your UI to create a clean and unified design. Avoid mixing outlined, filled, or overly detailed icons without a clear purpose. However, different styles can be used to indicate states, such as filled icons for active tabs and outlined icons for inactive tabs, helping users navigate more easily.</p>
        <div className="hierarchy-comparison consistency-icon-pair">
          <ConsistencyExample image="icons-mixed" alt="Account features list mixing detailed, outlined and filled purple icons for account, search, heart, sharing and notifications." />
          <ConsistencyExample image="icons-unified" good alt="Account features list using a consistent set of purple outline icons with matching stroke weight and size." />
        </div>
        <div className="consistency-icon-states"><ConsistencyExample image="icons-states" good alt="Navigation bar showing a filled home icon for the selected tab and outlined icons for inactive tabs, demonstrating purposeful state differences." /></div>
        <p className="consistency-caption">Using a consistent icon set, whether custom-designed or open-source, helps maintain visual harmony. Choose icons that match your brand style and avoid mixing different sets with inconsistent sizes, shapes, or visual details.</p>
      </section>
    </div>
  </dialog>
})

export default ConsistencyModal
