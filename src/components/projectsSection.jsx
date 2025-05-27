import { useLanguage } from "../hooks/useLanguageContext";

export default function ProjectSection() {

    const {langData} = useLanguage();
    const data = langData.projectsSection;

  return (
      <div>
          <section>
            <h2>{data.title}</h2>

            <div>
                {data.projects.map((project, index) => (
                    <div key={index}>
                        <h3>{project.name}</h3>
                        <img src={project.image} alt={project.name} />
                        <p>{project.description}</p>
                        <p>{project.usedTech.join(", ")}</p>

                        <div>
                            <a href={project.linkGithub} target="_blank" rel="noopener noreferrer">
                                {data.viewSite}
                            </a>
                            <a href={project.linkGithub} target="_blank" rel="noopener noreferrer">
                                {data.github}
                            </a>
                        </div>
                        
                    </div>
                ))}
            </div>
          </section>
        </div>
  );
}