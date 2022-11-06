import React, { useState } from 'react'

const UserForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [textArea, settextArea] = useState('');

  //ERROR STATE
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.length === 0 || lastName.length === 0 || textArea.length === 0 || email.length === 0){
        setError(true);
    }else{

    }

  }
    
  return (
    <div className='form_wrap'>
        <form action="" onSubmit={handleSubmit}>
            <div className="name_container">

                <div className='firstName flex'>
                    <label htmlFor="">First Name</label>
                    <input 
                        type="text" 
                        name="text" id="first_name" 
                        placeholder='Enter your first name' 
                        onChange={e=>setFirstName(e.target.value)}
                    />
                    {error && firstName.length <= 0 ?
                    <label htmlFor="" className='error_msg'>Please input first name</label> : ''}
                </div>

                <div className="lastName flex">
                    <label htmlFor="">Last Name</label>
                    <input 
                        type="text" 
                        name="text" 
                        id="last_name" 
                        placeholder='Enter your last name'
                        onChange={e=>setlastName(e.target.value)}
                    />
                    {error && lastName.length <= 0 ?
                    <label htmlFor="" className='error_msg'>Please input last name</label> : ''}
                </div>
            </div>

            <div className='email flex'>
                <label htmlFor="">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder='yourname@email.com'
                    onChange={e=>setemail(e.target.value)}
                />
                 {error && email.length <= 0 ?
                <label htmlFor="" className='error_msg'>Please enter valid email</label> : ''}
            </div>

            <div className="message flex">
                <label htmlFor="">Message</label>
                <textarea 
                name="text" 
                id="message" 
                cols="30" 
                rows="10" 
                placeholder="Send me a message and I'll reply you as soon as possible..."
                onChange={e=>settextArea(e.target.value)}>

                </textarea>
                {error && textArea.length <= 0 ?
                <label htmlFor="" className='error_msg'>Please enter a message</label> : ''}
            </div>

            <div className="checkbox">
                <input type="checkbox" name="checkbox" id="checkBoxBtn"  className='checkbox_btn'/>
                <label htmlFor="">You agree to providing your name to <b>Solomon Bassey</b> who may contact you</label>
            </div>

            <button type="submit" id='btn_submit' disabled={disable}>Send message</button>



        </form>
    </div>
  )
}

export default UserForm