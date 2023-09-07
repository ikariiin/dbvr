import { apiConfig } from "../api";

export class WsService {
  private ws: WebSocket;

  constructor(private readonly id: string) {
    const url = new URL(apiConfig.API_BASE);
    const { protocol, host } = url;
    const wsProtocol = protocol === "https:" ? "wss:" : "ws:";

    this.ws = new WebSocket(`${wsProtocol}//${host}/ws/connect/${id}`);
  }

  public send() {
    // TODO: implement
  }
}
