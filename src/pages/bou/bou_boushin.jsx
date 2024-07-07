import React from "react";
import LayoutTokyo2 from "../../config/layout2";
import kanji_background from "../../config/tokyorakugaki_background";

const bou_妄 = () => {
  const 漢字 = "妄";
  const BOU = "BOU";
  const ひらがな  = "もうそう";

  return <LayoutTokyo2 kanji={漢字} romaji={BOU} hiragana={ひらがな} />;
};

export default bou_妄;
   