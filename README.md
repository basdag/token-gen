# Generating a JWT

These instructions for generating a JWT require OpenSSL and Node.js (>= v4) to be installed on your machine.


## Installing OpenSSL

Clone or download OpenSSL repo from [Github](https://github.com/openssl/openssl). And follow the install instructions for Unix systems

```    
    $ ./config
    $ make
    $ make test
    $ make install
```


### Generate a Key Pair (Not necessary if ops provides a key)

From inside the token directory generate an RSA key pair with a 2048 bit private key.
Cmd:
```
openssl genpkey -algorithm RSA -out ./keys/<CLIENTNAME>_private_key.pem -pkeyopt rsa_keygen_bits:2048
```

Extract the public key from the RSA keypair.
Cmd:
```
openssl rsa -pubout -in ./keys/<CLIENTNAME>_private_key.pem -out ./keys/<CLIENTNAME>_public_key.pub
```


### Make the Token

First run `npm install` in this directory to install the jsonwebtoken package.
Either generate a key pair using the scripts above, or save a private key in the `./keys` directory in this repo.

Run `npm run token <CLIENTNAME>` to generate a token. The generated token will be saved to the `/tokens` file.
```
npm run token BEST_EVER_CLIENT
```


## Safety Note

Please only save this key locally. *NEVER STORE KEYS ON GITHUB!*

A `.gitignore` file is included in the repo that will prevent keys from being saved in GITHUB. But still... be careful!


### Marvel in your handiwork

![Token in command line](https://raw.githubusercontent.com/lizlove/token-gen/master/token.png)


## The End

* **Liz Lovero** - *Advanced Typing* - [Github](https://github.com/lizlove)
