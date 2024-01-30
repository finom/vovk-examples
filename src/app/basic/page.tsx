'use client';
import { useState } from "react";
import { BasicController } from '@vovkts/client';
import type { VovkReturnType } from "vovk";

export default function BasicControllerPage() {
    const [serverResponse, setServerResponse] = useState<VovkReturnType<typeof BasicController.getHello>>();

    return (
        <div>
            <h1>Basic Controller</h1>
            <button onClick={async () => {
                const response = await BasicController.getHello();
                setServerResponse(response);
            }}>
                Get Greeting from Server
            </button>
            <div>{serverResponse?.greeting}</div>
        </div>
    );
}
