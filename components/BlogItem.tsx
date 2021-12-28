import {BlogPostProps} from "../pages/[year]/[month]/[day]/[slug]";
import {remark} from "remark";
import strip from "strip-markdown";
import {format} from "date-fns";
import Link from "next/link";
import YTEmbed from "./YTEmbed";

export function getDateFromBlogPostProps(post: BlogPostProps): Date {
    return new Date(post.date || `${post.filename.substr(0, 10)}`);
}

export default function BlogItem({post}: { post: BlogPostProps }) {
    const {title, tags, date, filename} = post;

    const stripped = remark()
        .use(strip)
        .processSync(post.body)
        .value
        .toString();

    const youtubeMatches = post.body.match(/(?:src="https:\/\/www\.youtube\.com\/embed\/)(.*)(?:\?modestbranding=1")/);
    const youtubeId = youtubeMatches ? youtubeMatches[1] : null;

    const firstImageMatches = !youtubeId ? post.body.match(/!\[(.*)\]\((.+)\)/) : null; // if youtubeId we don't care about first image
    const firstImageString = firstImageMatches ? firstImageMatches[0] : null;

    const readingTime = stripped.split(" ").length / 280;

    return (
        <div className="md:w-1/2 px-8 mb-12">
            <Link href={`/${filename.substr(0, 4)}/${filename.substr(5, 2)}/${filename.substr(8, 2)}/${filename.substr(11, filename.length - 14)}`}>
                <a>
                    <h2 className="font-bold text-xl leading-relaxed">{title}</h2>
                    <div className="my-6">
                        {youtubeId ? (
                            <YTEmbed ytid={youtubeId}/>
                        ) : firstImageString ? (
                            <img
                                src={firstImageString.split("](")[1].substr(0, firstImageString.split("](")[1].length - 1)}
                                alt={firstImageString.split("](")[0].substr(2)}
                                className="opacity-80 hover:opacity-100 transition"
                            />
                        ) : (
                            <p className="leading-relaxed -my-2">{stripped.substr(0, 180)}...</p>
                        )}
                    </div>
                </a>
            </Link>
            <div className="flex items-center">
                <div className="opacity-50">
                    <p>{format(getDateFromBlogPostProps(post), "MMMM d, yyyy")}</p>
                    <div className="flex items-center">
                        {tags.map(tag => (
                            <Link href={`/blog/${tag}`}><a className="font-bold mr-3">#{tag}</a></Link>
                        ))}
                    </div>
                </div>
                <Link href="">
                    <a className="font-bold opacity-30 hover:opacity-100 uppercase ml-auto">{Math.max(Math.round(readingTime), 1)} min read &gt;</a>
                </Link>
            </div>
            <hr className="mt-12 bg-gray3"/>
        </div>
    );
}