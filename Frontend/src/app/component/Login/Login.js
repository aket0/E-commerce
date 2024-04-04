import "./Login.css";
import Switch from "react-switch";
import { useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";
import Link from "next/link";

const Login = (user) => {
  const [isLogged, setIsLogged] = useState(false)
  const [isSwitch, setIsSwitched] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [address, setAddress] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [jwtToken, setJwtToken] = useState("");
  const [superUser, setsuperUser] = useState(false);
  const [password, setPassword] = useState("");



  const handleSwitchChange = (checked) => {
    setIsSwitched(checked);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await fetch(`http://localhost:4000/api/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const responseData = await response.json();
            if (responseData.userExists) {
                setIsLogged(true);
                const token = responseData.userExists.token
                const decodedToken = jwtDecode(token)
                setJwtToken(decodedToken);
                console.log(decodedToken); 
            } else {
                setErrorMessage("Email or password is incorrect");
            }
        } else {
            setErrorMessage("Error connecting to the server");
        }
    } catch (error) {
        console.error("Error authenticating user:", error);
        setErrorMessage("Server error");
    }
};

      const addNewUser = async (event) => {
        event.preventDefault();
        
        try {


          
            const response = await fetch(`http://localhost:4000/api/newUser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name,
                  familyName,
                  address,
                  codePostal,
                  city,
                  superUser,
                  email,
                  password,}),
                
                
            })
            
            if (response.ok) {
                const responseData = await response.json();
                if (responseData.userExists) {
                 setIsSwitched(true);
             
                } else {
                  setIsLogged(false);
                }
              } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message);
              }
            } catch (error) {
              console.error("Erreur lors de la creation de l'utilisateur :", error);
              setErrorMessage("mail deja utilisé");
            }
          };
     
  
      return (
        <div id="loginComponent">
          {!isLogged ? (
            <div>
                <div id="loginFrame">
                  <div id="userPhotoDiv">
                  <h2 id="title">Login to the jungle.</h2>
                  </div>
                  <div id="loginFormDivi">
                    <form id="formi" onSubmit={handleSubmit} method="post">
                      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                      <label id="email">
                        E-mail
                        <input type="email" value={email} placeholder="Your e-mail" onChange={(e) => setEmail(e.target.value)} required  name="email"  />
                      </label>
                      <label id="password">
                        Password
                        <input type="password" name="password" placeholder="Your password" onChange={(e) => setPassword(e.target.value)} required  value={password} />
                      </label>
                      <Link id="link" href={`http://localhost:3000/register`}>not a tribe member ? Register now !</Link>
                      <button id="button" type="submit">Log in</button>
                    </form>
                    
                  </div>
                </div>
            </div>
          ) : (
            <div id="loged">
            <h2>Welcome back {jwtToken.name} </h2>
            <ul>
                <li>Mes information</li>
                <li>Mes achat</li>
                <li>ai ai ai</li>
                <button type="submit" onClick={() => setIsLogged(false) }>Logout</button>

            </ul>

            </div>
          )}
        </div>
      );
    }

export default Login;
