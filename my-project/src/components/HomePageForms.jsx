import { Button, Select, Textarea, TextInput } from "flowbite-react";
import React, { useState } from "react";

const HomePageForms = () => {
  const [activeTab, setActiveTab] = useState("missingPersons");

  const renderForm = () => {
    switch (activeTab) {
      case "missingPersons":
        return <MissingPersonsForm />;
      case "donationFundraising":
        return <DonationFundraisingForm />;
      case "resourceRequest":
        return <ResourceRequestForm />;
      case "volunteerRegistration":
        return <VolunteerRegistrationForm />;
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-start gap-4 p-4 mb-14">
      <div className="flex-1 max-w-2xl p-2 flex items-center justify-center">
        <img
          src="/forms.png"
          alt="Descriptive text"
          className="object-cover"
          style={{ height: '550px', width: '500px', objectFit: 'contain' }}
        />
      </div>

      <div className="flex-1 max-w-2xl p-2 flex items-center justify-center">
        <div className="flex flex-col w-full ml-8">
          <div className="flex justify-center mb-4">
            {["missingPersons", "donationFundraising", "resourceRequest", "volunteerRegistration"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 mx-2 text-sm font-semibold transition-all duration-300 ease-in-out ${
                  activeTab === tab
                    ? "text-white bg-blue-500 shadow-glow"
                    : "text-blue-500 bg-white border border-blue-500 rounded-md hover:bg-blue-100"
                } rounded-md`}
                onClick={() => setActiveTab(tab)}
              >
                {tab
                  .replace(/([A-Z])/g, " $1")
                  .split(" ")
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")} Form
              </button>
            ))}
          </div>

          <div
            className={`border border-gray-200 rounded-md p-4 shadow-md transition-opacity duration-500 ease-in-out transform ${activeTab ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"} bg-gradient-to-r from-blue-200 to-blue-400`}
            style={{ animation: activeTab ? 'slideIn 0.5s ease-in-out' : 'none' }}
          >
            {renderForm()}
          </div>
        </div>
      </div>
    </div>
  );
};

const commonInputStyles = "transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500";
const commonButtonStyles = "w-full h-12 transition-transform duration-300 ease-in-out hover:scale-105";

const MissingPersonsForm = () => (
  <form className="space-y-4 transition-opacity duration-500 ease-in-out opacity-100" style={{ animation: 'fadeIn 1s ease-in-out' }}>
    <h3 className="text-md font-bold text-black mb-2">* Help Us Find Missing Loved Ones - Report Details Here</h3>
    <h2 className="text-lg font-bold text-center text-blue-600" style={{ textShadow: '0 0 10px rgba(255, 105, 135, 0.7)' }}>Missing Persons Report</h2>
    <TextInput type="text" placeholder="Full Name" className={` ${commonInputStyles} shadow-glow`} />
    <TextInput type="text" placeholder="Last Seen Location" className={` ${commonInputStyles} shadow-glow`} />
    <TextInput type="number" placeholder="Contact No." className={` ${commonInputStyles} shadow-glow`} />
    <Textarea placeholder="Description" rows={4} className={` ${commonInputStyles} shadow-glow`} />
    <TextInput type="file" className={` ${commonInputStyles} shadow-glow`} />
    <Button type="submit" gradientDuoTone='purpleToPink' className={commonButtonStyles}>
      <span className='text-center py-1 text-md'>Submit Report</span>
    </Button>
  </form>
);

const DonationFundraisingForm = () => {
  const [donationType, setDonationType] = useState("money");

  return (
    <form className="space-y-4 transition-opacity duration-500 ease-in-out opacity-100" style={{ animation: 'fadeIn 1s ease-in-out' }}>
      <h3 className="text-md font-bold text-black mb-2">* Support Our Cause - Contribute Donations or Services</h3>
      <h2 className="text-lg font-bold text-center text-blue-600" style={{ textShadow: '0 0 10px rgba(255, 105, 135, 0.7)' }}>Donation & Fundraising</h2>
      <TextInput type="text" placeholder="Full Name" className={` ${commonInputStyles} shadow-glow`} />
      <TextInput type="email" placeholder="Email" className={` ${commonInputStyles} shadow-glow`} />
      <div>
        <Select
          value={donationType}
          onChange={(e) => setDonationType(e.target.value)}
          placeholder="Type of Donation"
          className={` ${commonInputStyles} shadow-glow`}
        >
          <option value="money">Money</option>
          <option value="items">Items (e.g., food, clothes, supplies)</option>
          <option value="services">Services (e.g., medical, transport, education)</option>
        </Select>
      </div>
      {donationType === "money" && (
        <TextInput type="number" placeholder="Amount (in Rs)" className={` ${commonInputStyles} shadow-glow`} />
      )}
      {donationType === "items" && (
        <TextInput type="text" placeholder="Items to Donate" className={` ${commonInputStyles} shadow-glow`} />
      )}
      {donationType === "services" && (
        <TextInput type="text" placeholder="Services to Offer" className={` ${commonInputStyles} shadow-glow`} />
      )}
      <Textarea placeholder="Message or Cause" rows={4} className={` ${commonInputStyles} shadow-glow`} />
      <Button type="submit" gradientDuoTone="purpleToPink" className={commonButtonStyles}>
        <span className="text-center py-1 text-md">Donate Now</span>
      </Button>
    </form>
  );
};

const ResourceRequestForm = () => (
  <form className="space-y-4 transition-opacity duration-500 ease-in-out opacity-100" style={{ animation: 'fadeIn 1s ease-in-out' }}>
    <h3 className="text-md font-bold text-black mb-2">* Request Essential Resources to Aid Ongoing Efforts</h3>
    <h2 className="text-lg font-bold text-center text-blue-600" style={{ textShadow: '0 0 10px rgba(255, 105, 135, 0.7)' }}>Resource Request</h2>
    <TextInput type="text" placeholder="Organization/Individual Name" className={` ${commonInputStyles} shadow-glow`} />
    <TextInput type="text" placeholder="Resource Needed" className={` ${commonInputStyles} shadow-glow`} />
    <Textarea placeholder="Description of Needs" rows={4} className={` ${commonInputStyles} shadow-glow`} />
    <TextInput type="date" className={` ${commonInputStyles} shadow-glow`} />
    <Button type="submit" gradientDuoTone='purpleToPink' className={commonButtonStyles}>
      <span className='text-center py-1 text-md'>Request Resource</span>
    </Button>
  </form>
);

const VolunteerRegistrationForm = () => (
  <form className="space-y-4 transition-opacity duration-500 ease-in-out opacity-100" style={{ animation: 'fadeIn 1s ease-in-out' }}>
    <h3 className="text-md font-bold text-black mb-2">* Join Our Team of Volunteers - Make a Difference Today</h3>
    <h2 className="text-lg font-bold text-center text-blue-600" style={{ textShadow: '0 0 10px rgba(255, 105, 135, 0.7)' }}>Volunteer Registration & Coordination</h2>
    <TextInput type="text" placeholder="Full Name" className={` ${commonInputStyles} shadow-glow`} />
    <TextInput type="email" placeholder="Email" className={` ${commonInputStyles} shadow-glow`} />
    <Textarea rows={4} type="text" placeholder="Area of Interest/Expertise" className={` ${commonInputStyles} shadow-glow`} />
    <TextInput type="date" placeholder="Available Start Date" className={` ${commonInputStyles} shadow-glow`} />
    <Button type="submit" gradientDuoTone='purpleToPink' className={commonButtonStyles}>
      <span className='text-center py-1 text-md'>Register as Volunteer</span>
    </Button>
  </form>
);

export default HomePageForms;
