document.addEventListener("DOMContentLoaded", function() {

    // ======================================================
    // 0. HÀM TIỆN ÍCH (Xáo trộn mảng & Chuyển đổi Flashcard)
    // ======================================================

    // Hàm xáo trộn đáp án (Fisher-Yates Shuffle)
    function shuffleArray(array) {
        // Tạo một bản sao để không làm hỏng dữ liệu gốc
        let newArray = [...array]; 
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    // Hàm chuyển đổi bảng HTML sang giao diện Flashcard
    function chuyenDoiBangSangFlashcard(htmlString) {
        let div = document.createElement('div');
        div.innerHTML = htmlString;

        let table = div.querySelector('table');
        if (!table) return htmlString; 

        let rows = table.querySelectorAll('tbody tr');
        if (rows.length === 0) return htmlString;

        let cardHtml = `<h3 class="tieu-de-phu">Flashcard Từ Vựng (Bấm vào thẻ để lật)</h3><div class="flashcard-grid">`;

        rows.forEach(row => {
            let cols = row.querySelectorAll('td');
            // Giả định: [0]Kana, [1]Romaji, [2]Nghĩa
            if (cols.length >= 3) {
                let nhat = cols[0].innerText;
                let romaji = cols[1].innerText;
                let viet = cols[2].innerText;
                
                cardHtml += `
                    <div class="flashcard" onclick="this.classList.toggle('flipped')">
                        <div class="flashcard-inner">
                            <div class="flashcard-front">
                                <div class="fc-main">${nhat}</div>
                                <div class="fc-sub">${romaji}</div>
                                <i class="fas fa-sync-alt" style="position:absolute; bottom:10px; color:#ccc; font-size:12px;"></i>
                            </div>
                            <div class="flashcard-back">
                                ${viet}
                            </div>
                        </div>
                    </div>
                `;
            }
        });
        cardHtml += `</div>`;
        return htmlString.replace(/<table.*<\/table>/s, cardHtml); 
    }

    // ======================================================
    // 1. CẤU HÌNH & KHỞI TẠO BIẾN
@@ -180,327 +140,383 @@
        if(container) container.innerHTML = html;
    }

    // B. HIỂN THỊ CHI TIẾT BÀI HỌC (Có Flashcard)
    function hienThiChiTietBaiHoc(id) {
        const baiHoc = KHO_BAI_HOC.find(b => b.id == id);
        if (!baiHoc) return;
   // B. HIỂN THỊ CHI TIẾT BÀI HỌC (PHIÊN BẢN MỚI: BẢNG + FLASHCARD)
function hienThiChiTietBaiHoc(id) {
    const baiHoc = KHO_BAI_HOC.find(b => b.id == id);
    if (!baiHoc) return;

    let dsDaHoc = JSON.parse(localStorage.getItem("bai_da_hoc")) || [];
    let isDone = dsDaHoc.includes(id);
    let btnText = isDone ? "✅ Đã học xong" : "⭕ Đánh dấu đã học";
    let btnClass = isDone ? "da-hoc" : "";

    // 1. Lấy nội dung gốc (Bảng) để hiển thị phần trên
    let noiDungGoc = baiHoc.noi_dung;
    let phanFlashcard = "";

    // 2. Logic tạo Flashcard mới (Nằm ngay tại đây)
    if (baiHoc.loai === 'TuVung') {
        let divAo = document.createElement('div');
        divAo.innerHTML = noiDungGoc;
        let rows = divAo.querySelectorAll('table tbody tr');

        if (rows.length > 0) {
            phanFlashcard = `
                <div class="flashcard-container">
                    <div class="flashcard-title"><i class="fas fa-layer-group"></i> Luyện tập qua Thẻ (Flashcard)</div>
                    <div class="flashcard-grid">
            `;

        let dsDaHoc = JSON.parse(localStorage.getItem("bai_da_hoc")) || [];
        let isDone = dsDaHoc.includes(id);
        let btnText = isDone ? "✅ Đã học xong" : "⭕ Đánh dấu đã học";
        let btnClass = isDone ? "da-hoc" : "";

        // --- XỬ LÝ FLASHCARD NẾU LÀ TỪ VỰNG ---
        let noiDungHienThi = baiHoc.noi_dung;
        if (baiHoc.loai === 'TuVung') {
            noiDungHienThi = chuyenDoiBangSangFlashcard(baiHoc.noi_dung);
            rows.forEach(row => {
                let cols = row.querySelectorAll('td');
                // Kiểm tra xem có đủ dữ liệu không để tạo thẻ
                if (cols.length >= 2) {
                    // Lấy cột 1 (Kanji/Kana) - Lọc bỏ các thẻ span để lấy text sạch
                    let cot1 = cols[0].innerHTML; 
                    let tuVungChinh = cols[0].querySelector('.tu-vung-lon') ? cols[0].querySelector('.tu-vung-lon').innerText : cols[0].innerText;
                    
                    // Lấy phần cách đọc (Romaji/Kana)
                    let tempDiv = document.createElement('div');
                    tempDiv.innerHTML = cot1;
                    if(tempDiv.querySelector('.tu-vung-lon')) tempDiv.querySelector('.tu-vung-lon').remove();
                    let phuAm = tempDiv.innerText.replace(/[()]/g, '').trim(); 

                    // Lấy cột 2 (Nghĩa tiếng Việt)
                    let nghia = cols[1].innerText;

                    // Tạo HTML cho từng thẻ
                    phanFlashcard += `
                        <div class="card-flip" onclick="this.classList.toggle('is-flipped')">
                            <div class="card-inner">
                                <div class="card-front">
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

        const html = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                <button id="nut-quay-lai" class="btn-back" style="margin:0;"><i class="fas fa-arrow-left"></i> Quay lại</button>
                <button id="nut-danh-dau" class="btn-action ${btnClass}" onclick="toggleDaHoc('${id}')">${btnText}</button>
            </div>
            <h1 style="color: #e65100; border-bottom: 2px solid #eee; padding-bottom:10px;">${baiHoc.tieu_de}</h1>
            <div class="noi-dung-bai-hoc">${noiDungHienThi}</div>
            <div class="cau-truc-ngu-phap" style="margin-top:30px; text-align:center;">
                <p><i>Chúc bạn học tốt! Hãy ghi chép lại nhé.</i></p>
            </div>
        `;
    // 3. Ghép giao diện: Bảng ở trên, Flashcard ở dưới
    const html = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
            <button id="nut-quay-lai" class="btn-back" style="margin:0;"><i class="fas fa-arrow-left"></i> Quay lại</button>
            <button id="nut-danh-dau" class="btn-action ${btnClass}" onclick="toggleDaHoc('${id}')">${btnText}</button>
        </div>
        
        cotNoiDung.innerHTML = html;
        window.scrollTo(0, 0);
    }
        <h1 style="color: #e65100; border-bottom: 2px solid #eee; padding-bottom:10px;">${baiHoc.tieu_de}</h1>
        
        <div class="noi-dung-bai-hoc">
            ${noiDungGoc}
        </div>

        ${phanFlashcard}

        <div class="cau-truc-ngu-phap" style="margin-top:30px; text-align:center;">
            <p><i>💡 Mẹo: Bấm vào thẻ để lật xem nghĩa. Học thuộc bảng ở trên rồi xuống đây kiểm tra trí nhớ nhé!</i></p>
        </div>
    `;
    
    cotNoiDung.innerHTML = html;
    window.scrollTo(0, 0);
}
    // C. HIỂN THỊ BÀI TẬP (Có Xáo trộn đáp án)
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
            // --- ÁP DỤNG XÁO TRỘN ĐÁP ÁN ---
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

    // D. BẢNG CHỮ CÁI
    function hienThiBangChuCai() {
        let html = `<div class="alphabet-header"><h1>Bảng chữ cái</h1><div><button class="toggle-btn" onclick="switchMode('hiragana')">Hiragana</button> <button class="toggle-btn" onclick="switchMode('katakana')">Katakana</button></div></div><div class="kana-grid">`;
        KANA_DATA.forEach(k => {
            let char = modeBangChuCai === 'hiragana' ? k.h : k.k;
            html += `<div class="kana-card" onclick="playSound('${char}')"><div class="kana-char">${char}</div><div>${k.r}</div></div>`;
        });
        html += `</div>`;
        cotNoiDung.innerHTML = html;
    }

    // ======================================================
    // 6. LOGIC THI THỬ
    // ======================================================
    function batDauThi(id) {
        deThiHienTai = KHO_DE_THI.find(dt => dt.id == id);
        if(!deThiHienTai) return alert("Lỗi: Không tìm thấy đề thi!");

        document.body.classList.add("che-do-tap-trung");
        thoiGianConLai = (deThiHienTai.cap_do === "N1") ? 10200 : 3600; 

        cotNoiDungThi.innerHTML = `
            <div class="thi-header-sticky">
                <button id="nut-thoat-thi" class="btn-back" style="background:#555; color:white; margin:0;">&larr; Thoát</button>
                <h2 style="margin:0; font-size:1.2em;">${deThiHienTai.tieu_de}</h2>
                <div class="dong-ho-noi" id="dong-ho">00:00</div>
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
    // Logic cho câu hỏi đơn (Từ vựng, Ngữ pháp...)
    if(bai.huong_dan) html += `<div class="huong-dan-mondai">${bai.huong_dan}</div>`;
    html += renderCauHoi(bai, cauSo++);
}
        });

        container.innerHTML = html;

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

    function renderCauHoi(bai, index) {
        let textDoc = bai.cau_hoi.replace(/<[^>]*>?/gm, '');
        // Không shuffle đáp án trong bài thi (để giữ nguyên đề chuẩn)
        return `
            <div class="khoi-cau-hoi" data-id="${bai.id}">
                <p class="cau-hoi">
                    <b>Câu ${index}:</b> ${bai.cau_hoi}
                    <i class="fas fa-volume-up" onclick="playSound('${textDoc}')" style="cursor:pointer; color:#ccc; margin-left:10px;"></i>
                </p>
                <div class="dap-an">
                    ${bai.lua_chon.map(c => `<button class="lua-chon-thi" data-dung="${c==bai.dap_an_dung}">${c}</button>`).join('')}
                </div>
            </div>
        `;
    }

    function ketThucThi() {
        clearInterval(boDemGio);
        let diem = 0, total = 0;
        document.querySelectorAll(".khoi-cau-hoi").forEach(div => {
            total++;
            let chon = div.querySelector(".selected");
            let dung = div.querySelector(`button[data-dung="true"]`);
            if(dung) dung.style.backgroundColor = "#d4edda";
            if(chon) {
                if(chon.dataset.dung == "true") diem++;
                else chon.style.backgroundColor = "#f8d7da";
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
    // 7. SỰ KIỆN & GLOBAL HELPERS
    // ======================================================

    if (cotNoiDung) cotNoiDung.addEventListener("click", (e) => { 
        if (e.target.closest(".link-bai-hoc")) { e.preventDefault(); hienThiChiTietBaiHoc(e.target.closest(".link-bai-hoc").dataset.id); }
        if (e.target.id == "nut-quay-lai") veGiaoDien();
    });
    if (cotNoiDungThi) cotNoiDungThi.addEventListener("click", (e) => {
        if (e.target.closest(".link-de-thi")) { e.preventDefault(); batDauThi(e.target.closest(".link-de-thi").dataset.id); }
    });

    window.switchMode = (m) => { modeBangChuCai = m; hienThiBangChuCai(); };

    window.playSound = (text) => {
        if('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            let u = new SpeechSynthesisUtterance(text);
            u.lang = 'ja-JP'; window.speechSynthesis.speak(u);
        }
    };

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

    window.kiemTraDapAn = function(btn, chon, dung) {
        let parent = btn.parentElement;
        let phanHoi = parent.nextElementSibling; 
        let siblings = parent.querySelectorAll(".lua-chon");
        siblings.forEach(b => {
            b.disabled = true; 
            if(b.innerText == dung) b.classList.add("dung"); 
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

    // ======================================================
    // 8. TÍNH NĂNG TÌM KIẾM
    // ======================================================
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

    // ======================================================
    // 9. CÁC TIỆN ÍCH KHÁC
    // ======================================================
    function khoiTaoDongHoDemNguoc() {
        if (sessionStorage.getItem("an_dong_ho") === "true") return;
        const html = `<div id="khung-dem-nguoc"><div class="nut-tat-countdown">x</div><div>Còn <b id="cd-ngay">0</b> ngày</div></div>`;
        document.body.insertAdjacentHTML('beforeend', html);
        document.querySelector(".nut-tat-countdown").onclick = () => {
            document.getElementById("khung-dem-nguoc").style.display = "none";
            sessionStorage.setItem("an_dong_ho", "true");
        };
        let diff = Math.floor((NGAY_THI - new Date()) / (1000*60*60*24));
        if(document.getElementById("cd-ngay")) document.getElementById("cd-ngay").innerText = diff;
    }
    khoiTaoDongHoDemNguoc();

    let btnDich = document.createElement("div"); btnDich.id = "nut-dich-nhanh"; btnDich.innerHTML = "Dịch"; document.body.appendChild(btnDich);
    document.addEventListener("mouseup", () => {
        let s = window.getSelection().toString().trim();
        if(s) {
            let r = window.getSelection().getRangeAt(0).getBoundingClientRect();
            btnDich.style.display = "block";
            btnDich.style.top = (r.top + window.scrollY - 30) + "px";
            btnDich.style.left = r.left + "px";
        } else btnDich.style.display = "none";
    });
    btnDich.onmousedown = (e) => {
        e.preventDefault();
        window.open(`https://translate.google.com/?sl=ja&tl=vi&text=${encodeURIComponent(window.getSelection().toString())}`, '_blank');
    };

});
