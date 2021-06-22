import {WritingItemObj} from "../utils/types";

export default function WritingItem({item}: { item: WritingItemObj }) {
    return (
        <div className="my-8">
            <p className="font-serif text-gray2 mb-1">{item.publication ? <i>{item.publication}</i> : "Personal"}</p>
            <a href={item.url} className="font-serif text-xl" style={{lineHeight: 1.1}}>{item.title}</a>
        </div>
    );
}