# Examen Final - Programación de Componentes

Proyecto desarrollado como parte del **Examen Final de la asignatura Programación de Componentes - IPLACEX**.

La aplicación fue desarrollada con React y permite demostrar el uso de componentes, propiedades, estados, eventos, formularios, validaciones, navegación mediante rutas, servicios de Firebase y generación de una aplicación Android mediante Cordova.

---

## 1. Tecnologías utilizadas

### Desarrollo web

- React
- Vite
- JavaScript
- Bootstrap
- React Router
- Simple React Validator

### Servicios en la nube

- Firebase
- Firebase Firestore
- Firebase Authentication
- Firebase Storage (interfaz y validaciones)

### Aplicación Android

- Apache Cordova
- Cordova Android
- Android SDK
- Gradle
- Java JDK
- Android Build Tools
- Zipalign
- APK Signer

---

## 2. Instalación del proyecto

### Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

### Ingresar al proyecto

```bash
cd examen-final-react
```

### Instalar las dependencias

```bash
npm install
```

### Ejecutar en modo desarrollo

```bash
npm run dev
```

Vite iniciará el servidor local de desarrollo y mostrará en la terminal la dirección desde la cual se puede acceder a la aplicación.

---

## 3. Variables de entorno

La aplicación utiliza variables de entorno para almacenar la configuración necesaria para conectarse a Firebase.

Se debe crear un archivo `.env` en la raíz del proyecto con la siguiente estructura:

```env
VITE_FIREBASE_API_KEY=API_KEY
VITE_FIREBASE_AUTH_DOMAIN=AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID=APP_ID
```

Por razones de seguridad, el archivo `.env` se encuentra excluido del repositorio mediante `.gitignore`.

---

# Funcionalidades implementadas

## 4. Productos y carrito de compras

La aplicación contiene un componente padre encargado de administrar el listado de productos y el estado del carrito de compras.

Cada producto es representado mediante un componente hijo.

Se implementaron los siguientes conceptos:

- Renderizado dinámico de productos mediante `map()`.
- Comunicación padre-hijo mediante `props`.
- Comunicación hijo-padre mediante funciones callback.
- Manejo del estado mediante `this.state`.
- Actualización del estado mediante `this.setState()`.
- Manejo de eventos.
- Agregar productos al carrito.
- Aumentar la cantidad de un producto.
- Disminuir la cantidad de un producto.
- Eliminar productos del carrito.
- Cálculo automático de subtotales y total del carrito.

### Componentes principales

```text
ListaProductos.jsx
Producto.jsx
```

`ListaProductos` corresponde al componente padre y `Producto` corresponde al componente hijo.

---

## 5. Registro de clientes

Se implementó un formulario React para realizar el registro de clientes.

El formulario contiene los siguientes campos:

- Nombre.
- Correo electrónico.
- Teléfono.
- Mensaje.

Las validaciones fueron implementadas utilizando **Simple React Validator**.

Cuando los datos ingresados cumplen las validaciones, son almacenados en Firebase Firestore.

### Colección utilizada

```text
clientes
```

Cada registro es almacenado con un identificador generado automáticamente por Firestore.

Además de los datos ingresados en el formulario, se registra la fecha correspondiente al almacenamiento de la información.

---

## 6. Firebase Authentication

La aplicación utiliza **Firebase Authentication** mediante el proveedor de correo electrónico y contraseña.

Se implementaron las siguientes funcionalidades:

- Creación de usuarios.
- Inicio de sesión.
- Detección del usuario autenticado.
- Cierre de sesión.
- Manejo de errores de autenticación.

También se utilizan métodos del ciclo de vida de componentes React para controlar los cambios en el estado de autenticación.

El componente correspondiente es:

```text
Autenticacion.jsx
```

---

## 7. Firebase Storage

Se desarrolló una interfaz destinada al manejo de archivos mediante Firebase Storage.

La pantalla permite:

