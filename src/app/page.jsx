import Image from "next/image";
import styles from "./page.module.css";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Home() {

  await sleep(3500);

  throw new Error("Simulando um erro catastrófico!!!");
  return (
    <>
      <main>
        <div className="container">
          <div className="hero">
            <div className="hero-txt">
              <div className="hero-title">
                <h2>
                  Unlock Your Business Potential With Facebook & Instagram
                  Advertising
                </h2>
              </div>
              <div className="hero-details">
                Facebook Premier Level Partner Agency
              </div>
              <div className="hero-btn">
                <a href="#">WORK WITH US</a>
              </div>
            </div>

            <div className="hero-img">
              <img src="/imagens/heroImg.png" alt="foto hero" />
            </div>
          </div>

          <div className="fileira">
            <div className="group-img facebook">
              <img src="/imagens/facebook.png" alt="facebook"/>
              <div className="details facebook-d">
                <label>Facebook Premier </label>
                <span>Level Agency Partner</span>
              </div>
            </div>
            <div className="group-img google">
              <img src="/imagens/google.png" alt="google" />
              <div className="details google-d">
                <label>Google Endoned </label>
                <span>Marketing Partner</span>
              </div>
            </div>
            <div className="group-img forbes">
              <img src="/imagens/forbes.png" alt="" />
              <div className="details forbes-d">
                <label>Forbes Agency</label>
                <span>Council Member</span>
              </div>
            </div>
            <div className="group-img inc">
              <img src="/imagens/inc.png" alt="" />
              <div className="details inc-d">
                <label>Inc. 5000</label>
                <span>Fastest Growing Company</span>
              </div>
            </div>
            <div className="group-img letra">
              <h1>$100M</h1>
              <div className="details letra-d">
                <label>In Annual</label>
                <span>Digital Ad Spend</span>
              </div>
            </div>
            <div className="group-img letra">
              <h1>15+</h1>
              <div className="details letra-d">
                <label>Years of Facebook</label>
                <span>Advertising Experience</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
