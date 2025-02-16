import CryptoJS from 'crypto-js';


const iv = import.meta.env.VITE_ENCRYPTION_IV; // Asegúrate de usar un IV seguro

export function encryptJSON(data, key) {
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), CryptoJS.enc.Hex.parse(key), {
        iv: CryptoJS.enc.Hex.parse(iv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return {
        iv: iv.toString(CryptoJS.enc.Hex),
        encryptedData: encrypted.toString()
    };
}

export function decryptJSON(encryptedData, iv, key) {
    const decrypted = CryptoJS.AES.decrypt(encryptedData, CryptoJS.enc.Hex.parse(key), {
        iv: CryptoJS.enc.Hex.parse(iv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
}