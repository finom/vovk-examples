import Github from "@/components/Github";
import BasicExample from "./BasicExample";
import Example from "@/components/Example";

export default function BasicControllerPage() {
    return (
        <>
            <Example title="Basic Controller">
                <BasicExample />
            </Example>
            <Github paths={[
                'src/modules/basic/BasicController.ts',
                'src/app/basic/BasicExample.tsx',
            ]} />
        </>
    );
}
