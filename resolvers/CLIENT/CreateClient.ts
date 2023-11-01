import {Request, Response} from "npm:express@4.18.2";
import  Client  from "../../db/tclient.ts";

const createClient = async (req:Request, res: Response)  => {
    try{
        const {name, cif} = req.body;
        if(!name || !cif){
                res.status(400).send("Name or cif are required");
                return;
        }
        
        const alreadyExists = await Client.findOne({name});
        if(alreadyExists){
            res.status(400).send("The client already exists");
            return;
        }
    
        const newClient = new Client({name, cif});
        await newClient.save();

        res.status(200).send({
            name: newClient.name,
            cif: newClient.cif,
            id: newClient._id.toString(),
        })
    }catch(error){
        res.status(500).send(error.message);
        return
    }
}

export default createClient;