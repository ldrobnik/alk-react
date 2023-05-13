import Sidebar from "../sidebar/Sidebar";
import Container from "@mui/material/Container";

import { RootContainer, SidebarContainer, MainPanel } from "./Layout.styles";

export default function Layout({ children }) {
  return (
    <>
      <RootContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <MainPanel>{children}</MainPanel>
      </RootContainer>
    </>
  );
}
