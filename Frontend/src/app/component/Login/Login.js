import "./Login.css";
import Switch from "react-switch";
import { useState } from "react";
import { User } from "src/app/object/User";

function Login({ user }) {
  const [isLogged, setIsLogged] = useState(false)
  const [isSwitch, setIsSwitched] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [address, setAddress] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [superUser, setsuperUser] = useState(false);
  const [password, setPassword] = useState("");
  const [rowPassword, setRowPassword] = useState("")


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
            
        })
        if (response.ok) {
            const responseData = await response.json();
            if (responseData.userExists) {
             setIsLogged(true)
              
              
            } else {
              setIsLogged(false);
             
             
             
            }
          } else {
            const errorData = await response.json();
            setErrorMessage(errorData.message);
          }
        } catch (error) {
          console.error("Erreur lors de la vérification de l'utilisateur :", error);
          setErrorMessage("Erreur serveur lors de la vérification de l'utilisateur");
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
                 setIsLogged(true)
                  
                  
                } else {
                  setIsLogged(false);
                 
                 
                 
                }
              } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message);
              }
            } catch (error) {
              console.error("Erreur lors de la vérification de l'utilisateur :", error);
              setErrorMessage("Erreur serveur lors de la vérification de l'utilisateur");
            }
          };
  
      return (
        <div className="loginComponent">
          {!isLogged ? (
            <div>
              <div className="switchFrame">
                <p className="switchValue" style={{ color: isSwitch ? "#000000" : "forestgreen" }}>
                  Login
                </p>
                <Switch
                  onChange={handleSwitchChange}
                  checked={isSwitch}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onHandleColor="#228B22"
                  onColor="#d3d3d3"
                  offHandleColor="#228B22"
                  offColor="#d3d3d3"
                />
                <p className="switchValue" style={{ color: isSwitch ? "forestgreen" : "#000000" }}>
                  Register
                </p>
              </div>
              {!isSwitch ? (
                <div className="loginFrame">
                  <div className="userPhotoDiv"></div>
                  <div className="loginFormDiv">
                    <form onSubmit={handleSubmit} method="post">
                      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                      <label>
                        email
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required  name="email"  />
                      </label>
                      <label>
                        password
                        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} required  value={password} />
                      </label>
                      <button type="submit">
                        <span>log in</span>
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="registerFrame">
                  <div className="userPhotoDiv"></div>
                  <div className="loginFormDiv">
                    <form onSubmit={addNewUser} method="post">
                    <label>Name
                    <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>Family Name
                    <input type="text" placeholder="Your family name" value={familyName} onChange={(e) => setFamilyName(e.target.value)} />
                    </label>
                    <label>
                      Address
                      <input type="text" placeholder="Your address" value={address} onChange={(e) => setAddress(e.target.value)} />
                      </label>
                      <label>
                      Postal Code
                      <input type="text" placeholder="Your postal code" value={codePostal} onChange={(e) => setCodePostal(e.target.value)} />
                      </label>
                    <label>
                      City
                      <input type="text" placeholder="Your city" value={city} onChange={(e) => setCity(e.target.value)} />
                    </label>        
                    <label>
                      Email
                      <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                      Password
                      <input type="password" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button type="submit">Register</button>

                    </form>
                    
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="loged">
            <h2>Welcome back friend </h2>
            <ul>
                <li>Mes information</li>
                <li>Mes achat</li>
                <li>ai ai ai</li>
                <input type="button" placeholder="logout" onClick={() => setIsLogged(false) }/>

            </ul>

            </div>
          )}
        </div>
      );
    }

export default Login;
