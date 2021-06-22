import {ReactNode} from "react";
import Link from "next/link";

export default function UnderlinedLink({href, children}: { href: string, children: ReactNode }) {
    return (
        <Link href={href}>
            <a className="underline">{children}</a>
        </Link>
    );
}