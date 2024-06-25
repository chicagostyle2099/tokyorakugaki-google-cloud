import React from "react";
import LayoutTokyo2 from "../../config/layout2";
import kanji_background from "../../config/tokyorakugaki_background";

const bu_武 = () => {
  const Musha = "武";
  const BU = "BU";
  const ひらがな = "むしゃ";
  return <LayoutTokyo2 kanji={Musha} romaji={BU} hiragana={ひらがな}  />;
};

export default bu_武;
