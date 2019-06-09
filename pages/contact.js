import Layout from '../components/MyLayout.js';

const contactPageStyle = {
  padding: 10,
  margin: 0
}

export default function Contact() {
  return (
    <Layout>
    <div className="contact-page" style={contactPageStyle}>
      <p>This is the contact page</p>
    </div>
    </Layout>
  );
}
