<template>
  <div id="project">
    <div class="masqueImg"></div>
    <img
      id="photo_couverture"
      :src="`${require(`@/assets/images/projets/bandeau/${project.bandeau}`)}`"
      alt="photo de couverture"
      :style="{
        objectPosition: `0 ${project.bdPosition}%`,
      }"
    />

    <!-- <PrismicRichText id="presentation_projet" :field="data.projet_content" /> -->
    <div id="presentation_projet">
      <h1 class="titre_projet">
        {{ project.title }}
      </h1>

      <div class="elementDescription">
        <h2 class="titreDescription">Phase</h2>
        <p class="textDescription">
          {{ project.phase }}
        </p>
      </div>

      <div class="elementDescription">
        <h2 class="titreDescription">Lieu</h2>
        <p class="textDescription">
          {{ project.lieu }}
        </p>
      </div>

      <div class="elementDescription">
        <h2 class="titreDescription">Domaine d'intervention</h2>
        <p class="textDescription">
          {{ project.domaine }}
        </p>
      </div>
    </div>
    <div class="gridContainer">
      <p id="credit">© Photos {{ project.credit }}</p>
      <div class="gridProjet" :style="[getGrid]">
        <nuxt-link
          v-for="(photop, i) in photosGrid"
          :key="i"
          :to="{
            name: 'realisation-project-carousel',
            query: { photo: i },
          }"
          class="photoGrid"
          :class="`photoGrid${i + 1}`"
          :style="{
            backgroundImage: `url(${require(`@/assets/images/projets/${projectId}/${photop}`)})`,
          }"
        >
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import projetsData from '@/assets/projets-data'
import SplitType from 'split-type'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default {
  beforeRouteLeave(to, from, next) {
    const tlProjetOut = gsap.timeline()
    tlProjetOut.to('.masqueImg', {
      y: 0,
      // opacity: 0,
      duration: 1,
    })
    tlProjetOut.to(['.titre_projet', '.titreDescription'], {
      x: '-10vw',
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      delay: -0.3,
    })
    tlProjetOut.to(['.textDescription', '#credit'], {
      opacity: 0,
      y: '100%',
      duration: 0.2,
      stagger: 0.2,
      delay: -1,
    })
    tlProjetOut.to('.photoGrid', {
      opacity: 0,
      duration: 0.5,
      delay: -1.5,
    })
    tlProjetOut.call(next)
  },

  data() {
    return {
      projetsData,
      projectIndex: '',
    }
  },
  computed: {
    projectId() {
      return this.$route.params.project
    },
    project() {
      return projetsData.find((project) => project.id === this.projectId)
    },
    photosGrid() {
      return this.project.photos
    },
    nbrImages() {
      return this.photosGrid.length
    },
    nbrRows() {
      return Math.ceil(this.nbrImages / 2)
    },
    getGrid() {
      if (this.nbrImages === 2) {
        return {
          gridTemplateAreas: `
          'a a b'
        `,
        }
      } else if (this.nbrImages === 3) {
        return {
          gridTemplateAreas: `
          'a b b'
          'a c c'
        `,
        }
      } else if (this.nbrImages === 4) {
        return {
          gridTemplateAreas: `
          'a a b'
          'c d d'
        `,
        }
      } else if (this.nbrImages === 5) {
        return {
          gridTemplateAreas: `
          'a b b'
          'a c c'
          'd e e'
        `,
        }
      } else if (this.nbrImages === 6) {
        return {
          gridTemplateAreas: `
          'a a b'
          'c d e'
          'c f f'
        `,
        }
      } else if (this.nbrImages === 7) {
        return {
          gridTemplateAreas: `
          'a b b'
          'a c c'
          'd d e'
          'f g g'
        `,
        }
      } else if (this.nbrImages === 8) {
        return {
          gridTemplateAreas: `
          'a a b'
          'c d e'
          'c f f'
          'g g h'
        `,
        }
      } else if (this.nbrImages === 9) {
        return {
          gridTemplateAreas: `
          'a b b'
          'a c c'
          'd d e'
          'f g h'
          'i i h'
        `,
        }
      } else if (this.nbrImages === 10) {
        return {
          gridTemplateAreas: `
          'a a b'
          'c d e'
          'c f f'
          'g g h'
          'i j h'
        `,
        }
      } else if (this.nbrImages === 11) {
        return {
          gridTemplateAreas: `
          'a b b'
          'a c c'
          'd d e'
          'f g h'
          'i i h'
          'j k k'
        `,
        }
      } else if (this.nbrImages === 12) {
        return {
          gridTemplateAreas: `
          'a a b'
          'c d e'
          'c f f'
          'g g h'
          'i j h'
          'k k l'
        `,
        }
      } else if (this.nbrImages === 13) {
        return {
          gridTemplateAreas: `
          'a b b'
          'a c c'
          'd d e'
          'f g h'
          'i i h'
          'j k k'
          'j l m'
        `,
        }
      } else if (this.nbrImages === 14) {
        return {
          gridTemplateAreas: `
          'a a b'
          'c d e'
          'c f f'
          'g g h'
          'i j h'
          'k k l'
          'm n n'
        `,
        }
      } else if (this.nbrImages === 15) {
        return {
          gridTemplateAreas: `
          'a b b'
          'a c c'
          'd d e'
          'f g h'
          'i i h'
          'j k k'
          'j l m'
          'n n o'
        `,
        }
      } else if (this.nbrImages === 16) {
        return {
          gridTemplateAreas: `
          'a a b'
          'c d e'
          'c f f'
          'g g h'
          'i j h'
          'k k l'
          'm n n'
          'm o p'
        `,
        }
      } else if (this.nbrImages === 17) {
        return {
          gridTemplateAreas: `
          'a b b'
          'a c c'
          'd d e'
          'f g h'
          'i i h'
          'j k k'
          'j l m'
          'n n o'
          'p q q'
        `,
        }
      } else if (this.nbrImages === 18) {
        return {
          gridTemplateAreas: `
          'a a b'
          'c d e'
          'c f f'
          'g g h'
          'i j h'
          'k k l'
          'm n n'
          'm o p'
          'q q r'
        `,
        }
      } else if (this.nbrImages === 19) {
        return {
          gridTemplateAreas: `
          'a b b'
          'a c c'
          'd d e'
          'f g h'
          'i i h'
          'j k k'
          'j l m'
          'n n o'
          'p q q'
          'p r s'
        `,
        }
      } else if (this.nbrImages === 20) {
        return {
          gridTemplateAreas: `
          'a a b'
          'c d e'
          'c f f'
          'g g h'
          'i j h'
          'k k l'
          'm n n'
          'm o p'
          'q q r'
          's t t'
        `,
        }
      } else {
        return {}
      }
    },
  },
  created() {
    // récupération de l'index du projet
    // for (let i = 0; i < this.projetsData.length; i++) {
    //   if (this.projetsData[i].id === this.$route.params.project) {
    //     this.projectIndex = i
    //   }
    // }
    // récupérer le name
    // this.projectId = this.projetsData[this.projectIndex].id
  },

  mounted() {
    window.scrollTo(0, 0)
    gsap.registerPlugin(ScrollTrigger)

    const splitTitle = new SplitType('.titre_projet', { types: 'chars' })
    splitTitle.chars[0].style.fontSize = '2.8em'
    splitTitle.chars[0].style.fontWeight = 'lighter'

    // timeline intro

    const tlProjetIn = gsap.timeline()

    tlProjetIn.to('.masqueImg', {
      y: '100%',
      // opacity: 0,
      duration: 1.2,
    })
    // tlProjetIn.from('.char', {
    //   opacity: 0,
    //   stagger: 0.02,
    //   duration: 1.7
    // })
    tlProjetIn.from(['.titre_projet', '.titreDescription'], {
      x: '-10vw',
      opacity: 0,
      stagger: 0.2,
      duration: 0.7,
      delay: -0.5,
    })
    tlProjetIn.from(['.textDescription', '#credit'], {
      opacity: 0,
      y: '-100%',
      duration: 0.3,
      stagger: 0.2,
      delay: -0.5,
    })
    tlProjetIn.from('.photoGrid', { opacity: 0, stagger: 0.1, duration: 1 })
  },

  // timeline outro
}
</script>

