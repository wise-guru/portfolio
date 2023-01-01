function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="subheading">
        <div className="header-container">
          <h2 className="section-header">Contact</h2>
        </div>
        <hr className="line" />
      </div>
      <div className="contact-container section-content">
        <div className="form-prompt">
          <p className="social-prompt">Feel free to drop me a message!</p>
        </div>

        <form className="contact-form" method="POST" action="https://formspree.io/f/xnqyqqva">
          <input
            className="input-name"
            type="text"
            name="name"
            aria-label="Name"
            placeholder="Name"
            maxLength="128"
            required
          />
          <input
            className="input-email"
            type="email"
            name="email"
            aria-label="Email"
            placeholder="E-mail"
            maxLength="128"
            required
          />
          <input type="text" name="_gotcha" style={{ display: "none" }} />
          <textarea
            className="input-message"
            name="message"
            aria-label="Message"
            placeholder="Message"
            required></textarea>
          <div className="button-container">
            <button className="form-button" type="submit">
              Submit
            </button>
            <p className="notification"></p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
