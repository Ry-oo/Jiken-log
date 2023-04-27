import Link from "next/link";
import { FC } from "react";
import styles from "../styles/Home.module.css";
/**レスポンシブ対応をする */

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <div>
          <Link href={"/"}>
            <h3>
              Jiken <span>MG </span> Site{" "}
            </h3>
          </Link>
        </div>

        <ul>
          <li>
            <Link href={"/post/active"}>activity</Link>
          </li>

          <li>
            <Link href={"/post/contact"}>contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
