
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";
import { projectsData } from "@/resources/projectsData";



export function Projects() {


  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          image={project.image}
          description={project.description}
          tech={project.tech}
          github={project.github}
          link={project.link}
        />
      ))}
    </Column>
  );
}
