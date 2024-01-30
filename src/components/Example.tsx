import { ReactNode } from "react";

interface Props {
    title: string;
    children: ReactNode;
}

const Example = ({ title, children }: Props) => {
    return (
        <div>
            <h1>{title}</h1>
            <div className="shadow-md rounded-xl p-4 my-4 text-center bg-white">{children}</div>
        </div>
    );
}

export default Example;