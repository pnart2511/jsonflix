function scrollCategories(direction) {
    const container = document.getElementById('categoriesContainer');
    if (!container) return;

    const scrollAmount = 200;
    const currentScroll = container.scrollLeft;
    
    container.scrollTo({
        left: direction === 'left' 
            ? currentScroll - scrollAmount 
            : currentScroll + scrollAmount,
        behavior: 'smooth'
    });
}

// Kiểm tra xem có cần hiển thị nút điều hướng không
function checkScrollButtons() {
    const container = document.getElementById('categoriesContainer');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    
    if (container.scrollLeft <= 0) {
        prevButton.style.opacity = '0.3';
        prevButton.style.cursor = 'default';
    } else {
        prevButton.style.opacity = '1';
        prevButton.style.cursor = 'pointer';
    }

    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        nextButton.style.opacity = '0.3';
        nextButton.style.cursor = 'default';
    } else {
        nextButton.style.opacity = '1';
        nextButton.style.cursor = 'pointer';
    }
}

// Add scroll event listener
document.getElementById('categoriesContainer').addEventListener('scroll', checkScrollButtons);

// Initial check
document.addEventListener('DOMContentLoaded', checkScrollButtons);
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');
            
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            contents.forEach(content => {
                content.style.display = 'none';
                if (content.id === `${target}-content`) {
                    content.style.display = 'block';
                }
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const movieGrids = document.querySelectorAll('.movie-grid');
    
    movieGrids.forEach(grid => {
        let isDown = false;
        let startX;
        let scrollLeft;

        grid.addEventListener('mousedown', (e) => {
            isDown = true;
            grid.classList.add('active');
            startX = e.pageX - grid.offsetLeft;
            scrollLeft = grid.scrollLeft;
        });

        grid.addEventListener('mouseleave', () => {
            isDown = false;
            grid.classList.remove('active');
        });

        grid.addEventListener('mouseup', () => {
            isDown = false;
            grid.classList.remove('active');
        });

        grid.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - grid.offsetLeft;
            const walk = (x - startX) * 2;
            grid.scrollLeft = scrollLeft - walk;
        });
    });
});
   document.addEventListener('DOMContentLoaded', function() {
  const link = document.querySelector('.link');

  link.addEventListener('click', function() {
    // Xóa lớp 'active' khỏi tất cả các liên kết (nếu bạn có nhiều hơn một)
    document.querySelectorAll('.link').forEach(item => {
      item.classList.remove('active');
    });

    // Thêm lớp 'active' cho liên kết hiện tại
    link.classList.add('active');
  });
});


       var swiper = new Swiper(".multiple-slide-carousel", {
         loop: true,
         slidesPerView: 3,
         spaceBetween: 20,
         navigation: {
           nextEl: ".multiple-slide-carousel .swiper-button-next",
           prevEl: ".multiple-slide-carousel .swiper-button-prev",
         },
         breakpoints: {
          1920: {
              slidesPerView: 3,
              spaceBetween: 30
          },
          1028: {
              slidesPerView: 2,
              spaceBetween: 30
          },
          990: {
              slidesPerView: 1,
              spaceBetween: 0
          }
        }
       });
   
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.movie-card a').forEach(function (link) {
            link.addEventListener('click', function (event) {
                event.preventDefault(); // Ngăn chặn chuyển hướng mặc định

                const slug = link.parentElement.dataset.slug;
                console.log('Movie clicked:', slug); 

                // Gửi yêu cầu Ajax để cập nhật lượt xem
                fetch('update_views.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ slug: slug })
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Response from server:', data); 

                    if (data.success) {
                        // Sau khi cập nhật thành công, điều hướng đến trang chi tiết phim
                        window.location.href = link.getAttribute('href'); // Chuyển hướng sau khi cập nhật lượt xem
                    } else {
                        console.error('Cập nhật lượt xem thất bại:', data.error);
                        // Xử lý lỗi nếu cần (ví dụ: hiển thị thông báo lỗi)
                        window.location.href = link.getAttribute('href'); // Chuyển hướng ngay cả khi có lỗi
                    }
                })
                .catch(error => {
                    console.error('Lỗi khi gửi yêu cầu:', error);
                    // Xử lý lỗi nếu cần (ví dụ: hiển thị thông báo lỗi)
                    window.location.href = link.getAttribute('href'); // Chuyển hướng ngay cả khi có lỗi
                });
            });
        });
    });

    function truncateText(text, maxLength) {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    }

    // Áp dụng cho tất cả các phần tử với lớp .movie-title
    document.querySelectorAll('.movie-title').forEach(element => {
        element.textContent = truncateText(element.textContent, 50);
    });

    function toggleFilterForm() {
        var filterForm = document.querySelector('.filter-form');
        filterForm.style.display = filterForm.style.display === 'none' ? 'block' : 'none';
    }
    
    
    document.addEventListener('DOMContentLoaded', function() {
  const movieGrid = document.querySelector('.movie-grid');
  const movieCards = movieGrid.querySelectorAll('.movie-card');

  if (movieCards.length === 1) {
    movieGrid.classList.add('single-card');
  }
});
 function toggleFilterForm() {
    var filterForm = document.querySelector('.filter-form');
    if (filterForm.style.display === 'none' || filterForm.style.display === '') {
        filterForm.style.display = 'block';
    } else {
        filterForm.style.display = 'none';
    }
}