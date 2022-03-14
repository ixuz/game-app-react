import { Card } from "@mui/material";
import React from "react";

const Area: React.FC = ({ children }) => {
  return (
    <Card
      sx={{ display: "flex", flexDirection: "column", p: 1, height: "100%" }}
    >
      {children}
    </Card>
  );
};

export default Area;
