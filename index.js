import 'style.css'
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {Text} from 'troika-three-text'


// to start a 3d project we need three things. concienvient huh. we need a scene, camera, and renderer
function initializeAnimation() {
    // Ensure the canvas element is available
    const canvas = document.getElementById('bg');
    if (!canvas) {
        console.error('Canvas not found');
        return;
    }
//lets start our scene, camrea, and location of animation, and some light
    const scene = new THREE.Scene(); //this is like acontianer tha will hold all of our images, and things
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 692, 0.1, 1000); // this is what mimicke the POV and gives us our eye balls!!// pars (fov, then we need aspect ratio. thats how we calcualte., then last paramter is view fustrum ahdn it deinfes what the person can. 3d demonsional space. )
    const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),

    }); // rneder tht graphics to the scnene. this is where we pout our canvas


    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setSize(window.innerWidth, 692, false);
    camera.position.setZ(20);// Set camera position


    // Resize the canvas and adjust the camera's aspect ratio when the window is resized
    function resizeCanvasToDisplaySize() {
    const width = window.innerWidth;
    const height = 692; 
    const pixelRatio = window.devicePixelRatio || 1 ;

    renderer.setSize(width * pixelRatio, height * pixelRatio, false);
    renderer.domElement.style.width = `${width}px`;
    renderer.domElement.style.height = `${height}px`;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    //console.log(width)
    }

    resizeCanvasToDisplaySize();
    window.addEventListener('resize', resizeCanvasToDisplaySize);


    // Create:
    const myText = new Text()
    scene.add(myText)
    // Set properties to configure:
    myText.text = "Hello"
    myText.position.z = 17
    myText.position.x = -0.50
    myText.position.y = 0.93
    myText.color = 0xffffff
    myText.fontWeight = "bold"
    myText.fontSize = 0.36
    myText.textAlign = 'justify'
    myText.font = "./Roboto-Bold.ttf"
    myText.letterSpacing = 0.01

    const myText1 = new Text()
    scene.add(myText1)
    // Set properties to configure:
    myText1.text = "This is why I love build"
    myText1.fontSize = 0.2
    myText1.position.z = 17
    myText1.position.x = -0.68
    myText1.position.y = 0.495
    myText1.color = 0xffffff
    myText1.fontSize = 0.125
    myText1.textAlign = 'justify'
    myText1.font = "Roboto-Thin.ttf"
    // Update the rendering:
    myText.sync()
    myText1.sync()



    const loaderUFO = new GLTFLoader().setPath("./images/ufo/");
    let ufo;
    const loaderCow = new GLTFLoader().setPath("./images/cow/");
    let cow;
    const loaderBarn = new GLTFLoader().setPath("./images/barn/");
    let barn;

    loaderUFO.load( 'scene.gltf', function ( gltf ) {
    ufo = gltf.scene;
    ufo.scale.set(0.4, 0.5, 0.5);
    
        scene.add(ufo);
    
    }, undefined, function ( error ) {console.error( error );});

    loaderCow.load( 'scene.gltf', function ( gltf ) {
    cow = gltf.scene;
    cow.scale.set(0.03,0.03,0.03);
        scene.add(cow);

    }, undefined, function ( error ) {console.error( error );});

    loaderBarn.load( 'scene.gltf', function ( gltf ) {
    barn = gltf.scene;
    barn.scale.set(1,1,1);
    barn.position.set(0,-4,13);

        scene.add(barn);

    }, undefined, function ( error ) {console.error( error );});

    //ambient ligths up the whoel casnvas
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2); //the ) 0x before a numebr is the hexadecimal literal. it tells js that you are goign to write a hexadecimal
    ambientLight.position.set(10,10,10);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // White light with intensity 1
    directionalLight.position.set(5, 10, 7.5); // Position the light source
    scene.add(directionalLight);

    function addStars() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial( {color:0xffffff});
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(()=>THREE.MathUtils.randFloatSpread(400)); //this maps the array of three vlaues toa rnadom numerb ebtween 0 and 100
    star.position.set(x,y,z);
    scene.add(star);
    }

    Array(300).fill().forEach(addStars);

    // const spaceTexture = new THREE.TextureLoader().load("images/space.jpg");
    // scene.background = spaceTexture;
    let cowVelocity = { x: -0.05, y: -0.05 };

    function updateMovementLimits() {
    const width = window.innerWidth;
    const height = 692; 
    const rightLimit = width / 32;
    const leftLimit = width / -32;
    const hLimit = 15;

    if (cow) {
        cow.position.x += cowVelocity.x;
        cow.position.y += cowVelocity.y;

        if (cow.position.x > rightLimit || cow.position.x < leftLimit) {
        cowVelocity.x = -cowVelocity.x; 
        }
        if (cow.position.y > hLimit || cow.position.y < -hLimit) {
        cowVelocity.y = -cowVelocity.y; 
    }
    }


    // Check if UFO is loaded before applying movement limits
    // if (cow) {
    // cow.position.set(-width / 32,0,0);
    // console.log(ufo.position.x)
    // }
    }

    const followSpeed = 0.04;

    function followCow() { //chat gpt :/
    if (ufo && cow) {
        // Calculate the direction vector from UFO to Cow
        const direction = new THREE.Vector3(
        cow.position.x - ufo.position.x,
        cow.position.y - ufo.position.y,
        cow.position.z - ufo.position.z
        );

        // Normalize the direction vector to get the direction
        direction.normalize();

        // Move UFO towards the Cow
        ufo.position.x += direction.x * followSpeed;
        ufo.position.y += direction.y * followSpeed;
    }
    }
    let xSpeed = -0.002;
    let ySpeed = -0.005;
    let zSpeed = -0.001;
    function animate(){
    requestAnimationFrame(animate);
    if (barn) {
        if (barn.rotation.x > 0.90 || barn.rotation.x < -0.60){
        xSpeed = -xSpeed;
        }
        if (barn.rotation.z > 0.80 || barn.rotation.z < -0.80){
        zSpeed = -zSpeed;
        }
        barn.rotation.x += xSpeed;
        barn.rotation.y += ySpeed;
        barn.rotation.z += zSpeed;    
    }
    if (cow) {
        cow.rotation.x += 0.02;
        cow.rotation.y += 0.005;
        cow.rotation.z += 0.01;
    }
    
    if(ufo){
        if (ufo.rotation.x > 0.50 || ufo.rotation.x < -0.50){
        xSpeed = -xSpeed;
        }
        ufo.rotation.x += xSpeed;
        ufo.rotation.y += 0.02;

    }
    updateMovementLimits();
    followCow();

    renderer.render(scene, camera);
    } //this will rerun the animation every time. this is like a game loop


    animate();
}




function setup() {
    // Add event listener to detect when content changes
    document.addEventListener('DOMContentLoaded', () => {
        const targetCanvas = document.querySelector('#bg');
        if (targetCanvas) {
            initializeAnimation();
        }
    });

    // Use MutationObserver to detect changes and reinitialize animation if needed
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                initializeAnimation();
            }
        });
    });

    // Observe the target node for changes
    const targetNode = document.getElementById('opener');
    if (targetNode) {
        observer.observe(targetNode, { childList: true });
    }
}

setup();