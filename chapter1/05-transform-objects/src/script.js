import * as THREE from 'three'

// position
// scale
// Length
// DistanceTo 
// Normalise
// Set
// Axes helper
// Rotation
// LookAt
// Group


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0xff0000})
)
const mesh2 = new THREE.Mesh(
    new THREE.SphereGeometry(1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00})
)

const group1 = new THREE.Group()
group1.position.set(1,1,-5)
group1.rotation.set(1,0.3,1)
group1.add(mesh)
group1.add(mesh2)
scene.add(group1)

const axesHelper = new THREE.AxesHelper(2,2,2)
scene.add(axesHelper)

mesh.position.set(2, 1, 0.5)

mesh.scale.set(0.5, 1, 1)
mesh.rotation.reorder('YZX')

mesh.rotation.set(1, 1, 0)

/**
 * Sizes
*/
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
*/
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(1, 1, 4)
scene.add(camera)


// console.log(mesh.position.distanceTo(camera.position))
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)