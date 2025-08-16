import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Học Viện Sắc Đẹp & Phong Thái NEOM - Khơi dậy vẻ đẹp tự tin',
  description: 'Học viện NEOM được sáng lập bởi Mrs. Ngân Nguyễn, chuyên đào tạo phong thái, sắc đẹp và kỹ năng mềm cho phụ nữ Việt Nam. Đăng ký tư vấn miễn phí ngay hôm nay!',
  keywords: 'phong thái, sắc đẹp, đào tạo phụ nữ, NEOM, Ngân Nguyễn, kỹ năng mềm, tự tin, phong cách',
  authors: [{ name: 'NEOM Academy' }],
  openGraph: {
    title: 'Học Viện Sắc Đẹp & Phong Thái NEOM',
    description: 'Khơi dậy vẻ đẹp tự tin và quyến rũ từ bên trong mỗi người phụ nữ',
    type: 'website',
    locale: 'vi_VN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Học Viện Sắc Đẹp & Phong Thái NEOM',
    description: 'Khơi dậy vẻ đẹp tự tin và quyến rũ từ bên trong mỗi người phụ nữ',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="NEOM Logo" width={60} height={60} />
            <span className="text-xl font-bold">NEOM</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#gioi-thieu" className="hover:text-blue-200 transition-colors">GIỚI THIỆU</a>
            <a href="#profile" className="hover:text-blue-200 transition-colors">PROFILE</a>
            <a href="#dao-tao" className="hover:text-blue-200 transition-colors">ĐÀO TẠO</a>
            <a href="#hoat-dong" className="hover:text-blue-200 transition-colors">HOẠT ĐỘNG</a>
            <a href="#lien-he" className="hover:text-blue-200 transition-colors">LIÊN HỆ</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Học Viện Sắc Đẹp & Phong Thái
                <span className="text-yellow-400"> NEOM</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Khơi dậy vẻ đẹp tự tin và quyến rũ từ bên trong mỗi người phụ nữ
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 text-lg rounded-lg transition-colors">
                Đăng ký tư vấn ngay
              </button>
            </div>
            <div className="relative">
              <Image 
                src="/images/hero-image.png" 
                alt="Hero Image" 
                width={500} 
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Giới thiệu Section */}
      <section id="gioi-thieu" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">GIỚI THIỆU</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
            <p className="mb-6">
              Học viện Sắc đẹp & Phong thái NEOM được sáng lập bởi Mrs. Ngân Nguyễn không chỉ dành sự 
              quan tâm vào việc nâng cấp kỹ năng cá nhân trong lĩnh vực phong thái, mà còn cung cấp sự hỗ trợ 
              to lớn cho các tổ chức doanh nghiệp trong việc huấn luyện và phát triển kỹ năng cho đội ngũ nhân sự.
            </p>
            <p>
              NEOM nhận thức sâu sắc rằng một thái độ chuyên nghiệp không chỉ góp phần quan trọng vào 
              thành tựu của doanh nghiệp mà còn là khía cạnh then chốt trong việc tạo dựng nên một không 
              gian làm việc đầy tính chuyên môn và hiệu suất cao.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Goal Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 border-2 border-blue-100 hover:border-blue-300 transition-colors rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">TN</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">TẦM NHÌN</h3>
              <p className="text-gray-600">
                &ldquo;Trở thành thương hiệu hàng đầu về các sản phẩm và dịch vụ dành cho phụ nữ Việt Nam. 
                Không ngừng sáng tạo để truyền cảm hứng và đồng hành cùng phụ nữ khai phá tiềm năng, 
                hướng tới xây dựng cộng đồng phụ nữ Việt tự tin và năng động.&rdquo;
              </p>
            </div>

            <div className="text-center p-8 border-2 border-blue-100 hover:border-blue-300 transition-colors rounded-lg">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">MT</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">MỤC TIÊU</h3>
              <p className="text-gray-600">
                Thông qua truyền cảm hứng, đồng hành và khơi dậy tiềm năng của phụ nữ, cung cấp tư vấn, 
                đào tạo và triển khai các giải pháp chăm sóc sức khỏe, làm đẹp và phát triển bản thân toàn diện, 
                giúp 1 triệu phụ nữ Việt Nam mọi lứa tuổi tự tin, xinh đẹp.
              </p>
            </div>

            <div className="text-center p-8 border-2 border-blue-100 hover:border-blue-300 transition-colors rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">SM</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">SỨ MỆNH</h3>
              <p className="text-gray-600">
                Sứ mệnh của chúng tôi là thắp lên ngọn lửa đam mê tự hoàn thiện và khơi dậy sức mạnh tiềm ẩn 
                bên trong mỗi người phụ nữ Việt. Với tinh thần đồng hành, chúng tôi trang bị kiến thức và công cụ 
                để phụ nữ tự tin khai phá và phát huy tối đa nội lực của bản thân.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light italic mb-8 leading-relaxed">
              &ldquo;MỖI NGƯỜI PHỤ NỮ THU HÚT ĐỀU CÓ ĐƯỢC THẦN THÁI RIÊNG BIỆT. ĐÓ LÀ CÁI &ldquo;CHẤT&rdquo; HỌ CHẮT GÓP 
              SAU THỜI GIAN RÈN LUYỆN KHÍA CẠNH NÀO ĐÓ NGÀY MỘT NỔI BẬT. BỞI THẾ PHỤ NỮ KHÍ CHẤT KHÔNG 
              SINH RA ĐÃ THU HÚT, ĐỀU MỘT PHẦN DO CHĂM CHÚT CHÍNH MÌNH.&rdquo;
            </blockquote>
            <cite className="text-xl text-yellow-400 font-semibold">- MRS. NGÂN NGUYỄN</cite>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="dao-tao" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">ĐÀO TẠO KHÓA HỌC</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course 1 */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="bg-blue-600 text-white rounded-lg p-4 mb-4">
                <h3 className="text-xl font-bold">KHÓA HỌC 01</h3>
              </div>
              <h4 className="text-lg font-semibold text-blue-800 mb-3">
                BÍ MẬT PHONG THÁI SỨC HÚT PHÁI ĐẸP
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Khóa học &ldquo;Bí Mật Phong Thái&rdquo; là chìa khóa mở ra vẻ đẹp tự tin và quyến rũ từ bên trong mỗi người phụ nữ. 
                Qua các bài học tinh tế và chi tiết, học viên sẽ học cách điều chỉnh tư thế cơ thể để tạo dựng sự xuất hiện ấn tượng.
              </p>
            </div>

            {/* Course 2 */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="bg-yellow-500 text-white rounded-lg p-4 mb-4">
                <h3 className="text-xl font-bold">KHÓA HỌC 02</h3>
              </div>
              <h4 className="text-lg font-semibold text-blue-800 mb-3">
                GIẢI MÃ PHONG THÁI BÍ QUYẾT THÀNH CÔNG
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Khóa học &ldquo;Giải Mã Phong Thái&rdquo; mở ra cánh cửa nâng cao phong cách, thần thái và sự tự tin, 
                củng cố nghi thức xã giao và tạo dáng sân khấu chuẩn mực.
              </p>
            </div>

            {/* Course 3 */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="bg-green-600 text-white rounded-lg p-4 mb-4">
                <h3 className="text-xl font-bold">KHÓA HỌC 03</h3>
              </div>
              <h4 className="text-lg font-semibold text-blue-800 mb-3">
                PHONG THÁI DOANH NGHIỆP
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Trong khóa học &ldquo;Phong Thái Doanh Nghiệp&rdquo;, chúng tôi tập trung vào việc giảng dạy nghi thức xã giao trong kinh doanh, 
                đồng thời cung cấp các kỹ năng để bạn có thể đi, đứng, ngồi đúng và đẹp.
              </p>
            </div>

            {/* Course 4 */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="bg-purple-600 text-white rounded-lg p-4 mb-4">
                <h3 className="text-xl font-bold">KHÓA HỌC 04</h3>
              </div>
              <h4 className="text-lg font-semibold text-blue-800 mb-3">
                KIẾN TẠO PHONG THÁI
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                &ldquo;Kiến Tạo Phong Thái&rdquo; là một khóa học độc đáo và toàn diện, được thiết kế nhằm phát triển những kỹ năng quan trọng 
                như phong thái, trang điểm cá nhân, kỹ năng giao tiếp làm chủ sân khấu.
              </p>
            </div>

            {/* Course 5 */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="bg-red-600 text-white rounded-lg p-4 mb-4">
                <h3 className="text-xl font-bold">KHÓA HỌC 05</h3>
              </div>
              <h4 className="text-lg font-semibold text-blue-800 mb-3">
                NGHỆ THUẬT XÃ GIAO BÀN TIỆC ÂU
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Trong môi trường kinh doanh và xã hội hiện đại, những kỹ năng mềm và phong thái tự tin đóng vai trò vô cùng quan trọng, 
                đặc biệt là trong các sự kiện ẩm thực mang tính quốc tế.
              </p>
            </div>

            {/* Course 6 */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="bg-indigo-600 text-white rounded-lg p-4 mb-4">
                <h3 className="text-xl font-bold">KHÓA HỌC 06</h3>
              </div>
              <h4 className="text-lg font-semibold text-blue-800 mb-3">
                PHONG THÁI SÂN KHẤU
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Những quy tắc nhỏ như cách bước lên sân khấu, cách cầm micro, cách cầm hoa, bằng khen, 
                hay vị trí đứng để chụp ảnh đẹp trong một buổi lễ vinh danh hay trao giải.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">CÁC KHÁCH HÀNG TIÊU BIỂU</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              "TRƯỜNG ĐẠI HỌC UEF",
              "TRƯỜNG ĐẠI HỌC HUTECH", 
              "TRƯỜNG ĐẠI HỌC VĂN HÓA",
              "TRƯỜNG ĐẠI HỌC YERSIN ĐÀ LẠT",
              "TỈNH ĐOÀN ĐỒNG NAI",
              "CÔNG TY CỔ PHẦN DỊCH VỤ HÀNG KHÔNG TASECO",
              "CÔNG TY CP CHỨNG KHOÁN MIRAE ASSET",
              "CÔNG TY CỔ PHẦN TẬP ĐOÀN QUỐC TẾ STBE",
              "CÔNG TY CỔ PHẦN CAREFOR VIỆT NAM",
              "HỌC VIỆN HUẤN LUYỆN VIÊN NĂNG SUẤT PCA"
            ].map((client, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <p className="text-sm font-medium text-gray-700">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="lien-he" className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Đăng ký tư vấn</h2>
              <p className="text-xl mb-8 text-blue-100">
                Học Viện Sắc Đẹp & Phong Thái NEOM cùng đội ngũ NEOM luôn tự hào về chất lượng đào tạo, 
                chất lượng giảng viên cũng như nuôi dưỡng niềm say mê học tập làm đẹp của học viên, 
                giúp học viên phát huy tối đa tiềm năng của mình.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-yellow-400">THÔNG TIN LIÊN HỆ:</h3>
                <div className="space-y-2">
                  <p><strong>Địa chỉ:</strong> L1-7 KDC Phú Gia 2, Nguyễn Khuyến Trảng Dài, Biên Hòa, Đồng Nai</p>
                  <p><strong>Hotline:</strong> 0777 890 58</p>
                  <p><strong>Email:</strong> info@hocvienphongthai.com</p>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Học Viện Sắc Đẹp & Phong Thái NEOM. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
