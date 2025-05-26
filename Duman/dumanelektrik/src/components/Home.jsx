import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <div className="top-section">
        <div className="left-side">
          <h1 className="brand-title">Duman</h1>
          <p className="desc-text">
            Duman Elektrik, 2000 yılında Esat Karaduman tarafından Silivri'de kurulmuştur. Elektrik projelendirme ve uygulama alanında 25 yıldır kaliteli hizmet sunmaktadır.
          </p>
        </div>
        <div className="right-side">
          <h2 className="slogan">
            25 Yıldır Birlikte Üretiyoruz – Şimdi Yeni Bir Yolda!
          </h2>
          <p className="desc-text">
            25 yıllık saha deneyimini kurumsal bilgi birikimiyle birleştiren Duman Elektrik, mühendislik ve mimarlık alanlarındaki faaliyetlerini de hizmet yelpazesine ekleyerek büyümeye devam etmektedir.
          </p>
        </div>
      </div>

      <div className="box-section">
        <div className="home-box" onClick={() => navigate('/elektrik-uygulama')}>
          elektrik-uygulama
        </div>
        <div className="home-box" onClick={() => navigate('/muhendislik-hizmetleri')}>
          mühendislik hizmetleri
        </div>
        <div className="home-box" onClick={() => navigate('/mimarlik-hizmetleri')}>
          mimarlık hizmetleri
        </div>
      </div>
    </div>
  );
}

export default Home;
