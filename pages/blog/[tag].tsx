import {GetStaticPaths, GetStaticProps} from "next";
import {BackLink, BlogPostProps} from "../[year]/[month]/[day]/[slug]";
import SEO from "../../components/SEO";
import H1 from "../../components/H1";
import Subheading from "../../components/Subheading";
import BlogTag from "../../components/BlogTag";
import Masonry from "react-masonry-component";
import BlogItem, {getDateFromBlogPostProps} from "../../components/BlogItem";
import Container from "../../components/Container";
import Link from "next/link";
import {FiArrowLeft} from "react-icons/fi";

export const getStaticPaths: GetStaticPaths = () => {const fs = require("fs");
    const fm = require("front-matter");
    const files = fs.readdirSync(process.cwd() + "/posts/");
    const tags = files.reduce((existingTags, file) => {
        const thisFile = fs.readFileSync(process.cwd() + "/posts/" + file);
        const thisFm = fm(thisFile.toString());
        const thisTags = thisFm.attributes.tags ? thisFm.attributes.tags.split(" ") : [];
        let newTags = [...existingTags];
        for (let tag of thisTags) {
            if (!existingTags.includes(tag)) newTags = [...newTags, tag];
        }
        return newTags;
    }, []);

    const paths = tags.map(tag => ({
        params: {tag: tag}
    }))

    return {paths, fallback: false};
}

export const getStaticProps: GetStaticProps = (context) => {
    const fs = require("fs");
    const fm = require("front-matter");
    const files = fs.readdirSync(process.cwd() + "/posts/");
    const posts = files.map(file => {
        const thisFile = fs.readFileSync(process.cwd() + "/posts/" + file);
        const thisFm = fm(thisFile.toString());
        return {
            title: thisFm.attributes.title,
            date: thisFm.attributes.date,
            tags: thisFm.attributes.tags ? thisFm.attributes.tags.split(" ") : [],
            body: thisFm.body,
            filename: file,
        }
    }).filter(d => d.tags.includes(context.params.tag));

    return {props: {posts: JSON.parse(JSON.stringify(posts)), tag: context.params.tag}};
}

export default function TagPage({tag, posts}: {tag: string, posts: BlogPostProps[]}) {
    return (
        <Container className="mt-16">
            <SEO title={`Tag: #${tag}`}/>
            <BackLink/>
            <H1>Tag: #{tag}</H1>
            <Masonry className="mt-20 -mx-8">
                {posts.sort((a, b) => +getDateFromBlogPostProps(b) - +getDateFromBlogPostProps(a)).map(post => (
                    <BlogItem post={post} key={post.title}/>
                ))}
            </Masonry>
        </Container>
    );
}