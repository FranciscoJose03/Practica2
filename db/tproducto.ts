import mongoose from "npm:mongoose@7.6.3";
import { Producto } from "../types.ts";

const schema = mongoose.Schema;
const ProductoSchema = new schema(
    {
        name: {type: String, required: true},
        stock:{type: Number, required: false, default: 0},
        description:{type: String, required: false},
        price:{type: Number, required: true}
    },
    {timestamps: false}
);

export type Product = mongoose.Document & Omit<Producto, "id">;

export default mongoose.model<Producto>("Product", ProductoSchema);