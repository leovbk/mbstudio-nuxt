<template>
  <div id="carousel_container" class="container">
    <nuxt-link
      id="carousel_escape"
      :to="{
        name: 'realisation-project',
        params: { project: `${project.id}` },
      }"
    >
      <img
        id="img_escape"
        :src="require('@/assets/logo/escape.svg')"
        @click="killScrollAnim"
      />
    </nuxt-link>
    <section
      v-for="(image, i) in projectImages"
      :key="i"
      class="panel"
      :class="`photo${i + 1}`"
      :style="{
        backgroundImage: `url(${project.photos[i].photos.url})`,
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
// import projetsData from '@/assets/projets-data'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min'

export default {
  beforeRouteLeave(to, from, next) {
    document.removeEventListener('scroll', this.scrollHandler)
    this.killScrollAnim()
    next()
  },
  layout: 'carousel',
  async asyncData({ $prismic, error }) {
    const document = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'projet')
    )

    const prismicProject = []

    for (let i = 0; i < document.results.length; i++) {
      prismicProject.push(document.results[i].data)
    }

    return { prismicProject }
  },
  data() {
    return {
      projetsData: [],
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
      return this.projetsData.find((project) => project.id === this.projectId)
    },
    projectImages() {
      return this.project.photos
    },
    currentPhoto() {
      return this.$route.query.photo
    },
  },
  created() {
    // map projet data

    for (const project in this.prismicProject) {
      this.projetsData[project] = {
        name: '',
        id: '',
        title: '',
        phase: '',
        lieu: '',
        domaine: '',
        credit: '',
        bandeau: '',
        photos: [],
      }
      this.projetsData[project].name = this.prismicProject[project].name
      this.projetsData[project].id = this.prismicProject[project].url
      this.projetsData[project].title = this.prismicProject[project].title
      this.projetsData[project].phase = this.prismicProject[project].phase
      this.projetsData[project].lieu = this.prismicProject[project].lieu
      this.projetsData[project].domaine = this.prismicProject[project].domaine
      this.projetsData[project].credit = this.prismicProject[
        project
      ].credit_photo
      this.projetsData[project].cover = this.prismicProject[project].cover.url
      this.projetsData[project].bandeau = this.prismicProject[
        project
      ].bandeau.url
      this.projetsData[project].photos = this.prismicProject[
        project
      ].body[0].items
    }
  },
  beforeMount() {},
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

    console.log('mout')
    console.log('currentPhoto', this.currentPhoto)

    setTimeout(() => {
      window.scrollTo(0, innerHeight * this.currentPhoto)
    }, 0)

    console.log('moutmoutmout')
  },

  methods: {
    scrollHandler() {
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
  top: 2%;
  right: 2%;
  width: 40px;
  height: auto;
  z-index: 300;
}

#scrollDown {
  position: fixed;
  width: 4vw;
  bottom: 0;
}

#scrollUp {
  position: fixed;
  width: 4vw;
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
@media (max-width: 1300px) {
  .panel {
    width: calc(100% - 500px);
    height: calc(100% - 80px);
    margin: 40px 250px;
  }
}
@media (max-width: 1050px) {
  .panel {
    width: calc(100% - 350px);
    height: calc(100% - 60px);
    margin: 30px 175px;
  }
}
@media (max-width: 800px) {
  .panel {
    width: calc(100% - 250px);
    height: calc(100% - 40px);
    margin: 20px 125px;
  }
}
@media (max-width: 600px) {
  .panel {
    width: calc(100% - 150px);
    height: calc(100% - 20px);
    margin: 10px 75px;
  }
}
@media (max-width: 450px) {
  .panel {
    width: calc(100% - 100px);
    height: calc(100% - 10px);
    margin: 5px 50px;
  }
}
</style>