<style>
#project {
  overflow-x: hidden;
}

/* couverture */

.masqueImg {
  position: absolute;
  top: 80px;
  width: 100vw;
  height: 350px;
  z-index: 0;
  background-color: white;
}

#photo_couverture {
  margin-top: 80px;
  width: 100vw;
  height: 350px;
  object-fit: cover;
  z-index: -1;

  /* object-position: 0 70%; */
}

/* présentation */

#presentation_projet {
  margin: 40px 200px;
  z-index: 3;
}

#presentation_projet h1 {
  font-size: 2.5em;
  font-weight: 400;
  margin-left: -0.3em;
  z-index: 3;
}

.elementDescription {
  margin: -1.5em 0 -0.2em;
  z-index: 3;
}

.titreDescription {
  margin: 2em 0 0.4em;
  font-weight: 600;
  z-index: 3;
}

/* credit */

#credit {
  margin: 10px 0;
}

/* mosaic */
.gridContainer {
  display: flex;
  flex-direction: column;
  margin: 0 200px 100px;
}

.gridProjet {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
}
.photoGrid {
  background-size: cover;
  background-position: center;
  min-width: 200px;
  min-height: 350px;
  transition: all 0.1s ease-in-out;
}

/* .photoGrid:hover {
  transform: scale(1.02);
} */

.photoGrid1 {
  grid-area: a;
}

.photoGrid2 {
  grid-area: b;
}

.photoGrid3 {
  grid-area: c;
}

.photoGrid4 {
  grid-area: d;
}

.photoGrid5 {
  grid-area: e;
}

.photoGrid6 {
  grid-area: f;
}

.photoGrid7 {
  grid-area: g;
}

.photoGrid8 {
  grid-area: h;
}

.photoGrid9 {
  grid-area: i;
}

.photoGrid10 {
  grid-area: j;
}

.photoGrid11 {
  grid-area: k;
}

.photoGrid12 {
  grid-area: l;
}

.photoGrid13 {
  grid-area: m;
}

.photoGrid14 {
  grid-area: n;
}

.photoGrid15 {
  grid-area: o;
}

.photoGrid16 {
  grid-area: p;
}

.photoGrid17 {
  grid-area: q;
}

.photoGrid18 {
  grid-area: r;
}

.photoGrid19 {
  grid-area: s;
}

.photoGrid20 {
  grid-area: t;
}
</style>
