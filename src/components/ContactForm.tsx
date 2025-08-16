'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setMessage(result.message)
        setFormData({ name: '', email: '', phone: '', course: '' })
      } else {
        setMessage(result.error || 'Có lỗi xảy ra, vui lòng thử lại')
      }
    } catch (err) {
      setMessage('Có lỗi xảy ra, vui lòng thử lại')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-lg p-8 text-gray-800">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Họ và tên *
          </label>
          <input 
            id="name"
            name="name"
            type="text" 
            required 
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập họ và tên của bạn"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Địa chỉ email *
          </label>
          <input 
            id="email"
            name="email"
            type="email" 
            required 
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập email của bạn"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Số điện thoại *
          </label>
          <input 
            id="phone"
            name="phone"
            type="tel" 
            required 
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập số điện thoại của bạn"
          />
        </div>
        
        <div>
          <label htmlFor="course" className="block text-sm font-medium mb-2">
            Khóa học quan tâm
          </label>
          <textarea 
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Khóa học bạn quan tâm..."
            rows={3}
          />
        </div>
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-300 text-black font-semibold py-3 text-lg rounded-lg transition-colors"
        >
          {isSubmitting ? 'Đang gửi...' : 'Đăng ký ngay!'}
        </button>

        {message && (
          <div className={`p-4 rounded-md ${message.includes('Cảm ơn') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message}
          </div>
        )}
      </form>
    </div>
  )
}

