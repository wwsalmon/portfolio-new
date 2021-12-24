import {ReactNode} from 'react';

export default function ItalicHeading({children, className} : {children: ReactNode, className?: string}) {
  return (
    <h3 className={"italic font-serif text-xl " + (className || "")}>
        {children}
    </h3>
  );
}