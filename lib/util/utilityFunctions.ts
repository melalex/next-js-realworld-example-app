import { MouseEventHandler } from "react";

export function handleAndPreventDefault<T = Element>(
  fun: () => void
): MouseEventHandler<T> {
  return (e) => {
    e.preventDefault();
    e.stopPropagation();
    fun();
  };
}
