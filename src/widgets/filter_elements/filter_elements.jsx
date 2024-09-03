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
    { category: 'jin', name: '迅', link: '/jin/jin_jinzou'},
    { category: 'jin', name: '甚', link: '/jin/jin_hanahadashii'},
    { category: 'jin', name: '妊', link: '/jin/jin_ninpu'},
    { category: 'jin', name: '仁', link: '/jin/jin_jingi'},
    { category: 'jin', name: '神', link: '/jin/jin_jinja'},
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
    { category: 'kei', name: '継', link: '/kei/kei_teikei'},


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
    { category: 'ki', name: '気', link: '/ki/ki_kibun'},
    { category: 'ki', name: '器', link: '/ki/ki_buki'},
    { category: 'ki', name: '来', link: '/ki/ki_kuru'},
    { category: 'ki', name: '棄', link: '/ki/ki_houki'},
    { category: 'ki', name: '起', link: '/ki/ki_okiru'},
    { category: 'ki', name: '記', link: '/ki/ki_kioku'},
    { category: 'ki', name: '紀', link: '/ki/ki_kiritsu'},
    { category: 'ki', name: '期', link: '/ki/ki_jiki'},
    { category: 'ki', name: '機', link: '/ki/ki_kikai'},
    { category: 'ki', name: '木', link: '/ki/ki_moku'},
    { category: 'ki', name: '企', link: '/ki/ki_kigyou'},   
    { category: 'ki', name: '規', link: '/ki/ki_kisei'},
    { category: 'ki', name: '奇', link: '/ki/ki_kirei'},
    { category: 'ki', name: '基', link: '/ki/ki_kihon'},
    { category: 'ki', name: '虫', link: '/ki/ki_mushi'},
    { category: 'ki', name: '黄', link: '/ki/ki_kiiroi'},
    { category: 'ki', name: '輝', link: '/ki/ki_kagayaki'},
    { category: 'ki', name: '其', link: '/ki/ki_sore'},
    { category: 'ki', name: '寄', link: '/ki/ki_yoseru'},
    


    // KO
    { category: 'ko', name: '子', link: '/ko/ko_kodomo'},
    { category: 'ko', name: '固', link: '/ko/ko_katai'},
    { category: 'ko', name: '小', link: '/ko/ko_chiisai'},
    { category: 'ko', name: '古', link: '/ko/ko_furui'},
    { category: 'ko', name: '木', link: '/ko/ko_konoha'},
    { category: 'ko', name: '故', link: '/ko/ko_furusato'},
    { category: 'ko', name: '仔', link: '/ko/ko_koinu'},
    { category: 'ko', name: '庫', link: '/ko/ko_chozouko'},
   


    // KOU
    { category: 'kou', name: '高', link: '/kou/kou_takai'},
    { category: 'kou', name: '狭', link: '/kou/kou_semai'},
    { category: 'kou', name: '公', link: '/kou/kou_kouan'},
    { category: 'kou', name: '広', link: '/kou/kou_hiroi'},
    { category: 'kou', name: '宏', link: '/kou/kou_koudai'},
    { category: 'kou', name: '拡', link: '/kou/kou_hirogeru'},
    { category: 'kou', name: '鉱', link: '/kou/kou_kougyou'},
    { category: 'kou', name: '弘', link: '/kou/kou_kouhou'},
    { category: 'kou', name: '好', link: '/kou/kou_suki'},
    { category: 'kou', name: '行', link: '/kou/kou_iku'},
    { category: 'kou', name: '続', link: '/kou/kou_tsuduku'},
    { category: 'kou', name: '嚮', link: '/kou/kou_kyoudou'},
    { category: 'kou', name: '甲', link: '/kou/kou_kabuto'},
    { category: 'kou', name: '構', link: '/kou/kou_kousei '},
    { category: 'kou', name: '講', link: '/kou/kou_kougi'},
    { category: 'kou', name: '交', link: '/kou/kou_koutsuu'},
    { category: 'kou', name: '校', link: '/kou/kou_gakkou'},
    { category: 'kou', name: '絞', link: '/kou/kou_shiboru'},
    { category: 'kou', name: '後', link: '/kou/kou_koukai'},
    { category: 'kou', name: '航', link: '/kou/kou_koukuu'},
    { category: 'kou', name: '厚', link: '/kou/kou_koui'},
    { category: 'kou', name: '光', link: '/kou/kou_hikari'},
    { category: 'kou', name: '口', link: '/kou/kou_kuchi'},
    { category: 'kou', name: '更', link: '/kou/kou_sarani'},
    { category: 'kou', name: '鋼', link: '/kou/kou_koutetsu'},
    { category: 'kou', name: '耕', link: '/kou/kou_kousaku'},
    { category: 'kou', name: '格', link: '/kou/kou_kakkoi'},
    { category: 'kou', name: '荒', link: '/kou/kou_araarashii'},
    { category: 'kou', name: '淵', link: '/kou/kou_ensou'},
    { category: 'kou', name: '功', link: '/kou/kou_kouseki'},
    { category: 'kou', name: '工', link: '/kou/kou_koujou'},
    { category: 'kou', name: '拘', link: '/kou/kou_kousoku'},
    { category: 'kou', name: '確', link: '/kou/kou_tashika'},
    { category: 'kou', name: '洪', link: '/kou/kou_kouzui'},
    { category: 'kou', name: '稿', link: '/kou/kou_kouryou'},
    { category: 'kou', name: '向', link: '/kou/kou_mukou'},
    { category: 'kou', name: '興', link: '/kou/kou_kyoumi'},
    { category: 'kou', name: '恒', link: '/kou/kou_koukyuu'},
    { category: 'kou', name: '黄', link: '/kou/kou_kogane'},
    { category: 'kou', name: '幸', link: '/kou/kou_koufuku'},
    { category: 'kou', name: '抗', link: '/kou/kou_kougi'},
    { category: 'kou', name: '効', link: '/kou/kou_kikime'},
    { category: 'kou', name: '考', link: '/kou/kou_kougyou'},
    { category: 'kou', name: '神', link: '/kou/kou_shinpi'},
    { category: 'kou', name: '冦', link: '/kou/kou_raikou'},
    { category: 'kou', name: '攻', link: '/kou/kou_kougeki'},
    { category: 'kou', name: '港', link: '/kou/kou_minato'},
    { category: 'kou', name: '耗', link: '/kou/kou_shoumou'},
    { category: 'kou', name: '降', link: '/kou/kou_kousan'},



    // KYOU
    { category: 'kyou', name: '胸', link: '/kyou/kyou_mune'},
    { category: 'kyou', name: '狭', link: '/kyou/kyou_hazama'},
    { category: 'kyou', name: '強', link: '/kyou/kyou_kyouretsu'},
    { category: 'kyou', name: '狂', link: '/kyou/kyou_kyouran'},
    { category: 'kyou', name: '教', link: '/kyou/kyou_kyoukasho'},
    { category: 'kyou', name: '凶', link: '/kyou/kyou_kyouki'},
    { category: 'kyou', name: '兇', link: '/kyou/kyou_kyouaku'},
    { category: 'kyou', name: '疆', link: '/kyou/kyou_kyouiki'},
    { category: 'kyou', name: '境', link: '/kyou/kyou_kyoukai'},
    { category: 'kyou', name: '嚮', link: '/kyou/kyou_kyoudou'},
    { category: 'kyou', name: '経', link: '/kyou/kyou_keizai'},
    { category: 'kyou', name: '窮', link: '/kyou/kyou_kyuukutsu'},
    { category: 'kyou', name: '共', link: '/kyou/kyou_kyouzon'},
    { category: 'kyou', name: '供', link: '/kyou/kyou_sonaeru'},
    { category: 'kyou', name: '校', link: '/kyou/kyou_koutei'},
    { category: 'kyou', name: '協', link: '/kyou/kyou_kyouryoku'},
    { category: 'kyou', name: '競', link: '/kyou/kyou_kyougi'},
    { category: 'kyou', name: '躬', link: '/kyou/kyou_kyuukou'},
    { category: 'kyou', name: '興', link: '/kyou/kyou_kyouzameru'},
    { category: 'kyou', name: '恐', link: '/kyou/kyou_kyoufu'},
    { category: 'kyou', name: '兄', link: '/kyou/kyou_kyoudai'},
   

    // KYUU
    { category: 'kyuu', name: '球', link: '/kyuu/kyuu_kyuukei'},
    { category: 'kyuu', name: '求', link: '/kyuu/kyuu_motomeru'},
    { category: 'kyuu', name: '朽', link: '/kyuu/kyuu_kusaru'},
    { category: 'kyuu', name: '久', link: '/kyuu/kyuu_hisabisa'},
    { category: 'kyuu', name: '究', link: '/kyuu/kyuu_kyuumei'},
    { category: 'kyuu', name: '窮', link: '/kyuu/kyuu_kiwameru'},
    { category: 'kyuu', name: '旧', link: '/kyuu/kyuu_kyuuseido'},
    { category: 'kyuu', name: '級', link: '/kyuu/kyuu_doukyuu'},
    { category: 'kyuu', name: '吸', link: '/kyuu/kyuu_suikomu'},
    { category: 'kyuu', name: '休', link: '/kyuu/kyuu_kyuugyou'},
    { category: 'kyuu', name: '急', link: '/kyuu/kyuu_kyuusoku'},
    { category: 'kyuu', name: '泣', link: '/kyuu/kyuu_naku'},
    { category: 'kyuu', name: '給', link: '/kyuu/kyuu_kyuuyo'},
    { category: 'kyuu', name: '躬', link: '/kyuu/kyuu_kyuukou'},
    
    

    // ROU
    { category: 'rou', name: '労', link: '/rou/rou_roudou'},
    { category: 'rou', name: '廊', link: '/rou/rou_rouka'},
    { category: 'rou', name: '漏', link: '/rou/rou_morasu'},
    { category: 'rou', name: '老', link: '/rou/rou_fukeru'},
    { category: 'rou', name: '狼', link: '/rou/rou_noroshi'},
    { category: 'rou', name: '陋', link: '/rou/rou_roukou'},
    { category: 'rou', name: '露', link: '/rou/rou_roken'},
    { category: 'rou', name: '滝', link: '/rou/rou_takigawa'},
    { category: 'rou', name: '瀧', link: '/rou/rou_taki'},
    { category: 'rou', name: '籠', link: '/rou/rou_roukyuu'},
    

    
    // SA
    { category: 'sa', name: '作', link: '/sa/sa_sakuhin'},
    { category: 'sa', name: '乍', link: '/sa/sa_nagara'},
    { category: 'sa', name: '差', link: '/sa/sa_sabetsu'},
    { category: 'sa', name: '做', link: '/sa/sa_nasu'},
    { category: 'sa', name: '沙', link: '/sa/sa_sabaku'},
    { category: 'sa', name: '砂', link: '/sa/sa_suna'},
    { category: 'sa', name: '佐', link: '/sa/sa_taisa'},
    { category: 'sa', name: '詐', link: '/sa/sa_sagi'},
    { category: 'sa', name: '再', link: '/sa/sa_saisei'},
    { category: 'sa', name: '些', link: '/sa/sa_sasai'},     
    { category: 'sa', name: '査', link: '/sa/sa_chousa'},
   


    // SAI
    { category: 'sai', name: '裁', link: '/sai/sai_saiban'},
    { category: 'sai', name: '細', link: '/sai/sai_hosoi'},
    { category: 'sai', name: '砦', link: '/sai/sai_jousai'},
    { category: 'sai', name: '債', link: '/sai/sai_saimu'},
    { category: 'sai', name: '載', link: '/sai/sai_keisai'},
    { category: 'sai', name: '妻', link: '/sai/sai_tsuma'},
    { category: 'sai', name: '切', link: '/sai/sai_kippu'},
    { category: 'sai', name: '再', link: '/sai/sai_saisei'},
    { category: 'sai', name: '最', link: '/sai/sai_saigo'},
    { category: 'sai', name: '斎', link: '/sai/sai_saibashi'},
    { category: 'sai', name: '西', link: '/sai/sai_nishi'},
    { category: 'sai', name: '哉', link: '/sai/sai_kana'},
    { category: 'sai', name: '災', link: '/sai/sai_saiyaku'},
    { category: 'sai', name: '塞', link: '/sai/sai_fusagaru'},
    { category: 'sai', name: '際', link: '/sai/sai_saikai'},
    { category: 'sai', name: '殺', link: '/sai/sai_korosu'},
    { category: 'sai', name: '才', link: '/sai/sai_sainou'},
    { category: 'sai', name: '菜', link: '/sai/sai_yasai'},
    { category: 'sai', name: '歳', link: '/sai/sai_juusai'},
    { category: 'sai', name: '財', link: '/sai/sai_saifu'},

    // SAN
    { category: 'san', name: '操', link: '/san/san_soujuu'},
    { category: 'san', name: '尽', link: '/san/san_jinryoku'},
    { category: 'san', name: '酸', link: '/san/san_sanmi'},
    { category: 'san', name: '散', link: '/san/san_sanpo'},
    { category: 'san', name: '参', link: '/san/san_sanka'},
    { category: 'san', name: '産', link: '/san/san_sangyou'},
    { category: 'san', name: '蚕', link: '/san/san_sanshi'},
    { category: 'san', name: '算', link: '/san/san_sansuu'},
    { category: 'san', name: '残', link: '/san/san_nokoru'},
    { category: 'san', name: '惨', link: '/san/san_sangeki'},
    { category: 'san', name: '燦', link: '/san/san_sanzen'},
    { category: 'san', name: '撰', link: '/san/san_erabu'},
    { category: 'san', name: '山', link: '/san/san_yama'},
    { category: 'san', name: '様', link: '/san/san_samazama'},
    // { category: 'chou', name: '剳', link: '/chou/chou_boushi'},



    // SEI
    { category: 'sei', name: '清', link: '/sei/sei_seisho'},
    { category: 'sei', name: '請', link: '/sei/sei_ukeau'},
    { category: 'sei', name: '情', link: '/sei/sei_jouhou'},
    { category: 'sei', name: '青', link: '/sei/sei_aoi'},
    { category: 'sei', name: '晴', link: '/sei/sei_hareru'},
    { category: 'sei', name: '生', link: '/sei/sei_ikiru'},
    { category: 'sei', name: '性', link: '/sei/sei_seikatsu'},
    { category: 'sei', name: '勢', link: '/sei/sei_seiryoku'},
    { category: 'sei', name: '世', link: '/sei/sei_sekai'},
    { category: 'sei', name: '静', link: '/sei/sei_shizuka'},
    { category: 'sei', name: '成', link: '/sei/sei_seikou'},
    { category: 'sei', name: '盛', link: '/sei/sei_morikomu'},
    { category: 'sei', name: '背', link: '/sei/sei_senobi'},
    { category: 'sei', name: '省', link: '/sei/sei_shouryaku'},
    { category: 'sei', name: '精', link: '/sei/sei_seikon'},
    { category: 'sei', name: '歳', link: '/sei/sei_sainyuu'},
    { category: 'sei', name: '西', link: '/sei/sei_seiyou'},
    { category: 'sei', name: '製', link: '/sei/sei_seihin'},
    { category: 'sei', name: '正', link: '/sei/sei_tadashii'},
    { category: 'sei', name: '醒', link: '/sei/sei_sameru'},
    { category: 'sei', name: '井', link: '/sei/sei_idomizu'},
    { category: 'sei', name: '制', link: '/sei/sei_seisaku'},
    { category: 'sei', name: '聖', link: '/sei/sei_seisho'},
    { category: 'sei', name: '政', link: '/sei/sei_seifu'},
    { category: 'sei', name: '彗', link: '/sei/sei_suisei'},
    { category: 'sei', name: '声', link: '/sei/sei_seien'},
    // { category: 'sei', name: '睛', link: '/sei/sei_seimi?'},
    
    

    // SEKI
    { category: 'seki', name: '積', link: '/seki/seki_tsumikomu'},
    { category: 'seki', name: '席', link: '/seki/seki_sekken'},
    { category: 'seki', name: '舎', link: '/seki/seki_gakusha'},
    { category: 'seki', name: '関', link: '/seki/seki_kanshin'},
    { category: 'seki', name: '籍', link: '/seki/seki_koseki'},
    { category: 'seki', name: '績', link: '/seki/seki_seiseki'},
    { category: 'seki', name: '蓆', link: '/seki/seki_mushiro'},
    { category: 'seki', name: '筵', link: '/seki/seki_uwamushiro'},
    { category: 'seki', name: '斥', link: '/seki/seki_shirizoku'},
    { category: 'seki', name: '跡', link: '/seki/seki_atokata'},



    // SEN
    { category: 'sen', name: '戦', link: '/sen/sen_sensou'},
    { category: 'sen', name: '浅', link: '/sen/sen_senken'},
    { category: 'sen', name: '閃', link: '/sen/sen_hirameki'},
    { category: 'sen', name: '籤', link: '/sen/sen_kujibiki'},
    { category: 'sen', name: '膳', link: '/sen/sen_zenbu'},
    { category: 'sen', name: '先', link: '/sen/sen_sensei'},
    { category: 'sen', name: '洗', link: '/sen/sen_arau'},
    { category: 'sen', name: '染', link: '/sen/sen_someru'},
    { category: 'sen', name: '剪', link: '/sen/sen_hasami'},
    { category: 'sen', name: '選', link: '/sen/sen_sentaku'},
    { category: 'sen', name: '撰', link: '/sen/sen_zenja'},
    { category: 'sen', name: '線', link: '/sen/sen_kyokusen'},
    { category: 'sen', name: '詮', link: '/sen/sen_sengi'},
    { category: 'sen', name: '揃', link: '/sen/sen_sorou'},
    { category: 'sen', name: '穿', link: '/sen/sen_haku'},
    { category: 'sen', name: '泉', link: '/sen/sen_izumi'},
    { category: 'sen', name: '栓', link: '/sen/sen_tomosen'},
    { category: 'sen', name: '禅', link: '/sen/sen_zenji'},
    { category: 'sen', name: '専', link: '/sen/sen_senmon'},
    { category: 'sen', name: '占', link: '/sen/sen_uranai'},
    { category: 'sen', name: '船', link: '/sen/sen_fune'},
    { category: 'sen', name: '旋', link: '/sen/sen_senpuu'},
    { category: 'sen', name: '山', link: '/sen/sen_yama'},
    { category: 'sen', name: '仙', link: '/sen/sen_sennin'},
    { category: 'sen', name: '殲', link: '/sen/sen_senmetsu'},
    { category: 'sen', name: '羨', link: '/sen/sen_urayamashii'},
    

    // SETSU
    { category: 'setsu', name: '説', link: '/setsu/setsu_setsumei'},
    { category: 'setsu', name: '設', link: '/setsu/setsu_sekkei'},
    { category: 'setsu', name: '切', link: '/setsu/setsu_serikae'},
    { category: 'setsu', name: '殺', link: '/setsu/setsu_korosu'},
    { category: 'setsu', name: '鱈', link: '/setsu/setsu_tarako'},
    { category: 'setsu', name: '洩', link: '/setsu/setsu_moreru'},
    { category: 'setsu', name: '節', link: '/setsu/setsu_sekku'},
    { category: 'setsu', name: '剳', link: '/chou/chou_irezumi'},
    { category: 'setsu', name: '接', link: '/setsu/setsu_sesshoku'},
    { category: 'setsu', name: '褻', link: '/setsu/setsu_waisetsu'},
    { category: 'setsu', name: '雪', link: '/setsu/setsu_fuyu'},



    // SHA
    { category: 'sha', name: '謝', link: '/sha/sha_ayamaru'},
    { category: 'sha', name: '舎', link: '/sha/sha_ryousha'},
    { category: 'sha', name: '射', link: '/sha/sha_hassha'},
    { category: 'sha', name: '車', link: '/sha/sha_jidousha'},
    { category: 'sha', name: '者', link: '/sha/sha_gakusha'},
    { category: 'sha', name: '這', link: '/sha/sha_hau'},
    { category: 'sha', name: '写', link: '/sha/sha_shashin'},
    { category: 'sha', name: '砂', link: '/sha/sha_suna'},
    { category: 'sha', name: '赦', link: '/sha/sha_yousha'},
    { category: 'sha', name: '些', link: '/sha/sha_sasai'},
    { category: 'sha', name: '社', link: '/sha/sha_kaisha'},
    { category: 'sha', name: '予', link: '/sha/sha_yotei'},
    { category: 'sha', name: '捨', link: '/sha/sha_suteru'},



    // SHI
    { category: 'shi', name: '視', link: '/shi/shi_shikai'},
    { category: 'shi', name: '仕', link: '/shi/shi_shimau'},
    { category: 'shi', name: '士', link: '/shi/shi_bushi'},
    { category: 'shi', name: '示', link: '/shi/shi_shimesu'},
    { category: 'shi', name: '自', link: '/shi/shi_jishin'},
    { category: 'shi', name: '思', link: '/shi/shi_omou'},
    { category: 'shi', name: '死', link: '/shi/shi_shikei'},
    { category: 'shi', name: '歯', link: '/shi/shi_ha'},
    { category: 'shi', name: '址', link: '/shi/shi_kyuushi'},
    { category: 'shi', name: '趾', link: '/shi/shi_sokushi'},
    { category: 'shi', name: '祠', link: '/shi/shi_hokora'},
    { category: 'shi', name: '矢', link: '/shi/shi_yahane'},
    { category: 'shi', name: '熾', link: '/shi/shi_okosu'},   
    { category: 'shi', name: '次', link: '/shi/shi_tsugi'},
    { category: 'shi', name: '紙', link: '/shi/shi_kami'},
    { category: 'shi', name: '刺', link: '/shi/shi_sasu'},
    { category: 'shi', name: '指', link: '/shi/shi_yubi'},
    { category: 'shi', name: '此', link: '/shi/shi_kono'},
    { category: 'shi', name: '志', link: '/shi/shi_ishi'},
    { category: 'shi', name: '子', link: '/shi/shi_kodomo'},
    { category: 'shi', name: '使', link: '/shi/shi_tsukau'},
    { category: 'shi', name: '史', link: '/shi/shi_rekishi'},
    { category: 'shi', name: '資 ', link: '/shi/shi_shikaku'},
    { category: 'shi', name: '至', link: '/shi/shi_itaru'},
    { category: 'shi', name: '姿', link: '/shi/shi_sugata'},
    { category: 'shi', name: '肢', link: '/shi/shi_shishi'},
    { category: 'shi', name: '枝', link: '/shi/shi_eda'},
    { category: 'shi', name: '屍', link: '/shi/shi_shikabane'},
    { category: 'shi', name: '芝', link: '/shi/shi_shiba'},
    { category: 'shi', name: '支', link: '/shi/shi_shien'},
    { category: 'shi', name: '市', link: '/shi/shi_shimin'},
    { category: 'shi', name: '仔', link: '/shi/shi_koinu'},
    { category: 'shi', name: '私', link: '/shi/shi_watashi'},
    { category: 'shi', name: '漬', link: '/shi/shi_tsukaru'},
    { category: 'shi', name: '詩', link: '/shi/shi_shishuu'},
    { category: 'shi', name: '始', link: '/shi/shi_hajimeru'},
    { category: 'shi', name: '資', link: '/shi/shi_shigen'},
    



   

    // SHIN
    { category: 'shin', name: '深', link: '/shin/shin_fukai'},
    { category: 'shin', name: '清', link: '/shin/shin_kiyoi'},
    { category: 'shin', name: '新', link: '/shin/shin_shinsen'},
    { category: 'shin', name: '伸', link: '/shin/shin_nobasu'},
    { category: 'shin', name: '心', link: '/shin/shin_kokoro'},
    { category: 'shin', name: '審', link: '/shin/shin_shinsa'},
    { category: 'shin', name: '参', link: '/shin/shin_mairu'},
    { category: 'shin', name: '慎', link: '/shin/shin_shinchou'},
    { category: 'shin', name: '振', link: '/shin/shin_furu'},
    { category: 'shin', name: '震', link: '/shin/shin_jishin'},
    { category: 'shin', name: '辛', link: '/shin/shin_karai'},
    { category: 'shin', name: '侵', link: '/shin/shin_okasu'},
    { category: 'shin', name: '真', link: '/shin/shin_shinjitsu'},
    { category: 'shin', name: '信', link: '/shin/shin_makoto'},
    { category: 'shin', name: '神', link: '/shin/shin_kamisama'},
    { category: 'shin', name: '芯', link: '/shin/shin_mashin'},
    { category: 'shin', name: '鍼', link: '/shin/shin_hari'},
    { category: 'shin', name: '臣', link: '/shin/shin_shinpuku'},
    { category: 'shin', name: '請', link: '/shin/shin_ukeru'},
    { category: 'shin', name: '身', link: '/shin/shin_shinchou'},

    

    // SHOU
    { category: 'shou', name: '上', link: '/shou/shou_ue'},
    { category: 'shou', name: '性', link: '/shou/shou_seikaku'},
    { category: 'shou', name: '証', link: '/shou/shou_akashi'},
    { category: 'shou', name: '扱', link: '/shou/shou_atsukai'},
    { category: 'shou', name: '乗', link: '/shou/shou_noseru'},
    { category: 'shou', name: '傷', link: '/shou/shou_kizu'},
    { category: 'shou', name: '誦', link: '/shou/shou_juusu'},
    { category: 'shou', name: '承', link: '/shou/shou_shounin'},
    { category: 'shou', name: '小', link: '/shou/shou_jouken'},
    { category: 'shou', name: '従', link: '/shou/shou_shitagau'},
    { category: 'shou', name: '掌', link: '/shou/shou_tenohira'},
    { category: 'shou', name: '生', link: '/shou/shou_shouzuru'},
    { category: 'shou', name: '装', link: '/shou/shou_yosoi'},
    { category: 'shou', name: '青', link: '/shou/shou_aoi'},
    { category: 'shou', name: '精', link: '/shou/shou_seizei'},
    { category: 'shou', name: '請', link: '/shou/shou_ukeru'},
    { category: 'shou', name: '匠', link: '/shou/shou_takumi'},
    { category: 'shou', name: '称', link: '/shou/shou_shousuru'},
    { category: 'shou', name: '象', link: '/shou/shou_zou'},
    { category: 'shou', name: '勝', link: '/shou/shou_kachi'},
    { category: 'shou', name: '正', link: '/shou/shou_seigi'},
    { category: 'shou', name: '将', link: '/shou/shou_shougun'},
    { category: 'shou', name: '笑', link: '/shou/shou_warau'},
    { category: 'shou', name: '消', link: '/shou/shou_kieru'},
    { category: 'shou', name: '章', link: '/shou/shou_shouku'},
    { category: 'shou', name: '井', link: '/shou/shou_ido'},
    { category: 'shou', name: '詳', link: '/shou/shou_kuwashii'},
    { category: 'shou', name: '聖', link: '/shou/shou_seisho'},
    { category: 'shou', name: '創', link: '/shou/shou_sousetsu'},
    { category: 'shou', name: '省', link: '/shou/shou_habuku'},
    { category: 'shou', name: '唱', link: '/shou/shou_tonaeru'},
    { category: 'shou', name: '相', link: '/shou/shou_fusawashii'},
    { category: 'shou', name: '障', link: '/shou/shou_sawaru'},
    { category: 'shou', name: '様', link: '/shou/shou_you'},
    { category: 'shou', name: '樣*', link: '/shou/shou_shiyou'},
    { category: 'shou', name: '政', link: '/shou/shou_matsurigoto'},
    { category: 'shou', name: '接', link: '/shou/shou_sessuru'},
    { category: 'shou', name: '昭', link: '/shou/shou_shouwa'},
    { category: 'shou', name: '紹', link: '/shou/shou_shoukai'},
    { category: 'shou', name: '照', link: '/shou/shou_terasu'},
    { category: 'shou', name: '霄', link: '/shou/shou_shoukan'},
    { category: 'shou', name: '症', link: '/shou/shou_shoujou'},
    { category: 'shou', name: '哨', link: '/shou/shou_shouhei'},
    { category: 'shou', name: '賞', link: '/shou/shou_shoukin'},
    { category: 'shou', name: '償', link: '/shou/shou_tsugunau'},
    { category: 'shou', name: '宵', link: '/shou/shou_yoi'},
    { category: 'shou', name: '声', link: '/shou/shou_koe'},
    { category: 'shou', name: '睛', link: '/shou/shou_hitomi'},
    { category: 'shou', name: '少', link: '/shou/shou_sukoshi'},
    { category: 'shou', name: '商', link: '/shou/shou_shoubai'},
    { category: 'shou', name: '清', link: '/shou/shou_kiyoi'},
    { category: 'shou', name: '裳', link: '/shou/shou_mosuso'},
    { category: 'shou', name: '尚', link: '/shou/shou_nao'},
    






    // SHU
    { category: 'shu', name: '手', link: '/shu/shu_temae'},
    { category: 'shu', name: '数', link: '/shu/shu_kazoeru'},
    { category: 'shu', name: '主', link: '/shu/shu_shujin'},
    { category: 'shu', name: '取', link: '/shu/shu_toru'},
    { category: 'shu', name: '趣', link: '/shu/shu_shumi'},
    { category: 'shu', name: '首', link: '/shu/shu_kubi'},
    { category: 'shu', name: '修', link: '/shu/shu_shuuri'},
    { category: 'shu', name: '種', link: '/shu/shu_shurui'},
    { category: 'shu', name: '酬', link: '/shu/shu_mukui'},
    { category: 'shu', name: '殊', link: '/shu/shu_shuushou'},
    { category: 'shu', name: '衆', link: '/shu/shu_tashuu'},
    { category: 'shu', name: '聚', link: '/shu/shu_juraku'},
    { category: 'shu', name: '捜', link: '/shu/shu_sagasu'},
    { category: 'shu', name: '洵', link: '/shu/shu_junbi'},
    { category: 'shu', name: '輸', link: '/shu/shu_yunyuu'},
    { category: 'shu', name: '最', link: '/shu/shu_saikou'},
    

    // SHUU
    { category: 'shuu', name: '湿', link: '/shuu/shuu_shikki'},
    { category: 'shuu', name: '醜', link: '/shuu/shuu_minikui'},
    { category: 'shuu', name: '輯', link: '/shuu/shuu_shuuroku'},
    { category: 'shuu', name: '集', link: '/shuu/shuu_atsumeru'},
    { category: 'shuu', name: '拾', link: '/shuu/shuu_hirou'},
    { category: 'shuu', name: '主', link: '/shuu/shuu_nushi'},
    { category: 'shuu', name: '執', link: '/shuu/shuu_shuuchaku'},
    { category: 'shuu', name: '収', link: '/shuu/shuu_kyuushuu'},
    { category: 'shuu', name: '修', link: '/shuu/shuu_shuugyou'},
    { category: 'shuu', name: '周', link: '/shuu/shuu_shuui'},
    { category: 'shuu', name: '躊', link: '/shuu/shuu_chuucho'},
    { category: 'shuu', name: '酬', link: '/shuu/shuu_houshuu'},
    { category: 'shuu', name: '州', link: '/shuu/shuu_shuuto'},
    { category: 'shuu', name: '就', link: '/shuu/shuu_tsuite'},
    { category: 'shuu', name: '終', link: '/shuu/shuu_owaru'},
    { category: 'shuu', name: '習', link: '/shuu/shuu_narau'},
    { category: 'shuu', name: '囚', link: '/shuu/shuu_torawareru'},
    { category: 'shuu', name: '蹴', link: '/shuu/shuu_keru'},
    { category: 'shuu', name: '週', link: '/shuu/shuu_shuukan'},
    { category: 'shuu', name: '聚', link: '/shuu/shuu_shuusan'},
    { category: 'shuu', name: '愁', link: '/shuu/shuu_kyoushuu'},
    { category: 'shuu', name: '襲', link: '/shuu/shuu_shuugeki'},
    { category: 'shuu', name: '宗', link: '/shuu/shuu_shuukyou'},
    { category: 'shuu', name: '捜', link: '/shuu/shuu_sousa'},
    { category: 'shuu', name: '什', link: '/shuu/shuu_juumotsu'},
    { category: 'shuu', name: '臭', link: '/shuu/shuu_kusai'},
    { category: 'shuu', name: '衆', link: '/shuu/shuu_shuugu'},
    



    // SO
    { category: 'so', name: '想', link: '/so/so_souzou'},
    { category: 'so', name: '曾', link: '/so/so_katsute'},
    { category: 'so', name: '組', link: '/so/so_kumi'},
    { category: 'so', name: '祖', link: '/so/so_sosen'},
    { category: 'so', name: '粗', link: '/so/so_soshina'},
    { category: 'so', name: '狙', link: '/so/so_nerau'},
    { category: 'so', name: '做', link: '/so/so_nasu'},
    { category: 'so', name: '素', link: '/so/so_sunao'},
    { category: 'so', name: '遡', link: '/so/so_sakugen'},
    { category: 'so', name: '疎', link: '/so/so_sakai'},
    



    // SOU
    { category: 'sou', name: '想', link: '/sou/sou_souzou'},
    { category: 'sou', name: '争', link: '/sou/sou_kyousou'},
    { category: 'sou', name: '世', link: '/sou/sou_seken'},
    { category: 'sou', name: '早', link: '/sou/sou_hayai'},
    { category: 'sou', name: '叢', link: '/sou/sou_kusamura'},
    { category: 'sou', name: '装', link: '/sou/sou_souchi'},
    { category: 'sou', name: '曹', link: '/sou/sou_souchou'},
    { category: 'sou', name: '将', link: '/sou/sou_irezumi'},
    { category: 'sou', name: '曾', link: '/sou/sou_katsute'},
    { category: 'sou', name: '創', link: '/sou/sou_sousetsu'},
    { category: 'sou', name: '相', link: '/sou/sou_aite'},
    { category: 'sou', name: '操', link: '/sou/sou_ayatsuru'},
    { category: 'sou', name: '壮', link: '/sou/sou_souzetsu'},
    { category: 'sou', name: '走', link: '/sou/sou_hashiru'},
    { category: 'sou', name: '躁', link: '/sou/sou_soubyou'},
    { category: 'sou', name: '総', link: '/sou/sou_sougou'},
    { category: 'sou', name: '送', link: '/sou/sou_okuru'},
    { category: 'sou', name: '挿', link: '/sou/sou_sashie'},
    { category: 'sou', name: '双', link: '/sou/sou_futago'},
    { category: 'sou', name: '奏', link: '/sou/sou_sousha'},
    { category: 'sou', name: '宗', link: '/sou/sou_shuukyou'},
    { category: 'sou', name: '僧', link: '/sou/sou_souryo'},
    { category: 'sou', name: '桑', link: '/sou/sou_kuwa'},
    { category: 'sou', name: '遭', link: '/sou/sou_sounan'},
    { category: 'sou', name: '捜', link: '/sou/sou_sousa'},
    { category: 'sou', name: '錚', link: '/sou/sou_sousou'},
    { category: 'sou', name: '層', link: '/sou/sou_chisou'},
    { category: 'sou', name: '滝', link: '/sou/sou_taki'},
    { category: 'sou', name: '瀧', link: '/sou/sou_takigawa'},
    { category: 'sou', name: '藪', link: '/sou/sou_yabu'},



    // TAI
    { category: 'tai', name: '大', link: '/tai/tai_ooki'},
    { category: 'tai', name: '替', link: '/tai/tai_kaeru'},
    { category: 'tai', name: '退', link: '/tai/tai_taishoku'},
    { category: 'tai', name: '退', link: '/tai/tai_kuru'},
    { category: 'tai', name: '梯', link: '/tai/tai_hashigo'},
    { category: 'tai', name: '待', link: '/tai/tai_matsu'},
    { category: 'tai', name: '隊', link: '/tai/tai_butai'},
    { category: 'tai', name: '体', link: '/tai/tai_karada'},
    { category: 'tai', name: '態', link: '/tai/tai_taido'},
    { category: 'tai', name: '諦', link: '/tai/tai_akirameru'},
    { category: 'tai', name: '対', link: '/tai/tai_taiwa'},
    { category: 'tai', name: '代', link: '/tai/tai_daihyou'},
    { category: 'tai', name: '蔕', link: '/tai/tai_heta'},
    { category: 'tai', name: '胎', link: '/tai/tai_taiji'},
    { category: 'tai', name: '躰', link: '/tai/tai_karada'},
    { category: 'tai', name: '戴', link: '/tai/tai_itadaku'},
    { category: 'tai', name: '耐', link: '/tai/tai_taeru'},
    { category: 'tai', name: '泰', link: '/tai/tai_taikoku'},

    // TEI
    { category: 'tei', name: '定', link: '/tei/tei_kettei'},
    { category: 'tei', name: '低', link: '/tei/tei_hikui'},
    { category: 'tei', name: '梯', link: '/tei/tei_teikei'},
    { category: 'tei', name: '廷', link: '/tei/tei_houtei'},
    { category: 'tei', name: '提', link: '/tei/tei_teian'},
    { category: 'tei', name: '諦', link: '/tei/tei_akirameru'},
    { category: 'tei', name: '帝', link: '/tei/tei_koutei'},
    { category: 'tei', name: '聴', link: '/tei/tei_kikoeru'},
    { category: 'tei', name: '体', link: '/tei/tei_tairyoku'},
    { category: 'tei', name: '蔕', link: '/tei/tei_heta'},
    { category: 'tei', name: '躰', link: '/tei/tei_karada'},
    { category: 'tei', name: '程', link: '/tei/tei_teido'},
    { category: 'tei', name: '丁', link: '/tei/tei_teinei'},
    { category: 'tei', name: '叮', link: '/tei/tei_teinei2'},
    { category: 'tei', name: '逓', link: '/tei/tei_teishin'},
    { category: 'tei', name: '底', link: '/tei/tei_souage'},
    { category: 'tei', name: '庭', link: '/tei/tei_niwa'},
    { category: 'tei', name: '綴', link: '/tei/tei_tojikomu'},

    




    // TEN
    { category: 'ten', name: '天', link: '/ten/ten_tenki'},
    { category: 'ten', name: '伝', link: '/ten/ten_tsutaeru'},
    { category: 'ten', name: '転', link: '/ten/ten_korobu'},
    { category: 'ten', name: '点', link: '/ten/ten_shouten'},
    { category: 'ten', name: '典', link: '/ten/ten_tenkei'},
    { category: 'ten', name: '填', link: '/ten/ten_hamaru'},
    { category: 'ten', name: '店', link: '/ten/ten_mise'},
    { category: 'ten', name: '蚕', link: '/ten/ten_kaiko'},
    { category: 'ten', name: '添', link: '/ten/ten_soeru'},
    { category: 'ten', name: '展', link: '/ten/ten_tenkai'},
    { category: 'ten', name: '纏', link: '/ten/ten_matome'},
    { category: 'ten', name: '顛', link: '/ten/ten_tenmatsu'},
    { category: 'ten', name: '殿', link: '/ten/ten_dono'},
  
    



    // TO
    { category: 'to', name: '図', link: '/to/to_chizu'},
    { category: 'to', name: '外', link: '/to/to_soto'},
    { category: 'to', name: '人', link: '/to/to_hito'},
    { category: 'to', name: '頭', link: '/to/to_atama'},
    { category: 'to', name: '賭', link: '/to/to_kakeru'},
    { category: 'to', name: '度', link: '/to/to_ondo'},
    { category: 'to', name: '塗', link: '/to/to_mabusu'},
    { category: 'to', name: '途', link: '/to/to_tochuu'},
    { category: 'to', name: '門', link: '/to/to_mon'},
    { category: 'to', name: '十', link: '/to/to_juu'},
    { category: 'to', name: '渡', link: '/to/to_watasu'},
    
    



    // TOU
    { category: 'tou', name: '灯', link: '/tou/tou_dentou'},
    { category: 'tou', name: '道', link: '/tou/tou_michi'},
    { category: 'tou', name: '党', link: '/tou/tou_touin'},
    { category: 'tou', name: '刀', link: '/tou/tou_katana'},
    { category: 'tou', name: '当', link: '/tou/tou_ataru'},
    { category: 'tou', name: '騰', link: '/tou/tou_touki'},
    { category: 'tou', name: '剳', link: '/tou/tou_irezumi'},
    { category: 'tou', name: '等', link: '/tou/tou_hitoshii'},
    { category: 'tou', name: '統', link: '/tou/tou_touitsu'},
    { category: 'tou', name: '頭', link: '/tou/tou_atama'},
    { category: 'tou', name: '闘', link: '/tou/tou_tatakau'},
    { category: 'tou', name: '島', link: '/tou/tou_shima'},
    { category: 'tou', name: '酬', link: '/tou/tou_mukuiru'},
    { category: 'tou', name: '湯', link: '/tou/tou_yuge'},
    { category: 'tou', name: '丁', link: '/tou/tou_toutou'},





    // YOU
    { category: 'you', name: '揚', link: '/you/you_ageru'},
    { category: 'you', name: '用', link: '/you/you_mochiiru'},
    { category: 'you', name: '容', link: '/you/you_tayasui'},
    { category: 'you', name: '要', link: '/you/you_hitsuyou'},
    { category: 'you', name: '洋', link: '/you/you_youshiki'},
    { category: 'you', name: '栄', link: '/you/you_sakaeru'},
    { category: 'you', name: '腰', link: '/you/you_koshikake'},
    { category: 'you', name: '応', link: '/you/you_kotaeru'},
    { category: 'you', name: '鷹', link: '/you/you_taka'},
    { category: 'you', name: '様', link: '/you/you_yousu'},
    { category: 'you', name: '養', link: '/you/you_yashinau'},
    { category: 'you', name: '酔', link: '/you/you_yopparai'},
    { category: 'you', name: '陽', link: '/you/you_youkou'},
    { category: 'you', name: '傭', link: '/you/you_yatoi'},
    { category: 'you', name: '夭', link: '/you/you_youshi'},
    { category: 'you', name: '痒', link: '/you/you_kayui'},
    { category: 'you', name: '庸', link: '/you/you_youge'},
    { category: 'you', name: '幼', link: '/you/you_osanai'},
    { category: 'you', name: '擁', link: '/you/you_yousuru'},
    { category: 'you', name: '揺', link: '/you/you_yuru'},
    { category: 'you', name: '様', link: '/you/you_samazama'},






    // YUU
    { category: 'yuu', name: '有', link: '/yuu/yuu_aru'},
    { category: 'yuu', name: '夕', link: '/yuu/yuu_yuugata'},
    { category: 'yuu', name: '優', link: '/yuu/yuu_yasashii'},
    { category: 'yuu', name: '由', link: '/yuu/yuu_jiyuu'},
    { category: 'yuu', name: '雄', link: '/yuu/yuu_eiyuu'},
    { category: 'yuu', name: '酉', link: '/yuu/yuu_tori'},
    { category: 'yuu', name: '友', link: '/yuu/yuu_tomodachi'},
    { category: 'yuu', name: '勇', link: '/yuu/yuu_yuuki'},
    { category: 'yuu', name: '憂', link: '/yuu/yuu_urei'},
    { category: 'yuu', name: '祐', link: '/yuu/yuu_shinyuu'},
    { category: 'yuu', name: '誘', link: '/yuu/yuu_sasou'},
    { category: 'yuu', name: '裕', link: '/yuu/yuu_yuufuku'},
    { category: 'yuu', name: '悠', link: '/yuu/yuu_yuuzen'},
    { category: 'yuu', name: '幽', link: '/yuu/yuu_yuurei'},

    






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
