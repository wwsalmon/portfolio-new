import {GetStaticPaths, GetStaticProps} from "next";
import SEO from "../../../../components/SEO";
import {remark} from "remark";
import remarkParse from "remark-parse";
import remarkFootnotes from "remark-footnotes";
import Link from "next/link";
import {FiArrowLeft} from "react-icons/fi";
import {format} from "date-fns";
import {getDateFromBlogPostProps, getReadingTime, stripMarkdown} from "../../../../components/BlogItem";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

export interface BlogPostProps {title: string, date: string, tags: string[], body: string, filename: string};

export const BackLink = () => (
    <Link href="/blog">
        <a className="flex items-center font-bold text-xl mt-16 mb-8">
            <FiArrowLeft/>
            <span className="ml-2">All Blog Posts</span>
        </a>
    </Link>
)

export const getStaticPaths: GetStaticPaths = () => {
    const fs = require("fs");
    const files = fs.readdirSync(process.cwd() + "/posts/");

    const paths = files.map(file => ({
        params: {year: file.substr(0, 4), month: file.substr(5, 2), day: file.substr(8, 2), slug: file.substr(11, file.length - 14)}
    }));

    return {paths, fallback: false};
}

export const getStaticProps: GetStaticProps = ({params}) => {
    const filename = `${params.year}-${params.month}-${params.day}-${params.slug}.md`;

    const fs = require("fs");
    const fm = require("front-matter");
    const thisFile = fs.readFileSync(process.cwd() + "/posts/" + filename);
    const thisFm = fm(thisFile.toString());

    return {
        props: {
            title: thisFm.attributes.title,
            date: thisFm.attributes.date || null,
            tags: thisFm.attributes.tags ? thisFm.attributes.tags.split(" ") : [],
            body: thisFm.body,
            filename: filename,
        }
    };
}

export default function BlogPost(props: BlogPostProps) {
    const {title, body, tags} = props;

    const markdown = remark()
        .use(remarkParse)
        .use(remarkFootnotes)
        .use(remarkRehype, {allowDangerousHtml: true})
        .use(rehypeStringify, {allowDangerousHtml: true})
        .processSync(body);

    const stripped = stripMarkdown(body);
    const readingTime = getReadingTime(stripped);

    return (
        <div className="max-w-3xl mx-auto px-4">
            <SEO title={title}/>
            <BackLink/>
            <h2 className="font-bold text-4xl leading-[1.4]">{title}</h2>
            <div className="text-xl my-8">
                {tags.map(tag => (
                    <Link href={`/blog/${tag}`} key={"tag"+tag}>
                        <a className="mr-2">#{tag}</a>
                    </Link>
                ))}
                <p>{format(getDateFromBlogPostProps(props), "MMMM d, yyyy")}</p>
            </div>
            <p className="opacity-50 my-8 uppercase font-bold">{readingTime} min read</p>
            <div dangerouslySetInnerHTML={{__html: markdown.value.toString()}} className="prose mt-8" style={{fontSize: 20}}/>
            <div id="hyvor-talk-view" className="border-top pt-6 mt-6"/>
            <script type="text/javascript" dangerouslySetInnerHTML={{__html: `
            var HYVOR_TALK_WEBSITE = 1008; // DO NOT CHANGE THIS
            var HYVOR_TALK_CONFIG = {
                url: false,
                id: false
            };
            `}}/>
            <script async type="text/javascript" src="//talk.hyvor.com/web-api/embed"/>
        </div>
    )
}