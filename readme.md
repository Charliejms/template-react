## Qué es React?

Librería para crear aplicaciones en JavaScript

Qué aporta ReactJS?

- Declarativo VS Imperativo:

Declarativo React:
Funciones limitada que solo haga lo que se le pida.
```js
const numList = [1,2,3,4]

const squeredList = numList.map(num => num*num);

console.log(squeredList)

//[ 1, 4, 9, 16 ]
```


Imperativo:  Definiendo un como paso a paso se quiere hacer, sin definir estado.
poniendo un estado en una variable global.

Definir una secuancia de commandos para que nos muestre el cuadrado de un array
```js
const numList = [1,2,3,4]

function squared(num) {
    var squartList =[]

    for (var i=0;i<num.length;i++){
        squartList.push(num[i]*num[i])
    }
    return console.log(squartList);
}

squared(numList);

// [ 1, 4, 9, 16 ]
```

----------------------

### Qué nos aporta React?
    - Composición de Componentes: (Composición Funcional)
    
        Nos permite separa los problemas en pequeños trozos. y que cada una de estos trozos mediante la composicion nos permita solucionar un problema mas grande.

- Flujo de Datos Unidirectional. (Solo cambia en *State* actulizan UI)
     
     De los compomentes de orden superior se propagan hacía los compomentes inferior.
     Y de los compomentes de orden inferior se propagan hacia los compomentes de orden superior para cambiar los estados
     de la app.
     
- Performance (Herramient de Diff + DOM virtual)

- Isomorfismo (Se ejecuta en cliente y servidor)

## Compoments

- Elementos y JSX
    - React JS no retorna HTML. (Syntactic sugar)
    - Compomentes (ReactJS building blocks)
    
    Compomentes sin Estado:
    
    **Stateless**
    ```js
    const HelloWord = props => {
        return <h1>{props.messages}</h1>   
    }
    ```
    Compomente que si que puede gestionar el estado:
    
    **StateFull**
    ```js
    class HelloWord extends React.Compoment{
        constructor(){
            super();
            this.state ={
                active: true
            }
        }
        reder(){
            return <h1>{props.messages}</h1>   
        }
    }
    ```
    - Props (Datos imnutables que se pasan a los compomentes)
    - States (Define el estado *interno* del compomente)
        - activado 
        - desactivado
        - error
        
    - Ciclo de vida de los Compomentes (Métodos que se ejecutan al *montarse*, *actualizarse* o *desmontarse* un compomente)
    Promesas cuando esten disponibles esos datos.
 
 - **Por donde empezar?**
 
    Crear una app de React
    [Create Apps with No Configuration:](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html)
    
    Instalar NVM
    [Node Version Manager:](https://github.com/creationix/nvm)
    
    Webpack bundler
    [Learn Webpack](https://github.com/danderu/learn-webpack)
    
    ECMAScript 2015
    [Exploring ES6](http://exploringjs.com/)
    
    [ES6 features](http://es6-features.org/)
    
    [Babel ES6](https://babeljs.io/learn-es2015/)
    
    [Repo Git ES6](https://github.com/lukehoban/es6features#readme)


    
