import React from "react";
import UnderlinedLink from "./UnderlinedLink";

export default function Contact() {
    return (
        <div className="mt-24">
            <h3 className="text-xl italic font-serif mb-4">Contact me</h3>
            <p className="text-lg text-gray2 my-4">Have a question about my work? Want to work together? Don't hesitate to reach out!</p>
            <p className="text-lg text-gray2 my-4">Email me at <UnderlinedLink href="mailto:hello@samsonzhang.com">hello@samsonzhang.com</UnderlinedLink>, or message me on Twitter <UnderlinedLink href="https://twitter.com/wwsalmon">@wwsalmon</UnderlinedLink>.</p>
        </div>
    );
}