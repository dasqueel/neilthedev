export const Work = () => {
  return (
    <article
      id="work"
      className={`${this.props.article === 'work' ? 'active' : ''} ${
        this.props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Work</h2>
      <p>
        Recently my days job has been Front End work on Best Buys Web Cart and
        Checkout.
      </p>
      <p>On my free time, I am working on:</p>
      <ul>
        <li>
          An education app that assess a persons understanding of a question
          based off a users screen cast
        </li>
        <li>
          Web scraper that gathers stock analysis from social media analysts.
        </li>
        <li>
          A Daily Fantasy Sports lineup generator. (I will win the Millionare
          Make one day!)
        </li>
      </ul>
      {close}
    </article>
  )
}
