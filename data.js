// 1. KHO BÀI HỌC (ĐÃ CẬP NHẬT NỘI DUNG BÀI 1)
const KHO_BAI_HOC = [
    // --- BÀI 1: TÔI LÀ... (TỪ VỰNG) ---
    { 
        id: "n5_tv_1", 
        cap_do: "N5", 
        loai: "TuVung", 
        tieu_de: "BÀI 1: TÔI LÀ... - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <p>Các danh từ cơ bản dùng trong giao tiếp và giới thiệu.</p>
            <table class="bang-tu-vung">
                <thead>
                    <tr>
                        <th>Hán tự/Kana</th>
                        <th>Romaji</th>
                        <th>Nghĩa Việt</th>
                        <th>Ghi chú</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>わたし</td><td>watashi</td><td>Tôi</td><td>Dùng cho cả nam và nữ</td></tr>
                    <tr><td>あなた</td><td>anata</td><td>Bạn, Anh/Chị</td><td>Nên dùng tên + さん thay cho あなた</td></tr>
                    <tr><td>あのひと</td><td>ano hito</td><td>Người đó, Vị đó</td><td>Lịch sự hơn: あのかた</td></tr>
                    <tr><td>〜さん</td><td>~san</td><td>Ông/Bà/Anh/Chị</td><td>Hậu tố lịch sự, gắn sau tên người</td></tr>
                    <tr><td>せんせい</td><td>sensei</td><td>Giáo viên, Thầy/Cô</td><td>Không dùng cho bản thân</td></tr>
                    <tr><td>がくせい</td><td>gakusei</td><td>Học sinh, Sinh viên</td><td></td></tr>
                    <tr><td>かいしゃいん</td><td>kaishain</td><td>Nhân viên công ty</td><td></td></tr>
                    <tr><td>しゃいん</td><td>shain</td><td>Nhân viên</td><td>Dùng kèm tên công ty (VD: VNG の しゃいん)</td></tr>
                    <tr><td>エンジニア</td><td>enjinia</td><td>Kỹ sư</td><td>(Từ mượn)</td></tr>
                    <tr><td>ベトナム</td><td>Betonamu</td><td>Việt Nam</td><td></td></tr>
                    <tr><td>アメリカ</td><td>Amerika</td><td>Mỹ</td><td></td></tr>
                    <tr><td>〜ご</td><td>~go</td><td>Tiếng (ngôn ngữ)</td><td>VD: にほんご (tiếng Nhật)</td></tr>
                </tbody>
            </table>
        ` 
    },
    // --- BÀI 1: TÔI LÀ... (NGỮ PHÁP) ---
    { 
        id: "n5_np_1", 
        cap_do: "N5", 
        loai: "NguPhap", 
        tieu_de: "BÀI 1: TÔI LÀ… - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <p>Các cấu trúc cơ bản dùng để giới thiệu và phủ định.</p>
            
            <table class="bang-tu-vung">
                <thead>
                    <tr>
                        <th>Cấu trúc</th>
                        <th>Giải thích & Cách dùng</th>
                        <th>Ví dụ Thực hành</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1. N1 は N2 です</td>
                        <td>Câu Khẳng Định - N1 là N2. は (đọc là wa) là trợ từ chỉ chủ đề. です thể hiện sự lịch sự.</td>
                        <td>わたし は ホアン です。</td>
                    </tr>
                    <tr>
                        <td>2. N1 は N2 じゃありません</td>
                        <td>Câu Phủ Định - N1 không phải là N2. じゃありません là dạng phủ định lịch sự.</td>
                        <td>わたし は せんせい じゃありません。</td>
                    </tr>
                    <tr>
                        <td>3. N1 は N2 ですか</td>
                        <td>Câu Nghi Vấn - Hỏi N1 có phải là N2 không? Thêm trợ từ か vào cuối câu khẳng định.</td>
                        <td>あなた は ベトナム人 ですか。<br>→ はい、ベトナム人です。</td>
                    </tr>
                    <tr>
                        <td>4. N1 も N2 です</td>
                        <td>Trợ từ も (Cũng là). Dùng thay thế cho は khi N1 có chung thông tin với câu trước.</td>
                        <td>わたしは がくせい です。リー **も** がくせい です。</td>
                    </tr>
                    <tr>
                        <td>5. N1 の N2</td>
                        <td>Nối Danh từ - Dùng の để nối 2 danh từ, thể hiện N2 thuộc về N1, N1 bổ nghĩa cho N2.</td>
                        <td>FPT の しゃいん。(Nhân viên của FPT.)</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="cau-truc-ngu-phap">
                <h3>💡 Ghi nhớ nhanh:</h3>
                <p>は (wa) là chủ đề, です là câu khẳng định, か là câu hỏi, も là cũng.</p>
            </div>
        ` 
    },
    
    // --- N4 (Giữ nguyên mẫu) ---
    { id: "n4_tv_1", cap_do: "N4", loai: "TuVung", tieu_de: "N4 - Từ vựng Bài 1", noi_dung: "Nội dung N4..." }
];

