import { useState } from "react";
import Description from "./Description";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    {
      id: "tab1",
      label: "Description",
      content: <Description />,
    },
    {
      id: "tab2",
      label: "Additional Information",
      content: "Here are the features.",
    },
    {
      id: "tab3",
      label: "Reviews [5]",
      content: "This is the pricing section.",
    },
  ];

  return (
    <div className="w-full  mx-auto">
      <div className="flex justify-center items-center gap-13">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-10 text-2xl font-normal transition-all duration-200
              ${
                activeTab === tab.id
                  ? "text-black font-medium"
                  : "text-[#9F9F9F] hover:text-black"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4 bg-white">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="animate-fadeIn">
                {tab.content}
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export default Tabs;
