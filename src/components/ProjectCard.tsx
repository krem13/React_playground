import { Link } from "react-router-dom";
import { ProjectCardProps } from "../types/project.interface";

export default function Projects(props: ProjectCardProps) {
  return (
    <Link to={props.page}>
      <div
        key={props.title}
        className="border-b p-4 hover:bg-gray-100 transition-colors"
      >
        <h3 className="text-xl font-semibold text-gray-800">{props.title}</h3>
        <p className="text-gray-600 mb-2">{props.description}</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            window.open(props.link, "_blank", "noopener,noreferrer");
          }}
          className="text-blue-600 hover:underline"
        >
          View on GitHub
        </button>
      </div>
    </Link>
  );
}
