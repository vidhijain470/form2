import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import Compressor from 'compressorjs';

const Medicalform = () => {



    const [userRegisteration, setUserRegisteration] = useState({
        uidai: "",
        drlicense: "",
        lotnumber: "",
        quantity: "",
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



//    //image compression
//    const [compressedFile, setCompressedFile] = useState(null);
  
//    const handleCompressedUpload = (e) => {
//      const image = e.target.files[0];
//      new Compressor(image, {
//        quality: 0.8, // 0.6 can also be used, but its not recommended to go below.
//        success: (compressedResult) => {
//          // compressedResult has the compressed file.
//          // Use the compressed file to upload the images to your server.  

//         //  setCompressedFile(Response)
//         setUserRegisteration({...userRegisteration, prescription: compressedResult})
        

//        },
//      });
//    };
   

  //captcha code
  function onChange(value) {

    console.log("Captcha value:", value);
  
  }
  


 



  return (
    <>
        

        


        <h1>Medical Store Sales Form</h1>
        <h5>Fill in the data to report the forwarded data.</h5>

        <form class="form-container" action="" onSubmit={handleSubmit}>
            <h3><u>Details Of Dispatch</u></h3>
            <h5>These contacts are used to inform about orders</h5>
            <div>
                <label htmlFor='uidai'>Sold To (Aadhar No.)</label>
                <input className='form-field' type="text" autoComplete='off'
                value={userRegisteration.uidai}
                onChange={handleInput} 
                name="uidai" id="uidai" />
            </div>

            <div>
                <label htmlFor='drlicense'>Prescribed By (IMC ID) </label>
                <input  className='form-field' type="text" autoComplete='off' 
                value={userRegisteration.drlicense}
                onChange={handleInput} 
                name="drlicense" id="drlicense" />
            </div>

            <div>
                <label htmlFor='lotnumber'>Lot ID</label>
                <input  className='form-field' type="text" autoComplete='off' 
                value={userRegisteration.lotnumber}
                onChange={handleInput} 
                name="lotnumber" id="lotnumber" />
            </div>

            <h3><u>Drug Details</u></h3>
            <h5>Details of the drugs forwarded</h5>

            

            <div>
                <label htmlFor='quantity'>Quantity Sold</label>
                <input  className='form-field' type="text" autoComplete='off'
                value={userRegisteration.quantity}
                onChange={handleInput} 
                name="quantity" id="quantity" />
            </div>

            <div>
                <label htmlFor='prescription'>Upload Prescription </label>
                <input  className='form-field' type="file" autoComplete='off'
                value={userRegisteration.prescription}
                accept="image/*,capture=camera"
                capture="”camera"
                onChange={handleInput} 
                // onChange={(event) => this.handleCompressedUpload(event)}
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

export default Medicalform