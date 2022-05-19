import MainNav from '../components/navbar/MainNav';
import Head from 'next/head';
interface MainLayoutProps {
  title?: string;
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = 'default title',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <MainNav />
      {/* overflow-y-hidden */}
      <div className="overflow-hidden">{children}</div>
    </>
  );
};

export default MainLayout;
