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
              alt="Instagram Icon"
              src="/assets/instagram-icon.png"
            ></Image>
          </div>
          <Image
            width={500}
            height={400}
            alt="Avatar"
            style={{ borderRadius: "10px" }}
            src="/assets/hero.jpg"
          ></Image>
        </div>

        <div>
          <div className="tech-icon">
            <Image
              width={500}
              height={500}
              alt="Facebook Icon"
              src="/assets/facebook-icon.png"
            ></Image>
          </div>
          <div className="tech-icon">
            <Image
              width={500}
              height={500}
              alt="Telegram Icon"
              src="/assets/telegram-icon.png"
            ></Image>
          </div>
          <div className="tech-icon">
            <Image
              width={500}
              height={500}
              alt="X Icon"
              src="/assets/x-icon.png"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
