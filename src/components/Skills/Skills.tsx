import Image from "next/image";
import "./Skills.css";

const Technologies = () => {
  return (
    <section id="skills" className="skills-container">
      <h5>Мої навички</h5>

      <div className="skills-content">
        <div className="skills-card">
          <Image
            width={500}
            height={500}
            style={{ width: "100px", height: "100px", margin: "0 auto" }}
            alt="HTML Icon"
            src="/assets/html-icon.png"
          />
          <p>HTML</p>
        </div>
        <div className="skills-card">
          <Image
            width={500}
            height={500}
            style={{ width: "100px", height: "100px", margin: "0 auto" }}
            alt="HTML Icon"
            src="/assets/html-icon.png"
          />
          <p>HTML</p>
        </div>
        <div className="skills-card">
          <Image
            width={500}
            height={500}
            style={{ width: "100px", height: "100px", margin: "0 auto" }}
            alt="HTML Icon"
            src="/assets/html-icon.png"
          />
          <p>HTML</p>
        </div>
        <div className="skills-card">
          <Image
            width={500}
            height={500}
            style={{ width: "100px", height: "100px", margin: "0 auto" }}
            alt="HTML Icon"
            src="/assets/html-icon.png"
          />
          <p>HTML</p>
        </div>
        <div className="skills-card">
          <Image
            width={500}
            height={500}
            style={{ width: "100px", height: "100px", margin: "0 auto" }}
            alt="HTML Icon"
            src="/assets/html-icon.png"
          />
          <p>HTML</p>
        </div>
        <div className="skills-card">
          <Image
            width={500}
            height={500}
            style={{ width: "100px", height: "100px", margin: "0 auto" }}
            alt="HTML Icon"
            src="/assets/html-icon.png"
          />
          <p>HTML</p>
        </div>
        <div className="skills-card">
          <Image
            width={500}
            height={500}
            style={{ width: "100px", height: "100px", margin: "0 auto" }}
            alt="HTML Icon"
            src="/assets/html-icon.png"
          />
          <p>HTML</p>
        </div>
        <div className="skills-card">
          <Image
            width={500}
            height={500}
            style={{ width: "100px", height: "100px", margin: "0 auto" }}
            alt="HTML Icon"
            src="/assets/html-icon.png"
          />
          <p>HTML</p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
