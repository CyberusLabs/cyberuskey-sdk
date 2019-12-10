"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
/**
 * Class uses a HTML5's AudioContext interface to play a sound.
 * It has known issues with Safari. If you want to support Safari, then use `webAudioSoundEmitter`.
 *
 * @export
 * @class PromiseWebAudioSoundEmitter
 * @implements {SoundEmitter}
 */
class PromiseWebAudioSoundEmitter {
    /**
     * Emits a sound through HTML5's AudioContext interface.
     *
     * @param {ArrayBuffer} sound A binary record of the sound you want to play.
     * @returns {Promise<void>}
     * @memberof WebAudioSoundEmitter
     */
    emit(sound) {
        return __awaiter(this, void 0, void 0, function* () {
            let context;
            try {
                context = new AudioContext();
            }
            catch (_a) {
                throw new errors_1.OTPGenerationError('otp_generation_failure', 'AudioContext is not supported');
            }
            const audioBuffer = yield context.decodeAudioData(sound);
            const source = context.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(context.destination);
            yield (new Promise((resolve) => {
                source.onended = resolve;
                source.start(0);
            }));
        });
    }
}
exports.PromiseWebAudioSoundEmitter = PromiseWebAudioSoundEmitter;
//# sourceMappingURL=promiseWebAudioSoundEmitter.js.map