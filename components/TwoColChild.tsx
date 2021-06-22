import {ReactNode} from 'react';

export default function TwoColChild({children, className} : {children: ReactNode, className?: string}) {
  return (
    <div className={"md:w-1/2 md:mx-12 " + (className || "")}>
        {children}
    </div>
  );
}