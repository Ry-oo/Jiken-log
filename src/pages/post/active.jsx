import Link from "next/link";
import { client } from "../../../libs/client";
import { MediaCard } from "../../components/mediaCard";

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "jlog",
  });

  return {
    props: {
      blog: data.contents,
    },
  };
};

export const Active = ({ blog }) => {
  return (
    <div className="h-screen bg-green-50">
      <h2 className="text-3xl text-center italic">
        ~児童教育研究会の主な活動内容（2023編）~
      </h2>

      <div>
        <ul className="grid grid-cols-3 gap-4 mt-10 mx-20">
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <MediaCard image={blog.image} title={blog.title} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Active;
