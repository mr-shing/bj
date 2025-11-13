'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const ThreeCanvas = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);

  useEffect(() => {
    if (!mountRef.current || sceneRef.current) return;

    const currentMount = mountRef.current;
    
    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 3.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    currentMount.appendChild(renderer.domElement);

    const baseMaterialProps = {
      metalness: 0,
      roughness: 0,
      ior: 1.7,
      transmission: 1, // This makes it glassy
      thickness: 1.8,
      transparent: true,
      opacity: 1,
      envMapIntensity: 1.5
    };

    const materials = [
        new THREE.MeshPhysicalMaterial({ ...baseMaterialProps, roughness: 0.05 }), // Diamond - Glassy
        new THREE.MeshPhysicalMaterial({ ...baseMaterialProps, color: 0xADD8E6 }), // Light Blue
        new THREE.MeshPhysicalMaterial({ ...baseMaterialProps, color: 0x87CEEB }), // Sky Blue
        new THREE.MeshPhysicalMaterial({ ...baseMaterialProps, color: 0x4169E1 }), // Royal Blue
        new THREE.MeshPhysicalMaterial({ ...baseMaterialProps, color: 0x9370DB }), // Medium Purple
    ];
    
    const diamond = new THREE.Mesh(new THREE.IcosahedronGeometry(1.2, 1), materials[0]);
    
    const group = new THREE.Group();
    group.add(diamond);

    const smallerShapes: THREE.Mesh[] = [];
    const geometries = [
        new THREE.OctahedronGeometry(0.2, 0),
        new THREE.IcosahedronGeometry(0.18, 0),
        new THREE.DodecahedronGeometry(0.15, 0)
    ];

    const frustum = new THREE.Frustum();
    const projScreenMatrix = new THREE.Matrix4();
    projScreenMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    frustum.setFromProjectionMatrix(projScreenMatrix);

    const viewHeight = Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * camera.position.z * 2;
    const viewWidth = viewHeight * camera.aspect;


    for (let i = 0; i < 25; i++) {
        const geometry = geometries[i % geometries.length];
        const material = materials[i % materials.length];
        const mesh = new THREE.Mesh(geometry, material);
        
        mesh.position.set(
            (Math.random() - 0.5) * viewWidth * 1.5,
            (Math.random()) * viewHeight * 1.5,
            (Math.random() - 0.5) * 5
        );
        
        mesh.userData.speed = Math.random() * 0.075 + 0.025; // Halved speed
        mesh.userData.rotationSpeed = Math.random() * 0.01 + 0.005;

        group.add(mesh);
        smallerShapes.push(mesh);
    }
    
    scene.add(group);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xffffff, 100, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const directionalLight = new THREE.DirectionalLight(0xADD8E6, 3); // A light blueish light
    directionalLight.position.set(-10, -5, 10);
    scene.add(directionalLight);

    const backLight = new THREE.PointLight(0x87CEEB, 80, 100); // A sky blue backlight
    backLight.position.set(0, 0, -10);
    scene.add(backLight);


    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    document.addEventListener('mousemove', onMouseMove, false);

    let scrollY = window.scrollY;
    let scrollTarget = 0;

    const onScroll = () => {
      scrollTarget = window.scrollY;
    }
    window.addEventListener('scroll', onScroll);


    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      scrollY += (scrollTarget - scrollY) * 0.1;
      const scrollRatio = scrollY / (document.body.scrollHeight - window.innerHeight);

      // Rotate the diamond based on time
      diamond.rotation.y += 0.003;
      diamond.rotation.x += 0.002;
      
      // Animate smaller shapes like rain
      const fallBoundary = -viewHeight / 1.5;
      const startBoundary = viewHeight / 1.5;

      smallerShapes.forEach((mesh) => {
        mesh.position.y -= mesh.userData.speed * 0.05;

        if (mesh.position.y < fallBoundary) {
            mesh.position.y = startBoundary;
            mesh.position.x = (Math.random() - 0.5) * viewWidth * 1.5;
        }

        mesh.rotation.x += mesh.userData.rotationSpeed;
        mesh.rotation.y += mesh.userData.rotationSpeed;
      });

      // Mouse follow effect on group
      group.rotation.y += (mouseX * 0.5 - group.rotation.y) * 0.05;
      group.rotation.x += (mouseY * 0.5 - group.rotation.x) * 0.05;

      // Camera position based on scroll (subtle movement)
      camera.position.y = -scrollRatio * 1.5;

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      materials.forEach(m => m.dispose());
      diamond.geometry.dispose();
      geometries.forEach(g => g.dispose());
      sceneRef.current = null;
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" aria-label="Interactive 3D animation of a rotating diamond shape"/>;
};

export default ThreeCanvas;
