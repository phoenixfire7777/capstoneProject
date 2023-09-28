import { useEffect, useState } from "react"
import { fetchUserData, updateUserData } from "../components/API"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserDataForm from "../components/forms/UserDataForm";
import Button from 'react-bootstrap/Button';


//allows user to view, update profile and delete account
export default function Settings({ token, authenticated, setAuthenticated }) {
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
    const [isActive, setIsActive] = useState(true)
    const id = 10


    useEffect(() => {
        if (token !== null) {
            setAuthenticated(true)

        }
        else {
            setAuthenticated(false)
        }

        async function fetchData() {
            const data = await fetchUserData(id)
            console.log(data)
            setEmail(data.email)
            setUserName(data.username)
            setPassword(data.password)
            setFirstName(data.name.firstname)
            setLastName(data.name.lastname)
            setCity(data.address.city)
            setStreet(data.address.street)
            setNumber(data.address.number)
            setZipcode(data.address.zipcode)
            setLat(data.address.geolocation.lat)
            setLong(data.address.geolocation.long)
            setPhone(data.phone)

        }

        fetchData()
    }, [])

    async function updateUser(){
        try {
            const signUP = await updateUserData(
                id,
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
            setIsActive(true)
            return signUP

        } catch (error) {
            console.error(error);
        }

    }

    return (

        <div>
            <Row>
                <h1>Profile</h1>
            </Row>
            
            {isActive
                ? < Container >
                    <Row>
                        <Col><p><strong>First Name: </strong>{firstName}</p></Col>
                        <Col><p><strong>Last Name: </strong>{lastName}</p></Col>
                    </Row>
                    <Row>
                        <Col><p><strong>Email: </strong>{email}</p></Col>
                    </Row>
                    <Row>
                        <Col><p><strong>Street: </strong>{street}</p></Col>
                        <Col><p><strong>Number: </strong>{number}</p></Col>
                    </Row>
                    <Row>
                        <Col><p><strong>City: </strong>{city}</p></Col>
                        <Col><p><strong>Zipcode: </strong>{zipcode}</p></Col>
                    </Row>
                    <Row>
                        <Col><p><strong>Latitude: </strong>{lat}</p></Col>
                        <Col><p><strong>Longitude: </strong>{long}</p></Col>
                    </Row>
                    <Row>
                        <Col><p><strong>Phone: </strong>{phone}</p></Col>
                    </Row>
                    <Button  onClick={() => setIsActive(false)}>update</Button>{' '}
                </Container >

                : <div>
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
                        authenticated={authenticated}
                        setIsActive={setIsActive}
                        updateUser={updateUser}
                    />
                    <Button  onClick={() => setIsActive(true)}>cancel</Button>{' '}

                </div>
            }
        </div>

    )
}