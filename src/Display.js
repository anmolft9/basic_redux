import React from "react";
import { useSelector } from "react-redux";

export const Display = () => {
  const { counter } = useSelector((state) => state.counter);

  return <div className="display">{counter}</div>;
};
