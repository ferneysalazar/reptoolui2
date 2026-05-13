// Navigation tree and demo context data for the FIRE Reporting Tool admin shell.
export const NAV = [
  {
    section: "Main",
    items: [
      { id: "dataform", label: "Dataform", icon: "dataform" },
    ],
  },
  {
    section: "Post-Reporting",
    items: [
      {
        id: "postReporting",
        label: "Post-Reporting Tasks",
        icon: "postreporting",
        children: [
          { id: "xmlReports", label: "XML Reports" },
          { id: "readIrsNotification", label: "Read IRS FATCA Notification File" },
        ],
      },
    ],
  },
  {
    section: "Administration",
    items: [
      {
        id: "fireConfiguration",
        label: "FIRE Configuration",
        icon: "config",
        children: [
          { id: "institutionsAdmin", label: "Institutions Administration" },
          { id: "filersAdmin", label: "Filers Administration" },
          { id: "jurisdictionsAdmin", label: "Jurisdictions Administration" },
        ],
      },
    ],
  },
  {
    section: "Resources",
    items: [{
      id: "help",
      label: "Help docs",
      icon: "helpdocs",
      children: [
        { id: "dataformhelp", label: "Dataform Help" },
        { id: "importinghelp", label: "Importing FATCA and CRS help" },
        { id: "xmlhelp", label: "XML Generation Help" },
      ],
    },
    ]
  },
];

export const INSTITUTIONS = [
  "Opes Inc. International Bank (Anguilla) Ltd. — Branch 1",
  "Opes Inc. International Bank (Anguilla) Ltd. — Branch 2",
  "Opes Inc. Trust Company (Cayman) Ltd.",
  "Opes Inc. Wealth Bermuda Ltd.",
  "Opes Inc. Private (Jersey) Ltd.",
];

export const YEARS = ["2026", "2025", "2024", "2023", "2022"];
