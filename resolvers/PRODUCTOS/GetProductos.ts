import { Request, Response } from "npm:express@4.18.2";
import Product from "../../db/tproducto.ts";

const getProduct = async(_req: Request, res: Response) => {
    try{
        const product = await Product.find().exec();
        res.status(200).send({product})
    }catch(error){
        res.status(404).send(error.message);
        return;
    }
}

export default getProduct;