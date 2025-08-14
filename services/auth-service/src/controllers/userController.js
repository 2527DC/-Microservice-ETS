import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();


export const createUser = async (req, res) => {

    const {  email ,phone  ,password} = req.body;
    
    try {
        const user = await prisma.user.create({
        data: {
            email,
            phone,
            password,
            type:"ADMIN"
        },
        });
        res.status(201).json(user);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
    }

    