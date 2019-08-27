export interface SoundEmitter {
    emit(sound: ArrayBuffer): Promise<void>;
}
