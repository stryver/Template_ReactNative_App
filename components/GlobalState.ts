import { useEffect } from "react";
type readKey =
  | "account"
  | "navigator"
  | "notification"
  | "secondaries"
  | "pain"
  | "weight"
  | "oppeningNotification";

let data: Object = new Object();

export default class State {
  public static read<T = any>(key: readKey): T {
    // @ts-ignore
    return data[key];
  }

  public static write<T>(key: readKey, value: T): void {
    // @ts-ignore
    data[key] = value;
  }

  public static delete<T>(key: readKey): void {
    // @ts-ignore
    delete data[key];
  }
}

export const useGlobalState = (key: readKey, action: () => void) => {
  useEffect(() => {
    action();
  }, [data[key]]);
};
