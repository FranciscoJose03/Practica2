import mongoose from "npm:mongoose@7.6.3";
import { Invoice } from "../types.ts";

const schema = mongoose.Schema;
const InvoiceSchema = new schema(
    {
        idClient: {type: String, required: true},   
        products:{type: Array, required: true}, 
        total:{type: Number, required: false}
    },
    {timestamps: false}
);

export type Invoic = mongoose.Document & Omit<Invoice, "id">;

export default mongoose.model<Invoice>("Invoice", InvoiceSchema);