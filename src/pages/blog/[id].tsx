import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client } from "../../../libs/client";
import { Blog, Props } from "../../../types/blogType";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";

type dataType = Blog & MicroCMSContentId & MicroCMSDate;

export const getStaticProps: GetStaticProps<dataType, { id: string }> = async (
  context
) => {
  if (!context.params) {
    return {
      notFound: true,
    };
  }

  const data = await client.getListDetail<Blog>({
    endpoint: "jlog",
    contentId: context.params.id,
  });
  return {
    props: data,
  };
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList<Blog>({ endpoint: "jlog" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};
const Blog: NextPage<Blog> = (props) => {
  return (
    <div className="bg-gray-50">
      <div className="h-screen  mx-60  ">
        <h1 className="text-2xl text-center">{props.title}</h1>
        <br />
        <article dangerouslySetInnerHTML={{ __html: `${props.body}` }} />
      </div>
    </div>
  );
};
export default Blog;
