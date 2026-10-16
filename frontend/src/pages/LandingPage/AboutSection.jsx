import about from '../../assets/about.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          About LendFlow
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          LendFlow is an independent portfolio project exploring borrower, lender and repayment workflows. The public demo contains fictional sample data and cannot submit applications, approve credit, fund loans or move money. Existing account routes remain available through sign in.
        </p>
        <img src={about} alt="About Us" className="mx-auto rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default AboutSection;
