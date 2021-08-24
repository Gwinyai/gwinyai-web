import styles from '../styles/Application.module.css'
import { useState } from "react"

const Application = () => {
    const [firstName, setFirstName] = useState("")
    const [firstNameError, setFirstNameError] = useState("")
    const [lastName, setLastName] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [phone, setPhone] = useState("")
    const [phoneError, setPhoneError] = useState("")
    const [isNodeSelected, setNodeSelected] = useState(false)
    const [isReactSelected, setReactSelected] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
    };

    const handleFirstNameChange = (e) => {
        const firstName = e.target.value;
        if (firstName.length == 0) {
            setFirstNameError("First name is required")
            return
        }
        else if (firstName.length < 2) {
            setFirstNameError("First name is too short")
            return
        } else if (firstName.length > 35) {
            setFirstNameError("First name is too long")
            return
        }
        setFirstNameError("")
        setFirstName(firstName)
    }

    const handleLastNameChange = (e) => {
        const lastName = e.target.value;
        if (lastName.length == 0) {
            setLastNameError("Last name is required")
            return
        }
        else if (lastName.length < 2) {
            setLastNameError("Last name is too short")
            return
        } else if (lastName.length > 35) {
            setLastNameError("Last name is too long")
            return
        }
        setLastNameError("")
        setLastName(lastName)
    }

    const handleEmailChange = (e) => {
        const email = e.target.value;
        const expression = /\S+@\S+/;
        let validEmail = expression.test(String(email).toLowerCase());
        if (!validEmail) {
            setEmailError("Email is invalid")
            return
        }
        setEmailError("")
        setEmail(email)
    }

    const handlePhoneChange = (e) => {
        const phone = e.target.value;
        if (phone.length == 0) {
            setPhoneError("Phone number is required")
            return
        } else if (!(/^\d+$/.test(phone))) {
            setPhoneError("Only numbers are allowed")
            return
        }
        setPhoneError("")
        setPhone(phone)
    }

    const handleNodeChange = (e) => {
        const isSelected = e.target.checked
        setNodeSelected(isSelected)
    }

    const handleReactChange = (e) => {
        const isSelected = e.target.checked
        setReactSelected(isSelected)
    }

    return (
        <div className="jumbotron verticalCenter">
        <div className="container">
            <h1 className={styles.title}>Course Application</h1>
            <p className={styles.detail}>Choose whether you would like to do NodeJS or ReactJS (or both). For full details of the course please have a look at the course curriculum here. Once your application has been approved you will be asked to make a payment.</p>
            <form onSubmit={onSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="firstname">First Name:</label>
                    <input name="firstname" 
                    className={`form-control ${!!firstNameError ? "is-invalid" : ""}`} 
                    placeholder="Enter First Name" 
                    id="firstname" 
                    autoFocus
                    onChange={handleFirstNameChange} />
                    <div className="invalid-feedback">{firstNameError}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Last Name:</label>
                    <input name="lastname" 
                    className={`form-control ${!!lastNameError ? "is-invalid" : ""}`} 
                    placeholder="Enter Last Name" 
                    onChange={handleLastNameChange}
                    id="lastname" />
                    <div className="invalid-feedback">{lastNameError}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" 
                    name="email" 
                    className={`form-control ${!!emailError ? "is-invalid" : ""}`}
                    placeholder="Enter Email" 
                    id="email" 
                    onChange={handleEmailChange}
                    />
                    <div className="invalid-feedback">{emailError}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <div className="input-group">
                    <div className="input-group-prepend" style={{margin: "15px 0 0 0"}}>
                        <span className="input-group-text">+263</span>
                    </div>
                    <input name="phone" 
                    className={`form-control ${!!phoneError ? "is-invalid" : ""}`} 
                    placeholder="Enter Phone Number" 
                    id="phone"
                    onChange={handlePhoneChange}  />
                    <div className="invalid-feedback">{phoneError}</div>
                    </div>
                </div>
                <div className="form-group">
                <label>Select Courses:</label>
                <div className={styles.checkboxSection}>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="nodejs" value="nodejs" onChange={handleNodeChange} />
                    <label className="form-check-label" htmlFor="nodejs">NodeJS</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="reactjs" value="reactjs" onChange={handleReactChange} />
                    <label className="form-check-label" htmlFor="nodejs">ReactJS</label>
                </div>
                </div>
                </div>
                <div className="form-group">
                <label htmlFor="skill">Your Skill Level with Javascript:</label>
                <select className="form-control" id="skill">
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Professional</option>
                </select>
                </div>
                <div className="form-group">
                <label htmlFor="time">Your Preferred Time for Lessons:</label>
                <select className="form-control" id="time">
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                </select>
                </div>
                <div className="d-grid gap-2">
                <button type="button" className={["btn", "btn-primary", styles.submitButton].join(' ')}>Apply</button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Application;