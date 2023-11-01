import { Request, Response } from "npm:express@4.18.2";
import Product from "../../db/tproducto.ts";

const deleteProduct = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const products = await Product.findOneAndDelete(id).exec();
        if(!products){
            res.status(404).send("Product doesn't exists");
            return;
        }
        res.status(200).send("Product deleted");
    
    }catch(error){
        res.status(404).send(error.mesage);
        return;
    }
}

export default deleteProduct;