import React from "react";
import { Outlet } from "react-router";
import { Sidebar } from "./Sidebar";
import { AppContainer, OutletContainer } from "./styled";

export const AppLayout = () => (
  <AppContainer>
    <Sidebar />

    <OutletContainer>
      <Outlet />
    </OutletContainer>
  </AppContainer>
);
