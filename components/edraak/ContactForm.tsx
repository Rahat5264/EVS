'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ firstName: '', lastName: '', email: '', phoneNumber: '', message: '' })
      setSubmitted(false)
    }, 2000)
  }

  return (
    <section className="bg-[#2f3948] px-6 py-12 text-white md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1120px]">
        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          {/* Left Side - Contact Info */}
          <div>
            <h1 className="text-4xl font-medium leading-tight md:text-5xl">
              Get in touch with us today and Let's discuss partnering with EVS.
            </h1>
            <p className="mt-6 max-w-[450px] text-base leading-relaxed text-white/80">
              System integrators and solution providers are welcome to integrate our AI-Powered Vision Platform into their offerings. Fill out the form below and our team will get back to you shortly.
            </p>

            {/* Contact Details */}
              <div className="mt-12 space-y-6">
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="mt-2 text-white/75">+92 321 7973753</p>
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="mt-2 text-white/75">mail@edraakvisionsystems</p>
              </div>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="mt-2 text-white/75">Lahore, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="rounded-lg bg-[#3a4556]/60 p-8 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/90">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full rounded-md border border-white/20 bg-[#2f3948] px-4 py-3 text-white placeholder-white/40 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/90">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-md border border-white/20 bg-[#2f3948] px-4 py-3 text-white placeholder-white/40 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/90">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-white/20 bg-[#2f3948] px-4 py-3 text-white placeholder-white/40 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/90">Phone number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Enter phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full rounded-md border border-white/20 bg-[#2f3948] px-4 py-3 text-white placeholder-white/40 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/90">Message</label>
                <textarea
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full rounded-md border border-white/20 bg-[#2f3948] px-4 py-3 text-white placeholder-white/40 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-blue-500 px-4 py-3 font-semibold text-white transition hover:bg-blue-600 active:bg-blue-700"
              >
                {submitted ? 'Message Sent! ✓' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
