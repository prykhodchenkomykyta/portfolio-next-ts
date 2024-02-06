import Image from "next/image";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-container">
      <div className="hero-content">
        <h2>Bogdan Gosling</h2>
        <p>
          Targetologist specialist who adjusts advertising in social networks |
          Increase the sales of products or services, attract the attention of
          users, and convince them that the offer is extremely beneficial for
          them
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <Image
              width={500}
              height={500}
              alt="Target Image"
              src="/assets/instagram-icon.png"
            ></Image>
          </div>
          <Image
            width={300}
            height={300}
            alt="Target Image"
            src="/assets/rayan-gosling.jpg"
          ></Image>
        </div>

        <div>
          <div className="tech-icon">
            <Image
              width={500}
              height={500}
              alt="Target Image"
              src="/assets/facebook-icon.png"
            ></Image>
          </div>
          <div className="tech-icon">
            <Image
              width={500}
              height={500}
              alt="Target Image"
              src="/assets/telegram-icon.png"
            ></Image>
          </div>
          <div className="tech-icon">
            <Image
              width={500}
              height={500}
              alt="Target Image"
              src="/assets/x-icon.png"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
