import React from 'react';

const Room = () => {
  return (
    <>
      {/* 바닥 */}
      <mesh position={[0, -0.5, 0]} receiveShadow>
        <boxGeometry args={[10, 0.1, 10]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>

      {/* 벽 */}
      <mesh position={[0, 2.5, -5]}>
        <planeGeometry args={[10, 5]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>

      <mesh position={[0, 2.5, 5]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[10, 5]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>

      <mesh position={[-5, 2.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[10, 5]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>
    </>
  );
};

export default Room;
