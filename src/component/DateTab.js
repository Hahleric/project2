import '../pages/Reservation.css';
import {useState} from 'react';

export default function DateTab() {

    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const inputs = [fname, lname];
    const handleFNameChange = (e) => {
        setFName(e.target.value);
    }
    const handleLNameChange = (e) => {
        setLName(e.target.value);
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
        else{
            alert('Thank you for your reservation, your reservation has been sent to the restaurant');
            e.preventDefault();
        }

    }

    return (
        <form onSubmit={checkEmpty}>
            <label>
                <input type="time" id="fName" name="fName" className='input' onChange={handleFNameChange} placeholder='00:00'/>
            </label>
            <label>
                <input type="date" id="lName" name="lName" className='input' onChange={handleLNameChange} style={{top : "40%"}}/>
            </label>
            <input type="submit" value="Submit" className='submit'/>
        </form>
    )
}