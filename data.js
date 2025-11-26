// ======================================================
// 1. DỮ LIỆU BẢNG CHỮ CÁI (KANA)
// ======================================================
const KANA_DATA = [
    { r: 'a', h: 'あ', k: 'ア' }, { r: 'i', h: 'い', k: 'イ' }, { r: 'u', h: 'う', k: 'ウ' }, { r: 'e', h: 'え', k: 'エ' }, { r: 'o', h: 'お', k: 'オ' },
    { r: 'ka', h: 'か', k: 'カ' }, { r: 'ki', h: 'き', k: 'キ' }, { r: 'ku', h: 'く', k: 'ク' }, { r: 'ke', h: 'け', k: 'ケ' }, { r: 'ko', h: 'こ', k: 'コ' },
    { r: 'sa', h: 'さ', k: 'サ' }, { r: 'shi', h: 'し', k: 'シ' }, { r: 'su', h: 'す', k: 'ス' }, { r: 'se', h: 'せ', k: 'セ' }, { r: 'so', h: 'そ', k: 'ソ' },
    { r: 'ta', h: 'た', k: 'タ' }, { r: 'chi', h: 'ち', k: 'チ' }, { r: 'tsu', h: 'つ', k: 'ツ' }, { r: 'te', h: 'て', k: 'テ' }, { r: 'to', h: 'と', k: 'ト' },
    { r: 'na', h: 'な', k: 'ナ' }, { r: 'ni', h: 'に', k: 'ニ' }, { r: 'nu', h: 'ぬ', k: 'ヌ' }, { r: 'ne', h: 'ね', k: 'ネ' }, { r: 'no', h: 'の', k: 'ノ' },
    { r: 'ha', h: 'は', k: 'ハ' }, { r: 'hi', h: 'ひ', k: 'ヒ' }, { r: 'fu', h: 'ふ', k: 'フ' }, { r: 'he', h: 'へ', k: 'ヘ' }, { r: 'ho', h: 'ほ', k: 'ホ' },
    { r: 'ma', h: 'ま', k: 'マ' }, { r: 'mi', h: 'み', k: 'ミ' }, { r: 'mu', h: 'む', k: 'ム' }, { r: 'me', h: 'め', k: 'メ' }, { r: 'mo', h: 'も', k: 'モ' },
    { r: 'ya', h: 'や', k: 'ヤ' }, { r: '', h: '', k: '' }, { r: 'yu', h: 'ゆ', k: 'ユ' }, { r: '', h: '', k: '' }, { r: 'yo', h: 'よ', k: 'ヨ' },
    { r: 'ra', h: 'ら', k: 'ラ' }, { r: 'ri', h: 'り', k: 'リ' }, { r: 'ru', h: 'る', k: 'ル' }, { r: 're', h: 'れ', k: 'レ' }, { r: 'ro', h: 'ろ', k: 'ロ' },
    { r: 'wa', h: 'わ', k: 'ワ' }, { r: '', h: '', k: '' }, { r: '', h: '', k: '' }, { r: '', h: '', k: '' }, { r: 'wo', h: 'を', k: 'ヲ' },
    { r: 'n', h: 'ん', k: 'ン' }, { r: '', h: '', k: '' }, { r: '', h: '', k: '' }, { r: '', h: '', k: '' }, { r: '', h: '', k: '' },
];

// ======================================================
// 2. KHO BÀI HỌC (TỪ VỰNG & NGỮ PHÁP)
// ======================================================
const KHO_BAI_HOC = [
    // ... (Giữ nguyên các bài học N5 từ 1-25 của bạn ở đây, không thay đổi gì phần này) ...
    // BÀI 1: TÔI LÀ...
    { 
        id: "n5_tv_1", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 1: TÔI LÀ... - Từ vựng", 
        noi_dung: `<h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3><table class="bang-tu-vung"><thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead><tbody><tr><td>わたし</td><td>watashi</td><td>Tôi</td><td>Dùng cho cả nam và nữ</td></tr><tr><td>あなた</td><td>anata</td><td>Bạn, Anh/Chị</td><td>Nên dùng tên + さん</td></tr><tr><td>あのひと</td><td>ano hito</td><td>Người đó, Vị đó</td><td>Lịch sự: あのかた</td></tr><tr><td>〜さん</td><td>~san</td><td>Ông/Bà/Anh/Chị</td><td>Hậu tố chỉ người</td></tr><tr><td>せんせい</td><td>sensei</td><td>Giáo viên</td><td>Không dùng cho mình</td></tr><tr><td>がくせい</td><td>gakusei</td><td>Học sinh, Sinh viên</td><td></td></tr><tr><td>かいしゃいん</td><td>kaishain</td><td>Nhân viên công ty</td><td></td></tr><tr><td>しゃいん</td><td>shain</td><td>Nhân viên</td><td>Kèm tên công ty</td></tr><tr><td>エンジニア</td><td>enjinia</td><td>Kỹ sư</td><td></td></tr><tr><td>ベトナム</td><td>Betonamu</td><td>Việt Nam</td><td></td></tr><tr><td>アメリカ</td><td>Amerika</td><td>Mỹ</td><td></td></tr><tr><td>〜ご</td><td>~go</td><td>Tiếng (ngôn ngữ)</td><td>VD: Nihon-go</td></tr></tbody></table>` 
    },
    // ... (Bạn có thể giữ các bài học khác ở đây nếu muốn, để ngắn gọn tôi ví dụ 1 bài)
];

