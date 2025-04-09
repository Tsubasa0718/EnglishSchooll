const addClassOnIntersect = (selector, className) => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
          observer.unobserve(entry.target); // 一度だけ実行
        }
      });
    });

    elements.forEach(el => observer.observe(el));
  };

  // BBBが選ばれる理由（スライド左）
  addClassOnIntersect('.inview-slide-left', 'slide-left');

  // BBBが選ばれる理由（スライド右）
  addClassOnIntersect('.inview-slide-right', 'slide-right');

  // 受講生の声（ふきだし）
  addClassOnIntersect('.inview-balloon', 'balloon');
