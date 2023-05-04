import Sidebar from "../sidebar/Sidebar";

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
