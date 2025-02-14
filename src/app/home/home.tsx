import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <div className="flex flex-grow p-4">
        <Sidebar />
        <main className="flex-1 text-center">
          <h1 className="text-3xl font-bold text-teal-700">
            ỨNG DỤNG TRÍ TUỆ NHÂN TẠO (AI) TRONG Y TẾ
          </h1>
          <p className="mt-4 text-gray-700">
            Đưa công nghệ (AI) vào việc quản trị các máy lâm sàng nâng cao độ
            chính xác, chống thất thoát.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Email của bạn
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded">
              Nhận tư vấn
            </button>
          </div>
        </main>
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
