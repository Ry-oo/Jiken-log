import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "../styles/Home.module.css";

/**レスポンシブ対応をする */
export const MainContents: FC = () => {
  return (
    <div className={styles.view}>
      <div>
        <Image src="/jiken2.png" alt="活動場所" width="1500" height="600" />
      </div>

      <div className={styles.explanation}>
        <h2>児童教育研究会とは?</h2>
        <p>
          児童教育研究会とは明治学院大学で活動するサークルです。横浜キャンパスを活動場所にして週2日水曜日と土曜日に活動を行っていまして、小学生年代の子どもたちと月1回交流する土曜学校やクリスマスに行うクリスマス子供会。その他数々のイベントを企画、運営し地域の子どもたちと交流をしています!
        </p>
      </div>
      <div className=" flex justify-end mr-10 md:mr-40">
        <Image alt="linkのicon" src="/arrow.png" width="25" height="25" />
        <Link href="/post/active">
          <p className="text-gray-400">活動風景</p>
        </Link>
      </div>

      <br />
      <div>
        <div className={styles.snsInfo}>
          <h2>SNS</h2>
          <p>気軽にフォローしてください！！</p>
        </div>

        <div className={styles.snsImage}>
          <Link href="https://twitter.com/jiken11">
            <Image alt="twitterLink" src="/tweet.png" width="40" height="40" />
            TWITTER
          </Link>

          <Link href="https://instagram.com/jiken_mgu">
            <Image
              alt="instagramLink"
              src="/instagram.png"
              width="40"
              height="40"
            />
            INSTAGRAM
          </Link>
        </div>
      </div>
    </div>
  );
};
