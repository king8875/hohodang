document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;

    // ✅ header 삽입 후 드롭다운, 메뉴 버튼 이벤트 초기화
    fetch('assets/includes/header.html')
        .then(res => res.text())
        .then(data => {
            document.querySelector('.header_include').innerHTML = data;
            initHeaderEvents(); // 드롭다운 및 메뉴 버튼
        });

    // ✅ footer 삽입
    fetch('assets/includes/footer.html')
        .then(res => res.text())
        .then(data => {
            document.querySelector('.footer_include').innerHTML = data;
        });

    // ✅ sidebar 삽입 후 닫기 버튼 이벤트 연결
    fetch('assets/includes/sidebar.html')
        .then(res => res.text())
        .then(data => {
            document.querySelector('.sidebar_include').innerHTML = data;
            initSidebarEvents();
        });

    // ✅ 드롭다운 및 메뉴버튼 클릭 이벤트
    function initHeaderEvents() {
        // 드롭다운
        const dropdowns = document.querySelectorAll('.lang-dropdown');

        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.lang-toggle');
            if (toggle) {
                toggle.addEventListener('click', function (e) {
                    e.preventDefault();
                    dropdowns.forEach(d => {
                        if (d !== dropdown) d.classList.remove('open');
                    });
                    dropdown.classList.toggle('open');
                });
            }
        });

        document.addEventListener('click', function (e) {
            dropdowns.forEach(dropdown => {
                if (!dropdown.contains(e.target)) {
                    dropdown.classList.remove('open');
                }
            });
        });

        // 메뉴 버튼 (사이드바 열기)
        const menuBtn = document.querySelector('.sb_btn');
        menuBtn?.addEventListener('click', () => toggleSidebar(true));
    }

    // ✅ 사이드바 닫기 버튼 이벤트
    function initSidebarEvents() {
        const closeBtn = document.querySelector('.close--btn');
        closeBtn?.addEventListener('click', () => toggleSidebar(false));

        // 사이드바 반응형 자동 닫기
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1375) {
                toggleSidebar(false);
            }
        });
    }

    // ✅ 사이드바 열고 닫기 토글 함수
    function toggleSidebar(open) {
        const sidebar = document.getElementById('sidebar');
        const menuBtn = document.querySelector('.sb_btn');
        const closeBtn = document.querySelector('.close--btn');
        const footerHidden = document.querySelector('.footer_content .footer_left--block');
        const footerHidden01 = document.querySelector('.footer_right--block .footer_sns--block');
        const headerBg = document.querySelector('.header');
        const headerContent = document.querySelector('.header_content');

        if (!sidebar || !menuBtn || !closeBtn || !footerHidden || !footerHidden01 || !headerBg) return;

        sidebar.classList.toggle('open', open);
        closeBtn.classList.toggle('visible', open);
        menuBtn.classList.toggle('hidden', open);
        footerHidden.style.display = open ? 'none' : 'flex';
        footerHidden01.style.display = open ? 'none' : 'flex';
        headerBg.classList.toggle('active', open);

        // home 페이지가 아닐 때만 border-bottom 토글
        if (!body.classList.contains('home')) {
            if (headerContent) {
                headerContent.style.borderBottom = open ? 'none' : '1px solid #000';
            }
        }
    }
});