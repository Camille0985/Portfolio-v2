import Works from "../../data/works.json";
import "./Gallery.scss";

const Gallery = () => {
  return (
    <section id="Works">
      <div className="gallery">
        <h2>Projets</h2>
        <ul className="gallery__menu">
          {Works.map(({ cover, title, description, skills, link, git }, index) => (
            <li className="gallery__card" key={index}>
              <div className="card__container__img">
                <img 
                src={cover} 
                alt="" 
                style={{ width: "100%", maxWidth: "536.4px", height: "100%" }}
                loading="lazy"
                />
              </div>
              <div className="card__description">
                <h3>{title}</h3>
                <h4>Description :</h4>
                <p>{description}</p>
                <ul className="skills-menu">
                  {skills && skills.map((skill, i) => (
                    <li className="skills-menu__list" key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="card__links">
                {link && 
                  <a href={link} target="_blank" rel="noopener noreferrer" className="project__link">
                    Voir le site
                  </a>
                }
                <a href={git} target="_blank" rel="noopener noreferrer" className="project__link">
                  Lien GitHub
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
};

export default Gallery;