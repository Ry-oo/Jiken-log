import React, { useRef } from "react";

export default function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    };

    await fetch("../api/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) console.log("メール送信完了");
    });
  };
  return (
    <div className="h-screen">
      <h2 className="text-center text-3xl  mt-40">お問い合わせ</h2>

      <form className="my-10" onSubmit={(e) => handleSubmit(e)}>
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
            className="outline bg-yellow-300 w-28 p-1 rounded my-10 "
          >
            送信
          </button>
        </div>
      </form>
    </div>
  );
}
