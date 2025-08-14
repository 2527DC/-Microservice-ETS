import axios from "axios";
import { Router } from "express";



const route  = Router()

route.post('/message'    ,async (req, res) => {   

    const payloud = req.body;

   try {
    const authresponse = await axios.post("http://localhost:3001/message",payloud )

    const userresponse = await axios.post("http://localhost:3002/message", payloud)

    if (authresponse.status === 201 && userresponse.status === 201) {
        res.status(200).json({
            authMessage: authresponse.data,
            userMessage: userresponse.data
        });
        
    }
   } catch (error) {
    console.log("Error fetching messages:", error.message);
    
     res.status(500).json({ error: "Failed to fetch messages" });
   }
}   
);  


route.post("/create", async (req, res) => {     
    
        try {

            // res.status(201).json({ message: "User created", user });
        } catch (error) {
            // res.status(500).json({ error: "Failed to create user" });
        }
    }
);



 export default route;