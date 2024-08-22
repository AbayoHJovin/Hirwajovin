import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

interface StarfieldProps {
  numStars?: number;
}

const Starfield: React.FC<StarfieldProps> = ({ numStars = 2000 }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const texture = useTexture("/circle.png");

  useEffect(() => {
    const geometry = pointsRef.current?.geometry;
    if (!geometry) return;

    const positions: number[] = [];
    const colors: number[] = [];

    for (let i = 0; i < numStars; i++) {
      const radius = Math.random() * 25 + 25;
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      positions.push(x, y, z);
      const col = new THREE.Color().setHSL(0.6, 0.2, Math.random());
      colors.push(col.r, col.g, col.b);
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  }, [numStars]);

  useFrame(() => {
    const time = Date.now() * 0.0001;
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += Math.sin(time + i) * 0.01;
        positions[i + 1] += Math.cos(time + i) * 0.01;
        positions[i + 2] += Math.sin(time + i) * 0.01;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      //   pointsRef.current.material.size = 0.2 + Math.sin(time * 10) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry />
      <pointsMaterial size={0.2} vertexColors map={texture} transparent />
    </points>
  );
};

export default Starfield;
