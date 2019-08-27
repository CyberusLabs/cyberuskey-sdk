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
export class Session {
  /**
   * Session's unique identifier. It's valid up to 20s.
   *
   * @type {string}
   * @memberof Session
   */
  public sessionId: string;

  /**
   * A UTC date representing a date (and time) when a session has been created.
   *
   * @type {Date}
   * @memberof Session
   */
  public createdAt: Date;

  constructor(json: SessionResponse) {
    this.sessionId = json.session_id;
    this.createdAt = new Date(json.created_at);
  }
}