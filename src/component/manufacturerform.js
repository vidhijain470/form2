import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";

const Multipleinputs = () => {



    const [userRegisteration, setUserRegisteration] = useState({
        dispatchedtoid: "",
        lotnumber: "",
        primarychem: "",
        quantityforwarded: "",
        prescription: ""
    });

    const [records, setRecords ] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setUserRegisteration({...userRegisteration, [name] : value })

    }

  const handleSubmit = (e) => {
      //send data 
      e.preventDefault();

      const newRecord = {...userRegisteration, id: new Date().getTime().toString()}
       
      console.log(newRecord);
      
      setRecords([...records, newRecord]);
      console.log(newRecord);


  }

  //captcha code
  function onChange(value) {

    console.log("Captcha value:", value);
  
  }
  
  

  return (
    <>
        

        


        <h1>Manufacturer Dispatch Report</h1>

        <form class="form-container" action="" onSubmit={handleSubmit}>

                 <h3><u>Details of Dispatch</u></h3>
                 <h5>These contacts are used to inform about orders</h5>

             <div>
                <label htmlFor='dispatchedtoid'>Dispatched To (ID)</label>
                <input className='form-field' type="text" autoComplete='off'
                value={userRegisteration.dispatchedtoid}
                onChange={handleInput} 
                name="dispatchedtoid" id="dispatchedtoid" />
            </div>
           
            <div>
                <label htmlFor='lotnumber'>Lot ID</label>
                <input className='form-field' type="text" autoComplete='off'
                value={userRegisteration.lotnumber}
                onChange={handleInput} 
                name="lotnumber" id="lotnumber" />
            </div>

            <h3><u>Drug Details</u></h3>
            <h5>Details of the drugs forwarded</h5>

            <div>
                <label htmlFor='primarychem'>Drug Name </label>
                <input  className='form-field' type="text" autoComplete='off' 
                value={userRegisteration.lotnumber}
                onChange={handleInput} 
                name="primarychem" id="primarychem" />
            </div>

            <div>
                <label htmlFor='quantityforwarded'>Quantity Forwarded (in lot)</label>
                <input  className='form-field' type="text" autoComplete='off' 
                value={userRegisteration.quantityforwarded}
                onChange={handleInput} 
                name="quantityforwarded" id="quantityforwarded" />
            </div>

           
            <div>
                <label htmlFor='prescription'>Prescription Required</label>
                <input  className='form-field' type="file" autoComplete='off'
                value={userRegisteration.prescription}
                onChange={handleInput} 
                name="prescription" id="prescription" />
            </div>

            <div>
            <ReCAPTCHA

            sitekey="6Lc4z9QeAAAAAFkwnQjYTyaOJgAEFmF9na6lqWh5"

            onChange={onChange}

             />
            </div>

            <button type="submit"> Submit   </button>
        </form>
    </>
  )
}

export default Multipleinputs