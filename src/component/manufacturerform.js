import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import Compressor from 'compressorjs';

const Multipleinputs = () => {



    const [userRegisteration, setUserRegisteration] = useState({
        dispatchedtoid: "",
        lotnumber: "",
        primarychem: "",
        quantityforwarded: "",
        prescription: null
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


  //    //image compression
//    const [compressedFile, setCompressedFile] = useState(null);
  
const handleCompressedUpload = (e) => {
    const image = e.target.files[0];
    new Compressor(image, {
      quality: 0.8, // 0.6 can also be used, but its not recommended to go below.
      success: (compressedResult) => {
        // compressedResult has the compressed file.
        // Use the compressed file to upload the images to your server.  

       //  setCompressedFile(Response)
       setUserRegisteration({...userRegisteration, prescription: compressedResult})
       

      },
    });
  };
  

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

           
            {/* <div>
                <label htmlFor='prescription'>Prescription Required</label>
                <input  className='form-field' type="file" autoComplete='off'
                value={userRegisteration.prescription}
                onChange={handleInput} 
                name="prescription" id="prescription" />
            </div> */}

            <div>
                <label htmlFor='prescription'>Upload Prescription </label>
                <input  className='form-field' type="file" autoComplete='off'
                // value={userRegisteration.prescription}
                accept="image/*,capture=camera"
                capture="”camera"
                // onChange={handleInput} 
                onChange={handleCompressedUpload}
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