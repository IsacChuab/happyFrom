import { useEffect, useState } from "react";
import photo1 from "./assets/photo1.jpg";
import photo2 from "./assets/photo2.jpg";
import photo3 from "./assets/photo3.jpg";
import "./App.css";
import { format, intervalToDuration } from "date-fns";

const startDate = new Date("2021/10/09 23:24:00");

function App() {
  const [now, setNow] = useState(new Date());

  const [photoIndex, setPhotoIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const images = [photo1, photo2, photo3];
  const duration = intervalToDuration({
    start: startDate,
    end: now,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        setPhotoIndex((prev) => (prev + 1) % images.length);
        setFade(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <img
          src={images[photoIndex]}
          className={`logo ${fade ? "fade-out" : ""}`}
          alt="Banner"
        />
      </div>

      <div className="title">
        <h1>Te amo! </h1>
        <h1>Princesa minha.</h1>
      </div>
      <div className="card">
        <b>
          Por: {duration.years} anos, {duration.months} meses, {duration.days}{" "}
          dias - {format(new Date(), "HH:mm:ss")}
        </b>
        <hr />
        <div className="poem">
          <p>
            Criei este contador como testemunha do meu carinho por você, um
            carinho que, como o tempo, nunca cessa. Ele segue em frente, firme,
            eterno… assim como o que sinto por ti.
          </p>

          <p>
            Fomos unidos por Deus, e nada poderá nos separar. Meu maior desejo é
            te fazer a mulher mais feliz deste mundo. Você é a mulher mais bela
            que meus olhos já contemplaram, a mais forte que minha admiração já
            abraçou, a mais doce que meu coração já acolheu, a mais vibrante que
            minha alma já celebrou. Você é o meu tudo. E posso dizer, com toda a
            certeza que cabe em mim: você é perfeita para mim.
          </p>

          <p>
            A vida é feita de estações, algumas ensolaradas, outras nem tanto,
            mas em cada uma, estarei contigo. Já demos nossos primeiros passos
            juntos, e sei que ainda há tantos objetivos à ser atingido.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
