<template>
    <div class="komple">
      <footer class="site-footer">
        <div class="footer-column first-column">
          <h4 class="column-title">KATEGORİLER</h4>
          <ul class="column-list">
            <li>Kurumsal Ürünler</li>
            <li>Bilgisayarlar</li>
            <li>Monitörler</li>
            <li>Yazıcılar</li>
            <li>Sarf Malzemeler</li>
            <li>Aksesuarlar</li>
          </ul>
        </div>
  
        <div class="footer-column">
          <h4 class="column-title">ÖNEMLİ BİLGİLER</h4>
          <ul class="column-list">
            <li>Sipariş Takip</li>
            <li>Kargo ve Teslimat Koşulları</li>
            <li>Garanti Şartları ve İade Politikası</li>
            <li>KVKK Aydınlatma Metni</li>
            <li>KVKK Başvuru Formu</li>
            <li>Çerez Aydınlatma Metni</li>
            <li>Yurtdışı Veri Aktarımı</li>
            <li>Bilgi Güvenliği Politikası</li>
            <li>İşlem Rehberi</li>
            <li>Örnek Cayma Formu</li>
            <li>Çerez Ayarları</li>
          </ul>
        </div>
  
        <div class="footer-column">
          <h4 class="column-title">HIZLI ERİŞİM</h4>
          <ul class="column-list">
            <li>Anasayfa</li>
            <li>Hakkımızda</li>
            <li>Yeni Ürünler</li>
            <li>Sepetim</li>
            <li>Site Haritası</li>
            <li>İletişim</li>
          </ul>
        </div>
  
        <div class="footer-column last-column">
          <h4 class="column-title">ÜYE</h4>
          <ul class="column-list">
            <li>Yeni Üyelik</li>
            <li>Üye Girişi</li>
            <li>Üyelik Sözleşmesi</li>
          </ul>
        </div>
      </footer>
  
      <div class="additional-content">
        <div class="product-categories">
          <span>Notebook</span>
          <span>Hp 14/15</span>
          <span>Gaming Notebook</span>
          <span>Omen</span>
          <span>Pavilion</span>
          <span>Pavilion Gaming</span>
          <span>Spectre</span>
          <span>Envy</span>
          <span>Elite</span>
          <span>Victus</span>
          <span>ZBook</span>
          <span>X360</span>
          <span>Aero</span>
          <span>ProDesk</span>
          <span>HP IPS Monitör</span>
          <span>HP LED Monitör</span>
        </div>
  
        <div class="site-info">
          <p>
            Bu web sitesi (hpstore.com.tr) HP Resmi İş Ortağı TUNGSTEN TEKNOLOJİ
            SANAYİ VE TİCARET A.Ş tarafından yönetilmektedir.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'TheFooter',
  };
  </script>
  
  <style scoped>

  .komple{
    margin-top: -1200px;
  }
  .site-footer {
    display: flex;
    justify-content: space-around;
    background-color: #ffffff; /* Beyaz arka plan */
    padding: 20px;
  }
  
  .footer-column {
    flex: 1;
    padding: 0 10px; /* Sağ sol iç boşluğu eklendi */
  }
  
  .first-column {
    margin-left: 0; /* İlk sütün sol boşluğu sıfırlandı */
  }
  
  .last-column {
    margin-right: 0; /* Son sütun sağ boşluğu sıfırlandı */
  }
  
  .column-title {
    color: #000000; /* Siyah renk */
    font-size: 16px; /* Yazı boyutu bir tık arttırıldı */
    font-weight: bold; /* Kalınlık eklendi */
  }
  
  .column-list {
    list-style: none;
    padding: 0;
  }
  
  .column-list li {
    margin-bottom: 5px;
    color: #000000; /* Siyah renk */
    font-size: 12px; /* Alt başlıklar daha küçük yazıldı */
    cursor: pointer;
  }
  
  .column-list li:hover {
    text-decoration: underline;
  }
  
  .additional-content {
    background-color: #f1f1f1; /* Gri arka plan */
    padding: 10px;
    text-align: center; /* Yazıları merkeze al */
  }
  
  .product-categories {
    margin-bottom: 10px; /* Kategoriler arasına boşluk eklendi */
    white-space: nowrap; /* Satırların alt alta değil yan yana sıralanmasını sağlar */
  }
  
  .product-categories span {
    display: inline-block; /* Her kategori yan yana sıralanması için */
    margin-right: 10px; /* Kategoriler arasına boşluk eklendi */
    color: #000000; /* Siyah renk */
  }
  
  .site-info p {
    margin: 0;
    color: #000000; /* Siyah renk */
    font-size: 12px; /* Yazı boyutu küçültüldü */
  }
  </style>