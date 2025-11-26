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
// 2. KHO BÀI HỌC (TỪ VỰNG & NGỮ PHÁP - MẪU)
// ======================================================
const KHO_BAI_HOC = [
    // --- BÀI 1: TÔI LÀ... ---
    { 
        id: "n5_tv_1", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 1: TÔI LÀ... - Từ vựng", 
        noi_dung: `<h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3><table class="bang-tu-vung"><thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead><tbody><tr><td>わたし</td><td>watashi</td><td>Tôi</td><td>Dùng cho cả nam và nữ</td></tr><tr><td>あなた</td><td>anata</td><td>Bạn, Anh/Chị</td><td>Nên dùng tên + さん</td></tr><tr><td>あのひと</td><td>ano hito</td><td>Người đó, Vị đó</td><td>Lịch sự: あのかた</td></tr><tr><td>〜さん</td><td>~san</td><td>Ông/Bà/Anh/Chị</td><td>Hậu tố chỉ người</td></tr><tr><td>せんせい</td><td>sensei</td><td>Giáo viên</td><td>Không dùng cho mình</td></tr><tr><td>がくせい</td><td>gakusei</td><td>Học sinh, Sinh viên</td><td></td></tr><tr><td>かいしゃいん</td><td>kaishain</td><td>Nhân viên công ty</td><td></td></tr></tbody></table>` 
    },
    { 
        id: "n5_np_1", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 1: TÔI LÀ... - Ngữ pháp", 
        noi_dung: `<h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3><table class="bang-tu-vung"><thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead><tbody><tr><td>1. N1 は N2 です</td><td>Khẳng định: N1 là N2. は (wa) là trợ từ chủ đề.</td><td>わたし は ホアン です。</td></tr><tr><td>2. N1 は N2 じゃありません</td><td>Phủ định: N1 không phải là N2.</td><td>わたし は せんせい じゃありません。</td></tr><tr><td>3. N1 は N2 ですか</td><td>Nghi vấn: N1 có phải là N2 không? Thêm か.</td><td>あなた は ベトナム人 ですか。</td></tr></tbody></table>` 
    },
    // (Để file gọn nhẹ, tôi giữ lại mẫu Bài 1. Bạn hãy giữ nguyên các bài học từ 2-25 cũ của mình tại đây)
];

