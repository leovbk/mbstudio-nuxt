<template>
  <div class="home">
    <div class="introLayer">
      <div class="ovale"></div>
      <img src="@/assets/images/mb-studio.svg" />
    </div>
    <div class="bg1">
      <p class="mb">mb.</p>
      <p class="studio">studio</p>
    </div>
    <div class="bg2">
      <div class="portrait">
        Diplômée en Architecture d'Intérieur et Scénographie, Margaux Bonfils
        fonde l'agence Mb. studio en 2018. Son travail se concentre sur la
        rénovation d'espaces pour particuliers et professionnels. Grâce à ses
        capacités artistiques et techniques, elle s'engage à vous suivre du
        début jusqu'à la réception des travaux de votre projet.
      </div>
    </div>
  </div>
</template>

<script>
import { homeGsapAnimation } from '@/assets/js/home-gsap-animation'

export default {
  name: 'Home',
  data() {
    return {}
  },
  mounted() {
    window.scrollTo(0, 0)
    homeGsapAnimation()
    console.log('v4')
  },
}
</script>

<style>
.home {
  overflow-x: hidden;
}
.portrait {
  position: relative;
  top: 200px;
  left: 15%;
  width: 400px;
  height: fit-content;
  color: black;
  font-size: 26px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(3px);
  padding: 40px;
}

.line {
  overflow: hidden;
}
.bg1 {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/images/Home/home-01.jpg');
  background-size: cover;
}

.bg2 {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/images/Home/MBHOME-NEWBG2.jpg');
  background-size: cover;
}

.bg1 p {
  font-weight: 300;
  color: white;
  font-family: Abuget, sans-serif;
  font-size: 230px;
  z-index: 1;
}

.mb {
  position: absolute;
  bottom: 1vh;
  left: 12%;
  scale: 1;
}

.studio {
  position: absolute;
  bottom: 1vh;
  left: calc(22% + 0.2em);
  scale: 1;
}

.introLayer {
  height: 100vh;
  width: 100vw;
  background-color: #28282d;
  position: absolute;
  z-index: 30;
}

.introLayer img {
  height: 50px;
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
}

.introLayer svg {
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
}

.introLayer svg ellipse {
  overflow: visible;
}
.ovale {
  opacity: 0;
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 150px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 400px / 150px;
  filter: blur(50px);
}

@media (max-width: 1300px) {
  .portrait {
    top: 180px;
    font-size: 20px;
    width: 300px;
    text-align: justify;
  }
}

@media (max-width: 1050px) {
  .mb {
    top: 55vh;
  }
  .studio {
    left: 12%;
    top: 70vh;
  }
  .bg1 p {
    font-size: 230px;
  }

  .bg1 {
    background-position: center;
  }
  .portrait {
    text-align: center;
    padding: 40px;
    left: 50%;
    font-size: 25px;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(3px);
  }
}

@media (max-width: 600px) {
  .bg1 p {
    font-size: 180px;
  }
  .mb {
    top: 57vh;
  }
  .studio {
    top: 70vh;
  }
}
</style>
