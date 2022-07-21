import '../pages/Reservation.css';
import {useState} from 'react';

export default function InfoTab() {

    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const inputs = [fname, lname, email, phone];
    const handleFNameChange = (e) => {
        setFName(e.target.value);
    }
    const handleLNameChange = (e) => {
        setLName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }

    const checkEmpty = (e) => {
        let isEmpty = false;
        inputs.forEach(input => {
            console.log(input);
            if (input.trim().length === 0) {

                isEmpty = true;
            }
        });
        if (isEmpty) {
            alert('Please fill in all fields');
            e.preventDefault();
            return;
        }

    }

    return (
        <form onSubmit={checkEmpty}>
            <label>
                <input type="text" id="fName" name="fName" className='input' onChange={handleFNameChange} placeholder='First Name'/>
            </label>
            <label>
                <input type="text" id="lName" name="lName" className='input' onChange={handleLNameChange} placeholder='Last Name' style={{top : "40%"}}/>
            </label>
            <label>
                <input type="text" id="email" name="time" className='input' onChange={handleEmailChange} placeholder='Email'style={{top : "60%"}}/>
            </label>
            <label>
                <input type="text" id="phone" name="phone" className='input' onChange={handlePhoneChange} placeholder='Phone Number (Optional)'style={{top : "80%"}}/>
            </label>
            <input type="submit" value="Submit" className='submit'/>
        </form>
    )
}