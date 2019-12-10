import { SoundEmitter } from './soundEmitter';
import { OTPGenerationError } from '../errors';

/**
 * Class uses a HTML5's AudioContext interface to play a sound.
 * It has known issues with Safari. If you want to support Safari, then use `webAudioSoundEmitter`.
 *
 * @export
 * @class PromiseWebAudioSoundEmitter
 * @implements {SoundEmitter}
 */
export class PromiseWebAudioSoundEmitter implements SoundEmitter {

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
        } catch {

            throw new OTPGenerationError('otp_generation_failure', 'AudioContext is not supported');
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
