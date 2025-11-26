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
// 2. KHO BÀI HỌC (TỪ VỰNG & NGỮ PHÁP - 25 BÀI)
// ======================================================
const KHO_BAI_HOC = [
    
    // --- MÔ-ĐUN 1: GIỚI THIỆU & CƠ BẢN VỀ DANH TỪ ---

    // BÀI 1: TÔI LÀ...
    { 
        id: "n5_tv_1", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 1: TÔI LÀ... - Từ vựng", 
        noi_dung: `<h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3><table class="bang-tu-vung"><thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead><tbody><tr><td>わたし</td><td>watashi</td><td>Tôi</td><td>Dùng cho cả nam và nữ</td></tr><tr><td>あなた</td><td>anata</td><td>Bạn, Anh/Chị</td><td>Nên dùng tên + さん</td></tr><tr><td>あのひと</td><td>ano hito</td><td>Người đó, Vị đó</td><td>Lịch sự: あのかた</td></tr><tr><td>〜さん</td><td>~san</td><td>Ông/Bà/Anh/Chị</td><td>Hậu tố chỉ người</td></tr><tr><td>せんせい</td><td>sensei</td><td>Giáo viên</td><td>Không dùng cho mình</td></tr><tr><td>がくせい</td><td>gakusei</td><td>Học sinh, Sinh viên</td><td></td></tr><tr><td>かいしゃいん</td><td>kaishain</td><td>Nhân viên công ty</td><td></td></tr><tr><td>しゃいん</td><td>shain</td><td>Nhân viên</td><td>Kèm tên công ty</td></tr><tr><td>エンジニア</td><td>enjinia</td><td>Kỹ sư</td><td></td></tr><tr><td>ベトナム</td><td>Betonamu</td><td>Việt Nam</td><td></td></tr><tr><td>アメリカ</td><td>Amerika</td><td>Mỹ</td><td></td></tr><tr><td>〜ご</td><td>~go</td><td>Tiếng (ngôn ngữ)</td><td>VD: Nihon-go</td></tr></tbody></table>` 
    },
    { 
        id: "n5_np_1", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 1: TÔI LÀ... - Ngữ pháp", 
        noi_dung: `<h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3><table class="bang-tu-vung"><thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead><tbody><tr><td>1. N1 は N2 です</td><td>Khẳng định: N1 là N2. は (wa) là trợ từ chủ đề.</td><td>わたし は ホアン です。</td></tr><tr><td>2. N1 は N2 じゃありません</td><td>Phủ định: N1 không phải là N2.</td><td>わたし は せんせい じゃありません。</td></tr><tr><td>3. N1 は N2 ですか</td><td>Nghi vấn: N1 có phải là N2 không? Thêm か.</td><td>あなた は ベトナム人 ですか。</td></tr><tr><td>4. N1 も N2 です</td><td>Cũng là: Dùng も thay cho は.</td><td>リーさん も がくせい です。</td></tr><tr><td>5. N1 の N2</td><td>Sở hữu: N2 của N1.</td><td>FPT の しゃいん。</td></tr></tbody></table>` 
    },

    // BÀI 2: CÁI NÀY LÀ GÌ?
    { 
        id: "n5_tv_2", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 2: CÁI NÀY LÀ GÌ? - Từ vựng", 
        noi_dung: `<h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3><table class="bang-tu-vung"><thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead><tbody><tr><td>これ</td><td>kore</td><td>Cái này</td><td>Vật gần người nói</td></tr><tr><td>それ</td><td>sore</td><td>Cái đó</td><td>Vật gần người nghe</td></tr><tr><td>あれ</td><td>are</td><td>Cái kia</td><td>Vật xa cả hai</td></tr><tr><td>この〜</td><td>kono</td><td>~ này</td><td>Bổ nghĩa cho N</td></tr><tr><td>その〜</td><td>sono</td><td>~ đó</td><td>Bổ nghĩa cho N</td></tr><tr><td>あの〜</td><td>ano</td><td>~ kia</td><td>Bổ nghĩa cho N</td></tr><tr><td>ほん</td><td>hon</td><td>Sách</td><td></td></tr><tr><td>ざっし</td><td>zasshi</td><td>Tạp chí</td><td></td></tr><tr><td>かぎ</td><td>kagi</td><td>Chìa khóa</td><td></td></tr><tr><td>とけい</td><td>tokei</td><td>Đồng hồ</td><td></td></tr><tr><td>じどうしゃ</td><td>jidousha</td><td>Xe ô tô</td><td></td></tr><tr><td>いくら</td><td>ikura</td><td>Bao nhiêu tiền</td><td></td></tr><tr><td>なん</td><td>nan</td><td>Cái gì</td><td>Dùng trước です/ですか</td></tr><tr><td>なんの N</td><td>nan no N</td><td>N gì</td><td>Dùng trước の</td></tr></tbody></table>` 
    },
    { 
        id: "n5_np_2", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 2: CÁI NÀY LÀ GÌ? - Ngữ pháp", 
        noi_dung: `<h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3><table class="bang-tu-vung"><thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead><tbody><tr><td>1. これ/それ/あれ は N です</td><td>Chỉ định từ làm chủ ngữ. Không cần N đi kèm.</td><td>これ は じどうしゃ です。</td></tr><tr><td>2. この/その/あの N は S です</td><td>Bổ nghĩa cho danh từ. Phải có N đi kèm.</td><td>この ほん は わたし の です。</td></tr><tr><td>3. S は なん ですか</td><td>Hỏi cái gì. Dùng なん (nani/nan).</td><td>それ は なん ですか。</td></tr><tr><td>4. N1 は N2 の N3 です</td><td>Sở hữu/Thuộc tính chi tiết.</td><td>この とけい は ドイツ の カメラ の です。</td></tr><tr><td>5. そうです / そうじゃありません</td><td>Trả lời xác nhận ngắn gọn.</td><td>はい、そうです。 / いいえ、そうじゃありません。</td></tr></tbody></table>` 
    },

    // BÀI 3: ĐỊA ĐIỂM & VỊ TRÍ
    { 
        id: "n5_tv_3", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 3: ĐỊA ĐIỂM - Từ vựng", 
        noi_dung: `<h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3><table class="bang-tu-vung"><thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead><tbody><tr><td>ここ</td><td>koko</td><td>Chỗ này, Đây</td><td>Gần người nói</td></tr><tr><td>そこ</td><td>soko</td><td>Chỗ đó, Đó</td><td>Gần người nghe</td></tr><tr><td>あそこ</td><td>asoko</td><td>Chỗ kia, Kia</td><td>Xa cả hai</td></tr><tr><td>どこ</td><td>doko</td><td>Ở đâu</td><td>Từ hỏi</td></tr><tr><td>うえ</td><td>ue</td><td>Trên</td><td></td></tr><tr><td>した</td><td>shita</td><td>Dưới</td><td></td></tr><tr><td>なか</td><td>naka</td><td>Trong</td><td></td></tr><tr><td>そと</td><td>soto</td><td>Ngoài</td><td></td></tr><tr><td>まえ</td><td>mae</td><td>Trước</td><td></td></tr><tr><td>うしろ</td><td>ushiro</td><td>Sau</td><td></td></tr><tr><td>みぎ</td><td>migi</td><td>Bên phải</td><td></td></tr><tr><td>ひだり</td><td>hidari</td><td>Bên trái</td><td></td></tr><tr><td>となり</td><td>tonari</td><td>Bên cạnh</td><td></td></tr><tr><td>ちかく</td><td>chikaku</td><td>Gần</td><td></td></tr><tr><td>としょかん</td><td>toshokan</td><td>Thư viện</td><td></td></tr><tr><td>うけつけ</td><td>uketsuke</td><td>Quầy lễ tân</td><td></td></tr></tbody></table>` 
    },
    { 
        id: "n5_np_3", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 3: ĐỊA ĐIỂM - Ngữ pháp", 
        noi_dung: `<h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3><table class="bang-tu-vung"><thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead><tbody><tr><td>1. N1 は どこ ですか</td><td>Hỏi địa điểm của N1.</td><td>トイレ は どこ ですか。</td></tr><tr><td>2. N1 は N2 です</td><td>Khẳng định vị trí: N1 ở N2.</td><td>会議室 は ３階 です。</td></tr><tr><td>3. N1 は N2 の N3 です</td><td>Vị trí chi tiết (trên, dưới...).</td><td>本 は つくえ の うえ です。</td></tr><tr><td>4. お国 は どちら ですか</td><td>Hỏi lịch sự về quốc tịch/nơi chốn.</td><td>お国 は どちら ですか。</td></tr></tbody></table>` 
    },

    // BÀI 4: THỜI GIAN & NGÀY THÁNG
    { 
        id: "n5_tv_4", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 4: THỜI GIAN - Từ vựng", 
        noi_dung: `<h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3><table class="bang-tu-vung"><thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead><tbody><tr><td>いま</td><td>ima</td><td>Bây giờ</td><td></td></tr><tr><td>〜じ</td><td>~ji</td><td>Mấy giờ</td><td>VD: いちじ (1 giờ)</td></tr><tr><td>〜ふん / ぷん</td><td>~fun / pun</td><td>Mấy phút</td><td>Biến âm: 1,3,4,6,8,10</td></tr><tr><td>はん</td><td>han</td><td>Rưỡi (30 phút)</td><td>VD: いちじはん</td></tr><tr><td>ごぜん</td><td>gozen</td><td>Sáng, AM</td><td></td></tr><tr><td>ごご</td><td>gogo</td><td>Chiều, PM</td><td></td></tr><tr><td>なんじ</td><td>nanji</td><td>Mấy giờ</td><td></td></tr><tr><td>なんぷん</td><td>nanpun</td><td>Mấy phút</td><td></td></tr><tr><td>やすみ</td><td>yasumi</td><td>Ngày nghỉ</td><td></td></tr><tr><td>しごと</td><td>shigoto</td><td>Công việc</td><td></td></tr><tr><td>テスト</td><td>tesuto</td><td>Bài kiểm tra</td><td></td></tr><tr><td>ばんごう</td><td>bangō</td><td>Số (điện thoại)</td><td></td></tr><tr><td>なんばん</td><td>nanban</td><td>Số mấy</td><td></td></tr></tbody></table>` 
    },
    { 
        id: "n5_np_4", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 4: THỜI GIAN - Ngữ pháp", 
        noi_dung: `<h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3><table class="bang-tu-vung"><thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead><tbody><tr><td>1. いま、なんじですか</td><td>Hỏi giờ hiện tại.</td><td>ごぜん ９時半 です。</td></tr><tr><td>2. N1 は N2 です</td><td>Thời gian kết thúc (với yasumi/shigoto).</td><td>銀行 は ３時 まで です。</td></tr><tr><td>3. N から N まで</td><td>Từ... đến... (Thời gian/Địa điểm).</td><td>９時 から ５時 まで はたらきます。</td></tr><tr><td>4. N1 と N2</td><td>Liệt kê đầy đủ (Và).</td><td>土曜日 と 日曜日 です。</td></tr><tr><td>5. N1 は N2 ですね</td><td>Xác nhận thông tin (Nhỉ/Đúng không).</td><td>会議 は １０時 です ね。</td></tr></tbody></table>` 
    },

    // BÀI 5: CHỦ THỂ & ĐỐI TƯỢNG (Gà/Wo)
    { 
        id: "n5_tv_5", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 5: CÓ/THÍCH - Từ vựng", 
        noi_dung: `<h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3><table class="bang-tu-vung"><thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead><tbody><tr><td>わかります</td><td>wakarimasu</td><td>Hiểu</td><td></td></tr><tr><td>あります</td><td>arimasu</td><td>Có (vật vô tri/cây)</td><td></td></tr><tr><td>います</td><td>imasu</td><td>Có (người/động vật)</td><td></td></tr><tr><td>すき (な)</td><td>suki</td><td>Thích</td><td>Tính từ Na</td></tr><tr><td>きらい (な)</td><td>kirai</td><td>Ghét, Không thích</td><td>Tính từ Na</td></tr><tr><td>じょうず (な)</td><td>jōzu</td><td>Giỏi</td><td>Không dùng cho mình</td></tr><tr><td>へた (な)</td><td>heta</td><td>Dở, Kém</td><td>Tính từ Na</td></tr><tr><td>おんなのひと</td><td>onna no hito</td><td>Phụ nữ</td><td></td></tr><tr><td>おとこのひと</td><td>otoko no hito</td><td>Đàn ông</td><td></td></tr><tr><td>こども</td><td>kodomo</td><td>Trẻ con</td><td></td></tr><tr><td>くだもの</td><td>kudamono</td><td>Trái cây</td><td></td></tr><tr><td>パン</td><td>pan</td><td>Bánh mì</td><td></td></tr></tbody></table>` 
    },
    { 
        id: "n5_np_5", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 5: CÓ/THÍCH - Ngữ pháp", 
        noi_dung: `<h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3><table class="bang-tu-vung"><thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead><tbody><tr><td>1. N が あります/います</td><td>Sự tồn tại. が chỉ chủ thể.</td><td>私 は 車 が あります。</td></tr><tr><td>2. N が すき/きらい...</td><td>Đối tượng của cảm xúc/năng lực. Dùng が.</td><td>わたし は おんがく が すき です。</td></tr><tr><td>3. どんな N</td><td>Hỏi về tính chất/loại của N.</td><td>どんな スポーツ が 好きですか。</td></tr><tr><td>4. あまり + Phủ Định</td><td>Không... lắm (Mức độ).</td><td>あまり 好き じゃありません。</td></tr><tr><td>5. ぜんぜん + Phủ Định</td><td>Hoàn toàn không (Mức độ mạnh).</td><td>おかねが ぜんぜん ありません。</td></tr></tbody></table>` 
    },

    // --- MÔ-ĐUN 2: ĐỘNG TỪ & HÀNH ĐỘNG ---

    // BÀI 6: ĐỘNG TỪ THỂ MASU
    { 
        id: "n5_tv_6", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 6: ĐỘNG TỪ - Từ vựng", 
        noi_dung: `<h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3><table class="bang-tu-vung"><thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Loại ĐT</th></tr></thead><tbody><tr><td>いきます</td><td>ikimasu</td><td>Đi</td><td>Nhóm I</td></tr><tr><td>きます</td><td>kimasu</td><td>Đến</td><td>Nhóm III</td></tr><tr><td>かえります</td><td>kaerimasu</td><td>Trở về, về nhà</td><td>Nhóm I</td></tr><tr><td>たべます</td><td>tabemasu</td><td>Ăn</td><td>Nhóm II</td></tr><tr><td>のみます</td><td>nomimasu</td><td>Uống</td><td>Nhóm I</td></tr><tr><td>みます</td><td>mimasu</td><td>Xem, nhìn</td><td>Nhóm II</td></tr><tr><td>ききます</td><td>kikimasu</td><td>Nghe</td><td>Nhóm I</td></tr><tr><td>よみます</td><td>yomimasu</td><td>Đọc</td><td>Nhóm I</td></tr><tr><td>ねます</td><td>nemasu</td><td>Ngủ</td><td>Nhóm II</td></tr><tr><td>べんきょうします</td><td>benkyō shimasu</td><td>Học</td><td>Nhóm III</td></tr><tr><td>あさ</td><td>asa</td><td>Buổi sáng</td><td>-</td></tr><tr><td>ひる</td><td>hiru</td><td>Buổi trưa</td><td>-</td></tr><tr><td>よる</td><td>yoru</td><td>Buổi tối</td><td>-</td></tr><tr><td>やすみ</td><td>yasumi</td><td>Ngày nghỉ</td><td>-</td></tr></tbody></table>` 
    },
    { 
        id: "n5_np_6", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 6: ĐỘNG TỪ - Ngữ pháp", 
        noi_dung: `<h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3><table class="bang-tu-vung"><thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead><tbody><tr><td>1. Chia động từ Masu</td><td>Hiện tại(ます), Phủ định(ません), Quá khứ(ました), PĐQK(ませんでした).</td><td>あした、はたらきます。/ きのう、はたらきませんでした。</td></tr><tr><td>2. N に V</td><td>Thời điểm cụ thể / Điểm đến.</td><td>９時に ねます。</td></tr><tr><td>3. N を V</td><td>Tân ngữ chịu tác động.</td><td>コーヒー を のみます。</td></tr><tr><td>4. どこ へ/に いきますか</td><td>Hỏi điểm đến. へ chỉ hướng.</td><td>どこへ いきましたか。</td></tr><tr><td>5. N で V</td><td>Nơi chốn xảy ra hành động.</td><td>レストラン で たべます。</td></tr></tbody></table>` 
    },

    // BÀI 7: PHƯƠNG TIỆN & ĐI CÙNG
    { 
        id: "n5_tv_7", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 7: PHƯƠNG TIỆN - Từ vựng", 
        noi_dung: `<h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3><table class="bang-tu-vung"><thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead><tbody><tr><td>でんしゃ</td><td>densha</td><td>Tàu điện</td><td></td></tr><tr><td>バス</td><td>basu</td><td>Xe buýt</td><td></td></tr><tr><td>タクシー</td><td>takushī</td><td>Taxi</td><td></td></tr><tr><td>ひこうき</td><td>hikōki</td><td>Máy bay</td><td></td></tr><tr><td>ふね</td><td>fune</td><td>Thuyền, tàu thủy</td><td></td></tr><tr><td>あるいて</td><td>aruite</td><td>Đi bộ</td><td>Đặc biệt</td></tr><tr><td>ともだち</td><td>tomodachi</td><td>Bạn bè</td><td></td></tr><tr><td>ひとり</td><td>hitori</td><td>Một mình</td><td></td></tr><tr><td>だれ</td><td>dare</td><td>Ai</td><td></td></tr><tr><td>いつ</td><td>itsu</td><td>Khi nào</td><td></td></tr><tr><td>たんじょうび</td><td>tanjōbi</td><td>Sinh nhật</td><td></td></tr><tr><td>たいへん</td><td>taihen</td><td>Vất vả</td><td></td></tr></tbody></table>` 
    },
    { 
        id: "n5_np_7", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 7: PHƯƠNG TIỆN - Ngữ pháp", 
        noi_dung: `<h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3><table class="bang-tu-vung"><thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead><tbody><tr><td>1. N で V</td><td>Phương tiện. (Đi bộ dùng aruite không で).</td><td>飛行機 で 行きます。</td></tr><tr><td>2. だれ と V</td><td>Đi cùng ai. Một mình dùng "hitori de".</td><td>家族 と 来ました。/ ひとり で 行きます。</td></tr><tr><td>3. いつ V-ますか</td><td>Hỏi thời gian. Không dùng に.</td><td>いつ 行きましたか。</td></tr><tr><td>4. お国 から V</td><td>Từ đâu (Xuất phát điểm).</td><td>ベトナム から きました。</td></tr><tr><td>5. N は どうでしたか</td><td>Hỏi cảm tưởng quá khứ.</td><td>日本の生活 は どうでしたか。</td></tr></tbody></table>` 
    },

    // BÀI 8: TRAO & NHẬN
    { 
        id: "n5_tv_8", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 8: TRAO NHẬN - Từ vựng", 
        noi_dung: `<h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3><table class="bang-tu-vung"><thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead><tbody><tr><td>かいます</td><td>kaimasu</td><td>Mua</td><td>Nhóm I</td></tr><tr><td>とります</td><td>torimasu</td><td>Chụp (ảnh)</td><td>Nhóm I</td></tr><tr><td>かきます</td><td>kakimasu</td><td>Viết</td><td>Nhóm I</td></tr><tr><td>おしえます</td><td>oshiemasu</td><td>Dạy, chỉ bảo</td><td>Nhóm II</td></tr><tr><td>てがみ</td><td>tegami</td><td>Thư</td><td></td></tr><tr><td>レポート</td><td>repōto</td><td>Báo cáo</td><td></td></tr><tr><td>え</td><td>e</td><td>Tranh, Ảnh</td><td></td></tr><tr><td>しゅくだい</td><td>shukudai</td><td>Bài tập về nhà</td><td></td></tr><tr><td>おかね</td><td>okane</td><td>Tiền</td><td></td></tr><tr><td>ごめんください</td><td>gomen kudasai</td><td>Xin lỗi, tôi vào được không?</td><td>Đến nhà người khác</td></tr><tr><td>いらっしゃい</td><td>irasshai</td><td>Chào mừng</td><td>Đón khách</td></tr></tbody></table>` 
    },
    { 
        id: "n5_np_8", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 8: TRAO NHẬN - Ngữ pháp", 
        noi_dung: `<h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3><table class="bang-tu-vung"><thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead><tbody><tr><td>1. N を V</td><td>Tân ngữ trực tiếp (Ôn tập).</td><td>カメラ を かいます。</td></tr><tr><td>2. N に V</td><td>Đối tượng nhận (cho ai, dạy ai...).</td><td>先生 に メール を かきました。</td></tr><tr><td>3. なに を V-ますか</td><td>Hỏi cái gì.</td><td>なに を たべますか。</td></tr><tr><td>4. どこ で V-ますか</td><td>Hỏi ở đâu.</td><td>どこで かいましたか。</td></tr><tr><td>5. いっしょに V-ませんか</td><td>Rủ rê lịch sự.</td><td>いっしょに 見 ませんか。</td></tr></tbody></table>` 
    },

    // BÀI 9: MỤC ĐÍCH
    { 
        id: "n5_tv_9", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 9: MỤC ĐÍCH - Từ vựng", 
        noi_dung: `<h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3><table class="bang-tu-vung"><thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead><tbody><tr><td>あいます</td><td>aimasu</td><td>Gặp</td><td>Dùng trợ từ に</td></tr><tr><td>けっこんします</td><td>kekkon shimasu</td><td>Kết hôn</td><td>Nhóm III</td></tr><tr><td>かいもの</td><td>kaimono</td><td>Mua sắm</td><td>Danh từ</td></tr><tr><td>しょくじ</td><td>shokuji</td><td>Bữa ăn</td><td>Danh từ</td></tr><tr><td>パーティ</td><td>pāti</td><td>Bữa tiệc</td><td></td></tr><tr><td>サッカー</td><td>sakkā</td><td>Bóng đá</td><td></td></tr><tr><td>おはなみ</td><td>ohanami</td><td>Ngắm hoa anh đào</td><td></td></tr><tr><td>びょういん</td><td>byōin</td><td>Bệnh viện</td><td></td></tr><tr><td>こんげつ</td><td>kongetsu</td><td>Tháng này</td><td></td></tr><tr><td>らいげつ</td><td>raigetsu</td><td>Tháng sau</td><td></td></tr></tbody></table>` 
    },
    { 
        id: "n5_np_9", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 9: MỤC ĐÍCH - Ngữ pháp", 
        noi_dung: `<h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3><table class="bang-tu-vung"><thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead><tbody><tr><td>1. V(bỏ mas)/N に 行きます</td><td>Đi để làm gì (Mục đích).</td><td>買い物 に 行きます。</td></tr><tr><td>2. N に いきます</td><td>Mục đích dùng Danh từ hành động.</td><td>パーティー に 行きます。</td></tr><tr><td>3. どこ へ V に いきますか</td><td>Hỏi đi đâu để làm gì.</td><td>どこへ 映画 を 見 に 行きますか。</td></tr><tr><td>4. N に あいます</td><td>Gặp ai (Dùng に).</td><td>先生 に 会います。</td></tr></tbody></table>` 
    },

    // BÀI 10: LIỆT KÊ
    { 
        id: "n5_tv_10", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 10: LIỆT KÊ - Từ vựng", 
        noi_dung: `<h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3><table class="bang-tu-vung"><thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead><tbody><tr><td>あります</td><td>arimasu</td><td>Có (vật vô tri)</td><td></td></tr><tr><td>います</td><td>imasu</td><td>Có (người, động vật)</td><td></td></tr><tr><td>いろいろ</td><td>iroiro</td><td>Nhiều loại</td><td></td></tr><tr><td>たいせつ (な)</td><td>taisetsu (na)</td><td>Quan trọng</td><td>Tính từ Na</td></tr><tr><td>てんき</td><td>tenki</td><td>Thời tiết</td><td></td></tr><tr><td>あめ</td><td>ame</td><td>Mưa</td><td></td></tr><tr><td>ゆき</td><td>yuki</td><td>Tuyết</td><td></td></tr><tr><td>しんぶん</td><td>shinbun</td><td>Báo</td><td></td></tr><tr><td>コーヒー</td><td>kōhī</td><td>Cà phê</td><td></td></tr><tr><td>みかん</td><td>mikan</td><td>Quýt</td><td></td></tr><tr><td>など</td><td>nado</td><td>Vân vân</td><td>Dùng liệt kê</td></tr></tbody></table>` 
    },
    { 
        id: "n5_np_10", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 10: LIỆT KÊ - Ngữ pháp", 
        noi_dung: `<h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3><table class="bang-tu-vung"><thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead><tbody><tr><td>1. N1 や N2 など</td><td>Liệt kê tiêu biểu (Và... vân vân).</td><td>ほん や ざっし など。</td></tr><tr><td>2. N が V</td><td>Chủ ngữ với tự động từ (Có/Hiểu).</td><td>先生 が います。</td></tr><tr><td>3. N を あげます/もらいます</td><td>Cho và Nhận.</td><td>お金 を あげます。</td></tr><tr><td>4. N1 は N2 が あります</td><td>Sở hữu (N1 có N2).</td><td>わたし は 車 が あります。</td></tr></tbody></table>` 
    },

    // BÀI 11: TÍNH TỪ ĐUÔI I
    { 
        id: "n5_tv_11", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 11: TÍNH TỪ ĐUÔI I - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Loại TT</th></tr></thead>
                <tbody>
                    <tr><td>たかい</td><td>takai</td><td>Cao (giá/chiều cao)</td><td>I</td></tr>
                    <tr><td>やすい</td><td>yasui</td><td>Rẻ</td><td>I</td></tr>
                    <tr><td>おおきい</td><td>ōkii</td><td>Lớn, To</td><td>I</td></tr>
                    <tr><td>ちいさい</td><td>chiisai</td><td>Nhỏ, Bé</td><td>I</td></tr>
                    <tr><td>あたらしい</td><td>atarashii</td><td>Mới</td><td>I</td></tr>
                    <tr><td>ふるい</td><td>furui</td><td>Cũ</td><td>I</td></tr>
                    <tr><td>あつい</td><td>atsui</td><td>Nóng (thời tiết/đồ vật)</td><td>I</td></tr>
                    <tr><td>さむい</td><td>samui</td><td>Lạnh (thời tiết)</td><td>I</td></tr>
                    <tr><td>おいしい</td><td>oishii</td><td>Ngon</td><td>I</td></tr>
                    <tr><td>むずかしい</td><td>muzukashii</td><td>Khó</td><td>I</td></tr>
                    <tr><td>やさしい</td><td>yasashii</td><td>Dễ, Hiền lành</td><td>I</td></tr>
                    <tr><td>いい / よい</td><td>ii / yoi</td><td>Tốt</td><td>I</td></tr>
                    <tr><td>きせつ</td><td>kisetsu</td><td>Mùa</td><td>-</td></tr>
                    <tr><td>はる</td><td>haru</td><td>Mùa xuân</td><td>-</td></tr>
                    <tr><td>なつ</td><td>natsu</td><td>Mùa hè</td><td>-</td></tr>
                </tbody>
            </table>` 
    },
    { 
        id: "n5_np_11", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 11: TÍNH TỪ ĐUÔI I - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead>
                <tbody>
                    <tr><td>1. TT(i) です</td><td>Khẳng định: Giữ nguyên đuôi い.</td><td>このかばんは たかい です。</td></tr>
                    <tr><td>2. TT(i) + N</td><td>Bổ nghĩa cho Danh từ.</td><td>おおきい かばん を 買いました。</td></tr>
                    <tr><td>3. TT(i) (bỏ い) くないです</td><td>Phủ định: Bỏ い thêm くないです.</td><td>この食べ物 は おいしくない です。</td></tr>
                    <tr><td>4. TT(i) (bỏ い) かったです</td><td>Quá khứ: Bỏ い thêm かったです.</td><td>きのう、天気 は よかったです。</td></tr>
                    <tr><td>5. N は どうですか</td><td>Hỏi về ấn tượng/tính chất.</td><td>日本の生活 は どうですか。</td></tr>
                </tbody>
            </table>` 
    },

    // BÀI 12: TÍNH TỪ ĐUÔI NA
    { 
        id: "n5_tv_12", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 12: TÍNH TỪ ĐUÔI NA - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Loại TT</th></tr></thead>
                <tbody>
                    <tr><td>しんせつ (な)</td><td>shinsetsu (na)</td><td>Tốt bụng, Tử tế</td><td>NA</td></tr>
                    <tr><td>げんき (な)</td><td>genki (na)</td><td>Khỏe mạnh</td><td>NA</td></tr>
                    <tr><td>べんり (な)</td><td>benri (na)</td><td>Tiện lợi</td><td>NA</td></tr>
                    <tr><td>ふべん (な)</td><td>fuben (na)</td><td>Bất tiện</td><td>NA</td></tr>
                    <tr><td>ゆうめい (な)</td><td>yūmei (na)</td><td>Nổi tiếng</td><td>NA</td></tr>
                    <tr><td>きれい (な)</td><td>kirei (na)</td><td>Đẹp, Sạch sẽ</td><td>NA</td></tr>
                    <tr><td>ハンサム (な)</td><td>hansamu (na)</td><td>Đẹp trai</td><td>NA</td></tr>
                    <tr><td>ひま (な)</td><td>hima (na)</td><td>Rảnh rỗi</td><td>NA</td></tr>
                    <tr><td>ざんねん (な)</td><td>zannen (na)</td><td>Đáng tiếc</td><td>NA</td></tr>
                    <tr><td>いろいろ (な)</td><td>iroiro (na)</td><td>Nhiều loại, Đa dạng</td><td>NA</td></tr>
                    <tr><td>まち</td><td>machi</td><td>Thị trấn, Phố phường</td><td>-</td></tr>
                    <tr><td>たてもの</td><td>tatemono</td><td>Tòa nhà</td><td>-</td></tr>
                </tbody>
            </table>` 
    },
    { 
        id: "n5_np_12", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 12: TÍNH TỪ ĐUÔI NA - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead>
                <tbody>
                    <tr><td>1. TT(na) です</td><td>Khẳng định: Bỏ な.</td><td>あの人は 親切 です。</td></tr>
                    <tr><td>2. TT(na) な N</td><td>Bổ nghĩa cho Danh từ: Giữ nguyên な.</td><td>きれいな 写真 を 見ました。</td></tr>
                    <tr><td>3. TT(na) じゃありません</td><td>Phủ định: Bỏ な thêm じゃありません.</td><td>この街は 静か じゃありません。</td></tr>
                    <tr><td>4. TT(na) じゃありませんでした</td><td>Phủ định Quá khứ.</td><td>きのう、ひま じゃありませんでした。</td></tr>
                    <tr><td>5. TT(na) で、S2</td><td>Nối hai tính từ (TT NA).</td><td>ホアンさんは ハンサムで、親切です。</td></tr>
                </tbody>
            </table>` 
    },

    // BÀI 13: SO SÁNH & CỰC HÌNH
    { 
        id: "n5_tv_13", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 13: SO SÁNH - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead>
                <tbody>
                    <tr><td>どちら</td><td>dochira</td><td>Cái nào (trong hai)</td><td></td></tr>
                    <tr><td>もっと</td><td>motto</td><td>Hơn nữa</td><td></td></tr>
                    <tr><td>ずっと</td><td>zutto</td><td>Hơn hẳn, Hoàn toàn</td><td></td></tr>
                    <tr><td>いちばん</td><td>ichiban</td><td>Nhất, Số một</td><td></td></tr>
                    <tr><td>だんぜん</td><td>danzen</td><td>Tuyệt đối (nhất)</td><td></td></tr>
                    <tr><td>やきゅう</td><td>yakyū</td><td>Bóng chày</td><td></td></tr>
                    <tr><td>きゅうぎ</td><td>kyūgi</td><td>Môn thể thao dùng bóng</td><td></td></tr>
                    <tr><td>りょうり</td><td>ryōri</td><td>Món ăn</td><td></td></tr>
                    <tr><td>さむさ</td><td>samusa</td><td>Cái lạnh</td><td></td></tr>
                    <tr><td>くに</td><td>kuni</td><td>Đất nước</td><td></td></tr>
                    <tr><td>せかい</td><td>sekai</td><td>Thế giới</td><td></td></tr>
                </tbody>
            </table>` 
    },
    { 
        id: "n5_np_13", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 13: SO SÁNH - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead>
                <tbody>
                    <tr><td>1. A は B より TT です</td><td>So sánh hơn: A hơn B.</td><td>新幹線 は バス より はやい です。</td></tr>
                    <tr><td>2. A と B と、どちらが...</td><td>Hỏi chọn lựa giữa hai vật.</td><td>サッカー と 野球 と、どちらが 好きですか。</td></tr>
                    <tr><td>3. N の中で S が いちばん...</td><td>So sánh nhất: S là nhất trong N.</td><td>寿司が いちばん おいしいです。</td></tr>
                    <tr><td>4. ずっと/もっと</td><td>Phó từ bổ nghĩa: Hơn hẳn / Hơn nữa.</td><td>わたしのカメラ は あなたのより ずっと いい です。</td></tr>
                </tbody>
            </table>` 
    },

    // BÀI 14: CHO VÀ NHẬN
    { 
        id: "n5_tv_14", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 14: CHO VÀ NHẬN - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead>
                <tbody>
                    <tr><td>あげます</td><td>agemasu</td><td>Cho, Tặng</td><td>Nhóm II</td></tr>
                    <tr><td>もらいます</td><td>moraimasu</td><td>Nhận</td><td>Nhóm I</td></tr>
                    <tr><td>くれます</td><td>kuremasu</td><td>Cho (ai đó cho mình)</td><td>Nhóm II</td></tr>
                    <tr><td>おくりもの</td><td>okurimono</td><td>Quà tặng</td><td></td></tr>
                    <tr><td>メッセージ</td><td>messēji</td><td>Tin nhắn</td><td></td></tr>
                    <tr><td>かぞく</td><td>kazoku</td><td>Gia đình</td><td></td></tr>
                    <tr><td>おみやげ</td><td>omiyage</td><td>Quà lưu niệm</td><td></td></tr>
                    <tr><td>プレゼント</td><td>purezento</td><td>Quà</td><td></td></tr>
                    <tr><td>クリスマス</td><td>kurisumasu</td><td>Giáng sinh</td><td></td></tr>
                    <tr><td>だれ</td><td>dare</td><td>Ai</td><td></td></tr>
                    <tr><td>なに</td><td>nani</td><td>Cái gì</td><td></td></tr>
                </tbody>
            </table>` 
    },
    { 
        id: "n5_np_14", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 14: CHO VÀ NHẬN - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead>
                <tbody>
                    <tr><td>1. A は B に N を あげます</td><td>A Cho B.</td><td>わたし は 友達 に 本 を あげます。</td></tr>
                    <tr><td>2. B は A に N を もらいます</td><td>B Nhận từ A.</td><td>わたし は 先生 に 花 を もらいました。</td></tr>
                    <tr><td>3. A は わたし に N を くれます</td><td>A Cho Tôi (hoặc người nhà mình).</td><td>友達 は わたしに おみやげ を くれました。</td></tr>
                    <tr><td>4. なに を もらいましたか</td><td>Hỏi về vật được nhận.</td><td>誰に、なにを もらいましたか。</td></tr>
                </tbody>
            </table>` 
    },

    // BÀI 15: TRẠNG THÁI ĐANG DIỄN RA
    { 
        id: "n5_tv_15", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 15: TRẠNG THÁI - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead>
                <tbody>
                    <tr><td>しります</td><td>shirimasu</td><td>Biết</td><td>Nhóm I</td></tr>
                    <tr><td>けっこんします</td><td>kekkon shimasu</td><td>Kết hôn</td><td>Nhóm III</td></tr>
                    <tr><td>すみます</td><td>sumimasu</td><td>Sống, sinh sống</td><td>Nhóm I</td></tr>
                    <tr><td>もちます</td><td>mochimasu</td><td>Mang, có (sở hữu)</td><td>Nhóm I</td></tr>
                    <tr><td>もう</td><td>mō</td><td>Đã (rồi)</td><td></td></tr>
                    <tr><td>まだ</td><td>mada</td><td>Vẫn (chưa)</td><td></td></tr>
                    <tr><td>まいにち</td><td>mainichi</td><td>Hàng ngày</td><td></td></tr>
                    <tr><td>せんもん</td><td>senmon</td><td>Chuyên môn</td><td></td></tr>
                    <tr><td>でんわ</td><td>denwa</td><td>Điện thoại</td><td></td></tr>
                    <tr><td>どこ</td><td>doko</td><td>Ở đâu</td><td></td></tr>
                </tbody>
            </table>` 
    },
    { 
        id: "n5_np_15", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 15: TRẠNG THÁI - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead>
                <tbody>
                    <tr><td>1. V-て います (Tiếp diễn)</td><td>Hành động đang diễn ra.</td><td>今、テレビ を 見て います。</td></tr>
                    <tr><td>2. V-て います (Kết quả)</td><td>Trạng thái kéo dài sau hành động.</td><td>わたしは 結婚 して います。</td></tr>
                    <tr><td>3. もう V-ましたか</td><td>Hỏi đã làm xong chưa.</td><td>もう 宿題を し ましたか。</td></tr>
                    <tr><td>4. N の V</td><td>Mục đích của Danh từ.</td><td>これは わたし の カメラ です。</td></tr>
                </tbody>
            </table>` 
    },

    // --- MÔ-ĐUN 4: THỂ TE VÀ MỆNH LỆNH ---

    // BÀI 16: CHIA ĐỘNG TỪ SANG THỂ TE (V-て)
    { 
        id: "n5_tv_16", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 16: THỂ TE - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Loại ĐT</th></tr></thead>
                <tbody>
                    <tr><td>おしえます</td><td>oshiemasu</td><td>Dạy, chỉ bảo</td><td>Nhóm II</td></tr>
                    <tr><td>もちます</td><td>mochimasu</td><td>Mang, cầm</td><td>Nhóm I</td></tr>
                    <tr><td>とります</td><td>torimasu</td><td>Lấy, chuyền</td><td>Nhóm I</td></tr>
                    <tr><td>けします</td><td>keshimasu</td><td>Tắt (điện, máy)</td><td>Nhóm I</td></tr>
                    <tr><td>あけます</td><td>akemasu</td><td>Mở</td><td>Nhóm II</td></tr>
                    <tr><td>まど</td><td>mado</td><td>Cửa sổ</td><td></td></tr>
                    <tr><td>でんき</td><td>denki</td><td>Điện</td><td></td></tr>
                    <tr><td>としをとります</td><td>toshi o torimasu</td><td>Thêm tuổi, già đi</td><td>Đặc biệt</td></tr>
                    <tr><td>しお</td><td>shio</td><td>Muối</td><td></td></tr>
                    <tr><td>しょうゆ</td><td>shōyu</td><td>Nước tương</td><td></td></tr>
                </tbody>
            </table>` 
    },
    { 
        id: "n5_np_16", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 16: THỂ TE - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead>
                <tbody>
                    <tr><td>1. Chia Động từ Thể TE</td><td>Nhóm I (biến âm), Nhóm II (thêm te), Nhóm III (bất quy tắc).</td><td>かいます → かって, たべます → たべて</td></tr>
                    <tr><td>2. V-て ください</td><td>Yêu cầu/Nhờ vả lịch sự.</td><td>しおを とって ください。</td></tr>
                    <tr><td>3. V-て いますか</td><td>Trạng thái & Nghề nghiệp.</td><td>どこに 住んで いますか。</td></tr>
                    <tr><td>4. V-て もいいですか</td><td>Xin phép.</td><td>たばこを 吸っても いいですか。</td></tr>
                </tbody>
            </table>` 
    },

    // BÀI 17: CHO PHÉP VÀ CẤM ĐOÁN
    { 
        id: "n5_tv_17", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 17: CHO PHÉP & CẤM - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead>
                <tbody>
                    <tr><td>すいます</td><td>suimasu</td><td>Hút (thuốc lá)</td><td>Nhóm I</td></tr>
                    <tr><td>つかいます</td><td>tsukaimasu</td><td>Sử dụng</td><td>Nhóm I</td></tr>
                    <tr><td>およぎます</td><td>oyogimasu</td><td>Bơi</td><td>Nhóm I</td></tr>
                    <tr><td>おかねをだします</td><td>okane o dashimasu</td><td>Rút tiền, đưa tiền</td><td>Nhóm I</td></tr>
                    <tr><td>はいります</td><td>hairimasu</td><td>Vào</td><td>Nhóm I</td></tr>
                    <tr><td>でます</td><td>demasu</td><td>Ra, rời khỏi</td><td>Nhóm II</td></tr>
                    <tr><td>きょか</td><td>kyoka</td><td>Sự cho phép</td><td></td></tr>
                    <tr><td>きんし</td><td>kinshi</td><td>Sự cấm đoán</td><td></td></tr>
                    <tr><td>プール</td><td>pūru</td><td>Hồ bơi</td><td></td></tr>
                    <tr><td>ちゅうしゃじょう</td><td>chūshajō</td><td>Bãi đậu xe</td><td></td></tr>
                </tbody>
            </table>` 
    },
    { 
        id: "n5_np_17", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 17: CHO PHÉP & CẤM - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead>
                <tbody>
                    <tr><td>1. V-て もいいです</td><td>Cho phép làm V.</td><td>ここで 写真を とって もいいです。</td></tr>
                    <tr><td>2. V-て は いけません</td><td>Cấm đoán tuyệt đối.</td><td>ここ で たばこを 吸って はいけません。</td></tr>
                    <tr><td>3. N1 から V</td><td>Lý do & Nguyên nhân.</td><td>今日は 雨 です から、出かけません。</td></tr>
                    <tr><td>4. V-て、V2</td><td>Nối tiếp hành động theo thứ tự.</td><td>家へ 帰って、ごはんを たべます。</td></tr>
                </tbody>
            </table>` 
    },

    // BÀI 18: KINH NGHIỆM ĐÃ TỪNG
    { 
        id: "n5_tv_18", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 18: KINH NGHIỆM - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead>
                <tbody>
                    <tr><td>のぼります</td><td>noborimasu</td><td>Leo, Trèo</td><td>Nhóm I</td></tr>
                    <tr><td>とまります</td><td>tomarimasu</td><td>Trọ, Ở lại</td><td>Nhóm I</td></tr>
                    <tr><td>うたいます</td><td>utaimasu</td><td>Hát</td><td>Nhóm I</td></tr>
                    <tr><td>わすれます</td><td>wasuremasu</td><td>Quên</td><td>Nhóm II</td></tr>
                    <tr><td>たいせつ</td><td>taisetsu</td><td>Quan trọng</td><td></td></tr>
                    <tr><td>おまつり</td><td>omatsuri</td><td>Lễ hội</td><td></td></tr>
                    <tr><td>かいがい</td><td>kaigai</td><td>Nước ngoài</td><td></td></tr>
                    <tr><td>ふじさん</td><td>Fuji-san</td><td>Núi Phú Sĩ</td><td></td></tr>
                    <tr><td>まだ</td><td>mada</td><td>Vẫn (chưa)</td><td></td></tr>
                    <tr><td>ぜひ</td><td>zehi</td><td>Nhất định, Bằng mọi giá</td><td>Phó từ</td></tr>
                </tbody>
            </table>` 
    },
    { 
        id: "n5_np_18", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 18: KINH NGHIỆM - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead>
                <tbody>
                    <tr><td>1. V-た ことがあります</td><td>Kinh nghiệm đã từng làm trong quá khứ.</td><td>わたしは 富士山 に 登った ことが あります。</td></tr>
                    <tr><td>2. N1 や N2 など</td><td>Liệt kê ví dụ (ôn tập).</td><td>お寿司 や ラーメン など を 食べました。</td></tr>
                    <tr><td>3. V-たり V-たり します</td><td>Liệt kê hành động không theo thứ tự.</td><td>本 を 読んだり、音楽 を 聞いたり します。</td></tr>
                    <tr><td>4. TT(i)/TT(na) な</td><td>Nối tính từ.</td><td>このカメラは 小さくて、安いです。</td></tr>
                </tbody>
            </table>` 
    },

    // BÀI 19: KẾT NỐI TÍNH TỪ VÀ TRẠNG THÁI
    { 
        id: "n5_tv_19", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 19: KẾT NỐI - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead>
                <tbody>
                    <tr><td>いそがしい</td><td>isogashii</td><td>Bận rộn</td><td>TT(i)</td></tr>
                    <tr><td>さびしい</td><td>sabishii</td><td>Buồn, cô đơn</td><td>TT(i)</td></tr>
                    <tr><td>たいへん (な)</td><td>taihen (na)</td><td>Vất vả, Khổ sở</td><td>TT(na)</td></tr>
                    <tr><td>かぜ</td><td>kaze</td><td>Gió, Cảm lạnh</td><td></td></tr>
                    <tr><td>からだ</td><td>karada</td><td>Cơ thể</td><td></td></tr>
                    <tr><td>きぶん</td><td>kibun</td><td>Tâm trạng, Cảm xúc</td><td></td></tr>
                    <tr><td>ふく</td><td>fuku</td><td>Quần áo</td><td></td></tr>
                    <tr><td>かいしゃ</td><td>kaisha</td><td>Công ty</td><td></td></tr>
                    <tr><td>むかし</td><td>mukashi</td><td>Ngày xưa, Xưa kia</td><td></td></tr>
                </tbody>
            </table>` 
    },
    { 
        id: "n5_np_19", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 19: KẾT NỐI - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead>
                <tbody>
                    <tr><td>1. TT(i) (bỏ い) くて</td><td>Nối Tính từ I (liên kết/nguyên nhân).</td><td>北海道は 涼しくて、きれいです。</td></tr>
                    <tr><td>2. TT(na) で / N で</td><td>Nối Tính từ NA và Danh từ.</td><td>彼女は 優しくて、親切です。</td></tr>
                    <tr><td>3. どうやって V-ますか</td><td>Hỏi Cách thức.</td><td>どうやって この言葉 を 覚えましたか。</td></tr>
                    <tr><td>4. N に なります</td><td>Trở nên/Trở thành N.</td><td>わたしは 先生 に なりました。</td></tr>
                </tbody>
            </table>` 
    },

    // BÀI 20: CHUẨN BỊ & HOÀN TẤT
    { 
        id: "n5_tv_20", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 20: HOÀN TẤT - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead>
                <tbody>
                    <tr><td>つかれます</td><td>tsukaremasu</td><td>Mệt</td><td>Nhóm II</td></tr>
                    <tr><td>かたづけます</td><td>katazukemasu</td><td>Dọn dẹp</td><td>Nhóm II</td></tr>
                    <tr><td>ごみ</td><td>gomi</td><td>Rác</td><td></td></tr>
                    <tr><td>ようい</td><td>yōi</td><td>Chuẩn bị</td><td></td></tr>
                    <tr><td>りょこう</td><td>ryokō</td><td>Du lịch</td><td></td></tr>
                    <tr><td>チケット</td><td>chiketto</td><td>Vé</td><td>(Từ mượn)</td></tr>
                    <tr><td>えいご</td><td>eigo</td><td>Tiếng Anh</td><td></td></tr>
                    <tr><td>おさら</td><td>osara</td><td>Cái đĩa</td><td></td></tr>
                    <tr><td>まだ</td><td>mada</td><td>Vẫn (giữ nguyên)</td><td></td></tr>
                    <tr><td>そのまま</td><td>sono mama</td><td>Cứ để như thế</td><td></td></tr>
                </tbody>
            </table>` 
    },
    { 
        id: "n5_np_20", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 20: HOÀN TẤT - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead>
                <tbody>
                    <tr><td>1. V-て おきます</td><td>Chuẩn bị/Để sẵn/Giữ nguyên trạng thái.</td><td>旅行の前に、チケット を 買っておきます。</td></tr>
                    <tr><td>2. V-て しまいます</td><td>Hoàn thành (xong xuôi) / Hối tiếc.</td><td>もう 宿題 を して しまいました。</td></tr>
                    <tr><td>3. V-て から</td><td>Sau khi V (theo thứ tự).</td><td>歯 を 磨いて から、寝ます。</td></tr>
                    <tr><td>4. TT(na) / N + に なります</td><td>Trở nên/Trở thành (ôn tập).</td><td>部屋が きれいに なりました。</td></tr>
                </tbody>
            </table>` 
    },

    // --- MÔ-ĐUN 5: CẤU TRÚC CÂU PHỨC HỢP & THỂ THÔNG THƯỜNG ---

    // BÀI 21: THỂ THÔNG THƯỜNG
    { 
        id: "n5_tv_21", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 21: THỂ THÔNG THƯỜNG - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead>
                <tbody>
                    <tr><td>あめ</td><td>ame</td><td>Mưa</td><td></td></tr>
                    <tr><td>ゆき</td><td>yuki</td><td>Tuyết</td><td></td></tr>
                    <tr><td>くもり</td><td>kumori</td><td>Trời nhiều mây</td><td></td></tr>
                    <tr><td>しゅっちょう</td><td>shucchō</td><td>Đi công tác</td><td></td></tr>
                    <tr><td>おふろ</td><td>ofuro</td><td>Bồn tắm, bồn nước nóng</td><td></td></tr>
                    <tr><td>はし</td><td>hashi</td><td>Đũa</td><td></td></tr>
                    <tr><td>ナイフ</td><td>naifu</td><td>Dao</td><td>(Từ mượn)</td></tr>
                    <tr><td>フォーク</td><td>fōku</td><td>Dĩa</td><td>(Từ mượn)</td></tr>
                    <tr><td>けいざい</td><td>keizai</td><td>Kinh tế</td><td></td></tr>
                    <tr><td>ぼうし</td><td>bōshi</td><td>Mũ, nón</td><td></td></tr>
                    <tr><td>どう</td><td>dō</td><td>Thế nào</td><td></td></tr>
                    <tr><td>なに</td><td>nani</td><td>Cái gì</td><td></td></tr>
                </tbody>
            </table>` 
    },
    { 
        id: "n5_np_21", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 21: THỂ THÔNG THƯỜNG - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead>
                <tbody>
                    <tr><td>1. Động từ Thể Thường (ふつう形)</td><td>Dùng trong văn nói thân mật. V-る (Từ điển), V-ない (Phủ định), V-た (Quá khứ), V-なかった (PĐ Quá khứ).</td><td>する (làm), しない (không làm), した (đã làm), しなかった (đã không làm)</td></tr>
                    <tr><td>2. Tính từ & Danh từ Thể Thường</td><td>TT(i): Giữ nguyên/bỏ い+くない. TT(na)/N: Bỏ だ/じゃない.</td><td>たかい (cao), ひま (rảnh)</td></tr>
                    <tr><td>3. S1 (TT) けど S2</td><td>Kết nối câu (nhưng).</td><td>英語がわかるけど、日本語はわからない。</td></tr>
                    <tr><td>4. S1 (V-る) とき、S2</td><td>Khi S1 xảy ra thì S2.</td><td>ねる とき、電気を けします。</td></tr>
                    <tr><td>5. S1 から S2</td><td>Lý do (Vì).</td><td>今日は 寒い から、出かけない。</td></tr>
                </tbody>
            </table>` 
    },

    // BÀI 22: DANH TỪ HÓA VÀ TRUYỀN ĐẠT
    { 
        id: "n5_tv_22", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 22: DANH TỪ HÓA - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead>
                <tbody>
                    <tr><td>ひく</td><td>hiku</td><td>Chơi (nhạc cụ)</td><td>Nhóm I</td></tr>
                    <tr><td>あめがふる</td><td>ame ga furu</td><td>Trời mưa</td><td>Nhóm I</td></tr>
                    <tr><td>おもいます</td><td>omoimasu</td><td>Nghĩ, cho rằng</td><td>Nhóm I</td></tr>
                    <tr><td>いいます</td><td>iimasu</td><td>Nói, gọi là</td><td>Nhóm I</td></tr>
                    <tr><td>しんじます</td><td>shinjimasu</td><td>Tin tưởng</td><td>Nhóm II</td></tr>
                    <tr><td>ニュース</td><td>nyūsu</td><td>Tin tức</td><td>(Từ mượn)</td></tr>
                    <tr><td>ピアノ</td><td>piano</td><td>Đàn piano</td><td>(Từ mượn)</td></tr>
                    <tr><td>りょこう</td><td>ryokō</td><td>Du lịch</td><td></td></tr>
                    <tr><td>しゅみ</td><td>shumi</td><td>Sở thích</td><td></td></tr>
                    <tr><td>むり</td><td>muri</td><td>Vô lý, quá sức</td><td></td></tr>
                </tbody>
            </table>` 
    },
    { 
        id: "n5_np_22", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 22: DANH TỪ HÓA - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead>
                <tbody>
                    <tr><td>1. V-る の / V-た の</td><td>Danh từ hóa mệnh đề.</td><td>わたしの 趣味 は ピアノを ひく の です。</td></tr>
                    <tr><td>2. N (thông thường) / V-る / V-た と おもいます</td><td>Biểu thị suy nghĩ, quan điểm (Nghĩ rằng...).</td><td>あしたは 雨が 降ると おもいます。</td></tr>
                    <tr><td>3. N (thông thường) / V-る / V-た と いいます</td><td>Truyền đạt lời nói (Nói rằng...).</td><td>ホアンさん は 「あした 休む」 と いっていました。</td></tr>
                    <tr><td>4. TT(i) / TT(na) / N (thông thường) + でしょ</td><td>Xác nhận thông tin (Đúng không?).</td><td>きのう、ひま だった でしょ。</td></tr>
                </tbody>
            </table>` 
    },

    // BÀI 23: CÂU ĐIỀU KIỆN
    { 
        id: "n5_tv_23", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 23: CÂU ĐIỀU KIỆN - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead>
                <tbody>
                    <tr><td>おくれます</td><td>okuremasu</td><td>Trễ, muộn</td><td>Nhóm II</td></tr>
                    <tr><td>はれます</td><td>haremasu</td><td>Trời quang đãng, tạnh</td><td>Nhóm II</td></tr>
                    <tr><td>たかい</td><td>takai</td><td>Đắt (tiền)</td><td>TT(i)</td></tr>
                    <tr><td>べんり (な)</td><td>benri (na)</td><td>Tiện lợi</td><td>TT(na)</td></tr>
                    <tr><td>えき</td><td>eki</td><td>Nhà ga</td><td></td></tr>
                    <tr><td>けいたい</td><td>keitai</td><td>Điện thoại di động</td><td></td></tr>
                    <tr><td>じかん</td><td>jikan</td><td>Thời gian</td><td></td></tr>
                    <tr><td>びょうき</td><td>byōki</td><td>Bệnh tật</td><td></td></tr>
                    <tr><td>いそぐ</td><td>isogu</td><td>Khẩn trương, vội</td><td>Nhóm I</td></tr>
                    <tr><td>ねつ</td><td>netsu</td><td>Sốt</td><td></td></tr>
                </tbody>
            </table>` 
    },
    { 
        id: "n5_np_23", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 23: CÂU ĐIỀU KIỆN - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead>
                <tbody>
                    <tr><td>1. V-た / TT(i) (bỏ い) かった / TT(na) だった / N だった + ら</td><td>Câu điều kiện (Nếu/Sau khi).</td><td>あめが 降ったら、行きません。 (Nếu mưa...) / 仕事が 終わったら、ご飯を食べます。 (Sau khi xong việc...)</td></tr>
                    <tr><td>2. N なら</td><td>Câu điều kiện (Nếu là N).</td><td>日本 なら、秋 が いちばん いいです。</td></tr>
                    <tr><td>3. V-て も</td><td>Cho dù/Dù V.</td><td>あめが 降っても、出かけます。</td></tr>
                    <tr><td>4. S1 (V-る) まえに S2</td><td>Trước khi V.</td><td>寝る まえに、本を 読みます。</td></tr>
                </tbody>
            </table>` 
    },

    // BÀI 24: GIẢ ĐỊNH & LÝ DO
    { 
        id: "n5_tv_24", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 24: GIẢ ĐỊNH & LÝ DO - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead>
                <tbody>
                    <tr><td>たいせつ</td><td>taisetsu</td><td>Quan trọng</td><td>TT(na)</td></tr>
                    <tr><td>かぜ</td><td>kaze</td><td>Gió, cảm lạnh</td><td></td></tr>
                    <tr><td>しんぱい (な)</td><td>shinpai (na)</td><td>Lo lắng</td><td>TT(na)</td></tr>
                    <tr><td>けいけん</td><td>keiken</td><td>Kinh nghiệm</td><td></td></tr>
                    <tr><td>ひつよう</td><td>hitsuyō</td><td>Cần thiết</td><td>TT(na)</td></tr>
                    <tr><td>やめます</td><td>yamemasu</td><td>Bỏ, nghỉ, từ bỏ</td><td>Nhóm II</td></tr>
                    <tr><td>きゅうりょう</td><td>kyūryō</td><td>Lương</td><td></td></tr>
                    <tr><td>ふくざつ (な)</td><td>fukuzatsu (na)</td><td>Phức tạp</td><td>TT(na)</td></tr>
                    <tr><td>じゅぎょう</td><td>jugyō</td><td>Giờ học, tiết học</td><td></td></tr>
                </tbody>
            </table>` 
    },
    { 
        id: "n5_np_24", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 24: GIẢ ĐỊNH & LÝ DO - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead>
                <tbody>
                    <tr><td>1. TT(thường) / N な + のに</td><td>Dù... nhưng... (Trái với dự đoán).</td><td>この パソコンは 高い のに、遅い です。</td></tr>
                    <tr><td>2. TT(thường) / N な + ので</td><td>Lý do & Nguyên nhân (Do/Vì - nhẹ nhàng).</td><td>先生 が やさしい ので、好き です。</td></tr>
                    <tr><td>3. V-る / N / N の とき</td><td>Khi (thời điểm).</td><td>ネクタイを しめる とき、鏡を 見ます。</td></tr>
                    <tr><td>4. TT(i) / TT(na) (bỏ な) + そうです</td><td>Truyền đạt thông tin (Nghe nói là...).</td><td>天気予報 で 雨が 降る そうです。</td></tr>
                </tbody>
            </table>` 
    },

    // BÀI 25: KHẢ NĂNG & Ý CHÍ
    { 
        id: "n5_tv_25", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 25: KHẢ NĂNG & Ý CHÍ - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead>
                <tbody>
                    <tr><td>できます</td><td>dekimasu</td><td>Có thể</td><td>Nhóm II</td></tr>
                    <tr><td>なおします</td><td>naoshimasu</td><td>Sửa chữa</td><td>Nhóm I</td></tr>
                    <tr><td>たてます</td><td>tatemasu</td><td>Xây dựng</td><td>Nhóm II</td></tr>
                    <tr><td>みえます</td><td>miemasu</td><td>Nhìn thấy (tự nhiên)</td><td>Nhóm II</td></tr>
                    <tr><td>きこえます</td><td>kikoemasu</td><td>Nghe thấy (tự nhiên)</td><td>Nhóm II</td></tr>
                    <tr><td>しけん</td><td>shiken</td><td>Kỳ thi, bài kiểm tra</td><td></td></tr>
                    <tr><td>ゆめ</td><td>yume</td><td>Ước mơ, giấc mơ</td><td></td></tr>
                    <tr><td>おとな</td><td>otona</td><td>Người lớn</td><td></td></tr>
                    <tr><td>こえ</td><td>koe</td><td>Giọng nói, tiếng nói</td><td></td></tr>
                    <tr><td>じゆう</td><td>jiyū</td><td>Tự do</td><td></td></tr>
                </tbody>
            </table>` 
    },
    { 
        id: "n5_np_25", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 25: KHẢ NĂNG & Ý CHÍ - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead>
                <tbody>
                    <tr><td>1. N が V-れます (Động từ Thể Khả Năng)</td><td>Khả năng thực hiện hành động. Dùng が thay cho を.</td><td>わたし は 日本語 が 話せます。</td></tr>
                    <tr><td>2. N が V-たい です</td><td>Ý muốn (Muốn làm gì). Dùng が thay cho を.</td><td>わたし は 新しい かばん が 買いたい です。</td></tr>
                    <tr><td>3. N が みえます / きこえます</td><td>Nhìn thấy/Nghe thấy (Tự nhiên).</td><td>遠くに 山が 見えます。</td></tr>
                    <tr><td>4. V-る のに N / V</td><td>Mục đích sử dụng (Để làm gì...).</td><td>この 車 は 旅行 に 便利です。</td></tr>
                    <tr><td>5. N しか V-ません</td><td>Chỉ (giới hạn). Luôn đi kèm phủ định.</td><td>わたしは １００円 しか ありません。</td></tr>
                </tbody>
            </table>` 
    }
];

