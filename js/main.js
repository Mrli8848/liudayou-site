/**
 * CloudNova - 主交互脚本
 * 功能：导航栏滚动效果、移动端菜单、表单提交
 */

// ========== 导航栏滚动阴影 ==========
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ========== 移动端菜单切换 ==========
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // 点击导航链接后关闭菜单
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// ========== 联系表单提交 ==========
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const submitBtn = document.getElementById('submitBtn');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // 简单表单验证
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let isValid = true;

    // 清除之前的错误状态
    [name, email, message].forEach(field => {
      if (field) field.style.borderColor = '';
    });

    if (name && !name.value.trim()) {
      name.style.borderColor = '#ef4444';
      isValid = false;
    }
    if (email && !email.value.trim()) {
      email.style.borderColor = '#ef4444';
      isValid = false;
    } else if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.style.borderColor = '#ef4444';
      isValid = false;
    }
    if (message && !message.value.trim()) {
      message.style.borderColor = '#ef4444';
      isValid = false;
    }

    if (!isValid) return;

    // 模拟提交
    if (submitBtn) {
      submitBtn.textContent = '提交中...';
      submitBtn.disabled = true;
    }

    setTimeout(() => {
      contactForm.style.display = 'none';
      if (formSuccess) {
        formSuccess.style.display = 'block';
      }
    }, 800);
  });
}

// ========== 平滑滚动（兼容旧浏览器） ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

console.log('CloudNova - 网站已就绪');
