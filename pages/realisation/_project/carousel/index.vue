<template>
  <div id="carousel_container" class="container">
    <nuxt-link
      id="carousel_escape"
      :to="{
        name: 'realisation-project',
        params: { project: `${project.id}` },
      }"
      ><img
        id="img_escape"
        :src="require('@/assets/logo/escape.svg')"
        @click="killScrollAnim"
    /></nuxt-link>
    <section
      v-for="(image, i) in projectImages"
      :key="i"
      class="panel"
      :class="`photo${i + 1}`"
      :style="{
        backgroundImage: `url(${require(`@/assets/images/projets/${projectId}/${image}`)})`,
      }"
    ></section>
    <div class="flex flex-center">
      <Transition name="fade">
        <img
          v-show="hasArrowVisible"
          id="scrollUp"
          src="@/assets/logo/arrow-205.svg"
          alt="Scroll up"
        />
      </Transition>
      <Transition name="fade">
        <img
          v-show="hasArrowVisible"
          id="scrollDown"
          src="@/assets/logo/arrow-205.svg"
          alt="Scroll down"
        />
      </Transition>
    </div>
  </div>
</template>

<script>
import projetsData from '@/assets/projets-data'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min'

export default {
  beforeRouteLeave(to, from, next) {
    document.removeEventListener('scroll', this.scrollHandler)
    this.killScrollAnim()
    next()
  },
  layout: 'carousel',
  data() {
    return {
      projetsData,
      hasArrowVisible: true,
      projectIndex: '',
      photoHeight: '',
    }
  },
  computed: {
    projectId() {
      return this.$route.params.project
    },
    project() {
      return projetsData.find((project) => project.id === this.projectId)
    },
    projectImages() {
      return this.project.photos
    },
    currentPhoto() {
      return this.$route.query.photo
    },
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger)
    // trigger

    function setSection(newSection) {
      if (newSection !== currentSection) {
        gsap.to(currentSection, { scale: 0.8, autoAlpha: 0 })
        gsap.to(newSection, { scale: 1, autoAlpha: 1 })
        currentSection = newSection
      }
    }
    const sections = document.getElementsByClassName('panel')
    let currentSection = sections[this.currentPhoto]

    gsap.defaults({ overwrite: 'auto', duration: 0.25 })
    gsap.set('#carousel_container', { height: sections.length * 100 + '%' })
    sections.forEach((section, i) => {
      ScrollTrigger.create({
        start: () => (i - 0.5) * innerHeight,
        end: () => (i + 0.5) * innerHeight,
        onToggle: (self) => self.isActive && setSection(section),
      })
    })

    setSection(currentSection)

    ScrollTrigger.create({
      id: 'carousel_trigger',
      start: 1,
      end: () => ScrollTrigger.maxScroll(window) - 1,
      onLeaveBack: (self) => self.scroll(ScrollTrigger.maxScroll(window) - 2),
      onLeave: (self) => self.scroll(2),
    }).scroll(2)

    document.addEventListener('scroll', this.scrollHandler)

    // go to current photo
    console.log(innerHeight * this.currentPhoto)
    setTimeout(function () {
      window.scrollTo(0, innerHeight * this.currentPhoto)
    }, 2000)
  },

  // photo size

  methods: {
    log() {
      const page = document.querySelector('#carousel_container')
      console.log(page.scrollTop)
    },

    scrollHandler() {
      // var scrollD = document.querySelector('#scrollDown')
      if (
        window.scrollY > innerHeight * this.currentPhoto + 150 ||
        window.scrollY < innerHeight * this.currentPhoto - 150
      ) {
        this.hasArrowVisible = false
      }
    },
    killScrollAnim() {
      const Alltrigger = ScrollTrigger.getAll()
      for (let i = 0; i < Alltrigger.length; i++) {
        Alltrigger[i].kill(true)
      }
    },
    // scrollDownAnim: function() {
    //   let tlScrollAnim = new gsap.timeline()
    //   tlScrollAnim.to('#scrollDown', { opacity: 1, duration: 1 })
    //   tlScrollAnim.to('#scrollDown', { opacity: 0, duration: 1 })
    // }
  },
}
</script>

<style>
.container {
  height: 100%;
}

.panel {
  position: fixed;
  width: calc(100% - 700px);
  height: calc(100% - 120px);
  top: 0;
  left: 0;
  margin: 60px 350px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

section:not(.first) {
  opacity: 0;
  visibility: hidden;
  transform: scale(0.8);
}

#carousel_escape {
  position: fixed;
  top: 0;
  right: 0;
  width: 6%;
  height: 10%;
  z-index: 300;
}

#scrollDown {
  position: fixed;
  width: 6vw;
  bottom: 0;
}

#scrollUp {
  position: fixed;
  width: 6vw;
  top: 0;
  transform: rotate(180deg);
}

.fade-enter-active,
.fade-leave-active {
  transform: scale(1);
  z-index: 998;
  transition: all ease-in-out 300ms;
}

.fade-enter,
.fade-leave-to {
  transform: scale(0);
  z-index: 998;
}
</style>