// ======================================================
// 3. KHO BÀI TẬP (NƠI CHỨA CÂU HỎI - N5 & N1)
// ======================================================
const KHO_BAI_TAP = [
    // --- BÀI TẬP N5 ---
    { id: "n5_bt_1", cap_do: "N5", loai: "TuVung", tieu_de: "Từ vựng N5 - Bộ 1", cau_hoi: "Con mèo tiếng Nhật là gì?", lua_chon: ["Neko", "Inu", "Tori", "Ushi"], dap_an_dung: "Neko" },
    { id: "n5_bt_2", cap_do: "N5", loai: "TuVung", tieu_de: "Từ vựng N5 - Bộ 1", cau_hoi: "Số 1 tiếng Nhật là gì?", lua_chon: ["Ni", "San", "Ichi", "Yon"], dap_an_dung: "Ichi" },
    { id: "n5_bt_3", cap_do: "N5", loai: "TuVung", tieu_de: "Từ vựng N5 - Bộ 1", cau_hoi: "Màu đỏ là?", lua_chon: ["Ao", "Aka", "Shiro", "Kuro"], dap_an_dung: "Aka" },
    { id: "n5_bt_4", cap_do: "N5", loai: "TuVung", tieu_de: "Từ vựng N5 - Bộ 1", cau_hoi: "Quả táo là?", lua_chon: ["Ringo", "Mikan", "Suika", "Banana"], dap_an_dung: "Ringo" },
    { id: "n5_bt_5", cap_do: "N5", loai: "TuVung", tieu_de: "Từ vựng N5 - Bộ 1", cau_hoi: "Học sinh là?", lua_chon: ["Sensei", "Gakusei", "Kaishain", "Isha"], dap_an_dung: "Gakusei" },
    { id: "n5_bt_6", cap_do: "N5", loai: "NguPhap", tieu_de: "Ngữ pháp N5 - Bộ 1", cau_hoi: "わたし ___ がくせいです。", lua_chon: ["を", "は", "に", "で"], dap_an_dung: "は" },
    { id: "n5_bt_7", cap_do: "N5", loai: "NguPhap", tieu_de: "Ngữ pháp N5 - Bộ 1", cau_hoi: "これは わたし ___ ほんです。", lua_chon: ["の", "に", "は", "を"], dap_an_dung: "の" },
    { id: "n5_bt_8", cap_do: "N5", loai: "NguPhap", tieu_de: "Ngữ pháp N5 - Bộ 1", cau_hoi: "図書館は ___ ですか。", lua_chon: ["だれ", "いつ", "どこ", "なん"], dap_an_dung: "どこ" },
    { id: "n5_bt_9", cap_do: "N5", loai: "NguPhap", tieu_de: "Ngữ pháp N5 - Bộ 1", cau_hoi: "日曜日 ___ 行きます。", lua_chon: ["に", "で", "を", "は"], dap_an_dung: "に" },
    { id: "n5_bt_10", cap_do: "N5", loai: "NguPhap", tieu_de: "Ngữ pháp N5 - Bộ 1", cau_hoi: "バス ___ 帰ります。", lua_chon: ["で", "に", "を", "と"], dap_an_dung: "で" },

    // --- BÀI TẬP N1 (THÁNG 7/2010) ---
    { id: "n1_2010_1", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (7/2010)", cau_hoi: "駅前の店はどこも<u>繁盛</u>している。", lua_chon: ["びんしょう", "びんじょう", "はんしょう", "はんじょう"], dap_an_dung: "はんじょう" },
    { id: "n1_2010_2", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (7/2010)", cau_hoi: "<u>契約</u>の内容については、こちらの書類をご覧ください。", lua_chon: ["せいやく", "けいやく", "こうやく", "ようやく"], dap_an_dung: "けいやく" },
    { id: "n1_2010_3", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (7/2010)", cau_hoi: "この国は、昔から貿易によって<u>潤って</u>きた。", lua_chon: ["もうかって", "まかなって", "あきなって", "うるおって"], dap_an_dung: "うるおって" },
    { id: "n1_2010_4", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (7/2010)", cau_hoi: "警備が<u>手薄</u>なところがないか調べた。", lua_chon: ["しゅうす", "しゅはく", "てうす", "てはく"], dap_an_dung: "てうす" },
    { id: "n1_2010_5", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (7/2010)", cau_hoi: "開発のために古いビルが次々と<u>壊されて</u>いる。", lua_chon: ["こわされて", "くずされて", "たおされて", "つぶされて"], dap_an_dung: "こわされて" },
    { id: "n1_2010_6", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (7/2010)", cau_hoi: "オリンピックが<u>華々しく</u>開幕した。", lua_chon: ["はなばなしく", "おもおもしく", "ものものしく", "そうぞうしく"], dap_an_dung: "はなばなしく" },
    { id: "n1_2010_7", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Từ vựng (7/2010)", cau_hoi: "この連載小説は全12話で（　　）する。", lua_chon: ["静止", "成就", "完結", "終息"], dap_an_dung: "完結" },
    { id: "n1_2010_8", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Từ vựng (7/2010)", cau_hoi: "会議で質問に答えられなくて困っていたら、課長が（　　）してくれた。", lua_chon: ["キープ", "フォロー", "マッチ", "アップ"], dap_an_dung: "フォロー" },
    { id: "n1_2010_9", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Từ vựng (7/2010)", cau_hoi: "この春、とうとう（　　）のマイホームを手に入れた。", lua_chon: ["切望", "欲望", "念願", "志願"], dap_an_dung: "念願" },
    { id: "n1_2010_10", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Từ vựng (7/2010)", cau_hoi: "会議ではA案に賛成したが、（　　）を言えばB案の方がいいと思う。", lua_chon: ["本音", "本気", "弱音", "弱気"], dap_an_dung: "本音" },
    { id: "n1_2010_11", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Từ vựng (7/2010)", cau_hoi: "先方に協力を依頼したが、（　　）断られてしまった。", lua_chon: ["しんなり", "やんわり", "うんざり", "ひんやり"], dap_an_dung: "やんわり" },
    { id: "n1_2010_12", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Từ vựng (7/2010)", cau_hoi: "（　　）ホテルでは全室禁煙です。", lua_chon: ["自", "主", "実", "当"], dap_an_dung: "当" },
    { id: "n1_2010_13", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Từ vựng (7/2010)", cau_hoi: "新しいビジネスを始めるにあたっては、（　　）計画を立てる必要がある。", lua_chon: ["零細な", "綿密な", "繊細な", "濃密な"], dap_an_dung: "綿密な" },
    { id: "n1_2010_14", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Đồng nghĩa (7/2010)", cau_hoi: "彼はお金に関して<u>ルーズ</u>なところがある。", lua_chon: ["ずうずうしい", "だらしない", "うるさい", "よわい"], dap_an_dung: "だらしない" },
    { id: "n1_2010_15", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Đồng nghĩa (7/2010)", cau_hoi: "この職場にもかなり<u>なじん</u>できた。", lua_chon: ["恵まれて", "逆らって", "飽きて", "慣れて"], dap_an_dung: "慣れて" },
    { id: "n1_2010_16", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Đồng nghĩa (7/2010)", cau_hoi: "あの兄弟はいつもお互いに<u>張り合っている</u>。", lua_chon: ["競争して", "応援して", "無視して", "尊重して"], dap_an_dung: "競争して" },
    { id: "n1_2010_17", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Đồng nghĩa (7/2010)", cau_hoi: "ある日、我が家に<u>朗報</u>が届いた。", lua_chon: ["意外な知らせ", "うれしい知らせ", "大切な知らせ", "めずらしい知らせ"], dap_an_dung: "うれしい知らせ" },
    { id: "n1_2010_18", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Đồng nghĩa (7/2010)", cau_hoi: "やっと<u>わずらわしい</u>作業から解放された。", lua_chon: ["地味な", "苦手な", "面倒な", "退屈な"], dap_an_dung: "面倒な" },
    { id: "n1_2010_19", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Đồng nghĩa (7/2010)", cau_hoi: "さっき、上司に<u>いやみ</u>を言われた。", lua_chon: ["不満", "冗談", "愚痴", "皮肉"], dap_an_dung: "皮肉" },
    { id: "n1_2010_20", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Cách dùng từ (7/2010)", cau_hoi: "Cách dùng đúng của: <u>密集</u>", lua_chon: ["この地区は古い住宅が密集している。", "会議のメンバーを密集している。", "有名な歌手が密集している。", "外国の切手を密集している。"], dap_an_dung: "この地区は古い住宅が密集している。" },
    { id: "n1_2010_21", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Cách dùng từ (7/2010)", cau_hoi: "Cách dùng đúng của: <u>潔い</u>", lua_chon: ["潔く謝ったほうがいいよ。", "自分は無実だ、潔い。", "潔く説明だけですませた。", "潔くなるまでしっかり手を洗いましょう。"], dap_an_dung: "潔く謝ったほうがいいよ。" },
    { id: "n1_2010_22", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Cách dùng từ (7/2010)", cau_hoi: "Cách dùng đúng của: <u>発足</u>", lua_chon: ["発足した問題について検討します。", "新技術を発足したおかげで", "この団体は先月発足したばかりです。", "新しい週刊誌を発足する。"], dap_an_dung: "この団体は先月発足したばかりです。" },
    { id: "n1_2010_23", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Cách dùng từ (7/2010)", cau_hoi: "Cách dùng đúng của: <u>にぎわう</u>", lua_chon: ["サラリーマンでにぎわっている。", "どこのレストランもにぎわっている。", "緑でにぎわっている。", "本がにぎわっている。"], dap_an_dung: "どこのレストランもにぎわっている。" },
    { id: "n1_2010_24", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Cách dùng từ (7/2010)", cau_hoi: "Cách dùng đúng của: <u>ひとまず</u>", lua_chon: ["ひとまず動かすと", "ひとまずしか効果がなかった。", "ひとまずたってから", "今日の作業はひとまずこれで終わりにしよう。"], dap_an_dung: "今日の作業はひとまずこれで終わりにしよう。" },
    { id: "n1_2010_25", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Cách dùng từ (7/2010)", cau_hoi: "Cách dùng đúng của: <u>満喫</u>", lua_chon: ["気持ちがとても満喫する。", "アパートの情報が満喫されている。", "久しぶりの休暇を満喫した。", "条件を満喫する人材"], dap_an_dung: "久しぶりの休暇を満喫した。" },
    { id: "n1_2010_26", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (7/2010)", cau_hoi: "この美術館の絵を全部見ようと思ったら、半日（　　）足りないと思います。", lua_chon: ["にわたって", "にかけて", "までは", "では"], dap_an_dung: "では" },
    { id: "n1_2010_27", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (7/2010)", cau_hoi: "部屋の広さも考えず、店員に勧められる（　　）、大きいテーブルを買ってしまった。", lua_chon: ["まま", "ままを", "までも", "ままなのに"], dap_an_dung: "まま" },
    { id: "n1_2010_28", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (7/2010)", cau_hoi: "A会社の元社員が11日、突然の解雇を不当（　　）、解雇取り消しを同社に求める訴えを起こした。", lua_chon: ["となって", "になって", "として", "にして"], dap_an_dung: "として" },
    { id: "n1_2010_29", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (7/2010)", cau_hoi: "下水道工事中、ご不便をおかけ致しますが、どうかご理解（　　）、よろしくお願い申し上げます。", lua_chon: ["いたしたく", "いただきたく", "差し上げたく", "申しあげたく"], dap_an_dung: "いただきたく" },
    { id: "n1_2010_30", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (7/2010)", cau_hoi: "あんなに巨大な建物を、昔の人は機械を使わずに作ったとは、不思議（　　）。", lua_chon: ["てならない", "といけない", "極まりない", "どころではない"], dap_an_dung: "てならない" },
    { id: "n1_2010_31", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (7/2010)", cau_hoi: "A「あ、そっか。どうりて空いてる（　　）。」", lua_chon: ["こともある", "に決まってる", "に違いない", "はずだ"], dap_an_dung: "はずだ" },
    { id: "n1_2010_32", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (7/2010)", cau_hoi: "今回の事件で山田氏の政治的影響力が完全に失われる（　　）、弱まることは間違いないだろう。", lua_chon: ["ことはないにしても", "ことはないにもかかわらず", "ほかはないにしても", "ほかはないにもかかわらず"], dap_an_dung: "ことはないにしても" },
    { id: "n1_2010_33", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (7/2010)", cau_hoi: "「3歳までの育児は母親がすべきだ」と言う人もいるが、子育てをするのが母親で（　　）、必ずしもそうではないと思う。", lua_chon: ["なくてはならないからといって", "なくてはならないかというと", "あるわけにはいかないからといって", "あるわけにはいかないかというと"], dap_an_dung: "なくてはならないかというと" },
    { id: "n1_2010_34", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (7/2010)", cau_hoi: "もう二度と恋（　　）と固く心に誓ったはずだったが、知らず知らずのうちに彼女のことが好きになっていた。", lua_chon: ["こそするものか", "などするものか", "こそするものなのか", "などするものなのか"], dap_an_dung: "などするものか" },
    { id: "n1_2010_35", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Ngữ pháp (7/2010)", cau_hoi: "私の意見書は、プロセスの問題点を指摘（　　）、決定そのものに反対するものではありません。", lua_chon: ["しそうになったにすぎず", "しそうになったほどで", "しようとしたにすぎず", "しようとしたほどで"], dap_an_dung: "しようとしたにすぎず" },
    { id: "n1_2010_36", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Dấu sao (7/2010)", cau_hoi: "このレストランは、＿＿　＿＿　★　＿＿　と評判だ。", lua_chon: ["だけあって", "主人が", "魚屋も経営している", "魚料理がおいしい"], dap_an_dung: "だけあって" },
    { id: "n1_2010_37", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Dấu sao (7/2010)", cau_hoi: "A 「申し訳ない。僕が＿＿　＿＿　★　＿＿　ことになってしまって。」", lua_chon: ["残業してもらう", "ばかりに", "ミスをした", "君にまで"], dap_an_dung: "君にまで" },
    { id: "n1_2010_38", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Dấu sao (7/2010)", cau_hoi: "そもそもこの情報が、責任者である彼に＿＿　＿＿　★　＿＿　と思う。", lua_chon: ["伝わっていない", "のが", "こと", "おかしい"], dap_an_dung: "おかしい" },
    { id: "n1_2010_39", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Dấu sao (7/2010)", cau_hoi: "アルバイト先の仲間は、みんな＿＿　＿＿　★　＿＿　話でいつも盛り上がっています。", lua_chon: ["こともあって", "ならではの", "同世代", "年が近い"], dap_an_dung: "同世代" },
    { id: "n1_2010_40", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Dấu sao (7/2010)", cau_hoi: "ジョン 「この『りかい』という言葉はどういう意味ですか。」<br>アリ「ああ、確か『わかる』＿＿　＿＿　★　＿＿　んですけど。」", lua_chon: ["ような", "と思う", "という", "意味だった"], dap_an_dung: "意味だった" },
    { id: "n1_2010_41", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đục lỗ (7/2010)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>父が父でなくなっている。家族を統合し、理念を掲げ、文化を伝え、社会のルールを教えるという父の役割が消えかけている。<b>（ 41 ）</b>家族はバラバラになって、善悪の感覚のない人間が成長し、全体的視点のない人間や無気力な人間が増えている。<br>（中略）</div><b>41. （　　）に入る最もよいものはどれか。</b>`, lua_chon: ["ところで", "とはいえ", "その結果", "それでも"], dap_an_dung: "その結果" },
    { id: "n1_2010_42", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đục lỗ (7/2010)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>（前略）立派な父が必要とされているのに、その立派な父が育ちにくいのが現代社会である。そもそも「立派」などというものが流行らない世の中なのだ。全体の将来を考えてリーダーシップをとり、取りまとめ、ルールを教えるという「立派な」人格は、尊敬の対象にはなりにくい。あまり立派でない、むしろだらしのないくらいの父親のほうが<b>（ 42 ）</b>。</div><b>42. （　　）に入る最もよいものはどれか。</b>`, lua_chon: ["親しまれることになる", "親しみやすくさえあった", "親しくなるだけのことだ", "親しめるのではなかったか"], dap_an_dung: "親しまれることになる" },
    { id: "n1_2010_43", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đục lỗ (7/2010)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>父でなくなった父の典型が「友だちのような父親」である。彼らは上下の関係を意識的に捨ててしまった。価値観を押しつけることは絶対にしない。何をするのも自由放任である。しかし<b>（ 43 ）</b>は「自由な意志」を持つようにはなるが、「よい意志」を持つようにはならない。</div><b>43. （　　）に入る最もよいものはどれか。</b>`, lua_chon: ["子どもの父", "父の子ども", "このような子どもの父親", "そういう父親の子ども"], dap_an_dung: "そういう父親の子ども" },
    { id: "n1_2010_44", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đục lỗ (7/2010)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>「友だちのような父親」 はじつは<b>（ 44 ）</b>。父とは子どもに文化を伝える者である。伝えるとはある意味では価値観を押しつけることである。上下の関係があり、権威を持っていて初めてそれができる。</div><b>44. （　　）に入る最もよいものはどれか。</b>`, lua_chon: ["父である", "父ではない", "父だったのだ", "父ではないのか"], dap_an_dung: "父ではない" },
    { id: "n1_2010_45", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đục hiểu (7/2010)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>（前略）しかし<b>（ 45 ）</b>の関係では、文化を伝えることも、生活規則、社会規範を教えることもできない。「もの分かりのいい父親」は父の役割を果たすことのできなくなった父と言うべきである。</div><b>45. （　　）に入る最もよいものはどれか。</b>`, lua_chon: ["対等", "上下", "他人", "家族"], dap_an_dung: "対等" },
    { id: "n1_2010_46", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 8-1)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>「コミュニケーション」という言葉はふつう、双方がメッセージを伝え合うこと、あるいは意思を疎通させること、といった意味合いで用いられているが、これはじっさいのコミュニケーションの全体像をとらえてはいない。たとえば、黙して何も語らないこともコミュニケーションの行為であり、また視線の動きやちょっとした仕草だけでも、十分にコミュニケーションは成立する。</div><b>46. コミュニケーションの全体像に最も近いものはどれか。</b>`, lua_chon: ["視線や仕草で相手と意思を疎通させること", "言葉や言葉以外の方法で思いを伝え合うこと", "黙って何も言わないことで思いを伝え合うこと", "言葉を使って相手と意思を疎通させること"], dap_an_dung: "言葉や言葉以外の方法で思いを伝え合うこと" },
    { id: "n1_2010_47", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 8-2)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>ネット社会の匿名性は完全に透明人間の心理です。自分がどこにアクセスしているかなど、みんなにわかってしまうなら、やっても面白くないはずです。それだと制限のある普通の社会と同じだから。ですから、ネット社会の匿名性というのは、心理的には透明人間の世界なのです。しかも初期には規制はほとんどなかった。今でも巨大匿名掲示板「2チャンネル」などでは、犯罪を起こした場合は摘発されますが、そこまでいかなければ、何を書いてもいい社会になっています。</div><b>47. 筆者が考えるネット上の透明人間の世界とは、どのようなものか。</b>`, lua_chon: ["情報の発信者が誰なのかが見えてしまう社会", "犯罪を起こしても誰からも気づかれない社会", "どんな情報を発信しても犯罪にならない社会", "誰がどこに接続しているのかわからない社会"], dap_an_dung: "誰がどこに接続しているのかわからない社会" },
    { id: "n1_2010_48", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 8-3)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'><b>お客様各位</b><br>拝啓<br>　師走の候、ますますご盛栄のこととお喜び申し上げます。日頃より格別のごひいきを賜りありがとうございます。<br>　さて、誠に勝手ながら、弊社は年末年始の下記期間を休業とさせていただきます。休業期間中も弊社ホームページでのお問い合わせ・ご注文は可能ですが、対応はすべて休業明けとなります。お問い合わせへのご回答・商品の発送等に通常より時間がかかりますことをあらかじめご了承下さいますようお願い申し上げます。<br>敬具<br>記<br>2009年12月29日から2010年1月4日まで<br>以上</div><b>48. この文書の件名として、（　　）に入るのはどれか。</b>`, lua_chon: ["回答・発送等の遅れに関するおわび", "休業中のホームページ停止のご案内", "年末年始の休業日のお知らせ", "問い合わせ先の変更について"], dap_an_dung: "年末年始の休業日のお知らせ" },
    { id: "n1_2010_49", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 8-4)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>飲料大手の商品開発担当者が「当たり前の名前では消費者の琴線に触れず、踏み込みすぎると『ふざけている』と思われる。そのバランスを測り、試行錯誤を続けるしかない」と語っていましたが、本音でしょう。でも場当たり的なネーミングでは過激な競争に勝ち抜けません。音に対する感性を磨き、音の表情に敏感になり、何はさておき自社製品を愛し、育てる意欲を持つことがネーミングの前提条件です。</div><b>49. 競争に勝つような商品名にするには、まず何が必要だと述べているか。</b>`, lua_chon: ["音の持つ表情に敏感になり、音と味とのバランスに気を配る。", "自社のイメージを大切に思い、消費者の音の好みを考慮する。", "音と味への感性を磨き、その商品が持つイメージを考慮する。", "開発した商品への思いを大切にし、音の持つ響きに気を配る。"], dap_an_dung: "開発した商品への思いを大切にし、音の持つ響きに気を配る。" },
    { id: "n1_2010_50", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 9-1)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>「あの人は、私が話し始めて一分とたたないうちに、話題を自分の話にすりかえてしまう」と言われる人のなかには、決して聞き上手ではないけれど、不思議と嫌われない人がいる。<br>　話を奪われた人も、「私の話よりずっとおもしろそう。私の話が宙に消えてもしょうがないか」という寛容な気持ちになるのだろう。<br>　もちろん、私は「だから、話上手になればいいんですよ」とは言わない。ただ、「聞き上手でないことが帳消しになるほど話上手な人のしゃべりは、ちょっと研究してみる価値がありますよ」とご提案したい。<br>　聞き上手になるための“修業”をしていると、そのうち話の上手な人の特徴がわかってくると思う。<br>　聞き上手から、話上手でもあるというプラスアルファの魅力を持つ人間へとステップアップするには、いつの間にか相手を自分の話に引きこむのが上手な人の話ぶりを、「それはなぜなのか」と自分なりに分析すると、とても勉強になるのだ。<br>　一人で分析するのが難しければ、だれかに「あの人は話が上手だよね。どんな話しぶりに惹かれる？」と疑問をぶつけてみるのもいい。<br>　その勉強の成果は必ずや、自分の言動に投影されるはずだ。だれだって、他人のいいところは吸収したいという、向上心があるからだ。</div><b>50. 寛容な気持ちになるとあるが、なぜそうなるのか。</b>`, lua_chon: ["相手の話が自分の話よりおもしろくて引きこまれてしまうから", "話を奪ってしまった人の態度が堂々としていて魅力的だから", "自分の代わりに話上手な人が話をしてくれれば助かるから", "相手は確かに話上手だけれど、聞き上手とは言えないから"], dap_an_dung: "相手の話が自分の話よりおもしろくて引きこまれてしまうから" },
    { id: "n1_2010_51", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 9-1)", cau_hoi: `<b>51. 話上手になるにはどうすればいいと筆者は述べているか。</b>`, lua_chon: ["話上手な人になぜ上手なのかと尋ねて分析する。", "どんな話題でも自分の話にかえられるようにする。", "人の真似をしないで、聞き上手になるための研究をする。", "話上手な人をよく観察して、その特徴を自分のものにする。"], dap_an_dung: "話上手な人をよく観察して、その特徴を自分のものにする。" },
    { id: "n1_2010_52", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 9-1)", cau_hoi: `<b>52. 筆者の考えと合っているのはどれか。</b>`, lua_chon: ["聞き上手になるだけでなく、話上手な人にも学んでみるとよい。", "聞き上手は損をすることがあるので、話上手になったほうがよい。", "他人に嫌われないように、話上手より聞き上手になったほうがよい。", "聞き上手から話上手になるには、自分の話し方を分析してみるとよい。"], dap_an_dung: "聞き上手になるだけでなく、話上手な人にも学んでみるとよい。" },
    { id: "n1_2010_53", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 9-2)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>ツバメは季節の変化にあわせて、くらす場所をかえる渡り鳥です。日本が冬の時期は、暖かくてえさの豊富なオーストラリアや東南アジアでくらしています。たまごを産んでひなを育てる繁殖期が近づくと、春になってえさとなる昆虫が一気にふえる日本へ向けて、いのちがけで海を渡ってきます。<br>　ツバメの渡りは地球の南半球から北半球へと、何千キロメートルにもなります。ツバメがいつ渡ってきたかで、ツバメがくらしていた地域や、渡りのルートの気象の変化や環境の変化をおしはかることができます。そして、その変化を長期間にわたって観察をつづけることで、地球全体の気象の変化を予測する手がかりにもなるので、気象庁では、その年にはじめてツバメを見た日「ツバメの初見日」を、各地の観察者や研究者からの報告をもとに、記録をとっているのです。<br>　ツバメが渡りの行動をおこすのは、日照時間にかかわりがあるといわれています。（中略）<br>　日照時間は年ごとの変化が比較的少ないので、日時がそれほどずれることがありませんでした。ところが長年蓄積された記録を調べてみると、近年、各地のツバメの初見日が早まってきていることがわかってきました。その原因は……。<br>　まだはっきりとつきとめられてはいませんが、地球温暖化によっておこる気象の変化が、南の国や、渡りのルート、日本列島の環境に影響をおよぼして、ツバメの行動にくるいがでてきているのかもしれません。</div><b>53. ツバメが日本へ渡ってくるのはなぜか。</b>`, lua_chon: ["南半球でひなが育ち、えさとなる昆虫が不足するから", "日本が春になる頃、ひなが海を渡れるようになるから", "日本が暖かくなるとえさがふえ、子育てがしやすいから", "日本は冬になっても、他の地域より暖かくえさが豊富だから"], dap_an_dung: "日本が暖かくなるとえさがふえ、子育てがしやすいから" },
    { id: "n1_2010_54", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 9-2)", cau_hoi: `<b>54. 「ツバメの初見日」を記録しているのは何のためか。</b>`, lua_chon: ["ツバメの渡りのルートを解明するため", "日照時間の短縮の原因を究明するため", "世界の気象や環境の変化を研究するため", "観察者や研究者に気象情報を提供するため"], dap_an_dung: "世界の気象や環境の変化を研究するため" },
    { id: "n1_2010_55", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 9-2)", cau_hoi: `<b>55. 最近の「ツバメの初見日」と日照時間の関係について正しいものはどれか。</b>`, lua_chon: ["南半球などで日照時間に変化がおきてツバメの渡りが早まっているのだろう。", "温暖化で日本の日照時間が長くなり、ツバメの渡りが遅れてきているようだ。", "ツバメは毎年日照時間と関係なく渡りを始めるようになったのかもしれない。", "日本の日照時間にくるいがでたために、ツバメが早く渡ってくるようになった。"], dap_an_dung: "ツバメは毎年日照時間と関係なく渡りを始めるようになったのかもしれない。" },
    { id: "n1_2010_56", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 9-3)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>消費して費やしてしまう、使って無くしてしまう――どうも消費という言葉のイメージは前向きではないですね。消費者という言葉も、そう。生産者と対比して、消極的イメージがつきまとう。消費者という言葉は、経済用語のなかでもっとも不適切な一つだと私は思います。行為の中身からひどくズレています。<br>　消費と呼ばれている行為は、その中身から言えば、生きていくのに必要なものを使うことですね。私たちは衣食住その他に、さまざまなものを使います。しかし、そのことを「消費」と呼ぶのは正しいか。正しくないと、言うべきです。なぜなら、人は食べ物を食べることによって、自分の身体を生産しているのです。なるほど、食べ物の形は消えてしまいます。しかし、それは私たちの生命としてよみがえっているのです。衣服を身につけることはどうか。それは体温を維持させることによって命をつくり出すだけでなく、他人にあたえる私たちの印象を生産しています。このように、消費と呼ばれている行為は、私たちの命と生活を、そして次の世代の人間を生産する行為です。それなのにそれを消費者と呼ぶのは、物の生産者の側から見た言い方にすぎません。</div><b>56. 行為の中身からひどくズレていますとあるが、筆者は行為の中身をどのように説明しているか。</b>`, lua_chon: ["生産者の立場に立って経済を支えること", "ものを使うことで、何かをつくり出すこと", "生産的な活動に従事して一日を終えること", "ものを使って、その形を消してしまうこと"], dap_an_dung: "ものを使うことで、何かをつくり出すこと" },
    { id: "n1_2010_57", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 9-3)", cau_hoi: `<b>57. 筆者は衣服にどのよう役割があると述べているか。</b>`, lua_chon: ["体温を一定に保つだけでなく、着る人に満足感をあたえる。", "次々に新たな流行を生み出し、人々の消費行動を促進する。", "着る人の人柄や個性を引き出すことで、生活をより充実させる。", "生命を守るだけでなく、他者に対する自分のイメージを創造する。"], dap_an_dung: "生命を守るだけでなく、他者に対する自分のイメージを創造する。" },
    { id: "n1_2010_58", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 9-3)", cau_hoi: `<b>58. 筆者が消費という言葉を不適切と考えているのはなぜか。</b>`, lua_chon: ["言葉のイメージが一般的な用い方と合わないから。", "生産との対立が十分に示されていない言い方だから。", "物を使って無くす行為を消極的に示した言い方だから。", "言葉のイメージがその行為の実態を示していないから。"], dap_an_dung: "言葉のイメージがその行為の実態を示していないから。" },
    // --- MONDAI 10 (Đọc hiểu dài - Tâm lý học) ---
    { 
        id: "n1_2010_59", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 10)", 
        cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>心理学は昔から心について研究してきたわけですが、実は肝心の感情（情動）についてはまだよくわかっていないのです。えっ、感情こそ心理学が得意とするところではないのですか、と①不思議に思われるかもしれません。しかし、現代の心理学が得意としているのは、どちらかというと、私たちが目や耳で周囲の世界をどのようにとらえるかという感覚や知覚の働きであり、どのようにものを考えるかといった認知と呼ばれる働きについてです。そうした働きと感情を一体化した心のプロセスが、私たちの②全体的な「生」の体験なのかもしれません。（中略）<br>　感情は私たちの体験を豊かに裏打ちして、なにかを選んだり、しようとしたりする行動を駆り立てる動因にもなります。例えば、好き嫌いを理屈（論理）で説明することは難しいはずですが、実際の行動は簡単にやれます。ボーイフレンドやガールフレンドを論理や計算だけで選ぶ人はいないはずです。まあ、計算づくで結婚相手を決めようとする人もいるでしょうが、その裏には別の気持ちが動いていそうです。感情は私たちの思考や行動の土台になっていると考えることができそうです。そのため、気持ちの落ち込みがひどいときには、普段何気なくやれていたことができなくなることがあるのです。</div><b>59. ①不思議に思われるとあるが、人々は何を不思議に思うのか。</b>`, 
        lua_chon: ["心理学では感情機能についてまだ十分わかっていないこと", "心理学では認知と感情の関係がまだ解明されていないこと", "心理学は感情の働きを研究するのが得意だということ", "心理学が昔から心について研究してきたということ"], 
        dap_an_dung: "心理学では感情機能についてまだ十分わかっていないこと" 
    },
    { 
        id: "n1_2010_60", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 10)", 
        cau_hoi: `<b>60. 筆者の言う②全体的な「生」の体験とは何か。</b>`, 
        lua_chon: ["心で感じとったことを、そのまま行動に移すような体験", "身の回りの世界を目や耳で認識して考え、心で感じる体験", "どのように周囲を見たり聴いたりして考えるかという体験", "感覚や知覚で周囲の世界のものごとをとらえようとする体験"], 
        dap_an_dung: "身の回りの世界を目や耳で認識して考え、心で感じる体験" 
    },
    { 
        id: "n1_2010_61", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 10)", 
        cau_hoi: `<b>61. この文章では、ロボットを取り上げて何を説明しているか。</b>`, 
        lua_chon: ["ロボットの感情のメカニズムの複雑さ", "最近のロボット工学の進歩のめざましさ", "人間の動作や表情を再現することの難しさ", "人間の感情の働きを解明することの難しさ"], 
        dap_an_dung: "人間の感情の働きを解明することの難しさ" 
    },
    { 
        id: "n1_2010_62", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 10)", 
        cau_hoi: `<b>62. 筆者の述べている感情の働きを以下のようにまとめる場合、（　　）に入るものとして適切なのはどれか。「私たち人間は、感情の働きによって（　　）」</b>`, 
        lua_chon: ["何かをしたいと思い行動を起こす", "ものごとを感覚でとらえようとする", "相手の心を分析して理解しようとする", "好き嫌いを論理的に考え判断する"], 
        dap_an_dung: "何かをしたいと思い行動を起こす" 
    },

    // --- MONDAI 11 (So sánh A & B) ---
    { 
        id: "n1_2010_63", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 11)", 
        cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>
        <b>A</b>　しっかりした人生を歩むには、やはり「学歴」が必要です。そう断言すると眉をひそめる人もいるかもしれません。しかし私には、学歴なんかいらない、あるいは、ほどほどでかまわないという考え方は、中途半端なきれいごとに思えてなりません。学歴がなくて苦労をしたという話は、昔はさんざん聞かされました。最近はあまり言われていないだけで、本当はもっと厳しい選別が行なわれているそうです。（中略）<br>　親ならば、一生を幸せに生きていける、一生、食べるのに困らない「生きる力」を、子供に付けさせるべきです。そして、そのための最良の方法が「学歴を付けさせる」ことだということは、今も昔も、変わりないのではないでしょうか。<br><br>
        <b>B</b>　いったい、学歴とはなにものなのか。<br>　会社は、厳しい過当競争のさなかにあって、実力で勝負しなければならないというのに、そこで働いている人は、入社前に教育を受けた「場所」で評価されるというのは、どう考えても納得がいかない。教育の「質」が問われるのならばまだ解る。「場所」というのは、正常ではない。わずか数年間の学校教育が、以後何十年にもわたって、その人の看板として通用するというのは、奇妙というほかはない。<br>　（中略）ほんの小さなグループから出発した私たちの会社では、何でもやれる人が、それをやる、といった気持ちで仕事をしてきたつもりであったのに、人数が増えてくるに従って、いつとはなしに、学歴による区分といった方式が、なんとなくとり入れられつつある事実に気付いて、はっとしたことがある。
        </div><b>63. AとBの認識で共通しているのは何か。</b>`, 
        lua_chon: ["学歴の重要性は否定できない。", "学歴による区別は実在する。", "学歴よりも実力が重要だ。", "学歴は実益と関係がある。"], 
        dap_an_dung: "学歴による区別は実在する。" 
    },
    { 
        id: "n1_2010_64", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 11)", 
        cau_hoi: `<b>64. 学歴や学校教育について、Bが批判しているのはどのようなことか。</b>`, 
        lua_chon: ["実際の社会では学歴は関係なく、何でもできる人が高く評価されること", "社会人になってからも、どこで学校教育を受けたかが重要視されること", "実際の社会で必要とされる実力が、学校教育では養成されていないこと", "社会的には学歴が重視されているのに、企業ではそれが通用しないこと"], 
        dap_an_dung: "社会人になってからも、どこで学校教育を受けたかが重要視されること" 
    },
    { 
        id: "n1_2010_65", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 11)", 
        cau_hoi: `<b>65. AとBの二つの文章を以下のようにまとめる場合、①と②に入るものの組み合わせとして適切なのはどれか。「Aの筆者は（ ① ）と考えているが、Bの筆者は（ ② ）と考えている。」</b>`, 
        lua_chon: ["①学歴が高ければ高いほどよい　②会社で競争に勝つには学歴は通用しない", "①学歴を得るために苦労が必要だ　②会社は社員の学歴より実力を重視するべきだ", "①学歴は生きていくのに必要なものだ　②会社は社員の学歴より実力を重視するべきだ", "①子供に学歴を付けさせるのは親の役目だ　②社員は専門の知識と学歴の両方が必要だ"], 
        dap_an_dung: "①学歴は生きていくのに必要なものだ　②会社は社員の学歴より実力を重視するべきだ" 
    },

    // --- MONDAI 12 (Đọc hiểu dài - Lương thưởng) ---
    { 
        id: "n1_2010_66", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 12)", 
        cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>給与には外的報酬と内的報酬のふたつがある。<br>　外的報酬とは給与そのものやインセンティブ（賞励金）といった、お金として受け取れるものである。それに対して内的報酬とは、給与の額には表れないが、その仕事を通して得られる満足の報酬といったものである。<br>（中略）<br>　私の場合、外的報酬よりも内的報酬を増やすことを心がけてきた。<br>　たしかに、同僚よりも低く評価されたショックは今でも忘れられないし、同期とのボーナスの差が何十万もあって愕然としたこともあった。<br>　しかし、生活が脅されるほどの額でもないと割り切れば、目に見えない給与を増やすほうが個人的な満足は高いことがわかったのである。<br>　また、仕事を長く続けていくには、内的報酬がちゃんとなくてはつとまらないということもわかってきた。<br>　仕事をなし遂げたときの「達成感」や、自分が成長していることを実感できる「成長感」こそ仕事の原動力であって、他人からの評価という、自分の努力ではいかんともしがたいものにとらわれすぎるのは得策ではないと気づいたのである。<br>　（中略）<br>　どんなに外的報酬が高くても内的報酬が極端に低い仕事だと、長く続けることはできない。また、①そこで得たお金は身につかないことが多い。<br>　いっぽう、内的報酬の高い仕事なら、もしかしたら将来ビッグな報酬に化けるかもしれない。その可能性は充分にあると言っていい。たとえ戻ってこなかったとしても、続けていけるよさはある。<br>　私の友人に、編集部で十年間アルバイトを続けた人がいる。正社員に比べて給与は低く、ボーナスも、退職金ももちろんない。<br>　しかし、その後フリーになった友人は、正社員よりもはるかに多い報酬を得るようになった。アルバイトの十年間で技術を身につけ、人脈を培い、仕事の幅を広げた、②まさに内的報酬が外的報酬へと実を結んでいったのである。<br>　時価で給与を計るより、心の満足を含めたトータルかつ長期の視点で報酬をとらえないと、結局のところ給与は増えていかないのだと思う。</div><b>66. 外的報酬と内的報酬の説明として本文と合っているものはどれか。</b>`, 
        lua_chon: ["外的報酬は仕事の幅を広げるのに必要なものであり、内的報酬は会社から評価され給与として得られるもの", "外的報酬は将来の自分のために必要なものであり、内的報酬は自分の努力では得られないもの", "外的報酬は給与として得られるものであり、内的報酬は長期的には満足感が得られないもの", "外的報酬は他人から評価され得られるものであり、内的報酬は仕事を長く続けるために必要なもの"], 
        dap_an_dung: "外的報酬は他人から評価され得られるものであり、内的報酬は仕事を長く続けるために必要なもの" 
    },
    { 
        id: "n1_2010_67", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 12)", 
        cau_hoi: `<b>67. ①そこで得たお金の「そこ」とは何を指しているか。</b>`, 
        lua_chon: ["報酬の低い仕事", "やりがいのある仕事", "内容に釣り合わない仕事", "心の満足感を伴わない仕事"], 
        dap_an_dung: "心の満足感を伴わない仕事" 
    },
    { 
        id: "n1_2010_68", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 12)", 
        cau_hoi: `<b>68. ②まさに内的報酬が外的報酬へと実を結んでいったとあるが、どういうことか。</b>`, 
        lua_chon: ["仕事に慣れて早く片づけられるようになり、同僚と同じ金額の収入を得た。", "ボーナスも退職金もないが、同じ会社で仕事を続けた結果、収入が増えた。", "成長感や達成感を得るために働いてきたことが、高い収入につながった。", "10年間アルバイトを続けて、正社員と同じ収入を得られるようになった。"], 
        dap_an_dung: "成長感や達成感を得るために働いてきたことが、高い収入につながった。" 
    },
    { 
        id: "n1_2010_69", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 12)", 
        cau_hoi: `<b>69. この文章で筆者が最も言いたいことはどれか。</b>`, 
        lua_chon: ["人脈や仕事の幅を広げて高い収入を得ることができれば、それが仕事の原動力になる。", "すぐに高い収入に結びつかなくても、心の満足感を重視して仕事を続けることが大切だ。", "大きな収入を得たいと考えるなら、アルバイトを続け高い技術や人脈を得ることが大切だ。", "見えないところで努力して仕事をすれば、他人が高く評価してくれ、いつか収入も高くなる。"], 
        dap_an_dung: "すぐに高い収入に結びつかなくても、心の満足感を重視して仕事を続けることが大切だ。" 
    },

    // --- MONDAI 13 (Tìm kiếm thông tin - Có ảnh) ---
    { 
        id: "n1_2010_70", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 13)", 
        cau_hoi: `
        <div style='text-align:center; margin-bottom:15px;'>
            <img src="images/doc-hieu-2010-7-1.jpg" alt="Đề bài Mondai 13" style="max-width:100%; border:1px solid #ddd; border-radius:5px;">
            <br><i>(Ảnh minh họa đề bài: doc-hieu-2010-7-1)</i>
        </div>
        <div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>
        <b>(資料: 清森市 秋の美術コンクール 作品募集)</b><br>
        募集期間: 2010年11月1日～11月30日<br>
        部門: 絵画部門、写真部門<br>
        応募規定: 清森市内の秋を題材にしたもの。<br>
        絵画部門: イラスト、水彩画、油絵、どれでも可。<br>
        写真部門: フィルム写真、デジタル写真、どちらも可。<br>
        ※応募作品は各部門1点に限ります。<br>
        ※未発表のものに限ります（他のコンクールに入賞していたり、出版物や展示会などで公表されたりしていないもの）。<br>
        審査結果: 清森市のホームページ上に1月15日に発表します。入賞者には1月中に結果を郵送します。電話および窓口での問い合わせには応じられません。
        </div>
        <b>70. 高木さんが制作した以下の作品のうち、応募できるものはどれか。</b>`, 
        lua_chon: ["清森高校に通っていたとき入賞した秋の風景画", "清森市にある清森温泉の紅葉の油絵とイラスト", "清森市にある清森公園で撮った春の木々の写真", "去年清森市で行われた秋祭りの写真と水彩画"], 
        dap_an_dung: "去年清森市で行われた秋祭りの写真と水彩画" 
    },
    { 
        id: "n1_2010_71", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 13)", 
        cau_hoi: `
        <div style='text-align:center; margin-bottom:15px;'>
            <img src="images/doc-hieu-2010-7-2.jpg" alt="Đề bài Mondai 13 - Câu hỏi 2" style="max-width:100%; border:1px solid #ddd; border-radius:5px;">
             <br><i>(Ảnh minh họa đề bài: doc-hieu-2010-7-2)</i>
        </div>
        <b>71. 入賞したかどうかを知るには、高木さんはどうしたらよいか。</b>`, 
        lua_chon: ["1月中旬に清森市のホームページを見る。", "1月中旬に直接、観光係に電話して聞く。", "2月下旬に市役所の窓口に問い合わせる。", "2月下旬に届く予定の通知を待つ。"], 
        dap_an_dung: "1月中旬に清森市のホームページを見る。" 
    }
];

    // ======================================================
    // BÀI TẬP N1 (THÁNG 12/2010) - ĐẦY ĐỦ
    // ======================================================
    { id: "n1_2010_12_1", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (12/2010)", cau_hoi: "話が<u>本筋</u>からそれてしまった。", lua_chon: ["もとすじ", "もときん", "ほんすじ", "ほんきん"], dap_an_dung: "ほんすじ" },
    { id: "n1_2010_12_2", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (12/2010)", cau_hoi: "友人にピアノの<u>伴奏</u>を頼まれた。", lua_chon: ["はんそう", "ばんそう", "はんそ", "ばんそ"], dap_an_dung: "ばんそう" },
    { id: "n1_2010_12_3", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (12/2010)", cau_hoi: "名探偵の<u>推理</u>で事件は無事に解決した。", lua_chon: ["しんり", "すいり", "どうり", "ろんり"], dap_an_dung: "すいり" },
    { id: "n1_2010_12_4", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (12/2010)", cau_hoi: "先日の会議では、<u>極めて</u>重要な問題が話し合われた。", lua_chon: ["きわめて", "あらためて", "つとめて", "つきつめて"], dap_an_dung: "きわめて" },
    { id: "n1_2010_12_5", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (12/2010)", cau_hoi: "もう少しアイディアを<u>練って</u>からお話しします。", lua_chon: ["けずって", "つのって", "ほって", "ねって"], dap_an_dung: "ねって" },
    { id: "n1_2010_12_6", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Kanji (12/2010)", cau_hoi: "靴のひもを<u>締めた</u>。", lua_chon: ["からめた", "ゆるめた", "はめた", "しめた"], dap_an_dung: "しめた" },
    { id: "n1_2010_12_7", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Từ vựng (12/2010)", cau_hoi: "各国のテレビがそのニュースを（　　）。", lua_chon: ["投じた", "配送した", "報じた", "配布した"], dap_an_dung: "報じた" },
    { id: "n1_2010_12_8", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Từ vựng (12/2010)", cau_hoi: "森林伐採が環境に（　　）影響は大きい。", lua_chon: ["及ぼす", "授ける", "費やす", "掲げる"], dap_an_dung: "及ぼす" },
    { id: "n1_2010_12_9", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Từ vựng (12/2010)", cau_hoi: "吉田さんは弁護士として20年もの（　　）を積んできた。", lua_chon: ["ベテラン", "ポジション", "ステータス", "キャリア"], dap_an_dung: "キャリア" },
    { id: "n1_2010_12_10", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Từ vựng (12/2010)", cau_hoi: "この小説の主人公は、歴史（　　）の人物をモデルにしている。", lua_chon: ["上", "面", "側", "内"], dap_an_dung: "上" },
    { id: "n1_2010_12_11", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Từ vựng (12/2010)", cau_hoi: "交渉が（　　）進み、無事に契約することができた。", lua_chon: ["しとやかに", "しなやかに", "円滑に", "急性に"], dap_an_dung: "円滑に" },
    { id: "n1_2010_12_12", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Từ vựng (12/2010)", cau_hoi: "次の大会に向けて、チームの（　　）を強めよう。", lua_chon: ["収束", "結束", "親密", "緊密"], dap_an_dung: "結束" },
    { id: "n1_2010_12_13", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Từ vựng (12/2010)", cau_hoi: "その企業は巨大な資本を（　　）に、海外の市場に進出した。", lua_chon: ["背景", "根源", "後援", "発端"], dap_an_dung: "背景" },
    { id: "n1_2010_12_14", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Đồng nghĩa (12/2010)", cau_hoi: "今回の研修会は、出席者が<u>まばら</u>だった。", lua_chon: ["多かった", "少なかった", "まじめだった", "ふまじめだった"], dap_an_dung: "少なかった" },
    { id: "n1_2010_12_15", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Đồng nghĩa (12/2010)", cau_hoi: "昨日は一日中<u>どんより</u>した天気だった。", lua_chon: ["曇っていて暗かった", "晴れていて明るかった", "風が吹いて涼しかった", "雨が降って蒸し暑かった"], dap_an_dung: "曇っていて暗かった" },
    { id: "n1_2010_12_16", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Đồng nghĩa (12/2010)", cau_hoi: "父は毎朝、<u>丹念に</u>新聞に目を通す。", lua_chon: ["ぼうっと", "ちらっと", "じっくりと", "ざっと"], dap_an_dung: "じっくりと" },
    { id: "n1_2010_12_17", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Đồng nghĩa (12/2010)", cau_hoi: "最近、仕事が<u>はかどっている</u>。", lua_chon: ["予想外に遅れている", "順調に進んでいる", "徐々に減っている", "急激に増えている"], dap_an_dung: "順調に進んでいる" },
    { id: "n1_2010_12_18", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Đồng nghĩa (12/2010)", cau_hoi: "相談の結果、この計画は<u>見合わせる</u>ことになりました。", lua_chon: ["承認する", "実施する", "変更する", "中止する"], dap_an_dung: "中止する" },
    { id: "n1_2010_12_19", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Đồng nghĩa (12/2010)", cau_hoi: "激しい雨のため、<u>やむをえず</u>試合は延期することになった。", lua_chon: ["しかたなく", "まもなく", "思いがけなく", "限りなく"], dap_an_dung: "しかたなく" },
    { id: "n1_2010_12_20", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Cách dùng (12/2010)", cau_hoi: "Cách dùng đúng của: <u>調達</u>", lua_chon: ["新しい事業のために、資金を調達しなければならない。", "インターネットで奨学金の申請方法を調達した。", "早めに必要な資格を調達したほうがいい。", "環境問題に対する各国の若者の意識を調達した。"], dap_an_dung: "新しい事業のために、資金を調達しなければならない。" },
    { id: "n1_2010_12_21", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Cách dùng (12/2010)", cau_hoi: "Cách dùng đúng của: <u>細心</u>", lua_chon: ["初めて一人で海外旅行をしたときは、細心の思いをした。", "この二つの言葉は似ているが、細心のところでは意味が異なる。", "美術品の運搬には、細心の注意を払う必要がある。", "イベントの概要は伺いましたが、細心の説明はまだです。"], dap_an_dung: "美術品の運搬には、細心の注意を払う必要がある。" },
    { id: "n1_2010_12_22", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Cách dùng (12/2010)", cau_hoi: "Cách dùng đúng của: <u>意地</u>", lua_chon: ["彼は何がやりたいのか、意地がはっきりしない。", "そう意地を張らずに、すなおに謝ったほうがいいよ。", "会議で、この調査の意地を説明した。", "わが社は顧客の意地に沿った商品開発を目指している。"], dap_an_dung: "そう意地を張らずに、すなおに謝ったほうがいいよ。" },
    { id: "n1_2010_12_23", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Cách dùng (12/2010)", cau_hoi: "Cách dùng đúng của: <u>めきめき</u>", lua_chon: ["あのひとは発言するたびに意見がめきめき変わる。", "入院して、健康のありがたみをめきめき感じた。", "遠慮しないで、めきめき召し上がってくださいね。", "水泳教室に通ったおかげで、めきめき上達した。"], dap_an_dung: "水泳教室に通ったおかげで、めきめき上達した。" },
    { id: "n1_2010_12_24", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Cách dùng (12/2010)", cau_hoi: "Cách dùng đúng của: <u>目先</u>", lua_chon: ["田中さんはつい目先に帰ってしまいましたよ。", "あのモデルのファッションは流行の目先を行っている。", "目先の利益を追うのではなく、会社の将来を考えるべきだ。", "決勝戦を目先に控え、選手はだいぶ緊張しているようだ。"], dap_an_dung: "目先の利益を追うのではなく、会社の将来を考えるべきだ。" },
    { id: "n1_2010_12_25", cap_do: "N1", loai: "TuVung", tieu_de: "N1 - Cách dùng (12/2010)", cau_hoi: "Cách dùng đúng của: <u>見落とす</u>", lua_chon: ["人が困っているのを見落とすわけには行かない。", "飛行機に乗っている間、窓からずっと海を見落としていた。", "部長は、気づいていたようだが、今回の失敗を見落としてくれた。", "メールが多すぎて、重要な連絡を見落としていた。"], dap_an_dung: "メールが多すぎて、重要な連絡を見落としていた。" },
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
    { id: "n1_2010_12_36", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Dấu sao (12/2010)", cau_hoi: "山田監督は私の恩人です。今の＿＿　＿＿　★　＿＿　ことです。", lua_chon: ["あっての", "あるのも", "私が", "監督"], dap_an_dung: "監督" },
    { id: "n1_2010_12_37", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Dấu sao (12/2010)", cau_hoi: "いったん仕事を引き受けた＿＿　＿＿　★　＿＿　違いない。", lua_chon: ["彼の性格", "からして", "からには", "責任感の強い"], dap_an_dung: "彼の性格" },
    { id: "n1_2010_12_38", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Dấu sao (12/2010)", cau_hoi: "ちょっと考えれば、さっきの話が冗談＿＿　＿＿　★　＿＿　簡単に信じてしまった。", lua_chon: ["わかるだろう", "だって", "に", "ことくらい"], dap_an_dung: "わかるだろう" },
    { id: "n1_2010_12_39", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Dấu sao (12/2010)", cau_hoi: "かつて映画スターであった山田氏が初挑戦で知事選に勝利したのは、能力という＿＿　＿＿　★　＿＿　大きい。", lua_chon: ["ところが", "より", "よる", "人気と知名度に"], dap_an_dung: "よる" },
    { id: "n1_2010_12_40", cap_do: "N1", loai: "NguPhap", tieu_de: "N1 - Dấu sao (12/2010)", cau_hoi: "この植物はとても強いので、＿＿　＿＿　★　＿＿　ちゃんと育ちますよ。", lua_chon: ["水やりを", "さえ", "しなければ", "忘れ"], dap_an_dung: "さえ" },
    { id: "n1_2010_12_41", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đục lỗ (12/2010)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>[Bài đọc về Kỹ năng giao tiếp - コミュニケーション能力]<br>...わざわざ「話し方教室」に<b>（ 41 ）</b>。</div><b>41. （　　）に入る最もよいものはどれか。</b>`, lua_chon: ["通う人もいるほどだ", "通う人がいるのだろうか", "通うべきである", "通うまでもなかろう"], dap_an_dung: "通う人もいるほどだ" },
    { id: "n1_2010_12_42", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đục lỗ (12/2010)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>...こうした傾向は、<b>（ 42 ）</b>。</div><b>42. （　　）に入る最もよいものはどれか。</b>`, lua_chon: ["当然のことではないか", "極めて可能性が低いのではないか", "はたして健全なのだろうか", "はたして起こり得ないのだろうか"], dap_an_dung: "はたして健全なのだろうか" },
    { id: "n1_2010_12_43", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đục lỗ (12/2010)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>コミュニケーションは技術ではない。<b>（ 43 ）</b>、マニュアル化して身につけられるようなものではないはずだ。</div><b>43. （　　）に入る最もよいものはどれか。</b>`, lua_chon: ["したがって", "すなわち", "それどころか", "とはい"], dap_an_dung: "すなわち" },
    { id: "n1_2010_12_44", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đục lỗ (12/2010)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>...マニュアルに頼ろうとする姿勢が、<b>（ 44 ）</b>。</div><b>44. （　　）に入る最もよいものはどれか。</b>`, lua_chon: ["こうしてつまずかせる", "そこから踏み出させる", "それにつまずいてしまった", "ここから踏み出してしまった"], dap_an_dung: "それにつまずいてしまった" },
    { id: "n1_2010_12_45", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đục lỗ (12/2010)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>...本当のコミュニケーションを阻害<b>（ 45 ）</b>。</div><b>45. （　　）に入る最もよいものはどれか。</b>`, lua_chon: ["してしまうのだろうか", "してしまうだけである", "してしまうものでもない", "してしまうとも言えまい"], dap_an_dung: "してしまうものでもない" },
    { id: "n1_2010_12_46", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 8-1)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>ほかの人の成功事例をマネすることが、必ずしも自分の成功を約束するものではなくなったのがいまの時代です。...創造力を身につける上でまず第一に必要なのは、決められた課題に解を出すことでなく、自分で課題を設定する能力です。</div><b>46. 筆者によると、いまの時代に創造力を養うには何が必要か。</b>`, lua_chon: ["失敗を経験しながら課題を見つけ出す力", "失敗を重ねながら課題をこなしていく力", "失敗を生かしながら課題を遂行する力", "失敗を受け入れながら課題を解く力"], dap_an_dung: "失敗を経験しながら課題を見つけ出す力" },
    { id: "n1_2010_12_47", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 8-2)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'><b>移転のお知らせ</b><br>...これまで東川区にございました国際課も、12月3日に山中ビル5階に移転することになりました。...</div><b>47. この文書で最も伝えたいことは何か。</b>`, lua_chon: ["アサクラ株式会社の国際課が1月に山中ビルに移転すること", "アサクラ株式会社の国際課が12月に山中ビルに移転すること", "アサクラ株式会社の本社と国際課が1月に山中ビルに移転すること", "アサクラ株式会社の本社と国際課が12月に山中ビルに移転すること"], dap_an_dung: "アサクラ株式会社の国際課が12月に山中ビルに移転すること" },
    { id: "n1_2010_12_48", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 8-3)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>価値観や科学的常識は、誰にとってもいつの世でも、変わらぬものだと感じがちです。...誰もが、たまたま自分の成長期に見ていた雲こそが「正しい雲の形」だと思い込みます。...</div><b>48. 筆者は、すれ違いが起こる原因をどのように説明しているか。</b>`, lua_chon: ["見る雲の形はどの世代でも変わらないが、一人一人は違う雲の形を見ているため", "見る雲の形はどの世代でも同じだが、一人一人の記憶の中で雲の形が変わっていくため", "見る雲の形は世代によって違うが、一人一人は雲の形はいつも同じだと思っているため", "見る雲の形は世代によって異なるが、一人一人の好きな雲の形はそれ以上に違うため"], dap_an_dung: "見る雲の形は世代によって違うが、一人一人は雲の形はいつも同じだと思っているため" },
    { id: "n1_2010_12_49", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 8-4)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>データが示す姿は光の部分もあれば影の部分もある。...データの罠を見分ける力、すなわちデータリテラシーは...公平で客観的な報道に努めるべきメディアに携わる人間が、しっかりと備えていなければならない必須の条件である。</div><b>49. 筆者によると、報道に携わる人間が備えておくべき必須条件とは何か。</b>`, lua_chon: ["示されたデータから影の部分を取り除く力。", "示されたデータが偏ったものではないか見抜く力。", "示されたデータをありのまま分かりやすく伝える力。", "示されたデータから報道目的に合ったものを選び取る力。"], dap_an_dung: "示されたデータが偏ったものではないか見抜く力。" },
    { id: "n1_2010_12_50", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 9-1)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>すでに地図の空白がなくなった現在... ①近代の冒険は、その後者が重要なのだ。...白紙のキャンバスに絵を描くためには表現力が必要なように、②地理的な空白がなくなった時代を生きる現代の冒険家たちは、そこに特別な自分なりの題材を見つけなくてはいけない。だからこそ③冒険者はアーティストでもあるといえる。</div><b>50. 筆者は①近代の冒険は、その後者が重要なのだと述べているが、それはどのような意味か。</b>`, lua_chon: ["誰もが難関と感じる対象を探し、命をかけて挑戦することが重要だ。", "先駆者が偉業を成し遂げた場所に、新たな決意で挑戦することが重要だ。", "新たな冒険の対象を見い出し、独自の方法でそれに挑戦することが重要だ。", "誰も踏み入ったことのない場所に、独創的な方法で挑戦することが重要だ。"], dap_an_dung: "新たな冒険の対象を見い出し、独自の方法でそれに挑戦することが重要だ。" },
    { id: "n1_2010_12_51", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 9-1)", cau_hoi: `<b>51. ②地理的な空白がなくなったとはどういうことか。</b>`, lua_chon: ["誰も考えつかないような冒険のルートがなくなった。", "自分なりの方法で冒険できる場所がなくなった。", "冒険に値するルートがすべて行き尽くされた。", "誰も冒険したことがない場所がなくなった。"], dap_an_dung: "誰も冒険したことがない場所がなくなった。" },
    { id: "n1_2010_12_52", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 9-1)", cau_hoi: `<b>52. 筆者が、③冒険者はアーティストでもあると述べているのはなぜか。</b>`, lua_chon: ["冒険者もアーティストのように創造性のある自己表現が求められるから。", "冒険者もアーティストのように表現力をつけることで注目度が増すから。", "冒険者もアーティストのように自然と向き合って自己表現するから。", "冒険者もアーティストのように主体的な表現が許されているから。"], dap_an_dung: "冒険者もアーティストのように創造性のある自己表現が求められるから。" },
    { id: "n1_2010_12_53", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 9-2)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>私たちは、①このへんで食糧の危機管理体制を考えておく必要があるのではないか。...②体制を制度にしておかないと...食糧の危機管理体制とは、非常事態に備えた生産から流通までの仕組み作りである。</div><b>53. ①このへんで食糧の危機管理体制を考えておく必要があるとあるが、なぜか。</b>`, lua_chon: ["今すぐ食糧を確保し国民一人一人の生活を守らなければならないから", "アジアを中心として食料の生産や流通に非常事態が起きているから", "食糧の確保が今後ますます難しくなることが予想されるから", "食糧輸出国の危機管理体制が確固としたものではないから"], dap_an_dung: "食糧の確保が今後ますます難しくなることが予想されるから" },
    { id: "n1_2010_12_54", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 9-2)", cau_hoi: `<b>54. ②体制を制度にしてとあるが、どうすることか。</b>`, lua_chon: ["生産から流通までの体制を考える。", "国民が活動できるような体制を整える。", "政府主導で実施出来るような仕組みを作る。", "生産や流通に国民が責任を持つ仕組みを作る。"], dap_an_dung: "政府主導で実施出来るような仕組みを作る。" },
    { id: "n1_2010_12_55", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 9-2)", cau_hoi: `<b>55. 政府が検討すべき食糧の危機管理体制について、筆者の考えに合うものはどれか。</b>`, lua_chon: ["必要が生じた時には、国民の同意を得て実施するべきだ。", "今すぐ実施した方が良いので、速やかに制度化するべきだ。", "平常時は実施する必要はないが、制度自体は早く整えるべきだ。", "平和な時に限らず、国民が自由に活動出来る環境を整えるべきだ。"], dap_an_dung: "平常時は実施する必要はないが、制度自体は早く整えるべきだ。" },
    { id: "n1_2010_12_56", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 9-3)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>①日本の建築は寿命が短いが、これは木造自体の耐久性から決まるのではない。...②これは、日本独特の更新の文化と呼んでも良い。...更新は環境に優しく、人々に仕事を与え、ゆっくりとした変化をもたらす木の国の優れた文化である。</div><b>56. ①日本の建築は寿命が短いとあるが、なぜか。</b>`, lua_chon: ["木材自体に耐久性がないため、メンテナンスが難しいから。", "建築に適した木材の入手が難しく、修理もあまりしないから。", "木造建築は老朽化が速いだけでなく、火事や地震にも弱いから。", "丈夫な木材があまり使えないうえ、災害で失われることも多いから。"], dap_an_dung: "丈夫な木材があまり使えないうえ、災害で失われることも多いから。" },
    { id: "n1_2010_12_57", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 9-3)", cau_hoi: `<b>57. ②これとは何を指すか。</b>`, lua_chon: ["建物が老朽化してくると同じように建て直すことで、外観が保持されること。", "建物が老朽化してくると外観を全く変えずに建て直すことで、景観が維持されること。", "建物が老朽化してくると、材料を再利用して同じ間取りに建て直すこと。", "建物が老朽化してくると、景観の維持を優先して見た目を変えずに建て直すこと。"], dap_an_dung: "建物が老朽化してくると外観を全く変えずに建て直すことで、景観が維持されること。" },
    { id: "n1_2010_12_58", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 9-3)", cau_hoi: `<b>58. 筆者は、木造建築が更新されることにはどのような利点があると考えているか。</b>`, lua_chon: ["質の良い木材の入手が容易になるだけでなく、職人の技術が向上する。", "樹木の生育にあった条件が整う上、美しい街並みも守られる。", "植林が進むので環境によい上、職人の技術も受け継がれる。", "木材の供給が安定するだけでなく、美しい風景が守られる。"], dap_an_dung: "植林が進むので環境によい上、職人の技術も受け継がれる。" },
    { id: "n1_2010_12_59", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 10)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>心理学は昔から心について研究してきたわけですが... <b>59. ①不思議に思われるとあるが、人々は何を不思議に思うのか。</b>`, lua_chon: ["心理学では感情機能についてまだ十分わかっていないこと", "心理学では認知と感情の関係がまだ解明されていないこと", "心理学は感情の働きを研究するのが得意だということ", "心理学が昔から心について研究してきたということ"], dap_an_dung: "心理学では感情機能についてまだ十分わかっていないこと" },
    { id: "n1_2010_12_60", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 10)", cau_hoi: `<b>60. 筆者の言う②全体的な「生」の体験とは何か。</b>`, lua_chon: ["心で感じとったことを、そのまま行動に移すような体験", "身の回りの世界を目や耳で認識して考え、心で感じる体験", "どのように周囲を見たり聴いたりして考えるかという体験", "感覚や知覚で周囲の世界のものごとをとらえようとする体験"], dap_an_dung: "身の回りの世界を目や耳で認識して考え、心で感じる体験" },
    { id: "n1_2010_12_61", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 10)", cau_hoi: `<b>61. この文章では、ロボットを取り上げて何を説明しているか。</b>`, lua_chon: ["ロボットの感情のメカニズムの複雑さ", "最近のロボット工学の進歩のめざましさ", "人間の動作や表情を再現することの難しさ", "人間の感情の働きを解明することの難しさ"], dap_an_dung: "人間の感情の働きを解明することの難しさ" },
    { id: "n1_2010_12_62", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 10)", cau_hoi: `<b>62. 筆者の述べている感情の働きを以下のようにまとめる場合、（　　）に入るものとして適切なのはどれか。</b>`, lua_chon: ["何かをしたいと思い行動を起こす", "ものごとを感覚でとらえようとする", "相手の心を分析して理解しようとする", "好き嫌いを論理的に考え判断する"], dap_an_dung: "何かをしたいと思い行動を起こす" },
    { id: "n1_2010_12_63", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 11)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'><b>A</b> アートを買うか買わないか... <b>B</b> 真にアートの価値が分かるようになるためには... <b>63. AとBはアートを買うことについて、どのような考えを持っているか。</b>`, lua_chon: ["Aは一つ買ってみることがアート収集につながると考え、Bは心を動かされたらすぐに買ったほうがよいと考えている。", "Aは最初に買った作品がその後のアート収集に影響すると考え、Bはアートを理解するには買うことが欠かせないと考えている。", "Aは市場価値の高いものを買うことが重要だと考え、Bは作品が好きだと思う理由をよく考えてから買うことが大切だと考えている。", "Aは買うほどではないと思った作品でも買うことが重要だと考え、Bは作品を選ぶときの基準を高く設定することが大切だと考えている。"], dap_an_dung: "Aは最初に買った作品がその後のアート収集に影響すると考え、Bはアートを理解するには買うことが欠かせないと考えている。" },
    { id: "n1_2010_12_64", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 11)", cau_hoi: `<b>64. アートの価値について、AとBが共通して述べていることは何か。</b>`, lua_chon: ["アートの価値とは、市場価値と連動している。", "アートの価値とは、買い続けることで分かるものである。", "アートの価値とは、買い手の価値観で決まるものである。", "アートの価値とは、多くの人に共有される価値観によって決められる。"], dap_an_dung: "アートの価値とは、買い手の価値観で決まるものである。" },
    { id: "n1_2010_12_65", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 12)", cau_hoi: `<div style='text-align:justify; background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:10px;'>眺めていると、東京の空には意外にたくさんの鳥が飛んでいる... <b>65. ツバメが人家の軒先に巣をつくる理由として適当なのはどれか。</b>`, lua_chon: ["人家の軒先では、ツバメが子育てに必要な餌を得ることができるから", "人家の軒先は、店の軒先ほど人の出入りがひんぱんではないから", "ツバメの天敵であるスズメが、常に人間を恐れて近寄らないから", "ツバメの嫌うスズメが、人のいるところではひなを育てないから"], dap_an_dung: "ツバメの嫌うスズメが、人のいるところではひなを育てないから" },
    { id: "n1_2010_12_66", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 12)", cau_hoi: `<b>66. 筆者によると大都市でツバメが少なくなったのはなぜか。</b>`, lua_chon: ["森や林が失われたから", "巣をつくりにくくなったから", "カラスやスズメが増えたから", "食物を得るのが難しくなったから"], dap_an_dung: "食物を得るのが難しくなったから" },
      { 
        id: "n1_2010_12_67", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 12)", 
        cau_hoi: `<b>67. 多くの動物たちはわれわれが思っていたよりもずっとしたたかであるとあるが、どのような点でしたたかだと筆者は考えているか。</b>`, 
        lua_chon: ["都会であっても森や林があれば巣を作る", "生きるための条件が整えば都会で生活する", "都会であっても餌がなければ命がけで探す", "人間を避けることができれば、都会に棲みつく"], 
        dap_an_dung: "生きるための条件が整えば都会で生活する" 
    },
    { 
        id: "n1_2010_12_68", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 12)", 
        cau_hoi: `<b>68. この文章で筆者が言いたいことは何か。</b>`, 
        lua_chon: ["都会を去った動物たちが再び人間と共生できるような対策を立てる必要がある", "都会での生活は動物にとって実は利点が多いということを認識する必要がある", "自然との共生を考える際には、動物の生存に必須の条件を尊重すべきである", "動物たちの生活を守るために環境汚染を防止し、自然を保護すべきである"], 
        dap_an_dung: "自然との共生を考える際には、動物の生存に必須の条件を尊重すべきである" 
    },

    // --- MONDAI 13 (Tìm kiếm thông tin - Có ảnh) ---
    { 
        id: "n1_2010_12_69", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 13)", 
        cau_hoi: `
        <div style='text-align:center; margin-bottom:15px;'>
            <img src="images/doc-hieu-2010-12-1.jpg" alt="Mondai 13" style="max-width:100%;">
        </div>
        <b>69. 次の四人のうち、現段階でアイデア部門の特定課題の応募条件を満たしているのは誰か。</b>`, 
        lua_chon: ["山田さん", "鈴木さん", "チェンさん", "川村さん"], 
        dap_an_dung: "川村さん" 
    },
    { 
        id: "n1_2010_12_70", cap_do: "N1", loai: "DocHieu", tieu_de: "N1 - Đọc hiểu (Mondai 13)", 
        cau_hoi: `<b>70. 前川さんは... どの部門に応募するのが適切か。</b>`, 
        lua_chon: ["アイデア部門の自由課題に応募し、作品のイラストを提出する。", "アイデア部門の自由課題に応募し、模型とイラストを提出する。", "開発部門に応募し、実物の動きなどがわかるような動画を提出する。", "開発部門に応募し、実物の動きなどを記録した動画と実物を提出する。"], 
        dap_an_dung: "開発部門に応募し、実物の動きなどを記録した動画と実物を提出する。" 
    }
];


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

    // --- ĐỀ THI N1 (THÁNG 12/2010) ---
    {
        id: "n1_de_2010_12",
        cap_do: "N1",
        tieu_de: "Đề thi thử N1 - Tháng 12/2010 (Full)",
        danh_sach_cau_hoi: [
            "n1_2010_12_1", "n1_2010_12_2", "n1_2010_12_3", "n1_2010_12_4", "n1_2010_12_5", "n1_2010_12_6",
            "n1_2010_12_7", "n1_2010_12_8", "n1_2010_12_9", "n1_2010_12_10", "n1_2010_12_11", "n1_2010_12_12", "n1_2010_12_13",
            "n1_2010_12_14", "n1_2010_12_15", "n1_2010_12_16", "n1_2010_12_17", "n1_2010_12_18", "n1_2010_12_19",
            "n1_2010_12_20", "n1_2010_12_21", "n1_2010_12_22", "n1_2010_12_23", "n1_2010_12_24", "n1_2010_12_25",
            "n1_2010_12_26", "n1_2010_12_27", "n1_2010_12_28", "n1_2010_12_29", "n1_2010_12_30", "n1_2010_12_31", "n1_2010_12_32", "n1_2010_12_33", "n1_2010_12_34", "n1_2010_12_35",
            "n1_2010_12_36", "n1_2010_12_37", "n1_2010_12_38", "n1_2010_12_39", "n1_2010_12_40",
            "n1_2010_12_41", "n1_2010_12_42", "n1_2010_12_43", "n1_2010_12_44", "n1_2010_12_45",
            "n1_2010_12_46", "n1_2010_12_47", "n1_2010_12_48", "n1_2010_12_49",
            "n1_2010_12_50", "n1_2010_12_51", "n1_2010_12_52", "n1_2010_12_53", "n1_2010_12_54", "n1_2010_12_55", "n1_2010_12_56", "n1_2010_12_57", "n1_2010_12_58",
            "n1_2010_12_59", "n1_2010_12_60", "n1_2010_12_61", "n1_2010_12_62",
            "n1_2010_12_63", "n1_2010_12_64",
            "n1_2010_12_65", "n1_2010_12_66", "n1_2010_12_67", "n1_2010_12_68",
            "n1_2010_12_69", "n1_2010_12_70"
        ]
    }
];
