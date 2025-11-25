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
        noi_dung: `<h3 class="tieu-de-phu">Từ vựng</h3><table class="bang-tu-vung"><thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead><tbody><tr><td>わたし</td><td>watashi</td><td>Tôi</td><td></td></tr><tr><td>あなた</td><td>anata</td><td>Bạn</td><td></td></tr><tr><td>せんせい</td><td>sensei</td><td>Giáo viên</td><td></td></tr><tr><td>がくせい</td><td>gakusei</td><td>Học sinh</td><td></td></tr><tr><td>かいしゃいん</td><td>kaishain</td><td>Nhân viên công ty</td><td></td></tr><tr><td>〜じん</td><td>~jin</td><td>Người nước...</td><td>VD: Betonamu-jin</td></tr></tbody></table>` 
    },
    { 
        id: "n5_np_1", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 1: TÔI LÀ... - Ngữ pháp", 
        noi_dung: `<h3 class="tieu-de-phu">Ngữ pháp</h3><table class="bang-tu-vung"><thead><tr><th>Cấu trúc</th><th>Giải thích</th><th>Ví dụ</th></tr></thead><tbody><tr><td>N1 は N2 です</td><td>Khẳng định: N1 là N2</td><td>わたし は ガック です。</td></tr><tr><td>N1 は N2 じゃありません</td><td>Phủ định: N1 không phải N2</td><td>わたし は 先生 じゃありません。</td></tr><tr><td>N1 は N2 ですか</td><td>Nghi vấn: N1 là N2 phải không?</td><td>あなた は 学生 ですか。</td></tr></tbody></table>` 
    },

    // BÀI 2: CÁI NÀY LÀ GÌ?
    { 
        id: "n5_tv_2", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 2: CÁI NÀY LÀ GÌ? - Từ vựng", 
        noi_dung: `<h3 class="tieu-de-phu">Từ vựng</h3><table class="bang-tu-vung"><thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead><tbody><tr><td>これ</td><td>kore</td><td>Cái này</td><td>Gần người nói</td></tr><tr><td>それ</td><td>sore</td><td>Cái đó</td><td>Gần người nghe</td></tr><tr><td>あれ</td><td>are</td><td>Cái kia</td><td>Xa cả hai</td></tr><tr><td>ほん</td><td>hon</td><td>Sách</td><td></td></tr><tr><td>とけい</td><td>tokei</td><td>Đồng hồ</td><td></td></tr></tbody></table>` 
    },
    { 
        id: "n5_np_2", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 2: CÁI NÀY LÀ GÌ? - Ngữ pháp", 
        noi_dung: `<h3 class="tieu-de-phu">Ngữ pháp</h3><table class="bang-tu-vung"><thead><tr><th>Cấu trúc</th><th>Giải thích</th><th>Ví dụ</th></tr></thead><tbody><tr><td>これ/それ/あれ は N です</td><td>Chỉ định từ làm chủ ngữ</td><td>これ は 本 です。</td></tr><tr><td>この/その/あの N</td><td>Bổ nghĩa cho danh từ</td><td>この 本 は 私の です。</td></tr></tbody></table>` 
    },

    // BÀI 3: ĐỊA ĐIỂM & VỊ TRÍ
    { 
        id: "n5_tv_3", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 3: ĐỊA ĐIỂM - Từ vựng", 
        noi_dung: `<h3 class="tieu-de-phu">Từ vựng</h3><table class="bang-tu-vung"><thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead><tbody><tr><td>ここ</td><td>koko</td><td>Chỗ này</td><td></td></tr><tr><td>そこ</td><td>soko</td><td>Chỗ đó</td><td></td></tr><tr><td>あそこ</td><td>asoko</td><td>Chỗ kia</td><td></td></tr><tr><td>どこ</td><td>doko</td><td>Ở đâu</td><td></td></tr><tr><td>うえ</td><td>ue</td><td>Trên</td><td></td></tr><tr><td>した</td><td>shita</td><td>Dưới</td><td></td></tr></tbody></table>` 
    },
    { 
        id: "n5_np_3", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 3: ĐỊA ĐIỂM - Ngữ pháp", 
        noi_dung: `<h3 class="tieu-de-phu">Ngữ pháp</h3><table class="bang-tu-vung"><thead><tr><th>Cấu trúc</th><th>Giải thích</th><th>Ví dụ</th></tr></thead><tbody><tr><td>N は どこ ですか</td><td>Hỏi địa điểm</td><td>トイレ は どこ ですか。</td></tr><tr><td>N1 は N2 (địa điểm) です</td><td>N1 ở N2</td><td>山田さんは 事務所 です。</td></tr></tbody></table>` 
    },

    // BÀI 4: THỜI GIAN
    { 
        id: "n5_tv_4", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 4: THỜI GIAN - Từ vựng", 
        noi_dung: `<h3 class="tieu-de-phu">Từ vựng</h3><table class="bang-tu-vung"><thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead><tbody><tr><td>いま</td><td>ima</td><td>Bây giờ</td><td></td></tr><tr><td>〜じ</td><td>~ji</td><td>Mấy giờ</td><td></td></tr><tr><td>〜ふん</td><td>~fun</td><td>Mấy phút</td><td></td></tr><tr><td>やすみ</td><td>yasumi</td><td>Nghỉ ngơi/Ngày nghỉ</td><td></td></tr></tbody></table>` 
    },
    { 
        id: "n5_np_4", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 4: THỜI GIAN - Ngữ pháp", 
        noi_dung: `<h3 class="tieu-de-phu">Ngữ pháp</h3><table class="bang-tu-vung"><thead><tr><th>Cấu trúc</th><th>Giải thích</th><th>Ví dụ</th></tr></thead><tbody><tr><td>今、何時 ですか</td><td>Hỏi giờ</td><td>今、９時半 です。</td></tr><tr><td>N1 から N2 まで</td><td>Từ... đến...</td><td>９時 から ５時 まで。</td></tr></tbody></table>` 
    },

    // BÀI 5: CHỦ THỂ & ĐỐI TƯỢNG
    { 
        id: "n5_tv_5", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 5: CÓ/THÍCH - Từ vựng", 
        noi_dung: `<h3 class="tieu-de-phu">Từ vựng</h3><table class="bang-tu-vung"><thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead><tbody><tr><td>あります</td><td>arimasu</td><td>Có (vật)</td><td></td></tr><tr><td>います</td><td>imasu</td><td>Có (người/con vật)</td><td></td></tr><tr><td>すき</td><td>suki</td><td>Thích</td><td></td></tr><tr><td>きらい</td><td>kirai</td><td>Ghét</td><td></td></tr></tbody></table>` 
    },
    { 
        id: "n5_np_5", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 5: CÓ/THÍCH - Ngữ pháp", 
        noi_dung: `<h3 class="tieu-de-phu">Ngữ pháp</h3><table class="bang-tu-vung"><thead><tr><th>Cấu trúc</th><th>Giải thích</th><th>Ví dụ</th></tr></thead><tbody><tr><td>N が あります/います</td><td>Chỉ sự tồn tại</td><td>車 が あります。</td></tr><tr><td>N が すき です</td><td>Chỉ sở thích</td><td>日本料理 が 好き です。</td></tr></tbody></table>` 
    },

    // --- MÔ-ĐUN 2: ĐỘNG TỪ & HÀNH ĐỘNG ---

    // BÀI 6: ĐỘNG TỪ THỂ MASU
    { 
        id: "n5_tv_6", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 6: ĐỘNG TỪ - Từ vựng", 
        noi_dung: `<h3 class="tieu-de-phu">Từ vựng</h3><table class="bang-tu-vung"><thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Loại ĐT</th></tr></thead><tbody><tr><td>いきます</td><td>ikimasu</td><td>Đi</td><td>Nhóm I</td></tr><tr><td>きます</td><td>kimasu</td><td>Đến</td><td>Nhóm III</td></tr><tr><td>かえります</td><td>kaerimasu</td><td>Về</td><td>Nhóm I</td></tr><tr><td>たべます</td><td>tabemasu</td><td>Ăn</td><td>Nhóm II</td></tr><tr><td>のみます</td><td>nomimasu</td><td>Uống</td><td>Nhóm I</td></tr></tbody></table>` 
    },
    { 
        id: "n5_np_6", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 6: ĐỘNG TỪ - Ngữ pháp", 
        noi_dung: `<h3 class="tieu-de-phu">Ngữ pháp</h3><table class="bang-tu-vung"><thead><tr><th>Cấu trúc</th><th>Giải thích</th><th>Ví dụ</th></tr></thead><tbody><tr><td>N を V</td><td>Tác động lên tân ngữ</td><td>ごはん を 食べます。</td></tr><tr><td>N で V</td><td>Làm gì ở đâu</td><td>レストラン で 食べます。</td></tr></tbody></table>` 
    },

    // BÀI 7: PHƯƠNG TIỆN & ĐI CÙNG
    { 
        id: "n5_tv_7", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 7: PHƯƠNG TIỆN - Từ vựng", 
        noi_dung: `<h3 class="tieu-de-phu">Từ vựng</h3><table class="bang-tu-vung"><thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead><tbody><tr><td>でんしゃ</td><td>densha</td><td>Tàu điện</td><td></td></tr><tr><td>バス</td><td>basu</td><td>Xe buýt</td><td></td></tr><tr><td>ともだち</td><td>tomodachi</td><td>Bạn bè</td><td></td></tr></tbody></table>` 
    },
    { 
        id: "n5_np_7", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 7: PHƯƠNG TIỆN - Ngữ pháp", 
        noi_dung: `<h3 class="tieu-de-phu">Ngữ pháp</h3><table class="bang-tu-vung"><thead><tr><th>Cấu trúc</th><th>Giải thích</th><th>Ví dụ</th></tr></thead><tbody><tr><td>N で V</td><td>Phương tiện thực hiện</td><td>バス で 行きます。</td></tr><tr><td>N と V</td><td>Làm cùng ai</td><td>友達 と 行きます。</td></tr></tbody></table>` 
    },

    // BÀI 8: TRAO & NHẬN
    { 
        id: "n5_tv_8", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 8: TRAO NHẬN - Từ vựng", 
        noi_dung: `<h3 class="tieu-de-phu">Từ vựng</h3><table class="bang-tu-vung"><thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead><tbody><tr><td>かいます</td><td>kaimasu</td><td>Mua</td><td></td></tr><tr><td>かきます</td><td>kakimasu</td><td>Viết</td><td></td></tr><tr><td>てがみ</td><td>tegami</td><td>Thư</td><td></td></tr></tbody></table>` 
    },
    { 
        id: "n5_np_8", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 8: TRAO NHẬN - Ngữ pháp", 
        noi_dung: `<h3 class="tieu-de-phu">Ngữ pháp</h3><table class="bang-tu-vung"><thead><tr><th>Cấu trúc</th><th>Giải thích</th><th>Ví dụ</th></tr></thead><tbody><tr><td>N に V</td><td>Đối tượng nhận hành động</td><td>先生 に 書きます。</td></tr><tr><td>N を V</td><td>Tân ngữ trực tiếp</td><td>手紙 を 書きます。</td></tr></tbody></table>` 
    },

    // BÀI 9: MỤC ĐÍCH
    { 
        id: "n5_tv_9", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 9: MỤC ĐÍCH - Từ vựng", 
        noi_dung: `<h3 class="tieu-de-phu">Từ vựng</h3><table class="bang-tu-vung"><thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead><tbody><tr><td>あいます</td><td>aimasu</td><td>Gặp</td><td></td></tr><tr><td>かいもの</td><td>kaimono</td><td>Mua sắm</td><td></td></tr><tr><td>しょくじ</td><td>shokuji</td><td>Dùng bữa</td><td></td></tr></tbody></table>` 
    },
    { 
        id: "n5_np_9", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 9: MỤC ĐÍCH - Ngữ pháp", 
        noi_dung: `<h3 class="tieu-de-phu">Ngữ pháp</h3><table class="bang-tu-vung"><thead><tr><th>Cấu trúc</th><th>Giải thích</th><th>Ví dụ</th></tr></thead><tbody><tr><td>V(bỏ mas)/N に 行きます</td><td>Đi để làm gì</td><td>買い物 に 行きます。</td></tr><tr><td>N に 会います</td><td>Gặp ai</td><td>友達 に 会います。</td></tr></tbody></table>` 
    },

    // BÀI 10: LIỆT KÊ
    { 
        id: "n5_tv_10", cap_do: "N5", loai: "TuVung", tieu_de: "BÀI 10: LIỆT KÊ - Từ vựng", 
        noi_dung: `<h3 class="tieu-de-phu">Từ vựng</h3><table class="bang-tu-vung"><thead><tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr></thead><tbody><tr><td>いろいろ</td><td>iroiro</td><td>Nhiều loại</td><td></td></tr><tr><td>など</td><td>nado</td><td>Vân vân</td><td></td></tr></tbody></table>` 
    },
    { 
        id: "n5_np_10", cap_do: "N5", loai: "NguPhap", tieu_de: "BÀI 10: LIỆT KÊ - Ngữ pháp", 
        noi_dung: `<h3 class="tieu-de-phu">Ngữ pháp</h3><table class="bang-tu-vung"><thead><tr><th>Cấu trúc</th><th>Giải thích</th><th>Ví dụ</th></tr></thead><tbody><tr><td>N1 や N2 など</td><td>Liệt kê đại diện</td><td>本 や ノート など。</td></tr></tbody></table>` 
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
