import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
/**レスポンシブ対応をする */

export const Header: FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const shiftMenu = () => setOpenMenu(!openMenu);
  console.log(openMenu);
  return (
    <header>
      <nav className=" container flex mx-auto flex-col justify-center my-6  md:flex-row items-center">
        <div className="text-3xl ">
          <Link href={"/"} className="flex space-x-2 ">
            <h3>Jiken </h3>
            <h3 className="text-yellow-300">MG</h3>
            <h3>Site</h3>
          </Link>
        </div>

        <ul className=" md:ml-auto flex text-xl space-x-12 mt-2">
          <li className="text-gray-500 hover:text-gray-400">
            <Link href={"/post/active"}>activity</Link>
          </li>

          <li className="text-gray-500 hover:text-gray-400">
            <Link href={"/post/contact"}>contact</Link>
          </li>
        </ul>

        {openMenu ? (
          <div className="flex flex-row absolute z-10 top-0 right-0  min-h-fit min-w-full">
            <div className="basis-1/2"></div>
            <div className="basis-1/2 bg-white">
              <ul className="text-center border-l-2 p-2">
                <li>
                  <button onClick={shiftMenu}>close</button>
                </li>
                <li className="hover:text-gray-500">
                  <Link href={"/post/active"}>activity</Link>
                </li>

                <li className="hover:text-gray-500">
                  <Link href={"/post/contact"}>contact</Link>
                </li>
              </ul>
            </div>
          </div>
        ) : undefined}

        <button
          type="button"
          className="flex absolute top-4 right-7 hover:bg-gray-50 md:hidden"
          onClick={shiftMenu}
        >
          <Image alt="menu" src="/menu.png" width={50} height={50} />
        </button>
      </nav>
    </header>
  );
};
