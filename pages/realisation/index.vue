<template>
  <div class="moisaicContainer">
    <div class="projetMosaic">
      <div v-for="({ cover, name, id }, i) in projetsData" :key="i">
        <nuxt-link
          :to="{
            name: 'realisation-project',
            params: { project: id },
          }"
        >
          <div
            class="photo"
            :class="`photo${i + 1}`"
            :style="{
              backgroundImage: `url(${require(`@/assets/images/projets/${id}/${cover}`)})`,
            }"
          >
            <div class="photoLayer">
              <p class="titreProjet">{{ name }}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import projetsData from '../../assets/projets-data'

export default {
  name: 'Project',
  beforeRouteLeave(to, from, next) {
    const tlReaOut = gsap.timeline()
    tlReaOut.to('.photo', { opacity: 0, stagger: 0.1, duration: 0.5 })
    tlReaOut.call(next)
  },

  async asyncData({ $prismic, error }) {
    const document = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'projet')
    )
    console.log(document.results)
    if (document) {
      return { data: document.data }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },

  data() {
    return { projetsData, projectIndex: '', projectName: '' }
  },

  mounted() {
    window.scrollTo(0, 0)
    gsap.registerPlugin(ScrollTrigger)
    gsap.from('.photo', { y: 100, opacity: 0, duration: 0.7, stagger: 0.1 })
  },
}
</script>

<style>
.mosaicContainer {
  position: relative;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  width: 100vw;
}
.projetMosaic {
  margin-left: 120px;
  margin-right: 120px;
  margin-top: 140px;
  margin-bottom: 140px;
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1 1fr;
}

.projetMosaic a {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-decoration: none;
}

.photo {
  /* background-size: 110%; */
  background-size: 115%;
  background-repeat: no-repeat;
  background-position: center;
  width: 300px;
  height: 230px;
  margin: 12px;
  will-change: transform;
  transition: background-size 0.4s;
}
.photo:hover {
  background-size: 120%;
}

.photoLayer {
  background-color: rgba(47, 46, 46, 0.6);
  width: 100%;
  height: 100%;
  transition-duration: 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
}
.photoLayer:hover {
  opacity: 1;
}
.titreProjet {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  height: 100%;
  font-size: x-large;
  opacity: 0;
}

.titreProjet:hover {
  opacity: 1;
  transition-duration: 0.4s;
}
</style>
