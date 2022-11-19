# Como realizar cambios al proyecto

Este proyecto está desarrollador con React y los componentes MUI. Puede visitar la página de React para más información. Use los siguientes enlace como referencia:

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/en/main)
- [MUI](https://mui.com/)
- [Axios](https://axios-http.com/docs/intro)

## Páginas

Le serán asignadas tareas con las que deberá crear o modificar una o más paginas de la aplicación. Una página es también un componente, y las encontrará en la carpeta `src/pages`. Para más detalle sobre como crear una nueva página y enlazarla a ala aplicación consulte [como crear una nueva página](NEW_PAGE.md).

## Layout y menús

Una vez cree sus p[agina deberá enlazar estas a través de botones o secciones del menú de la aplicación. Puede crear un enlace desde distintos componentes usando el atrubuto `href` del componente.

Para agregar elementos al menú, modifiqué el archivo `Header.js` para incluir nuevos elementos en el menú. Cada elemento del menú esta definido por un componente [`ListItem`](https://mui.com/material-ui/react-list/).

## Conexión con el backend

Una vez haya creado sus páginas deberá conectar estas con el API REST creado en otro proyecto. Para pode rprobar esta funcionalidad asegurese de iniciar su aplicaicón de backend. Siga los pasos para [conectar con el backend](BACKEND.md) para incluir los manejadores de eventos y usar la librería Axios para consumir el API.
