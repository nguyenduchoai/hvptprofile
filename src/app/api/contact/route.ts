import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, course } = body

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Vui lòng điền đầy đủ thông tin bắt buộc' },
        { status: 400 }
      )
    }

    // Prepare webhook payload
    const webhookPayload = {
      name,
      email,
      phone,
      course: course || 'Chưa chọn khóa học cụ thể',
      timestamp: new Date().toISOString(),
      source: 'NEOM Landing Page'
    }

    // Send to webhook (replace with your actual webhook URL)
    const webhookUrl = process.env.WEBHOOK_URL || 'https://webhook.site/your-webhook-url'
    
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookPayload),
    })

    if (!webhookResponse.ok) {
      console.error('Webhook failed:', webhookResponse.statusText)
      // Still return success to user, but log the error
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ với bạn sớm nhất.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Có lỗi xảy ra, vui lòng thử lại sau' },
      { status: 500 }
    )
  }
}

