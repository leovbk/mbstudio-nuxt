<template>
  <div class="success">
    <img src="./../../../assets/images/IMAGE4.jpg" alt="" class="img-form" />
    <div id="success_container">
      <p id="successMessage">Votre message a bien été envoyé</p>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import SplitType from 'split-type'

export default {
  name: 'Success',
  beforeRouteLeave(to, from, next) {
    const splitMessage = new SplitType('#successMessage', { types: 'chars' })
    const messageChars = splitMessage.chars
    const tlSuccessOut = gsap.timeline()
    tlSuccessOut.staggerTo(
      messageChars,
      1,
      {
        opacity: 0,
        yPercent: 100,
      },
      0.03
    )
    tlSuccessOut.to('.img-form', {
      x: '-100%',
      opacity: 0,
      duration: 0.8,
      delay: -1,
      // ease: 'power2.out'
    })

    tlSuccessOut.call(next)
  },
  mounted() {
    window.scrollTo(0, 0)
    const splitMessage = new SplitType('#successMessage', { types: 'chars' })
    const messageChars = splitMessage.chars
    const tlSuccess = gsap.timeline()
    tlSuccess.staggerFrom(
      messageChars,
      1,
      {
        opacity: 0,
        yPercent: -100,
      },
      0.03
    )
  },
}
</script>
<style>
#successMessage {
  font-size: x-large;
  font-weight: 100;
  margin: auto;
}
#success_container {
  display: flex;
  align-items: center;
  width: 100%;
}
.success {
  overflow: overlay;
  margin-top: 80px;
  display: flex;
}

.img-form {
  width: 30%;
  height: auto;
  margin: 0;
  float: left;
}

@media (max-width: 1000px) {
  .img-form {
    display: none;
  }
  #success_container {
    height: 80vh;
  }
}
</style>
