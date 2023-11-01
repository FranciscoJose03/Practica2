import {Request, Response} from "npm:express@4.18.2";
import Product from "../../db/tproducto.ts";

const createProducto = async (req:Request, res: Response)  => {
    try{
        const {name, stock, description, price} = req.body;
        if(!name || !price || price < 0){
                res.status(400).send("Name or price are required (Price has to be over 0)");
                return;
        }
        const alreadyExists = await Product.findOne({name}).exec();
        if(alreadyExists){
            res.status(400).send("The product already exists");
            return;
        }
    
        const newProduct = new Product({name, stock, description, price});
        await newProduct.save();

        res.status(200).send({
            name: newProduct.name,
            stock: newProduct.stock,
            description: newProduct.description,
            price: newProduct.price,
            id: newProduct._id.toString(),
        })
    }catch(error){
        res.status(500).send(error.message);
        return;
    }
}

export default createProducto;