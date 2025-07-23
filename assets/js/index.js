// document.addEventListener('DOMContentLoaded', function () {

//     // ✅ 드롭다운
//     const dropdowns = document.querySelectorAll('.lang-dropdown');

//     dropdowns.forEach(dropdown => {
//         const toggle = dropdown.querySelector('.lang-toggle');

//         if (toggle) {
//             toggle.addEventListener('click', function (e) {
//                 e.preventDefault();

//                 dropdowns.forEach(d => {
//                     if (d !== dropdown) d.classList.remove('open');
//                 });

//                 dropdown.classList.toggle('open');
//             });
//         }
//     });

//     document.addEventListener('click', function (e) {
//         dropdowns.forEach(dropdown => {
//             if (!dropdown.contains(e.target)) {
//                 dropdown.classList.remove('open');
//             }
//         });
//     });

//     // ✅ 사이드바
//     const body = document.body;
//     const menuBtn = document.querySelector('.sb_btn');
//     const sidebar = document.getElementById('sidebar');
//     const closeBtn = document.querySelector('.close--btn');
//     const headerBg = document.querySelector('.header');
//     const footerHidden = document.querySelector('.footer_content .footer_left--block');
//     const footerHidden01 = document.querySelector('.footer_right--block .footer_sns--block');
//     const headerContent = document.querySelector('.header_content');

//     function toggleSidebar(open) {
//         if (!sidebar || !menuBtn || !closeBtn || !footerHidden || !footerHidden01 || !headerBg) return;

//         sidebar.classList.toggle('open', open);
//         closeBtn.classList.toggle('visible', open);
//         menuBtn.classList.toggle('hidden', open);
//         footerHidden.style.display = open ? 'none' : 'flex';
//         footerHidden01.style.display = open ? 'none' : 'flex';
//         headerBg.classList.toggle('active', open);
//         if (!body.classList.contains('home')) {
//             if (headerContent) {
//                 headerContent.style.borderBottom = open ? 'none' : '1px solid #000';
//             }
//         }
//     }

//     menuBtn?.addEventListener('click', () => toggleSidebar(true));
//     closeBtn?.addEventListener('click', () => toggleSidebar(false));

//     window.addEventListener('resize', () => {
//         if (window.innerWidth >= 1375) {
//             toggleSidebar(false);
//         }
//     });



// });