"use strict";

const crypto = require("crypto");
const path = require("path");
const fs = require("fs");

/**
 * description the function to encrypt data through public key
 * @param { data : any, relativeOrAbsolutePathToPublicKey : path | default publicKey() }
 * @returns { data is encrypted : any }
 */

const encryptStringWithRsaPublicKey = (toEncrypt, relativeOrAbsolutePathToPublicKey = path.join(__dirname, './public.pem')) => {
    const absolutePath = path.resolve(relativeOrAbsolutePathToPublicKey);
    const publicKey = fs.readFileSync(absolutePath, "utf8");
    const buffer = Buffer.alloc(toEncrypt.length, toEncrypt);
    const encrypted = crypto.publicEncrypt(publicKey, buffer);
    return encrypted.toString("base64");
};

/**
 * description the function to encrypt data through public key
 * @param { data is encrypted : any, relativeOrAbsolutePathtoPrivateKey : path | default privateKey()  }
 * @returns { data is decrypted : any }
 */

const decryptStringWithRsaPrivateKey = (toDecrypt, relativeOrAbsolutePathtoPrivateKey = path.join(__dirname, './private.pem')) => {
    const absolutePath = path.resolve(relativeOrAbsolutePathtoPrivateKey);
    const privateKey = fs.readFileSync(absolutePath, "utf8");
    const buffer = Buffer.from(toDecrypt, "base64");
    const decrypted = crypto.privateDecrypt(privateKey, buffer);
    return decrypted.toString("utf8");
};

const publicKey = () => {
    return fs.readFileSync(path.join(__dirname, './public.pem'), "utf8");
};
const privateKey = () => {
    return fs.readFileSync(path.join(__dirname, './private.pem'), 'utf8');
};
module.exports = { encryptStringWithRsaPublicKey, decryptStringWithRsaPrivateKey, publicKey, privateKey };