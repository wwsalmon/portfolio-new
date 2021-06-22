import {ReactNode} from "react";

export interface HomeItemObj {
    title: string,
    of?: boolean,
    place: string | ReactNode,
    serif?: boolean,
    description?: string | ReactNode,
}

export interface WritingItemObj {
    title: string,
    url: string,
    publication?: string,
}

export interface CodeItemObj {
    name: string,
    description: string | ReactNode,
    images?: string[],
    url: string,
    tags: string[],
}