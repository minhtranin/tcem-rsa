# Tcem-rsa
# Solution
*encrypt data via symmetric encryption algorithm using public key to encrypt and private key to decrypt*
# encrypt data
1. encrypt
```
const { encryptStringWithRsaPublicKey } = require('tcem-rsa');
const data = 'hi iam tcem';
const cypher = encryptStringWithRsaPublicKey(data);
console.log(cypher);
> quiwheu1h233!@#!%EWRQWeqehqwuh43%#$%QWEqwehjsdfus891!@#
```
2. decrypt
```
const { decryptStringWithRsaPublicKey } = require('tcem-rsa');
const data = decryptStringWithRsaPublicKey(cypher);
console.log(data);
> hi iam tcem
```
3. file public key default
4. file private key default

# decrypt data
