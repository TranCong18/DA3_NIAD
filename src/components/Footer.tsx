export default function Footer() {
  return (
    <footer className="bg-teal-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Bên trái: Thông tin công ty */}
        <div className="max-w-lg">
          <p className="text-sm">
            © Tổng Công ty Cổ phần Bảo hiểm Ngân hàng Đầu tư và Phát triển Việt
            Nam (BIC)
          </p>
          <p className="text-sm">
            Địa chỉ: Tầng 11, Tòa nhà 263 Cầu Giấy, Phường Dịch Vọng, Quận Cầu
            Giấy, Hà Nội
          </p>
          <p className="text-sm">
            Điện thoại: 024.22200282 | Fax: 024.22200281
          </p>
          <p className="text-sm">
            Website:{" "}
            <a href="https://www.bic.vn" className="underline">
              www.bic.vn
            </a>{" "}
            | mybic.vn
          </p>
        </div>

        {/* Bên phải: Hotline và Mạng xã hội */}
        <div className="text-right">
          <p className="text-lg font-bold">
            HOTLINE: <span className="text-yellow-300">1900 9456</span>
          </p>
          <div className="flex justify-end space-x-4 mt-2">
            <a href="#" className="hover:text-yellow-300">
              <img
                src="/icons/facebook.png"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <img src="/icons/youtube.png" alt="YouTube" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <img src="/icons/zalo.png" alt="Zalo" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <img src="/icons/wechat.png" alt="WeChat" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
