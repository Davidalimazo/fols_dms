import CryptoJS from "crypto-js";

interface IEncryption {
  data: object;
  secret: string;
}
interface IDecryption {
  encryptedText: string;
  secret: string;
}

const ALGORITHM = "aes-256-cbc";
const KEY_LENGTH = 32; // 256 bits
const IV_LENGTH = 16; // Initialization vector length

interface IEncryption {
  data: object;
  secret: string;
}

interface IDecryption {
  encryptedText: string;
  secret: string;
}

// Generate a key from the secret
function generateKey(secret: string): string {
  // Use the secret as a key for AES
  return CryptoJS.enc.Utf8.parse(secret).toString();
}

export function encryptJson({ data, secret }: IEncryption): string {
  const text = JSON.stringify(data); // Convert JSON object to string
  const key = generateKey(secret);

  // Generate a random IV
  const iv = CryptoJS.lib.WordArray.random(IV_LENGTH / 4); // IV must be 128 bits (16 bytes)

  // Encrypt the data
  const encrypted = CryptoJS.AES.encrypt(text, key, { iv: iv });

  // Return IV and encrypted text as a combined string
  return iv.toString() + ":" + encrypted.toString();
}

export function decryptJson({ encryptedText, secret }: IDecryption): object {
  const parts = encryptedText.split(":");
  const iv = CryptoJS.enc.Hex.parse(parts.shift()!);
  const encryptedTextBuffer = parts.join(":");
  const key = generateKey(secret);

  // Decrypt the data
  const decrypted = CryptoJS.AES.decrypt(encryptedTextBuffer, key, { iv: iv });

  if (decrypted.toString().length > 3) {
    // Convert decrypted data to string and then to JSON
    return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
  } else {
    return JSON.parse("{}");
  }
}
