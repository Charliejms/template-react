#Ciclo de vida
---------------

- Ciclos de vida de un compomente.

    En react un compomete pasa por diferentes fases. Casi todos los compomentes de React tienen un ciclo de vida
    Estan divididos en 3 tipos:
    - **montaje** 
    - **actualización** 
    - **desmontaje**
    
    Nos ofrece puntos de captura ded la ejecución de nuetro compomente en cada etapa.
    
    ![PIla de ejecución React](http://cdn4.infoqstatic.com/statics_s1_20151111-0209/resource/articles/react-jsx-and-component/zh/resources/0702001.png)
    
    >montaje **componentWillMount**
    
    Se ejecuta una vez, tanto en cliente como en servidor, inmediatamente *antes* del primer
    renderizado. Si se usa *setState* en este método *render()* se verá el estado actualizado.
    ```js
    componentWillMount(){/* Stuff to do*/}
    ```
    
    >montaje **compomentDidMount**
    
    Se ejecuta la primera vez, solo en cliente, inmediatamente *después* del primer renderizad.
    Las referencias en el DOm ya existen (compomente ya disponible) y es el lugar ideal para hacer request en AJAX, crear 
    eventos o poner timers como setTimeout.
    ```js
        componentDidMount(){/* Stuff to do*/}
    ```
    OJO El compomentDidMount() de los hijos se ejecutan antes que el padre.
    
    >actualización **componentWillReceiveProps**
    ```js
        componentWillReceiveProps(){/* Stuff to do*/}    
    ```
    
    El compomente se ejecuta cuando reciba nuevas propiedades. No se ejecuta con el primer *render()*
    La función recibe como parámetro las nuevas propiedades. (Útil para hacer comparaciones y actualizar
    el estado según las propiedades)
    Se ejecuta siempre. tantas veces como cambios reciba nuevas propiedades.
    ```js
      componentWillReceiveProps(nextProps) {
          const changedValue = this.props.value !== nextProps.value ? true: false
          this.setState({changed: changedValue})
      }
    ```
    
    >actualización **componentWillUpdade**
    ```js
      componentWillUpdate(nextProps, nextState){ /* code*/}
    ```
    Se ejecuta antes que el compomente vaya a renderizarse otra vez con las nuevas propiedades o estado.
    No se ejecuta con el primer *render()* Esta función recibe como parametro las nuevas propiedades y el
    nuevo estado.
    
    OJO! En *componentWillUpdade* no utilizar setState para cambiar el estado o entrarás en un bucle infinito.
    
    >actualización **shouldComponentUpdate**
    ```js
    shouldComponentUpdate(nextProps, nextState){/* code */}
    ```
    
    Se ejecuta justo antes de volver a rederizarse con las nuevas props y estado. No se ejecuta con el primer 
    *render()*. Esta función recibe como parámetro las nuevas propiedades y el nuevo estado y siempre debe devolver
    un valor **boleano** (true o false). Por defecto esta función siempre devuelve true. Punto de captura para si 
    se debe montar o no un componente
    Ojo asegurarte que devuelve el booleano.
    
    >actualización **componentDidUpdate**
    ```js
    componentDidUpdate(prevProps, prevState){/*  code  */}
    ```
    
    Se ejecuta justo después de renderizarse. No se ejecuta con el primer *render()*
    Nos indica si ya se ha rederizado.
    
    >desmontaje: **componentWillUnmount**
    ```js
    componentWillUnmount(prevProps, prevState){
    }
    ```
    
    Se ejecuta justo antes que el compomente se vaya a eliminar del DOM. Especialmente útil para
    limpiar eventos asignados a las rederencias DOM de nuestro componente, eliminar timers y limpiar
    observables.
    
    ##Componente de React
    
    ```js
    
    import React, {Componet} from 'react';
    export default class HelloFriend extends Componet {
      //lifecycle method
      componentWillMount(){/* code */}
      componentDidMount() {/* code*/}
      componentWillReceiveProps(nextProps){/* code */}
      componentWillUpdate(nextProps, nextState){/* code */}
      shouldComponentUpdate(nextProps, nextState){/* code */}
      componentDidUpdate(prevProps, prevState){/* code */}
      componentWillUnmount(){/* code here*/}
      
      render(){
          return <p>Hello React :)</p>
      }
    }
    
    ```
    