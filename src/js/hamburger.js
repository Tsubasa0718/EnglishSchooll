const Hamburger = document.getElementById("hamburger-menu");
const Nav = document.querySelector('.nav');

function getFocusableElements() {
    return [
        Hamburger,  // ハンバーガーメニューを含める
        ...Nav.querySelectorAll(".nav__link, .btn--nav") // nav 内のフォーカス可能な要素
    ];
}

Hamburger.addEventListener('click', () => {
    const Expanded = Hamburger.getAttribute('aria-expanded');

    if (Expanded === 'false') {
        Hamburger.setAttribute('aria-expanded', 'true');
        Hamburger.classList.add('is-active');
        Nav.setAttribute('aria-hidden', 'false');
        Nav.classList.add('is-active');

        const focusableElements = getFocusableElements();
        focusableElements[1].focus(); // 最初の `nav__link` に即座にフォーカス

        document.addEventListener("keydown", (event) => trapFocus(event, focusableElements));
    } else {
        Hamburger.setAttribute('aria-expanded', 'false');
        Hamburger.classList.remove('is-active');
        Nav.setAttribute('aria-hidden', 'true');
        Nav.classList.remove('is-active');

        document.removeEventListener("keydown", trapFocus);
    }
});

// フォーカスを `nav` 内に閉じ込める関数
function trapFocus(event, focusableElements) {
    if (event.key === "Tab") {
        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) { // Shift + Tab の場合
            if (document.activeElement === firstFocusableElement) {
                event.preventDefault();
                lastFocusableElement.focus();
            }
        } else { // 通常の Tab の場合
            if (document.activeElement === lastFocusableElement) {
                event.preventDefault();
                firstFocusableElement.focus();
            }
        }
    }
}

// `nav__link` がクリックされたときだけ `hamburger-menu` にフォーカスを戻す
document.querySelectorAll(".nav__link").forEach(link => {
    link.addEventListener("click", () => {
        setTimeout(() => {
            Hamburger.focus();
        }, 100); // ほんの少し遅延させることで自然な動作にする
    });
});

// `hamburger-menu` にフォーカスがある状態で Shift + Enter を押したら、前の要素にフォーカス
Hamburger.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && event.shiftKey) {
        event.preventDefault();

        // `hamburger-menu` の前のフォーカス可能な要素を取得
        const focusableElements = document.querySelectorAll("a, button, input, textarea, select");
        const hamburgerIndex = Array.from(focusableElements).indexOf(Hamburger);

        if (hamburgerIndex > 0) {
            focusableElements[hamburgerIndex - 1].focus();
        }
    }
});
