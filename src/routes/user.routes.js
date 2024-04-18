import { Router } from "express";
import { generateUser } from "../mocks/user.mocks.js";

const router = Router();

router.get('/mock', (req,res)=>{
    const users = [];
    //Endpoint que devolverá 100 usuarios de prueba.
    for(let i=0;i<5;i++){
        users.push(generateUser());
    }
    res.send({status:"success",payload:users})
})

export default router;