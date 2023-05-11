

const Experience = () => {
  return (
    <group>
        <mesh
            position-x ={2}
        >
            <boxGeometry/>
            <meshBasicMaterial color="mediumpurple" />
        </mesh>

        <mesh
            position-x ={-2}
        >
            <sphereGeometry />
            <meshBasicMaterial color="orange" />
        </mesh>

        <mesh rotation-x={ - Math.PI * 0.5 } position-y= {-1}  scale={15} >
            <planeGeometry  />
            <meshBasicMaterial color="green" />
        </mesh>
        </group>
  )
}

export default Experience