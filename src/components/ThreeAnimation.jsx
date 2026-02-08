import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { Text } from 'troika-three-text'

function ThreeAnimation() {
  const mountRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Create canvas element
    const canvas = document.createElement('canvas')
    canvas.id = 'bg'
    mountRef.current.appendChild(canvas)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 692, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true
    })

    renderer.setPixelRatio(window.devicePixelRatio || 1)
    renderer.setSize(window.innerWidth, 692, false)
    camera.position.setZ(20)

    function resizeCanvasToDisplaySize() {
      const width = window.innerWidth
      const height = 692
      const pixelRatio = window.devicePixelRatio || 1

      renderer.setSize(width * pixelRatio, height * pixelRatio, false)
      renderer.domElement.style.width = `${width}px`
      renderer.domElement.style.height = `${height}px`

      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    resizeCanvasToDisplaySize()
    window.addEventListener('resize', resizeCanvasToDisplaySize)

    // Create text
    const myText = new Text()
    scene.add(myText)
    myText.text = 'Hello'
    myText.position.z = 17
    myText.position.x = -0.50
    myText.position.y = 0.93
    myText.color = 0xffffff
    myText.fontWeight = 'bold'
    myText.fontSize = 0.36
    myText.textAlign = 'justify'
    myText.font = '/Roboto-Bold.ttf'
    myText.letterSpacing = 0.01

    const myText1 = new Text()
    scene.add(myText1)
    myText1.text = 'OH na na na na na.'
    myText1.fontSize = 0.2
    myText1.position.z = 17
    myText1.position.x = -0.68
    myText1.position.y = 0.495
    myText1.color = 0xffffff
    myText1.fontSize = 0.125
    myText1.textAlign = 'justify'
    myText1.font = '/Roboto-Thin.ttf'
    myText.sync()
    myText1.sync()

    // Load models
    const loaderUFO = new GLTFLoader().setPath('/images/ufo/')
    let ufo
    const loaderCow = new GLTFLoader().setPath('/images/cow/')
    let cow
    const loaderBarn = new GLTFLoader().setPath('/images/barn/')
    let barn

    loaderUFO.load('scene.gltf', function (gltf) {
      ufo = gltf.scene
      ufo.scale.set(0.4, 0.5, 0.5)
      scene.add(ufo)
    }, undefined, function (error) { console.error(error) })

    loaderCow.load('scene.gltf', function (gltf) {
      cow = gltf.scene
      cow.scale.set(0.03, 0.03, 0.03)
      scene.add(cow)
    }, undefined, function (error) { console.error(error) })

    loaderBarn.load('scene.gltf', function (gltf) {
      barn = gltf.scene
      barn.scale.set(1, 1, 1)
      barn.position.set(0, -4, 13)
      scene.add(barn)
    }, undefined, function (error) { console.error(error) })

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
    ambientLight.position.set(10, 10, 10)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 10, 7.5)
    scene.add(directionalLight)

    // Stars
    function addStars() {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24)
      const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
      const star = new THREE.Mesh(geometry, material)

      const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(400))
      star.position.set(x, y, z)
      scene.add(star)
    }

    Array(300).fill().forEach(addStars)

    let cowVelocity = { x: -0.05, y: -0.05 }

    function updateMovementLimits() {
      const width = window.innerWidth
      const height = 692
      const rightLimit = width / 32
      const leftLimit = width / -32
      const hLimit = 15

      if (cow) {
        cow.position.x += cowVelocity.x
        cow.position.y += cowVelocity.y

        if (cow.position.x > rightLimit || cow.position.x < leftLimit) {
          cowVelocity.x = -cowVelocity.x
        }
        if (cow.position.y > hLimit || cow.position.y < -hLimit) {
          cowVelocity.y = -cowVelocity.y
        }
      }
    }

    const followSpeed = 0.04

    function followCow() {
      if (ufo && cow) {
        const direction = new THREE.Vector3(
          cow.position.x - ufo.position.x,
          cow.position.y - ufo.position.y,
          cow.position.z - ufo.position.z
        )

        direction.normalize()

        ufo.position.x += direction.x * followSpeed
        ufo.position.y += direction.y * followSpeed
      }
    }

    let xSpeed = -0.002
    let ySpeed = -0.005
    let zSpeed = -0.001

    function animate() {
      requestAnimationFrame(animate)
      if (barn) {
        if (barn.rotation.x > 0.90 || barn.rotation.x < -0.60) {
          xSpeed = -xSpeed
        }
        if (barn.rotation.z > 0.80 || barn.rotation.z < -0.80) {
          zSpeed = -zSpeed
        }
        barn.rotation.x += xSpeed
        barn.rotation.y += ySpeed
        barn.rotation.z += zSpeed
      }
      if (cow) {
        cow.rotation.x += 0.02
        cow.rotation.y += 0.005
        cow.rotation.z += 0.01
      }

      if (ufo) {
        if (ufo.rotation.x > 0.50 || ufo.rotation.x < -0.50) {
          xSpeed = -xSpeed
        }
        ufo.rotation.x += xSpeed
        ufo.rotation.y += 0.02
      }
      updateMovementLimits()
      followCow()

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvasToDisplaySize)
      renderer.dispose()
      if (mountRef.current && canvas) {
        mountRef.current.removeChild(canvas)
      }
    }
  }, [])

  return (
    <header id="anim">
      <div ref={mountRef}></div>
    </header>
  )
}

export default ThreeAnimation
