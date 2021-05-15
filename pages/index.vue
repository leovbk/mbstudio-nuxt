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
  },
  // methods: {

  // },
  // computed: {
  //   parallaxBg2: function(){
  //   const parallax = document.querySelector('.bg2')
  //   window.addEventListener('scroll', () => {
  //     parallax.style.backgroudPositionY = -window.scrollY / 4 + 'px'
  //   })
  //   }
  // }
}
</script>

<style>
.portrait {
  position: relative;
  top: 150px;
  right: -700px;
  width: 700px;
  height: fit-content;
  color: white;
  font-size: xx-large;
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
  background-image: url('@/assets/images/Home/MBHome1700px01.jpg');
  background-size: cover;
}

.bg1 p {
  font-weight: 300;
  color: white;
  font-family: Abuget, sans-serif;
  font-size: 300px;
  z-index: 1;
}

.mb {
  position: absolute;
  top: 52vh;
  left: 180px;
  scale: 1;
}

.studio {
  position: absolute;
  top: 52vh;
  left: 510px;
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
</style>
