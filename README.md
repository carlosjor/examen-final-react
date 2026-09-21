# Examen Final - Programación de Componentes

Proyecto desarrollado para la evaluación final de la asignatura **Programación de Componentes - IPLACEX**.

La solución corresponde a una aplicación desarrollada con React que integra componentes, manejo de estado, comunicación mediante props, validación de formularios, Firebase Firestore, Firebase Authentication, Bootstrap y generación de una aplicación Android mediante Apache Cordova.

La aplicación web se encuentra publicada en Netlify, mientras que el código fuente y la versión APK Release firmada se encuentran disponibles en el repositorio de GitHub.

---

## 1. Tecnologías utilizadas

### Aplicación web

- React
- Vite
- JavaScript
- Bootstrap
- React Router
- Simple React Validator

### Servicios Firebase

- Firebase Firestore
- Firebase Authentication
- Firebase Storage (interfaz y validaciones)

### Aplicación Android

- Apache Cordova
- Cordova Android 15.1.0
- Android SDK
- JDK 17
- Gradle 8.14.2
- Android Build Tools 36.0.0

### Control de versiones y despliegue

- Git
- GitHub
- Netlify

---

## 2. Repositorio

El código fuente del proyecto se encuentra disponible en GitHub:

https://github.com/carlosjor/examen-final-react

Para clonar el repositorio:

```bash
git clone https://github.com/carlosjor/examen-final-react.git
```

Luego ingresar al proyecto:

```bash
cd examen-final-react
```

---

## 3. Instalación del proyecto

Instalar las dependencias:

```bash
npm install
```

Ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

Generar la versión de producción:

```bash
npm run build
```

La compilación de producción se genera en el directorio:

```text
dist/
```

---

## 4. Configuración de Firebase

La aplicación utiliza Firebase para Firestore y Authentication.

La configuración se obtiene mediante variables de entorno definidas en un archivo `.env` local:

