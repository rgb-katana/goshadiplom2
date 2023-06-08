import React, { useState, useEffect } from 'react';
import './SynthPlugin.css'

// Создаем контекст Web Audio API
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Создаем осциллятор и гейн
const audioSource = audioContext.createBufferSource();
const gainNode = audioContext.createGain();

fetch('/sound/1.mp3')
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
  .then(audioBuffer => {
    audioSource.buffer = audioBuffer;
    audioSource.start();
  });

// Создаем узлы для эффектов
const delayNode = audioContext.createDelay();
const convolverNode = audioContext.createConvolver();
const waveShaperNode = audioContext.createWaveShaper();

// Подключаем осциллятор к гейну, а гейн к эффектам и выходу
audioSource.connect(gainNode);
gainNode.connect(delayNode);
delayNode.connect(convolverNode);
convolverNode.connect(waveShaperNode);
waveShaperNode.connect(audioContext.destination);

// Создаем набор пресетов
const presets = {
  preset1: { frequency: 440, type: 'sine', gain: 0.5 },
  preset2: { frequency: 880, type: 'square', gain: 0.3 },
  // ...
};

function SynthPlugin() {
  const [currentPreset, setCurrentPreset] = useState(presets.preset1);
  const [delayTime, setDelayTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDelayOn, setIsDelayOn] = useState(false);
  const [isReverbOn, setIsReverbOn] = useState(false);
  const [isDistortionOn, setIsDistortionOn] = useState(false);

  useEffect(() => {
    // Загружаем импульсную респонсивность для реверберации
    fetch('https://www.wolframcloud.com/obj/6c9fea46-7200-494c-b5dc-89c9bd309e02')
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
      .then(audioBuffer => {
        convolverNode.buffer = audioBuffer;
      });

    // Создаем кривую перегрузки для дисторшна
    const curve = new Float32Array(4096);
    for (let i = 0; i < 4096; i++) {
      curve[i] = (3 * i / 4096 - 1.5) / (1 - Math.abs(3 * i / 4096 - 1.5));
    }
    waveShaperNode.curve = curve;
    waveShaperNode.oversample = '4x';

    // Запускаем осциллятор
    audioSource.start();
  }, []);

  // Функция для изменения пресета
  const changePreset = (presetName) => {
    setCurrentPreset(presets[presetName]);
    // Применяем параметры пресета к осциллятору и гейну
    audioSource.frequency.value = presets[presetName].frequency;
    audioSource.type = presets[presetName].type;
    gainNode.gain.value = presets[presetName].gain;
  };

  // Функция для изменения времени задержки
  const changeDelayTime = (event) => {
    const newDelayTime = parseFloat(event.target.value);
    setDelayTime(newDelayTime);
    delayNode.delayTime.value = newDelayTime;
  };

  // Функция для включения/выключения осциллятора
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioSource.disconnect(audioContext.destination);
    } else {
      audioSource.connect(audioContext.destination);
      // Запускаем воспроизведение только после того, как пользователь нажал кнопку
      audioSource.start();
    }
  }

  // Функции для включения/выключения эффектов
  const toggleDelay = () => {
    setIsDelayOn(!isDelayOn);
    if (isDelayOn) {
      gainNode.disconnect(delayNode);
      gainNode.connect(audioContext.destination);
    } else {
      gainNode.disconnect(audioContext.destination);
      gainNode.connect(delayNode);
    }
  };
  
  const toggleReverb = () => {
    setIsReverbOn(!isReverbOn);
    if (isReverbOn) {
      delayNode.disconnect(convolverNode);
      delayNode.connect(audioContext.destination);
    } else {
      delayNode.disconnect(audioContext.destination);
      delayNode.connect(convolverNode);
    }
  };
  
  const toggleDistortion = () => {
    setIsDistortionOn(!isDistortionOn);
    if (isDistortionOn) {
      convolverNode.disconnect(waveShaperNode);
      convolverNode.connect(audioContext.destination);
    } else {
      convolverNode.disconnect(audioContext.destination);
      convolverNode.connect(waveShaperNode);
    }
  };
  

  return (
    <div className="container">
      <h1 className="title">Web VST Synth Plugin</h1>
      <div className="controls">
        <button className="button" onClick={() => changePreset('preset1')}>Preset 1</button>
        <button className="button" onClick={() => changePreset('preset2')}>Preset 2</button>
        <div>
        <label>Delay Time: </label>
        <input className="slider" type="range" min="0" max="1" step="0.01" value={delayTime} onChange={changeDelayTime} />
      </div>
        <button className="button" onClick={togglePlay}>{isPlaying ? 'Stop' : 'Play'}</button>
        <div className='functions'>
        <button className="function-button" onClick={toggleDelay}>{isDelayOn ? 'Disable Delay' : 'Enable Delay'}</button>
      <button className="function-button" onClick={toggleReverb}>{isReverbOn ? 'Disable Reverb' : 'Enable Reverb'}</button>
      <button className="function-button" onClick={toggleDistortion}>{isDistortionOn ? 'Disable Distortion' : 'Enable Distortion'}</button>
        </div>
      </div>
    </div>
  );
}

export default SynthPlugin;
