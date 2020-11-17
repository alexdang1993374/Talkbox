import React from "react";
import useSound from "use-sound";
import "./Simpsons.css";

import zaus from "./img//zaus.jpg";

import mole from "./img/mole.jpg";

import haha from "./img/haha.gif";

import duff from "./img/duff.gif";

import hippo from "./img/hippo.gif";

import dead from "./img/dead.jpg";

import flanders from "./img/flanders.gif";

import hell from "./img/hell.jpg";

import rake from "./img/rake.gif";

import blurst from "./img/blurst.gif";

import damn from "./img/damn.jpg";

import carumba from "./img/carumba.jpg";

import comb from "./sounds/comboSimp.wav";

export default function Simpsons() {
  const [play, { stop }] = useSound(comb, {
    sprite: {
      zaus: [0, 3576],
      mole: [3628, 2747],
      haha: [6467, 989],
      duff: [7544, 5324],
      hippo: [13020, 4129],
      dead: [17442, 4718],
      flanders: [22481, 2012],
      hell: [24913, 1266],
      rake: [26558, 3001],
      blurst: [29988, 3819],
      damn: [34341, 2333],
      carumba: [37399, 1085],
    },
  });

  return (
    <>
      <h1>The Simpsons Soundboard</h1>
      <span
        class="container"
        onClick={() => {
          stop();
          play({ id: "zaus" });
        }}
      >
        <img src={zaus} alt="Dr. Zaius" />
        <span class="text-overlay">Dr. Zaius</span>
      </span>
      <span
        class="container"
        onClick={() => {
          stop();
          play({ id: "mole" });
        }}
      >
        <img src={mole} alt="Moleman" />
        <span class="text-overlay">Gay for Moleman</span>
      </span>
      <span
        class="container"
        onClick={() => {
          stop();
          play({ id: "haha" });
        }}
      >
        <img src={haha} alt="Haha" />
        <span class="text-overlay">Haha</span>
      </span>
      <span
        class="container"
        onClick={() => {
          stop();
          play({ id: "duff" });
        }}
      >
        <img src={duff} alt="Duffman" />
        <span class="text-overlay">Oh Yeah!!</span>
      </span>
      <span
        class="container"
        onClick={() => {
          stop();
          play({ id: "hippo" });
        }}
      >
        <img src={hippo} alt="Mmmmm Hippo" />
        <span class="text-overlay">Mmmmm</span>
      </span>
      <span
        class="container"
        onClick={() => {
          stop();
          play({ id: "dead" });
        }}
      >
        <img src={dead} alt="Stop he's already dead" />
        <span class="text-overlay">Stop he's already dead</span>
      </span>
      <span
        class="container"
        onClick={() => {
          stop();
          play({ id: "flanders" });
        }}
      >
        <img src={flanders} alt="Stupid sexy Flanders" />
        <span class="text-overlay">Stupid sexy Flanders</span>
      </span>
      <span
        class="container"
        onClick={() => {
          stop();
          play({ id: "hell" });
        }}
      >
        <img src={hell} alt="Krusty the Clown" />
        <span class="text-overlay">What the hell</span>
      </span>
      <span
        class="container"
        onClick={() => {
          stop();
          play({ id: "rake" });
        }}
      >
        <img src={rake} alt="Sideshow Bob" />
        <span class="text-overlay">Urghhh</span>
      </span>
      <span
        class="container"
        onClick={() => {
          stop();
          play({ id: "blurst" });
        }}
      >
        <img src={blurst} alt="Monkey at a typewriter" />
        <span class="text-overlay">The greatest novel known to man</span>
      </span>
      <span
        class="container"
        onClick={() => {
          stop();
          play({ id: "damn" });
        }}
      >
        <img src={damn} alt="Todd Flanders" />
        <span class="text-overlay">Vegetables</span>
      </span>
      <span
        class="container"
        onClick={() => {
          stop();
          play({ id: "carumba" });
        }}
      >
        <img src={carumba} alt="Ay Carumba" />
        <span class="text-overlay">¡Ay, caramba!</span>
      </span>
    </>
  );
}
