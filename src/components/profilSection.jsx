import { useLanguage } from "../hooks/useLanguageContext";

export default function ProfilSection() {

  const {langData} = useLanguage();
  const data = langData.profileSection;

  return (
    <section>
      <div>
        <h1>{data.title}</h1>

        <div>
          <div>
            <h1>{data.basicInfo}</h1>

            <div>
              <div>
                <p>
                  {data.birthDate}
                </p>
                <p>{data.birthInfo}</p>
              </div>
              <div>
                <p>
                  {data.location}
                </p>
                <p>{data.locationInfo}</p>
              </div>
              <div>
                <p>
                  {data.education}
                </p>
                <p>
                  {data.school}
                </p>
              </div>
              <div>
                <p>
                  {data.position}
                </p>
                <p>{data.roleInfo}</p>
              </div>
            </div>
          </div>
          <img
            src={data.aboutPhoto}
          />

          <div>
            <h1>{data.aboutTitle}</h1>
            <p>{data.aboutText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}