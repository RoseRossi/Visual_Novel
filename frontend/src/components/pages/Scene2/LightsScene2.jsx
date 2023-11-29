import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { SpotLightHelper, PointLightHelper, HemisphereLightHelper } from "three";

const LightsScene2 = () => {

    const pointLightRef = useRef();
    useHelper(pointLightRef, PointLightHelper, 0.1, "white");


    //ref={pointLightRef}

    return <>
            <pointLight position={[10.5, -1, -66.3]} intensity={3} color={"#ECD461"} ref={pointLightRef}/>
            <pointLight position={[7.8, 3, -3.4]} intensity={4} color={"#ECD461"} />
            <pointLight position={[3, 3.2, 13.2]} intensity={2} color={"#ECD461"} />
            <pointLight position={[13, 3, -12.3]} intensity={2} color={"#ECD461"} />

        </>
}
export default LightsScene2;