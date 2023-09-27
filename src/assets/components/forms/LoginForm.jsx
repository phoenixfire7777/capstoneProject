import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { loginUser } from '../API';


export default function LoginForm({userName, password, setToken, setUserName, setPassword, setUserLogin}){

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
    return(
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
                    <Button  onClick={() => setUserLogin(true)}>Sign up </Button>{' '}
                </Form>
            </>
    )
}