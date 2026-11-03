import { forwardRef } from 'react'

function InteractionImage({ image, alt, good }: { image: string, alt: string, good?: boolean }) {
  return <figure className={`hierarchy-example ${good ? 'is-good' : 'is-weak'}`}>
    {good !== undefined && <span className="hierarchy-verdict" role="img" aria-label={good ? 'Lower interaction cost' : 'Higher interaction cost'}>{good ? '👍' : '👎'}</span>}
    <img src={`${import.meta.env.BASE_URL}images/interaction-cost/${image}.webp`} alt={alt} />
  </figure>
}

const InteractionCostModal = forwardRef<HTMLDialogElement>(function InteractionCostModal(_, ref) {
  return <dialog ref={ref} id="interaction-cost-modal" className="hierarchy-dialog interaction-cost-dialog" aria-labelledby="interaction-cost-title" onClick={event => {
    if (event.target === event.currentTarget) {
      const bounds = event.currentTarget.getBoundingClientRect()
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close()
    }
  }}>
    <header className="hierarchy-header"><h2 id="interaction-cost-title">Interaction Cost</h2><button type="button" autoFocus aria-label="Close interaction cost" onClick={event => event.currentTarget.closest('dialog')?.close()}>×</button></header>
    <div className="hierarchy-content interaction-cost-content">
      <section className="hierarchy-section interaction-cost-introduction" aria-label="Understanding interaction cost">
        <p>Interaction cost refers to the mental, physical, and time effort users invest to achieve their goals through a user interface. Good UX design aims to minimize this effort by making interactions simple, intuitive, and efficient.</p>
        <h3>Interaction cost has three key components:</h3>
        <ol>
          <li><strong>Cognitive Effort:</strong> The mental effort required to understand, navigate, and interact with an interface. Clear and intuitive designs reduce cognitive load.</li>
          <li><strong>Physical Effort:</strong> The physical actions needed to complete a task, such as clicking, typing, and scrolling. Fewer actions reduce interaction cost.</li>
          <li><strong>Time Effort:</strong> The time required to accomplish a task. Faster loading, simpler navigation, and streamlined workflows improve efficiency.</li>
        </ol>
        <p><strong>Key Principle:</strong> Reduce unnecessary thinking, actions, and time to create a seamless user experience.</p>
        <div className="interaction-cost-diagram"><InteractionImage image="path-to-goal" alt="A straight green arrow connects User to Goal, while a pink zigzag illustrates the detours of a high interaction cost." /></div>
        <p className="interaction-cost-caption">Ideally, users should find what they need instantly, with zero interaction cost. While this is rarely achievable due to the complexity of websites and apps, good UX design aims to minimize effort by reducing unnecessary reading, scrolling, searching, thinking, clicking, typing, waiting, and memorizing information.</p>
      </section>
      <h3 className="interaction-cost-strategies">Effective strategies to minimise interaction cost</h3>
      <section className="hierarchy-section" aria-labelledby="interaction-close"><h3 id="interaction-close">1. Keep Related Actions Close</h3>
        <p>According to Fitts’s Law, larger and closer targets are easier and faster to interact with. Place related actions near their associated elements and ensure sufficient clickable areas.</p>
        <p><strong>Example:</strong> In Spotify, playback controls (play, pause, skip) remain easily accessible, allowing users to control music without navigating through multiple screens.</p>
        <p className="interaction-cost-note">Neutral background colors, such as light grey, beige, or soft white, create a clean and balanced interface. They help important content and primary colors stand out, reduce visual distractions, and improve user focus and readability.</p>
        <div className="interaction-cost-single interaction-cost-playback"><InteractionImage image="playback-controls" alt="Spotify playlist with its related playback controls grouped together in an easily accessible bottom bar, highlighted with a pink outline." /></div>
      </section>
      <section className="hierarchy-section" aria-labelledby="interaction-choices"><h3 id="interaction-choices">2. Minimize Choices</h3>
        <p>According to Hick’s Law, more choices increase decision-making time. Simplify decisions by limiting unnecessary options and highlighting popular or recommended items.</p>
        <p><strong>Example:</strong> Food delivery apps like Uber Eats display personalized restaurant recommendations, helping users choose quickly without browsing overwhelming lists.</p>
        <div className="hierarchy-comparison interaction-cost-pair">
          <InteractionImage image="choices-overwhelming" good={false} alt="Food delivery screen showing a long list of all restaurants. An annotation explains that overwhelming lists make decisions slower." />
          <InteractionImage image="choices-curated" good alt="Food delivery screen with curated recommendations, cuisine categories, and a smaller set of popular nearby restaurants for quicker decisions." />
        </div>
      </section>
      <section className="hierarchy-section" aria-labelledby="interaction-memory"><h3 id="interaction-memory">3. Optimize Working Memory</h3>
        <p>Working memory can hold only a limited amount of information at once. Grouping related information into meaningful, manageable chunks reduces cognitive load and makes information easier to process and remember.</p>
        <div className="hierarchy-comparison interaction-cost-pair interaction-cost-settings">
          <InteractionImage image="memory-ungrouped" good={false} alt="Settings screen with an ungrouped list of profile, notifications, privacy, security, appearance, language, data usage, storage, and support options, making them harder to process." />
          <InteractionImage image="memory-grouped" good alt="Settings screen organizing related options under Account, App Preferences, Storage and Data, and Support, making them easier to understand and remember." />
        </div>
      </section>
      <section className="hierarchy-section" aria-labelledby="interaction-distractions"><h3 id="interaction-distractions">4. Reduce Distractions</h3>
        <p>Minimize unnecessary visuals, animations, pop-ups, and other distracting elements to help users stay focused on their tasks. A clean, simple interface reduces cognitive load and improves usability.</p>
        <p><strong>Real-life example:</strong> Medium uses a minimalist reading interface that prioritizes content over unnecessary visual elements, helping readers stay focused and reducing interaction costs.</p>
        <div className="interaction-cost-single"><InteractionImage image="focused-reading" alt="A Medium article page with restrained navigation, a clear title, author information and an article image, keeping the main reading content prominent." /></div>
      </section>
      <section className="hierarchy-section" aria-labelledby="interaction-repetition"><h3 id="interaction-repetition">5. Reduce Repetition</h3>
        <p>Automate or simplify repetitive tasks to minimize user effort, save time, and reduce physical and cognitive load.</p>
        <p><strong>Real-life example:</strong> Excel and Google Sheets allow users to apply formulas across multiple cells simultaneously, eliminating repetitive actions and improving efficiency.</p>
        <div className="interaction-cost-single"><InteractionImage image="formula-fill" alt="Monthly Sales spreadsheet with the Total column selected and a callout pointing to the fill handle: Apply the same formula to multiple cells." /></div>
      </section>
    </div>
  </dialog>
})

export default InteractionCostModal
