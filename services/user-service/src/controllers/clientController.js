import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

 export const createClient = async (req, res) => {

    try {
        const { name, email ,phone } = req.body;
        const newClient = await prisma.client.create({
        data: { 
            name,
            email,
            phone
        },
        });
        res.status(201).json(newClient);
    } catch (error) {
        console.error("Error creating client:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};