# Tcem-rsa
# Solution
*encrypt data via asymmetric encryption algorithm using public key to encrypt and private key to decrypt*
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
```
> rbuT3lnpSIdtbQfzw5P61YanhQRZA/mxpFs/lUYWhQ9vQeg+Og9e5Hw8SFxKqsQWPV
Qfzw5P61YanhQRZA/mxpFs/lUYWhQ9vQeg+Og9Qfzw5P61YanhQRZA/mxpFs/lUYWhQ9
Qfzw5P61YanhQRZA/mxpFs/lUYWhQ9vQeg+Og9Qfzw5P61YanhQRZA/mxpFs/lUYWhQq

## decrypt
#### decryptStringWithRsaPublicKey function
* param
    - data need to be decypt
    - path publicKey or dafault
```
const { decryptStringWithRsaPublicKey } = require('tcem-rsa');
const data = decryptStringWithRsaPublicKey(cypher);
console.log(data);
```
> hi iam tcem
## file public key, private key default
####  publicKey, privateKey  function
```
const { publicKey, privateKey } = required('tcem-rsa)'
console.log(publicKey)
console.log(privateKey)
```
* log public key
> -----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAr7gC2aulOolczqJ6Asbd
GTDQIRBRgFxmyQlSYsqRiNKzljoUM5hpM7yOtdSUjokQ7JGeYRaIrukUShnK8eQG
btgjV91/lo6jzdgO6ByMHPOPtOxaLztVpBT/OiCMdx3oZ8M6U5xOzvZA2Ld7Ieya
4h56GqRYjxpTyDvT9lI6MmfJD58+i7YsjJyv5QCzG9QJb9izdLSJ2kVE//ud7CPq
cPnlaoqAT0OMTAAVaPkAM4+gWF3QtpfdjYDZNGxNpNt3riMudBFL/SGwCVlc4syT
swFP07kTkBcOnd6Qvk1NmVBUri6IxPLTlfl80roHTbPRFr3QfjrVEaT1jmNPyeoN
rwIDAQAB
-----END PUBLIC KEY-----
* log private key
> -----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCvuALZq6U6iVzO
onoCxt0ZMNAhEFGAXGbJCVJiypGI0rOWOhQzmGkzvI611JSOiRDskZ5hFoiu6RRK
Gcrx5AZu2CNX3X+WjqPN2A7oHIwc84+07FovO1WkFP86IIx3HehnwzpTnE7O9kDY
t3sh7JriHnoapFiPGlPIO9P2UjoyZ8kPnz6LtiyMnK/lALMb1Alv2LN0tInaRUT/
+53sI+pw+eVqioBPQ4xMABVo+QAzj6BYXdC2l92NgNk0bE2k23euIy50EUv9IbAJ
WVzizJOzAU/TuROQFw6d3pC+TU2ZUFSuLojE8tOV+XzSugdNs9EWvdB+OtURpPWO
Y0/J6g2vAgMBAAECggEBAJM2TSUBOT7OP7NZyXA0HJ1zGJrqqe0o/G+mYKAlZ0HC
i/PqmmwTXueaK9FH1GGJkWUwJgjesQogeQAPlceLKpyIdSuyhKakv7S/MtXgvL2w
i4+eh3uUcQ4zDRQsmqFcrAzqMR5FEH0xL2igZwcnyyZvNArH7u2Mt+5DuTNe9iSt
C+3XrQpFtsvl+fsoYgy8D7L+fZ/jTKs9Og998hlgAOmrVEQKohm3qBWGTM5molvY
y3LJqMc78nkw87LiZk37RAyk4mftXZ5QURdN9BVa9Ewdno7dJIGzDRNTv1Anivxa
GAxnx0/maG6Um/CT0XWzqWIY+BMpwu0SjMDwXwCSs6kCgYEA5dLQJsFsddlpz1GM
Efh60uW9uYS4u1sBtY/V8Q7B2yt6c059UYYPELrcbs2C8UvN1BxDS/bNQmWDI+r2
J3XgDuo6VIcmp8GfQEooZoQ/JskKicl6tu7VfSqI6k7kn8QYNvepJIPz1BbvEyB5
GWOv2ABA3XGdfqAabiSCKVYbt5UCgYEAw7udZkVznuwsDnIue/2YS8XPH00+yqXh
SjuAcahYct251MOHIeM4Ai9GMJbF8GG2FE1Ggx9X5e8wdNYsc4P/SwSv96LsFGlT
E5xpqGP+V1qOib20KlNrtuYU+0ftOz2dSue8UE3bWdWLsetJpMFpvQ2nzXRBb/s5
t7TeE+xnzzMCgYBT/24GjDFpDVKH7IUmWEwD4uYp9SFTkNqaEn0eQseFpGl31Vsm
Pbop4jII6WIPcSZEfSP3krfIqbN5oDnhiEqhCOjS1ibBr5nV9IS5m2I9ecM5QwNv
8vDic3ZhNP6IijJTfMc8SmIGxW8R7Y91QSMW7ljG1uy6SCgA06UjGI6+1QKBgF3z
EvUBByNUFz2D3v4S1mQgeW9741Tf1EiOUPO9K19PQCB5DcbdSof56wXtiOr966jJ
ArxzcfxjF+4s0z9LL2HxyQjjQc/2UjMKk8iI3o9NXzeMQAtE6WHsBEws1RjnVTWc
D8634D65eokW981GLRvajx3V3IcEnkqoXSRRB+7zAoGBANzImEbuvDHFQU+OjGZd
Ce3KN3s5Tqr5kwnCFCb4fO+cF9ScnoZhaZ1eaYedKPkCOP/Ngg1MWE4ELzm1xS4l
8VPmIhNPD7Ixyd7m/d5IPRhs63ZOmUKkYbi0/+vFHvJGx8i+iLmewhx6nD4OYAct
YNck39vs9ZpBeBrma34wnt2B
-----END PRIVATE KEY-----

