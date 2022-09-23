import React from 'react';
import './ContactStyles.css'

const Contact = () => {
  return (
    <div className="contact">
        <div className="container">
            <div className="form-container">
                <form>
                    <h1><span>Contact</span> Us</h1>
                    <div>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter your name' />
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="email" name="" id="" placeholder='Enter your email' />
                    </div>
                    <div>
                        <label htmlFor="">Message</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Enter a message'></textarea>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;