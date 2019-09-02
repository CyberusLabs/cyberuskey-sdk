import { SoundEmitter } from './soundEmitter';

/**
 * Class uses a HTML5's AudioContext interface to play a sound.
 *
 * @export
 * @class WebAudioSoundEmitter
 * @implements {SoundEmitter}
 */
export class WebAudioSoundEmitter implements SoundEmitter {
  /**
   * Emits a sound through HTML5's AudioContext interface.
   *
   * @param {ArrayBuffer} sound A binary record of the sound you want to play.
   * @returns {Promise<void>}
   * @memberof WebAudioSoundEmitter
   */
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