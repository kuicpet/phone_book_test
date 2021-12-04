import React, { useState } from 'react'
import '../'

const style = {
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: '200px',
      marginBottom: '40px',
    },
    inputs: {
      marginBottom: '5px',
      width: '100%',
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border: 'none',
      backgroundColor: 'black',
      fontSize: '14px',
      borderRadius: '5px',
    },
  },
}

const PhoneBookForm = ({ addToPhoneBook }) => {
  const initialUserData = {
    firstName: 'Coder',
    lastName: 'Byte',
    phoneNumber: '8885559999',
  }
  const [userState, setUserState] = useState(initialUserData)

  const handleChange = (e) => {
    setUserState({
      ...userState,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!userState.firstName || !userState.lastName || !userState.phoneNumber)
      return
    addToPhoneBook(userState)
    setUserState(initialUserData)
  }
  return (
    <form className={style.form.container} onSubmit={handleSubmit}>
      <div>
        <label>First name</label>
        <br />
        <input
          name='firstName'
          className={style.form.inputs}
          value={userState.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Last name</label>
        <br />
        <input
          name='lastName'
          className={style.form.inputs}
          value={userState.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Phone number</label>
        <br />
        <input
          name='phoneNumber'
          className={style.form.inputs}
          value={userState.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <br />
        <input
          className={style.form.submitBtn}
          value='Add User'
          type='submit'
        />
      </div>
    </form>
  )
}

export default PhoneBookForm
