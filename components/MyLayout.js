import Header from './Header';
import Footer from './Footer';

const layoutStyle = {
  margin: -8,
  padding: 0,
  width: '100vw',
  maxWidth: '100vw',
  height: '100vh',
  maxHeight: '100vh'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
