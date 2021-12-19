import Knex from "knex";
import config from "../src/config.js";
import { productos, mensajes } from "./datosDePrueba.js";

async function crearTablaProductos(config) {
  const knex = Knex(config);
  try {
    await knex.schema.dropTableIfExists("productos");

    await knex.schema.createTable("productos", table => {
      table.increments("id");
      table.string("title", 50).notNullable();
      table.float("price").unsigned().notNullable();
      table.string("thumbnail", 1024);
    });

    console.log("Tabla 'productos' creada con éxito");
  } catch (error) {
    console.log("Error al crear tabla de productos: ", error);
  } finally {
    knex.destroy();
  }
}

async function crearTablaMensajes(config) {
  const knex = Knex(config);
  try {
    await knex.schema.dropTableIfExists("mensajes");

    await knex.schema.createTable("mensajes", table => {
      table.increments("id");
      table.string("user", 50).notNullable();
      table.text("text").notNullable();
      table.bigInteger("fyh").notNullable();
    });

    console.log("Tabla 'mensajes' creada con éxito");
  } catch (error) {
    console.log("Error al crear tabla de mensajes: ", error);
  } finally {
    knex.destroy();
  }
}

async function cargaProductosPrueba(config, products) {
  const knex = Knex(config);
  try {
    await knex("productos").insert(products);
    console.log("Productos de prueba cargados");
  } catch (error) {
    console.log("Error al cargar productos de prueba: ", error);
  } finally {
    await knex.destroy();
  }
}

async function cargaMensajesPrueba(config, messages) {
  const knex = Knex(config);
  try {
    await knex("mensajes").insert(messages);
    console.log("Mensajes de prueba cargados");
  } catch (error) {
    console.log("Error al cargar mensajes de prueba: ", error);
  } finally {
    await knex.destroy();
  }
}

await crearTablaProductos(config.mariaDb);
await cargaProductosPrueba(config.mariaDb, productos);
await crearTablaMensajes(config.sqlite3);
await cargaMensajesPrueba(config.sqlite3, mensajes);
