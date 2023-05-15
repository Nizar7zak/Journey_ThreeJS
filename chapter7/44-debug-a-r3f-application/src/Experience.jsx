import { OrbitControls } from '@react-three/drei'
import { button, useControls } from 'leva'
import { Perf } from 'r3f-perf'

export default function Experience()
{

    const { position: {x, y}, color, visible } = useControls('Hello Sphere', {
        position : {
            value: {x: -2, y: 1},
            step: 0.5,
            joystick: 'invertY',
        },
        color : '#ff0000',
        visible: true,
        myInterval: {
            min: -3,
            max: 3,
            value: [0, 1]
        },
        ClickMe: button(() => console.log("HELLO WORLD")),
        choices: {
            options: ['a', 'b', 'c']
        }
        
    })
    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh position={ [x , y, 0] } visible={visible}>
            <sphereGeometry />
            <meshStandardMaterial color={color} />
        </mesh>

        <mesh position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}