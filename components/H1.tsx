import {ReactNode} from "react";

export default function H1({children, className}: { children: ReactNode, className?: string }) {
    return (
        <h1 className={"font-bold text-4xl mb-2 " + (className || "")}>
            {children}
        </h1>
    );
}