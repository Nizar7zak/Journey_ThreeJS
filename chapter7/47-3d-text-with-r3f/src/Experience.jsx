import { Center, Text3D, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'


export default function Experience()
{
    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />
        <Center>
            <Text3D 
                font={'./fonts/helvetiker_regular.typeface.json'}
                size={0.75}
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.02}
                bevelSize={0.02}
                bevelSegments={5}
                bevelOffset={0}
            >
                Hello Rf3
                <meshNormalMaterial />
            </Text3D>
        </Center>
        


    </>
}