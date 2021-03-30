const headers = { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
   }

const getData = async (url) => {
    try {
        const res = await fetch(url, {headers});
        const data = await res.json();

        return data;
    } catch (err) {
        throw new Error('Failed to get products', err);
    }
};

const url = 'data/products.json';
const data = getData(url);

export default data;