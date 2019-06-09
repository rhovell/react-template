import Header from './Header';

const layoutStyle = {
  margin: -8,
  padding: 0,
  width: '100%',
  maxWidth: '100vw',
  height: '100%',
  maxHeight: '100vh'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
