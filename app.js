document.addEventListener("DOMContentLoaded", function() {

    // ==============================================
    // 1. CẤU HÌNH & BIẾN CHUNG
    // ==============================================
    const SO_ITEM_MOI_TRANG = 9; 
    const SO_CAU_MOI_BO = 5;

    let trangHienTai = 1;
    let capDoDangXem = "";
    let loaiDangXem = "";
    let modeBangChuCai = 'hiragana'; 
    let boDemGio; 
    let thoiGianConLai = 600; 
    let deThiHienTai = {}; 
    let diemSo = 0;

    // --- MENU HAMBURGER & UI ---
    let hamburgerBtn = document.getElementById("hamburger-btn");
    let menuList = document.querySelector(".menu-chinh ul");
    if (hamburgerBtn && menuList) {
        hamburgerBtn.addEventListener("click", () => menuList.classList.toggle("mobile-menu-open"));
    }

    // Tô màu Menu hiện tại
    let trangHienTaiURL = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".menu-chinh a").forEach(link => {
        if (link.getAttribute("href") === trangHienTaiURL) {
            link.style.backgroundColor = "#e69500"; link.style.color = "white"; link.style.borderBottom = "none";
        }
    });

    // Nút Lên đầu trang
    let btnLenDau = document.getElementById("btn-len-dau-trang");
    if (btnLenDau) {
        window.onscroll = function() {
            btnLenDau.style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) ? "block" : "none";
        };
        btnLenDau.addEventListener("click", () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // Bắt các vùng nội dung
    let cotNoiDung = document.querySelector(".content");
    let cotNoiDungBt = document.querySelector(".content-bt");
    let cotNoiDungThi = document.querySelector(".content-thi");
    let sidebar = document.querySelector(".sidebar");

    // ==============================================
    // 2. XỬ LÝ MENU TRÁI (NAVIGATION)
    // ==============================================
    if (sidebar) {
        sidebar.addEventListener("click", function(e) {
            
            // Xử lý click BẢNG CHỮ CÁI
            if (e.target.dataset.loai === "bang-chu-cai" || e.target.closest("[data-loai='bang-chu-cai']")) {
                e.preventDefault();
                resetMenuState();
                let target = e.target.dataset.loai ? e.target : e.target.closest("a");
                target.classList.add("active-sub");
                
                loaiDangXem = "bang-chu-cai";
                veGiaoDienChinh();
                scrollOnMobile(cotNoiDung);
                return;
            }

            // Xử lý Menu Cấp 1 (Accordion)
            if (e.target.classList.contains("link-cap-1") || e.target.closest(".link-cap-1")) {
                e.preventDefault();
                let link = e.target.classList.contains("link-cap-1") ? e.target : e.target.closest(".link-cap-1");
                
                if(link.dataset.loai === "bang-chu-cai") {
                    loaiDangXem = "bang-chu-cai";
                    veGiaoDienChinh();
                    return;
                }

                let menuItem = link.closest(".menu-item");
                document.querySelectorAll(".menu-item").forEach(item => {
                    if (item !== menuItem) item.classList.remove("active");
                });
                menuItem.classList.toggle("active");
            }

            // Xử lý Menu Cấp 2 (Chọn bài học/loại bài tập)
            if (e.target.classList.contains("link-cap-2")) {
                e.preventDefault();
                resetMenuState();
                e.target.classList.add("active-sub");

                trangHienTai = 1;
                capDoDangXem = e.target.dataset.capdo;
                loaiDangXem = e.target.dataset.loai;
                
                veGiaoDienChinh();
                
                let targetArea = cotNoiDung || cotNoiDungBt || cotNoiDungThi;
                scrollOnMobile(targetArea);
            }
        });
    }

    function resetMenuState() {
        document.querySelectorAll(".link-cap-1, .link-cap-2").forEach(l => l.classList.remove("active-sub"));
    }

    function scrollOnMobile(element) {
        if(window.innerWidth < 768 && element) {
            element.scrollIntoView({behavior: "smooth"});
        }
    }

    // ==============================================
    // 3. ĐIỀU PHỐI VẼ GIAO DIỆN
    // ==============================================
    function veGiaoDienChinh() {
        if (loaiDangXem === "bang-chu-cai" && cotNoiDung) {
            hienThiBangChuCai();
        }
        else if (loaiDangXem.startsWith("bai-hoc") && cotNoiDung) {
            hienThiDanhSach("BAI_HOC");
        }
        else if (loaiDangXem.startsWith("bai-tap") && cotNoiDungBt) {
            hienThiDanhSachBoBaiTap();
        }
        else if (loaiDangXem === "de-thi" && cotNoiDungThi) {
            hienThiDanhSach("DE_THI");
        }
    }

    // --- HÀM VẼ DANH SÁCH (BÀI HỌC & ĐỀ THI) ---
    function hienThiDanhSach(loaiData) {
        let khoData = (loaiData === "BAI_HOC") ? KHO_BAI_HOC : KHO_DE_THI;
        let container = (loaiData === "BAI_HOC") ? cotNoiDung : cotNoiDungThi;
        let classLink = (loaiData === "BAI_HOC") ? "link-bai-hoc" : "link-de-thi";

        let dataLoc = khoData.filter(item => item.cap_do == capDoDangXem);
        
        if (loaiData === "BAI_HOC") {
            let loaiChiTiet = loaiDangXem.split('-').pop();
            dataLoc = dataLoc.filter(item => item.loai == loaiChiTiet);
        }

        let batDau = (trangHienTai - 1) * SO_ITEM_MOI_TRANG;
        let ketThuc = batDau + SO_ITEM_MOI_TRANG;
        let dataTrangNay = dataLoc.slice(batDau, ketThuc);
        let tongSoTrang = Math.ceil(dataLoc.length / SO_ITEM_MOI_TRANG);

        let loaiText = loaiDangXem.includes("TuVung") ? "Từ vựng" : (loaiDangXem.includes("NguPhap") ? "Ngữ pháp" : "");
        let tieuDe = `${loaiData==="BAI_HOC"?"Bài học":"Đề thi"} ${capDoDangXem} ${loaiText ? "- " + loaiText : ""}`;
        
        let html = `<h1>${tieuDe}</h1>`;
        
        if (dataLoc.length === 0) {
            html += `<p>Chưa có dữ liệu cho mục này.</p>`;
        } else {
            html += `<div class="grid-container">`;
            dataTrangNay.forEach(item => {
                html += `<a href="#" class="${classLink} card-item" data-id="${item.id}">${item.tieu_de}</a>`;
            });
            html += `</div>`;
        }

        if (tongSoTrang > 1) {
            html += `<div class="pagination">`;
            for (let i = 1; i <= tongSoTrang; i++) {
                let active = (i === trangHienTai) ? "active" : "";
                html += `<button class="page-btn ${active}" data-page="${i}">${i}</button>`;
            }
            html += `</div>`;
        }
        container.innerHTML = html;
    }

    // --- HÀM VẼ BỘ BÀI TẬP ---
    function hienThiDanhSachBoBaiTap() {
        let container = cotNoiDungBt;
        if (!container) return;

        let loaiChiTiet = loaiDangXem.split('-').pop();
        let all = KHO_BAI_TAP.filter(b => b.cap_do == capDoDangXem && b.loai == loaiChiTiet);
        
        let html = `<h1>Bài tập ${capDoDangXem} - ${loaiChiTiet}</h1>`;
        if (all.length === 0) {
            html += `<p>Chưa có bài tập.</p>`;
        } else {
            let soBo = Math.ceil(all.length / SO_CAU_MOI_BO);
            html += `<div class="grid-container">`;
            for(let i=0; i<soBo; i++) {
                let start = i * SO_CAU_MOI_BO + 1;
                let end = Math.min((i + 1) * SO_CAU_MOI_BO, all.length);
                html += `<a href="#" class="link-bo-bai-tap card-item" data-trang="${i}">Bộ số ${i + 1}<br><small>Câu ${start}-${end}</small></a>`;
            }
            html += `</div>`;
            html = `<button id="nut-quay-lai-menu" class="btn-back">&larr; Chọn loại khác</button>` + html;
        }
        container.innerHTML = html;
    }

    // --- HÀM VẼ BẢNG CHỮ CÁI ---
    function hienThiBangChuCai() {
        let hiraActive = modeBangChuCai === 'hiragana' ? 'active-hiragana' : '';
        let kataActive = modeBangChuCai === 'katakana' ? 'active-katakana' : '';
        
        let html = `
            <div class="alphabet-header">
                <div>
                    <h1>Bảng chữ cái Nhật</h1>
                    <p style="color: #666; font-size: 0.9rem; margin-top: 5px;">Bấm để nghe, di chuột để xem hiệu ứng</p>
                </div>
                <div class="toggle-container">
                    <button id="btn-hiragana" class="toggle-btn ${hiraActive}">Hiragana (あ)</button>
                    <button id="btn-katakana" class="toggle-btn ${kataActive}">Katakana (ア)</button>
                </div>
            </div>
            <div class="kana-grid">
        `;

        KANA_DATA.forEach(item => {
            const char = modeBangChuCai === 'hiragana' ? item.h : item.k;
            if (!char) {
                html += `<div class="kana-spacer"></div>`;
            } else {
                let colorClass = modeBangChuCai === 'hiragana' ? 'text-hiragana' : 'text-katakana';
                html += `
                    <div class="kana-card">
                        <div class="kana-char ${colorClass}">${char}</div>
                        <div class="kana-romaji">${item.r}</div>
                        <svg class="volume-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                    </div>
                `;
            }
        });
        html += `</div>`;
        cotNoiDung.innerHTML = html;
    }

    // ==============================================
    // 4. XỬ LÝ SỰ KIỆN CLICK TRONG NỘI DUNG
    // ==============================================
    function xuLyClickChung(event, container) {
        if (event.target.classList.contains("page-btn")) {
            trangHienTai = parseInt(event.target.dataset.page);
            veGiaoDienChinh();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        if (event.target.id == "nut-quay-lai" || event.target.id == "nut-quay-lai-menu") {
            event.preventDefault();
            veGiaoDienChinh(); 
        }
        if(event.target.id == "nut-quay-lai-bo") {
            event.preventDefault();
            hienThiDanhSachBoBaiTap();
        }

        if (event.target.closest(".toggle-btn")) {
            let btn = event.target.closest(".toggle-btn");
            if (btn.id === 'btn-hiragana') modeBangChuCai = 'hiragana';
            else if (btn.id === 'btn-katakana') modeBangChuCai = 'katakana';
            hienThiBangChuCai();
        }

        if (event.target.closest(".kana-card")) {
            let card = event.target.closest(".kana-card");
            let text = card.querySelector(".kana-char").textContent.trim();
            playSound(text, card);
        }
    }

    if (cotNoiDung) {
        cotNoiDung.addEventListener("click", (e) => {
            xuLyClickChung(e, cotNoiDung);
            if (e.target.classList.contains("link-bai-hoc")) {
                e.preventDefault();
                hienThiChiTietBaiHoc(e.target.dataset.id);
            }
        });
    }
    if (cotNoiDungBt) {
        cotNoiDungBt.addEventListener("click", (e) => {
           xuLyClickChung(e, cotNoiDungBt);
           if (e.target.classList.contains("link-bo-bai-tap")) {
               e.preventDefault();
               hienThiChiTietBoBaiTap(parseInt(e.target.dataset.trang));
           }
           if (e.target.classList.contains("lua-chon")) xuLyChamDiemBaiTap(e.target);
       });
   }
   if (cotNoiDungThi) {
       cotNoiDungThi.addEventListener("click", (e) => {
           xuLyClickChung(e, cotNoiDungThi);
           if (e.target.classList.contains("link-de-thi")) {
               e.preventDefault(); batDauThi(e.target.dataset.id);
           } else if (e.target.classList.contains("lua-chon-thi")) {
               chonDapAnThi(e.target);
           } else if (e.target.id == "nut-nop-bai") {
               ketThucThi();
           } else if (e.target.id == "nut-thoat-thi") {
               e.preventDefault();
               if(confirm("Bạn muốn thoát bài thi?")) { clearInterval(boDemGio); veGiaoDienChinh(); }
           }
       });
   }

    // ==============================================
    // 5. LOGIC CHI TIẾT (HIỂN THỊ NỘI DUNG)
    // ==============================================

    function hienThiChiTietBaiHoc(id) {
        let item = KHO_BAI_HOC.find(i => i.id == id);
        cotNoiDung.innerHTML = `
            <button id="nut-quay-lai" class="btn-back">&larr; Quay lại danh sách</button>
            <h1>${item.tieu_de}</h1>
            <div class="noi-dung-bai-hoc">${item.noi_dung}</div>
        `;
    }

    function hienThiChiTietBoBaiTap(trangSo) {
        let loaiChiTiet = loaiDangXem.split('-').pop();
        let all = KHO_BAI_TAP.filter(bt => bt.cap_do == capDoDangXem && bt.loai == loaiChiTiet);
        let data = all.slice(trangSo*SO_CAU_MOI_BO, (trangSo+1)*SO_CAU_MOI_BO);
        
        let html = `<button id="nut-quay-lai-bo" class="btn-back">&larr; Quay lại danh sách bộ</button> <h1>Làm bài tập (Bộ ${trangSo+1})</h1>`;
        data.forEach((bai, idx) => {
             html += `<div class="khoi-cau-hoi"><h3>Câu ${trangSo*SO_CAU_MOI_BO + idx + 1}</h3><p class="cau-hoi">${bai.cau_hoi}</p>
             <div class="dap-an">${bai.lua_chon.map(c => `<button class="lua-chon" data-dung="${c==bai.dap_an_dung}">${c}</button>`).join('')}</div>
             <p class="phan-hoi"></p></div>`;
        });
        cotNoiDungBt.innerHTML = html;
        window.scrollTo(0,0);
    }

    function xuLyChamDiemBaiTap(nut) {
        let pPhanHoi = nut.closest(".khoi-cau-hoi").querySelector(".phan-hoi");
        nut.parentElement.querySelectorAll(".lua-chon").forEach(n => n.classList.remove("dung", "sai"));
        if (nut.dataset.dung == "true") {
            nut.classList.add("dung"); pPhanHoi.textContent = "Chính xác! 👏"; pPhanHoi.className = "phan-hoi dung";
        } else {
            nut.classList.add("sai"); pPhanHoi.textContent = "Sai rồi!"; pPhanHoi.className="phan-hoi sai";
        }
    }

    function batDauThi(id) {
        deThiHienTai = KHO_DE_THI.find(dt => dt.id == id);
        if(!deThiHienTai) return alert("Không tìm thấy đề thi!");

        thoiGianConLai = 3600; 
        cotNoiDungThi.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                <button id="nut-thoat-thi" class="btn-back" style="background-color:#888; margin:0;">&larr; Thoát</button>
                <div class="dong-ho" id="dong-ho" style="float:none; margin:0;">60:00</div>
            </div>
            <h2>${deThiHienTai.tieu_de}</h2>
            <div class="giao-dien-thi"></div>
            <button id="nut-nop-bai" class="nut-dieu-khien-thi">Nộp Bài</button>
        `;
        
        let noiVECauHoi = document.querySelector(".giao-dien-thi");
        let htmlCauHoi = "";
        
        deThiHienTai.danh_sach_cau_hoi.forEach((idCau, index) => {
            let bai = KHO_BAI_TAP.find(b => b.id == idCau);
            if(!bai) return;
            
            htmlCauHoi += `
                <div class="khoi-cau-hoi" data-id="${bai.id}">
                    <h3>Câu ${index + 1}</h3>
                    <p class="cau-hoi">${bai.cau_hoi}</p>
                    <div class="dap-an">
                        ${bai.lua_chon.map(lc => `<button class="lua-chon-thi" data-dung="${lc == bai.dap_an_dung}">${lc}</button>`).join('')}
                    </div>
                </div>
            `;
        });
        noiVECauHoi.innerHTML = htmlCauHoi;
        clearInterval(boDemGio);
        boDemGio = setInterval(capNhatDongHoThi, 1000);
        window.scrollTo(0,0);
    }

    function ketThucThi() {
        clearInterval(boDemGio); 
        diemSo = 0; 
        let tatCaCauHoi = document.querySelectorAll(".giao-dien-thi .khoi-cau-hoi");
        tatCaCauHoi.forEach(khoi => {
            let nutDaChon = khoi.querySelector(".lua-chon-thi.selected");
            if (nutDaChon && nutDaChon.dataset.dung == "true") diemSo++;
            let dapAnDung = khoi.querySelector(`.lua-chon-thi[data-dung="true"]`);
            if(dapAnDung) dapAnDung.style.backgroundColor = "#d4edda";
        });
        let tongSoCau = deThiHienTai.danh_sach_cau_hoi.length;
        alert(`Bạn đã hoàn thành! Điểm số: ${diemSo}/${tongSoCau}`);
        window.scrollTo(0,0);
    }

    function capNhatDongHoThi() {
        let dongHo = document.querySelector("#dong-ho");
        if (!dongHo) { clearInterval(boDemGio); return; }
        let m = Math.floor(thoiGianConLai/60);
        let s = thoiGianConLai%60;
        dongHo.textContent = `${m}:${s < 10 ? '0'+s : s}`;
        thoiGianConLai--;
        if(thoiGianConLai < 0) { alert("Hết giờ!"); ketThucThi(); }
    }

    function chonDapAnThi(nut) {
        nut.closest(".dap-an").querySelectorAll(".lua-chon-thi").forEach(n => n.classList.remove("selected"));
        nut.classList.add("selected");
    }

    function playSound(text, element) {
        if (!text) return;
        element.classList.add('playing');
        setTimeout(() => element.classList.remove('playing'), 500);
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'ja-JP'; utterance.rate = 0.8;
            window.speechSynthesis.speak(utterance);
        }
    }

    // ==============================================
    // 6. CÁC TÍNH NĂNG KHÁC (ĐÃ KHÔI PHỤC)
    // ==============================================

    // --- A. ĐỒNG HỒ ĐẾM NGƯỢC "MÈO CUTE" ---
    const NGAY_THI = new Date("2025-12-07T00:00:00").getTime(); 
    function khoiTaoDongHoDemNguoc() {
        if (sessionStorage.getItem("an_dong_ho") === "true") return;
        const htmlDongHo = `
            <div id="khung-dem-nguoc">
                <div class="nut-tat-countdown" title="Tắt tạm thời">x</div>
                <div class="tieu-de-countdown"><i class="fas fa-fire"></i> Đến ngày lên thớt</div>
                <div class="bo-dem-so">
                    <div class="don-vi-tg"><b id="cd-ngay">00</b><span>Ngày</span></div><div>:</div>
                    <div class="don-vi-tg"><b id="cd-gio">00</b><span>Giờ</span></div><div>:</div>
                    <div class="don-vi-tg"><b id="cd-phut">00</b><span>Phút</span></div><div>:</div>
                    <div class="don-vi-tg"><b id="cd-giay">00</b><span>Giây</span></div>
                </div>
            </div>`;
        document.body.insertAdjacentHTML('beforeend', htmlDongHo);
        document.querySelector(".nut-tat-countdown").onclick = function() {
            document.getElementById("khung-dem-nguoc").style.display = "none";
            sessionStorage.setItem("an_dong_ho", "true");
        };
        const capNhatThoiGian = () => {
            const bayGio = new Date().getTime();
            const khoangCach = NGAY_THI - bayGio;
            if (khoangCach < 0) {
                document.getElementById("khung-dem-nguoc").innerHTML = "<div>🎉 Chúc thi tốt!</div>";
                return;
            }
            if(document.getElementById("cd-ngay")) {
                document.getElementById("cd-ngay").innerText = Math.floor(khoangCach / (1000 * 60 * 60 * 24));
                document.getElementById("cd-gio").innerText = Math.floor((khoangCach % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                document.getElementById("cd-phut").innerText = Math.floor((khoangCach % (1000 * 60 * 60)) / (1000 * 60));
                document.getElementById("cd-giay").innerText = Math.floor((khoangCach % (1000 * 60)) / 1000);
            }
        };
        setInterval(capNhatThoiGian, 1000);
        capNhatThoiGian();
    }
    khoiTaoDongHoDemNguoc();

    // --- B. TÍNH NĂNG DỊCH NHANH (KHÔI PHỤC) ---
    let nutDichHTML = `<div id="nut-dich-nhanh"><i class="fas fa-language"></i> Dịch</div>`;
    document.body.insertAdjacentHTML('beforeend', nutDichHTML);
    let nutDich = document.getElementById("nut-dich-nhanh");
    let selectedText = "";
    
    document.addEventListener("mouseup", function(e) {
        let selection = window.getSelection();
        selectedText = selection.toString().trim();
        if (selectedText.length > 0) {
            let rect = selection.getRangeAt(0).getBoundingClientRect();
            nutDich.style.top = (rect.top + window.scrollY - 40) + "px"; 
            nutDich.style.left = (rect.left + (rect.width / 2) - 30) + "px"; 
            nutDich.style.display = "block"; 
        } else {
            nutDich.style.display = "none";
        }
    });
    
    nutDich.onmousedown = function(e) {
        e.preventDefault(); 
        if (selectedText) {
            let url = `https://translate.google.com/?sl=ja&tl=vi&text=${encodeURIComponent(selectedText)}&op=translate`;
            window.open(url, '_blank');
        }
    };

    // --- C. TÍNH NĂNG TÌM KIẾM (KHÔI PHỤC) ---
    let modalHTML = `<div id="modal-tim-kiem" class="modal-tim-kiem"><div class="modal-box"><span class="close-btn">&times;</span><h2>Kết quả tìm kiếm</h2><div id="danh-sach-ket-qua"></div></div></div>`;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    let modal = document.getElementById("modal-tim-kiem");
    let btnClose = document.querySelector(".close-btn");
    let vungKQ = document.getElementById("danh-sach-ket-qua");
    
    if (btnClose) btnClose.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };
    
    document.querySelectorAll(".form-tim-kiem").forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let kw = form.querySelector("input").value.toLowerCase().trim();
            if(!kw) return alert("Vui lòng nhập từ khóa");
            
            let kq = [];
            // Tìm trong Bài Học
            if(typeof KHO_BAI_HOC !== 'undefined') {
                KHO_BAI_HOC.forEach(i => { 
                    if(i.tieu_de.toLowerCase().includes(kw)) kq.push({...i, type: 'Bài Học', link: 'bai-hoc.html'}); 
                });
            }
            // Tìm trong Bài Tập
            if(typeof KHO_BAI_TAP !== 'undefined') {
                KHO_BAI_TAP.forEach(i => { 
                    if(i.tieu_de.toLowerCase().includes(kw) || i.cau_hoi.toLowerCase().includes(kw)) kq.push({...i, type: 'Bài Tập', link: 'bai-tap.html'}); 
                });
            }
            
            vungKQ.innerHTML = kq.length ? kq.map(i => `<div class="ket-qua-item"><h3><a href="${i.link}">${i.tieu_de}</a></h3><p>${i.type}</p></div>`).join('') : `<p class="khong-tim-thay">Không tìm thấy!</p>`;
            modal.style.display = "block";
        });
    });

});
