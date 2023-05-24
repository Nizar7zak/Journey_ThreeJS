import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { CuboidCollider, Debug, RigidBody, Physics } from '@react-three/rapier'
import { useRef } from 'react'
export default function Experience()
{   
    const cube = useRef()

    const handleJump = () => {
        cube.current.applyImpulse({ x: 0, y: 5, z: 0})
        cube.current.applyTorqueImpulse({ 
            x: Math.random() - 0.5,
            y: Math.random() - 0.5,
            z: Math.random() - 0.5
        })
    }
    return <>
        
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <Physics gravity={[ 0, -9.81, 0 ]}>
            <Debug />
            <RigidBody colliders='ball'>
                <mesh castShadow position={ [ -1.5, 2, 0 ] }>
                    <sphereGeometry />
                    <meshStandardMaterial color="orange" />
                </mesh>
            </RigidBody>

            <RigidBody ref={cube} gravityScale={1}>
                <mesh castShadow position={ [ 1.5, 2, 0 ] } onClick={handleJump} >
                    <boxGeometry />
                    <meshStandardMaterial color="mediumpurple" />
                </mesh>
            </RigidBody>


            {/* <RigidBody colliders={false} rotation-x={Math.PI * 0.5} position={ [ 0, 1, 0 ] }>
                <CuboidCollider args={[1.5, 1.5, 0.5]} />
                <CuboidCollider args={[1, 1, 1]} position={[ 0, 0, 1]} rotation={[ -Math.PI *0.35, 0, 0 ]} />
                <mesh 
                    castShadow
                >
                    <torusGeometry
                        args={[ 1, 0.5, 16, 32 ]}
                    />
                    <meshStandardMaterial color={'mediumpurple'} /> 
                </mesh>
            </RigidBody> */}

            <RigidBody type='fixed'>
                <mesh receiveShadow position-y={ - 1.25 }>
                    <boxGeometry args={ [ 10, 0.5, 10 ] } />
                    <meshStandardMaterial color="greenyellow" />
                </mesh>
            </RigidBody>

        </Physics>

    </>
}

//  value of colliders cuboid ball hull trimesh