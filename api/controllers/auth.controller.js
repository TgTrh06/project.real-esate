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

export const login = (req, res) => {
    //db operater
}

export const logout = (req, res) => {
    //db operater
}