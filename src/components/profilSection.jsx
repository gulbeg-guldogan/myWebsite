import { useLanguage } from "../hooks/useLanguageContext";

export default function ProfilSection() {

  const {langData} = useLanguage();
  const data = langData.profileSection;

  return (
      <section className="about-section">
      <div className="about-container">
        <h1 className="about-title">{data.title}</h1>

        <div className="about-info">
          <div className="info-text">
            <h1 className="info-title">{data.basicInfo}</h1>

            <div className="info-details">
              <div className="info-row">
                <p className="info-label">{data.birthDate}</p>
                <p className="info-value">{data.birthInfo}</p>
              </div>

              <div className="info-row">
                <p className="info-label">{data.location}</p>
                <p className="info-value">{data.locationInfo}</p>
              </div>

              <div className="info-row">
                <p className="info-label">{data.education}</p>
                <p className="info-value">{data.school}</p>
              </div>

              <div className="info-row">
                <p className="info-label">{data.position}</p>
                <p className="info-value">{data.roleInfo}</p>
              </div>
            </div>
          </div>

          <img className="about-photo" src={data.aboutPhoto} alt="About" />

          <div className="about-description">
            <h1 className="about-description-title">{data.aboutTitle}</h1>
            <p className="about-description-text">{data.aboutText}</p>
          </div>
        </div>
      </div>
    </section>
    
  );
}