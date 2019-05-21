export const Contact = () => {
  return (
    <article
      id="contact"
      className={`${this.props.article === 'contact' ? 'active' : ''} ${
        this.props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Contact</h2>
      <form method="post" action="#">
        <div className="field half first">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="4" />
        </div>
        <ul className="actions">
          <li>
            <input
              type="submit"
              value="Send Message"
              className="special"
              onClick={this.sendMessage}
            />
          </li>
          <li>
            <input type="reset" value="Reset" />
          </li>
        </ul>
      </form>
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/neilbarduson"
            className="icon fa-twitter"
            target="_blank"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/dasqueel"
            className="icon fa-github"
            target="_blank"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
      {close}
    </article>
  )
}
