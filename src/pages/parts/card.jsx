import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

/**Microcmsをインポートしてタイトルを表示させる */

export const MediaCard = ({ image, title }) => {
  return (
    <Card className="w-80">
      <CardMedia className="h-32" image={image} title="タイトル" />

      <CardContent>
        <Typography>{title}</Typography>
      </CardContent>
    </Card>
  );
};
export default MediaCard;
