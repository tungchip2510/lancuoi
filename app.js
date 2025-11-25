document.addEventListener("DOMContentLoaded", function() {

    // ... (Giữ nguyên phần Cấu hình & Biến chung cũ) ...
    const SO_ITEM_MOI_TRANG = 6;
    const SO_CAU_MOI_BO = 5;

    let trangHienTai = 1;
    let capDoDangXem = "";
    let loaiDangXem = "";
    let modeBangChuCai = 'hiragana'; // Thêm biến theo dõi chế độ bảng chữ cái

    // ... (Giữ nguyên phần Menu Hamburger, Tô màu Menu, Nút lên đầu trang, Bắt phần tử cốt lõi) ...
    let cotNoiDung = document.querySelector(".content");
    let cotNoiDungBt = document.querySelector(".content-bt");
    let cotNoiDungThi = document.querySelector(".content-thi");
    let sidebar = document.querySelector(".sidebar");

    // ==============================================
    // 2. XỬ LÝ MENU TRÁI (UPDATE)
    // ==============================================
    if (sidebar) {
        sidebar.addEventListener("click", function(e) {
            
            // Xử lý click BẢNG CHỮ CÁI (Thêm mới)
            if (e.target.dataset.loai === "bang-chu-cai") {
                e.preventDefault();
                // Active link
                document.querySelectorAll(".link-cap-1, .link-cap-2").forEach(l => l.classList.remove("active-sub"));
                e.target.classList.add("active-sub");
                
                loaiDangXem = "bang-chu-cai";
                veGiaoDienChinh();

                if(window.innerWidth < 768 && cotNoiDung) cotNoiDung.scrollIntoView({behavior: "smooth"});
                return;
            }

            // ... (Giữ nguyên logic Accordion và Click link bài học cũ) ...
            if (e.target.classList.contains("link-cap-1") || e.target.closest(".link-cap-1")) {
                e.preventDefault();
                let link = e.target.classList.contains("link-cap-1") ? e.target : e.target.closest(".link-cap-1");
                // Nếu là link bảng chữ cái cấp 1 (không có dropdown) thì xử lý luôn
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

            if (e.target.classList.contains("link-cap-2")) {
                e.preventDefault();
                document.querySelectorAll(".link-cap-2").forEach(l => l.classList.remove("active-sub"));
                e.target.classList.add("active-sub");
                trangHienTai = 1;
                capDoDangXem = e.target.dataset.capdo;
                loaiDangXem = e.target.dataset.loai;
                veGiaoDienChinh();
                if(window.innerWidth < 768) {
                    let contentArea = document.querySelector('.content') || document.querySelector('.content-bt') || document.querySelector('.content-thi');
                    if(contentArea) contentArea.scrollIntoView({behavior: "smooth"});
                }
            }
        });
    }

    // ==============================================
    // 3. ĐIỀU PHỐI VẼ GIAO DIỆN (UPDATE)
    // ==============================================
    function veGiaoDienChinh() {
        if (loaiDangXem === "bang-chu-cai" && cotNoiDung) {
            hienThiBangChuCai(); // Gọi hàm vẽ bảng chữ cái
        }
        else if (loaiDangXem.startsWith("bai-hoc") && cotNoiDung) hienThiDanhSach("BAI_HOC");
        else if (loaiDangXem.startsWith("bai-tap") && cotNoiDungBt) hienThiDanhSachBoBaiTap();
        else if (loaiDangXem === "de-thi" && cotNoiDungThi) hienThiDanhSach("DE_THI");
    }

    // ... (Giữ nguyên hàm hienThiDanhSach và hienThiDanhSachBoBaiTap cũ) ...
    function hienThiDanhSach(loaiData) {
        // Code cũ giữ nguyên...
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
            html += `<p>Chưa có dữ liệu.</p>`;
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
    
    // Giữ nguyên hienThiDanhSachBoBaiTap...
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


    // ==============================================
    // 4. XỬ LÝ CLICK TRONG NỘI DUNG (UPDATE)
    // ==============================================
    function xuLyClickChung(event, container) {
        // ... (Các xử lý click cũ: phân trang, quay lại...)
        if (event.target.classList.contains("page-btn")) {
            trangHienTai = parseInt(event.target.dataset.page);
            veGiaoDienChinh();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        if (event.target.id == "nut-quay-lai" || event.target.id == "nut-quay-lai-menu" || event.target.id == "nut-quay-lai-bo") {
            event.preventDefault();
            if(event.target.id == "nut-quay-lai-bo") hienThiDanhSachBoBaiTap();
            else veGiaoDienChinh(); 
        }

        // --- LOGIC MỚI CHO BẢNG CHỮ CÁI ---
        // Toggle Hiragana/Katakana
        if (event.target.closest(".toggle-btn")) {
            let btn = event.target.closest(".toggle-btn");
            if (btn.id === 'btn-hiragana' && modeBangChuCai !== 'hiragana') {
                modeBangChuCai = 'hiragana';
                hienThiBangChuCai();
            } else if (btn.id === 'btn-katakana' && modeBangChuCai !== 'katakana') {
                modeBangChuCai = 'katakana';
                hienThiBangChuCai();
            }
        }

        // Click vào thẻ chữ cái -> Phát âm
        if (event.target.closest(".kana-card")) {
            let card = event.target.closest(".kana-card");
            let text = card.querySelector(".kana-char").textContent.trim();
            playSound(text, card);
        }
    }

    // --- GẮN SỰ KIỆN CHO CONTENT (Giữ nguyên) ---
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
    // 5. CÁC HÀM LOGIC CHI TIẾT (THÊM MỚI HÀM KANA)
    // ==============================================

    // --- HÀM VẼ BẢNG CHỮ CÁI (MỚI) ---
    function hienThiBangChuCai() {
        let hiraActive = modeBangChuCai === 'hiragana' ? 'active-hiragana' : '';
        let kataActive = modeBangChuCai === 'katakana' ? 'active-katakana' : '';
        
        // Vẽ Header
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

        // Vẽ Grid
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

    // --- HÀM PHÁT ÂM (MỚI) ---
    function playSound(text, element) {
        if (!text) return;
        element.classList.add('playing');
        setTimeout(() => element.classList.remove('playing'), 500);

        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'ja-JP';
            utterance.rate = 0.8;
            window.speechSynthesis.speak(utterance);
        } else {
            console.log("Trình duyệt không hỗ trợ phát âm.");
        }
    }

    // ... (Giữ nguyên các hàm chi tiết cũ: hienThiChiTietBaiHoc, hienThiChiTietBoBaiTap, xuLyChamDiemBaiTap, batDauThi, ketThucThi, capNhatDongHo, chonDapAnThi...)
    function hienThiChiTietBaiHoc(id) {
        let item = KHO_BAI_HOC.find(i => i.id == id);
        cotNoiDung.innerHTML = `
            <button id="nut-quay-lai" class="btn-back">&larr; Quay lại danh sách</button>
            <h1>${item.tieu_de}</h1>
            <div class="noi-dung-bai-hoc">${item.noi_dung}</div>
        `;
    }
    
    // ... (Phần còn lại của app.js, bao gồm xử lý dịch và tìm kiếm, giữ nguyên) ...



 // ==============================================
    // 7. ĐỒNG HỒ ĐẾM NGƯỢC (NEW)
    // ==============================================
    
    // Cấu hình ngày thi (Đổi ngày tại đây: Năm-Tháng-Ngày)
    // Ví dụ: JLPT tháng 7/2025 là ngày 06/07/2025
    const NGAY_THI = new Date("2025-12-07T00:00:00").getTime(); 

    function khoiTaoDongHoDemNguoc() {
        // Kiểm tra nếu người dùng đã tắt đồng hồ trước đó thì không hiện lại
        if (sessionStorage.getItem("an_dong_ho") === "true") return;

        // Tạo HTML cho đồng hồ
        const htmlDongHo = `
            <div id="khung-dem-nguoc">
                <div class="nut-tat-countdown" title="Tắt tạm thời">x</div>
                <div class="tieu-de-countdown">
                    <i class="fas fa-fire"></i> Đến ngày lên thớt
                </div>
                <div class="bo-dem-so">
                    <div class="don-vi-tg">
                        <b id="cd-ngay">00</b><span>Ngày</span>
                    </div>
                    <div>:</div>
                    <div class="don-vi-tg">
                        <b id="cd-gio">00</b><span>Giờ</span>
                    </div>
                    <div>:</div>
                    <div class="don-vi-tg">
                        <b id="cd-phut">00</b><span>Phút</span>
                    </div>
                    <div>:</div>
                    <div class="don-vi-tg">
                        <b id="cd-giay">00</b><span>Giây</span>
                    </div>
                </div>
            </div>
        `;
        
        // Chèn vào body
        document.body.insertAdjacentHTML('beforeend', htmlDongHo);

        // Bắt sự kiện nút tắt
        document.querySelector(".nut-tat-countdown").onclick = function() {
            document.getElementById("khung-dem-nguoc").style.display = "none";
            sessionStorage.setItem("an_dong_ho", "true"); // Lưu trạng thái tắt cho phiên này
        };

        // Hàm cập nhật thời gian
        const capNhatThoiGian = () => {
            const bayGio = new Date().getTime();
            const khoangCach = NGAY_THI - bayGio;

            if (khoangCach < 0) {
                document.getElementById("khung-dem-nguoc").innerHTML = "<div>🎉 Chúc thi tốt!</div>";
                return;
            }

            const ngay = Math.floor(khoangCach / (1000 * 60 * 60 * 24));
            const gio = Math.floor((khoangCach % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const phut = Math.floor((khoangCach % (1000 * 60 * 60)) / (1000 * 60));
            const giay = Math.floor((khoangCach % (1000 * 60)) / 1000);

            // Cập nhật lên giao diện
            if(document.getElementById("cd-ngay")) {
                document.getElementById("cd-ngay").innerText = ngay < 10 ? "0" + ngay : ngay;
                document.getElementById("cd-gio").innerText = gio < 10 ? "0" + gio : gio;
                document.getElementById("cd-phut").innerText = phut < 10 ? "0" + phut : phut;
                document.getElementById("cd-giay").innerText = giay < 10 ? "0" + giay : giay;
            }
        };

        setInterval(capNhatThoiGian, 1000);
        capNhatThoiGian(); // Chạy ngay lập tức
    }

    // Chạy hàm khởi tạo
    khoiTaoDongHoDemNguoc();


});