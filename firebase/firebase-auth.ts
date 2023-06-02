import { FirebaseApp, FirebaseOptions } from "@firebase/app";
import { EMULATOR_HOST } from "./client-config";

const getFirebaseApp = async (options: FirebaseOptions) => {
  const { getApp, getApps, initializeApp } = await import("firebase/app");

  return (!getApps().length ? initializeApp(options) : getApp()) as FirebaseApp;
};

let EMULATOR_INITIALIZED = false;

const getAuth = async (options: FirebaseOptions) => {
  const app = await getFirebaseApp(options);
  const { getAuth } = await import("firebase/auth");
  const auth = getAuth(app);

  if (EMULATOR_HOST && !EMULATOR_INITIALIZED) {
    const { connectAuthEmulator } = await import("firebase/auth");
    await fetch(EMULATOR_HOST);
    connectAuthEmulator(auth, EMULATOR_HOST);
    EMULATOR_INITIALIZED = true;
  }

  return auth;
};

export const useFirebaseAuth = (options: FirebaseOptions) => {
  const getFirebaseAuth = async () => {
    return getAuth(options);
  };

  return { getFirebaseAuth };
};
