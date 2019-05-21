export const Intro = () => {
  return (
    <article
      id="intro"
      className={`${this.props.article === 'intro' ? 'active' : ''} ${
        this.props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Intro</h2>
      <p>
        Hello! I am Neil, a self taught dev. The past 5 years I've creating web
        apps. React, Redux, Python are my main languages, however, I am always
        willing to new learn tech stacks. As it comes down to using the right
        tool for the right job.
      </p>
      <p>
        Open to Corp to Corp consulting contracts. Please feel free to reach
        out, I'd love to have a chat. For rates, contact me.
      </p>
      {close}
    </article>
  )
}
