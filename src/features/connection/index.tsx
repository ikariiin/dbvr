import { useCallback, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import { WsService } from "@/services/ws";

export function Connection() {
  const { id } = useParams<{ id: string }>();

  const wsServiceRef = useRef<WsService | null>(null);

  const websocketInit = useCallback(() => {
    if (!id) return;

    const wsService = new WsService(id);

    wsServiceRef.current = wsService;
  }, [id]);

  useEffect(websocketInit, [websocketInit]);

  if (!id) {
    throw new Error("Connection ID is required");
  }

  return <div className="h-full w-full">connection page {id}</div>;
}
