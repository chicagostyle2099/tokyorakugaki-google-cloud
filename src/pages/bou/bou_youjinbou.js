import React from "react";
import Layout_Tokyo2 from "../../config/layout2";
import kanji_background from "../../config/tokyorakugaki_background";

const bou_棒 = () => {
  const Youjinbou = "棒";
  const BOU = "BOU";
  const ひらがな  = "ようじんぼう";

  return <Layout_Tokyo2 kanji={Youjinbou} romaji={BOU} hiragana={ひらがな} />;
};

export default bou_棒;
   