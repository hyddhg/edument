# Edument Initial Assignment for Frontend developer

I had a lot of this prepared in advance so I just used it as it is with a few tweaks. Normally I would not have made it this generic for a small assignment.

## Start

```bash
npm install
```

```bash
npm start
```

## .env

You don't need to have a .env file but it is nice to be able to configure some things when testing.

CACHE is false by default, it can also be set to true  
NODE_ENV is set by the node system, you can override with: development, test, production  
LOG_LEVEL is error by default: error, warning, information  
PORT is default 3000

```bash
CACHE=false
LOG_LEVEL=error
NODE_ENV=development
PORT=3000
```

## Api response

It is made to always return JSON data but it is easy to change it to anything you want since all responses goes through the same object.

## Contact

Jonas Jönsson  
hndktsk@gmail.com  
0702 311 545
