import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-green-800 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">BIC Insurance</div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Trang chủ</Link>
          </li>
          <li>
            <Link href="/products">Sản phẩm</Link>
          </li>
          <li>
            <Link href="/contact">Liên hệ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
