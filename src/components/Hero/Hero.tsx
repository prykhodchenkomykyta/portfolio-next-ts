import Image from "next/image";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-container">
      <div className="hero-content">
        <h2>Богдан Оксимець</h2>
        <p>
          Налаштую рекламу в соціальних мережах та пошукових сервісах | Допоможу
          налаштувати діджитал рекламу та отримати стабільний потік клієнтів до
          вашого бізнесу
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <Image
              width={500}
              height={500}
              alt="Facebook Icon"
              src="/assets/facebook-icon.png"
            />
          </div>
          <Image
            width={500}
            height={500}
            alt="Avatar"
            style={{ borderRadius: "10px", width: "25rem", height: "auto" }}
            src="/assets/hero.jpg"
          />
        </div>

        <div>
          <div className="tech-icon">
            <Image
              width={500}
              height={500}
              alt="Instagram Icon"
              src="/assets/instagram-icon.png"
            />
          </div>
          <div className="tech-icon">
            <Image
              width={500}
              height={500}
              alt="Telegram Icon"
              src="/assets/telegram-icon.png"
            />
          </div>
          <div className="tech-icon">
            <Image
              width={500}
              height={500}
              alt="X Icon"
              src="/assets/x-icon.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
