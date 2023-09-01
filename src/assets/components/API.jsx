const API_URL = 'https://fakestoreapi.com'

// fetch all products
export async function fetchAllProducts() {
    try {
        const response = await fetch(`${API_URL}/products`)
            const result =await response.json();
           
            return result
    } catch (err) {
        console.error(err);
    }
}