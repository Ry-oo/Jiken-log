import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export const sendGmail = (req: NextApiRequest, res: NextApiResponse) => {
  const transPorter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.GMAILUSER,
      pass: process.env.GMAILPASSWORD,
    },
  });
  const toHostMailData = {
    from: `${req.body.email}`,
    to: "shigetar7212@gmail.com",
    subject: `[お問い合わせ]${req.body.name}様より`,
    text: `${req.body.text} Send from ${req.body.email}`,
    html: `<p>[名前]</p>
          <p>${req.body.name}</p>
          <p>[要件]</p>
          <p>${req.body.message}</p>
          <p>[メールアドレス]</p>
          <p>${req.body.email}</p>
          `,
  };
  transPorter.sendMail(toHostMailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.send("success");
};

export default sendGmail;
