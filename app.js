document.addEventListener("DOMContentLoaded", function() {

    // 1. CẤU HÌNH
    const SO_ITEM_MOI_TRANG = 9; 
    const SO_CAU_MOI_BO = 5;
    const NGAY_THI = new Date("2025-12-07T00:00:00").getTime(); 

    let trangHienTai = 1, capDoDangXem = "", loaiDangXem = "", modeBangChuCai = 'hiragana';
    let boDemGio, thoiGianConLai = 0, deThiHienTai = {}, diemSo = 0;

    // 2. UI & EVENT
    const cotNoiDung = document.querySelector(".content");
    const cotNoiDungBt = document.querySelector(".content-bt");
    const cotNoiDungThi = document.querySelector(".content-thi");
    const sidebar = document.querySelector(".sidebar");
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const menuList = document.querySelector(".menu-chinh ul");

    if (hamburgerBtn) hamburgerBtn.addEventListener("click", () => menuList.classList.toggle("mobile-menu-open"));

    // Tô màu menu
    let currentUrl = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".menu-chinh a").forEach(link => {
        if(link.getAttribute("href") === currentUrl) {
            link.style.backgroundColor = "#e69500"; link.style.color = "white"; link.style.borderBottom = "none";
        }
    });

    // 3. QUẢN LÝ THÀNH VIÊN
    const khungDangKy = document.getElementById("khung-dang-ky");
    const khungChaoMung = document.getElementById("khung-chao-mung");
    const spanTen = document.getElementById("ten-nguoi-dung");

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

    if(document.getElementById("form-dang-ky")) {
        document.getElementById("form-dang-ky").addEventListener("submit", (e) => {
            e.preventDefault();
            localStorage.setItem("hocvien_ten", document.getElementById("ten").value);
            alert("Chào mừng bạn!"); checkLogin();
        });
    }
    if(document.getElementById("nut-dang-xuat")) {
        document.getElementById("nut-dang-xuat").addEventListener("click", () => {
            if(confirm("Đăng xuất?")) { localStorage.removeItem("hocvien_ten"); checkLogin(); }
        });
    }

    // 4. ĐIỀU HƯỚNG
    if (sidebar) {
        sidebar.addEventListener("click", (e) => {
            if (e.target.closest("[data-loai='bang-chu-cai']")) {
                e.preventDefault(); loaiDangXem = "bang-chu-cai"; veGiaoDien(); return;
            }
            if (e.target.closest(".link-cap-1")) {
                e.preventDefault();
                e.target.closest(".link-cap-1").parentElement.classList.toggle("active");
            }
            if (e.target.classList.contains("link-cap-2")) {
                e.preventDefault();
                trangHienTai = 1; capDoDangXem = e.target.dataset.capdo; loaiDangXem = e.target.dataset.loai;
                veGiaoDien();
            }
        });
    }

    function veGiaoDien() {
        if (loaiDangXem === "bang-chu-cai") hienThiBangChuCai();
        else if (loaiDangXem.startsWith("bai-hoc")) hienThiDanhSach("BAI_HOC");
        else if (loaiDangXem.startsWith("bai-tap")) hienThiDanhSachBoBaiTap();
        else if (loaiDangXem === "de-thi" && cotNoiDungThi) hienThiDanhSach("DE_THI");
    }

    // 5. HIỂN THỊ NỘI DUNG
    function hienThiDanhSach(type) {
        let data = (type === "BAI_HOC") ? KHO_BAI_HOC : KHO_DE_THI;
        let container = (type === "BAI_HOC") ? cotNoiDung : cotNoiDungThi;
        let list = data.filter(i => i.cap_do == capDoDangXem);
        if(type === "BAI_HOC") list = list.filter(i => i.loai == loaiDangXem.split('-')[1]);

        let html = `<h1>Danh sách ${capDoDangXem}</h1><div class="grid-container">`;
        list.forEach(item => {
            let cls = (type === "DE_THI") ? "link-de-thi card-item" : "link-bai-hoc card-item";
            html += `<a href="#" class="${cls}" data-id="${item.id}"><h3>${item.tieu_de}</h3></a>`;
        });
        html += `</div>`;
        container.innerHTML = html;
    }

    function hienThiBangChuCai() {
        let html = `<div class="alphabet-header"><h1>Bảng chữ cái</h1><div><button class="toggle-btn" onclick="switchMode('hiragana')">Hiragana</button> <button class="toggle-btn" onclick="switchMode('katakana')">Katakana</button></div></div><div class="kana-grid">`;
        KANA_DATA.forEach(k => {
            let char = modeBangChuCai === 'hiragana' ? k.h : k.k;
            html += `<div class="kana-card" onclick="playSound('${char}')"><div class="kana-char">${char}</div><div>${k.r}</div></div>`;
        });
        html += `</div>`;
        cotNoiDung.innerHTML = html;
    }
    window.switchMode = (m) => { modeBangChuCai = m; hienThiBangChuCai(); };

    // --- 6. LOGIC THI THỬ (FOCUS MODE) ---
    function batDauThi(id) {
        deThiHienTai = KHO_DE_THI.find(dt => dt.id == id);
        if(!deThiHienTai) return alert("Lỗi: Không tìm thấy đề thi!");

        // KÍCH HOẠT CHẾ ĐỘ TẬP TRUNG (Ẩn Menu, Sidebar)
        document.body.classList.add("che-do-tap-trung");

        thoiGianConLai = (deThiHienTai.cap_do === "N1") ? 10200 : 3600; 

        // Header dính (Sticky)
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

            // Xử lý Bài đọc nhóm (Chia cột)
            if(bai.loai === "DocHieu_Nhom") {
                if(bai.huong_dan) html += `<div class="huong-dan-mondai">${bai.huong_dan}</div>`;
                html += `
                    <div class="nhom-cau-hoi-container">
                        <div class="bai-doc-dai">
                            <h3 style="color:#e65100; margin-top:0;">${bai.tieu_de}</h3>
                            ${bai.bai_doc}
                        </div>
                        <div class="danh-sach-cau-hoi-con">
                `;
                bai.ds_cau_hoi_con.forEach(con => {
                    html += renderCauHoi(con, cauSo++);
                });
                html += `</div></div>`;
            } 
            // Xử lý Câu lẻ
            else {
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

        // Nộp bài & Thoát
        document.getElementById("nut-nop-bai").addEventListener("click", ketThucThi);
        document.getElementById("nut-thoat-thi").addEventListener("click", () => {
            if(confirm("Thoát bài thi? Kết quả sẽ không được lưu.")) {
                document.body.classList.remove("che-do-tap-trung"); // Hủy chế độ tập trung
                clearInterval(boDemGio);
                veGiaoDien();
            }
        });

        // Đồng hồ
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

    // --- CLICK EVENT LISTENER ---
    if (cotNoiDung) cotNoiDung.addEventListener("click", (e) => { 
        if (e.target.closest(".link-bai-hoc")) { e.preventDefault(); hienThiChiTietBaiHoc(e.target.closest(".link-bai-hoc").dataset.id); }
        if (e.target.id == "nut-quay-lai") veGiaoDien();
    });
    if (cotNoiDungThi) cotNoiDungThi.addEventListener("click", (e) => {
        if (e.target.closest(".link-de-thi")) { e.preventDefault(); batDauThi(e.target.closest(".link-de-thi").dataset.id); }
    });

    // --- TIỆN ÍCH ---
    window.playSound = (text) => {
        if('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            let u = new SpeechSynthesisUtterance(text);
            u.lang = 'ja-JP'; window.speechSynthesis.speak(u);
        }
    };
    
    // Đồng hồ Mèo
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

    // Dịch nhanh
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
