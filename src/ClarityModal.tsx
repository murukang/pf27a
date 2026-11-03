import { forwardRef } from 'react'

function ClarityExample({ image, good = false, alt }: { image: string, good?: boolean, alt: string }) {
  return <figure className={`hierarchy-example ${good ? 'is-good' : 'is-weak'}`}>
    <span className="hierarchy-verdict" role="img" aria-label={good ? 'Clear design' : 'Unclear design'}>{good ? '👍' : '👎'}</span>
    <img src={`/images/clarity/${image}.webp`} alt={alt} />
  </figure>
}

const ClarityModal = forwardRef<HTMLDialogElement>(function ClarityModal(_, ref) {
  return <dialog ref={ref} id="clarity-modal" className="hierarchy-dialog clarity-dialog" aria-labelledby="clarity-title" onClick={event => {
    if (event.target === event.currentTarget) {
      const bounds = event.currentTarget.getBoundingClientRect()
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close()
    }
  }}>
    <header className="hierarchy-header"><h2 id="clarity-title">Clarity</h2><button type="button" autoFocus aria-label="Close clarity" onClick={event => event.currentTarget.closest('dialog')?.close()}>×</button></header>
    <div className="hierarchy-content">
      <div className="clarity-introduction"><p>Clarity in UI Design means making an interface easy to understand and use. Clear navigation, simple layouts, and readable text help users complete tasks without confusion or frustration.</p><p>A clear interface reduces the time and effort users need to interact with a design, while poor clarity makes tasks more difficult.</p><p>Here are two common design mistakes that reduce clarity:</p></div>
      <section className="hierarchy-section clarity-section" aria-labelledby="clarity-oversimplification">
        <h3 id="clarity-oversimplification">1. Oversimplification</h3>
        <p>When all buttons have the same size and color, they appear equally important, making it difficult for users to identify the primary action.</p>
        <div className="hierarchy-comparison clarity-navigation">
          <ClarityExample image="navigation-unclear" alt="Navigation with only icons for home, projects, reports and settings, leaving their meaning open to interpretation." />
          <ClarityExample image="navigation-clear" good alt="Navigation with the same icons and clear text labels: Home, Projects, Reports and Settings." />
        </div>
        <div className="hierarchy-comparison clarity-settings">
          <ClarityExample image="settings-unclear" alt="Smart home settings with unlabeled icons and switches, making it unclear what each control changes." />
          <ClarityExample image="settings-clear" good alt="Smart home settings with labeled controls for Home security, Lights and Air conditioning, and clear on and off switch states." />
        </div>
        <p className="hierarchy-caption">Simplicity makes a design easier to understand, but too much simplicity can remove important information, leaving users confused about what to do next.</p>
      </section>
      <section className="hierarchy-section clarity-section" aria-labelledby="clarity-complexity">
        <h3 id="clarity-complexity">2. Overwhelming complexity</h3>
        <p>Too many options, buttons, and information can overwhelm users, actually making it difficult for them to make decisions or find what they’re looking for.</p>
        <div className="hierarchy-comparison clarity-dashboards">
          <ClarityExample image="dashboard-complex" alt="Crowded habit dashboard with many competing statistics, orange buttons, recommendations, categories and navigation options." />
          <ClarityExample image="dashboard-clear" good alt="Focused fitness dashboard with a simple date selector, prominent burned-calorie total, grouped activity metrics and a finished-workouts list." />
        </div>
      </section>
    </div>
  </dialog>
})

export default ClarityModal
