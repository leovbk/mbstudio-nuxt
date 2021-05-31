<template>
  <nav class="barMenu">
    <div class="navLayer"></div>
    <div class="nav_container">
      <nuxt-link id="logo" :to="{ name: 'index' }"
        ><img src="@/assets/images/mb-studio.svg"
      /></nuxt-link>
      <div class="btn_nav">
        <nuxt-link :to="{ name: 'index' }">Accueil</nuxt-link>
      </div>
      <div class="btn_nav">
        <nuxt-link :to="{ name: 'realisation' }">Realisation</nuxt-link>
      </div>

      <div class="btn_nav">
        <nuxt-link :to="{ name: 'contact' }">Contact</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
export default {
  name: 'Navbar',
  watch: {
    '$route.name'(routeName) {
      if (routeName === 'index') {
        // run anim
        console.log('watch run anim')
        this.navAnim()
      } else {
        // kill anim
        console.log('watch kill anim')
        this.killNavAnim()
      }
    },
    immediate: true,
  },
  // beforeRouteLeave(to, from, next) {
  //   console.log('to, from, next', to, from, next)
  // },
  mounted() {
    if (this.$route.name === 'index') {
      this.navAnim()
    }
  },
  methods: {
    navAnim() {
      console.log('navAnim')
      gsap.from('.navLayer', {
        y: -100,
        transform: 'rotate(-45deg)',
        scrollTrigger: {
          trigger: '.bg1',
          scrub: true,
          // markers: true,
          start: 'top top',
          end: '+=300',
        },
      })
    },
    killNavAnim() {
      gsap.set('.navLayer', { y: '0', transform: 'rotate(0deg)' })
      gsap.killTweensOf('.navLayer')
      // gsap.from('.navLayer', { y: -100, transform: 'rotate(-45deg)' })
    },
  },
}
</script>

<style>
#logo img {
  width: 160px;
  height: auto;
  position: relative;
}

.nav_container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}

.barMenu .nav_container {
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.btn_nav {
  text-align: center;
  flex: 1;
  border-right: 1px solid white;
  z-index: 1;
}

.btn_nav:last-child {
  border-right: none;
}

.barMenu a {
  text-decoration: none;
  padding: 10px 16px;
  transition: color 250ms ease-in-out;
  border-radius: 8px;
  color: white;
}

.barMenu a:hover,
.barMenu a:focus {
  color: #979797;
}

.barMenu a.active {
  color: #979797;
}

.barMenu {
  flex: 0 0 auto;
  z-index: 20;
  position: fixed;
  width: 100vw;
  top: 0;
  margin: 0;
  overflow-x: hidden;
}

.navLayer {
  position: absolute;
  width: 100vw;
  height: 80px;
  background-color: #2f2e2e;
  transform-origin: top left;
}

@media (max-width: 600px) {
  #logo {
    display: none;
  }

  .nav_container {
    padding: 0;
    width: 100vw;
    margin: 0;
  }
}
</style>
