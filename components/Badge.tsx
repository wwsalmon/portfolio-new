import {ReactNode} from 'react';

export default function Badge({children, className} : {children: ReactNode, className?: string}) {
  return (
    <div className={"h-5 flex items-center text-xs font-medium rounded-full px-2 bg-gray5 text-gray2 font-code " + (className || "")}>
        {children}
    </div>
  );
}