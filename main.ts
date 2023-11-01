import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";

import createProducto from "./resolvers/PRODUCTOS/CreateProducto.ts"
import getProduct from "./resolvers/PRODUCTOS/GetProductos.ts";
import deleteProduct from "./resolvers/PRODUCTOS/DeleteProducto.ts";

import createClient from "./resolvers/CLIENT/CreateClient.ts";
import getClient from "./resolvers/CLIENT/GetClient.ts";
import deleteClient from "./resolvers/CLIENT/DeleteClient.ts";

import createFactura from "./resolvers/INVOICE/FacturaInvoice.ts";
import getFactura from "./resolvers/INVOICE/GetInvoice.ts";

import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
const env = await load();

const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL")

if(!MONGO_URL){
    console.log("No mongo URL found");
    Deno.exit(1);
}

await mongoose.connect(MONGO_URL);
    

const app = express();
app.use(express.json());
app
    .post("/products", createProducto)
    .get("/products", getProduct)
    .delete("/products/:id", deleteProduct)
    
    .post("/client", createClient)
    .get("/client", getClient)
    .delete("/client/:id", deleteClient)

    .post("/invoice", createFactura)
    .get("/invoice/:id", getFactura)
    
app.listen(3000);