```text
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

Por motivos de seguridad y configuración del entorno, el archivo `.env` no se encuentra versionado en el repositorio.

La inicialización de Firebase se encuentra centralizada en:

```text
src/firebase.js
```

---

## 5. Listado de productos

La aplicación implementa un listado de productos utilizando componentes React.

El componente principal mantiene la información de los productos y el estado del carrito.

Cada producto es representado mediante un componente hijo independiente.

Los productos son recorridos y renderizados utilizando `map()`.

Archivos principales:

```text
src/components/ListaProductos.jsx
src/components/Producto.jsx
```

---

## 6. Comunicación entre componentes

La comunicación entre el componente padre y los componentes hijos se realiza mediante `props`.

El componente padre entrega al componente `Producto`:

- Información del producto.
- Función para agregar el producto al carrito.

El componente hijo utiliza la función recibida para comunicar la acción al componente padre.

De esta manera se implementa comunicación:

```text
Padre -> Hijo
Hijo -> Padre
```

---

## 7. Carrito de compras

El carrito de compras es administrado mediante el estado del componente.

Se utiliza:

```javascript
this.setState({})
```

para actualizar dinámicamente la información.

El carrito permite:

- Agregar productos.
- Incrementar cantidades.
- Disminuir cantidades.
- Eliminar productos.
- Calcular cantidad total.
- Calcular precio total.

La interfaz se actualiza automáticamente cada vez que cambia el estado.

---

## 8. Formulario de registro

La aplicación incluye un formulario de registro de clientes.

Archivo principal:

```text
src/components/Formulario.jsx
```

El formulario contiene los siguientes campos:

- Nombre.
- Correo electrónico.
- Teléfono.
- Mensaje.

---

## 9. Validación del formulario

La validación se implementa mediante:

```text
simple-react-validator
```

Se realizan validaciones antes de almacenar los datos.

Entre las reglas utilizadas se encuentran:

- Campos obligatorios.
- Validación de correo electrónico.
- Longitud mínima del nombre.
- Longitud mínima del teléfono.
- Longitud mínima del mensaje.

Si los datos no cumplen las reglas, se muestran mensajes de validación al usuario.

---

## 10. Firebase Firestore

Cuando el formulario contiene información válida, los datos son almacenados en Firebase Firestore.

La colección utilizada es:

```text
clientes
```

Cada documento almacena:

- Nombre.
- Correo electrónico.
- Teléfono.
- Mensaje.
- Fecha de registro.

La fecha se registra mediante un timestamp generado por Firebase.

---

## 11. Firebase Authentication

La aplicación incorpora autenticación mediante Firebase Authentication.

Archivo principal:

```text
src/components/Autenticacion.jsx
```

Se implementaron las siguientes operaciones:

- Creación de usuarios mediante correo electrónico y contraseña.
- Inicio de sesión.
- Cierre de sesión.
- Detección del estado actual de autenticación.

La aplicación actualiza la interfaz de acuerdo con el estado de la sesión.

---

## 12. Firebase Storage

La aplicación incluye una interfaz para la selección y validación de archivos.

Archivo principal:

```text
src/components/Almacenamiento.jsx
```

Se implementaron validaciones para:

- Archivos JPG.
- Archivos PNG.
- Documentos PDF.
- Tamaño máximo de 5 MB.

La interfaz muestra:

- Nombre del archivo.
- Tipo de archivo.
- Tamaño del archivo.

Firebase Storage requiere un bucket habilitado en el proyecto Firebase. En este proyecto académico el servicio de almacenamiento no se encuentra habilitado debido al requerimiento de facturación del proyecto Firebase utilizado.

Por este motivo, se implementó la interfaz y las validaciones correspondientes, mientras que la acción de carga permanece deshabilitada.

---

## 13. Navegación

La aplicación utiliza React Router para administrar la navegación.

Se utiliza `HashRouter` para mantener compatibilidad tanto con el despliegue web como con la ejecución de la aplicación mediante Cordova.

Las secciones disponibles son:

- Productos.
- Registro de clientes.
- Acceso.
- Archivos.

Las rutas utilizadas son:

```text
/
#/registro
#/acceso
#/archivos
```

---

## 14. Bootstrap

Bootstrap se utiliza para construir la interfaz visual de la aplicación.

Se utilizaron, entre otros:

- Navegación.
- Cards.
- Formularios.
- Botones.
- Alertas.
- Grid responsive.
- Utilidades de espaciado.
- Tipografía.
- Sombras.

La interfaz se adapta a distintos tamaños de pantalla.

---

## 15. Estructura principal del proyecto

```text
examen-final-react/
|
|-- apk/
|   `-- examen-final-release.apk
|
|-- public/
|
|-- src/
|   |-- components/
|   |   |-- Almacenamiento.jsx
|   |   |-- Autenticacion.jsx
|   |   |-- Formulario.jsx
|   |   |-- ListaProductos.jsx
|   |   `-- Producto.jsx
|   |
|   |-- App.css
|   |-- App.jsx
|   |-- firebase.js
|   |-- index.css
|   `-- main.jsx
|
|-- cordova/
|   |-- config.xml
|   |-- package.json
|   `-- package-lock.json
|
|-- .gitignore
|-- eslint.config.js
|-- index.html
|-- package.json
|-- package-lock.json
|-- README.md
`-- vite.config.js
```

El archivo `.env` se mantiene únicamente en el entorno local y no se incorpora al repositorio.

Los directorios generados por Node, Vite y Cordova tampoco se almacenan en el control de versiones.

---

## 16. Configuración para Cordova

Para permitir que la compilación de Vite funcione correctamente dentro de Cordova, se configuró Vite utilizando rutas relativas.

Configuración principal:

```javascript
export default defineConfig({
  plugins: [react()],
  base: './',
})
```

Además, la navegación utiliza `HashRouter`, evitando dependencias de rutas administradas por un servidor web.

---

## 17. Preparación de la aplicación Android

Se creó un proyecto Cordova para empaquetar la aplicación React como aplicación Android.

La plataforma utilizada es:

```text
cordova-android 15.1.0
```

Configuración del entorno utilizada:

```text
JDK 17
Gradle 8.14.2
Android Build Tools 36.0.0
```

La disponibilidad de los requisitos fue verificada mediante:

```bash
cordova requirements
```

---

## 18. Compilación React para Android

Primero se genera la versión de producción de React:

```bash
npm run build
```

El contenido generado en:

```text
dist/
```

se copia posteriormente al directorio:

```text
cordova/www/
```

De esta manera, Cordova utiliza la aplicación React compilada como contenido de la aplicación Android.

---

## 19. Generación del APK de prueba

Para generar la versión de depuración se utiliza:

```bash
cordova build android
```

El proceso genera un APK de depuración dentro de la estructura de compilación de Android.

Esta versión fue instalada y probada en un dispositivo Android físico, verificando el funcionamiento de las distintas secciones de la aplicación.

---

## 20. Generación de la versión Release

