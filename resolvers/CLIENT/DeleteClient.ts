import { Request, Response } from "npm:express@4.18.2";
import  Client  from "../../db/tclient.ts";

const deleteClient = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const client = await Client.findOneAndDelete(id).exec();
        if(!client){
            res.status(404).send("Client doesn't exists");
            return;
        }
        res.status(200).send("Client deleted");
    
    }catch(error){
        res.status(404).send(error.mesage);
        return;
    }
}

export default deleteClient;