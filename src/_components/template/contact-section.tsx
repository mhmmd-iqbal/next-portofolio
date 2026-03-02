import type { SubmitEvent } from 'react';

type ContactSectionProps = {
  sent: boolean;
  onSubmit: (event: SubmitEvent<HTMLFormElement>) => void;
};

export default function ContactSection({ sent, onSubmit }: ContactSectionProps) {
  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-box reveal">
          <div className="contact-grid">
            <div>
              <h2 className="contact-h2" id="contact-title">
                Let&apos;s build
                <br />
                <span>something</span>
                <br />
                great.
              </h2>
              <p className="contact-p">
                Available for full-time roles and freelance projects. Especially interested in
                backend systems, enterprise, and AI-integrated platforms.
              </p>
              <div className="contact-links">
                <a href="mailto:mhmmd.iqbal.june@gmail.com" className="contact-link">
                  <div className="c-icon">✉</div>
                  <div>
                    <div className="c-label">Email</div>
                    <div className="c-value">mhmmd.iqbal.june@gmail.com</div>
                  </div>
                </a>
                <a href="tel:+6282165678664" className="contact-link">
                  <div className="c-icon">📱</div>
                  <div>
                    <div className="c-label">Phone / WhatsApp</div>
                    <div className="c-value">+62 821-6567-8664</div>
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/mhmmd-iqbal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <div className="c-icon in-icon">in</div>
                  <div>
                    <div className="c-label">LinkedIn</div>
                    <div className="c-value">linkedin.com/in/mhmmd-iqbal</div>
                  </div>
                </a>
              </div>
            </div>
            <form id="contact-form" noValidate onSubmit={onSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="f-name">
                  Your Name
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="f-name"
                  name="name"
                  placeholder="John Doe"
                  autoComplete="name"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="f-email">
                  Email Address
                </label>
                <input
                  className="form-input"
                  type="email"
                  id="f-email"
                  name="email"
                  placeholder="john@company.com"
                  autoComplete="email"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="f-msg">
                  Message
                </label>
                <textarea
                  className="form-textarea"
                  id="f-msg"
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <button type="submit" className={`form-submit ${sent ? 'sent' : ''}`.trim()} id="form-submit">
                {sent ? 'Message Sent ✓' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
