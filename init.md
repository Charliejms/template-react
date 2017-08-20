#init project
```
npm init
```

Install: **webpack**

```
npm i webpack webpack-dev-server --save-dev
```

- Install: Babel como dependencias de 
    Instalamos babel para el tema de transpilar el JS.
    Mediante *babel-preset-stage-1* instalamos la version estable.
             *babel-preset-stage-0* versiones mas experimentales.
    
```
npm i babel-core babel-loader babel-preset-react babel-preset-es2015 babel-preset-stage-1 opener -D
```

Install **React**: Como paquete de producion.

```
npm i react react-dom --save
```

Lanzar el proyecto después de crear los scripts npm.

```
npm start
```
Lanzar Deploy: con el fichero bundle.js en .dist/
```
npm run deploy
```