function switchLang(lang) {
  document.getElementById('lang-zh').style.display = lang === 'zh' ? 'block' : 'none';
  document.getElementById('lang-en').style.display = lang === 'en' ? 'block' : 'none';

  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector('.lang-btn[onclick="switchLang(\'' + lang + '\')"]').classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const options = { threshold: 0.2 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, options);
  cards.forEach(card => observer.observe(card));
});
