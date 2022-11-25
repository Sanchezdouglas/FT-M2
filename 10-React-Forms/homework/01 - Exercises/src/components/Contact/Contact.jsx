import React from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Contact() {
  //Eje 1 #1, #2
  return <div>
    <form>
      <label htmlFor="Nombre">Nombre</label>
      <input type="text" value="name" id="name" placeholder='Escribe tu nombre...' />
      <label htmlFor="Nombre">Correo Electronico</label>
      <input type="text" value="name" id="email" placeholder='Escribe su email...'/>
      </form>
  </div>
}
