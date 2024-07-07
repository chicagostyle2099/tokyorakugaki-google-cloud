import React from "react";
import LayoutTokyo2 from "../../config/layout2";
import kanji_background from "../../config/tokyorakugaki_background";

const bou_坊 = () => {
  const 漢字 = "坊";
  const BOU = "BOU";
  const ひらがな  = "どろぼう";

  return <LayoutTokyo2 kanji={漢字} romaji={BOU} hiragana={ひらがな} />;
};

export default bou_坊;
   