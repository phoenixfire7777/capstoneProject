//this page allows the user to login or create new account
import { useState } from "react";
import UserDataForm from "../components/forms/UserDataForm";
import { postNewUser, loginUser} from "../components/API";
import LoginForm from "../components/forms/LoginForm";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';




export default function Authenticate({ setToken, setAuthenticated }) {
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
    const [userLogin, setUserLogin] = useState(false) //this sets the state to switch betwen the new user and log in forms

    const navigate = useNavigate();

    
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
            // loginUser()

            return signUP

        } catch (error) {
            console.error(error);
        }
    }

     async function login() {
        
        try {
            // Call the loginUser function to perform the login
            const result = await loginUser(userName, password);
            console.log(result);
            console.log(userName, password)
            // Assuming `result` contains the token
            const userToken = result.token;
            console.log("Token before setting in localStorage:", userToken);
            console.log(userToken)
            localStorage.setItem('token', userToken);
            console.log("Token after setting in localStorage:", localStorage.getItem("token"));
            setToken(userToken);
            setAuthenticated(true)
            navigate("/")
            
            // Perform any other actions after successful login
          } catch (err) {
            console.error(err);
          }
    }
   





    return (

        
        <div>
            
            {userLogin

            ?<div>
                
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
                    setUserLogin={setUserLogin}

                />
                <Button  onClick={() => setUserLogin(false)}>Login</Button>{' '}
            </div>
            :<div>
                <LoginForm 
                userName={userName}
                password={password}
                setToken={setToken}
                setUserName={setUserName}
                setPassword={setPassword}
                setUserLogin={setUserLogin}
                login={login}

                />
            </div>

                }
        </div>
    )
}