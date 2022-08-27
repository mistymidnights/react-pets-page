import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { API } from '../services/API';
import './Register.css'

const Register = () => {
  const {register, handleSubmit} = useForm();
  let navigate = useNavigate()
  
  const formSubmit = (data) => {
    const formData = new FormData();
    formData.append("petName", data.petName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("avatar", data.avatar[0]);
    formData.append("type", data.type);

    API.post("/pets/register", formData).then((res) => {
      if (res) {
        navigate('/login')
      }
    })
  }

  return (
    <>
    <section className='register_section'>
      <div className="form-container">
        <div className="register-container">
          <h2>Please, register :3</h2>
        </div>
        <form onSubmit={handleSubmit(formSubmit)}>

          <label htmlFor="petName">Name</label>
          <input type="text" id="petName" name="petName" {...register("petName")} />
        
          <label htmlFor="email">E-mail</label>
          <input type="text" id='email' name='email' {...register("email")} />
        
          <label htmlFor="password">Password</label>
          <input type="password" id='password' name='password' {...register("password")} />
        

          <label htmlFor="avatar">Avatar</label>
          <div className="button-wrapper">
          <span className="label">Upload File</span>
            <input
            type="file"
            name="upload"
            id="upload"
            className="upload-box"
            placeholder="Upload File"
            {...register("avatar")} />
          </div>

          <label htmlFor="type">Type</label>
          <input type="text" id='type' name='type' {...register("type")} />

          <button type='submit'>Register</button>
        </form>
      </div>
      <div className="background-pet">
        <img
          src="https://www.kindpng.com/picc/m/588-5883044_kittens-transparent-persian-cat-cute-white-background-hd.png"
          alt=""
        />
      </div>
    </section>
    </>
  )
}

export default Register