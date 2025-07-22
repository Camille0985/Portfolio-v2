import { Link } from 'react-router-dom';
import '../styles/StaticPage.css';

const Error = () => {

  return (
    <div className="not-found">
      <div className="container">
        <h1 className="static-h1">404 - Page introuvable</h1>
        <p className="error-message">Oups... la page que vous cherchez n'existe pas ou a été déplacée.</p>
      </div>
      <Link className="back-link" to="/">Revenir au site</Link>
    </div>
  );
}

export default Error;