La versión Release de Android se generó mediante Gradle:

```bash
gradlew assembleRelease
```

Este proceso genera inicialmente un APK Release sin firma.

Posteriormente el archivo se prepara para su firma digital.

---

## 21. Firma digital del APK

Se generó un keystore RSA de 2048 bits para realizar la firma digital de la aplicación.

El APK fue alineado utilizando:

```text
zipalign
```

Posteriormente fue firmado utilizando:

```text
apksigner
```

Finalmente, la firma fue verificada mediante:

```bash
apksigner verify --verbose examen-final-release.apk
```

La verificación confirmó correctamente un firmante y compatibilidad con los esquemas de firma APK v2 y v3.

El archivo keystore utilizado para la firma es privado y se encuentra excluido del repositorio mediante `.gitignore`.

---

## 22. APK Android

La versión Release firmada de la aplicación Android se encuentra disponible en el repositorio para su instalación y evaluación.

**Archivo APK:**

```text
apk/examen-final-release.apk
```

El APK corresponde a la versión final generada a partir de la aplicación React empaquetada mediante Apache Cordova.

La aplicación fue probada en un dispositivo Android físico, verificando su instalación, ejecución, navegación y funcionamiento de las funcionalidades implementadas.

---

## 23. Pruebas realizadas

La aplicación fue probada durante el desarrollo tanto en navegador web como en un dispositivo Android físico.

Se verificaron las siguientes funcionalidades:

- Visualización del listado de productos.
- Agregar productos al carrito.
- Incrementar y disminuir cantidades.
- Eliminar productos del carrito.
- Cálculo de cantidades y totales.
- Validación del formulario.
- Registro de información en Firestore.
- Creación de usuarios.
- Inicio de sesión.
- Cierre de sesión.
- Selección y validación de archivos.
- Navegación entre las distintas secciones.
- Ejecución de la aplicación mediante APK en Android.
- Ejecución de la aplicación desplegada en Netlify.

---

## 24. Despliegue en Netlify

La aplicación web se encuentra desplegada públicamente mediante Netlify.

**Aplicación publicada:**

https://preeminent-sherbet-d3d34e.netlify.app/

El despliegue se encuentra conectado al repositorio de GitHub y utiliza la rama:

```text
main
```

Configuración de construcción:

```text
Build command: npm run build
Publish directory: dist
```

Las variables de configuración requeridas por Firebase se encuentran configuradas mediante variables de entorno en Netlify.

La aplicación desplegada fue verificada después de su publicación, comprobando su navegación y las funcionalidades implementadas.

---

## 25. Control de versiones

El proyecto utiliza Git para el control de versiones y GitHub como repositorio remoto.

**Repositorio GitHub:**

https://github.com/carlosjor/examen-final-react

La rama principal utilizada es:

```text
main
```

Los archivos con información de configuración local, claves privadas y directorios generados se encuentran excluidos mediante `.gitignore`.

---

## 26. Seguridad

El proyecto evita versionar archivos de configuración local, claves privadas, dependencias y directorios generados.

Entre los elementos excluidos se encuentran:

```text
.env
*.keystore
*.jks
node_modules/
dist/
cordova/node_modules/
cordova/platforms/
cordova/plugins/
cordova/www/
```

El keystore utilizado para firmar la aplicación Android se mantiene únicamente en el entorno local y no se distribuye junto con el código fuente.

La APK Release firmada sí se incorpora al repositorio como archivo de distribución, sin incluir la clave privada utilizada para generar su firma.

---

## 27. Estado del proyecto

Las funcionalidades desarrolladas para la evaluación se encuentran implementadas.

La solución incluye:

- Aplicación React basada en componentes.
- Comunicación entre componentes mediante props.
- Renderizado de productos mediante `map()`.
- Manejo del carrito mediante estado y `this.setState()`.
- Formulario con validaciones.
- Persistencia de datos mediante Firebase Firestore.
- Autenticación mediante Firebase Authentication.
- Interfaz y validaciones para selección de archivos.
- Diseño mediante Bootstrap.
- Navegación mediante React Router.
- Proyecto Android mediante Apache Cordova.
- Generación de APK para Android.
- Firma digital del APK.
- Verificación de la firma digital.
- Pruebas en dispositivo Android físico.
- APK Release firmada disponible para instalación.
- Repositorio publicado en GitHub.
- Aplicación web desplegada y probada en Netlify.

---

## Autor

**Carlos Jordan**

Programación de Componentes  
IPLACEX