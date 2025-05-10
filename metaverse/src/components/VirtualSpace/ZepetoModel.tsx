// 📂src/components/VirtualSpace/ZepetoModel.tsx
import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { DragControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

interface ZepetoModelProps {
  modelUrl: string;
  position: [number, number, number];
}

const ZepetoModel: React.FC<ZepetoModelProps> = ({ modelUrl, position }) => {
  const gltf = useLoader(GLTFLoader, modelUrl);
  const modelRef = useRef<THREE.Group>(null);
  const dragControls = useRef<any>(null);
  const [isDragging, setIsDragging] = useState(false);

  useFrame(() => {
    if (!isDragging && modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });

  // 드래그 이벤트 핸들러
  const handleDragStart = () => {
    console.log("🔹 Drag Start");
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    console.log("🔹 Drag End");
    setIsDragging(false);
  };

  useEffect(() => {
    if (dragControls.current) {
      dragControls.current.addEventListener('dragstart', handleDragStart);
      dragControls.current.addEventListener('dragend', handleDragEnd);
    }
    return () => {
      if (dragControls.current) {
        dragControls.current.removeEventListener('dragstart', handleDragStart);
        dragControls.current.removeEventListener('dragend', handleDragEnd);
      }
    };
  }, []);

  return (
    <>
      <DragControls ref={dragControls}>
        <primitive
          object={gltf.scene}
          ref={modelRef}
          position={position}
        />
      </DragControls>
    </>
  );
};

export default ZepetoModel;
