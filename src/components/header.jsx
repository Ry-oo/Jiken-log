import Link from "next/link";
/**レスポンシブ対応をする@media */

export const Header = () => {
  return (
    <header>
      <nav className=" flex justify-around my-6">
        <div className="text-3xl ">
          <Link href={"/"} className="flex space-x-2 outline-none">
            <h3>Jiken </h3>
            <h3 className="text-yellow-300">MG</h3>
            <h3>Site</h3>
          </Link>
        </div>

        <ul className=" flex  text-xl justify-around space-x-6">
          <li>
            <Link href={"/post/active"}>活動内容</Link>
          </li>

          <li>
            <Link href={"/post/contact"}>お問い合わせ</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
};
