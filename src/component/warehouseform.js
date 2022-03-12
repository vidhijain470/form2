import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";

const Warehouseform = () => {



    const [userRegisteration, setUserRegisteration] = useState({
        dispatchedtoid: "",
        lotnumber: "",
        quantityforwarded: ""
        // password: ""
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
        

        


        <h1>Warehouse Dispatch Report</h1>
        <h5>Fill in the data to report the forwarded data.</h5>

        <form class="form-container" action="" onSubmit={handleSubmit}>
            
                   <h3><u>Details of Dispatch</u></h3>
                   <h5>These contacts are used to inform about orders</h5>

            <div>
                <label htmlFor='dispatchedtoid'>Dispatched to (ID)</label>
                <input className='form-field' type="text" autoComplete='off'
                value={userRegisteration.dispatchedtoid}
                onChange={handleInput} 
                name="warehouseid" id="warehouseid" />
            </div>

            

            <div>
                <label htmlFor='lotnumber'>Lot ID </label>
                <input  className='form-field' type="text" autoComplete='off' 
                value={userRegisteration.lotnumber}
                onChange={handleInput} 
                name="lotnumber" id="lotnumber" />
            </div>

            <h3><u>Drug Details</u></h3>
            <h5>Details of the drugs forwarded</h5>

            <div>
                <label htmlFor='quantityforwarded'>Quantity Forwarded</label>
                <input  className='form-field' type="text" autoComplete='off' 
                value={userRegisteration.quantityforwarded}
                onChange={handleInput} 
                name="quantityforwarded" id="quantityforwarded" />
            </div>

            {/* <div>
                <label htmlFor='password'>Password</label>
                <input  className='form-field' type="password" autoComplete='off'
                value={userRegisteration.password}
                onChange={handleInput} 
                name="password" id="password" />
            </div> */}

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

export default Warehouseform