import { SoundEmitter } from './soundEmitter';
/**
 * Class uses a HTML5's AudioContext interface to play a sound.
 * It has known issues with Safari. If you want to support Safari, then use `webAudioSoundEmitter`.
 *
 * @export
 * @class PromiseWebAudioSoundEmitter
 * @implements {SoundEmitter}
 */
export declare class PromiseWebAudioSoundEmitter implements SoundEmitter {
    /**
     * Emits a sound through HTML5's AudioContext interface.
     *
     * @param {ArrayBuffer} sound A binary record of the sound you want to play.
     * @returns {Promise<void>}
     * @memberof WebAudioSoundEmitter
     */
    emit(sound: ArrayBuffer): Promise<void>;
}
