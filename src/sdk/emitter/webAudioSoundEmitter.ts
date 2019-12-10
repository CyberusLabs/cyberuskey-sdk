import { SoundEmitter } from './soundEmitter';
import { OTPGenerationError } from '../errors';

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
      context = new (window['AudioContext'] || window['webkitAudioContext'])();
    } catch {

      throw new OTPGenerationError('otp_generation_failure', 'AudioContext is not supported');
    }

    const source = context.createBufferSource();

    context.decodeAudioData(sound, (decodedData) => {
      source.buffer = decodedData;
      source.connect(context.destination);
      source.start(0);
    });

    await (new Promise((resolve) => {
      source.onended = resolve;
    }));
  }
}

