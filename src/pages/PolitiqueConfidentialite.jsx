import { Link } from "react-router-dom";
import "../styles/StaticPage.css";

const PolitiqueConfidentialite = () => {
  return (
    <main className="legal-content">
      <div className="container">
        <h1 className="static-h1">Politique de confidentialité</h1>

        <section>
          <h2 className="static-h2">Données personnelles</h2>
          <p>
            Ce site ne collecte aucune donnée personnelle automatiquement. Le formulaire de contact repose sur le service tiers <a href="https://formsubmit.co" target="_blank" rel="noreferrer">FormSubmit</a>.
          </p>
        </section>

        <section>
          <h2 className="static-h2">Formulaire de contact</h2>
          <p>
            Les données transmises via le formulaire (nom, adresse e-mail, message) sont envoyées directement par e-mail via FormSubmit et ne sont pas stockées sur ce site.
          </p>
        </section>

        <section>
          <h2 className="static-h2">Cookies</h2>
          <p>
            Ce site n’utilise pas de cookies ni de traceurs à des fins publicitaires ou statistiques.
          </p>
        </section>

        <section>
          <h2 className="static-h2">Responsable du traitement</h2>
          <p>
            Camille Duprez<br />
            E-mail : duprez_camille@yahoo.com
          </p>
        </section>

        <section>
          <h2 className="static-h2">Vos droits</h2>
          <p>
            Conformément au RGPD, vous pouvez demander l’accès, la rectification ou la suppression de vos données en me contactant à l'adresse indiquée ci-dessus.
          </p>
        </section>
      </div>
      <Link className="back-link" to="/">Revenir au site</Link>
    </main>
  );
};

export default PolitiqueConfidentialite;