// 2. KHO BÀI TẬP (GIỮ NGUYÊN)
const KHO_BAI_TAP = [
    // N5 Từ vựng
    { id: "n5_bt_1", cap_do: "N5", loai: "TuVung", tieu_de: "N5 - Trắc nghiệm Từ vựng 1", cau_hoi: "Con mèo tiếng Nhật là gì?", lua_chon: ["Neko", "Inu", "Tori", "Ushi"], dap_an_dung: "Neko", audioSrc: "audio/n5_q1.mp3" },
    { id: "n5_bt_2", cap_do: "N5", loai: "TuVung", tieu_de: "N5 - Trắc nghiệm Từ vựng 2", cau_hoi: "Số 1 tiếng Nhật là gì?", lua_chon: ["Ni", "San", "Ichi", "Yon"], dap_an_dung: "Ichi", audioSrc: "audio/n5_q2.mp3" },
    { id: "n5_bt_3", cap_do: "N5", loai: "TuVung", tieu_de: "N5 - Trắc nghiệm Từ vựng 3", cau_hoi: "Màu đỏ là?", lua_chon: ["Ao", "Aka", "Shiro", "Kuro"], dap_an_dung: "Aka" },
    
    // N5 Ngữ Pháp
    { id: "n5_bt_4", cap_do: "N5", loai: "NguPhap", tieu_de: "N5 - Trắc nghiệm Ngữ pháp 1", cau_hoi: "わたし ___ がくせいです。", lua_chon: ["を (o)", "は (wa)", "に (ni)", "で (de)"], dap_an_dung: "は (wa)" },
    { id: "n5_bt_5", cap_do: "N5", loai: "NguPhap", tieu_de: "N5 - Trắc nghiệm Ngữ pháp 2", cau_hoi: "あれは わたし の ___ です。", lua_chon: ["ねこ (neko)", "いぬ (inu)", "ほん (hon)", "くるま (kuruma)"], dap_an_dung: "ほん (hon)" },
    { id: "n5_bt_6", cap_do: "N5", loai: "NguPhap", tieu_de: "N5 - Trắc nghiệm Ngữ pháp 3", cau_hoi: "Ngon là?", lua_chon: ["Oishi", "Mazui", "Takai", "Yasui"], dap_an_dung: "Oishi" },
    { id: "n5_bt_7", cap_do: "N5", loai: "NguPhap", tieu_de: "N5 - Trắc nghiệm Ngữ pháp 4", cau_hoi: "Đắt là?", lua_chon: ["Takai", "Hikui", "Hiroi", "Semai"], dap_an_dung: "Takai" },
    { id: "n5_bt_8", cap_do: "N5", loai: "NguPhap", tieu_de: "N5 - Trắc nghiệm Ngữ pháp 5", cau_hoi: "Quyển sách là?", lua_chon: ["Hon", "Pen", "Tsukue", "Isu"], dap_an_dung: "Hon" },
    
    // N4
    { id: "n4_bt_1", cap_do: "N4", loai: "NguPhap", tieu_de: "N4 - Bài 1", cau_hoi: "Câu hỏi N4...", lua_chon: ["A", "B", "C", "D"], dap_an_dung: "A" }
];

// 3. KHO ĐỀ THI (GIỮ NGUYÊN)
const KHO_DE_THI = [
    { id: "n5_de_1", cap_do: "N5", tieu_de: "Đề thi thử N5 - Số 1", danh_sach_cau_hoi: ["n5_bt_1", "n5_bt_4", "n5_bt_2"] },
    { id: "n5_de_2", cap_do: "N5", tieu_de: "Đề thi thử N5 - Số 2", danh_sach_cau_hoi: ["n5_bt_5", "n5_bt_7", "n5_bt_3"] },
    { id: "n4_de_1", cap_do: "N4", tieu_de: "Đề thi thử N4 - Số 1", danh_sach_cau_hoi: ["n4_bt_1"] }
];