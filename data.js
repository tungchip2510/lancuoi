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
    
    // --- MÔ-ĐUN 1: GIỚI THIỆU & CƠ BẢN VỀ DANH TỪ ---

    // BÀI 1: TÔI LÀ...
    { 
        id: "n5_tv_1", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 1: TÔI LÀ... - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead>
                <tbody>
                    <tr><td>わたし</td><td>watashi</td><td>Tôi</td><td>Dùng cho cả nam và nữ</td></tr>
                    <tr><td>あなた</td><td>anata</td><td>Bạn, Anh/Chị</td><td>Nên dùng tên + さん</td></tr>
                    <tr><td>あのひと</td><td>ano hito</td><td>Người đó, Vị đó</td><td>Lịch sự: あのかた</td></tr>
                    <tr><td>〜さん</td><td>~san</td><td>Ông/Bà/Anh/Chị</td><td>Hậu tố chỉ người</td></tr>
                    <tr><td>せんせい</td><td>sensei</td><td>Giáo viên</td><td>Không dùng cho mình</td></tr>
                    <tr><td>がくせい</td><td>gakusei</td><td>Học sinh, Sinh viên</td><td></td></tr>
                    <tr><td>かいしゃいん</td><td>kaishain</td><td>Nhân viên công ty</td><td></td></tr>
                    <tr><td>しゃいん</td><td>shain</td><td>Nhân viên</td><td>Kèm tên công ty</td></tr>
                    <tr><td>エンジニア</td><td>enjinia</td><td>Kỹ sư</td><td></td></tr>
                    <tr><td>ベトナム</td><td>Betonamu</td><td>Việt Nam</td><td></td></tr>
                    <tr><td>アメリカ</td><td>Amerika</td><td>Mỹ</td><td></td></tr>
                    <tr><td>〜ご</td><td>~go</td><td>Tiếng (ngôn ngữ)</td><td>VD: Nihon-go</td></tr>
                </tbody>
            </table>` 
    },
    { 
        id: "n5_np_1", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 1: TÔI LÀ... - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead>
                <tbody>
                    <tr><td>1. N1 は N2 です</td><td>Khẳng định: N1 là N2. は (wa) là trợ từ chủ đề.</td><td>わたし は ホアン です。</td></tr>
                    <tr><td>2. N1 は N2 じゃありません</td><td>Phủ định: N1 không phải là N2.</td><td>わたし は せんせい じゃありません。</td></tr>
                    <tr><td>3. N1 は N2 ですか</td><td>Nghi vấn: N1 có phải là N2 không? Thêm か.</td><td>あなた は ベトナム人 ですか。</td></tr>
                    <tr><td>4. N1 も N2 です</td><td>Cũng là: Dùng も thay cho は.</td><td>リーさん も がくせい です。</td></tr>
                    <tr><td>5. N1 の N2</td><td>Sở hữu: N2 của N1.</td><td>FPT の しゃいん。</td></tr>
                </tbody>
            </table>` 
    },

    // BÀI 2: CÁI NÀY LÀ GÌ?
    { 
        id: "n5_tv_2", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 2: CÁI NÀY LÀ GÌ? - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead>
                <tbody>
                    <tr><td>これ</td><td>kore</td><td>Cái này</td><td>Vật gần người nói</td></tr>
                    <tr><td>それ</td><td>sore</td><td>Cái đó</td><td>Vật gần người nghe</td></tr>
                    <tr><td>あれ</td><td>are</td><td>Cái kia</td><td>Vật xa cả hai</td></tr>
                    <tr><td>この〜</td><td>kono</td><td>~ này</td><td>Bổ nghĩa cho N</td></tr>
                    <tr><td>その〜</td><td>sono</td><td>~ đó</td><td>Bổ nghĩa cho N</td></tr>
                    <tr><td>あの〜</td><td>ano</td><td>~ kia</td><td>Bổ nghĩa cho N</td></tr>
                    <tr><td>ほん</td><td>hon</td><td>Sách</td><td></td></tr>
                    <tr><td>ざっし</td><td>zasshi</td><td>Tạp chí</td><td></td></tr>
                    <tr><td>かぎ</td><td>kagi</td><td>Chìa khóa</td><td></td></tr>
                    <tr><td>とけい</td><td>tokei</td><td>Đồng hồ</td><td></td></tr>
                    <tr><td>じどうしゃ</td><td>jidousha</td><td>Xe ô tô</td><td></td></tr>
                    <tr><td>いくら</td><td>ikura</td><td>Bao nhiêu tiền</td><td></td></tr>
                    <tr><td>なん</td><td>nan</td><td>Cái gì</td><td>Dùng trước です/ですか</td></tr>
                    <tr><td>なんの N</td><td>nan no N</td><td>N gì</td><td>Dùng trước の</td></tr>
                </tbody>
            </table>` 
    },
    { 
        id: "n5_np_2", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 2: CÁI NÀY LÀ GÌ? - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead>
                <tbody>
                    <tr><td>1. これ/それ/あれ は N です</td><td>Chỉ định từ làm chủ ngữ. Không cần N đi kèm.</td><td>これ は じどうしゃ です。</td></tr>
                    <tr><td>2. この/その/あの N は S です</td><td>Bổ nghĩa cho danh từ. Phải có N đi kèm.</td><td>この ほん は わたし の です。</td></tr>
                    <tr><td>3. S は なん ですか</td><td>Hỏi cái gì. Dùng なん (nani/nan).</td><td>それ は なん ですか。</td></tr>
                    <tr><td>4. N1 は N2 の N3 です</td><td>Sở hữu/Thuộc tính chi tiết.</td><td>この とけい は ドイツ の カメラ の です。</td></tr>
                    <tr><td>5. そうです / そうじゃありません</td><td>Trả lời xác nhận ngắn gọn.</td><td>はい、そうです。 / いいえ、そうじゃありません。</td></tr>
                </tbody>
            </table>` 
    },

    // BÀI 3: ĐỊA ĐIỂM & VỊ TRÍ
    { 
        id: "n5_tv_3", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 3: ĐỊA ĐIỂM - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead>
                <tbody>
                    <tr><td>ここ</td><td>koko</td><td>Chỗ này, Đây</td><td>Gần người nói</td></tr>
                    <tr><td>そこ</td><td>soko</td><td>Chỗ đó, Đó</td><td>Gần người nghe</td></tr>
                    <tr><td>あそこ</td><td>asoko</td><td>Chỗ kia, Kia</td><td>Xa cả hai</td></tr>
                    <tr><td>どこ</td><td>doko</td><td>Ở đâu</td><td>Từ hỏi</td></tr>
                    <tr><td>うえ</td><td>ue</td><td>Trên</td><td></td></tr>
                    <tr><td>した</td><td>shita</td><td>Dưới</td><td></td></tr>
                    <tr><td>なか</td><td>naka</td><td>Trong</td><td></td></tr>
                    <tr><td>そと</td><td>soto</td><td>Ngoài</td><td></td></tr>
                    <tr><td>まえ</td><td>mae</td><td>Trước</td><td></td></tr>
                    <tr><td>うしろ</td><td>ushiro</td><td>Sau</td><td></td></tr>
                    <tr><td>みぎ</td><td>migi</td><td>Bên phải</td><td></td></tr>
                    <tr><td>ひだり</td><td>hidari</td><td>Bên trái</td><td></td></tr>
                    <tr><td>となり</td><td>tonari</td><td>Bên cạnh</td><td></td></tr>
                    <tr><td>ちかく</td><td>chikaku</td><td>Gần</td><td></td></tr>
                    <tr><td>としょかん</td><td>toshokan</td><td>Thư viện</td><td></td></tr>
                    <tr><td>うけつけ</td><td>uketsuke</td><td>Quầy lễ tân</td><td></td></tr>
                </tbody>
            </table>` 
    },
    { 
        id: "n5_np_3", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 3: ĐỊA ĐIỂM - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead>
                <tbody>
                    <tr><td>1. N1 は どこ ですか</td><td>Hỏi địa điểm của N1.</td><td>トイレ は どこ ですか。</td></tr>
                    <tr><td>2. N1 は N2 です</td><td>Khẳng định vị trí: N1 ở N2.</td><td>会議室 は ３階 です。</td></tr>
                    <tr><td>3. N1 は N2 の N3 です</td><td>Vị trí chi tiết (trên, dưới...).</td><td>本 は つくえ の うえ です。</td></tr>
                    <tr><td>4. お国 は どちら ですか</td><td>Hỏi lịch sự về quốc tịch/nơi chốn.</td><td>お国 は どちら ですか。</td></tr>
                </tbody>
            </table>` 
    },

    // BÀI 4: THỜI GIAN & NGÀY THÁNG
    { 
        id: "n5_tv_4", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 4: THỜI GIAN - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead>
                <tbody>
                    <tr><td>いま</td><td>ima</td><td>Bây giờ</td><td></td></tr>
                    <tr><td>〜じ</td><td>~ji</td><td>Mấy giờ</td><td>VD: いちじ (1 giờ)</td></tr>
                    <tr><td>〜ふん / ぷん</td><td>~fun / pun</td><td>Mấy phút</td><td>Biến âm: 1,3,4,6,8,10</td></tr>
                    <tr><td>はん</td><td>han</td><td>Rưỡi (30 phút)</td><td>VD: いちじはん</td></tr>
                    <tr><td>ごぜん</td><td>gozen</td><td>Sáng, AM</td><td></td></tr>
                    <tr><td>ごご</td><td>gogo</td><td>Chiều, PM</td><td></td></tr>
                    <tr><td>なんじ</td><td>nanji</td><td>Mấy giờ</td><td></td></tr>
                    <tr><td>なんぷん</td><td>nanpun</td><td>Mấy phút</td><td></td></tr>
                    <tr><td>やすみ</td><td>yasumi</td><td>Ngày nghỉ</td><td></td></tr>
                    <tr><td>しごと</td><td>shigoto</td><td>Công việc</td><td></td></tr>
                    <tr><td>テスト</td><td>tesuto</td><td>Bài kiểm tra</td><td></td></tr>
                    <tr><td>ばんごう</td><td>bangō</td><td>Số (điện thoại)</td><td></td></tr>
                    <tr><td>なんばん</td><td>nanban</td><td>Số mấy</td><td></td></tr>
                </tbody>
            </table>` 
    },
    { 
        id: "n5_np_4", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 4: THỜI GIAN - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead>
                <tbody>
                    <tr><td>1. いま、なんじですか</td><td>Hỏi giờ hiện tại.</td><td>ごぜん ９時半 です。</td></tr>
                    <tr><td>2. N1 は N2 です</td><td>Thời gian kết thúc (với yasumi/shigoto).</td><td>銀行 は ３時 まで です。</td></tr>
                    <tr><td>3. N から N まで</td><td>Từ... đến... (Thời gian/Địa điểm).</td><td>９時 から ５時 まで はたらきます。</td></tr>
                    <tr><td>4. N1 と N2</td><td>Liệt kê đầy đủ (Và).</td><td>土曜日 と 日曜日 です。</td></tr>
                    <tr><td>5. N1 は N2 ですね</td><td>Xác nhận thông tin (Nhỉ/Đúng không).</td><td>会議 は １０時 です ね。</td></tr>
                </tbody>
            </table>` 
    },

    // BÀI 5: CHỦ THỂ & ĐỐI TƯỢNG (Gà/Wo)
    { 
        id: "n5_tv_5", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 5: CÓ/THÍCH - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead>
                <tbody>
                    <tr><td>わかります</td><td>wakarimasu</td><td>Hiểu</td><td></td></tr>
                    <tr><td>あります</td><td>arimasu</td><td>Có (vật vô tri/cây)</td><td></td></tr>
                    <tr><td>います</td><td>imasu</td><td>Có (người/động vật)</td><td></td></tr>
                    <tr><td>すき (な)</td><td>suki</td><td>Thích</td><td>Tính từ Na</td></tr>
                    <tr><td>きらい (な)</td><td>kirai</td><td>Ghét, Không thích</td><td>Tính từ Na</td></tr>
                    <tr><td>じょうず (な)</td><td>jōzu</td><td>Giỏi</td><td>Không dùng cho mình</td></tr>
                    <tr><td>へた (な)</td><td>heta</td><td>Dở, Kém</td><td>Tính từ Na</td></tr>
                    <tr><td>おんなのひと</td><td>onna no hito</td><td>Phụ nữ</td><td></td></tr>
                    <tr><td>おとこのひと</td><td>otoko no hito</td><td>Đàn ông</td><td></td></tr>
                    <tr><td>こども</td><td>kodomo</td><td>Trẻ con</td><td></td></tr>
                    <tr><td>くだもの</td><td>kudamono</td><td>Trái cây</td><td></td></tr>
                    <tr><td>パン</td><td>pan</td><td>Bánh mì</td><td></td></tr>
                </tbody>
            </table>` 
    },
    { 
        id: "n5_np_5", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 5: CÓ/THÍCH - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead>
                <tbody>
                    <tr><td>1. N が あります/います</td><td>Sự tồn tại. が chỉ chủ thể.</td><td>私 は 車 が あります。</td></tr>
                    <tr><td>2. N が すき/きらい...</td><td>Đối tượng của cảm xúc/năng lực. Dùng が.</td><td>わたし は おんがく が すき です。</td></tr>
                    <tr><td>3. どんな N</td><td>Hỏi về tính chất/loại của N.</td><td>どんな スポーツ が 好きですか。</td></tr>
                    <tr><td>4. あまり + Phủ Định</td><td>Không... lắm (Mức độ).</td><td>あまり 好き じゃありません。</td></tr>
                    <tr><td>5. ぜんぜん + Phủ Định</td><td>Hoàn toàn không (Mức độ mạnh).</td><td>おかねが ぜんぜん ありません。</td></tr>
                </tbody>
            </table>` 
    },

    // --- MÔ-ĐUN 2: ĐỘNG TỪ & HÀNH ĐỘNG ---

    // BÀI 6: ĐỘNG TỪ THỂ MASU
    { 
        id: "n5_tv_6", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 6: ĐỘNG TỪ - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Loại ĐT</th></tr></thead>
                <tbody>
                    <tr><td>いきます</td><td>ikimasu</td><td>Đi</td><td>Nhóm I</td></tr>
                    <tr><td>きます</td><td>kimasu</td><td>Đến</td><td>Nhóm III</td></tr>
                    <tr><td>かえります</td><td>kaerimasu</td><td>Trở về, về nhà</td><td>Nhóm I</td></tr>
                    <tr><td>たべます</td><td>tabemasu</td><td>Ăn</td><td>Nhóm II</td></tr>
                    <tr><td>のみます</td><td>nomimasu</td><td>Uống</td><td>Nhóm I</td></tr>
                    <tr><td>みます</td><td>mimasu</td><td>Xem, nhìn</td><td>Nhóm II</td></tr>
                    <tr><td>ききます</td><td>kikimasu</td><td>Nghe</td><td>Nhóm I</td></tr>
                    <tr><td>よみます</td><td>yomimasu</td><td>Đọc</td><td>Nhóm I</td></tr>
                    <tr><td>ねます</td><td>nemasu</td><td>Ngủ</td><td>Nhóm II</td></tr>
                    <tr><td>べんきょうします</td><td>benkyō shimasu</td><td>Học</td><td>Nhóm III</td></tr>
                    <tr><td>あさ</td><td>asa</td><td>Buổi sáng</td><td>-</td></tr>
                    <tr><td>ひる</td><td>hiru</td><td>Buổi trưa</td><td>-</td></tr>
                    <tr><td>よる</td><td>yoru</td><td>Buổi tối</td><td>-</td></tr>
                    <tr><td>やすみ</td><td>yasumi</td><td>Ngày nghỉ</td><td>-</td></tr>
                </tbody>
            </table>` 
    },
    { 
        id: "n5_np_6", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 6: ĐỘNG TỪ - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead>
                <tbody>
                    <tr><td>1. Chia động từ Masu</td><td>Hiện tại(ます), Phủ định(ません), Quá khứ(ました), PĐQK(ませんでした).</td><td>あした、はたらきます。/ きのう、はたらきませんでした。</td></tr>
                    <tr><td>2. N に V</td><td>Thời điểm cụ thể / Điểm đến.</td><td>９時に ねます。</td></tr>
                    <tr><td>3. N を V</td><td>Tân ngữ chịu tác động.</td><td>コーヒー を のみます。</td></tr>
                    <tr><td>4. どこ へ/に いきますか</td><td>Hỏi điểm đến. へ chỉ hướng.</td><td>どこへ いきましたか。</td></tr>
                    <tr><td>5. N で V</td><td>Nơi chốn xảy ra hành động.</td><td>レストラン で たべます。</td></tr>
                </tbody>
            </table>` 
    },

    // BÀI 7: PHƯƠNG TIỆN & ĐI CÙNG
    { 
        id: "n5_tv_7", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 7: PHƯƠNG TIỆN - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead>
                <tbody>
                    <tr><td>でんしゃ</td><td>densha</td><td>Tàu điện</td><td></td></tr>
                    <tr><td>バス</td><td>basu</td><td>Xe buýt</td><td></td></tr>
                    <tr><td>タクシー</td><td>takushī</td><td>Taxi</td><td></td></tr>
                    <tr><td>ひこうき</td><td>hikōki</td><td>Máy bay</td><td></td></tr>
                    <tr><td>ふね</td><td>fune</td><td>Thuyền, tàu thủy</td><td></td></tr>
                    <tr><td>あるいて</td><td>aruite</td><td>Đi bộ</td><td>Đặc biệt</td></tr>
                    <tr><td>ともだち</td><td>tomodachi</td><td>Bạn bè</td><td></td></tr>
                    <tr><td>ひとり</td><td>hitori</td><td>Một mình</td><td></td></tr>
                    <tr><td>だれ</td><td>dare</td><td>Ai</td><td></td></tr>
                    <tr><td>いつ</td><td>itsu</td><td>Khi nào</td><td></td></tr>
                    <tr><td>たんじょうび</td><td>tanjōbi</td><td>Sinh nhật</td><td></td></tr>
                    <tr><td>たいへん</td><td>taihen</td><td>Vất vả</td><td></td></tr>
                </tbody>
            </table>` 
    },
    { 
        id: "n5_np_7", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 7: PHƯƠNG TIỆN - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead>
                <tbody>
                    <tr><td>1. N で V</td><td>Phương tiện. (Đi bộ dùng aruite không で).</td><td>飛行機 で 行きます。</td></tr>
                    <tr><td>2. だれ と V</td><td>Đi cùng ai. Một mình dùng "hitori de".</td><td>家族 と 来ました。/ ひとり で 行きます。</td></tr>
                    <tr><td>3. いつ V-ますか</td><td>Hỏi thời gian. Không dùng に.</td><td>いつ 行きましたか。</td></tr>
                    <tr><td>4. お国 から V</td><td>Từ đâu (Xuất phát điểm).</td><td>ベトナム から きました。</td></tr>
                    <tr><td>5. N は どうでしたか</td><td>Hỏi cảm tưởng quá khứ.</td><td>日本の生活 は どうでしたか。</td></tr>
                </tbody>
            </table>` 
    },

    // BÀI 8: TRAO & NHẬN
    { 
        id: "n5_tv_8", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 8: TRAO NHẬN - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead>
                <tbody>
                    <tr><td>かいます</td><td>kaimasu</td><td>Mua</td><td>Nhóm I</td></tr>
                    <tr><td>とります</td><td>torimasu</td><td>Chụp (ảnh)</td><td>Nhóm I</td></tr>
                    <tr><td>かきます</td><td>kakimasu</td><td>Viết</td><td>Nhóm I</td></tr>
                    <tr><td>おしえます</td><td>oshiemasu</td><td>Dạy, chỉ bảo</td><td>Nhóm II</td></tr>
                    <tr><td>てがみ</td><td>tegami</td><td>Thư</td><td></td></tr>
                    <tr><td>レポート</td><td>repōto</td><td>Báo cáo</td><td></td></tr>
                    <tr><td>え</td><td>e</td><td>Tranh, Ảnh</td><td></td></tr>
                    <tr><td>しゅくだい</td><td>shukudai</td><td>Bài tập về nhà</td><td></td></tr>
                    <tr><td>おかね</td><td>okane</td><td>Tiền</td><td></td></tr>
                    <tr><td>ごめんください</td><td>gomen kudasai</td><td>Xin lỗi, tôi vào được không?</td><td>Đến nhà người khác</td></tr>
                    <tr><td>いらっしゃい</td><td>irasshai</td><td>Chào mừng</td><td>Đón khách</td></tr>
                </tbody>
            </table>` 
    },
    { 
        id: "n5_np_8", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 8: TRAO NHẬN - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead>
                <tbody>
                    <tr><td>1. N を V</td><td>Tân ngữ trực tiếp (Ôn tập).</td><td>カメラ を かいます。</td></tr>
                    <tr><td>2. N に V</td><td>Đối tượng nhận (cho ai, dạy ai...).</td><td>先生 に メール を かきました。</td></tr>
                    <tr><td>3. なに を V-ますか</td><td>Hỏi cái gì.</td><td>なに を たべますか。</td></tr>
                    <tr><td>4. どこ で V-ますか</td><td>Hỏi ở đâu.</td><td>どこで かいましたか。</td></tr>
                    <tr><td>5. いっしょに V-ませんか</td><td>Rủ rê lịch sự.</td><td>いっしょに 見 ませんか。</td></tr>
                </tbody>
            </table>` 
    },

    // BÀI 9: MỤC ĐÍCH
    { 
        id: "n5_tv_9", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 9: MỤC ĐÍCH - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead>
                <tbody>
                    <tr><td>あいます</td><td>aimasu</td><td>Gặp</td><td>Dùng trợ từ に</td></tr>
                    <tr><td>けっこんします</td><td>kekkon shimasu</td><td>Kết hôn</td><td>Nhóm III</td></tr>
                    <tr><td>かいもの</td><td>kaimono</td><td>Mua sắm</td><td>Danh từ</td></tr>
                    <tr><td>しょくじ</td><td>shokuji</td><td>Bữa ăn</td><td>Danh từ</td></tr>
                    <tr><td>パーティ</td><td>pāti</td><td>Bữa tiệc</td><td></td></tr>
                    <tr><td>サッカー</td><td>sakkā</td><td>Bóng đá</td><td></td></tr>
                    <tr><td>おはなみ</td><td>ohanami</td><td>Ngắm hoa anh đào</td><td></td></tr>
                    <tr><td>びょういん</td><td>byōin</td><td>Bệnh viện</td><td></td></tr>
                    <tr><td>こんげつ</td><td>kongetsu</td><td>Tháng này</td><td></td></tr>
                    <tr><td>らいげつ</td><td>raigetsu</td><td>Tháng sau</td><td></td></tr>
                </tbody>
            </table>` 
    },
    { 
        id: "n5_np_9", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 9: MỤC ĐÍCH - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead>
                <tbody>
                    <tr><td>1. V(bỏ mas)/N に 行きます</td><td>Đi để làm gì (Mục đích).</td><td>買い物 に 行きます。</td></tr>
                    <tr><td>2. N に いきます</td><td>Mục đích dùng Danh từ hành động.</td><td>パーティー に 行きます。</td></tr>
                    <tr><td>3. どこ へ V に いきますか</td><td>Hỏi đi đâu để làm gì.</td><td>どこへ 映画 を 見 に 行きますか。</td></tr>
                    <tr><td>4. N に あいます</td><td>Gặp ai (Dùng に).</td><td>先生 に 会います。</td></tr>
                </tbody>
            </table>` 
    },

    // BÀI 10: LIỆT KÊ
    { 
        id: "n5_tv_10", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 10: LIỆT KÊ - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead>
                <tbody>
                    <tr><td>あります</td><td>arimasu</td><td>Có (vật vô tri)</td><td></td></tr>
                    <tr><td>います</td><td>imasu</td><td>Có (người, động vật)</td><td></td></tr>
                    <tr><td>いろいろ</td><td>iroiro</td><td>Nhiều loại</td><td></td></tr>
                    <tr><td>たいせつ (な)</td><td>taisetsu (na)</td><td>Quan trọng</td><td>Tính từ Na</td></tr>
                    <tr><td>てんき</td><td>tenki</td><td>Thời tiết</td><td></td></tr>
                    <tr><td>あめ</td><td>ame</td><td>Mưa</td><td></td></tr>
                    <tr><td>ゆき</td><td>yuki</td><td>Tuyết</td><td></td></tr>
                    <tr><td>しんぶん</td><td>shinbun</td><td>Báo</td><td></td></tr>
                    <tr><td>コーヒー</td><td>kōhī</td><td>Cà phê</td><td></td></tr>
                    <tr><td>みかん</td><td>mikan</td><td>Quýt</td><td></td></tr>
                    <tr><td>など</td><td>nado</td><td>Vân vân</td><td>Dùng liệt kê</td></tr>
                </tbody>
            </table>` 
    },
    { 
        id: "n5_np_10", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 10: LIỆT KÊ - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <table class="bang-tu-vung">
                <thead><tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr></thead>
                <tbody>
                    <tr><td>1. N1 や N2 など</td><td>Liệt kê tiêu biểu (Và... vân vân).</td><td>ほん や ざっし など。</td></tr>
                    <tr><td>2. N が V</td><td>Chủ ngữ với tự động từ (Có/Hiểu).</td><td>先生 が います。</td></tr>
                    <tr><td>3. N を あげます/もらいます</td><td>Cho và Nhận.</td><td>お金 を あげます。</td></tr>
                    <tr><td>4. N1 は N2 が あります</td><td>Sở hữu (N1 có N2).</td><td>わたし は 車 が あります。</td></tr>
                </tbody>
            </table>` 
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
    }
];

