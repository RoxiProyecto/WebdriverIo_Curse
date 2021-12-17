# Automation_WebdriverIo_Mocha
Se Automatiza  casos del sitio ecomerce: Your Logo
url: http://automationpractice.com/
### Pre-requisitos 📋
Conocimiento sobre:
Nodejs
Visual studio code IDE
Npm básico 
Java script básico
### Instalación y configuración 🔧
* 1- Crear un workspace
* 2- Instalar Node Package Manager (npm) desde la terminal con el comando: npm i  
* 3- Inicializamos  con el comando:  npm init
* 5- Instalar WebdriverIO desde la terminal con el comando: npm init wdio 
* 6- Configuramos el archivo wdio.conf.js desde la terminal con el comando: npx wdio config con los siguientes paquetes:
- @wdio/local-runner@latest
- @wdio/mocha-framework@latest
- @wdio/spec-reporter@latest
- @wdio/allure-reporter@latest
- wdio-chromedriver-service
- @babel/register
- @babel/core
- @babel/preset-env
- chromedriver
* 7- Instalamos Chai desde la terminal con el comando: npm install chai --save-dev
* 8- Instalamos Chai-WebdriverIo para las aserciones globales desde la terminal con el comando: npm install chai-webdriverio --save-dev
* 9- Configuramos Allure, se generan en  la carpeta allure-results, utilizando el comando allure serve se genera el reporte y en el archivo wdio.config agregar:
y con  el comando allure: generate allure-results/ && allure open  vemos nuestros reportes. y con el comando: allure generate allure-results/ --clean && allure open se limpia  la carpeta de los reportes
* 11- Configurar en el wdio.config en los test lo siguiente:
   beforeTest: function (test, context) {
        const {addStep} = require('@wdio/allure-reporter').default; 
        global.addStep = addStep;
        const chai = require('chai');
        const chaiWebdriver = require('chai-webdriverio').default;
        chai.use(chaiWebdriver(browser));
        global.assert = chai.assert;
        global.expect = chai.expect;
    },

* 12- Configuramos wdio.conf.js en la opción para visualizar el test siempre capabilities de la siguiente manera:
     capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args:['--start-maximized'],
        },
    
      }],
      
* 13- Configuramos el  archivo package.json en la parte de script lo siguiente:
     "scripts": {
       "test": "wdio ./wdio.conf.js"
       },

* 13- Instalar  Regresión visual con el comando: npm install --save-dev wdio-image-comparison-service

## Estructura 
Primeramente nos armamos según el patrón de diseño Page Object Model la estructura del proyecto siguiente:
* carpetas:
   WorkSpace
    Proyecto
    allure_results
    node_modules
    test >data
         >pages
         >specs >
                >
    * archivos
    babel.config.js
    package-lock.json
    package.json
    Redme.md
    wdio.conf.js
    workspace.code-workspace

## Comenzando 🚀



## Ejecutando las pruebas ⚙️

* Para ejecutar en la consola o terminal

npm run test


## Construido con 🛠️

* [WebdriverIo](https://webdriver.io/) Herramienta para Nodejs que nos permite crear Test
* [Nodejs](https://nodejs.org/es/) Entorno en tiempo de ejecución multiplataforma para la capa del servidor (en el lado del servidor) basado en JavaScript.
* [NPM](https://www.npmjs.com/) Gestor de paquetes 
* [Mocha](https://mochajs.org/) Framework de pruebas
* [Chai](https://www.chaijs.com/ Libería de aserciones
* [Jdk java](https://jdk.java.net/java-se-ri/11) El software que provee las herramientas para desarrollar en Java

## Versionado 📌

Usamos [Github]() para el versionado.

## Autores ✒️

* Rocio Cruz

## Expresiones de Gratitud 🎁

* Muchas gracias!!