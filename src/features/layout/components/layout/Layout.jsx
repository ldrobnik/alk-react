import Container from "@mui/material/Container";
import Sidebar from "../sidebar/Sidebar";

import { RootContainer, SidebarContainer } from "./Layout.styles";

export default function Layout({ children }) {
  return (
    <>
      <RootContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <Container>{children}</Container>
      </RootContainer>
    </>
  );
}
