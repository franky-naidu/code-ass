import { Paper } from "@mui/material";
import React from "react";
import { BasicDashboardLayout } from "../components/layouts/index";

const DashboardPage = () => {
  return (
    <BasicDashboardLayout>
      <Paper elevation={0} className="h-50 m-5 p-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, non dolore tempora eveniet quas impedit quo, perspiciatis ratione alias, assumenda ullam. Hic quis quae minima adipisci reprehenderit aspernatur saepe doloremque.
        </Paper>
        <Paper elevation={0} square={false} className="h-50 m-5 p-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, non dolore tempora eveniet quas impedit quo, perspiciatis ratione alias, assumenda ullam. Hic quis quae minima adipisci reprehenderit aspernatur saepe doloremque.
        </Paper>
        <Paper elevation={4} className="h-50 m-5 p-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, non dolore tempora eveniet quas impedit quo, perspiciatis ratione alias, assumenda ullam. Hic quis quae minima adipisci reprehenderit aspernatur saepe doloremque.
        </Paper>
    </BasicDashboardLayout>
  );
};

export default DashboardPage;
