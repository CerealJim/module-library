import React, { useState } from "react";
import "./Accordion.scss";

const Accordion = () => {
  const [panels, setPanels] = useState([
    {
      id: 1,
      title: "Panel 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      expanded: false,
    },
    {
      id: 2,
      title: "Panel 2",
      content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      expanded: false,
    },
    {
      id: 3,
      title: "Panel 3",
      content:
        "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
      expanded: false,
    },
    {
      id: 4,
      title: "Panel 4",
      content:
        "Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.",
      expanded: false,
    },
    {
      id: 5,
      title: "Panel 5",
      content:
        "Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      expanded: false,
    },
  ]);

  const togglePanel = (panelId) => {
    setPanels((prevPanels) => {
      return prevPanels.map((panel) => {
        if (panel.id === panelId) {
          return { ...panel, expanded: !panel.expanded };
        }
        return panel;
      });
    });
  };

  return (
    <div className="accordion">
      {panels.map((panel) => (
        <div key={panel.id} className="border border-gray-300 rounded mb-4">
          <button
            className="accordion-header bg-gray-200 p-4 flex justify-between items-center"
            onClick={() => togglePanel(panel.id)}
          >
            <h3 className="text-lg">{panel.title}</h3>
            <i
              className={`fas fa-chevron-right icon transform transition-transform ${
                panel.expanded ? "rotate-90" : ""
              } text-gray-600`}
            ></i>
          </button>
          {panel.expanded && (
            <div className="panel-content p-4 border-t border-gray-300">
              {panel.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
