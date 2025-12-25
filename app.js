document.addEventListener("DOMContentLoaded", function() {

    // ======================================================
    // 0. CẤU HÌNH & KHỞI TẠO BIẾN TOÀN CỤC
    // ======================================================
    const SO_ITEM_MOI_TRANG = 9; 
    const NGAY_THI = new Date("2025-12-07T00:00:00").getTime(); 

    let trangHienTai = 1, capDoDangXem = "", loaiDangXem = "", modeBangChuCai = 'hiragana';
    let boDemGio, thoiGianConLai = 0, deThiHienTai = {}, diemSo = 0;

    // Bắt các phần tử DOM chính
    const cotNoiDung = document.querySelector(".content");
    const cotNoiDungBt = document.querySelector(".content-bt");
    const cotNoiDungThi = document.querySelector(".content-thi");
    const sidebar = document.querySelector(".sidebar");
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const menuList = document.querySelector(".menu-chinh ul");

    // ======================================================
    // 1. CÁC HÀM TIỆN ÍCH (HELPER FUNCTIONS)
    // ======================================================
    
    // Hàm xáo trộn mảng (Dùng cho bài tập trắc nghiệm)
    function shuffleArray(array) {
        let newArray = [...array]; 
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    // Hàm phát âm thanh (Text-to-Speech)
    window.playSound = (text) => {
        if('speechSynthesis' in window) {
            window.speechSynthesis.cancel(); // Dừng âm thanh đang đọc dở
            let u = new SpeechSynthesisUtterance(text);
            u.lang = 'ja-JP'; 
            window.speechSynthesis.speak(u);
        } else {
            alert("Trình duyệt của bạn không hỗ trợ đọc âm thanh.");
        }
    };

    // Hàm đọc từ vựng riêng cho Flashcard (QUAN TRỌNG: Chặn lật thẻ)
    window.docTuVung = function(e, text) {
        e.stopPropagation(); // Ngăn sự kiện click lan ra ngoài (không lật thẻ)
        playSound(text);
    };

    // Hàm đánh dấu bài học đã hoàn thành
    window.toggleDaHoc = function(id) {
        let dsDaHoc = JSON.parse(localStorage.getItem("bai_da_hoc")) || [];
        const btn = document.getElementById("nut-danh-dau");

        if (dsDaHoc.includes(id)) {
            dsDaHoc = dsDaHoc.filter(i => i !== id);
            if(btn) { btn.innerText = "⭕ Đánh dấu đã học"; btn.classList.remove("da-hoc"); }
        } else {
            dsDaHoc.push(id);
            if(btn) { btn.innerText = "✅ Đã học xong"; btn.classList.add("da-hoc"); }
        }
        localStorage.setItem("bai_da_hoc", JSON.stringify(dsDaHoc));
    };

    // ======================================================
    // 2. UI & ĐIỀU HƯỚNG (NAVIGATION)
    // ======================================================
    
    // Xử lý menu mobile
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener("click", () => menuList.classList.toggle("mobile-menu-open"));
    }

    // Tô màu menu hiện tại
    let currentUrl = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".menu-chinh a").forEach(link => {
        if(link.getAttribute("href") === currentUrl) {
            link.style.backgroundColor = "#e69500"; link.style.color = "white"; link.style.borderBottom = "none";
        }
    });

    // Xử lý click ở Sidebar (Chọn cấp độ)
    if (sidebar) {
        sidebar.addEventListener("click", (e) => {
            // Click Bảng chữ cái
            if (e.target.closest("[data-loai='bang-chu-cai']")) {
                e.preventDefault(); 
                loaiDangXem = "bang-chu-cai"; 
                veGiaoDien(); 
                return;
            }
            // Click menu cấp 1 (N5, N4...) để xổ xuống
            if (e.target.closest(".link-cap-1")) {
                e.preventDefault();
                e.target.closest(".link-cap-1").parentElement.classList.toggle("active");
            }
            // Click menu con (Từ vựng/Ngữ pháp)
            if (e.target.classList.contains("link-cap-2")) {
                e.preventDefault();
                trangHienTai = 1; 
                capDoDangXem = e.target.dataset.capdo; 
                loaiDangXem = e.target.dataset.loai;
                
                // Highlight mục đang chọn
                document.querySelectorAll(".link-cap-2").forEach(l => l.classList.remove("active-sub"));
                e.target.classList.add("active-sub");

                veGiaoDien();
            }
        });
    }

    // Hàm điều phối hiển thị dựa trên loại đang xem
    function veGiaoDien() {
        if (loaiDangXem === "bang-chu-cai") hienThiBangChuCai();
        else if (loaiDangXem && loaiDangXem.startsWith("bai-hoc")) hienThiDanhSach("BAI_HOC");
        else if (loaiDangXem && loaiDangXem.startsWith("bai-tap")) hienThiDanhSachBoBaiTap();
        else if (loaiDangXem === "de-thi" && cotNoiDungThi) hienThiDanhSach("DE_THI");
    }

    // ======================================================
    // 3. HIỂN THỊ NỘI DUNG (CORE FEATURES)
    // ======================================================

    // A. HIỂN THỊ DANH SÁCH BÀI HỌC / ĐỀ THI (Dạng lưới)
    function hienThiDanhSach(type) {
        let data = (type === "BAI_HOC") ? KHO_BAI_HOC : KHO_DE_THI;
        let container = (type === "BAI_HOC") ? cotNoiDung : cotNoiDungThi;
        
        if (!container) return;

        let list = data.filter(i => i.cap_do == capDoDangXem);

        if (type === "BAI_HOC") { 
            let loaiCanTim = loaiDangXem.split('-').pop(); 
            list = list.filter(i => i.loai == loaiCanTim);
        }

        let dsDaHoc = JSON.parse(localStorage.getItem("bai_da_hoc")) || [];

        let html = `<h1>Danh sách ${capDoDangXem} - ${type === "BAI_HOC" ? "Bài Học" : "Đề Thi"}</h1><div class="grid-container">`;
        
        if(list.length === 0) {
            html += `<p>Chưa có dữ liệu cho mục này.</p>`;
        } else {
            list.forEach(item => {
                let cls = (type === "DE_THI") ? "link-de-thi card-item" : "link-bai-hoc card-item";
                let checkIcon = (type === "BAI_HOC" && dsDaHoc.includes(item.id)) 
                    ? '<i class="fas fa-check-circle" style="color:green; position:absolute; top:10px; right:10px; font-size: 1.2em;"></i>' 
                    : '';

                html += `<a href="#" class="${cls}" data-id="${item.id}">
                            ${checkIcon}
                            <h3>${item.tieu_de}</h3>
                         </a>`;
            });
        }
        html += `</div>`;
        container.innerHTML = html;
    }

    // B. HIỂN THỊ CHI TIẾT BÀI HỌC (PHIÊN BẢN MỚI: BẢNG + FLASHCARD + LOA)
    function hienThiChiTietBaiHoc(id) {
        const baiHoc = KHO_BAI_HOC.find(b => b.id == id);
        if (!baiHoc) return;

        let dsDaHoc = JSON.parse(localStorage.getItem("bai_da_hoc")) || [];
        let isDone = dsDaHoc.includes(id);
        let btnText = isDone ? "✅ Đã học xong" : "⭕ Đánh dấu đã học";
        let btnClass = isDone ? "da-hoc" : "";

        // 1. Lấy nội dung gốc (Bảng)
        let noiDungGoc = baiHoc.noi_dung;
        let phanFlashcard = "";

        // 2. Logic tạo Flashcard
        if (baiHoc.loai === 'TuVung') {
            // Tạo div ảo để phân tích HTML
            let divAo = document.createElement('div');
            divAo.innerHTML = noiDungGoc;
            let rows = divAo.querySelectorAll('table tbody tr');

            if (rows.length > 0) {
                phanFlashcard = `
                    <div class="flashcard-container">
                        <div class="flashcard-title"><i class="fas fa-layer-group"></i> Luyện tập qua Thẻ (Flashcard)</div>
                        <div class="flashcard-grid">
                `;

                rows.forEach(row => {
                    let cols = row.querySelectorAll('td');
                    if (cols.length >= 2) {
                        // Cột 1: Từ vựng chính (Kanji/Từ)
                        let cot1 = cols[0].innerHTML; 
                        let tuVungChinh = cols[0].querySelector('.tu-vung-lon') ? cols[0].querySelector('.tu-vung-lon').innerText : cols[0].innerText;
                        
                        // Lấy phần cách đọc (Romaji/Kana)
                        let tempDiv = document.createElement('div');
                        tempDiv.innerHTML = cot1;
                        if(tempDiv.querySelector('.tu-vung-lon')) tempDiv.querySelector('.tu-vung-lon').remove();
                        let phuAm = tempDiv.innerText.replace(/[()]/g, '').trim(); 

                        // Cột 2: Nghĩa
                        let nghia = cols[1].innerText;

                        // Tạo thẻ HTML
                        phanFlashcard += `
                            <div class="card-flip" onclick="this.classList.toggle('is-flipped')">
                                <div class="card-inner">
                                    <div class="card-front">
                                        <div class="btn-loa" onclick="docTuVung(event, '${tuVungChinh}')" title="Nghe phát âm">
                                            <i class="fas fa-volume-up"></i>
                                        </div>

                                        <div class="card-main-text">${tuVungChinh}</div>
                                        <div class="card-sub-text">${phuAm}</div>
                                        <div class="icon-flip"><i class="fas fa-sync"></i> Lật</div>
                                    </div>
                                    <div class="card-back">
                                        ${nghia}
                                    </div>
                                </div>
                            </div>
                        `;
                    }
                });
                phanFlashcard += `</div></div>`;
            }
        }

        // 3. Ghép giao diện
        const html = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                <button id="nut-quay-lai" class="btn-back" style="margin:0;"><i class="fas fa-arrow-left"></i> Quay lại</button>
                <button id="nut-danh-dau" class="btn-action ${btnClass}" onclick="toggleDaHoc('${id}')">${btnText}</button>
            </div>
            
            <h1 style="color: #e65100; border-bottom: 2px solid #eee; padding-bottom:10px;">${baiHoc.tieu_de}</h1>
            
            <div class="noi-dung-bai-hoc">
                ${noiDungGoc}
            </div>

            ${phanFlashcard}

            <div class="cau-truc-ngu-phap" style="margin-top:30px; text-align:center;">
                <p><i>💡 Mẹo: Bấm vào <i class="fas fa-volume-up"></i> để nghe, bấm vào thẻ để lật xem nghĩa.</i></p>
            </div>
        `;
        
        cotNoiDung.innerHTML = html;
        window.scrollTo(0, 0);
    }

    // C. HIỂN THỊ BÀI TẬP TRẮC NGHIỆM
    function hienThiDanhSachBoBaiTap() {
        if (!cotNoiDungBt) return; 

        let loaiCanTim = loaiDangXem.split('-').pop(); 
        
        let listBaiTap = KHO_BAI_TAP.filter(bt => 
            bt.cap_do == capDoDangXem && bt.loai == loaiCanTim
        );

        if (listBaiTap.length === 0) {
            cotNoiDungBt.innerHTML = `<h3>Chưa có bài tập nào cho mục này (${capDoDangXem} - ${loaiCanTim})</h3>`;
            return;
        }

        let html = `<h1>Luyện tập ${capDoDangXem} - ${loaiCanTim}</h1>`;
        
        listBaiTap.forEach((bai, index) => {
            // Xáo trộn đáp án để mỗi lần vào là thứ tự khác nhau
            let luaChonNgauNhien = shuffleArray(bai.lua_chon);

            html += `
                <div class="khoi-cau-hoi">
                    <p class="cau-hoi"><b>Câu ${index + 1}:</b> ${bai.cau_hoi}</p>
                    <div class="dap-an">
                        ${luaChonNgauNhien.map(dapAn => 
                            `<button class="lua-chon" onclick="kiemTraDapAn(this, '${dapAn}', '${bai.dap_an_dung}')">${dapAn}</button>`
                        ).join('')}
                    </div>
                    <p class="phan-hoi"></p>
                </div>
            `;
        });
        cotNoiDungBt.innerHTML = html;
    }

    // Hàm kiểm tra đáp án bài tập
    window.kiemTraDapAn = function(btn, chon, dung) {
        let parent = btn.parentElement;
        let phanHoi = parent.nextElementSibling; 
        let siblings = parent.querySelectorAll(".lua-chon");
        
        siblings.forEach(b => {
            b.disabled = true; // Khóa tất cả nút sau khi chọn
            if(b.innerText == dung) b.classList.add("dung"); // Hiện đáp án đúng
        });

        if (chon === dung) {
            btn.classList.add("dung");
            phanHoi.innerText = "Chính xác! 🎉";
            phanHoi.className = "phan-hoi dung";
        } else {
            btn.classList.add("sai");
            phanHoi.innerText = `Sai rồi! Đáp án đúng là: ${dung}`;
            phanHoi.className = "phan-hoi sai";
        }
    };

    // D. HIỂN THỊ BẢNG CHỮ CÁI
    function hienThiBangChuCai() {
        if(!cotNoiDung) return;
        
        // Chuyển đổi chế độ Hiragana/Katakana
        window.switchMode = (m) => { modeBangChuCai = m; hienThiBangChuCai(); };

        let html = `
            <div class="alphabet-header">
                <h1>Bảng chữ cái</h1>
                <div class="toggle-container">
                    <button class="toggle-btn ${modeBangChuCai === 'hiragana' ? 'active-hiragana' : ''}" onclick="switchMode('hiragana')">Hiragana</button> 
                    <button class="toggle-btn ${modeBangChuCai === 'katakana' ? 'active-katakana' : ''}" onclick="switchMode('katakana')">Katakana</button>
                </div>
            </div>
            <div class="kana-grid">
        `;
        
        KANA_DATA.forEach(k => {
            let char = modeBangChuCai === 'hiragana' ? k.h : k.k;
            if(char) {
                html += `<div class="kana-card" onclick="playSound('${char}')">
                            <i class="fas fa-volume-up volume-icon"></i>
                            <div class="kana-char ${modeBangChuCai === 'hiragana' ? 'text-hiragana' : 'text-katakana'}">${char}</div>
                            <div class="kana-romaji">${k.r}</div>
                         </div>`;
            } else {
                html += `<div class="kana-card" style="visibility:hidden"></div>`; // Ô trống
            }
        });
        html += `</div>`;
        cotNoiDung.innerHTML = html;
    }

    // ======================================================
    // 4. LOGIC THI THỬ (EXAM MODE)
    // ======================================================
    function batDauThi(id) {
        deThiHienTai = KHO_DE_THI.find(dt => dt.id == id);
        if(!deThiHienTai) return alert("Lỗi: Không tìm thấy đề thi!");

        document.body.classList.add("che-do-tap-trung");
        thoiGianConLai = (deThiHienTai.cap_do === "N1") ? 10200 : 3600; // N1 ~ 170p, N5 ~ 60p

        cotNoiDungThi.innerHTML = `
            <div class="thi-header-sticky">
                <button id="nut-thoat-thi" class="btn-back" style="background:#555; color:white; margin:0;">&larr; Thoát</button>
                <h2 style="margin:0; font-size:1.2em;">${deThiHienTai.tieu_de}</h2>
                <div class="dong-ho" id="dong-ho">00:00</div>
            </div>
            <div class="thi-container-body">
                <div class="giao-dien-thi" style="box-shadow:none; border:none; padding:0;"></div>
            </div>
            <button id="nut-nop-bai">Nộp Bài</button>
        `;

        let container = document.querySelector(".giao-dien-thi");
        let html = "";
        let cauSo = 1;

        deThiHienTai.danh_sach_cau_hoi.forEach(idCau => {
            let bai = KHO_BAI_TAP.find(b => b.id == idCau);
            if(!bai) return;

            // Xử lý hiển thị bài đọc hiểu nhóm (Mondai 7, 8, 9...)
            if(bai.loai === "DocHieu_Nhom" || bai.loai === "DocHieu_DoanVan") {
                if(bai.huong_dan) html += `<div class="huong-dan-mondai">${bai.huong_dan}</div>`;
                html += `
                    <div class="nhom-cau-hoi-container">
                        <div class="bai-doc-dai">
                            <h3 style="color:#e65100; margin-top:0;">${bai.tieu_de}</h3>
                            ${bai.bai_doc}
                        </div>
                        <div class="danh-sach-cau-hoi-con">
                `;
                bai.ds_cau_hoi_con.forEach(con => { html += renderCauHoi(con, cauSo++); });
                html += `</div></div>`;
            } else {
                // Câu hỏi đơn (Từ vựng, Ngữ pháp, Đọc ngắn)
                if(bai.huong_dan) html += `<div class="huong-dan-mondai">${bai.huong_dan}</div>`;
                html += renderCauHoi(bai, cauSo++);
            }
        });

        container.innerHTML = html;
        
        // Sự kiện chọn đáp án
        document.querySelectorAll(".lua-chon-thi").forEach(btn => {
            btn.addEventListener("click", function() {
                this.parentElement.querySelectorAll(".lua-chon-thi").forEach(b => b.classList.remove("selected"));
                this.classList.add("selected");
            });
        });

        document.getElementById("nut-nop-bai").addEventListener("click", ketThucThi);
        document.getElementById("nut-thoat-thi").addEventListener("click", () => {
            if(confirm("Thoát bài thi? Kết quả sẽ không được lưu.")) {
                document.body.classList.remove("che-do-tap-trung");
                clearInterval(boDemGio);
                veGiaoDien();
            }
        });

        // Đồng hồ đếm ngược
        clearInterval(boDemGio);
        boDemGio = setInterval(() => {
            thoiGianConLai--;
            let h = Math.floor(thoiGianConLai/3600);
            let m = Math.floor((thoiGianConLai%3600)/60);
            let s = thoiGianConLai%60;
            document.getElementById("dong-ho").innerText = `${h}:${m<10?'0'+m:m}:${s<10?'0'+s:s}`;
            if(thoiGianConLai <= 0) ketThucThi();
        }, 1000);

        window.scrollTo(0,0);
    }

    // Hàm render 1 câu hỏi trắc nghiệm trong bài thi
    function renderCauHoi(bai, index) {
        let textDoc = bai.cau_hoi.replace(/<[^>]*>?/gm, ''); // Lọc HTML để đọc
        return `
            <div class="khoi-cau-hoi" data-id="${bai.id}">
                <p class="cau-hoi">
                    <b>Câu ${index}:</b> ${bai.cau_hoi}
                    <i class="fas fa-volume-up" onclick="playSound('${textDoc}')" style="cursor:pointer; color:#ccc; margin-left:10px;" title="Đọc câu hỏi"></i>
                </p>
                <div class="dap-an">
                    ${bai.lua_chon.map(c => `<button class="lua-chon-thi" data-dung="${c==bai.dap_an_dung}">${c}</button>`).join('')}
                </div>
            </div>
        `;
    }

    // Hàm kết thúc bài thi & Chấm điểm
    function ketThucThi() {
        clearInterval(boDemGio);
        let diem = 0, total = 0;
        document.querySelectorAll(".khoi-cau-hoi").forEach(div => {
            total++;
            let chon = div.querySelector(".selected");
            let dung = div.querySelector(`button[data-dung="true"]`);
            if(dung) dung.style.backgroundColor = "#d4edda"; // Hiện đáp án đúng màu xanh
            
            if(chon) {
                if(chon.dataset.dung == "true") {
                    diem++;
                } else {
                    chon.style.backgroundColor = "#f8d7da"; // Hiện câu sai màu đỏ
                }
            }
        });
        
        let ketQua = { de: deThiHienTai.tieu_de, diem: diem, tong: total, ngay: new Date().toLocaleString() };
        let ls = JSON.parse(localStorage.getItem("lich_su_thi")) || [];
        ls.push(ketQua);
        localStorage.setItem("lich_su_thi", JSON.stringify(ls));

        alert(`Kết quả: ${diem}/${total}`);
        document.getElementById("nut-nop-bai").style.display = "none";
        window.scrollTo(0,0);
    }

    // ======================================================
    // 5. CÁC TÍNH NĂNG TOÀN TRANG KHÁC
    // ======================================================
    
    // Sự kiện click chung cho nội dung chính
    if (cotNoiDung) cotNoiDung.addEventListener("click", (e) => { 
        if (e.target.closest(".link-bai-hoc")) { 
            e.preventDefault(); 
            hienThiChiTietBaiHoc(e.target.closest(".link-bai-hoc").dataset.id); 
        }
        if (e.target.id == "nut-quay-lai") veGiaoDien();
    });

    if (cotNoiDungThi) cotNoiDungThi.addEventListener("click", (e) => {
        if (e.target.closest(".link-de-thi")) { 
            e.preventDefault(); 
            batDauThi(e.target.closest(".link-de-thi").dataset.id); 
        }
    });

    // Chức năng Tìm kiếm
    const formTimKiem = document.querySelector(".form-tim-kiem");
    if (formTimKiem) {
        formTimKiem.addEventListener("submit", function(e) {
            e.preventDefault();
            const input = this.querySelector("input");
            const tuKhoa = input.value.trim().toLowerCase();
            if (!tuKhoa) return alert("Vui lòng nhập từ khóa!");
            sessionStorage.setItem("tu_khoa_tim_kiem", tuKhoa);
            window.location.href = "bai-hoc.html";
        });
    }

    // Xử lý hiển thị kết quả tìm kiếm (khi chuyển trang)
    if (window.location.pathname.includes("bai-hoc.html") && cotNoiDung) {
        const tuKhoa = sessionStorage.getItem("tu_khoa_tim_kiem");
        if (tuKhoa) {
            const ketQua = KHO_BAI_HOC.filter(bai => 
                bai.tieu_de.toLowerCase().includes(tuKhoa)
            );
            
            let html = `<h1>Kết quả tìm kiếm: "${tuKhoa}"</h1><div class="grid-container">`;
            if (ketQua.length === 0) {
                html += `<p>Không tìm thấy bài học nào phù hợp.</p>`;
            } else {
                ketQua.forEach(item => {
                    let dsDaHoc = JSON.parse(localStorage.getItem("bai_da_hoc")) || [];
                    let checkIcon = dsDaHoc.includes(item.id) ? '<i class="fas fa-check-circle" style="color:green; position:absolute; top:10px; right:10px; font-size:1.2em;"></i>' : '';
                    html += `<a href="#" class="link-bai-hoc card-item" data-id="${item.id}">${checkIcon}<h3>${item.tieu_de}</h3></a>`;
                });
            }
            html += `</div><div style="text-align:center; margin-top:20px;"><button class="btn-back" onclick="window.location.reload(); sessionStorage.removeItem('tu_khoa_tim_kiem')">Xóa tìm kiếm</button></div>`;
            cotNoiDung.innerHTML = html;
            sessionStorage.removeItem("tu_khoa_tim_kiem");
        }
    }

    // Đồng hồ đếm ngược ngày thi JLPT
    function khoiTaoDongHoDemNguoc() {
        if (sessionStorage.getItem("an_dong_ho") === "true") return;
        const html = `
            <div id="khung-dem-nguoc">
                <div class="nut-tat-countdown">x</div>
                <div class="tieu-de-countdown">Sắp tới JLPT</div>
                <div class="bo-dem-so">
                    <span id="cd-ngay">0</span>
                    <div class="don-vi-tg"><span>Ngày</span></div>
                </div>
            </div>`;
        document.body.insertAdjacentHTML('beforeend', html);
        
        document.querySelector(".nut-tat-countdown").onclick = () => {
            document.getElementById("khung-dem-nguoc").style.display = "none";
            sessionStorage.setItem("an_dong_ho", "true");
        };
        
        let diff = Math.floor((NGAY_THI - new Date()) / (1000*60*60*24));
        if(document.getElementById("cd-ngay")) document.getElementById("cd-ngay").innerText = diff > 0 ? diff : 0;
    }
    khoiTaoDongHoDemNguoc();

    // Nút dịch nhanh (Google Translate)
    let btnDich = document.createElement("div"); 
    btnDich.id = "nut-dich-nhanh"; 
    btnDich.innerHTML = "<i class='fas fa-language'></i> Dịch"; 
    document.body.appendChild(btnDich);

    document.addEventListener("mouseup", () => {
        let s = window.getSelection().toString().trim();
        if(s) {
            let r = window.getSelection().getRangeAt(0).getBoundingClientRect();
            btnDich.style.display = "block";
            btnDich.style.top = (r.top + window.scrollY - 40) + "px";
            btnDich.style.left = r.left + "px";
        } else {
            btnDich.style.display = "none";
        }
    });
    
    btnDich.onmousedown = (e) => {
        e.preventDefault();
        window.open(`https://translate.google.com/?sl=ja&tl=vi&text=${encodeURIComponent(window.getSelection().toString())}`, '_blank');
    };

    // Nút lên đầu trang
    const btnLenDau = document.getElementById("btn-len-dau-trang");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) btnLenDau.style.display = "block";
        else btnLenDau.style.display = "none";
    });
    btnLenDau.addEventListener("click", () => window.scrollTo({top: 0, behavior: 'smooth'}));

    // ======================================================
    // 6. QUẢN LÝ THÀNH VIÊN (TRANG CHỦ)
    // ======================================================
    const khungDangKy = document.getElementById("khung-dang-ky");
    const khungChaoMung = document.getElementById("khung-chao-mung");
    const spanTen = document.getElementById("ten-nguoi-dung");
    const formDangKy = document.getElementById("form-dang-ky");
    const nutDangXuat = document.getElementById("nut-dang-xuat");

    function checkLogin() {
        let ten = localStorage.getItem("hocvien_ten");
        if (ten) {
            if(khungDangKy) khungDangKy.style.display = "none";
            if(khungChaoMung) { khungChaoMung.style.display = "block"; spanTen.textContent = ten; }
        } else {
            if(khungDangKy) khungDangKy.style.display = "block";
            if(khungChaoMung) khungChaoMung.style.display = "none";
        }
    }
    checkLogin();

    if(formDangKy) {
        formDangKy.addEventListener("submit", (e) => {
            e.preventDefault();
            let tenInput = document.getElementById("ten").value;
            if(tenInput) {
                localStorage.setItem("hocvien_ten", tenInput);
                alert("Chào mừng " + tenInput + "!"); 
                checkLogin();
            }
        });
    }
    if(nutDangXuat) {
        nutDangXuat.addEventListener("click", () => {
            if(confirm("Bạn có chắc muốn đăng xuất?")) { 
                localStorage.removeItem("hocvien_ten"); 
                checkLogin(); 
            }
        });
    }

});
