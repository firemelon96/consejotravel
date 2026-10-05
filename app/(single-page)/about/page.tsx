import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About us",
  description:
    "consejo TRAVEL AND TOURS, a Department of Tourism (DOT) and City Tourism Office (CTO) Accredited tour operator owned by Mrs. Kathlyn Poquis- Cayabyab and Mr. Chris Salazar Cayabyab. consejo TRAVEL AND TOURS offers excursions, primarily around Palawan to local and foreign tourists from around the world. Its main office is located in City proper at Manalo Extension, Bgy. Milagrosa, Puerto Princesa City, Palawan. The business currently has five (5) office staff and five (5) tour guides as human resources in Puerto Princesa City only not included in El Nido.",
};

const About = () => {
  return (
    <div className="container mx-auto mt-10 space-y-4 md:px-20">
      <h1 className="pt-20 text-center text-3xl font-semibold text-orange-400 md:px-20">
        Company Profile
      </h1>

      <div className="mx-auto max-w-6xl space-y-4 pb-10">
        <p>
          <span className="font-semibold">Consejo Travel and Tours</span>, is a
          trusted and accredited travel and tour operator dedicated to providing
          quality, reliable, and memorable travel experiences. With years of
          experience in the travel and tourism industry, the company caters to
          both local and international travelers seeking convenient, enjoyable,
          and well-organized journeys.
        </p>
        <p>
          From its beginnings as a booking service, the company has grown into a
          full-service tour operator, offering a range of travel and tourism
          services designed to meet the diverse needs of its clients.
        </p>
      </div>

      <div className="mx-auto flex max-w-3xl flex-col text-start">
        <h2 className="pb-5 text-center text-xl font-semibold">Reputation</h2>

        <p>
          Through consistent service, professionalism, and commitment to
          customer satisfaction, Consejo Travel and Tours has built a strong
          reputation among travelers. The company is dedicated to delivering
          reliable services and creating meaningful travel experiences for every
          guest.
        </p>
      </div>

      <div className="mx-auto flex max-w-3xl flex-col text-center">
        <h2 className="pb-5 text-xl font-semibold">VISION</h2>
        <p className="">
          To be recognized as a trusted travel and tourism provider known for
          quality service and for helping travelers discover meaningful and
          memorable experiences.
        </p>
      </div>
      <div className="mx-auto flex max-w-3xl flex-col text-center">
        <h2 className="pb-5 text-xl font-semibold">MISION</h2>
        <p>
          Our mission is to transform every journey into a memorable experience
          by providing reliable, quality, and customer-focused tourism services.
          We strive to ensure customer satisfaction while promoting responsible
          tourism and respecting the social, cultural, and environmental values
          of the destinations we serve.
        </p>
      </div>

      <div className="mx-auto flex max-w-3xl flex-col text-start">
        <h2 className="pb-5 text-center text-xl font-semibold">
          OUR CORE VALUES
        </h2>

        <ul className="list-inside list-disc">
          <li>
            Honesty- It is critical for us as a company that the information we
            provide to our customers is honest and correct.
          </li>
          <li>Services Quality</li>
          <li>Open to feedback</li>
          <li>
            Integrity: Upholding honesty and transparency in all dealings.
          </li>
          <li>
            Customer-Centric: Prioritizing exceptional service and customer
            satisfaction.
          </li>
          <li>
            Reliability: Ensuring consistent and dependable travel experiences.
          </li>
          <li>
            Passion for Exploration: Inspiring and enabling a love for travel
            and discovery
          </li>
          <li>
            Community and Environment: Promoting responsible and sustainable
            travel practices.
          </li>
        </ul>
      </div>

      <h1 className="pt-20 text-center text-3xl font-semibold text-orange-400 md:px-20">
        Legalities
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <Image src="/cor.jpeg" alt="cor" width={600} height={600} />
        <Image src="/dti.jpeg" alt="dti" width={600} height={600} />
        <Image src="/permit.jpeg" alt="permit" width={600} height={600} />
      </div>
    </div>
  );
};

export default About;
