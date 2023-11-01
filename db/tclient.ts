import mongoose from "npm:mongoose@7.6.3";
import { Cliente } from "../types.ts";

const schema = mongoose.Schema;
const ClienteSchema = new schema(
    {
        name: {type: String, required: true},
        cif:{type: Number, required: true}
    },
    {timestamps: false}
);

export type Client = mongoose.Document & Omit<Cliente, "id">;

export default mongoose.model<Cliente>("Client", ClienteSchema);