import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import SplitType from 'split-type'

let alreadyRun = false

export const homeGsapAnimation = () => {
  gsap.registerPlugin(ScrollTrigger)

  if (!alreadyRun) {
    alreadyRun = true
    const splitPortrait = new SplitType('.portrait', { types: 'lines' })
    const portraitLines = splitPortrait.lines
    const tl = gsap.timeline({
      scrollTrigger: { trigger: '.portrait', start: 'top center' },
    })
    tl.from('.portrait', { opacity: '0' })
    tl.staggerFrom(
      portraitLines,
      1,
      {
        opacity: 0,
        yPercent: 100,
      },
      0.1
    )
    // Timeline intro
    const tlIntro = gsap.timeline()
    tlIntro.set('.ovale', { opacity: '0' })
    tlIntro.to('.ovale', {
      opacity: '1',
      duration: 0.5,
      delay: 0.7,
      ease: 'circ.in',
    })
    tlIntro.from('.ovale', {
      opacity: '1',
      duration: 0.4,
      delay: 0.1,
      ease: 'circ.out',
    })
    tlIntro.to('.introLayer', {
      y: '-100vh',
      duration: 1.2,
      ease: 'power4.in',
      delay: -0.3,
    })
    tlIntro.from(['.mb', '.studio'], {
      scale: '2',
      duration: 1,
      ease: 'back.out(1)',
      stagger: 0.2,
      filter: blur('60px'),
      color: 'transparent',
    })
    tlIntro.to(['.mb', '.studio'], { scale: '1' })
    tlIntro.from(['#logo', '.btn_nav'], {
      y: '-20vh',
      duration: 0.5,
      stagger: 0.1,
      delay: -1.5,
      ease: 'back.out(1)',
    })
  } else {
    gsap.to('.introLayer', {
      y: '-100vh',
      duration: 0,
    })
  }
  ScrollTrigger.matchMedia({
    '(min-width: 1350px)': () => {
      // MB mouvement
      gsap.fromTo(
        '.mb',
        { scale: '1' },
        {
          top: '120vh',
          left: '60%',
          scale: '0.8',
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '.bg1',
            // markers: true,
            scrub: true,
            start: 'top -100px',
          },
        }
      )
      // Studio mouvement
      gsap.fromTo(
        '.studio',
        { scale: '1' },
        {
          top: '120vh',
          left: '70%',
          scale: '0.8',
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '.bg1',
            // markers: true,
            scrub: true,
            start: 'top top',
          },
        }
      )
    },
    '(min-width: 1050px) and (max-width: 1349px)': () => {
      // MB mouvement
      gsap.fromTo(
        '.mb',
        { scale: '1' },
        {
          top: '118vh',
          left: '60%',
          scale: '0.6',
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '.bg1',
            // markers: true,
            scrub: true,
            start: 'top -100px',
          },
        }
      )
      // Studio mouvement
      gsap.fromTo(
        '.studio',
        { scale: '1' },
        {
          top: '118vh',
          left: '70%',
          scale: '0.6',
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '.bg1',
            // markers: true,
            scrub: true,
            start: 'top top',
          },
        }
      )
    },
  })
}
