"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.z = 4.65;

    // WebGL may be unavailable (hardware acceleration off, GPU sandbox failures,
    // some Chrome configs). The globe is decorative — never let it crash the page.
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, failIfMajorPerformanceCaveat: false });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    group.position.x = 0.15;
    scene.add(group);

    const globeGeometry = new THREE.SphereGeometry(1.38, 112, 112);
    const globeMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#103141"),
      metalness: 0.2,
      roughness: 0.28,
      emissive: new THREE.Color("#123f50"),
      emissiveIntensity: 0.62,
      wireframe: true
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    group.add(globe);

    const core = new THREE.Mesh(
      new THREE.SphereGeometry(1.3, 80, 80),
      new THREE.MeshBasicMaterial({
        color: "#58f6ff",
        transparent: true,
        opacity: 0.09
      })
    );
    group.add(core);

    const halo = new THREE.Mesh(
      new THREE.SphereGeometry(1.52, 80, 80),
      new THREE.MeshBasicMaterial({
        color: "#58f6ff",
        transparent: true,
        opacity: 0.075,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
    );
    group.add(halo);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: "#b6ff68",
      transparent: true,
      opacity: 0.52,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const ringOne = new THREE.Mesh(new THREE.TorusGeometry(1.78, 0.009, 18, 190), ringMaterial);
    ringOne.rotation.x = Math.PI / 2.8;
    ringOne.rotation.y = Math.PI / 7;
    group.add(ringOne);

    const ringTwo = new THREE.Mesh(new THREE.TorusGeometry(2.08, 0.006, 18, 210), ringMaterial.clone());
    ringTwo.material.opacity = 0.3;
    ringTwo.rotation.x = Math.PI / 1.9;
    ringTwo.rotation.z = Math.PI / 5;
    group.add(ringTwo);

    const latitudeMaterial = new THREE.LineBasicMaterial({
      color: "#58f6ff",
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending
    });
    const latitudeGeometries: THREE.BufferGeometry[] = [];
    for (let i = -2; i <= 2; i += 1) {
      const radius = Math.sqrt(1.86 - i * i * 0.2);
      const geometry = new THREE.BufferGeometry().setFromPoints(
        new THREE.EllipseCurve(0, 0, radius, radius, 0, Math.PI * 2)
          .getPoints(160)
          .map((point) => new THREE.Vector3(point.x, i * 0.22, point.y))
      );
      latitudeGeometries.push(geometry);
      const latitude = new THREE.Line(
        geometry,
        latitudeMaterial
      );
      group.add(latitude);
    }

    const particlesGeometry = new THREE.BufferGeometry();
    const count = 680;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 1.8 + Math.random() * 1.65;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({
        color: "#bffaff",
        size: 0.014,
        transparent: true,
        opacity: 0.86,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
    );
    group.add(particles);

    const ambient = new THREE.AmbientLight("#b7f7ff", 1.45);
    scene.add(ambient);
    const key = new THREE.PointLight("#58f6ff", 36, 12);
    key.position.set(3, 2.4, 4);
    scene.add(key);
    const lime = new THREE.PointLight("#b6ff68", 14, 12);
    lime.position.set(-3, -2, 2);
    scene.add(lime);
    const rim = new THREE.PointLight("#ffffff", 10, 10);
    rim.position.set(-1.8, 1.8, -2);
    scene.add(rim);

    const handleResize = () => {
      if (!mount) return;
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    let frame = 0;
    const animateScene = () => {
      frame = requestAnimationFrame(animateScene);
      group.rotation.y += 0.0021;
      globe.rotation.x += 0.00055;
      core.rotation.y -= 0.001;
      halo.scale.setScalar(1 + Math.sin(Date.now() * 0.0012) * 0.018);
      particles.rotation.y -= 0.00075;
      ringOne.rotation.z += 0.00145;
      ringTwo.rotation.z -= 0.001;
      renderer.render(scene, camera);
    };
    animateScene();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
      globeGeometry.dispose();
      globeMaterial.dispose();
      core.geometry.dispose();
      (core.material as THREE.Material).dispose();
      halo.geometry.dispose();
      (halo.material as THREE.Material).dispose();
      ringOne.geometry.dispose();
      ringMaterial.dispose();
      ringTwo.geometry.dispose();
      (ringTwo.material as THREE.Material).dispose();
      latitudeGeometries.forEach((geometry) => geometry.dispose());
      latitudeMaterial.dispose();
      particlesGeometry.dispose();
      (particles.material as THREE.Material).dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" aria-hidden="true" />;
}
