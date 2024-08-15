import React, { useState } from 'react';
import { Link } from "gatsby";
import '../filter_elements/filter_elements.css'; // Adjust the path if necessary

const FilterComponent = () => {
  const [filter, setFilter] = useState('bou');

  const filterSelection = (category) => {
    setFilter(category);
  };

  const items = [

    // BOU
    { category: 'bou', name: '棒', link: '/bou/bou_youjinbou'},
    { category: 'bou', name: '防', link: '/bou/bou_bouka'},
    { category: 'bou', name: '妄', link: '/bou/bou_boushin'},
    { category: 'bou', name: '謀', link: '/bou/bou_hakaru'},
    { category: 'bou', name: '坊', link: '/bou/bou_dorobou'},
    { category: 'bou', name: '妨', link: '/bou/bou_samatageru'},
    { category: 'bou', name: '帽', link: '/bou/bou_boushi'},
    { category: 'bou', name: '望', link: '/bou/bou_kibou'},
    { category: 'bou', name: '亡', link: '/bou/bou_horobosu'},
    { category: 'bou', name: '傍', link: '/bou/bou_boukansha' },
    { category: 'bou', name: '暴', link: '/bou/bou_bouryoku'},

    // BU
    { category: 'bu', name: '武', link: '/bu/bu_musha'},
    { category: 'bu', name: '部', link: '/bu/bu_bubun'},
    { category: 'bu', name: '分', link: '/bu/bu_jibun'},
    { category: 'bu', name: '不', link: '/bu/bu_fushigi'},
    { category: 'bu', name: '無', link: '/bu/bu_buji'},
    { category: 'bu', name: '舞', link: '/bu/bu_maiagaru'},
    // { category: 'bu', name: '歩', link: '/bu/bu_boushi'},
    { category: 'bu', name: '夫', link: '/bu/bu_daijoubu'},
    // { category: 'bu', name: '奉', link: '/bu/bu_horobosu'},
    
    // CHOU
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},

    // E
    { category: 'e', name: '図', link: '/e/e_chizu'},
    { category: 'e', name: '会', link: '/e/e_au'},
    { category: 'e', name: '餌', link: '/e/e_esa'},
    { category: 'e', name: '衣', link: '/e/e_koromo'},
    { category: 'e', name: '依', link: '/e/e_izen'},
    { category: 'e', name: '重', link: '/e/e_kasaneru'},
    { category: 'e', name: '回', link: '/e/e_mawaru'},
    { category: 'e', name: '廻', link: '/e/e_kaiten'},
    { category: 'e', name: '画', link: '/e/e_eiga'},
    { category: 'e', name: '歪', link: '/e/e_igamu'},
    { category: 'e', name: '栄', link: '/e/e_eikou'},
    { category: 'e', name: '懐', link: '/e/e_natsukashii'},
    { category: 'e', name: '壊', link: '/e/e_kowareru'},
    { category: 'e', name: '恵', link: '/e/e_megumu'},
    { category: 'e', name: '彗', link: '/e/e_suisei'},
    { category: 'e', name: '潰', link: '/e/e_tsubureru'},

    // EN
    { category: 'en', name: '宛', link: '/en/en_ateru'},
    { category: 'en', name: '遠', link: '/en/en_tooi'},
    { category: 'en', name: '淵', link: '/en/en_fuchi'},
    { category: 'en', name: '延', link: '/en/en_enchou'},
    { category: 'en', name: '筵', link: '/en/en_mushiro'},
    { category: 'en', name: '縁', link: '/en/en_fuchidoru'},
    { category: 'en', name: '演', link: '/en/e_engi'},
    { category: 'en', name: '円', link: '/en/en_marui'},
    { category: 'en', name: '羨', link: '/en/en_senbou'},
    { category: 'en', name: '燕', link: '/en/en_tsubame'},
    { category: 'en', name: '圧', link: '/en/en_atsu'},
    { category: 'en', name: '園', link: '/en/en_kouen'},
    { category: 'en', name: '援', link: '/en/en_enjo'},
    { category: 'en', name: '捐', link: '/en/en_suteru'},
    
    // FU
    { category: 'fu', name: '不', link: '/fu/fu_fushigi'},
    { category: 'fu', name: '風', link: '/fu/fu_furo'},
    { category: 'fu', name: '布', link: '/fu/fu_saifu'},
    { category: 'fu', name: '腐', link: '/fu/fu_kusaru'},
    { category: 'fu', name: '浮', link: '/fu/fu_ukareru'},
    { category: 'fu', name: '俯', link: '/fu/fu_fusu'},
    { category: 'fu', name: '府', link: '/fu/fu_seifu'},
    { category: 'fu', name: '付', link: '/fu/fu_tsukeru'},
    { category: 'fu', name: '歩', link: '/fu/fu_aruku'},
    { category: 'fu', name: '負', link: '/fu/fu_fusai'},
    { category: 'fu', name: '夫', link: '/fu/fu_otto'},
    { category: 'fu', name: '膚', link: '/fu/fu_hada'},
    { category: 'fu', name: '婦', link: '/fu/fu_fuufu'},
    { category: 'fu', name: '譜', link: '/fu/fu_gakufu'},
    { category: 'fu', name: '蒲', link: '/fu/fu_futon'},
    

    // GEN
    { category: 'gen', name: '幻', link: '/gen/gen_maboroshi'},
    { category: 'gen', name: '現', link: '/gen/gen_genjitsu'},
    { category: 'gen', name: '言', link: '/gen/gen_gengo'},
    { category: 'gen', name: '原', link: '/gen/gen_genbutsu'},
    { category: 'gen', name: '減', link: '/gen/gen_genshou'},
    { category: 'gen', name: '元', link: '/gen/gen_genki'},
    { category: 'gen', name: '眼', link: '/gen/gen_genkyuu'},
    { category: 'gen', name: '厳', link: '/gen/gen_kibishii'},
    { category: 'gen', name: '限', link: '/gen/gen_kagiri'},
    { category: 'gen', name: '弦', link: '/gen/gen_gengaku'},
    { category: 'gen', name: '諺', link: '/gen/gen_kotowaza'},
    { category: 'gen', name: '這', link: '/gen/gen_hairikomu'},
    
    // GO
    { category: 'go', name: '誤', link: '/go/go_gokai'},
    { category: 'go', name: '五', link: '/go/go_itsutsu'},
    { category: 'go', name: '互', link: '/go/go_tagai'},
    { category: 'go', name: '語', link: '/go/go_kataru'},
    { category: 'go', name: '悟', link: '/go/go_satoru'},
    { category: 'go', name: '後', link: '/go/go_saigo'},
    { category: 'go', name: '降', link: '/go/go_furu'},
    { category: 'go', name: '拒', link: '/go/go_kyohi'},
    { category: 'go', name: '御', link: '/go/go_gomen'},
    { category: 'go', name: '其', link: '/go/go_sore'},
    { category: 'chou', name: '吾', link: '/go/go_ware'},

    // HAN
    { category: 'han', name: '番', link: '/han/han_bangumi'},
    { category: 'han', name: '磐', link: '/han/han_iwa'},
    { category: 'han', name: '反', link: '/han/han_hantai'},
    { category: 'han', name: '汎', link: '/han/han_hanyou'},
    { category: 'han', name: '凡', link: '/han/han_oyoso'},
    { category: 'han', name: '半', link: '/han/han_hanbun'},
    { category: 'han', name: '判', link: '/han/han_hantei'},
    { category: 'han', name: '犯', link: '/han/han_hanzai'},
    { category: 'han', name: '般', link: '/han/han_ippan'},
    { category: 'han', name: '範', link: '/han/han_kihan'},
   
    // HI
    { category: 'hi', name: '灯', link: '/hi/hi_dentou'},
    { category: 'hi', name: '日', link: '/hi/hi_nihon'},
    { category: 'hi', name: '被', link: '/hi/hi_kaburu'},
    { category: 'hi', name: '非', link: '/hi/hi_hijou'},
    { category: 'hi', name: '悲', link: '/hi/hi_kanashii'},
    { category: 'hi', name: '秘', link: '/hi/hi_himitsu'},
    { category: 'hi', name: '皮', link: '/hi/hi_hifu'},
    { category: 'hi', name: '比', link: '/hi/hi_kuraberu'},
    { category: 'hi', name: '否', link: '/hi/hi_anpi'},
    { category: 'hi', name: '彼', link: '/hi/hi_kare'},
    { category: 'hi', name: '火', link: '/hi/hi_kaji'},
    { category: 'hi', name: '靡', link: '/hi/hi_nabiku'},
    { category: 'hi', name: '卑', link: '/hi/hi_hizoku'},
    { category: 'hi', name: '疲', link: '/hi/hi_tsukareru'},
   

    // HOU
    { category: 'hou', name: '飽', link: '/hou/hou_akumade'},
    { category: 'hou', name: '並', link: '/hou/hou_naraberu'},
    { category: 'hou', name: '法', link: '/hou/hou_houritsu'},
    // { category: 'hou', name: '汎', link: '/hou/hou_hanyou'},
    { category: 'hou', name: '放', link: '/hou/hou_hanasu'},
    { category: 'hou', name: '方', link: '/hou/hou_houhou'},
    { category: 'hou', name: '逢', link: '/hou/hou_au'},
    { category: 'hou', name: '宝', link: '/hou/hou_houseki'},
    { category: 'hou', name: '報', link: '/hou/hou_houdou'},
    { category: 'hou', name: '奉', link: '/hou/hou_houzuru'},
    { category: 'hou', name: '封', link: '/hou/hou_fuuin'},
    { category: 'hou', name: '砲', link: '/hou/hou_teppou'},
 

    // JI
    { category: 'ji', name: '事', link: '/ji/ji_jiken'},
    { category: 'ji', name: '仕', link: '/ji/ji_shigoto'},
    { category: 'ji', name: '示', link: '/ji/ji_shimesu'},
    { category: 'ji', name: '餌', link: '/ji/ji_eba'},
    { category: 'ji', name: '自', link: '/ji/ji_jibun'},
    { category: 'ji', name: '除', link: '/ji/ji_souji'},
    { category: 'ji', name: '耳', link: '/ji/ji_jimoku'},
    { category: 'ji', name: '時', link: '/ji/ji_jikan'},
    { category: 'ji', name: '地', link: '/ji/ji_jimen'},
    { category: 'ji', name: '持', link: '/ji/ji_jisan'},
    { category: 'ji', name: '辞', link: '/ji/ji_jisho'},
    { category: 'ji', name: '字', link: '/ji/ji_moji'},
    { category: 'ji', name: '次', link: '/ji/ji_tsugi'},
    { category: 'ji', name: '慈', link: '/ji/ji_jizen'},
    { category: 'ji', name: '治', link: '/ji/ji_seiji'},

    // JIN
    { category: 'jin', name: '人', link: '/jin/jin_jinsei'},
    { category: 'jin', name: '沈', link: '/jin/jin_chinchaku'},
    { category: 'jin', name: '尽', link: '/jin/jin_tsukusu'},
    { category: 'jin', name: '迅', link: '/jin/jin_jinzouk'},
    { category: 'jin', name: '甚', link: '/jin/jin_hanahadashii'},
    { category: 'jin', name: '妊', link: '/jin/jin_ninpu'},
    { category: 'jin', name: '仁', link: '/jin/jin_jingi'},
    { category: 'jin', name: '神', link: '/jin/jin_shintou'},
    { category: 'jin', name: '塵', link: '/jin/jin_gomi'},
    { category: 'jin', name: '刃', link: '/jin/jin_yaiba'},
   

    // JOU
    { category: 'jou', name: '上', link: '/jou/jou_jouzu'},
    { category: 'jou', name: '場', link: '/jou/jou_senjou'},
    { category: 'jou', name: '乗', link: '/jou/jou_noru'},
    { category: 'jou', name: '静', link: '/jou/jou_shizuka'},
    { category: 'jou', name: '定', link: '/jou/jou_kanjou'},
    { category: 'jou', name: '成', link: '/jou/jou_naru'},
    { category: 'jou', name: '盛', link: '/jou/jou_sakan'},
    { category: 'jou', name: '常', link: '/jou/jou_joutai'},
    { category: 'jou', name: '情', link: '/jou/jou_kanjou'},
    { category: 'jou', name: '城', link: '/jou/jou_shiro'},
    { category: 'jou', name: '状', link: '/jou/jou_joukyou'},
    { category: 'jou', name: '丈', link: '/jou/jou_daijoubu'},
   

    // KA
    { category: 'ka', name: '日', link: '/ka/ka_kyou'},
    { category: 'ka', name: '下', link: '/ka/ka_shita'},
    { category: 'ka', name: '花', link: '/ka/ka_hana'},
    { category: 'ka', name: '化', link: '/ka/ka_henka'},
    { category: 'ka', name: '和', link: '/ka/ka_heiwa'},
    { category: 'ka', name: '価', link: '/ka/ka_kachi'},
    { category: 'ka', name: '家', link: '/ka/ka_kazoku'},
    { category: 'ka', name: '過', link: '/ka/ka_sugi'},
    { category: 'ka', name: '甲', link: '/ka/ka_koutetsu'},
    { category: 'ka', name: '仮', link: '/ka/ka_kana'},
    { category: 'ka', name: '加', link: '/ka/ka_sanka'},
    { category: 'ka', name: '歌', link: '/ka/ka_utau'},
    { category: 'ka', name: '荷', link: '/ka/ka_nimotsu'},
    { category: 'ka', name: '苛', link: '/ka/ka_iraira'},
    { category: 'ka', name: '何', link: '/ka/ka_nani'},
    { category: 'ka', name: '可', link: '/ka/ka_kanou'},
    { category: 'ka', name: '偽', link: '/ka/ka_nise'},
    { category: 'ka', name: '火', link: '/ka/ka_kaji'},
    { category: 'ka', name: '伐', link: '/ka/ka_utsu'},
    { category: 'ka', name: '突', link: '/ka/ka_totsuzen'},




    // KAI
    { category: 'kai', name: '改', link: '/kai/kai_kaizen'},
    { category: 'kai', name: '怪', link: '/kai/kai_ayashii'},
    { category: 'kai', name: '会', link: '/kai/kai_au'},
    { category: 'kai', name: '介', link: '/kai/kai_kainyuu'},
    { category: 'kai', name: '海', link: '/kai/kai_umi'},
    { category: 'kai', name: '誨', link: '/kai/kai_oshieru'},
    { category: 'kai', name: '悔', link: '/kai/kai_kuyashii'},
    { category: 'kai', name: '街', link: '/kai/kai_kaidou'},
    { category: 'kai', name: '乖', link: '/kai/kai_kairi'},
    { category: 'kai', name: '解', link: '/kai/kai_seikai'},
    { category: 'kai', name: '快', link: '/kai/kai_kaifuku'},
    { category: 'kai', name: '回', link: '/kai/kai_zenkai'},
    { category: 'kai', name: '廻', link: '/kai/kai_mawaru'},
    { category: 'kai', name: '開', link: '/kai/kai_akeru'},
    { category: 'kai', name: '掛', link: '/kai/kai_kakeru'},
    { category: 'kai', name: '画', link: '/kai/kai_eiga'},
    { category: 'kai', name: '戒', link: '/kai/kai_imashimeru'},
    { category: 'kai', name: '懐', link: '/kai/kai_idaku'},
    { category: 'kai', name: '壊', link: '/kai/kai_yaburu'},
    { category: 'kai', name: '皆', link: '/kai/kai_minna'},
    { category: 'kai', name: '拐', link: '/kai/kai_sarau'},
    { category: 'kai', name: '絵', link: '/kai/kai_kaiga'},
    { category: 'kai', name: '驚', link: '/kai/kai_odoroku'},
    { category: 'kai', name: '亥', link: '/kai/kai_inoshishi'},
    { category: 'kai', name: '詮', link: '/kai/kai_sensaku'},
    { category: 'kai', name: '潰', link: '/kai/kai_tsubusu'},
    { category: 'kai', name: '届', link: '/kai/kai_todoku'},
    


    // KAKU
    { category: 'kaku', name: '覚', link: '/kaku/kaku_genkaku'},
    { category: 'kaku', name: '拡', link: '/kaku/kaku_hirogeru'},
    { category: 'kaku', name: '劃', link: '/kaku/kaku_kakutei'},
    { category: 'kaku', name: '画', link: '/kaku/kaku_egaku'},
    { category: 'kaku', name: '確', link: '/kaku/kaku_kakunin'},
    { category: 'kaku', name: '各', link: '/kaku/kaku_sorezore'},
    { category: 'kaku', name: '客', link: '/kaku/kaku_kyaku'},
    { category: 'kaku', name: '革', link: '/kaku/kaku_kawa'},
    { category: 'kaku', name: '隔', link: '/kaku/kaku_hedateru'},
    { category: 'kaku', name: '郭', link: '/kaku/kaku_kakusei'},
    { category: 'kaku', name: '廓', link: '/kaku/kaku_kakusei'},
    { category: 'kaku', name: '格', link: '/kaku/kaku_seikaku'},
    { category: 'kaku', name: '獲', link: '/kaku/kaku_kakutoku'},
    { category: 'kaku', name: '脚', link: '/kaku/kaku_ashi'},
    { category: 'kaku', name: '攫', link: '/kaku/kaku_sarau'},
    { category: 'kaku', name: '角', link: '/kaku/kaku_shikaku'},
    { category: 'kaku', name: '核', link: '/kaku/kaku_kakushin'},
    { category: 'kaku', name: '掴', link: '/kaku/kaku_tsukamu'},
   


    // KAN
    { category: 'kan', name: '間', link: '/kan/kan_shunkan'},
    { category: 'kan', name: '甘', link: '/kan/kan_amai'},
    { category: 'kan', name: '嵌', link: '/kan/kan_hamaru'},
    { category: 'kan', name: '鼾', link: '/kan/kan_ibiki'},
    { category: 'kan', name: '甲', link: '/kan/kan_koutetsu'},
    { category: 'kan', name: '監', link: '/kan/kan_kantoku'},
    { category: 'kan', name: '環', link: '/kan/kan_kankyou'},
    { category: 'kan', name: '看', link: '/kan/kan_kanban'},
    { category: 'kan', name: '閑', link: '/kan/kan_kansan'},
    { category: 'kan', name: '感', link: '/kan/kan_kandou'},
    { category: 'kan', name: '韓', link: '/kan/kan_kankoku'},
    { category: 'kan', name: '寒', link: '/kan/kan_samui'},
    { category: 'kan', name: '鑑', link: '/kan/kan_kanbetsu'},
    { category: 'kan', name: '換', link: '/kan/kan_henkan'},
    { category: 'kan', name: '関', link: '/kan/kan_kankei'},
    { category: 'kan', name: '観', link: '/kan/kan_chokkan'},
    { category: 'kan', name: '勘', link: '/kan/kan_kanben'},
    { category: 'kan', name: '勧', link: '/kan/kan_susumeru'},
    { category: 'kan', name: '簡', link: '/kan/kan_kantan'},
    { category: 'kan', name: '幹', link: '/kan/kan_kansen'},
    { category: 'kan', name: '管', link: '/kan/kan_hokan'},
    { category: 'kan', name: '翰', link: '/kan/kan_kanboku'},
    { category: 'kan', name: '堪', link: '/kan/kan_kotaeru'},



    // KEI
    { category: 'kei', name: '境', link: '/kei/kei_sakai'},
    { category: 'kei', name: '黥', link: '/kei/kei_irezumi'},
    { category: 'kei', name: '啓', link: '/kei/kei_keihatsu'},
    { category: 'kei', name: '係', link: '/kei/kei_renkei'},
    { category: 'kei', name: '掛', link: '/kei/kei_kakeru'},
    { category: 'kei', name: '警', link: '/kei/kei_keisatsu'},
    { category: 'kei', name: '掲', link: '/kei/kei_kakageru'},
    { category: 'kei', name: '経', link: '/kei/kei_keiken'},
    { category: 'kei', name: '競', link: '/kei/kei_kyousou'},
    { category: 'kei', name: '形', link: '/kei/kei_katachi'},
    { category: 'kei', name: '稽', link: '/kei/kei_kangaeru'},
    { category: 'kei', name: '恵', link: '/kei/kei_megumi'},
    { category: 'kei', name: '兄', link: '/kei/kei_ani'},
    { category: 'kei', name: '携', link: '/kei/kei_tazusaeru'},
    { category: 'kei', name: '繋', link: '/kei/kei_tsunagu'},
    { category: 'kei', name: '傾', link: '/kei/kei_keiyaku'},
    { category: 'kei', name: '彗', link: '/kei/kei_suisei'},
    { category: 'kei', name: '型', link: '/kei/kei_teikei'},


    // KEN
    { category: 'ken', name: '間', link: '/ken/ken_seken'},
    { category: 'ken', name: '顕', link: '/ken/ken_kenzai'},
    { category: 'ken', name: '見', link: '/ken/ken_kenbutsu'},
    { category: 'ken', name: '絹', link: '/ken/ken_kinu'},
    { category: 'ken', name: '懸', link: '/ken/ken_kensai'},
    { category: 'ken', name: '欠', link: '/ken/ken_kinketsu'},
    { category: 'ken', name: '勧', link: '/ken/ken_susumeru'},
    { category: 'ken', name: '険', link: '/ken/ken_hoken'},
    { category: 'ken', name: '献', link: '/ken/ken_bunken'},
    { category: 'ken', name: '謙', link: '/ken/ken_kenson'},
    { category: 'ken', name: '健', link: '/ken/ken_kenjitsu'},
    { category: 'ken', name: '建', link: '/ken/ken_tateru'},
    { category: 'ken', name: '捲', link: '/ken/ken_mekuru'},
    { category: 'ken', name: '遣', link: '/ken/ken_yarareru'},
    { category: 'ken', name: '犬', link: '/ken/ken_inu'},
    { category: 'ken', name: '憲', link: '/ken/ken_kenpou'},
    { category: 'ken', name: '検', link: '/ken/ken_kensa'},
    { category: 'ken', name: '賢', link: '/ken/ken_kashikoi'},
    { category: 'ken', name: '件', link: '/ken/ken_jouken'},
    { category: 'ken', name: '権', link: '/ken/ken_kenryoku'},



    // KI
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},

    // KO
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},

    // KOU
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},

    // KYOU
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},

    // KYUU
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},

    // ROU
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},

    // SA
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},

    // SAI
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},

    // SAN
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},

    // SEI
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},

    // SEKI
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},

    // SEN
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},

    // SETSU
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},

    // SHA
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},

    // SHI
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},

    // SHIN
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},
    
    // SHOU
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},

    // SHU
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},

    // SHUU
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},

    // SO
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},

    // SOU
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},

    // TAI
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},

    // TEI
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},

    // TEN
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},

    // TO
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},

    // TOU
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},

    // YOU
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},

    // YUU
    { category: 'chou', name: '場', link: '/chou/chou_senjou'},
    { category: 'chou', name: '調', link: '/chou/chou_chousha'},
    { category: 'chou', name: '挑', link: '/chou/chou_chousen'},
    { category: 'chou', name: '跳', link: '/chou/chou_chouyaku'},
    { category: 'chou', name: '長', link: '/chou/chou_seichou'},
    { category: 'chou', name: '張', link: '/chou/chou_kinchou'},
    { category: 'chou', name: '彫', link: '/chou/chou_choukoku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'chou', name: '条', link: '/chou/chou_jouken'},
    { category: 'chou', name: '丁', link: '/chou/chou_houchou'},
    { category: 'chou', name: '重', link: '/chou/chou_omoi'},
    { category: 'chou', name: '町', link: '/chou/chou_machi'},
    { category: 'chou', name: '提', link: '/chou/chou_teian'},
    { category: 'chou', name: '聴', link: '/chou/chou_kiku'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},








    { category: 'cars', name: 'BMW' },
    { category: 'colors fruits', name: 'Orange' },
    { category: 'cars', name: 'Volvo' },
    { category: 'colors', name: 'Red' },
    { category: 'cars', name: 'Ford' },
    { category: 'colors', name: 'Blue' },
    { category: 'animals', name: 'Cat' },
    { category: 'animals', name: 'Dog' },
    { category: 'fruits', name: 'Melon' },
    { category: 'fruits animals', name: 'Kiwi' },
    { category: 'fruits', name: 'Banana' }, 
    { category: 'fruits', name: 'Lemon' },
    { category: 'animals', name: 'Cow' },
  ];

  const filteredItems = filter === 'all'
    ? items
    : items.filter(item => item.category.split(' ').includes(filter));

  return (
    <div style={{ position: 'relative', zIndex: 2 }}> {/* Ensure higher z-index */} 
      <div id="myBtnContainer">
        <button className={`btn ${filter === 'bou' ? 'active' : ''}`} onClick={() => filterSelection('bou')}>Bou</button>
        <button className={`btn ${filter === 'bu' ? 'active' : ''}`} onClick={() => filterSelection('bu')}>Bu</button>
        <button className={`btn ${filter === 'chou' ? 'active' : ''}`} onClick={() => filterSelection('chou')}>Chou</button>
        <button className={`btn ${filter === 'e' ? 'active' : ''}`} onClick={() => filterSelection('e')}>E</button>
        <button className={`btn ${filter === 'en' ? 'active' : ''}`} onClick={() => filterSelection('en')}>En</button>
        <button className={`btn ${filter === 'fu' ? 'active' : ''}`} onClick={() => filterSelection('fu')}>Fu</button>
        <button className={`btn ${filter === 'gen' ? 'active' : ''}`} onClick={() => filterSelection('gen')}>Gen</button>
        <button className={`btn ${filter === 'go' ? 'active' : ''}`} onClick={() => filterSelection('go')}>Go</button>
        <button className={`btn ${filter === 'han' ? 'active' : ''}`} onClick={() => filterSelection('han')}>Han</button>
        <button className={`btn ${filter === 'hi' ? 'active' : ''}`} onClick={() => filterSelection('hi')}>Hi</button>
        <button className={`btn ${filter === 'hou' ? 'active' : ''}`} onClick={() => filterSelection('hou')}>Hou</button>
        <button className={`btn ${filter === 'ji' ? 'active' : ''}`} onClick={() => filterSelection('ji')}>Ji</button>
        <button className={`btn ${filter === 'jin' ? 'active' : ''}`} onClick={() => filterSelection('jin')}>Jin</button>
        <button className={`btn ${filter === 'jou' ? 'active' : ''}`} onClick={() => filterSelection('jou')}>Jou</button>
        <button className={`btn ${filter === 'ka' ? 'active' : ''}`} onClick={() => filterSelection('ka')}>Ka</button>
        <button className={`btn ${filter === 'kai' ? 'active' : ''}`} onClick={() => filterSelection('kai')}>Kai</button>
        <button className={`btn ${filter === 'kaku' ? 'active' : ''}`} onClick={() => filterSelection('kaku')}>Kaku</button>
        <button className={`btn ${filter === 'kan' ? 'active' : ''}`} onClick={() => filterSelection('kan')}>Kan</button>
        <button className={`btn ${filter === 'kei' ? 'active' : ''}`} onClick={() => filterSelection('kei')}>Kei</button>
        <button className={`btn ${filter === 'ken' ? 'active' : ''}`} onClick={() => filterSelection('ken')}>Ken</button>
        <button className={`btn ${filter === 'ki' ? 'active' : ''}`} onClick={() => filterSelection('ki')}>Ki</button>
        <button className={`btn ${filter === 'ko' ? 'active' : ''}`} onClick={() => filterSelection('ko')}>Ko</button>
        <button className={`btn ${filter === 'kou' ? 'active' : ''}`} onClick={() => filterSelection('kou')}>Kou</button>
        <button className={`btn ${filter === 'kyou' ? 'active' : ''}`} onClick={() => filterSelection('kyou')}>Kyou</button>
        <button className={`btn ${filter === 'kyuu' ? 'active' : ''}`} onClick={() => filterSelection('kyuu')}>Kyuu</button>
        <button className={`btn ${filter === 'rou' ? 'active' : ''}`} onClick={() => filterSelection('rou')}>Rou</button>
        <button className={`btn ${filter === 'sa' ? 'active' : ''}`} onClick={() => filterSelection('sa')}>Sa</button>
        <button className={`btn ${filter === 'sai' ? 'active' : ''}`} onClick={() => filterSelection('sai')}>Sai</button>
        <button className={`btn ${filter === 'san' ? 'active' : ''}`} onClick={() => filterSelection('san')}>San</button>
        <button className={`btn ${filter === 'sei' ? 'active' : ''}`} onClick={() => filterSelection('sei')}>Sei</button>
        <button className={`btn ${filter === 'seki' ? 'active' : ''}`} onClick={() => filterSelection('seki')}>Seki</button>
        <button className={`btn ${filter === 'sen' ? 'active' : ''}`} onClick={() => filterSelection('sen')}>Sen</button>
        <button className={`btn ${filter === 'setsu' ? 'active' : ''}`} onClick={() => filterSelection('setsu')}>Setsu</button>
        <button className={`btn ${filter === 'sha' ? 'active' : ''}`} onClick={() => filterSelection('sha')}>Sha</button>
        <button className={`btn ${filter === 'shi' ? 'active' : ''}`} onClick={() => filterSelection('shi')}>Shi</button>
        <button className={`btn ${filter === 'shin' ? 'active' : ''}`} onClick={() => filterSelection('shin')}>Shin</button>
        <button className={`btn ${filter === 'shou' ? 'active' : ''}`} onClick={() => filterSelection('shou')}>Shou</button>
        <button className={`btn ${filter === 'shu' ? 'active' : ''}`} onClick={() => filterSelection('shu')}>Shu</button>
        <button className={`btn ${filter === 'shuu' ? 'active' : ''}`} onClick={() => filterSelection('shuu')}>Shuu</button>
        <button className={`btn ${filter === 'so' ? 'active' : ''}`} onClick={() => filterSelection('so')}>So</button>
        <button className={`btn ${filter === 'sou' ? 'active' : ''}`} onClick={() => filterSelection('sou')}>Sou</button>
        <button className={`btn ${filter === 'tai' ? 'active' : ''}`} onClick={() => filterSelection('tai')}>Tai</button>
        <button className={`btn ${filter === 'tei' ? 'active' : ''}`} onClick={() => filterSelection('tei')}>Tei</button>
        <button className={`btn ${filter === 'ten' ? 'active' : ''}`} onClick={() => filterSelection('ten')}>Ten</button>
        <button className={`btn ${filter === 'to' ? 'active' : ''}`} onClick={() => filterSelection('to')}>To</button>
        <button className={`btn ${filter === 'tou' ? 'active' : ''}`} onClick={() => filterSelection('tou')}>Tou</button>
        <button className={`btn ${filter === 'you' ? 'active' : ''}`} onClick={() => filterSelection('you')}>You</button>
        <button className={`btn ${filter === 'yuu' ? 'active' : ''}`} onClick={() => filterSelection('yuu')}>Yuu</button>


        
        {/* <button className={`btn ${filter === 'animals' ? 'active' : ''}`} onClick={() => filterSelection('animals')}>Animals</button>
        <button className={`btn ${filter === 'fruits' ? 'active' : ''}`} onClick={() => filterSelection('fruits')}>Fruits</button>
        <button className={`btn ${filter === 'colors' ? 'active' : ''}`} onClick={() => filterSelection('colors')}>Colors</button> */}
      </div>

      <div className="container">
        {items.map((item, index) => (
          <div key={index} className={`filterDiv ${item.category} ${filter === 'all' || item.category.split(' ').includes(filter) ? 'show' : ''}`}>
            <Link to={item.link} className="item-link">{item.name}</Link>
            </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
