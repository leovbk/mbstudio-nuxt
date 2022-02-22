<template>
  <div class="moisaicContainer">
    <div class="projetMosaic">
      <div v-for="({ cover, name, id, sousTitre }, i) in projetsData" :key="i">
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
              backgroundImage: `url(${cover})`,
            }"
          >
            <div class="photoLayer">
              <p class="titreProjet">
                {{ name }}
              </p>
              <p class="sousTitre">{{ sousTitre }}</p>
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
    const prismicProject = []
    for (let i = 0; i < document.results.length; i++) {
      prismicProject.push(document.results[i].data)
    }
    return { prismicProject }
  },

  data() {
    return { projetsData: [], projectIndex: '', projectName: '' }
  },
  head() {
    return {
      title: 'Réalisations | mb. studio',
    }
  },
  created() {
    // map projet data

    for (const project in this.prismicProject) {
      this.projetsData[project] = {
        name: '',
        sousTitre: '',
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
      this.projetsData[project].sousTitre = this.prismicProject[
        project
      ].soustitre
      this.projetsData[project].id = this.prismicProject[project].url
      this.projetsData[project].title = this.prismicProject[project].title
      this.projetsData[project].phase = this.prismicProject[project].phase
      this.projetsData[project].lieu = this.prismicProject[project].lieu
      this.projetsData[project].domaine = this.prismicProject[project].domaine
      this.projetsData[project].credit = this.prismicProject[
        project
      ].credit_photo
      this.projetsData[project].cover = this.prismicProject[project].cover.url
      // this.projetsData[project].bandeau = this.prismicProject[
      //   project
      // ].bandeau.url
      // this.projetsData[project].photos = this.prismicProject[
      //   project
      // ].body[0].items
    }
  },

  mounted() {
    // console.log('projet data : ' + this.projetsData)
    window.scrollTo(0, 0)
    gsap.registerPlugin(ScrollTrigger)
    gsap.from('.photo', { y: 100, opacity: 0, duration: 0.7, stagger: 0.1 })

    // const photoEvent = document.querySelectorAll('.photo')
    // const titreProjetEvent = document.querySelectorAll('.titreProjet')
    // for (let i = 0; i < photoEvent.lenght; i++) {
    //   photoEvent[i].addEventListener(
    //     'mouseover',
    //     titreProjetEvent[i].classList.toggle('opacityClass')
    //   )
    // }
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1250px;
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
  text-align: center;
  display: flex;
  flex-direction: column;
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
  font-size: x-large;
  line-height: 1.1;
  transition-duration: 0.4s;
}

.sousTitre {
  font-size: 12px;
  color: white;
  z-index: 0;
  pointer-events: none;
}

@media (max-width: 887px) {
  .projetMosaic {
    margin: 140px 40px;
  }
}

@media (max-width: 728px) {
  .photo {
    width: 70vw;
    height: 53vw;
  }
}

@media (min-width: 1250px) {
  .projetMosaic {
    margin: 140px auto;
  }
}
</style>
