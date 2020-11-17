import React from "react";
import useSound from "use-sound";
import "./Spongebob.css";

import firm from "./img/firm.jpg";

import ready from "./img/opening.jpg";

import go from "./img/ready.jpg";

import chocolate from "./img/chocolate.jpg";

import wumbo from "./img/wumbo.jpg";

import number from "./img/numberOne.jpg";

import stinks from "./img/stinks.JPG";

import people from "./img/heyPeople.jpg";

import leg from "./img/leg.jpeg";

import claws from "./img/claws.PNG";

import slasher from "./img/slasher.PNG";

import future from "./img/future.gif";

import comb from "./sounds/comb2.wav";

export default function Spongebob() {
  const [play, { stop }] = useSound(comb, {
    sprite: {
      firm: [0, 2013],
      ready: [2196, 1156],
      go: [3511, 1695],
      chocolate: [5439, 2470],
      wumbo: [7990, 7807],
      number: [15959, 2143],
      stinks: [18247, 3472],
      people: [21880, 5906],
      leg: [28039, 1195],
      claws: [29600, 3172],
      slasher: [33126, 7766],
      future: [41078, 2675],
    },
  });

  return (
    <>
      <h1>Spongebob Soundboard</h1>
      <span
        class="container"
        onClick={() => {
          stop();
          play({ id: "firm" });
        }}
      >
        <img src={firm} alt="Firmly grasp it" />
        <span class="text-overlay">Firmly grasp it</span>
      </span>
      <span
        class="container"
        onClick={() => {
          stop();
          play({ id: "ready" });
        }}
      >
        <img src={ready} alt="Opening Pirate." />
        <span class="text-overlay">Are you Ready?</span>
      </span>
      <span
        class="container"
        onClick={() => {
          stop();
          play({ id: "go" });
        }}
      >
        <img src={go} alt="He's ready." />
        <span class="text-overlay">I'm Ready!!</span>
      </span>
      <span
        class="container"
        onClick={() => {
          stop();
          play({ id: "chocolate" });
        }}
      >
        <img src={chocolate} alt="CHOCOLATE!!" />
        <span class="text-overlay">CHOCOLATE!!!</span>
      </span>
      <span
        class="container"
        onClick={() => {
          stop();
          play({ id: "wumbo" });
        }}
      >
        <img src={wumbo} alt="Wumbo." />
        <span class="text-overlay">Wumbology</span>
      </span>
      <span
        class="container"
        onClick={() => {
          stop();
          play({ id: "number" });
        }}
      >
        <img src={number} alt="He was number one" />
        <span class="text-overlay">He was number 1</span>
      </span>
      <span
        class="container"
        onClick={() => {
          stop();
          play({ id: "stinks" });
        }}
      >
        <img src={stinks} alt="Spongebob telling jokes." />
        <span class="text-overlay">This guy stinks</span>
      </span>
      <span
        class="container"
        onClick={() => {
          stop();
          play({ id: "people" });
        }}
      >
        <img src={people} alt="Hey all you people." />
        <span class="text-overlay">Hey all you people</span>
      </span>
      <span
        class="container"
        onClick={() => {
          stop();
          play({ id: "leg" });
        }}
      >
        <img src={leg} alt="My leg!" />
        <span class="text-overlay">My leg!</span>
      </span>
      <span
        class="container"
        onClick={() => {
          stop();
          play({ id: "claws" });
        }}
      >
        <img src={claws} alt="Big meaty claws." />
        <span class="text-overlay">Big meaty claws</span>
      </span>
      <span
        class="container"
        onClick={() => {
          stop();
          play({ id: "slasher" });
        }}
      >
        <img src={slasher} alt="The Hash Slinging Slasher." />
        <span class="text-overlay">The Hash Slinging Slasher </span>
      </span>
      <span
        class="container"
        onClick={() => {
          stop();
          play({ id: "future" });
        }}
      >
        <img src={future} alt="Future." />
        <span class="text-overlay">Future</span>
      </span>
    </>
  );
}
