import React from 'react'
import PropTypes from 'prop-types'

class Main extends React.PureComponent {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <p>
            Hello! I am Neil, a self taught dev. The past 5 years I've creating
            web apps. React, Redux, Python are my main languages, however, I am
            always willing to new learn tech stacks. As it comes down to using
            the right tool for the right job.
          </p>
          <p>
            Open to Corp to Corp consulting contracts. Please feel free to reach
            out, I'd love to have a chat. For rates, contact me.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <p>
            Recently my days job has been Front End work on Best Buys Web Cart
            and Checkout.
          </p>
          <p>On my free time, I am working on:</p>
          <ul>
            <li>
              An education app that assess a persons understanding of a question
              based off a users screen cast
            </li>
            <li>
              Web scraper that gathers stock analysis from social media
              analysts.
            </li>
            <li>
              A Daily Fantasy Sports lineup generator. (I will win the
              Millionare Make one day!)
            </li>
          </ul>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <p>
            I studied neuroscience in college. Then I got the software bug (pun
            intended :D) Ive been coding 40 hours a week since 2014. Most of
            that time has been building small apps that interest me; education,
            fantasy sports, and blockchain. Since August 2018 I've been working
            on the React Redux Cart and Checkout app at Best Buy.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>
            DM on twitter at @neilbarduson OR email me at neil@neilthedev.com
          </p>
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
              <a href="mailto:neil@neilthedev.com" className="icon fa-envelope">
                <span className="label">Envelope</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }

  sendMessage() {
    alert('haaay')
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
