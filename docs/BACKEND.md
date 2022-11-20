# Conectando con el backend

## Consumir el API con Axios

Para usar el API desde la aplicación web vamos a usar Axios. Esta es una librería que permite hacer llamados asíncronos a otras URL. Recuerde que el API tiene varios métodos HTTP que puede usar: GET, POST, PATCH, y DELETE. En general, el llamado al API va a cambiar el estado de la aplicaicón de alguna manera. El estado representa que información se esta mostrando al usuario y las condiciones con las cuales se esta mostrando.

Comience por importar la librería usando la siguiente instrucción:

```javascript
import axios from 'axios';
```

Luego, puede usar axios para invocar su API incluyendo el siguiente código dentro de una función de su preferencia.

```javascript
axios.get('/endpoint', { // Cambie la URL por la del API que desea usar, p.e. /usuarios
    params: { // Puede incluir los parámetros necesarios para hacer el llamado
      param1: 12345 
    }
  })
  .then(function (response) { // Acá puede procesar el resultado
    console.log(response);
  })
  .catch(function (error) { // Acá puede controlar cualquier error
    console.log(error);
  })
  .then(function () { // Este código siempre se ejecutará al final
    // always executed
  });
```

Si quiere hacer un llamado usando un POST solo debe cambiar el código de la siguiente forma:

```javascript
axios.post('/endpoint', { // Cambie la URL por la del API que desea usar, p.e. /usuarios
    param1: 12345 
  })
  .then(function (response) { // Acá puede procesar el resultado
    console.log(response);
  })
  .catch(function (error) { // Acá puede controlar cualquier error
    console.log(error);
  })
  .then(function () { // Este código siempre se ejecutará al final
    // always executed
  });
```

## Cambiar el estado de la aplicación

La aplicación en React usa el estado como un mecanismo para almacenar los datos y condiciones de visualización del UI. Ustede debe interactiuar con este estado en varios momentos dentro de la aplicación.

### Inicializar el estado

Primero incluya un constructor para su componente de página donde inicialice el estado de la misma:

```javascript
constructor(props) {
    super(props);
    this.state = { // este objeto puede almacenar toda la información
    };
  }
```

### Cambiar el estado

Para cambiar el estado debe usar la función setState del componente de React. Esto tipicamente se hace dentro de una función que maneje el evento de interacción del usuario. Dentro de esta función puede incluir el llamado a axios:

```javascript
miFuncion {
  axios.get('/endpoint', { 
  })
  .then(function (response) { 
    this.setState({ response.data }); // Asegurese de llamar la función setState
  })
}
```

### Mostrar el estado

Finalmente, al mostrar los datos de la página usted puede usar los datos en estado para mostrar cualquier información. Por ejemplo, suponga que el estado tiene un campo llamado `nombreUsuario`, para mostrarlo en la página puede referirse a él usando `{this.state.nombreUsuario}`:

```javascript
render() {
  return (
    <div>{this.state.nombreUsuario}</div>
  )
}
```

Es común que este estado se use dentro de formularios desde donde se modifique el mismo. Para esto, conecte loca campos del formulario con una función que maneje los cambios y conecte su valor con el del estado. Por ejemplo, para un estado con un campo `nombreUsuario`, puede conectar el mismo al estado así:

```javascript
handleInputChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // change state
    this.setState({ /* put here your state variables */ });
  };
```

y dentro del render:

```javascript
render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="nombreUsuario"
          onChange={this.handleInputChange}
          value={this.state.nombreUsuario}
        />
      </form>
```

## Redirigir el usuario a otra página

En algunos casos va a necesitar redirigir el usuario a otra página, por ejemplo al autenticar al usuario, debe enviarlo a una página de inicio. Para hacer esto use el componente [`Navigate`](https://reactrouter.com/en/main/components/navigate) de `react-router-dom` en combinación con el estado de la aplicación. Por ejemplo, si el estado contiene una variable booleana `goToOtherPage` indicando que debe redirigirse a otro destino, puede usar el siguiente código en el `render` para hacerlo:

```javascript
{goToOtherPage && (<Navigate to="destination" />)}
```

Consulte los ejemplos en la aplicación.
