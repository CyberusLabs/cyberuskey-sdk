import { SoundEmitter } from './soundEmitter';

export class WebAudioSoundEmitter implements SoundEmitter {
  async emit(sound: ArrayBuffer): Promise<void> {
    let context: AudioContext;

    try {
      context = new AudioContext();
    } catch(e) {
      console.error('AudioContext is not supported.');
      
      throw e;
    }

    const audioBuffer = await context.decodeAudioData(sound);
    const source = context.createBufferSource();

    source.buffer = audioBuffer;

    source.connect(context.destination);
    
    await (new Promise((resolve) => {
      source.onended = resolve;
      source.start(0);
    }));
  }
}