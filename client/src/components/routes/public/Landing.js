import PublicRoute from "../../utils/routes/PublicRoute";

const Landing = () => {
  const content = (
    <>
      <p>LANDING CONTENT</p>
    </>
  );

  return <PublicRoute path="/" title="landing" content={content} />;
};

export default Landing;
