import Link from "next/link";
import {FiArrowLeft} from "react-icons/fi";
import {Divider} from "../pages/project/[slug]";
import SEO from "./SEO";

export default function ProjectHeader({backLink, backLabel, title, description}: {
    backLink: string,
    backLabel: string,
    title: string,
    description: string,
}) {
    return (
        <div className="flex flex-col items-center">
            <SEO title={title}/>
            <Link href={backLink}>
                <a className="flex items-center font-bold">
                    <FiArrowLeft/>
                    <span className="ml-2">Back to {backLabel} projects</span>
                </a>
            </Link>
            <Divider/>
            <h1 className="text-4xl font-bold text-center mb-8">{title}</h1>
            <p className="text-center text-2xl max-w-2xl leading-normal">{description}</p>
        </div>
    );
}