import { SoundEmitter } from './soundEmitter';

/**
 * Class uses a HTML5's AudioContext interface to play a sound.
 *
 * @export
 * @class WebAudioSoundEmitter
 * @implements {SoundEmitter}
 */
export class WebAudioSoundEmitter implements SoundEmitter {

  // private _soundPlayingDone: boolean = false;
  /**
   * Emits a sound through HTML5's AudioContext interface.
   *
   * @param {ArrayBuffer} sound A binary record of the sound you want to play.
   * @returns {Promise<void>}
   * @memberof WebAudioSoundEmitter
   */
  // constructor(soundPlayingDone: boolean) {
  //   this._soundPlayingDone = soundPlayingDone;
  // }

  async emit(sound: ArrayBuffer): Promise<void> {
    let context: AudioContext;

    try {
      context = new (window['AudioContext'] || window['webkitAudioContext'])();
    } catch (e) {
      console.error('AudioContext is not supported.');

      throw e;
    }
    const source = context.createBufferSource();

    context.decodeAudioData(sound, (decodedData) => {
      source.buffer = decodedData;
      source.connect(context.destination);
      source.start(0);
    },
    (error) => {
      console.error('Error with decoding audio data');
      throw error;
    }
    );
    await (new Promise((resolve) => {
      source.onended = resolve;
    }));
  }
}
