import "./Contact.scss";

const Contact = () => {
  return (
    <section id="Contact">
      <div className="container contact">
        <h2>Contact</h2>
        <p>
          Vous souhaitez donner vie à un projet ou avez besoin d'informations
          complémentaires ?
        </p>
        <p>
          Envoyez-moi un message via ce formulaire, je reviendrai vers vous
          rapidement.
        </p>
        <form
          action="https://formsubmit.co/4a9756e7ff46a02974b08c8f7db4b0bd"
          method="POST"
        >
          <input type="text" name="_honey" style={{ display: "none" }} />
          <label htmlFor="name"></label>
          <input type="text" id="name" name="name" placeholder="Votre nom" required />
          <label htmlFor="email"></label>
          <input type="email" id="email" name="Email" placeholder="Votre e-mail" required />
          <label htmlFor="message"></label>
          <textarea id="message" name="message" placeholder="Votre message"></textarea>
          <div className="form__button-container">
            <button type="submit" aria-label="Envoyer le message">Envoyer</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
