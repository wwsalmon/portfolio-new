import {ReactNode} from 'react';

export default function PortfolioSection({heading, children, className} : {heading: string, children: ReactNode, className?: string}) {
  return (
    <div className={"mt-20 " + (className || "")}>
        <h2 className="font-bold text-xl">{heading}</h2>
        {children}
    </div>
  );
}