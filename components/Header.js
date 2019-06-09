import Link from 'next/link';
import RedLogo from '../components/red-logo'

const linkStyle = {
  marginRight: 15,
};

const headerStyle = {
  background: '#F2F2F2',
  width: '100%',
  padding: 20,
  margin: 0
}
const Header = () => (
  <div style={headerStyle}>
    <div className="logo-container">
      <RedLogo />
    </div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/contact">
      <a style={linkStyle}>Contact</a>
    </Link>
  </div>
);

export default Header;
