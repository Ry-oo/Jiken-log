import { NextPage } from "next";
import { useRef } from "react";

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
    <div className="h-screen bg-slate-50">
      <h2 className="text-center text-3xl  ">お問い合わせ</h2>

      <form className="my-10" onSubmit={(e: submitType) => handleSubmit(e)}>
        <div className="flex flex-col items-center ">
          <label htmlFor="name" className=" mb-4">
            お名前
          </label>
          <input
            type="text"
            id="name"
            className="outline outline-gray-200 w-80 rounded px-4 "
            placeholder="name"
            ref={nameRef}
            required
          />
        </div>
        <div className="flex flex-col items-center ">
          <label htmlFor="email" className=" my-4 ">
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            className="outline outline-gray-200 w-80 rounded px-4"
            placeholder="your e-mail"
            ref={emailRef}
            required
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="message" className=" my-4">
            内容
          </label>
          <textarea
            name="message"
            id="message"
            className="outline outline-gray-200 w-96 rounded h-40 pl-4 "
            placeholder="requirement"
            ref={messageRef}
            required
          />
        </div>
        <div className=" flex flex-col items-center">
          <button
            type="submit"
            className="outline bg-yellow-300 w-28 p-1 rounded my-10 hover:bg-yellow-400"
          >
            送信
          </button>
        </div>
      </form>
    </div>
  );
};
export default Contact;
