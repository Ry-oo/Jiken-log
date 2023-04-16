import Image from "next/image";
import Link from "next/link";

/**レスポンシブ対応をする */
export const MainContents = () => {
  return (
    <div>
      <div className="bg-yellow-50">
        <picture className=" flex justify-center ">
          <source media="(max-width:600px)" srcSet="/jicon.jpg" />

          <Image src="/jicon.jpg" alt="活動場所" width="900" height="600" />
        </picture>
      </div>
      <br />
      <div className="flex flex-col items-center  ">
        <h2 className="text-2xl my-3">児童教育研究会とは?</h2>
        <p className="mb-2 w-2/3 ">
          児童教育研究会とは明治学院大学で活動するサークルです。横浜キャンパスを活動場所にして週2日水曜日と土曜日に活動を行っていまして、小学生年代の子どもたちと月1回交流する土曜学校やクリスマスに行うクリスマス子供会。その他数々のイベントを企画、運営し地域の子どもたちと交流をしています!
        </p>
      </div>
      <div className=" flex justify-end mr-40">
        <Image alt="linkのicon" src="/arrow.png" width="25" height="25" />
        <Link href="/post/active">
          <p className="text-gray-400">活動風景</p>
        </Link>
      </div>

      <br />
      <div className="border bg-yellow-50">
        <h2 className="text-center text-2xl mt-8">SNS</h2>
        <p className="text-center">気軽にフォローしてください！！</p>

        <div className="flex justify-evenly mb-12">
          <Link href="https://twitter.com/jiken11" className="flex mr-10 ">
            <Image
              alt="twitterLink"
              src="/tweet.png"
              width="40"
              height="40"
              className="mr-2"
            />
            TWITTER
          </Link>

          <Link href="https://instagram.com/jiken_mgu" className="flex">
            <Image
              alt="instagramLink"
              src="/instagram.png"
              width="40"
              height="40"
              className="mr-2"
            />
            INSTAGRAM
          </Link>
        </div>
      </div>
    </div>
  );
};
