import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./Register.css";
import Link from "next/link";

const Register = () => {

    
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [address, setAddress] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [jwtToken, setJwtToken] = useState("");
  const [superUser, setsuperUser] = useState(false);
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    familyName: "",
    address: "",
    codePostal: "",
    city: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (inputEmail) => {
    // Simple email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(inputEmail);
  };

  const validatePassword = (inputPassword) => {
    // Password must be at least 8 characters long and contain at least one letter and one number
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(inputPassword);
  };

  const addNewUser = async (event) => {
    event.preventDefault();

    const errorsCopy = { ...errors };

    // Reset errors
    for (let key in errorsCopy) {
      errorsCopy[key] = "";
    }

    // Validation
    if (!name) {
      errorsCopy.name = "Name is required.";
    }
    if (!familyName) {
      errorsCopy.familyName = "Family Name is required.";
    }
    if (!address) {
      errorsCopy.address = "Address is required.";
    }
    if (!codePostal) {
      errorsCopy.codePostal = "Postal Code is required.";
    }
    if (!city) {
      errorsCopy.city = "City is required.";
    }
    if (!email) {
      errorsCopy.email = "Email is required.";
    } else if (!validateEmail(email)) {
      errorsCopy.email = "Invalid email address.";
    }
    if (!password) {
      errorsCopy.password = "Password is required.";
    } else if (!validatePassword(password)) {
      errorsCopy.password = "Password must be at least 8 characters long and contain at least one letter and one number.";
    }

    setErrors(errorsCopy);

    // Check if there are any errors
    if (Object.values(errorsCopy).some((error) => error)) {
      setErrorMessage("Please fix the errors before submitting the form.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:4000/api/newUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          familyName,
          address,
          codePostal,
          city,
          email,
          password,
        }),
      });

      if (response.ok) {
        
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      }
    } catch (error) {
      console.error("Error creating user:", error);
      setErrorMessage("An error occurred while creating the user.");
    }
  };

  return (
    <div id="container">
    <Link id="rollBackLink" href="/"><FontAwesomeIcon icon={faArrowLeft}/></Link>
      <div id="image">
      <h2 id="pageTitle">Become a member of the tribe.</h2>
        <div id="registerFrame">
          <div id="loginFormDiv">
            <form onSubmit={addNewUser} method="post" id="form">
                <h3 id="registerNow">Register now.</h3>
              <label>Name*</label>
              <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
              {errors.name && <p className="error">{errors.name}</p>}

              <label>Family Name*</label>
              <input type="text" placeholder="Your family name" value={familyName} onChange={(e) => setFamilyName(e.target.value)} />
              {errors.familyName && <p className="error">{errors.familyName}</p>}

              <label>Address*</label>
              <input type="text" placeholder="Your address" value={address} onChange={(e) => setAddress(e.target.value)} />
              {errors.address && <p className="error">{errors.address}</p>}

              <label>Postal Code*</label>
              <input type="text" placeholder="Your postal code" value={codePostal} onChange={(e) => setCodePostal(e.target.value)} />
              {errors.codePostal && <p className="error">{errors.codePostal}</p>}

              <label>City*</label>
              <input type="text" placeholder="Your city" value={city} onChange={(e) => setCity(e.target.value)} />
              {errors.city && <p className="error">{errors.city}</p>}

              <label>Email*</label>
              <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
              {errors.email && <p className="error">{errors.email}</p>}

              <label>Password*</label>
              <input type="password" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)} />
              {errors.password && <p className="error">{errors.password}</p>}

              <button type="submit">Register</button>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
