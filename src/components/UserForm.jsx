import React from 'react'

const UserForm = () => {
  return (
    <div className='form_wrap'>
        <form action="">
            <div className="name_container">

                <div className='firstName flex'>
                    <label htmlFor="">First Name</label>
                    <input type="text" name="" id="first_name" placeholder='Enter your first name'/>
                </div>
                <div className="lastName flex">
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="" id="last_name" placeholder='Enter your last name'/>
                </div>

            </div>

            <div className='email flex'>
                <label htmlFor="">Email</label>
                <input type="email" name="" id="email" placeholder='yourname@email.com'/>
            </div>

            <div className="message flex">
                <label htmlFor="">Message</label>
                <textarea name="" id="message" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
            </div>

            <div className="checkbox">
                <input type="checkbox" name="checkbox" id="checkBoxBtn"  className='checkbox_btn'/>
                <label htmlFor="">You agree to providing your name to {/* {name} */} who may contact you</label>
            </div>

            <button type="submit" id='btn_submit'>Send message</button>



        </form>
    </div>
  )
}

export default UserForm