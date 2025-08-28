import { Buffer } from "buffer";

const encoder = new TextEncoder();
const decoder = new TextDecoder();

const KEY = "SHLOPKEYshlopkey";
const IV = "SHLOPVECshlopvec";

const KEY_ARR = encoder.encode(KEY);
const IV_ARR = encoder.encode(IV);

const cryptoKey = await crypto.subtle.importKey("raw", KEY_ARR, { name: "AES-CBC" }, false, ["encrypt", "decrypt"]);

export const encryptPath = async (path: string): Promise<string> => {
  // add four random base64 characters to the path
  const padding = crypto.getRandomValues(new Uint8Array(8));
  path += Buffer.from(padding).toString("base64").slice(0, 4);

  const pathBytes = encoder.encode(path);
  const encrypted = await crypto.subtle.encrypt({ name: "AES-CBC", iv: IV_ARR }, cryptoKey, pathBytes);

  const base64 = Buffer.from(encrypted).toString("base64");
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};

export const decryptSlug = async (slug: string): Promise<string> => {
  const base64 = slug.replace(/-/g, "+").replace(/_/g, "/") + "==".slice((2 - slug.length * 3) & 3);
  const encryptedBytes = new Uint8Array(Buffer.from(base64, "base64"));

  const decrypted = await crypto.subtle.decrypt({ name: "AES-CBC", iv: IV_ARR }, cryptoKey, encryptedBytes);
  const paddedPath = decoder.decode(decrypted);
  return paddedPath.slice(0, -4);
};
