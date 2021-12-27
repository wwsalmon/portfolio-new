import {ReactNode} from 'react';

export default function Subheading({children, className} : {children: ReactNode, className?: string}) {
  return (
    <p className={"text-gray2 font-serif text-2xl " + (className || "")}>
        {children}
    </p>
  );
}