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

// --- BÀI 2: TỪ VỰNG (THÊM MỚI) ---
    { 
        id: "n5_tv_2", 
        cap_do: "N5", 
        loai: "TuVung", 
        tieu_de: "BÀI 2: CÁI NÀY LÀ GÌ? - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <p>Các đại từ chỉ định và danh từ đồ vật cơ bản.</p>
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
                    <tr><td>これ</td><td>kore</td><td>Cái này</td><td>Vật gần người nói</td></tr>
                    <tr><td>それ</td><td>sore</td><td>Cái đó</td><td>Vật gần người nghe</td></tr>
                    <tr><td>あれ</td><td>are</td><td>Cái kia</td><td>Vật xa cả hai</td></tr>
                    <tr><td>この〜</td><td>kono</td><td>~ này</td><td>Bổ nghĩa cho Danh từ (VD: Kono hon)</td></tr>
                    <tr><td>その〜</td><td>sono</td><td>~ đó</td><td>Bổ nghĩa cho Danh từ</td></tr>
                    <tr><td>あの〜</td><td>ano</td><td>~ kia</td><td>Bổ nghĩa cho Danh từ</td></tr>
                    <tr><td>ほん</td><td>hon</td><td>Sách</td><td></td></tr>
                    <tr><td>ざっし</td><td>zasshi</td><td>Tạp chí</td><td></td></tr>
                    <tr><td>かぎ</td><td>kagi</td><td>Chìa khóa</td><td></td></tr>
                    <tr><td>とけい</td><td>tokei</td><td>Đồng hồ</td><td></td></tr>
                    <tr><td>じどうしゃ</td><td>jidousha</td><td>Xe ô tô</td><td></td></tr>
                    <tr><td>いくら</td><td>ikura</td><td>Bao nhiêu tiền</td><td></td></tr>
                    <tr><td>なん</td><td>nan</td><td>Cái gì</td><td>Dùng trước です/ですか</td></tr>
                    <tr><td>なんの N</td><td>nan no N</td><td>N gì</td><td>Dùng trước の (VD: Nan no hon)</td></tr>
                </tbody>
            </table>
        ` 
    },


    // ======================================================
    // BÀI 3: ĐỊA ĐIỂM & VỊ TRÍ
    // ======================================================
    { 
        id: "n5_tv_3", 
        cap_do: "N5", 
        loai: "TuVung", 
        tieu_de: "BÀI 3: ĐỊA ĐIỂM & VỊ TRÍ - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <p>Các từ chỉ địa điểm, phương hướng và vị trí.</p>
            <table class="bang-tu-vung">
                <thead>
                    <tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr>
                </thead>
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
            </table>
        `
    },



    // ======================================================
    // BÀI 4: THỜI GIAN & NGÀY THÁNG
    // ======================================================
    { 
        id: "n5_tv_4", 
        cap_do: "N5", 
        loai: "TuVung", 
        tieu_de: "BÀI 4: THỜI GIAN - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <p>Các từ vựng về thời gian, giờ giấc và lịch trình.</p>
            <table class="bang-tu-vung">
                <thead>
                    <tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr>
                </thead>
                <tbody>
                    <tr><td>いま</td><td>ima</td><td>Bây giờ</td><td></td></tr>
                    <tr><td>〜じ</td><td>~ji</td><td>Mấy giờ</td><td>VD: いちじ (1 giờ)</td></tr>
                    <tr><td>〜ふん / ぷん</td><td>~fun / pun</td><td>Mấy phút</td><td>Biến âm: 1,3,4,6,8,10 (pun)</td></tr>
                    <tr><td>はん</td><td>han</td><td>Rưỡi (30 phút)</td><td>VD: いちじはん</td></tr>
                    <tr><td>ごぜん</td><td>gozen</td><td>Sáng, AM</td><td></td></tr>
                    <tr><td>ごご</td><td>gogo</td><td>Chiều, PM</td><td></td></tr>
                    <tr><td>なんじ</td><td>nanji</td><td>Mấy giờ</td><td></td></tr>
                    <tr><td>なんぷん</td><td>nanpun</td><td>Mấy phút</td><td></td></tr>
                    <tr><td>やすみ</td><td>yasumi</td><td>Ngày nghỉ</td><td></td></tr>
                    <tr><td>しごと</td><td>shigoto</td><td>Công việc</td><td></td></tr>
                    <tr><td>テスト</td><td>tesuto</td><td>Bài kiểm tra</td><td>(Từ mượn)</td></tr>
                    <tr><td>ばんごう</td><td>bangō</td><td>Số (điện thoại...)</td><td></td></tr>
                    <tr><td>なんばん</td><td>nanban</td><td>Số mấy</td><td></td></tr>
                </tbody>
            </table>
        `
    },


    // ======================================================
    // BÀI 5: CHỦ THỂ & ĐỐI TƯỢNG (が・を)
    // ======================================================
    { 
        id: "n5_tv_5", 
        cap_do: "N5", 
        loai: "TuVung", 
        tieu_de: "BÀI 5: CHỦ THỂ & ĐỐI TƯỢNG - Từ vựng", 
        noi_dung: `
            <h3 class="tieu-de-phu">Từ vựng (Vocabulary)</h3>
            <p>Các động từ chỉ sự tồn tại và tính từ chỉ cảm xúc, năng lực.</p>
            <table class="bang-tu-vung">
                <thead>
                    <tr><th>Hán tự/Kana</th><th>Romaji</th><th>Nghĩa Việt</th><th>Ghi chú</th></tr>
                </thead>
                <tbody>
                    <tr><td>わかります</td><td>wakarimasu</td><td>Hiểu</td><td></td></tr>
                    <tr><td>あります</td><td>arimasu</td><td>Có</td><td>Dùng cho vật vô tri/thực vật</td></tr>
                    <tr><td>います</td><td>imasu</td><td>Có</td><td>Dùng cho người/động vật</td></tr>
                    <tr><td>すき (な)</td><td>suki</td><td>Thích</td><td>Tính từ đuôi Na</td></tr>
                    <tr><td>きらい (な)</td><td>kirai</td><td>Ghét, Không thích</td><td>Tính từ đuôi Na</td></tr>
                    <tr><td>じょうず (な)</td><td>jōzu</td><td>Giỏi</td><td>Không dùng khen bản thân</td></tr>
                    <tr><td>へた (な)</td><td>heta</td><td>Dở, Kém</td><td>Tính từ đuôi Na</td></tr>
                    <tr><td>おんなのひと</td><td>onna no hito</td><td>Phụ nữ</td><td></td></tr>
                    <tr><td>おとこのひと</td><td>otoko no hito</td><td>Đàn ông</td><td></td></tr>
                    <tr><td>こども</td><td>kodomo</td><td>Trẻ con</td><td></td></tr>
                    <tr><td>くだもの</td><td>kudamono</td><td>Trái cây</td><td></td></tr>
                    <tr><td>パン</td><td>pan</td><td>Bánh mì</td><td></td></tr>
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



    // --- BÀI 2: NGỮ PHÁP (THÊM MỚI) ---
    { 
        id: "n5_np_2", 
        cap_do: "N5", 
        loai: "NguPhap", 
        tieu_de: "BÀI 2: CÁI NÀY LÀ GÌ? - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <p>Học cách hỏi và trả lời về đồ vật xung quanh.</p>
            
            <table class="bang-tu-vung">
                <thead>
                    <tr>
                        <th style="width: 30%;">Cấu trúc</th>
                        <th style="width: 35%;">Giải thích & Cách dùng</th>
                        <th>Ví dụ Thực hành</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1. これ/それ/あれ は N です</td>
                        <td><strong>Câu Khẳng Định</strong><br>Dùng các đại từ chỉ định để chỉ vật. これ (cái này) không cần nhắc lại danh từ.</td>
                        <td>これ は じどうしゃ です。<br>(Cái này là ô tô.)</td>
                    </tr>
                    <tr>
                        <td>2. この/その/あの N は S です</td>
                        <td><strong>Danh từ chỉ định</strong><br>この, その, あの phải luôn luôn đứng trước danh từ để bổ nghĩa cho nó cụ thể hơn.</td>
                        <td>この ほん は わたし の です。<br>(Quyển sách này là của tôi.)</td>
                    </tr>
                    <tr>
                        <td>3. S は なん ですか</td>
                        <td><strong>Câu hỏi "Cái gì"</strong><br>Dùng なん (nani/nan) để hỏi về tên của vật, hoặc nội dung.</td>
                        <td>それは なん ですか。<br>→ これは ざっし です。<br>(Cái đó là cái gì? -> Cái này là tạp chí.)</td>
                    </tr>
                    <tr>
                        <td>4. N1 は N2 の N3 です</td>
                        <td><strong>Sở hữu/Thuộc tính</strong><br>N3 thuộc loại N2 của N1. Dùng の nối các danh từ để làm rõ nghĩa.</td>
                        <td>この とけい は ドイツ の カメラ の です。<br>(Cái đồng hồ này là của hãng máy ảnh Đức.)</td>
                    </tr>
                    <tr>
                        <td>5. そうです / そうじゃありません</td>
                        <td><strong>Trả lời xác nhận</strong><br>Dùng khi muốn trả lời xác nhận hoặc phủ định nội dung câu hỏi danh từ một cách ngắn gọn.</td>
                        <td>
                            A: あれは わたし の かぎ ですか。<br>
                            B: はい、そうです。<br>
                            C: いいえ、そうじゃありません。
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <div class="cau-truc-ngu-phap">
                <h3>💡 Ghi nhớ nhanh:</h3>
                <p><strong>Kore/Sore/Are</strong> đứng một mình.</p>
                <p><strong>Kono/Sono/Ano</strong> phải đi kèm danh từ (Kono hon...).</p>
            </div>
        ` 
    },



    { 
        id: "n5_np_3", 
        cap_do: "N5", 
        loai: "NguPhap", 
        tieu_de: "BÀI 3: ĐỊA ĐIỂM & VỊ TRÍ - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <p>Cách hỏi và chỉ dẫn đường đi, vị trí của vật.</p>
            <table class="bang-tu-vung">
                <thead>
                    <tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1. N1 は どこ ですか</td>
                        <td><strong>Câu hỏi Địa điểm</strong><br>Hỏi về vị trí của N1. Trả lời bằng cách dùng đại từ chỉ vị trí hoặc danh từ địa điểm.</td>
                        <td>トイレ は どこ ですか。<br>(Nhà vệ sinh ở đâu?)<br>→ あそこです。 (Ở đằng kia.)</td>
                    </tr>
                    <tr>
                        <td>2. N1 は N2 です</td>
                        <td><strong>Câu khẳng định Địa điểm</strong><br>N1 nằm ở N2 (Danh từ chỉ địa điểm).</td>
                        <td>会議室 は ３階 です。<br>(Phòng họp ở tầng 3.)</td>
                    </tr>
                    <tr>
                        <td>3. N1 は N2 の N3 です</td>
                        <td><strong>Chỉ vị trí chi tiết</strong><br>N3 là danh từ chỉ vị trí (trên, dưới, trong...). N2 là mốc. Dùng の để nối.</td>
                        <td>郵便局 は 銀行 の となり です。<br>(Bưu điện ở bên cạnh ngân hàng.)<br>本 は つくえ の うえ です。<br>(Sách ở trên bàn.)</td>
                    </tr>
                    <tr>
                        <td>4. お国 は どちら ですか</td>
                        <td><strong>Hỏi lịch sự (Quốc tịch/Nơi chốn)</strong><br>どちら là dạng lịch sự của どこ. Thường dùng hỏi người mới gặp, cấp trên.</td>
                        <td>お国 は どちら ですか。<br>(Quốc gia của anh/chị là ở đâu?)<br>→ ベトナムです。</td>
                    </tr>
                </tbody>
            </table>
        `
    },



    { 
        id: "n5_np_4", 
        cap_do: "N5", 
        loai: "NguPhap", 
        tieu_de: "BÀI 4: THỜI GIAN - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <p>Cách hỏi giờ, nói về thời gian làm việc và nghỉ ngơi.</p>
            <table class="bang-tu-vung">
                <thead>
                    <tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1. いま、なんじですか</td>
                        <td><strong>Hỏi giờ</strong><br>Dùng なんじ để hỏi giờ. Chú ý các biến âm của phút (fun/pun).</td>
                        <td>いま、なんじ ですか。<br>→ ごぜん ９時半 です。<br>(Bây giờ là 9 giờ rưỡi sáng.)</td>
                    </tr>
                    <tr>
                        <td>2. N1 は N2 です</td>
                        <td><strong>Thời gian kết thúc</strong><br>N2 là thời điểm. Thường dùng nói về giờ giấc hoạt động.</td>
                        <td>銀行 は ３時 まで です。<br>(Ngân hàng làm việc đến 3 giờ.)</td>
                    </tr>
                    <tr>
                        <td>3. N から N まで</td>
                        <td><strong>Từ... đến...</strong><br>から (từ), まで (đến). Dùng cho cả khoảng thời gian và khoảng cách địa điểm.</td>
                        <td>９時 から ５時 まで はたらきます。<br>(Tôi làm việc từ 9 giờ đến 5 giờ.)</td>
                    </tr>
                    <tr>
                        <td>4. N1 と N2</td>
                        <td><strong>Liệt kê (Và)</strong><br>Dùng trợ từ と để nối các danh từ.</td>
                        <td>休み は 土曜日 と 日曜日 です。<br>(Ngày nghỉ là Thứ Bảy và Chủ Nhật.)</td>
                    </tr>
                    <tr>
                        <td>5. N1 は N2 ですね</td>
                        <td><strong>Xác nhận thông tin</strong><br>Thêm ね ở cuối câu để tìm kiếm sự đồng tình hoặc xác nhận lại cho chắc chắn.</td>
                        <td>会議 は １０時 です ね。<br>(Cuộc họp là lúc 10 giờ, đúng không?)</td>
                    </tr>
                </tbody>
            </table>
        `
    },


    { 
        id: "n5_np_5", 
        cap_do: "N5", 
        loai: "NguPhap", 
        tieu_de: "BÀI 5: CHỦ THỂ & ĐỐI TƯỢNG - Ngữ pháp", 
        noi_dung: `
            <h3 class="tieu-de-phu">Ngữ pháp (Grammar)</h3>
            <p>Học cách nói về sở thích, năng lực và sự tồn tại.</p>
            <table class="bang-tu-vung">
                <thead>
                    <tr><th>Cấu trúc</th><th>Giải thích & Cách dùng</th><th>Ví dụ Thực hành</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1. N が あります/います</td>
                        <td><strong>Sự tồn tại (Có)</strong><br>Dùng が để chỉ chủ thể tồn tại. あります cho vật, います cho người/động vật.</td>
                        <td>私 は 車 が あります。<br>(Tôi có ô tô.)<br>へや に 子ども が います。<br>(Có trẻ con trong phòng.)</td>
                    </tr>
                    <tr>
                        <td>2. N が すき/きらい...</td>
                        <td><strong>Đối tượng của Cảm xúc/Năng lực</strong><br>Các tính từ yêu ghét, giỏi kém (suki, kirai, jozu, heta) luôn đi với trợ từ が.</td>
                        <td>わたし は おんがく が すき です。<br>(Tôi thích âm nhạc.)<br>かれ は 日本語 が へた です。<br>(Anh ấy kém tiếng Nhật.)</td>
                    </tr>
                    <tr>
                        <td>3. どんな N</td>
                        <td><strong>Hỏi về loại N</strong><br>Dùng どんな để hỏi về tính chất, chủng loại cụ thể của danh từ.</td>
                        <td>どんな スポーツ が 好きですか。<br>(Bạn thích môn thể thao nào?)</td>
                    </tr>
                    <tr>
                        <td>4. あまり + Phủ Định</td>
                        <td><strong>Phó từ mức độ (Không... lắm)</strong><br>あまり luôn đi kèm với câu phủ định.</td>
                        <td>わたしは さかなが あまり 好き じゃありません。<br>(Tôi không thích cá lắm.)</td>
                    </tr>
                    <tr>
                        <td>5. ぜんぜん + Phủ Định</td>
                        <td><strong>Phó từ mức độ (Hoàn toàn không)</strong><br>Nhấn mạnh sự phủ định hoàn toàn.</td>
                        <td>わたしは おかねが ぜんぜん ありません。<br>(Tôi hoàn toàn không có tiền.)</td>
                    </tr>
                </tbody>
            </table>
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


// 4. DỮ LIỆU BẢNG CHỮ CÁI
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