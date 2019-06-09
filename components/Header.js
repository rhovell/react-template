import Link from 'next/link';
import RedLogo from '../components/red-logo'
import FbLogo from '../components/fblogo'
import TwitterLogo from '../components/twitterlogo'

const linkStyle = {
  marginRight: 15,
};

const headerStyle = {
  background: '#F2F2F2',
  width: '100vw',
  padding: 0,
  margin: 0,
  maxWidth: "100vw",
  display: 'inline-flex'

};

const logoContainerStyle = {
  width: '80%',
}

const menuStyle = {
  background: "rgb(7, 140, 0)",
  margin: 0,
  padding: 20,
  maxWidth: "100vw",
};

const socialStyle ={
  width: '20%',
  textAlign: 'center',
  display: 'inline-flex',
  margin: 'auto'
}
const Header = () => (
  <div className="header-container">
    <div style={headerStyle}>
      <div className="logo-container" style={logoContainerStyle}>
        <RedLogo />
      </div>
      <div className="social-bar" style={socialStyle}>
        <FbLogo />
        <TwitterLogo />
      </div>
    </div>
    <div className="menu-bar" style={menuStyle}>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/contact">
        <a style={linkStyle}>Contact</a>
      </Link>
    </div>
  </div>
);

export default Header;
