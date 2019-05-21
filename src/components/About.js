export const About = () => {
  return (
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
        intended :D) Ive been coding 40 hours a week since 2014. Most of that
        time has been building small apps that interest me; education, fantasy
        sports, and blockchain. Since August 2018 I've been working on the React
        Redux Cart and Checkout app at Best Buy.
      </p>
      {close}
    </article>
  )
}
