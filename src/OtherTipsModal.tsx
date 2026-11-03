import { forwardRef } from 'react'

type Example = { image: string, alt: string, good?: boolean }
function TipExample({ image, alt, good }: Example) {
  return <figure className={`hierarchy-example ${good ? 'is-good' : 'is-weak'}`}>
    {good !== undefined && <span className="hierarchy-verdict" role="img" aria-label={good ? 'Improved user experience' : 'Less effective user experience'}>{good ? '👍' : '👎'}</span>}
    <img src={`${import.meta.env.BASE_URL}images/other-tips/${image}.webp`} alt={alt} />
  </figure>
}
function TipComparison({ examples, triple = false }: { examples: Example[], triple?: boolean }) {
  return <div className={`hierarchy-comparison other-tips-pair${triple ? ' other-tips-triple' : ''}`}>{examples.map(example => <TipExample key={example.image} {...example} />)}</div>
}

const OtherTipsModal = forwardRef<HTMLDialogElement>(function OtherTipsModal(_, ref) {
  return <dialog ref={ref} id="other-tips-modal" className="hierarchy-dialog other-tips-dialog" aria-labelledby="other-tips-title" onClick={event => {
    if (event.target === event.currentTarget) {
      const bounds = event.currentTarget.getBoundingClientRect()
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close()
    }
  }}>
    <header className="hierarchy-header"><h2 id="other-tips-title">Other tips to improve UX</h2><button type="button" autoFocus aria-label="Close other tips" onClick={event => event.currentTarget.closest('dialog')?.close()}>×</button></header>
    <div className="hierarchy-content other-tips-content">
      <p className="other-tips-introduction">Tips for Creating Visually Stunning and User-Friendly Interfaces</p>
      <section className="hierarchy-section" aria-labelledby="tips-cost"><h3 id="tips-cost">Minimize Interaction Cost</h3>
        <p>Reduce unnecessary clicks, scrolling, and navigation to help users complete tasks quickly and effortlessly. Make important options visible and easily accessible.</p>
        <p><strong>Real-life example:</strong> On an e-commerce product page, selecting a chair’s color and quantity through dropdown menus requires multiple clicks and scrolling. Replacing dropdowns with visible color swatches and simple quantity controls reduces interaction effort, improves usability, and speeds up purchasing.</p>
        <TipComparison examples={[
          { image:'chair-dropdowns', good:false, alt:'Ergobliss chair product page with color and quantity hidden inside dropdown selectors.' },
          { image:'chair-visible', good:true, alt:'Chair product page exposing three color swatches and simple minus and plus quantity controls.' },
        ]} />
        <div className="other-tips-single"><TipExample image="chair-purchase" good alt="Chair product page with visible color swatches, quantity controls, and distinct Add to cart and Buy now buttons." /></div>
      </section>
      <section className="hierarchy-section" aria-labelledby="tips-content"><h3 id="tips-content">Reduce User Barriers by Exposing Content Directly</h3>
        <p>Display valuable content upfront instead of hiding it behind banners, menus, or extra clicks. This reduces interaction costs and helps users achieve their goals faster.</p>
        <p><strong>Real-life example:</strong> Instead of showing a banner saying “Discover 100+ Recipes,” a recipe app can directly display “Top 10 Recommended Recipes,” allowing users to explore content immediately.</p>
        <p><strong>Key Benefits:</strong></p><ul><li><strong>Instant Value:</strong> Users quickly discover what the app offers.</li><li><strong>Reduced Friction:</strong> Fewer interactions create a smoother experience.</li><li><strong>Better Engagement:</strong> Relevant content encourages exploration and retention.</li></ul>
        <TipComparison examples={[
          { image:'recipes-hidden', good:false, alt:'Recipe discovery page displaying promotional banners and Explore now buttons instead of individual recipes.' },
          { image:'recipes-visible', good:true, alt:'Discover page showing recommended recipes and foods immediately, with images, names and preparation times.' },
        ]} />
      </section>
      <section className="hierarchy-section" aria-labelledby="tips-inputs"><h3 id="tips-inputs">Design Input Fields for the Type of Data</h3>
        <p>Design input fields that match the type of information users need to enter. Using appropriate field formats simplifies interactions, reduces cognitive load, and improves usability.</p>
        <p><strong>Real-life example:</strong> For OTP verification, use dedicated numeric input fields with automatic focus movement and numeric keyboards instead of a generic text field, making code entry faster and easier.</p>
        <TipComparison examples={[
          { image:'otp-generic', good:false, alt:'Email verification form with a code entered into one generic text field.' },
          { image:'otp-specific', good:true, alt:'Email verification form displaying large separate boxes for each of the four code digits.' },
        ]} />
        <p>Using four clearly defined input boxes with large typography makes OTP entry easier, improves readability, and helps reduce errors. Compared to a single generic text field, this approach provides clearer visual guidance and simplifies verification.</p>
        <p className="other-tips-note">Similarly, payment forms should use input fields tailored to card details, making data entry faster, clearer, and less error-prone.</p>
        <TipComparison examples={[
          { image:'payment-long', good:false, alt:'Payment form using full-width fields for all details, including short expiry dates, CVC and ZIP codes.' },
          { image:'payment-tailored', good:true, alt:'Compact payment form grouping expiry with CVC and country with ZIP code, using field lengths suited to each value.' },
        ]} />
        <p>Design input fields to match the expected data length and format. Use shorter fields for CVC (3–4 digits), expiry dates, and ZIP codes instead of unnecessarily long text fields.</p>
        <p>This reduces ambiguity, prevents errors, saves space, and improves usability.</p>
        <p><strong>Key Principle:</strong> Input fields should not just collect information but also guide users toward faster, easier, and more accurate data entry.</p>
      </section>
      <section className="hierarchy-section" aria-labelledby="tips-actions"><h3 id="tips-actions">Position Action Buttons Correctly</h3>
        <p>Place action buttons in a logical, predictable order to guide users and prevent accidental actions.</p>
        <p>In left-to-right interfaces, “Cancel” is commonly placed on the left to indicate going back, while “Delete” appears on the right to indicate proceeding with the action.</p>
        <p><strong>Real-life example:</strong> In a delete confirmation dialog, placing “Cancel” on the left and a clearly highlighted “Delete” button on the right helps users distinguish between actions and make deliberate decisions.</p>
        <p><strong>Key Principle:</strong> Follow platform conventions, maintain consistent button placement, and visually distinguish destructive actions to reduce user errors.</p>
        <TipComparison examples={[
          { image:'actions-reversed', good:false, alt:'Delete confirmation dialog placing the bright Delete button before Cancel.' },
          { image:'actions-logical', good:true, alt:'Delete confirmation dialog placing Cancel on the left and a clearly highlighted Delete button on the right.' },
        ]} />
      </section>
      <section className="hierarchy-section" aria-labelledby="tips-text"><h3 id="tips-text">Avoid Long Blocks of Text</h3>
        <p>Present information in short, scannable sections instead of lengthy paragraphs. Use clear headings, bullet points, and visual hierarchy to improve readability and reduce cognitive load.</p>
        <p><strong>Real-life example:</strong> On an e-commerce product page, displaying a vacuum cleaner’s features as short bullet points instead of a dense paragraph helps users quickly understand its benefits.</p>
        <p><strong>Key Principle:</strong> Users tend to scan rather than read every word. Make content concise, structured, and easy to digest.</p>
        <TipComparison examples={[
          { image:'vacuum-dense', good:false, alt:'UltraClean vacuum product description presented as one long, dense paragraph.' },
          { image:'vacuum-list', good:true, alt:'Vacuum product description organized as short features with headings and green checkmarks.' },
        ]} />
        <TipComparison examples={[
          { image:'vacuum-grid', good:true, alt:'Vacuum product benefits arranged in a clear two-column grid with consistent feature icons.' },
          { image:'vacuum-visual', good:true, alt:'Scannable vacuum product benefits using colored icons, short headings and a compact comparison graphic.' },
        ]} />
        <h4>Be Creative, but Keep Content Relevant</h4>
        <p>Focus on information that adds value to users. Avoid unnecessary details that clutter the interface, increase cognitive load, and reduce engagement.</p>
        <p>Ensure every piece of content answers a question, solves a problem, or helps users understand the product or service.</p>
        <p><strong>Key Principle:</strong> Keep content relevant, purposeful, and user-focused to improve clarity, usability, and conversions.</p>
      </section>
      <section className="hierarchy-section" aria-labelledby="tips-thumb"><h3 id="tips-thumb">Design for the Thumb Zone</h3>
        <p>Place frequently used buttons, navigation, and key actions within easy thumb reach to support comfortable one-handed mobile use.</p>
        <p>Avoid positioning essential controls in hard-to-reach areas, as this increases physical effort and the risk of accidental taps.</p>
        <p><strong>Key Principle:</strong> Design mobile interfaces around natural thumb movement to improve accessibility, comfort, and usability.</p>
        <div className="other-tips-single other-tips-thumb"><TipExample image="thumb-zones" alt="Phone diagram showing green easy-to-reach areas, amber stretch areas, and red hard-to-reach areas for one-handed thumb use." /></div>
        <TipComparison examples={[
          { image:'signin-distant', good:false, alt:'Property app welcome screen with Sign In isolated in the hard-to-reach top-right corner.' },
          { image:'signin-reachable', good:true, alt:'Property app welcome screen grouping Sign In and Sign up near the bottom, within easy thumb reach.' },
        ]} />
      </section>
      <section className="hierarchy-section" aria-labelledby="tips-navigation"><h3 id="tips-navigation">Design Better Navigation Dropdowns</h3>
        <p>Improve navigation dropdowns by using clear labels and meaningful icons to help users quickly identify and access pages or features.</p>
        <p><strong>Key Principle:</strong> Combine intuitive icons with descriptive labels to improve navigation clarity, reduce cognitive load, and enhance usability.</p>
        <TipComparison triple examples={[
          { image:'navigation-plain', good:false, alt:'Website navigation dropdown with plain text links and limited visual distinction.' },
          { image:'navigation-icons', good:true, alt:'Website dropdown organizing related products and use cases into columns with descriptive labels and purple icons.' },
          { image:'navigation-rich', good:true, alt:'Resources dropdown grouping icon-labeled links alongside selected blog post images and titles.' },
        ]} />
        <p>Use meaningful icons and clear labels to help users quickly identify menu options. Group related items into categories for easier navigation and better clarity.</p>
        <p>Add images selectively to highlight important items without cluttering the interface.</p>
        <p><strong>Key Principle:</strong> Use icons, images, and logical grouping strategically to improve navigation, reduce cognitive load, and enhance usability.</p>
      </section>
    </div>
  </dialog>
})

export default OtherTipsModal
