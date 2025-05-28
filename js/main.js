// انیمیشن نرم در اسکرول به بخش‌ها
document.querySelectorAll('.nav a, .hero-cta a').forEach(link => {
  link.addEventListener('click', e => {
    if (link.hash && document.querySelector(link.hash)) {
      e.preventDefault();
      document.querySelector(link.hash).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// هندل ارسال فرم (دیتا مستقیماً ارسال نمیشه، فقط دموی تعامل کاربری)
document.querySelector('.register-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('درخواست شما با موفقیت ثبت شد.
منتظر تماس ما باشید.');
  this.reset();
});
