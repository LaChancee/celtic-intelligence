import axios from 'axios';

export default async function handler(req, res) {
    try {
        const response = await axios.get('https://obscure-refuge-04080.herokuapp.com/api/case-studies');
        const data = response.data;

        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
