<template>
  <section class="contact-wrapper">
    <div class="container">
      <h1 class="contact-title">Contact Us</h1>
      <div class="contact-info">
        <p>
          <span class="icon">📧</span>
          <strong>Email:</strong>
          <a href="mailto:P.kitchen.eg@gmail.com">P.kitchen.eg@gmail.com</a>
        </p>
        <p>
          <span class="icon">📍</span>
          <strong>Address:</strong>
          <a href="https://www.google.com/maps?q=Furniture+Point+Mall,1st+Settlement,New+Cairo" target="_blank" rel="noopener">
            Furniture Point Mall, 1st Settlement, New Cairo
          </a>
        </p>
        <p>
          <span class="icon">📞</span>
          <strong>Phone:</strong>
          <a href="https://wa.me/201153002700" target="_blank" rel="noopener">+20 1153002700</a>
        </p>
        <p>
          <span class="icon">📅</span>
          <strong>Working Days:</strong> 7 days a week, From Sunday to Saturday
        </p>
        <p>
          <span class="icon">⏰</span>
          <strong>Working Hours:</strong> 11:00 AM - 10:00 PM
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// يمكنك إضافة منطق الإرسال لاحقًا
</script>

<style scoped>
.contact-wrapper {
  padding-top: 90px;
  min-height: calc(100vh - 0px);
  background: #fff;
  padding-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.container {
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.07);
  padding: 2.5rem 1.5rem;
}
.contact-title {
  font-size: 2.2rem;
  font-family: 'Helvetica-Bold', sans-serif;
  color: var(--color-title);
  text-align: center;
  margin-bottom: 2.5rem;
  letter-spacing: 1px;
}
.contact-info {
  margin-bottom: 2rem;
  background: #fafafa;
  border-radius: 1rem;
  padding: 1.2rem 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  font-size: 1rem;
  color: var(--color-title);
}
.contact-info p {
  margin: 0.3rem 0;
  line-height: 1.7;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.contact-info a {
  color: var(--color-highlight);
  text-decoration: none;
}
.contact-info a:hover {
  text-decoration: underline;
}
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-right: 0.3rem;
  font-size: 1.3em;
}
</style> 