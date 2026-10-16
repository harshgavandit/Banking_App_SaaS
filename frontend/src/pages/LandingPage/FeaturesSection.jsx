import investing from '../../assets/investing.jpg';
import saving from '../../assets/saving.png';
import group from '../../assets/group.png';

const FeaturesSection = () => {
  return (
    <section id="services" className="py-16 bg-gray-100 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Explore the LendFlow workflow
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
            <img src={investing} alt="Investing" className="w-full mb-4 rounded-lg" />
            <h3 className="text-xl font-bold mb-2">Borrower origination</h3>
            <p className="text-gray-600">
              Preview loan requests and sample field validation in a borrower workspace.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
            <img src={saving} alt="Saving" className="w-full mb-4 rounded-lg" />
            <h3 className="text-xl font-bold mb-2">Lender review</h3>
            <p className="text-gray-600">
              Inspect sample application details and document review stages.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
            <img src={group} alt="Group Saving" className="w-full mb-4 rounded-lg" />
            <h3 className="text-xl font-bold mb-2">Repayment tracking</h3>
            <p className="text-gray-600">
              See a fictional schedule with paid, upcoming and scheduled repayments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
