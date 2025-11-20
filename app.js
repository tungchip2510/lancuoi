document.addEventListener("DOMContentLoaded", function() {

    // ==============================================
    // 1. CẤU HÌNH & BIẾN CHUNG
    // ==============================================
    const SO_ITEM_MOI_TRANG = 6; 
    const SO_CAU_MOI_BO = 5; // Số câu trong mỗi bộ bài tập

    let trangHienTai = 1;
    let capDoDangXem = "";
    let loaiDangXem = ""; 
    let boDemGio; let thoiGianConLai = 600; let deThiHienTai = {}; let cauHoiSo = 0; let diemSo = 0;

    // --- CÁC TÍNH NĂNG CHUNG ---
    
    // Menu Hamburger
    let hamburgerBtn = document.getElementById("hamburger-btn");
    let menuList = document.querySelector(".menu-chinh ul");
    if (hamburgerBtn && menuList) {
        hamburgerBtn.addEventListener("click", () => menuList.classList.toggle("mobile-menu-open"));
    }

    // Tô màu Menu
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

    // --- BẮT CÁC PHẦN TỬ CỐT LÕI ---
    let cotNoiDung = document.querySelector(".content"); // Bài học
    let cotNoiDungBt = document.querySelector(".content-bt"); // Bài tập
    let cotNoiDungThi = document.querySelector(".content-thi"); // Thi thử
    let sidebar = document.querySelector(".sidebar");


    // ==============================================
    // 2. XỬ LÝ MENU TRÁI (ACCORDION - ĐỒNG BỘ CHO TẤT CẢ)
    // ==============================================
    if (sidebar) {
        sidebar.addEventListener("click", function(e) {
            
            // 1. Click vào Cấp độ (N5, N4...) -> Xổ menu con
            if (e.target.classList.contains("link-cap-1") || e.target.closest(".link-cap-1")) {
                e.preventDefault();
                let link = e.target.classList.contains("link-cap-1") ? e.target : e.target.closest(".link-cap-1");
                let menuItem = link.closest(".menu-item");
                
                // Đóng các menu khác
                document.querySelectorAll(".menu-item").forEach(item => {
                    if (item !== menuItem) item.classList.remove("active");
                });
                // Toggle menu hiện tại
                menuItem.classList.toggle("active");
            }

            // 2. Click vào Loại (Từ vựng, Ngữ pháp, Danh sách đề...) -> Hiện nội dung
            if (e.target.classList.contains("link-cap-2")) {
                e.preventDefault();
                // Active màu cho link con
                document.querySelectorAll(".link-cap-2").forEach(l => l.classList.remove("active-sub"));
                e.target.classList.add("active-sub");

                trangHienTai = 1;
                capDoDangXem = e.target.dataset.capdo; 
                loaiDangXem = e.target.dataset.loai;   
                
                veGiaoDienChinh();
                
                // Cuộn lên đầu cột nội dung trên mobile
                if(window.innerWidth < 768) {
                    let contentArea = document.querySelector('.content') || document.querySelector('.content-bt') || document.querySelector('.content-thi');
                    if(contentArea) contentArea.scrollIntoView({behavior: "smooth"});
                }
            }
        });
    }


    // ==============================================
    // 3. ĐIỀU PHỐI VẼ GIAO DIỆN
    // ==============================================
    function veGiaoDienChinh() {
        if (loaiDangXem.startsWith("bai-hoc") && cotNoiDung) hienThiDanhSach("BAI_HOC");
        else if (loaiDangXem.startsWith("bai-tap") && cotNoiDungBt) hienThiDanhSachBoBaiTap();
        else if (loaiDangXem === "de-thi" && cotNoiDungThi) hienThiDanhSach("DE_THI");
    }

    // Hàm vẽ danh sách chung (Bài Học & Thi Thử)
    function hienThiDanhSach(loaiData) {
        let khoData = (loaiData === "BAI_HOC") ? KHO_BAI_HOC : KHO_DE_THI;
        let container = (loaiData === "BAI_HOC") ? cotNoiDung : cotNoiDungThi;
        let classLink = (loaiData === "BAI_HOC") ? "link-bai-hoc" : "link-de-thi";

        // Lọc dữ liệu
        let dataLoc = khoData.filter(item => item.cap_do == capDoDangXem);
        
        // Nếu là bài học, lọc thêm Từ vựng/Ngữ pháp
        if (loaiData === "BAI_HOC") {
            let loaiChiTiet = loaiDangXem.split('-').pop(); // TuVung / NguPhap
            dataLoc = dataLoc.filter(item => item.loai == loaiChiTiet);
        }

        // Phân trang
        let batDau = (trangHienTai - 1) * SO_ITEM_MOI_TRANG;
        let ketThuc = batDau + SO_ITEM_MOI_TRANG;
        let dataTrangNay = dataLoc.slice(batDau, ketThuc);
        let tongSoTrang = Math.ceil(dataLoc.length / SO_ITEM_MOI_TRANG);

        // Vẽ HTML
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

    // Hàm vẽ danh sách BỘ BÀI TẬP (Riêng cho trang Bài Tập)
    function hienThiDanhSachBoBaiTap() {
        let container = cotNoiDungBt;
        if (!container) return;

        let loaiChiTiet = loaiDangXem.split('-').pop(); // TuVung/NguPhap
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
            // Nút quay lại chọn loại (nếu cần)
            html = `<button id="nut-quay-lai-menu" class="btn-back">&larr; Chọn loại khác</button>` + html;
        }
        container.innerHTML = html;
    }


    // ==============================================
    // 4. XỬ LÝ CLICK TRONG NỘI DUNG (DELEGATION)
    // ==============================================
    
    function xuLyClickChung(event, container) {
        // Phân trang
        if (event.target.classList.contains("page-btn")) {
            trangHienTai = parseInt(event.target.dataset.page);
            veGiaoDienChinh();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        // Nút Quay Lại (Trong trang chi tiết)
        if (event.target.id == "nut-quay-lai") {
            event.preventDefault();
            veGiaoDienChinh(); 
        }

        // Nút Quay Lại (Trong Danh Sách Bài Tập)
        if (event.target.id == "nut-quay-lai-menu") {
            event.preventDefault();
            // Reset về màn hình chọn loại (nếu cần) hoặc chỉ vẽ lại
        }
        
        // Nút Quay Lại Bộ (Trong chi tiết bài tập)
        if (event.target.id == "nut-quay-lai-bo") {
            event.preventDefault();
            hienThiDanhSachBoBaiTap();
        }
    }

    // --- TRANG BÀI HỌC ---
    if (cotNoiDung) {
        cotNoiDung.addEventListener("click", (e) => {
            xuLyClickChung(e, cotNoiDung);
            if (e.target.classList.contains("link-bai-hoc")) {
                e.preventDefault();
                hienThiChiTietBaiHoc(e.target.dataset.id);
            }
        });
    }

    // --- TRANG BÀI TẬP ---
    if (cotNoiDungBt) {
        cotNoiDungBt.addEventListener("click", (e) => {
            xuLyClickChung(e, cotNoiDungBt);
            // Chọn bộ bài tập
            if (e.target.classList.contains("link-bo-bai-tap")) {
                e.preventDefault();
                hienThiChiTietBoBaiTap(parseInt(e.target.dataset.trang));
            }
            // Chấm điểm
            if (e.target.classList.contains("lua-chon")) {
                xuLyChamDiemBaiTap(e.target);
            }
        });
    }

    // --- TRANG THI THỬ ---
    if (cotNoiDungThi) {
        cotNoiDungThi.addEventListener("click", (e) => {
            xuLyClickChung(e, cotNoiDungThi);
            if (e.target.classList.contains("link-de-thi")) {
                e.preventDefault();
                batDauThi(e.target.dataset.id);
            } else if (e.target.classList.contains("lua-chon-thi")) {
                chonDapAnThi(e.target);
            } else if (e.target.id == "nut-tiep-theo") {
                xuLyCauTiepTheo();
            } else if (e.target.id == "nut-nop-bai") {
                ketThucThi();
            } else if (e.target.id == "nut-thoat-thi") {
                e.preventDefault();
                if(confirm("Bạn muốn thoát bài thi?")) {
                    clearInterval(boDemGio);
                    veGiaoDienChinh();
                }
            }
        });
    }


    // ==============================================
    // 5. CÁC HÀM CHI TIẾT & LOGIC
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
             let audio = bai.audioSrc ? `<audio controls src="${bai.audioSrc}"></audio>` : '';
             html += `<div class="khoi-cau-hoi"><h3>Câu ${trangSo*SO_CAU_MOI_BO + idx + 1}</h3><p class="cau-hoi">${bai.cau_hoi}</p>${audio}
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
            nut.classList.add("sai"); pPhanHoi.textContent = "Sai rồi!"; p.className="phan-hoi sai";
        }
    }

    function batDauThi(id) {
        deThiHienTai = KHO_DE_THI.find(dt => dt.id == id);
        thoiGianConLai = 600; 
        cotNoiDungThi.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                <button id="nut-thoat-thi" class="btn-back" style="background-color:#888; margin:0;">&larr; Thoát</button>
                <div class="dong-ho" id="dong-ho" style="float:none; margin:0;">10:00</div>
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
            let audioPlayer = bai.audioSrc ? `<audio controls src="${bai.audioSrc}"></audio>` : '';
            htmlCauHoi += `
                <div class="khoi-cau-hoi">
                    <h3>Câu ${index + 1}: ${bai.tieu_de}</h3>
                    <p class="cau-hoi">${bai.cau_hoi}</p>
                    ${audioPlayer}
                    <div class="dap-an">
                        ${bai.lua_chon.map(lc => `<button class="lua-chon-thi" data-dung="${lc == bai.dap_an_dung}">${lc}</button>`).join('')}
                    </div>
                </div>
            `;
        });
        noiVECauHoi.innerHTML = htmlCauHoi;
        clearInterval(boDemGio);
        boDemGio = setInterval(capNhatDongHo, 1000);
    }

    function ketThucThi() {
        clearInterval(boDemGio); 
        diemSo = 0; 
        let tatCaCauHoi = document.querySelectorAll(".giao-dien-thi .khoi-cau-hoi");
        tatCaCauHoi.forEach(khoi => {
            let nutDaChon = khoi.querySelector(".lua-chon-thi.selected");
            if (nutDaChon && nutDaChon.dataset.dung == "true") diemSo++;
        });
        let tongSoCau = deThiHienTai.danh_sach_cau_hoi.length;
        let kq = { de: deThiHienTai.tieu_de, diem: diemSo, tong: tongSoCau, ngay: new Date().toLocaleString() };
        let ls = JSON.parse(localStorage.getItem("lich_su_thi")) || [];
        ls.push(kq);
        localStorage.setItem("lich_su_thi", JSON.stringify(ls));
        cotNoiDungThi.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <h1 style="color: #2E7D32; font-size: 3em;">${diemSo} / ${kq.tong}</h1>
                <h2>Kết quả thi của bạn</h2>
                <p>Đã lưu vào lịch sử!</p>
                <button onclick="location.reload()" class="nut-dieu-khien-thi">Quay lại danh sách</button>
            </div>
        `;
    }

    function capNhatDongHo() {
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

    // ==============================================
    // 6. TÍNH NĂNG PHỤ (TÌM KIẾM, DỊCH)
    // ==============================================
    
    // --- DỊCH NHANH ---
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
    
    // --- TÌM KIẾM ---
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
            if(typeof KHO_BAI_HOC !== 'undefined') KHO_BAI_HOC.forEach(i => { if(i.tieu_de.toLowerCase().includes(kw)) kq.push({...i, type: 'Bài Học', link: 'bai-hoc.html'}); });
            if(typeof KHO_BAI_TAP !== 'undefined') KHO_BAI_TAP.forEach(i => { if(i.tieu_de.toLowerCase().includes(kw)) kq.push({...i, type: 'Bài Tập', link: 'bai-tap.html'}); });
            vungKQ.innerHTML = kq.length ? kq.map(i => `<div class="ket-qua-item"><h3><a href="${i.link}">${i.tieu_de}</a></h3><p>${i.type}</p></div>`).join('') : `<p class="khong-tim-thay">Không tìm thấy!</p>`;
            modal.style.display = "block";
        });
    });

});