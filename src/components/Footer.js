import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
  const github = (
    <a
      href="https://github.com/dasqueel"
      className="icon fa-github"
      target="_blank"
    >
      <span className="label">GitHub</span>
    </a>
  )

  const twitter = (
    <a
      href="https://twitter.com/neilbarduson"
      className="icon fa-twitter"
      target="_blank"
    >
      <span className="label">Twitter</span>
    </a>
  )

  const linkedin = (
    <a
      href="https://linkedin.com/in/neilbarduson"
      className="icon fa-linkedin"
      target="_blank"
    >
      <span className="label">LinkedIn</span>
    </a>
  )

  const youtube = (
    <a
      href="https://www.youtube.com/channel/UCtqXwXjvJMlCwXgnTjwWp7g"
      className="icon fa-youtube"
      target="_blank"
    >
      <span className="label">Youtube</span>
    </a>
  )

  const email = (
    <a href="mailto:neil@neilthedev.com" className="icon fa-envelope">
      <span className="label">Envelope</span>
    </a>
  )

  return (
    <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
      <p className="copyright">
        &copy; Neil The Dev | {twitter} | {github} | {linkedin}| {youtube} |{' '}
        {email}
      </p>
    </footer>
  )
}

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
