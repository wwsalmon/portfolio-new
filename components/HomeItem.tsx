import React from "react";
import {HomeItemObj} from "../utils/types";
import UnderlinedLink from "./UnderlinedLink";

export default function HomeItem({item}: { item: HomeItemObj }) {
    return (
        <div className="my-8">
            <div className={(item.serif ? "font-serif text-xl" : "text-lg") + " text-gray1 mb-2"} style={{lineHeight: 1.1}}>
                <span className="font-bold">
                    {item.title + " "}
                </span>
                <span>
                    {item.of ? "of" : "at"} {item.url ? (
                        <UnderlinedLink href={item.url}>{item.place}</UnderlinedLink>
                    ) : item.place}
                </span>
            </div>
            {item.description && (
                <p className="text-gray2">
                    {item.description}
                </p>
            )}
        </div>
    );
}