// ======================================================
// 3. KHO BÀI TẬP (NƠI CHỨA CÂU HỎI)
// ======================================================
const KHO_BAI_TAP = [
    // --- BÀI TẬP N5 CŨ ---
    { id: "n5_bt_1", cap_do: "N5", loai: "TuVung", tieu_de: "Từ vựng N5 - Bộ 1", cau_hoi: "Con mèo tiếng Nhật là gì?", lua_chon: ["Neko", "Inu", "Tori", "Ushi"], dap_an_dung: "Neko" },
    { id: "n5_bt_2", cap_do: "N5", loai: "TuVung", tieu_de: "Từ vựng N5 - Bộ 1", cau_hoi: "Số 1 tiếng Nhật là gì?", lua_chon: ["Ni", "San", "Ichi", "Yon"], dap_an_dung: "Ichi" },
    // ... các bài N5 cũ

    // --- BÀI TẬP N1 (CHUYỂN TỪ KHO ĐỀ THI SANG ĐÂY) ---
    // Mondai 1: Cách đọc Kanji
    { id: "n1_2010_1", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (7/2010)", cau_hoi: "駅前の店はどこも<u>繁盛</u>している。", lua_chon: ["びんしょう", "びんじょう", "はんしょう", "はんじょう"], dap_an_dung: "はんじょう" },
    { id: "n1_2010_2", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (7/2010)", cau_hoi: "<u>契約</u>の内容については、こちらの書類をご覧ください。", lua_chon: ["せいやく", "けいやく", "こうやく", "ようやく"], dap_an_dung: "けいやく" },
    { id: "n1_2010_3", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (7/2010)", cau_hoi: "この国は、昔から貿易によって<u>潤って</u>きた。", lua_chon: ["もうかって", "まかなって", "あきなって", "うるおって"], dap_an_dung: "うるおって" },
    { id: "n1_2010_4", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (7/2010)", cau_hoi: "警備が<u>手薄</u>なところがないか調べた。", lua_chon: ["しゅうす", "しゅはく", "てうす", "てはく"], dap_an_dung: "てうす" },
    { id: "n1_2010_5", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (7/2010)", cau_hoi: "開発のために古いビルが次々と<u>壊されて</u>いる。", lua_chon: ["こわされて", "くずされて", "たおされて", "つぶされて"], dap_an_dung: "こわされて" },
    { id: "n1_2010_6", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (7/2010)", cau_hoi: "オリンピックが<u>華々しく</u>開幕した。", lua_chon: ["はなばなしく", "おもおもしく", "ものものしく", "そうぞうしく"], dap_an_dung: "はなばなしく" },

    // Mondai 2: Điền từ
    { id: "n1_2010_7", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Từ vựng (7/2010)", cau_hoi: "この連載小説は全12話で（　　）する。", lua_chon: ["静止", "成就", "完結", "終息"], dap_an_dung: "完結" },
    { id: "n1_2010_8", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Từ vựng (7/2010)", cau_hoi: "会議で質問に答えられなくて困っていたら、課長が（　　）してくれた。", lua_chon: ["キープ", "フォロー", "マッチ", "アップ"], dap_an_dung: "フォロー" },
    { id: "n1_2010_9", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Từ vựng (7/2010)", cau_hoi: "この春、とうとう（　　）のマイホームを手に入れた。", lua_chon: ["切望", "欲望", "念願", "志願"], dap_an_dung: "念願" },
    { id: "n1_2010_10", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Từ vựng (7/2010)", cau_hoi: "会議ではA案に賛成したが、（　　）を言えばB案の方がいいと思う。", lua_chon: ["本音", "本気", "弱音", "弱気"], dap_an_dung: "本音" },
    { id: "n1_2010_11", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Từ vựng (7/2010)", cau_hoi: "先方に協力を依頼したが、（　　）断られてしまった。", lua_chon: ["しんなり", "やんわり", "うんざり", "ひんやり"], dap_an_dung: "やんわり" },
    { id: "n1_2010_12", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Từ vựng (7/2010)", cau_hoi: "（　　）ホテルでは全室禁煙です。", lua_chon: ["自", "主", "実", "当"], dap_an_dung: "当" },
    { id: "n1_2010_13", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Từ vựng (7/2010)", cau_hoi: "新しいビジネスを始めるにあたっては、（　　）計画を立てる必要がある。", lua_chon: ["零細な", "綿密な", "繊細な", "濃密な"], dap_an_dung: "綿密な" },

    // Mondai 3: Đồng nghĩa
    { id: "n1_2010_14", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Đồng nghĩa (7/2010)", cau_hoi: "彼はお金に関して<u>ルーズ</u>なところがある。", lua_chon: ["ずうずうしい", "だらしない", "うるさい", "よわい"], dap_an_dung: "だらしない" },
    { id: "n1_2010_15", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Đồng nghĩa (7/2010)", cau_hoi: "この職場にもかなり<u>なじん</u>できた。", lua_chon: ["恵まれて", "逆らって", "飽きて", "慣れて"], dap_an_dung: "慣れて" },
    { id: "n1_2010_16", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Đồng nghĩa (7/2010)", cau_hoi: "あの兄弟はいつもお互いに<u>張り合っている</u>。", lua_chon: ["競争して", "応援して", "無視して", "尊重して"], dap_an_dung: "競争して" },
    { id: "n1_2010_17", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Đồng nghĩa (7/2010)", cau_hoi: "ある日、我が家に<u>朗報</u>が届いた。", lua_chon: ["意外な知らせ", "うれしい知らせ", "大切な知らせ", "めずらしい知らせ"], dap_an_dung: "うれしい知らせ" },
    { id: "n1_2010_18", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Đồng nghĩa (7/2010)", cau_hoi: "やっと<u>わずらわしい</u>作業から解放された。", lua_chon: ["地味な", "苦手な", "面倒な", "退屈な"], dap_an_dung: "面倒な" },
    { id: "n1_2010_19", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Đồng nghĩa (7/2010)", cau_hoi: "さっき、上司に<u>いやみ</u>を言われた。", lua_chon: ["不満", "冗談", "愚痴", "皮肉"], dap_an_dung: "皮肉" },

    // Mondai 4: Cách dùng từ
    { id: "n1_2010_20", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Cách dùng từ (7/2010)", cau_hoi: "Cách dùng đúng của: <u>密集</u>", lua_chon: ["この地区は古い住宅が密集している。", "会議のメンバーを密集している。", "有名な歌手が密集している。", "外国の切手を密集している。"], dap_an_dung: "この地区は古い住宅が密集している。" },
    { id: "n1_2010_21", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Cách dùng từ (7/2010)", cau_hoi: "Cách dùng đúng của: <u>潔い</u>", lua_chon: ["潔く謝ったほうがいいよ。", "自分は無実だ、潔い。", "潔く説明だけですませた。", "潔くなるまでしっかり手を洗いましょう。"], dap_an_dung: "潔く謝ったほうがいいよ。" },
    { id: "n1_2010_22", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Cách dùng từ (7/2010)", cau_hoi: "Cách dùng đúng của: <u>発足</u>", lua_chon: ["発足した問題について検討します。", "新技術を発足したおかげで", "この団体は先月発足したばかりです。", "新しい週刊誌を発足する。"], dap_an_dung: "この団体は先月発足したばかりです。" },
    { id: "n1_2010_23", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Cách dùng từ (7/2010)", cau_hoi: "Cách dùng đúng của: <u>にぎわう</u>", lua_chon: ["サラリーマンでにぎわっている。", "どこのレストランもにぎわっている。", "緑でにぎわっている。", "本がにぎわっている。"], dap_an_dung: "どこのレストランもにぎわっている。" },
    { id: "n1_2010_24", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Cách dùng từ (7/2010)", cau_hoi: "Cách dùng đúng của: <u>ひとまず</u>", lua_chon: ["ひとまず動かすと", "ひとまずしか効果がなかった。", "ひとまずたってから", "今日の作業はひとまずこれで終わりにしよう。"], dap_an_dung: "今日の作業はひとまずこれで終わりにしよう。" },
    { id: "n1_2010_25", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Cách dùng từ (7/2010)", cau_hoi: "Cách dùng đúng của: <u>満喫</u>", lua_chon: ["気持ちがとても満喫する。", "アパートの情報が満喫されている。", "久しぶりの休暇を満喫した。", "条件を満喫する人材"], dap_an_dung: "久しぶりの休暇を満喫した。" },

    // Mondai 5: Ngữ pháp
    { id: "n1_2010_26", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (7/2010)", cau_hoi: "この美術館の絵を全部見ようと思ったら、半日（　　）足りないと思います。", lua_chon: ["にわたって", "にかけて", "までは", "では"], dap_an_dung: "では" },
    { id: "n1_2010_27", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (7/2010)", cau_hoi: "部屋の広さも考えず、店員に勧められる（　　）、大きいテーブルを買ってしまった。", lua_chon: ["まま", "ままを", "までも", "ままなのに"], dap_an_dung: "まま" },
    { id: "n1_2010_28", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (7/2010)", cau_hoi: "A会社の元社員が11日、突然の解雇を不当（　　）、解雇取り消しを同社に求める訴えを起こした。", lua_chon: ["となって", "になって", "として", "にして"], dap_an_dung: "として" },
    { id: "n1_2010_29", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (7/2010)", cau_hoi: "下水道工事中、ご不便をおかけ致しますが、どうかご理解（　　）、よろしくお願い申し上げます。", lua_chon: ["いたしたく", "いただきたく", "差し上げたく", "申しあげたく"], dap_an_dung: "いただきたく" },
    { id: "n1_2010_30", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (7/2010)", cau_hoi: "あんなに巨大な建物を、昔の人は機械を使わずに作ったとは、不思議（　　）。", lua_chon: ["てならない", "といけない", "極まりない", "どころではない"], dap_an_dung: "てならない" },
    { id: "n1_2010_31", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (7/2010)", cau_hoi: "A「あ、そっか。どうりて空いてる（　　）。」", lua_chon: ["こともある", "に決まってる", "に違いない", "はずだ"], dap_an_dung: "はずだ" },
    { id: "n1_2010_32", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (7/2010)", cau_hoi: "今回の事件で山田氏の政治的影響力が完全に失われる（　　）、弱まることは間違いないだろう。", lua_chon: ["ことはないにしても", "ことはないにもかかわらず", "ほかはないにしても", "ほかはないにもかかわらず"], dap_an_dung: "ことはないにしても" },
    { id: "n1_2010_33", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (7/2010)", cau_hoi: "「3歳までの育児は母親がすべきだ」と言う人もいるが、子育てをするのが母親で（　　）、必ずしもそうではないと思う。", lua_chon: ["なくてはならないからといって", "なくてはならないかというと", "あるわけにはいかないからといって", "あるわけにはいかないかというと"], dap_an_dung: "なくてはならないかというと" },
    { id: "n1_2010_34", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (7/2010)", cau_hoi: "もう二度と恋（　　）と固く心に誓ったはずだったが、知らず知らずのうちに彼女のことが好きになっていた。", lua_chon: ["こそするものか", "などするものか", "こそするものなのか", "などするものなのか"], dap_an_dung: "などするものか" },
    { id: "n1_2010_35", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (7/2010)", cau_hoi: "私の意見書は、プロセスの問題点を指摘（　　）、決定そのものに反対するものではありません。", lua_chon: ["しそうになったにすぎず", "しそうになったほどで", "しようとしたにすぎず", "しようとしたほどで"], dap_an_dung: "しようとしたにすぎず" }
];

// ======================================================
// 4. KHO ĐỀ THI THỬ (NƠI LIỆT KÊ ID CÂU HỎI)
// ======================================================
const KHO_DE_THI = [
    { 
        id: "n5_de_1", cap_do: "N5", tieu_de: "Đề thi thử N5 - Tổng hợp 1", 
        danh_sach_cau_hoi: ["n5_bt_1", "n5_bt_2", "n5_bt_6", "n5_bt_7", "n5_bt_8"] 
    },
    { 
        id: "n5_de_2", cap_do: "N5", tieu_de: "Đề thi thử N5 - Tổng hợp 2", 
        danh_sach_cau_hoi: ["n5_bt_3", "n5_bt_4", "n5_bt_5", "n5_bt_9", "n5_bt_10"] 
    },

    // --- ĐỀ THI N1 (CHỈ CHỨA ID) ---
    {
        id: "n1_de_2010_7",
        cap_do: "N1",
        tieu_de: "Đề thi thử N1 - Tháng 7/2010 (Từ vựng & Ngữ pháp)",
        danh_sach_cau_hoi: [
            "n1_2010_1", "n1_2010_2", "n1_2010_3", "n1_2010_4", "n1_2010_5", "n1_2010_6",
            "n1_2010_7", "n1_2010_8", "n1_2010_9", "n1_2010_10", "n1_2010_11", "n1_2010_12", "n1_2010_13",
            "n1_2010_14", "n1_2010_15", "n1_2010_16", "n1_2010_17", "n1_2010_18", "n1_2010_19",
            "n1_2010_20", "n1_2010_21", "n1_2010_22", "n1_2010_23", "n1_2010_24", "n1_2010_25",
            "n1_2010_26", "n1_2010_27", "n1_2010_28", "n1_2010_29", "n1_2010_30", "n1_2010_31", "n1_2010_32", "n1_2010_33", "n1_2010_34", "n1_2010_35"
        ]
    }
];
