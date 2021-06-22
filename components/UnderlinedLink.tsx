import {ReactNode} from "react";
import Link from "next/link";

export default function UnderlinedLink({href, children, className}: { href: string, children: ReactNode, className?: string }) {
    return (
        <Link href={href}>
            <a className={"underline " + (className || "")}>{children}</a>
        </Link>
    );
}