import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Vignette, EffectComposer, Glitch, Noise, Bloom } from '@react-three/postprocessing'
import { GlitchMode, BlendFunction } from 'postprocessing'


// npm i @react-three/postprocessing@2.6
export default function Experience()
{
    return <>
        <color args={['#000000']} attach="background" />
        <EffectComposer >
            {/* <Vignette 
                offset={0.3}
                darkness={0.9}
                blendFunction={BlendFunction.NORMAL}
            /> */}
            {/* <Glitch 
                delay={[0.5, 1]}
                duration={[ 0.1, 0.3]}
                strength={[0.2, 0.4]}
                mode={GlitchMode.CONSTANT_WILD}
            /> */}
            {/* <Noise 
                premultiply
                blendFunction={BlendFunction.SOFT_LIGHT}
            /> */}
            <Bloom 
                mipmapBlur
                intensity={0.1}
                luminanceThreshold={0}

            />
        </EffectComposer>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh castShadow position-x={ - 2 }>
            <sphereGeometry />
            <meshBasicMaterial color="orange" toneMapped={false} />
        </mesh>

        <mesh castShadow position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshBasicMaterial color={[ 1.5 * 10, 1 * 10, 4 * 10]} toneMapped={false} />
        </mesh>

        <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}