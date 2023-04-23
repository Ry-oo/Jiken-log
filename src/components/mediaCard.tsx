import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Blog } from "../../types/blogType";

type Props = Pick<Blog, "image" | "title">;

export const MediaCard: FC<Props> = ({ image, title }) => {
  return (
    <Card className="w-80">
      <CardMedia className="h-32" image={image.url} title="タイトル" />
      <CardContent>
        <Typography>{title}</Typography>
      </CardContent>
    </Card>
  );
};
