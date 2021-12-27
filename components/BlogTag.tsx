import Link from "next/link";

export default function BlogTag({tag, count, className}: { tag: string, count: number, className?: string }) {
    return (
        <Link href={`/blog/${tag}`}>
            <a className={"bg-zinc-800 rounded-md text-white p-2 mb-2 mr-2 inline-block text-sm " + (className || "")}>
                #{tag} ({count})
            </a>
        </Link>
    );
}