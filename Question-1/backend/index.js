const express = require('express');
const axios = require('axios');
const app = express();
const cors=require('cors')
const PORT = 3001;

app.use(express.json());
app.use(cors())

app.post('/api/products', async (req, res) => {
    const { companyName, categories, minPrice, maxPrice,top } = req.body;

    try {
        const authResponse = await axios.post('http://20.244.56.144/test/auth', {
            companyName: 'AFFORDMED',
            clientID: 'b2d1bf43-1ea4-462c-af75-caa551b09a88',
            clientSecret: 'ftKAhxQXatsDUzAj',
            ownerName: 'Nagaraju',
            ownerEmail: 'nagarajuboyapally9@gmail.com',
            rollNo: '21AG1A05D8'
        });

        const access_token = authResponse.data.access_token;

        const productsResponse = await axios.get(`http://20.244.56.144/test/companies/${companyName}/categories/${categories}/products`, {
            params: {
                top,
                minPrice,
                maxPrice
            },
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });

        res.json(productsResponse.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
