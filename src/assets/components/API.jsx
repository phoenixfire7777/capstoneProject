const API_URL = 'https://fakestoreapi.com'

// fetch all products
export async function fetchAllProducts() {
    try {
        const response = await fetch(`${API_URL}/products`)
            .then(res => res.json())
            .then(json => console.log(json))
    } catch (err) {
        console.error(err);
    }
}