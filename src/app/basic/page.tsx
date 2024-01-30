import Github from "@/components/Github";
import BasicExample from "./BasicExample";

export default function BasicControllerPage() {
    return (
        <>
            <BasicExample />
            <Github paths={['src/app/basic/BasicExample.tsx']} />
        </>
    );
}
