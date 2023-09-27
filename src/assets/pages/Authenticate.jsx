//this page allows the user to login or create new account
import { useState } from "react";
import UserDataForm from "../components/forms/UserDataForm";
import { postNewUser } from "../components/API";
import LoginForm from "../components/forms/LoginForm";

export default function Authenticate({ setToken }) {
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

    console.log(userLogin)
    
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
            </div>
            :<div>
                <LoginForm 
                userName={userName}
                password={password}
                setToken={setToken}
                setUserName={setUserName}
                setPassword={setPassword}
                setUserLogin={setUserLogin}
                />
            </div>

                }
        </div>
    )
}