- Seleccionar archivos.
- Validar archivos JPG.
- Validar archivos PNG.
- Validar archivos PDF.
- Validar un tamaño máximo de 5 MB.
- Mostrar el nombre del archivo seleccionado.
- Mostrar el tipo del archivo.
- Mostrar el tamaño del archivo.

### Limitación del entorno académico

La carga efectiva del archivo a Firebase Storage no se encuentra habilitada debido a que el proyecto Firebase utilizado no dispone de un bucket de Storage habilitado sin activar facturación.

Por este motivo, se implementó la interfaz y las validaciones correspondientes, pero el botón de carga permanece deshabilitado para evitar errores durante la ejecución.

Esta situación se informa también directamente en la interfaz de la aplicación.

---

## 8. Navegación

La aplicación utiliza **React Router** para navegar entre sus diferentes funcionalidades.

Para mantener compatibilidad entre la versión web y la aplicación ejecutada mediante Cordova se utiliza `HashRouter`.

Las rutas implementadas son:

| Ruta | Funcionalidad |
| --- | --- |
| `/` | Productos y carrito de compras |
| `/registro` | Registro de clientes |
| `/acceso` | Firebase Authentication |
| `/archivos` | Interfaz de almacenamiento de archivos |

---

## 9. Bootstrap

Bootstrap es utilizado para implementar el diseño visual y responsive de la aplicación.

Entre los elementos utilizados se encuentran:

- Navegación.
- Cards.
- Formularios.
- Botones.
- Tablas.
- Badges.
- Alerts.
- Grid responsive.
- Utilidades de espaciado.
- Colores y estilos contextuales.

---

# Firebase

## 10. Firestore

Firebase Firestore es utilizado como base de datos en la nube.

Los datos ingresados desde el formulario de registro son almacenados en la colección:

```text
clientes
```

La aplicación realiza la conexión a Firebase desde:

```text
src/firebase.js
```

---

## 11. Authentication

Firebase Authentication utiliza el proveedor:

```text
Correo electrónico / Contraseña
```

La aplicación permite registrar usuarios, iniciar sesión, detectar sesiones activas y cerrar sesión.

---

## 12. Storage

La interfaz y las validaciones para la selección de archivos se encuentran implementadas.

La operación efectiva de carga queda condicionada a disponer de un bucket de Firebase Storage habilitado.

---

# Aplicación Android

## 13. Preparación del proyecto Android

Para generar una versión Android de la aplicación React se utilizó **Apache Cordova**.

Se creó un proyecto Cordova independiente dentro del proyecto principal:

```text
cordova/
```

La plataforma utilizada corresponde a:

```text
cordova-android 15.1.0
```

El entorno utilizado para la compilación fue:

```text
Java JDK: 17
Gradle: 8.14.2
Android SDK: instalado
Android Build Tools: 36.0.0
```

---

## 14. Compilación de React para Cordova

Vite fue configurado para generar rutas relativas mediante:

```javascript
base: './'
```

Además, la navegación de React utiliza `HashRouter` para permitir su funcionamiento dentro del WebView de Android.

La versión de producción de React se genera mediante:

```bash
npm run build
```

Los archivos resultantes se almacenan en:

```text
dist/
```

El contenido generado se copia posteriormente al directorio web de Cordova:

```text
cordova/www/
```

---

## 15. Generación del APK

La plataforma Android fue configurada mediante Cordova y Gradle.

Se verificaron los requisitos mediante:

```bash
cordova requirements
```

Posteriormente se generó correctamente un APK de depuración mediante:

```bash
cordova build android
```

El APK generado se encuentra dentro de la estructura de compilación de Android:

```text
cordova/platforms/android/app/build/outputs/apk/
```

---

## 16. Generación del APK Release

Para obtener la versión Release se utilizó el wrapper de Gradle del proyecto Android:

```bash
gradlew assembleRelease
```

Este proceso generó:

```text
app-release-unsigned.apk
```

---

## 17. Firma digital del APK

Para la firma de la aplicación se creó un almacén de claves mediante `keytool`.

