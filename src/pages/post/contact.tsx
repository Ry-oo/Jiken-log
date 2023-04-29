import { NextPage } from "next";
import { useRef } from "react";
import styles from "../../styles/Home.module.css";

type submitType = React.FormEvent<HTMLFormElement>;

export const Contact: NextPage = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: submitType) => {
    e.preventDefault();

    const data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    };

    await fetch("../api/sendGmail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    alert("送信されました！");
  };

  return (
    <div className={styles.contact}>
      <h2>お問い合わせ</h2>

      <form onSubmit={(e: submitType) => handleSubmit(e)}>
        <div>
          <label htmlFor="name">お名前</label>
          <input
            type="text"
            id="name"
            placeholder="name"
            ref={nameRef}
            required
          />
        </div>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input
            type="email"
            id="email"
            placeholder="your e-mail"
            ref={emailRef}
            required
          />
        </div>
        <div>
          <label htmlFor="message">内容</label>
          <textarea
            name="message"
            id="message"
            placeholder="requirement"
            ref={messageRef}
            required
          />
        </div>
        <div>
          <button type="submit">送信</button>
        </div>
      </form>
    </div>
  );
};
export default Contact;
