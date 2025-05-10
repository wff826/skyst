// 📂src/components/VirtualSpace/FurnitureLoader.tsx
import React, { useEffect, useState, useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DragControls } from '@react-three/drei';
import * as THREE from 'three';
import { fetchUserFurniture } from '../../api/zepetoApi';

const FurnitureLoader: React.FC = () => {
  const [furnitureList, setFurnitureList] = useState<any[]>([]);
  const groupRef = useRef<THREE.Group>(null);
  const dragControls = useRef<any>(null);

  // Zepeto API에서 가구 불러오기
  useEffect(() => {
    const loadFurniture = async () => {
      const items = await fetchUserFurniture();
      setFurnitureList(items);
    };
    loadFurniture();
  }, []);

  // DragControls 이벤트 설정
  useEffect(() => {
    if (dragControls.current && groupRef.current) {
      dragControls.current.objects = groupRef.current.children;
    }
  }, [furnitureList]);

  return (
    <group ref={groupRef}>
      <DragControls ref={dragControls} />
      {furnitureList.map((furniture, index) => (
        <primitive
          key={index}
          object={useLoader(GLTFLoader, furniture.modelUrl)}
          position={[Math.random() * 5, 0.5, Math.random() * 5]}
          castShadow
        />
      ))}
    </group>
  );
};

export default FurnitureLoader;
