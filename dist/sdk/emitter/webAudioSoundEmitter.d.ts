import { SoundEmitter } from './soundEmitter';
export declare class WebAudioSoundEmitter implements SoundEmitter {
    emit(sound: ArrayBuffer): Promise<void>;
}
