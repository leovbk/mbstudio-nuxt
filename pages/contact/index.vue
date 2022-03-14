<template>
  <div class="contact">
    <img src="./../../assets/images/IMAGE4.jpg" alt="" class="img-form" />
    <div id="form_container">
      <!-- <div class="spacer-form"></div> -->

      <form
        id="contact-form"
        target="_blank"
        action="https://formsubmit.co/contact.mbstudio@gmail.com"
        method="POST"
      >
        <input
          type="hidden"
          name="_next"
          value="http://leovbk.github.io/mbstudio-nuxt/contact/success"
        />
        <input
          type="hidden"
          name="_subject"
          value="Salut Gomar, c'est le site qui te parles, tu as un nouveau message"
        />
        <input type="hidden" name="_ captcha" value="false" />
        <input type="hidden" name="_template" value="box" />
        <div class="grid-wrapper">
          <div class="grid_element">
            <label class="etiquette" for="firstname">Prénom</label>
            <input
              id="firstname"
              type="text"
              name="firstname"
              class="input_form"
            />
            <p class="comments"></p>
          </div>
          <div class="grid_element">
            <label class="etiquette" for="name">Nom</label>
            <input id="name" type="text" name="name" class="input_form" />
            <p class="comments"></p>
          </div>
          <div class="grid_element">
            <label class="etiquette" for="email">Email</label>
            <input
              id="email"
              type="text"
              name="email"
              class="input_form"
              required
            />
            <p class="comments"></p>
          </div>
          <div class="grid_element">
            <label class="etiquette" for="phone">Téléphone</label>
            <input id="phone" type="tel" name="phone" class="input_form" />
            <p class="comments"></p>
          </div>
        </div>

        <div class="msgSection">
          <label class="etiquette" for="message">Message</label>
          <textarea
            id="message"
            name="message"
            class="input_form"
            required
          ></textarea>
          <p class="comments"></p>
        </div>
        <div class="div_btn">
          <button type="submit" class="button1">Envoyer</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'Contact',
  beforeRouteLeave(to, from, next) {
    const tlContactOut = gsap.timeline()
    tlContactOut.to('.img-form', {
      x: '-100%',
      opacity: 0,
      duration: 0.8,
      delay: 0.3,
      // ease: 'power2.out'
    })
    tlContactOut.to(['.etiquette', '.div_btn'], {
      opacity: 0,
      duration: 0.5,
      stagger: 0.15,
      delay: -1,
    })
    tlContactOut.to(['.grid_element', '.msgSection'], {
      opacity: 0,
      duration: 0.4,
      stagger: 0.15,
      y: -50,
      delay: -1,
    })

    tlContactOut.call(next)
  },
  head() {
    return {
      title: 'Contact | mb. studio',
    }
  },
  mounted() {
    window.scrollTo(0, 0)
    this.returnChilds()
  },
  methods: {
    returnChilds() {
      const tlContact = gsap.timeline()
      tlContact.from('.img-form', {
        x: '-100%',
        opacity: 0,
        duration: 1,
        delay: 0.3,
        // ease: 'power2.out'
      })
      tlContact.from(['.grid_element', '.msgSection'], {
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        y: 50,
        delay: -1,
      })
      tlContact.from(['.etiquette', '.div_btn'], {
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        delay: -0.6,
      })
    },
  },
}
</script>
<style>
#form_container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.contact {
  overflow: overlay;
  margin-top: 80px;
}

#contact-form {
  width: 100%;
  margin: 15%;
}

.img-form {
  width: 30%;
  height: auto;
  margin: 0;
  float: left;
}

.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 10px;
  grid-auto-rows: auto;
  margin-bottom: 10px;
}

.grid_element {
  display: flex;
  flex-direction: column;
}

.grid_element input {
  height: 30px;
}

textarea {
  width: 100%;
  height: 80px;
  resize: vertical;
  border-radius: 0;
  border: 1px solid #252525;
  box-shadow: none;
  margin-bottom: 20px;
}

#contact-form input {
  border-radius: 0;
  border: 1px solid #252525;
}

.div_btn {
  text-align: center;
}

.button1 {
  width: 260px;
  height: 34px;
  margin-top: 20px;
  background-color: #fff;
  border: 0;
  position: relative;
  border-left: 1px solid #212121;
  border-right: 1px solid #212121;
  font-family: 'EB Garamond', serif;
  font-size: 16px;
  font-weight: bold;
  color: black;
  padding: 0;
  transition: all 250ms ease-in-out;
  cursor: pointer;
}

.button1::before {
  display: block;
  content: '';
  position: absolute;
  top: 0;
  width: 100%;
  border-bottom: solid 1px #212121;
  transform: scaleX(0);
  transition: transform 500ms ease-in-out;
}
.button1:hover::before {
  transform: scaleX(1);
}

.button1::after {
  display: block;
  content: '';
  position: absolute;
  bottom: 0;
  width: 100%;
  border-bottom: solid 1px #212121;
  transform: scaleX(0);
  transition: transform 500ms ease-in-out;
}
.button1:hover::after {
  transform: scaleX(1);
}

.button1:hover,
.button1:focus {
  font-weight: normal;
}

@media (max-width: 1000px) {
  .img-form {
    display: none;
  }
}
@media (max-width: 600px) {
  .grid-wrapper {
    display: flex;
    flex-direction: column;
  }
  .grid_element {
    margin-bottom: 10px;
  }
}
</style>
