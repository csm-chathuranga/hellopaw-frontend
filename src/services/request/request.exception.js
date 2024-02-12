export default class RequestException {
  constructor(message, status = 500, data = {}) {
    this.message = message;
    this.name = this.constructor.name;
    this.status = status;
    this.data = data;
  }
}
