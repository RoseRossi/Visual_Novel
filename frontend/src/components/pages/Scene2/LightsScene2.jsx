import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { PointLightHelper  } from "three";

const LightsScene2 = () => {

    const pointLightRef = useRef();
    useHelper(pointLightRef, PointLightHelper, 0.1, "white");


    //ref={pointLightRef}

    return <>
            <pointLight position={[10.5, -1, -66.3]} intensity={2} color={"#ECD461"} />
            <pointLight position={[19, -1, -63]} intensity={2.5} color={"#ECD461"} />
            <pointLight position={[7.3, -1, -58]} intensity={1.5} color={"#ECD461"} />
            <pointLight position={[17, -1, -55]} intensity={2} color={"#ECD461"} />

        </>
}
export default LightsScene2;