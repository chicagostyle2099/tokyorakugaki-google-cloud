interface Link {
  to: string;
  label: string;
  links?: { to: string; label: string }[]; // Define the links property as optional
}

const links: Link[] = [
  { to: "/", label: "Home" },
  { 
    to: "/bou/bou_youjinbou", 
    label: "bou_棒", 
    links: [
      { to: "/bou/sublink1", label: "Sublink 1" },
      { to: "/bou/sublink2", label: "Sublink 2" },
    ]
  },
  { 
    to: "/bu/bu_musha", 
    label: "bu_武", 
    links: [
      { to: "/bu/sublink1", label: "Sublink 1" },
      { to: "/bu/sublink2", label: "Sublink 2" },
    ]
  },
];

export default links;
