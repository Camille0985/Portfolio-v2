import { Link } from "react-router-dom";
import "../styles/StaticPage.css";

const MentionsLegales = () => {
  return (
    <main className="legal-content">
      <div className="container">
        <h1>Mentions légales</h1>

        <section>
          <h2>Éditeur du site</h2>
          <p>
            Camille Duprez, Entreprise Individuelle (EI), développeuse full stack domiciliée à Lille.<br />
            SIRET : 98944228000016<br />
            Email : duprez_camille@yahoo.com
          </p>
        </section>

        <section>
          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par :<br />
            Vercel Inc.<br />
            340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
            Site : <a href="https://vercel.com" target="_blank" rel="noreferrer">https://vercel.com</a>
          </p>
        </section>

        <section>
          <h2>Propriété intellectuelle</h2>
          <p>
            Ce site ainsi que l'ensemble de son contenu (textes, images, code source, etc.) sont la propriété exclusive de Camille Duprez, sauf mention contraire.
          </p>
        </section>

        <section>
          <h2>Responsabilité</h2>
          <p>
            L'éditeur ne saurait être tenue responsable des erreurs rencontrées sur le site, de problèmes techniques ou d’interprétation des informations proposées.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Pour toute question, veuillez utiliser le formulaire de contact prévu à cet effet ou envoyer un e-mail à : duprez_camille@yahoo.com
          </p>
        </section>
      </div>
      <Link className="back-link" to="/">Revenir au site</Link>
    </main>
  );
};

export default MentionsLegales;
