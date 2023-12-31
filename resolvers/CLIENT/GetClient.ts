import { Request, Response } from "npm:express@4.18.2";
import  Client  from "../../db/tclient.ts";

const getClient = async(_req: Request, res: Response) => {
    try{
        const client = await Client.find().exec();
        res.status(200).send({client});
    }catch(error){
        res.status(404).send(error.message);
        return;
    }
}

export default getClient;