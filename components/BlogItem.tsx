import {BlogPostProps} from "../pages/[year]/[month]/[day]/[slug]";
import {remark} from "remark";
import strip from "strip-markdown";
import {format} from "date-fns";
import Link from "next/link";

export default function BlogItem({post}: { post: BlogPostProps }) {
    const {title, tags, date, filename} = post;

    const stripped = remark()
        .use(strip)
        .processSync(post.body)
        .value
        .toString();

    const readingTime = stripped.split(" ").length / 280;

    return (
        <div className="my-8 pb-8 border-b">
            <Link href="">
                <a>
                    <h2 className="font-bold text-xl">{title}</h2>
                    <p className="leading-relaxed my-2">{stripped.substr(0, 200)}...</p>
                </a>
            </Link>
            <div className="flex items-center">
                <div className="opacity-50">
                    <p>{format(new Date(date || `${filename.substr(0, 10)}`), "MMMM d, yyyy")}</p>
                    <div className="flex items-center">
                        {tags.map(tag => (
                            <Link href={`/blog/${tag}`}><a className="font-bold mr-3">#{tag}</a></Link>
                        ))}
                    </div>
                </div>
                <Link href="">
                    <a className="font-bold opacity-30 hover:opacity-100 uppercase ml-auto">{Math.round(readingTime)} min read &gt;</a>
                </Link>
            </div>
        </div>
    );
}