import { Request, Response } from "npm:express@4.18.2";
import   Invoic  from "../../db/tinvoice.ts";

const getFactura = async(_req: Request, res: Response) =>{
    try{
        
        const invoice = await Invoic.findOne().exec();
        res.status(200).send({invoice});
    }catch(error){
        res.status(404).send(error.message);
        return;
    }
}

export default getFactura;