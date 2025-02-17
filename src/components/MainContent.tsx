"use client";
import { useState } from "react";

const news = [
  {
    date: "24.01.2025",
    title: "Thông báo lịch nghỉ Tết Nguyên Đán 2025",
    image: "/images/tet2025.jpg",
  },
  {
    date: "23.01.2025",
    title: "BIC tặng phòng học cho trường Mầm non Bình Lưỡng",
    image: "/images/hocbong.jpg",
  },
  {
    date: "10.01.2025",
    title: "2024: Lợi nhuận hợp nhất của BIC đạt hơn 650 tỷ đồng",
    image: "/images/loinhuan.jpg",
  },
];

const services = [
  {
    title: "MUA BẢO HIỂM TRỰC TUYẾN",
    icon: "🛒",
    selectOptions: [
      "Chọn sản phẩm bảo hiểm",
      "Bảo hiểm xe",
      "Bảo hiểm sức khỏe",
    ],
  },
  {
    title: "HỖ TRỢ THÔNG TIN BỒI THƯỜNG",
    options: ["📂 Hướng dẫn", "🔍 Vấn tin"],
  },
  {
    title: "TRA CỨU THÔNG TIN",
    options: ["🔎 Hóa đơn", "🛡️ Giấy chứng nhận XCG"],
  },
  {
    title: "TẢI MIỄN PHÍ BIC ONLINE",
    options: ["📱 iOS", "📱 Android"],
  },
];

const insuranceItems = [
  {
    title: "Bảo hiểm doanh nghiệp",
    image: "/images/baohiemdoanhnghiep.jpg",
    details: ["Hàng hóa", "Tàu", "Trách nhiệm"],
  },
  {
    title: "Bảo hiểm cá nhân",
    image: "/images/baohiemcanhan.jpg",
    details: ["Xe", "Sức khỏe", "Tai nạn"],
  },
  {
    title: "Bancassurance",
    image: "/images/bancassurance.jpg",
    details: ["Tiết kiệm", "Đầu tư"],
  },
];

const links = [
  { title: "CÔNG TY THÀNH VIÊN BIC", icon: "/images/company.jpg" },
  { title: "BỆNH VIỆN LIÊN KẾT", icon: "/images/hospital.jpg" },
  { title: "GARAGE LIÊN KẾT", icon: "/images/garage.jpg" },
];

const awards = [
  "/images/award1.jpg",
  "/images/award2.jpg",
  "/images/award3.jpg",
  "/images/award4.jpg",
  "/images/award5.jpg",
  "/images/award4.jpg",
  "/images/award5.jpg",
  "/images/award1.jpg",
  "/images/award2.jpg",
];

export default function MainContent() {
  // const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="p-8">
      {/* Phần tiêu đề */}
      <h2 className="text-2xl font-bold text-green-900">Xin chào!</h2>
      <p className="text-xl text-green-800 mb-6">BIC hân hạnh hỗ trợ bạn!</p>

      <div className="grid grid-cols-3 gap-8">
        {/* Cột tin tức mới */}
        <div>
          <h3 className="text-xl font-bold border-b-2 border-red-500 pb-2 mb-4">
            Tin mới
          </h3>
          {news.map((item, index) => (
            <div key={index} className="flex items-center gap-4 mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover"
              />
              <div>
                <p className="text-sm text-gray-500">{item.date}</p>
                <p className="text-black font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cột dịch vụ hỗ trợ */}
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-bold">{service.title}</h4>
                {service.selectOptions ? (
                  <select className="w-full p-2 mt-2 border border-gray-300 rounded">
                    {service.selectOptions.map((option, i) => (
                      <option key={i}>{option}</option>
                    ))}
                  </select>
                ) : (
                  <ul className="mt-2">
                    {service.options?.map((option, i) => (
                      <li key={i} className="text-gray-700">
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Danh mục bảo hiểm */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        {insuranceItems.map((item, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            // onMouseEnter={() => setHovered(index)}
            // onMouseLeave={() => setHovered(null)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover rounded"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <ul>
                {item.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Liên kết nhanh */}
      <div className="grid grid-cols-3 gap-8 mt-12 text-center">
        {links.map((link, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={link.icon} alt={link.title} className="w-20 h-20 mb-2" />
            <p className="text-lg font-semibold">{link.title}</p>
          </div>
        ))}
      </div>

      {/* Form đăng ký */}
      <div className="mt-12 flex justify-center">
        <div className="bg-gray-100 p-6 rounded-lg w-96 text-center">
          <h3 className="text-lg font-bold">Đăng ký nhận thông tin từ BIC</h3>
          <input
            type="email"
            placeholder="Nhập email"
            className="w-full p-2 mt-3 border border-gray-300 rounded"
          />
          <button className="bg-green-700 text-white px-6 py-2 mt-3 rounded">
            ĐĂNG KÝ
          </button>
        </div>
      </div>

      {/* Danh hiệu */}
      <h3 className="text-center text-green-700 text-xl font-semibold mt-12 mb-4">
        Ghi nhận của cộng đồng dành cho BIC
      </h3>
      <div className="flex justify-center gap-6">
        {awards.map((award, index) => (
          <img key={index} src={award} alt="Award" className="h-16" />
        ))}
      </div>
    </div>
  );
}
