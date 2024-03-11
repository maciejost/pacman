"use client";

import { useEffect } from "react";
import GameCoordinator from "./core/gameCoordinator";

export const Game = () => {
  useEffect(() => {
    const gameCoordinator = new GameCoordinator();
  }, []);
  return <></>;
};
