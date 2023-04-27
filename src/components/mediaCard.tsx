import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Blog } from "../../types/blogType";
import styles from "../styles/Home.module.css";

type Props = Pick<Blog, "image" | "title">;

export const MediaCard: FC<Props> = ({ image, title }) => {
  return (
    <Card className={styles.card}>
      <CardMedia
        className={styles.CardMedia}
        image={image.url}
        title="タイトル"
      />
      <CardContent className={styles.CardContent}>
        <Typography>{title}</Typography>
      </CardContent>
    </Card>
  );
};
