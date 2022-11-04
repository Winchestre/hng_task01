import React from 'react'
import UserForm from '../components/UserForm'
import Footer from '../constants/Footer'

const Contact = () => {
  return (
    <>
      <section className='contact'>
          <div className='contact_container'>
              <div className="header">
                  <h1>Contact Me</h1>
                  <p>Hi there, contact me to ask me about anything you have in mind.</p>
              </div>

              <UserForm />
          </div>     
      </section>

      <Footer />
    </>
  )
}

export default Contact