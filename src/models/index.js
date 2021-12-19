import ContenedorSQL from "./ContenedorSQL.js";
import config from "../config.js";

const productosModel = new ContenedorSQL(config.mariaDb, "productos");
const messagesModel = new ContenedorSQL(config.sqlite3, "mensajes");
export { productosModel, messagesModel };
