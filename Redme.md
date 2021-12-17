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
            args:['--start-maximized'], },}],
      
* 13- Configuramos el  archivo package.json en la parte de script lo siguiente:
     "scripts": { "test": "wdio ./wdio.conf.js"},

* 13- Instalar  Regresión visual con el comando: npm install --save-dev wdio-image-comparison-service

## Estructura 
Primeramente nos armamos según el patrón de diseño Page Object Model la estructura del proyecto siguiente:
* carpetas:
   WorkSpace > Proyecto
    allure_results
    node_modules
    test >data
         >pages
         >specs 
     visual-regresion > actual
                      > baseline          
    * archivos
    babel.config.js
    package-lock.json
    package.json
    Redme.md
    wdio.conf.js
    workspace.code-workspace

## Comenzando 🚀
Se realizan las siguientes pruebas:
1 -Validación  de login exitoso
2 -Validación  de Login fallido por usuario_ email incorrecto
3 -Validación  de Login fallido por password incorrecto
4 -Validación  de Login fallido por input  email incorrecto restricciones
5 -Validación  de Login fallido por input password < 5 carácteres.
6- Validación  de Login inputs, passw empty
7- Validación  de Login inputs, email empty
8- Validación  de  Logout
9- Validación  de Comparación de imágenes del header-container
10- Validación  de Busqueda de varios articulos 

## Ejecutando las pruebas ⚙️

* Para ejecutar en la consola o terminal
npm run test

## Ejecutando Reportes 📋

* Para ejecutar en la consola o terminal
 allure generate allure-results/ --clean && allure open

## Construido con 🛠️
* [WebdriverIo](https://webdriver.io/) Herramienta para Nodejs que nos permite crear Test
* [Nodejs](https://nodejs.org/es/) Entorno en tiempo de ejecución multiplataforma para la capa del servidor (en el lado del servidor) basado en JavaScript.
* [NPM](https://www.npmjs.com/) Gestor de paquetes 
* [Mocha](https://mochajs.org/) Framework de pruebas
* [Chai](https://www.chaijs.com/) Libería de aserciones
* [Allure](https://webdriver.io/docs/allure-reporter) Libería de Reportes
* [Servicio](https://webdriver.io/docs/wdio-image-comparison-service) Image Comparison (Visual Regression Testing) Service

## Versionado 📌

Usamos [Github](https://github.com/RoxiProyecto/WebdriverIo_Curse.git) para el versionado.

## Autores ✒️

* Rocio Cruz

## Expresiones de Gratitud 🎁

* Muchas gracias!!