// ======================================================
// 3. KHO BÀI TẬP (NƠI CHỨA CÂU HỎI)
// ======================================================
const KHO_BAI_TAP = [
    // --- BÀI TẬP N5 CŨ ---
    { id: "n5_bt_1", cap_do: "N5", loai: "TuVung", tieu_de: "Từ vựng N5 - Bộ 1", cau_hoi: "Con mèo tiếng Nhật là gì?", lua_chon: ["Neko", "Inu", "Tori", "Ushi"], dap_an_dung: "Neko" },
    { id: "n5_bt_2", cap_do: "N5", loai: "TuVung", tieu_de: "Từ vựng N5 - Bộ 1", cau_hoi: "Số 1 tiếng Nhật là gì?", lua_chon: ["Ni", "San", "Ichi", "Yon"], dap_an_dung: "Ichi" },
    { id: "n5_bt_6", cap_do: "N5", loai: "NguPhap", tieu_de: "Ngữ pháp N5 - Bộ 1", cau_hoi: "わたし ___ がくせいです。", lua_chon: ["を", "は", "に", "で"], dap_an_dung: "は" },

    // --- BÀI TẬP N1 (THÁNG 7/2010) - ĐÃ CÓ TỪ TRƯỚC ---
    { id: "n1_2010_1", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (7/2010)", cau_hoi: "駅前の店はどこも<u>繁盛</u>している。", lua_chon: ["びんしょう", "びんじょう", "はんしょう", "はんじょう"], dap_an_dung: "はんじょう" },
    { id: "n1_2010_2", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (7/2010)", cau_hoi: "<u>契約</u>の内容については、こちらの書類をご覧ください。", lua_chon: ["せいやく", "けいやく", "こうやく", "ようやく"], dap_an_dung: "けいやく" },
    { id: "n1_2010_3", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (7/2010)", cau_hoi: "この国は、昔から貿易によって<u>潤って</u>きた。", lua_chon: ["もうかって", "まかなって", "あきなって", "うるおって"], dap_an_dung: "うるおって" },
    { id: "n1_2010_4", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (7/2010)", cau_hoi: "警備が<u>手薄</u>なところがないか調べた。", lua_chon: ["しゅうす", "しゅはく", "てうす", "てはく"], dap_an_dung: "てうす" },
    { id: "n1_2010_5", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (7/2010)", cau_hoi: "開発のために古いビルが次々と<u>壊されて</u>いる。", lua_chon: ["こわされて", "くずされて", "たおされて", "つぶされて"], dap_an_dung: "こわされて" },
    { id: "n1_2010_6", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (7/2010)", cau_hoi: "オリンピックが<u>華々しく</u>開幕した。", lua_chon: ["はなばなしく", "おもおもしく", "ものものしく", "そうぞうしく"], dap_an_dung: "はなばなしく" },
    // ... (Vui lòng giữ nguyên các câu từ 7 đến 71 của đề 7/2010 mà bạn đã có)

    // ======================================================
    // BÀI TẬP N1 (THÁNG 12/2010) - MỚI THÊM
    // ======================================================
    
    // Mondai 1: Kanji
    { id: "n1_2010_12_1", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (12/2010)", cau_hoi: "話が<u>本筋</u>からそれてしまった。", lua_chon: ["もとすじ", "もときん", "ほんすじ", "ほんきん"], dap_an_dung: "ほんすじ" },
    { id: "n1_2010_12_2", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (12/2010)", cau_hoi: "友人にピアノの<u>伴奏</u>を頼まれた。", lua_chon: ["はんそう", "ばんそう", "はんそ", "ばんそ"], dap_an_dung: "ばんそう" },
    { id: "n1_2010_12_3", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (12/2010)", cau_hoi: "名探偵の<u>推理</u>で事件は無事に解決した。", lua_chon: ["しんり", "すいり", "どうり", "ろんり"], dap_an_dung: "すいり" },
    { id: "n1_2010_12_4", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (12/2010)", cau_hoi: "先日の会議では、<u>極めて</u>重要な問題が話し合われた。", lua_chon: ["きわめて", "あらためて", "つとめて", "つきつめて"], dap_an_dung: "きわめて" },
    { id: "n1_2010_12_5", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (12/2010)", cau_hoi: "もう少しアイディアを<u>練って</u>からお話しします。", lua_chon: ["けずって", "つのって", "ほって", "ねって"], dap_an_dung: "ねって" },
    { id: "n1_2010_12_6", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (12/2010)", cau_hoi: "靴のひもを<u>締めた</u>。", lua_chon: ["からめた", "ゆるめた", "はめた", "しめた"], dap_an_dung: "しめた" },

    // Mondai 2: Điền từ
    { id: "n1_2010_12_7", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Từ vựng (12/2010)", cau_hoi: "各国のテレビがそのニュースを（　　）。", lua_chon: ["投じた", "配送した", "報じた", "配布した"], dap_an_dung: "報じた" },
    { id: "n1_2010_12_8", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Từ vựng (12/2010)", cau_hoi: "森林伐採が環境に（　　）影響は大きい。", lua_chon: ["及ぼす", "授ける", "費やす", "掲げる"], dap_an_dung: "及ぼす" },
    { id: "n1_2010_12_9", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Từ vựng (12/2010)", cau_hoi: "吉田さんは弁護士として20年もの（　　）を積んできた。", lua_chon: ["ベテラン", "ポジション", "ステータス", "キャリア"], dap_an_dung: "キャリア" },
    { id: "n1_2010_12_10", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Từ vựng (12/2010)", cau_hoi: "この小説の主人公は、歴史（　　）の人物をモデルにしている。", lua_chon: ["上", "面", "側", "内"], dap_an_dung: "上" },
    { id: "n1_2010_12_11", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Từ vựng (12/2010)", cau_hoi: "交渉が（　　）進み、無事に契約することができた。", lua_chon: ["しとやかに", "しなやかに", "円滑に", "急性に"], dap_an_dung: "円滑に" },
    { id: "n1_2010_12_12", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Từ vựng (12/2010)", cau_hoi: "次の大会に向けて、チームの（　　）を強めよう。", lua_chon: ["収束", "結束", "親密", "緊密"], dap_an_dung: "結束" },
    { id: "n1_2010_12_13", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Từ vựng (12/2010)", cau_hoi: "その企業は巨大な資本を（　　）に、海外の市場に進出した。", lua_chon: ["背景", "根源", "後援", "発端"], dap_an_dung: "背景" },

    // Mondai 3: Đồng nghĩa
    { id: "n1_2010_12_14", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Đồng nghĩa (12/2010)", cau_hoi: "今回の研修会は、出席者が<u>まばら</u>だった。", lua_chon: ["多かった", "少なかった", "まじめだった", "ふまじめだった"], dap_an_dung: "少なかった" },
    { id: "n1_2010_12_15", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Đồng nghĩa (12/2010)", cau_hoi: "昨日は一日中<u>どんより</u>した天気だった。", lua_chon: ["曇っていて暗かった", "晴れていて明るかった", "風が吹いて涼しかった", "雨が降って蒸し暑かった"], dap_an_dung: "曇っていて暗かった" },
    { id: "n1_2010_12_16", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Đồng nghĩa (12/2010)", cau_hoi: "父は毎朝、<u>丹念に</u>新聞に目を通す。", lua_chon: ["ぼうっと", "ちらっと", "じっくりと", "ざっと"], dap_an_dung: "じっくりと" },
    { id: "n1_2010_12_17", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Đồng nghĩa (12/2010)", cau_hoi: "最近、仕事が<u>はかどっている</u>。", lua_chon: ["予想外に遅れている", "順調に進んでいる", "徐々に減っている", "急激に増えている"], dap_an_dung: "順調に進んでいる" },
    { id: "n1_2010_12_18", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Đồng nghĩa (12/2010)", cau_hoi: "相談の結果、この計画は<u>見合わせる</u>ことになりました。", lua_chon: ["承認する", "実施する", "変更する", "中止する"], dap_an_dung: "中止する" },
    { id: "n1_2010_12_19", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Đồng nghĩa (12/2010)", cau_hoi: "激しい雨のため、<u>やむをえず</u>試合は延期することになった。", lua_chon: ["しかたなく", "まもなく", "思いがけなく", "限りなく"], dap_an_dung: "しかたなく" },

    // Mondai 4: Cách dùng từ
    { id: "n1_2010_12_20", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Cách dùng (12/2010)", cau_hoi: "Cách dùng đúng của: <u>調達</u>", lua_chon: ["新しい事業のために、資金を調達しなければならない。", "インターネットで奨学金の申請方法を調達した。", "早めに必要な資格を調達したほうがいい。", "環境問題に対する各国の若者の意識を調達した。"], dap_an_dung: "新しい事業のために、資金を調達しなければならない。" },
    { id: "n1_2010_12_21", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Cách dùng (12/2010)", cau_hoi: "Cách dùng đúng của: <u>細心</u>", lua_chon: ["初めて一人で海外旅行をしたときは、細心の思いをした。", "この二つの言葉は似ているが、細心のところでは意味が異なる。", "美術品の運搬には、細心の注意を払う必要がある。", "イベントの概要は伺いましたが、細心の説明はまだです。"], dap_an_dung: "美術品の運搬には、細心の注意を払う必要がある。" },
    { id: "n1_2010_12_22", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Cách dùng (12/2010)", cau_hoi: "Cách dùng đúng của: <u>意地</u>", lua_chon: ["彼は何がやりたいのか、意地がはっきりしない。", "そう意地を張らずに、すなおに謝ったほうがいいよ。", "会議で、この調査の意地を説明した。", "わが社は顧客の意地に沿った商品開発を目指している。"], dap_an_dung: "そう意地を張らずに、すなおに謝ったほうがいいよ。" },
    { id: "n1_2010_12_23", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Cách dùng (12/2010)", cau_hoi: "Cách dùng đúng của: <u>めきめき</u>", lua_chon: ["あのひとは発言するたびに意見がめきめき変わる。", "入院して、健康のありがたみをめきめき感じた。", "遠慮しないで、めきめき召し上がってくださいね。", "水泳教室に通ったおかげで、めきめき上達した。"], dap_an_dung: "水泳教室に通ったおかげで、めきめき上達した。" },
    { id: "n1_2010_12_24", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Cách dùng (12/2010)", cau_hoi: "Cách dùng đúng của: <u>目先</u>", lua_chon: ["田中さんはつい目先に帰ってしまいましたよ。", "あのモデルのファッションは流行の目先を行っている。", "目先の利益を追うのではなく、会社の将来を考えるべきだ。", "決勝戦を目先に控え、選手はだいぶ緊張しているようだ。"], dap_an_dung: "目先の利益を追うのではなく、会社の将来を考えるべきだ。" },
    { id: "n1_2010_12_25", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Cách dùng (12/2010)", cau_hoi: "Cách dùng đúng của: <u>見落とす</u>", lua_chon: ["人が困っているのを見落とすわけには行かない。", "飛行機に乗っている間、窓からずっと海を見落としていた。", "部長は、気づいていたようだが、今回の失敗を見落としてくれた。", "メールが多すぎて、重要な連絡を見落としていた。"], dap_an_dung: "メールが多すぎて、重要な連絡を見落としていた。" },

    // Mondai 5: Ngữ pháp
    { id: "n1_2010_12_26", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (12/2010)", cau_hoi: "山川鉄道は、3月で開業90年を迎えるの（　　）最新型車両を導入し、15日から営業運転を開始する。", lua_chon: ["を限りに", "を皮切りに", "をよそに", "を機に"], dap_an_dung: "を機に" },
    { id: "n1_2010_12_27", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (12/2010)", cau_hoi: "いかなる理論でも、データによって実証されなければ多くの人に（　　）。", lua_chon: ["受け入れはしない", "受け入れられはしない", "受け入れられてはいない", "受け入れられることはない"], dap_an_dung: "受け入れられはしない" },
    { id: "n1_2010_12_28", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (12/2010)", cau_hoi: "（テレビのコマーシャルで）「こちらは添加物を（　　）使用していない、ヘルシーな食用油です。」", lua_chon: ["いっさい", "とても", "きっと", "まさか"], dap_an_dung: "いっさい" },
    { id: "n1_2010_12_29", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (12/2010)", cau_hoi: "「今回のプロジェクトを任され、その責任の重さに身が引き締まる（　　）です。」", lua_chon: ["考え", "見込み", "思い", "始末"], dap_an_dung: "思い" },
    { id: "n1_2010_12_30", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (12/2010)", cau_hoi: "「このたびは、私どもの商品発送ミスにより、お客様に大変ご迷惑をおかけしましたことを深く（　　）。申し訳ございませんでした。」", lua_chon: ["わびていただきます", "わびていらっしゃいます", "おわびいただきます", "おわび申し上げます"], dap_an_dung: "おわび申し上げます" },
    { id: "n1_2010_12_31", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (12/2010)", cau_hoi: "上司「君、困る（　　）！資料にミスがあったぞ。」", lua_chon: ["じゃないか", "ではないか", "じゃないのか", "ではないのか"], dap_an_dung: "じゃないか" },
    { id: "n1_2010_12_32", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (12/2010)", cau_hoi: "地球温暖化抑制への貢献が、ここ10年あまりの間に、優良企業の条件の一つ（　　）ようだ。", lua_chon: ["としうる", "なりうる", "としつつある", "となりつつある"], dap_an_dung: "となりつつある" },
    { id: "n1_2010_12_33", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (12/2010)", cau_hoi: "「あの山にはハチがたくさん出るのよ。万が一、（　　）大変でしょ。」", lua_chon: ["刺されさえしたら", "刺されでもしたら", "刺させるなどしても", "刺させるくらいしても"], dap_an_dung: "刺されでもしたら" },
    { id: "n1_2010_12_34", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (12/2010)", cau_hoi: "自慢する（　　）が、私は入社以来10年、一度も遅刻をしたことがない。", lua_chon: ["だけのことではない", "ほどのことではない", "だけのことに過ぎない", "ほどのことに過ぎない"], dap_an_dung: "ほどのことではない" },
    { id: "n1_2010_12_35", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (12/2010)", cau_hoi: "「私は注意し続けるべきでしょうか。それとも本人が気づくまで、もう何も言う（　　）。」", lua_chon: ["べきでしょうか", "べきなのでしょうか", "べきではないのでしょうか", "べきなのではないでしょうか"], dap_an_dung: "べきではないのでしょうか" },

    // Mondai 6: Dấu sao
    { id: "n1_2010_12_36", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Dấu sao (12/2010)", cau_hoi: "山田監督は私の恩人です。今の＿＿　＿＿　★　＿＿　ことです。", lua_chon: ["あっての", "あるのも", "私が", "監督"], dap_an_dung: "監督" },
    { id: "n1_2010_12_37", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Dấu sao (12/2010)", cau_hoi: "いったん仕事を引き受けた＿＿　＿＿　★　＿＿　違いない。", lua_chon: ["彼の性格", "からして", "からには", "責任感の強い"], dap_an_dung: "彼の性格" },
    { id: "n1_2010_12_38", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Dấu sao (12/2010)", cau_hoi: "ちょっと考えれば、さっきの話が冗談＿＿　＿＿　★　＿＿　簡単に信じてしまった。", lua_chon: ["わかるだろう", "だって", "に", "ことくらい"], dap_an_dung: "わかるだろう" },
    { id: "n1_2010_12_39", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Dấu sao (12/2010)", cau_hoi: "かつて映画スターであった山田氏が初挑戦で知事選に勝利したのは、能力という＿＿　＿＿　★　＿＿　大きい。", lua_chon: ["ところが", "より", "よる", "人気と知名度に"], dap_an_dung: "よる" },
    { id: "n1_2010_12_40", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Dấu sao (12/2010)", cau_hoi: "この植物はとても強いので、＿＿　＿＿　★　＿＿　ちゃんと育ちますよ。", lua_chon: ["水やりを", "さえ", "しなければ", "忘れ"], dap_an_dung: "さえ" },

    // Mondai 7: Đục lỗ
    { id: "n1_2010_12_41", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đục lỗ (12/2010)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>[Bài đọc về Kỹ năng giao tiếp - コミュニケーション能力]<br>...わざわざ「話し方教室」に<b>（ 41 ）</b>。</div><b>41. （　　）に入る最もよいものはどれか。</b>`, lua_chon: ["通う人もいるほどだ", "通う人がいるのだろうか", "通うべきである", "通うまでもなかろう"], dap_an_dung: "通う人もいるほどだ" },
    { id: "n1_2010_12_42", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đục lỗ (12/2010)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>...こうした傾向は、<b>（ 42 ）</b>。</div><b>42. （　　）に入る最もよいものはどれか。</b>`, lua_chon: ["当然のことではないか", "極めて可能性が低いのではないか", "はたして健全なのだろうか", "はたして起こり得ないのだろうか"], dap_an_dung: "はたして健全なのだろうか" },
    { id: "n1_2010_12_43", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đục lỗ (12/2010)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>コミュニケーションは技術ではない。<b>（ 43 ）</b>、マニュアル化して身につけられるようなものではないはずだ。</div><b>43. （　　）に入る最もよいものはどれか。</b>`, lua_chon: ["したがって", "すなわち", "それどころか", "とはい"], dap_an_dung: "すなわち" },
    { id: "n1_2010_12_44", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đục lỗ (12/2010)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>...マニュアルに頼ろうとする姿勢が、<b>（ 44 ）</b>。</div><b>44. （　　）に入る最もよいものはどれか。</b>`, lua_chon: ["こうしてつまずかせる", "そこから踏み出させる", "それにつまずいてしまった", "ここから踏み出してしまった"], dap_an_dung: "それにつまずいてしまった" },
    { id: "n1_2010_12_45", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đục lỗ (12/2010)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>...本当のコミュニケーションを阻害<b>（ 45 ）</b>。</div><b>45. （　　）に入る最もよいものはどれか。</b>`, lua_chon: ["してしまうのだろうか", "してしまうだけである", "してしまうものでもない", "してしまうとも言えまい"], dap_an_dung: "してしまうものでもない" }
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

    // --- ĐỀ THI N1 (THÁNG 7/2010) ---
    {
        id: "n1_de_2010_7",
        cap_do: "N1",
        tieu_de: "Đề thi thử N1 - Tháng 7/2010 (Full)",
        danh_sach_cau_hoi: [
            "n1_2010_1", "n1_2010_2", "n1_2010_3", "n1_2010_4", "n1_2010_5", "n1_2010_6",
            "n1_2010_7", "n1_2010_8", "n1_2010_9", "n1_2010_10", "n1_2010_11", "n1_2010_12", "n1_2010_13",
            "n1_2010_14", "n1_2010_15", "n1_2010_16", "n1_2010_17", "n1_2010_18", "n1_2010_19",
            "n1_2010_20", "n1_2010_21", "n1_2010_22", "n1_2010_23", "n1_2010_24", "n1_2010_25",
            "n1_2010_26", "n1_2010_27", "n1_2010_28", "n1_2010_29", "n1_2010_30", "n1_2010_31", "n1_2010_32", "n1_2010_33", "n1_2010_34", "n1_2010_35",
            "n1_2010_36", "n1_2010_37", "n1_2010_38", "n1_2010_39", "n1_2010_40",
            "n1_2010_41", "n1_2010_42", "n1_2010_43", "n1_2010_44", "n1_2010_45",
            "n1_2010_46", "n1_2010_47", "n1_2010_48", "n1_2010_49",
            "n1_2010_50", "n1_2010_51", "n1_2010_52", "n1_2010_53", "n1_2010_54", "n1_2010_55", "n1_2010_56", "n1_2010_57", "n1_2010_58",
            "n1_2010_59", "n1_2010_60", "n1_2010_61", "n1_2010_62",
            "n1_2010_63", "n1_2010_64", "n1_2010_65",
            "n1_2010_66", "n1_2010_67", "n1_2010_68", "n1_2010_69",
            "n1_2010_70", "n1_2010_71"
        ]
    },

    // --- ĐỀ THI N1 (THÁNG 12/2010) - MỚI ---
    {
        id: "n1_de_2010_12",
        cap_do: "N1",
        tieu_de: "Đề thi thử N1 - Tháng 12/2010 (Mondai 1-7)",
        danh_sach_cau_hoi: [
            "n1_2010_12_1", "n1_2010_12_2", "n1_2010_12_3", "n1_2010_12_4", "n1_2010_12_5", "n1_2010_12_6",
            "n1_2010_12_7", "n1_2010_12_8", "n1_2010_12_9", "n1_2010_12_10", "n1_2010_12_11", "n1_2010_12_12", "n1_2010_12_13",
            "n1_2010_12_14", "n1_2010_12_15", "n1_2010_12_16", "n1_2010_12_17", "n1_2010_12_18", "n1_2010_12_19",
            "n1_2010_12_20", "n1_2010_12_21", "n1_2010_12_22", "n1_2010_12_23", "n1_2010_12_24", "n1_2010_12_25",
            "n1_2010_12_26", "n1_2010_12_27", "n1_2010_12_28", "n1_2010_12_29", "n1_2010_12_30", "n1_2010_12_31", "n1_2010_12_32", "n1_2010_12_33", "n1_2010_12_34", "n1_2010_12_35",
            "n1_2010_12_36", "n1_2010_12_37", "n1_2010_12_38", "n1_2010_12_39", "n1_2010_12_40",
            "n1_2010_12_41", "n1_2010_12_42", "n1_2010_12_43", "n1_2010_12_44", "n1_2010_12_45"
        ]
    }
];
