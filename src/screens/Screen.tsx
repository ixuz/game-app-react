import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Layout } from "../components/Layout/Layout";
import Sidebar from "../components/Sidebar/Sidebar";

interface Props {
  headerComponent?: React.ReactNode;
  sidebarComponent?: React.ReactNode;
  mainComponent: React.ReactNode;
  footerComponent?: React.ReactNode;
}

const Screen: React.FC<Props> = ({
  headerComponent,
  sidebarComponent,
  mainComponent,
  footerComponent,
}) => {
  const fallback = {
    header: <Header />,
    sidebar: <Sidebar />,
    main: <div>Nothing here...</div>,
    footer: <Footer />,
  };
  return (
    <Layout
      headerComponent={headerComponent ? headerComponent : fallback.header}
      sidebarComponent={sidebarComponent ? sidebarComponent : fallback.sidebar}
      mainComponent={mainComponent ? mainComponent : fallback.main}
      footerComponent={footerComponent ? footerComponent : fallback.footer}
    />
  );
};

export default Screen;
