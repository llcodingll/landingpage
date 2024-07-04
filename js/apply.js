document.addEventListener('DOMContentLoaded', function() {
    const categoryLinks = document.querySelectorAll('.category-nav ul li a');
    const jobLinks = document.querySelectorAll('.job-link');
    const modals = document.querySelectorAll('.modal');
    const closeButton = document.querySelectorAll('.close-button');

    // 카테고리 링크 클릭 시 이벤트 처리
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = link.getAttribute('href').substring(1); // #category-1 -> category-1로 변환
            const categoryItems = document.querySelectorAll('.category-item');

            categoryItems.forEach(item => {
                if (item.id === target) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });

            // 링크에 active 클래스 추가/제거
            categoryLinks.forEach(categoryLink => {
                if (categoryLink === link) {
                    categoryLink.classList.add('active');
                } else {
                    categoryLink.classList.remove('active');
                }
            });
        });
    });

    // 모달 열기 이벤트 처리
    jobLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = link.getAttribute('data-target');
            const modal = document.getElementById(`${target}-modal`);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    // 모달 닫기 이벤트 처리
    closeButton.forEach(button => {
        button.addEventListener('click', function() {
            const modal = button.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', function(event) {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});
