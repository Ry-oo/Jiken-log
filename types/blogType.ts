import { MicroCMSListResponse } from "microcms-js-sdk";

export type Blog = {
  id: string;
  body: string;
  title: string;
  image: {
    url: string;
  };
};
export type Props = MicroCMSListResponse<Blog>;
