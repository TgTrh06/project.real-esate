import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';

export const register = async (req, res) => {
    const { username, email, password } = req.body;
    
    try {
        // DB operater
        console.log(req.body);

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        console.log(hashedPassword);
        
        // Store user in the database
        const newUser = await prisma.user.create({ 
            data: { 
                username, 
                email, 
                password: hashedPassword 
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to sign up!' });
    }
}

export const login = async (req, res) => {
    //db operater
    const { username, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: { username: username },
        });

        if (!user) {
            return res.status(401).json({ message: 'Invalid Credentials!' });
        }

        const isPasswordValid = await bcrupt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid Credentials!' });
        }

        res.setHeader('Set-Cookie', 'test=' + "myValue").json("success");
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to log in!' }); 
    }
}

export const logout = (req, res) => {
    //db operater
}