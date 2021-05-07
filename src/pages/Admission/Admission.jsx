import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DatePicker from "react-datepicker";

import firebase from '../../firebase';

import { useHistory } from "react-router-dom";



import "react-datepicker/dist/react-datepicker.css";

import './admission.scss';

const useStyles = makeStyles(() => ({
  
    input:{
        marginRight:"1rem",
       
    }
  }));
  


const Admission = () => {

    const history = useHistory();

    const [personal, SetPersonal] =useState(true);
    const [acadamic, SetAcadamic] =useState(false);

    const [startDate, setStartDate] = useState(new Date());

    const [formData, setFormData] = useState({
        name:"",
        gender:"",
        nationality:"",
        religion:"",
        community:"",
        aadhaar:"",
        address:"",
        pincode:"",
        motherTongue:"",
        classAdm:""
    })

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const {name, 
        gender, 
        nationality, 
        religion,
        community,
        aadhaar,
        address,
        pincode,
        motherTongue,
        classAdm
    } = formData;

    const openPersonal = () =>{
        SetPersonal(!personal)
    }

    const openAcadamic = () =>{
        SetAcadamic(!acadamic)
    }
    

    const onSubmit = async (e) => {
        e.preventDefault();
        // console.log("clicked", formData)
        const formRef = firebase.database().ref("onlineAdmission");
        // formRef.push(formData);
        history.push("/formconfirmation");
    }


    return (
        <> 
         <h1>Admissions</h1>

         <section className="admission">
             <h2>Applicants Details</h2> 
             <hr/>

             <form action="submit" className="admission__form" 
            onSubmit={e => onSubmit(e)}>
               
            <div className="admission__form--personal">

                <span className="admission__form--personal-heading" onClick={openPersonal}>
                    <h3>1. Personal Details</h3>
                    <i className="fas fa-chevron-down"></i>
                </span>
                
                <div className={personal?"admission__form-content-show":"admission__form-content"}>

                <div className="admission__form--group row">
                     <p className="col-3">Class into admission sought for </p>
                     <input type="text" className="admission__form--input col-4" name="classAdm" 
                        value={classAdm}  
                        onChange={e => onChange(e)}
                        placeholder="Enter your Class"/>    
                    </div>

                    <div className="admission__form--group row">

                        <p className="col-3">Name:</p>

                        <input type="text" className="admission__form--input col-4" name="name" value={name} placeholder="Your Name" 
                        onChange={e => onChange(e)}
                        />
                      
                    </div>

                    <div className="admission__form--group row">
                    <p className="col-3">Date of Birth:</p>

                    <DatePicker selected={startDate} onChange={date => setStartDate(date)} className="" />

                       
                    </div>
                    
                    <div className="admission__form--group row">
                    <p className="col-3">Gender:</p>
                        <select 
                        name="gender" 
                        id="" className="col-4" 
                        value={gender}  
                        onChange={e => onChange(e)}
                        >
                            <option value="null">-select-</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>

                    <div className="admission__form--group row">
                    <p className="col-3">Nationality:</p>
                        <select 
                        name="nationality" 
                        id="" 
                        className="col-4"
                        value={nationality}  
                        onChange={e => onChange(e)}
                        >
                            <option value="null">-select-</option>
                            <option value="Indian">Indian</option>
                            <option value="Other">Others</option>
                        </select>
                    </div>

                    <div className="admission__form--group row">
                    <p className="col-3">Religion:</p>
                        <select name="religion" id="" className="col-4"
                           value={religion}  
                           onChange={e => onChange(e)}
                        >
                            <option value="null">-select-</option>
                            <option value="Christianity">Christianity</option>
                            <option value="Hinduism">Hinduism</option>
                            <option value="Islam">Islam</option>
                            <option value="Jainism">Jainism</option>
                            <option value="Buddhism">Buddhism</option>
                            <option value="Others">Others</option>

                        </select>
                    </div>

                    <div className="admission__form--group row">
                    <p className="col-3">Mother Tongue:</p>
                    <input type="text" className="admission__form--input col-4" name="motherTongue" 
                        value={motherTongue}  
                        onChange={e => onChange(e)}
                        placeholder="Enter your Mother Tongue"/>   
                       
                    </div>

                    <div className="admission__form--group row">
                     <p className="col-3">Community:</p>
                        <select name="community"
                         id="" 
                         value={community}  
                         onChange={e => onChange(e)}
                         className="col-4">
                            <option value="null">-select-</option>
                            <option value="OC">OC</option>
                            <option value="BC/OBC">BC/OBC </option>
                            <option value="MBC">MBC</option>
                            <option value="SC/ST">SC/ST</option>

                        </select>
                    </div>

                    <div className="admission__form--group row">
                     <p className="col-3">Aadhaar Number</p>
                     <input type="text" className="admission__form--input col-4" name="aadhaar" 
                        value={aadhaar}  
                        onChange={e => onChange(e)}
                        placeholder="Aadhaar Number"/>    
                    </div>

                    <div className="admission__form--group row">
                     <p className="col-3">Address</p>
                     <textarea type="text" className="admission__form--input col-4" name="address" 
                        value={address}  
                        onChange={e => onChange(e)}
                        placeholder="Enter your address"/>    
                    </div>

                    <div className="admission__form--group row">
                     <p className="col-3">Pincode</p>
                     <input type="text" className="admission__form--input col-4" name="pincode" 
                        value={pincode}  
                        onChange={e => onChange(e)}
                        placeholder="Enter your pincode"/>    
                    </div>

                    
                    
                </div>  
               
            </div>

          
            <button type="submit" className=" btn btn-success col-2">Submit</button>

            </form>
         </section>


        </>
    );
};

export default Admission;