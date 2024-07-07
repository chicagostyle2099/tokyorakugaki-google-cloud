import React from "react";
import LayoutTokyo2 from "../../config/layout2";
import kanji_background from "../../config/tokyorakugaki_background";

const bou_亡 = () => {
  const 漢字 = "亡";
  const BOU = "BOU";
  const ひらがな  = "ほろぼす";

  return <LayoutTokyo2 kanji={漢字} romaji={BOU} hiragana={ひらがな} />;
};

export default bou_亡;
   