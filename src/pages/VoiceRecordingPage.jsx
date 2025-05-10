import React from 'react';
import AudioRecorder from '../components/AudioRecorder';

const VoiceRecordingPage = () => {
  const handleSave = (audioBlob) => {
    console.log("[🔍 Audio Blob]: ", audioBlob);
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Voice Recording</h1>
      <AudioRecorder onSave={handleSave} />
    </div>
  );
};

export default VoiceRecordingPage;