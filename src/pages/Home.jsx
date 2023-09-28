import "../styles/Home.css";

const CenteredHomeSection = ({ children, title }) => (
  <div>
    <div className="centered-home-section-title">{title}</div>
    <div className="centered-home-section-body">{children}</div>
  </div>
);

const Home = () => {
  return (
    <main className="home-page">
      <CenteredHomeSection></CenteredHomeSection>
    </main>
  );
};

export default Home;
