import {ReactNode} from 'react';

export default function TwoColContainer({children, className} : {children: ReactNode, className?: string}) {
  return (
    <div className={"md:flex md:-mx-12 " + (className || "")}>
        {children}
    </div>
  );
}