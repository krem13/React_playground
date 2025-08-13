import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Games Leaderboard",
    page: "/games",
    description:
      "This is a small component that displays Leaderbords for the Chess API games.",
    link: "https://github.com/krem13/React_playground/issues/1",
  },
  {
    title: "Form with autocorrect",
    page: "/form",
    description:
      "This is a small component that displays a form for user input with different fields.",
    link: "https://github.com/krem13/React_playground/issues/3",
  },
  {
    title: "Used trucks sale website",
    page: "/marketplace",
    description:
      "This is a landing page serving as a marketplace for used trucks.",
    link: "https://github.com/krem13/React_playground/issues/",
  },
  {
    title: "Hacker news page",
    page: "/",
    description:
      "My personal portfolio website showcasing my projects and skills.",
    link: "https://github.com/krem13/React_playground/issues/",
  },
  {
    title: "Google map demo",
    page: "/",
    description:
      "My personal portfolio website showcasing my projects and skills.",
    link: "https://github.com/krem13/React_playground/issues/",
  },
];

export default function Projects() {
  return (
    <div className="bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Projects
        </h2>
        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              page={project.page}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
