import { Request, Response } from "npm:express@4.18.2";
import  Invoic  from "../../db/tinvoice.ts";
import  Client from "../../db/tclient.ts";

const createFactura = async (req: Request, res: Response) => {
    try{
        const {idClient, products, total} = req.body;
        const _id = idClient;

        if(!idClient || !products|| !total){
            res.status(400).send("Name, Products or price are required");
            return;
        }
        
        const alreadyExists = await Client.findOne({_id});
        if(!alreadyExists){
            res.status(400).send("No client found");
        }
        const newInvoice = new Invoic({idClient, products, total});
        await newInvoice.save();
         
        res.status(200).send({
            idClient: newInvoice.idClient,
            products: newInvoice.products,
            total: newInvoice.total,
            id: newInvoice._id.toString(),            
        })
    }catch(error){
        res.status(500).send(error.message);
        return;
    }
}

export default createFactura;