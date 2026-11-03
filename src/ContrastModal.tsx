import { forwardRef } from 'react'

function ContrastExample({ image, good = false, alt }: { image: string, good?: boolean, alt: string }) {
  return <figure className={`hierarchy-example ${good ? 'is-good' : 'is-weak'}`}>
    <span className="hierarchy-verdict" role="img" aria-label={good ? 'Clear contrast' : 'Low contrast'}>{good ? '👍' : '👎'}</span>
    <img src={`${import.meta.env.BASE_URL}images/contrast/${image}.webp`} alt={alt} />
  </figure>
}

const ContrastModal = forwardRef<HTMLDialogElement>(function ContrastModal(_, ref) {
  return <dialog ref={ref} id="contrast-modal" className="hierarchy-dialog contrast-dialog" aria-labelledby="contrast-title" onClick={event => {
    if (event.target === event.currentTarget) {
      const bounds = event.currentTarget.getBoundingClientRect()
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close()
    }
  }}>
    <header className="hierarchy-header"><h2 id="contrast-title">Contrast</h2><button type="button" autoFocus aria-label="Close contrast" onClick={event => event.currentTarget.closest('dialog')?.close()}>×</button></header>
    <div className="hierarchy-content">
      <section className="hierarchy-section contrast-status" aria-label="Why contrast is important">
        <p className="contrast-introduction">Contrast is a key part of UI design. It helps make different things on the screen stand out from each other, making it easier to see what’s important.</p>
        <div className="contrast-reasons"><h3>Why is contrast important</h3><ol>
          <li>Readability: The primary goal is to make text and images easy to read and understand.</li>
          <li>Guidance: Contrast helps direct user focus and encourages them to interact with specific elements.</li>
          <li>Accessibility: Proper use of contrast ensures that content is easily visible to users with visual impairments, complying with accessibility standards like WCAG.</li>
        </ol></div>
        <div className="contrast-status-comparison">
          <ContrastExample image="status-low" alt="Three ticket status badges with white text on bright backgrounds. The reference reports low contrast ratios of 2.84:1, 1.81:1 and 1.92:1." />
          <ContrastExample image="status-clear" good alt="Improved ticket status badges with dark red, orange and green text on pale backgrounds. The reference reports contrast ratios of 4.8:1, 4.94:1 and 6.54:1." />
        </div>
      </section>
      <section className="hierarchy-section contrast-images" aria-label="Readable text over background images">
        <p>When placing text over background images, make sure it stays readable on both light and dark images. Use a subtle overlay or background blur to improve text visibility and maintain readability across different images.</p>
        <div className="hierarchy-comparison contrast-pandas">
          <ContrastExample image="panda-low" alt="Panda photography card with white title and byline directly over a busy image, making the text difficult to read." />
          <ContrastExample image="panda-overlay" good alt="Panda photography card with a dark gradient overlay behind the white title and byline to improve readability." />
          <ContrastExample image="panda-blur" good alt="Panda photography card with a dark blurred background panel behind the white title and byline, separating the text from image details." />
        </div>
        <div className="contrast-guidance"><h3>How to apply contrast in your UI designs</h3><dl>
          <div><dt>Color:</dt><dd>Use complementary or analogous colors to differentiate elements. Keep accessibility guidelines in mind to ensure good contrast.</dd></div>
          <div><dt>Font weight &amp; style:</dt><dd>Utilize varying font weights and styles to create contrast within your textual elements.</dd></div>
          <div><dt>Size:</dt><dd>Use size contrast to differentiate between elements on your screen. This helps set up a clear visual hierarchy.</dd></div>
          <div><dt>Borders &amp; outlines:</dt><dd>If your elements are too similar in color, a well-placed border or outline can add the necessary contrast.</dd></div>
          <div><dt>Shadows:</dt><dd>Shadow can make an element pop from its background, enhancing its visibility and creating a sense of dimension in your design.</dd></div>
        </dl></div>
      </section>
    </div>
  </dialog>
})

export default ContrastModal
