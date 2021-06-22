import {CodeItemObj} from "../utils/types";
import Link from "next/link";
import Badge from "./Badge";

export default function CodeItem({item}: { item: CodeItemObj }) {
    return (
        <div className="my-10">
            <Link href={item.url}>
                <a className="text-xl text-gray1">{item.name}</a>
            </Link>
            <p className="text-gray2 text-lg mt-1">{item.description}</p>
            {item.images && !!item.images.length && (
                <Link href={item.url}>
                    <a>
                        <img
                            src={"/portfolio-code/" + item.images[0]}
                            alt={`Screenshot for project ${item.name}`}
                            className="w-full mr-8 my-6 shadow hover:shadow-md transition"
                        />
                    </a>
                </Link>
            )}
            <div className="flex items-center mt-3">
                {item.tags.map(tag => <Badge className="mr-2">{tag}</Badge>)}
            </div>
        </div>
    );
}