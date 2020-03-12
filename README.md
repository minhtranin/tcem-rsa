# Tcem-rsa
# Solution
*encrypt data via symmetric encryption algorithm using public key to encrypt and private key to decrypt*
# Example
## encrypt
#### encryptStringWithRsaPublicKey function
* param
    - data type any
    - path publicKey or dafault

```
const { encryptStringWithRsaPublicKey } = require('tcem-rsa');
const data = 'hi iam tcem';
const cypher = encryptStringWithRsaPublicKey(data);
console.log(cypher);
> quiwheu1h233!@#!%EWRQWeqehqwuh43%#$%QWEqwehjsdfus891!@#
```
## decrypt
#### decryptStringWithRsaPublicKey function
* param
    - data need to be decypt
    - path publicKey or dafault
```
const { decryptStringWithRsaPublicKey } = require('tcem-rsa');
const data = decryptStringWithRsaPublicKey(cypher);
console.log(data);
> hi iam tcem
```
## file public key, private key default
####  publicKey, privateKey  function
```
const { publicKey, privateKey } = required('tcem-rsa)'
console.log(publicKey)
console.log(privateKey)
```
