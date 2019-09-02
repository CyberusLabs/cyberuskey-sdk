/**
 * Class describes an available interface able to play a sound.
 *
 * @export
 * @interface SoundEmitter
 */
export interface SoundEmitter {
    emit(sound: ArrayBuffer): Promise<void>;
}
