import React, { useState } from 'react'
import NiceSelect from '../ui/nice-select'

const initial_form = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
}

const ContactUsForm = () => {
  const [form, setForm] = useState(initial_form)
  const [loading, setLoading] = useState(false)
  const [responseSuccessful, setResponseSuccessful] = useState(null)

  const selectHandler = e => {
    setForm({ ...form, service: e.text })
  }

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const { name, email, phone, service, message } = form
    const res = await fetch('/api/send_email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: 'soporte@gurudevelopers.com.ar',
        subject: 'SUBJECT!',
        body: `${name} - ${email} - ${phone} - ${service} - ${message}`,
        htmlBody: `<div>
            Full Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}
          </div>`
      })
    })

    if (res?.ok) {
      const json = await res.json()
      if (json?.ok) setResponseSuccessful(true)
      else setResponseSuccessful(false)
    } else setResponseSuccessful(false)

    setTimeout(() => {
      setForm(initial_form)
      setResponseSuccessful(null)
    }, 2750)
    setLoading(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='box'>
        <div className='row gx-20'>
          <div className='col-12'>
            <div className='postbox__comment-input mb-30'>
              <input
                type='text'
                className='inputText'
                required
                value={form.name}
                onChange={handleChange}
                name='name'
              />
              <span className='floating-label'>Full Name</span>
            </div>
          </div>
          <div className='col-12'>
            <div className='postbox__comment-input mb-30'>
              <input
                type='email'
                className='inputText'
                required
                value={form.email}
                onChange={handleChange}
                name='email'
              />
              <span className='floating-label'>Your Email</span>
            </div>
          </div>
          <div className='col-12'>
            <div className='postbox__comment-input mb-35'>
              <input
                type='number'
                className='inputText'
                required
                value={form.phone}
                onChange={handleChange}
                name='phone'
              />
              <span className='floating-label'>Phone Number</span>
            </div>
          </div>
          <div className='col-12'>
            <div className='postbox__select mb-30'>
              <NiceSelect
                options={[
                  { value: 'Your Inquiry about', text: 'Choose a Service' },
                  { value: 'app', text: 'App' },
                  { value: 'web', text: 'Web' },
                  { value: 'web3', text: 'Web 3' }
                ]}
                defaultCurrent={0}
                onChange={selectHandler}
              />
            </div>
          </div>
          <div className='col-xxl-12'>
            <div className='postbox__comment-input mb-30'>
              <textarea
                className='textareaText'
                required
                onChange={handleChange}
                name='message'
                value={form.message}
              ></textarea>
              <span className='floating-label-2'>Message...</span>
            </div>
          </div>
          <div className='col-xxl-12'>
            <div className='postbox__btn-box'>
              <button
                className='submit-btn w-100'
                style={{
                  backgroundColor:
                    responseSuccessful !== null
                      ? !responseSuccessful
                        ? 'red'
                        : 'green'
                      : ''
                }}
              >
                {!loading
                  ? responseSuccessful === null
                    ? 'Send your Request'
                    : !responseSuccessful
                    ? 'An error ocurred'
                    : 'Successful!'
                  : 'Loading...'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default ContactUsForm
