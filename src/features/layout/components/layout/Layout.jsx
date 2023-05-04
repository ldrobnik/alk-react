import { RootContainer, SidebarContainer, MainPanel } from "./Layout.styles";

export default function Layout({ children }) {
  return (
    <>
      <RootContainer>
        <SidebarContainer>x</SidebarContainer>
        <MainPanel>{children}</MainPanel>
      </RootContainer>
    </>
  );
}
