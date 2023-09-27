//this page allows the user to login or create new account
import { useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import UserDataForm from "../components/forms/UserDataForm";
import { postNewUser, loginUser } from "../components/API";

export default function Authenticate({ setToken }) {
    const API_URL = 'https://fakestoreapi.com'
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')
    const [phone, setPhone] = useState('')

    console.log(email, userName, password, firstName, lastName, city, street, number, zipcode, lat, long, phone)
    // const userData = {
    //     email: email,
    //                 username: userName,
    //                 password: password,
    //                 name:{
    //                     firstname: firstName,
    //                     lastname:lastName
    //                 },
    //                 address:{
    //                     city: city,
    //                     street: street,
    //                     number:number,
    //                     zipcode: zipcode,
    //                     geolocation:{
    //                         lat: lat,
    //                         long: long
    //                     }
    //                 },
    //                 phone: phone
    // }
    async function signUpNewUser() {

        try {
            const signUP = await postNewUser(
                email,
                userName,
                password,
                firstName,
                lastName,
                city,
                street,
                number,
                zipcode,
                lat,
                long,
                phone
            );

            console.log(signUP);
            return signUP

        } catch (error) {
            console.error(error);
        }
    };










    const logInUser = async (e) => {
        e.preventDefault()
        try {
            // Call the loginUser function to perform the login
            const result = await loginUser(userName, password);
            console.log(result);
      
            // Assuming `result` contains the token
            const userToken = result;
            localStorage.setItem('token', userToken);
            setToken(userToken);
      
            // Perform any other actions after successful login
          } catch (err) {
            console.error(err);
          }
    }





    return (
        <div>
            <div>
                <p>this page is for authenticating the user</p>
                <UserDataForm
                    setEmail={setEmail}
                    setUserName={setUserName}
                    setPassword={setPassword}
                    setFirstName={setFirstName}
                    setLastName={setLastName}
                    setCity={setCity}
                    setStreet={setStreet}
                    setNumber={setNumber}
                    setZipcode={setZipcode}
                    setLat={setLat}
                    setLong={setLong}
                    setPhone={setPhone}
                    signUpNewUser={signUpNewUser}
                />
            </div>

            <>
                <Form id='loginForm' onSubmit={logInUser}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="UserName"
                        className="mb-3"
                    >
                        <Form.Control
                            type={userName}
                            placeholder="username"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control
                            type={password}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FloatingLabel>
                    <Button type="submit" >Login</Button>
                </Form>
            </>
        </div>
    )
}