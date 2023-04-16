import { client } from "../../../libs/client";

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "jlog", contentId: id });
  return {
    props: {
      blog: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "jlog" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const Blog = ({ blog }) => {
  return (
    <div className="bg-gray-50">
      <div className="h-screen  mx-60  ">
        <h1 className="text-2xl text-center">{blog.title}</h1>
        <br />
        <article dangerouslySetInnerHTML={{ __html: `${blog.body}` }} />
      </div>
    </div>
  );
};
export default Blog;
