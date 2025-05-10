// pages/VoiceRecordingPage.jsx
import React from 'react';
import AudioRecorder from '../components/AudioRecorder';
import axios from 'axios';

const VoiceRecordingPage = () => {
  // 🔥 여기서 handleSave 함수를 정의
  const handleSave = async (audioBlob) => {
    console.log("[🔍 오디오 Blob 생성됨]: ", audioBlob);

    const formData = new FormData();
    formData.append('file', audioBlob, `recording_${Date.now()}.wav`);

    try {
      console.log("[🚀 업로드 시작] 백엔드로 전송 중...");

      const userId = "example-user-id"; // 유저 ID, 실제로는 로그인된 유저 정보
      const response = await axios.post(`https://likelion-yonsei.shop/upload-audio/${userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          console.log(`[📡 업로드 진행 중]: ${percentCompleted}%`);
        },
      });

      if (response.status === 200) {
        console.log('✅ [업로드 성공]:', response.data);
      } else {
        console.error('❌ [업로드 실패]');
      }
    } catch (error) {
      console.error('[❌ 업로드 중 에러 발생]:', error.message);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Voice Recording</h1>
      <AudioRecorder onSave={handleSave} />  {/* 🔥 여기서 handleSave를 넘김 */}
    </div>
  );
};

export default VoiceRecordingPage;