Se utilizó:

- Algoritmo RSA.
- Clave de 2048 bits.
- Certificado SHA256withRSA.
- Alias específico para la aplicación.

El archivo de claves privadas se encuentra excluido del repositorio mediante `.gitignore`.

El APK Release fue procesado mediante:

```text
zipalign
```

y posteriormente firmado utilizando:

```text
apksigner
```

La verificación de la firma produjo el siguiente resultado:

```text
Verifies
Verified using v2 scheme (APK Signature Scheme v2): true
Verified using v3 scheme (APK Signature Scheme v3): true
Number of signers: 1
```

El APK final firmado corresponde a:

```text
examen-final-release.apk
```

---

## 18. Prueba en dispositivo Android

La aplicación fue instalada y probada en un dispositivo Android físico.

Durante las pruebas se verificó correctamente:

- Inicio de la aplicación.
- Navegación entre las diferentes secciones.
- Productos.
- Carrito de compras.
- Aumento y disminución de cantidades.
- Eliminación de productos.
- Formulario y validaciones.
- Registro de información en Firebase Firestore.
- Firebase Authentication.
- Inicio y cierre de sesión.
- Interfaz de selección y validación de archivos.

La aplicación funcionó correctamente durante las pruebas realizadas en el dispositivo.

---

# Estructura del proyecto

## 19. Estructura principal

```text
examen-final-react/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Almacenamiento.jsx
│   │   ├── Autenticacion.jsx
│   │   ├── Formulario.jsx
│   │   ├── ListaProductos.jsx
│   │   └── Producto.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── firebase.js
│   ├── index.css
│   └── main.jsx
│
├── cordova/
│   ├── config.xml
│   ├── package.json
│   └── www/
│
├── .env
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

> El archivo `.env` y las claves utilizadas para firmar Android no se incluyen en el repositorio.

Los directorios generados automáticamente, como `node_modules`, `dist` y `cordova/platforms`, también pueden ser excluidos del control de versiones y reconstruidos mediante las herramientas correspondientes.

---

# Ejecución

## 20. Desarrollo

Para ejecutar la aplicación durante el desarrollo:

```bash
npm run dev
```

---

## 21. Producción web

Para generar la versión optimizada:

```bash
npm run build
```

El resultado se almacena en:

```text
dist/
```

---

## 22. Estado del proyecto

Se encuentran implementados y probados:

- Componentes funcionales y componentes de clase.
- Props.
- State.
- `this.setState()`.
- Eventos.
- Comunicación entre componentes.
- Renderizado dinámico mediante `map()`.
- Formularios.
- Validaciones.
- React Router.
- HashRouter.
- Bootstrap.
- Firebase Firestore.
- Firebase Authentication.
- Interfaz y validaciones para Firebase Storage.
- Integración React con Cordova.
- Configuración Android.
- Generación de APK.
- Generación de APK Release.
- Alineación mediante Zipalign.
- Firma mediante APK Signer.
- Verificación de firma.
- Prueba de la aplicación en dispositivo Android físico.

---

## 23. Despliegue web

La aplicación será desplegada utilizando **Netlify**.

Una vez realizado el despliegue, la dirección pública será incorporada en esta sección:

```text
URL_NETLIFY
```

---

## 24. Repositorio

El código fuente del proyecto será almacenado en GitHub.

```text
URL_GITHUB
```

Una vez creado el repositorio se actualizarán tanto esta URL como el comando `git clone` indicado al comienzo de este documento.

---

## 25. Consideraciones de seguridad

Los siguientes archivos no deben ser publicados en el repositorio:

```text
.env
*.keystore
*.jks
```

El archivo `.env` contiene la configuración utilizada por la aplicación para conectarse a Firebase.

Los archivos `.keystore` y `.jks` corresponden a claves privadas utilizadas para firmar aplicaciones Android y deben mantenerse protegidos.

---

## Autor

**Carlos Jordan**

Examen Final  
**Programación de Componentes - IPLACEX**