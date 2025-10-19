"use client";

import {
  Column,
  Flex,
  Heading,
  Media,
  SmartLink,
  Tag,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  tech: string[];
  github: string;
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  description,
  tech,
  github,
  link,
}) => {
  return (
    <Column fillWidth
      padding="l"
      gap="m"
      style={{
        border: "1px solid var(--neutral-weak)",
        borderRadius: "12px",
        background: "var(--surface-strong)",
      }}>

      <Media
        aspectRatio="16 / 9"
        radius="m"
        alt={title}
        src={image}
        style={{ objectFit: "cover" }}
        
      />
      <Heading variant="heading-strong-l">{title}</Heading>
      <Text variant="body-default-s" onBackground="neutral-weak">
        {description}
      </Text>
      <Flex gap="8" wrap>
        {tech.map((item, index) => (
          <Tag key={index} label={item} />
        ))}
      </Flex>

      <Flex gap="16">
        {github && (
          <SmartLink
            suffixIcon="github"
            href={github}
          >
            <Text variant="body-default-s">GitHub</Text>
          </SmartLink>
        )}
        {link && (
          <SmartLink
            suffixIcon="link"
            href={link}
          >
            <Text variant="body-default-s">Live</Text>
          </SmartLink>
        )}
      </Flex>
    </Column>
  );
};
