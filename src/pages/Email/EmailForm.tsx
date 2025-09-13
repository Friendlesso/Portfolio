import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import EmailSend from '../../assets/images/icons/EmailSend.svg'

export function EmailForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');

    const serviceId = 'service_k3iv05n';
    const templateId = 'template_uc88gcv';
    const publicKey = 'GwvmCVx2YS4SL1sLV';
    const autoReplyTemplate = 'template_zq2fom9'

    const templateParams = {
      name: name,
      email: email,
      message,
      to_Name: 'Mihailo'
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        return emailjs.send(serviceId, autoReplyTemplate, templateParams, publicKey);
      })
      .catch((error) => {
        console.error('Email error:', error);
      });
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col h-[60vh] w-full'>

      <section className='bg-[var(--folder-box-color)] dual-border-inner mt-1 px-2 py-1 sm:px-3 lg:px-6 overflow-y-auto'>
        <button type='submit' className='flex text-xl px-2 items-center dual-border-folder cursor-pointer'>
          <img src={EmailSend} className='w-4 mr-1' alt="" />
          Send
        </button>
      </section>

      <section className='bg-[var(--folder-box-color)] dual-border-inner mt-1 px-2 sm:px-3 lg:px-6 overflow-y-auto'>
        <header className=' flex justify-between border-b border-black mb-2'>
          <p className='text-3xl'>New Message</p>
        </header>
        <p className='text-2xl border-b border-black mb-2'>
          To:
          <span className="text-white text-xl ml-2 bg-[var(--email-header)] px-2 py-0.5 rounded-sm">
            Mihailo
          </span>
        </p>

        <label className=' border-b border-black text-2xl mb-2 flex'>
          From:
          <input
            type='text'
            placeholder='Your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='pl-1 w-full focus:text-gray-600'
          />
        </label>

        <label className='border-b border-black text-2xl mb-2 flex'>
          Email:
          <input
            type='email'
            placeholder='Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='pl-1 w-full focus:text-gray-600'
          />
        </label>
      </section>
      <section className='flex-1 bg-[var(--folder-box-color)] dual-border-inner mt-1 px-2 sm:px-3 lg:px-6 overflow-y-hidden'>
        <textarea
          placeholder='Write your message here...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='w-full h-full resize-none placeholder:text-gray-600 text-2xl placeholder:text-xl focus:outline-0'
        />
      </section>
    </form>


  )
}