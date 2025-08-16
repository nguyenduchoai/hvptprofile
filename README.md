# NEOM Academy Landing Page

Trang landing page cho Học Viện Sắc Đẹp & Phong Thái NEOM được xây dựng bằng Next.js 15 với Tailwind CSS.

## Tính năng

- ✅ Responsive design (tương thích mobile & desktop)
- ✅ SEO tối ưu với metadata đầy đủ
- ✅ Form liên hệ với webhook integration
- ✅ Hiệu ứng hover và transitions mượt mà
- ✅ Tối ưu hóa hình ảnh với Next.js Image
- ✅ TypeScript support
- ✅ Tailwind CSS styling

## Cài đặt và chạy local

1. Cài đặt dependencies:
```bash
npm install
```

2. Chạy development server:
```bash
npm run dev
```

3. Mở trình duyệt và truy cập: http://localhost:3000

## Cấu hình Webhook

1. Tạo một webhook URL từ:
   - https://webhook.site/ (miễn phí, temporary)
   - https://requestbin.com/
   - Hoặc endpoint server của bạn

2. Cập nhật file `.env.local`:
```
WEBHOOK_URL=your-webhook-url-here
```

## Deploy lên Vercel

### Cách 1: Deploy từ GitHub (Khuyến nghị)

1. Push code lên GitHub repository
2. Truy cập https://vercel.com
3. Import project từ GitHub
4. Thêm environment variable `WEBHOOK_URL` trong Vercel dashboard
5. Deploy!

### Cách 2: Deploy bằng Vercel CLI

1. Cài đặt Vercel CLI:
```bash
npm i -g vercel
```

2. Login vào Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Thêm environment variable:
```bash
vercel env add WEBHOOK_URL
```

## Cấu trúc thư mục

```
neom-landing/
├── src/
│   ├── app/
│   │   ├── api/contact/
│   │   │   └── route.ts          # API endpoint cho form
│   │   ├── layout.tsx            # Layout chính với SEO
│   │   ├── page.tsx              # Trang chủ
│   │   └── globals.css           # CSS toàn cục
│   └── components/
│       └── ContactForm.tsx       # Component form liên hệ
├── public/
│   └── images/                   # Hình ảnh static
├── .env.local                    # Environment variables
├── vercel.json                   # Cấu hình Vercel
└── README.md
```

## Tùy chỉnh

### Thay đổi màu sắc
Chỉnh sửa các class Tailwind trong các component để thay đổi màu sắc:
- `bg-blue-900` - Màu nền header
- `bg-yellow-500` - Màu nút CTA
- `text-blue-800` - Màu text tiêu đề

### Thêm/Sửa nội dung
Chỉnh sửa file `src/app/page.tsx` để thay đổi nội dung trang.

### Cấu hình SEO
Chỉnh sửa metadata trong `src/app/layout.tsx` và `src/app/page.tsx`.

## Hỗ trợ

Nếu có vấn đề gì, vui lòng liên hệ:
- Email: info@hocvienphongthai.com
- Hotline: 0777 890 58

## License

© 2025 Học Viện Sắc Đẹp & Phong Thái NEOM. All rights reserved.
