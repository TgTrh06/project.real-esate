import bcrypt from 'bcrypt';

export const register = async (req, res) => {
    const { username, email, password } = req.body;
    
    // DB operater
    console.log(req.body);

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(hashedPassword);
    
    // Store user in the database
}

export const login = (req, res) => {
    //db operater
}

export const logout = (req, res) => {
    //db operater
}