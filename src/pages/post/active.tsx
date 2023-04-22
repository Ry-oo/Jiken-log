import Link from "next/link";
import { client } from "../../../libs/client";
import { MediaCard } from "../../components/mediaCard";
import { GetStaticProps, NextPage } from "next";

import { Blog, Props } from "../../../types/blogType";

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({
    endpoint: "jlog",
  });
  console.log(data);

  return {
    props: data,
  };
};

export const Active: NextPage<Props> = (props) => {
  return (
    <div className="h-screen bg-green-50">
      <h2 className="text-3xl text-center italic">
        ~児童教育研究会の主な活動内容（2023編）~
      </h2>

      <ul className="grid grid-cols-3 gap-4 mt-10 mx-20">
        {props.contents.map((content) => (
          <li key={content.id}>
            <Link href={`/blog/${content.id}`}>
              <MediaCard image={content.image} title={content.title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Active;
