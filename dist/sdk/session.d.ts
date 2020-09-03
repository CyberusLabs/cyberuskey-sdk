export interface SessionResponse {
    session_id: string;
    created_at: string;
}
/**
 * Data class representing a Cyberus Key session.
 *
 * @export
 * @class Session
 */
export declare class Session {
    /**
     * Session's unique identifier. It's valid up to 20s.
     *
     * @type {string}
     * @memberof Session
     */
    sessionId: string;
    /**
     * A UTC date representing a date (and time) when a session has been created.
     *
     * @type {Date}
     * @memberof Session
     */
    createdAt: Date;
    constructor(json: SessionResponse);
}
