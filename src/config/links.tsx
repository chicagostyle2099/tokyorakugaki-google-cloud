interface Link {
  to: string;
  label: string;
  links?: { to: string; label: string }[]; // Define the links property as optional
}

const links: Link[] = [
  { to: "/", label: "Home" },
  { 
    to: "", 
    label: "bou", 
    links: [
      { to: "/bou/bou_youjinbou", label: "bou 棒" },
      { to: "/bou/bou_bouka", label: "bou 防" },
      { to: "/bou/bou_boushin", label: "bou 妄" },
      { to: "/bou/bou_hakaru", label: "bou 謀" },
      { to: "/bou/bou_dorobou", label: "bou 坊" },
      { to: "/bou/bou_samatageru", label: "bou 妨" },
      { to: "/bou/bou_boushi", label: "bou 帽" },
      { to: "/bou/bou_kibou", label: "bou 望" },
      { to: "/bou/bou_horobosu", label: "bou 亡" },
      { to: "/bou/bou_boukansha", label: "bou 傍" },
      { to: "/bou/bou_bouryoku", label: "bou 暴" },
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
