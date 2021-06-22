import React from "react";
import {HomeItemObj} from "../utils/types";
import HomeItem from "./HomeItem";

export default function ExperienceSection({experience}: { experience: HomeItemObj[] }) {
    return (
        <div className="mt-20">
            <h2 className="text-xl italic font-serif">Relevant experience</h2>
            {experience.map(item => <HomeItem item={item}/>)}
            <hr className="my-20 text-gray4"/>
        </div>
    );
}