// 📂src/pages/VirtualSpacePage.tsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Room from '../components/VirtualSpace/Room';
import FurnitureLoader from '../components/VirtualSpace/FurnitureLoader';
import React from 'react';

const VirtualSpacePage = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />

        {/* 방 구조 */}
        <Room />

        {/* 가구 로딩 */}
        <FurnitureLoader />
      </Canvas>
    </div>
  );
};

export default VirtualSpacePage;
