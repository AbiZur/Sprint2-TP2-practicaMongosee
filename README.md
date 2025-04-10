# Proyecto: CRUD de Superhéroes con MongoDB
**TP2 - Sprint 2, Módulo 3**

## 📌 Descripción

Este proyecto fue desarrollado en el marco de la **Diplomatura Universitaria en Desarrollo Web Full Stack con JavaScript**, dictada por el **Nodo Tecnológico** y la **Universidad Nacional de Catamarca**.

Implementamos una aplicación en Node.js que permite realizar operaciones básicas (CRUD) sobre una base de datos de superhéroes utilizando MongoDB y Mongoose. A través de funciones asíncronas, se pueden insertar, consultar, actualizar y eliminar documentos de la colección `Grupo-02`.


## 🛠️ Tecnologías utilizadas

- Node.js
- Mongoose (ODM para MongoDB)
- ECMAScript Modules (ESM)
- MongoDB Atlas

## 📁 Operaciones disponibles

### 🔹 Insertar un superhéroe
Crea un nuevo documento en la colección `Grupo-02`.

```js
await hero.save();
```

### 🔹 Actualizar un superhéroe
Actualiza la edad de un superhéroe por su nombre.

```js
await SuperHero.updateOne({ nombreSuperHeroe: "Nombre" }, { $set: { edad: nuevaEdad } });
```

### 🔹 Eliminar un superhéroe
Elimina un documento de la colección por nombre.

```js
await SuperHero.deleteOne({ nombreSuperHeroe: "Nombre" });
```

### 🔹 Buscar superhéroes por condición
Busca todos los superhéroes cuyo `planetaOrigen` sea `"Tierra"`.

```js
await SuperHero.find({ planetaOrigen: 'Tierra' });
```

## 🧠 Conceptos trabajados

- Funciones asincrónicas con `async/await`
- Conexión a MongoDB Atlas
- Definición de esquemas con Mongoose
- Métodos `.save()`, `.find()`, `.updateOne()` y `.deleteOne()`
- Validaciones, valores por defecto y estructura de colección

## 🎓 Alumna
**Debora Abigail Zurita Rojo**
