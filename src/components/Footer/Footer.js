import React from 'react'
import { Element } from 'react-scroll'
import contact from "../Assests/contact.jpg"
import { useState,useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Footer.css"

const Footer = () => {
  const initialValue = {
    name : "",
    PhoneNumber : "",
    email : "",
    msg : "",
    design:"",
    size:""
  }
  const [formValue,setFormValue] = useState(initialValue)
  const form = useRef();
  const handleForm=(e)=>{
    const value = e.target.value
    setFormValue({
      ...formValue,
      [e.target.name]:value
    })
  }
  // console.log("cxdkjvhvdx",formValue)
  const handleSubmit = (e)=>{
    e.preventDefault()
    emailjs.sendForm('service_cki0suu', 'template_5zv7kfm', form.current, 'n3W80hZ6mXwrc9JDC')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    setFormValue(initialValue)
  }
  return (
    <Element name='contact'>
    <div className='contact_img'>
        <img src={contact}></img>
       </div>
       <div className="header-content ">
        <div className='content'>
       <strong> Customized Cakes Delivered At Your DoorSteps</strong>    
            </div>
          
          <div className="asp-sub-header-form  mt-3">
            <form className="asp-form" ref={form} onSubmit={handleSubmit}>
              <input
                type={"text"}
                className="asp-input"
                placeholder="Name"
                onChange={handleForm}
                name="name"
                value={formValue.name}
                required
              ></input>
              <hr></hr>
              <input
                type={"number"}
                className="asp-input"
                placeholder="Phone Number"
                onChange={handleForm}
                name="PhoneNumber"
                value={formValue.PhoneNumber}
                required
              ></input>
              <hr></hr>
              <input
                type={"email"}
                className="asp-input"
                placeholder="Email"
                onChange={handleForm}
                name="email"
                value={formValue.email}
                required
              ></input>
              <hr></hr>
              <textarea className='text_area' value={formValue.msg} name='msg' placeholder='write instruction on cake' ></textarea>
              <hr/>
              <select className="input_kg" name="design" value={formValue.design} onChange={handleForm} >
                <option>Select Cake Shape</option>
                <option>Round</option>
                <option>Heart</option>
                <option>Square</option>
                <option>oval</option>
                <option>Reactangle</option>
                <option>customize</option>
              </select><br></br>
              <select className='input_kg' name='size' value={formValue.size} onChange={handleForm}>
                <option>Size</option>
                <option>1kg</option>
                <option>2kg</option>
                <option>3kg</option>
                <option>4kg</option>
                <option>5kg</option>
                <option>6kg</option>
                <option>7kg</option>
                <option>8kg</option>
                <option>9kg</option>
                <option>10kg</option>
              </select>
          
              
              <br></br>
              <input type="checkbox" className="pt-2 me-2"></input>
              <span>
                
              </span>
              <br></br>
              <button className="btn btn-primary">
                Add To Cart
              </button>
            </form>
            </div>
            </div>
      </Element>
      
  )
}

export default Footer