// ======================================================
// 3. KHO BÀI TẬP (TRẮC NGHIỆM)
// ======================================================
const KHO_BAI_TAP = [
    // Bộ N5 - Từ vựng
    { id: "n5_bt_1", cap_do: "N5", loai: "TuVung", tieu_de: "Từ vựng N5 - Bộ 1", cau_hoi: "Con mèo tiếng Nhật là gì?", lua_chon: ["Neko", "Inu", "Tori", "Ushi"], dap_an_dung: "Neko" },
    { id: "n5_bt_2", cap_do: "N5", loai: "TuVung", tieu_de: "Từ vựng N5 - Bộ 1", cau_hoi: "Số 1 tiếng Nhật là gì?", lua_chon: ["Ni", "San", "Ichi", "Yon"], dap_an_dung: "Ichi" },
    { id: "n5_bt_3", cap_do: "N5", loai: "TuVung", tieu_de: "Từ vựng N5 - Bộ 1", cau_hoi: "Màu đỏ là?", lua_chon: ["Ao", "Aka", "Shiro", "Kuro"], dap_an_dung: "Aka" },
    { id: "n5_bt_4", cap_do: "N5", loai: "TuVung", tieu_de: "Từ vựng N5 - Bộ 1", cau_hoi: "Quả táo là?", lua_chon: ["Ringo", "Mikan", "Suika", "Banana"], dap_an_dung: "Ringo" },
    { id: "n5_bt_5", cap_do: "N5", loai: "TuVung", tieu_de: "Từ vựng N5 - Bộ 1", cau_hoi: "Học sinh là?", lua_chon: ["Sensei", "Gakusei", "Kaishain", "Isha"], dap_an_dung: "Gakusei" },

    // Bộ N5 - Ngữ pháp
    { id: "n5_bt_6", cap_do: "N5", loai: "NguPhap", tieu_de: "Ngữ pháp N5 - Bộ 1", cau_hoi: "わたし ___ がくせいです。", lua_chon: ["を", "は", "に", "で"], dap_an_dung: "は" },
    { id: "n5_bt_7", cap_do: "N5", loai: "NguPhap", tieu_de: "Ngữ pháp N5 - Bộ 1", cau_hoi: "これは わたし ___ ほんです。", lua_chon: ["の", "に", "は", "を"], dap_an_dung: "の" },
    { id: "n5_bt_8", cap_do: "N5", loai: "NguPhap", tieu_de: "Ngữ pháp N5 - Bộ 1", cau_hoi: "図書館は ___ ですか。", lua_chon: ["だれ", "いつ", "どこ", "なん"], dap_an_dung: "どこ" },
    { id: "n5_bt_9", cap_do: "N5", loai: "NguPhap", tieu_de: "Ngữ pháp N5 - Bộ 1", cau_hoi: "日曜日 ___ 行きます。", lua_chon: ["に", "で", "を", "は"], dap_an_dung: "に" },
    { id: "n5_bt_10", cap_do: "N5", loai: "NguPhap", tieu_de: "Ngữ pháp N5 - Bộ 1", cau_hoi: "バス ___ 帰ります。", lua_chon: ["で", "に", "を", "と"], dap_an_dung: "で" }
];

// ======================================================
// 4. KHO ĐỀ THI THỬ
// ======================================================
const KHO_DE_THI = [
    { 
        id: "n5_de_1", cap_do: "N5", tieu_de: "Đề thi thử N5 - Tổng hợp 1", 
        danh_sach_cau_hoi: ["n5_bt_1", "n5_bt_2", "n5_bt_6", "n5_bt_7", "n5_bt_8"] 
    },
    { 
        id: "n5_de_2", cap_do: "N5", tieu_de: "Đề thi thử N5 - Tổng hợp 2", 
        danh_sach_cau_hoi: ["n5_bt_3", "n5_bt_4", "n5_bt_5", "n5_bt_9", "n5_bt_10"] 
    }
];
