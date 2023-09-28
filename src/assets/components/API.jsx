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
//fetch single product
export async function fetchProduct(id) {
    try {
        const response = await fetch(`${API_URL}/products/${id}`)
            const result =await response.json();
           console.log(result)
            return result
    } catch (err) {
        console.error(err);
    }
}
//creats new user
export async function postNewUser(email, userName, password, firstName, lastName, city, street, number, zipcode, lat, long, phone) {
    try {
        const response = await fetch(`${API_URL}/users`, {
          method: "POST",
          body: JSON.stringify({
            email: email,
            username: userName,
            password: password,
            name: {
              firstname: firstName,
              lastname: lastName
            },
            address: {
              city: city,
              street: street,
              number: number,
              zipcode: zipcode,
              geolocation: {
                lat: lat,
                long: long
              }
            },
            phone: phone
          })
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const result = await response.json();
        console.log(result);
       return result
      } catch (err) {
        console.error(err);
      }

}

//logs in user
export async function loginUser(userName, password) {
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
          method: "POST",
          body: JSON.stringify({
            username: userName,
            password: password
          }),
          headers: {
            'Content-Type': 'application/json' // Set the Content-Type header
          }
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const result = await response.json();
        console.log(result);
        return result
        
      } catch (err) {
        console.error(err);
      }
}

export async function fetchUserData(id){
    try{
        const response = await fetch(`${API_URL}/users/${id}`)
            const result =await response.json();
           
            return result
    }
    catch (err) {
        console.error(err);
      }
}

export async function updateUserData(id, email, userName, password, firstName, lastName, city, street, number, zipcode, lat, long, phone){
    try {
        const response = await fetch(`${API_URL}/users/${id}`, {
          method: "PUT",
          body: JSON.stringify({
            email: email,
            username: userName,
            password: password,
            name: {
              firstname: firstName,
              lastname: lastName
            },
            address: {
              city: city,
              street: street,
              number: number,
              zipcode: zipcode,
              geolocation: {
                lat: lat,
                long: long
              }
            },
            phone: phone
          })
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const result = await response.json();
        console.log(result);
       return result
      } catch (err) {
        console.error(err);
      }
}

