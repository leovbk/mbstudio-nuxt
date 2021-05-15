<template>
  <div class="footer">
    <div class="coord">
      <p>Margaux Bonfils</p>
      <br />
      <p>
        Architecte d'intérieur et scénographe pour particuliers et
        professionnels <br />
        à Reims, Charleville-Mézières et ses alentours
      </p>
      <br />
      <p>06 09 86 23 95</p>
      <p>contact.mbstudio@gmail.com</p>
      <br />
      <p>© 2020 Margaux Bonfils, Architecte d'intérieur et Scénographe</p>
      <p>
        <nuxt-link class="link_credits" :to="{ name: 'credits' }"
          >Mentions légales</nuxt-link
        >
        -
        <nuxt-link class="link_credits" :to="{ name: 'cgv' }">C.G.V</nuxt-link>
      </p>
    </div>
    <div class="linkreseaux">
      <a :href="urlFacebook" target="_blank"
        ><img src="@/assets/logo/logo facebook vector.svg" alt="Facebook"
      /></a>
      <a :href="urlHouzz" target="_blank"
        ><img src="@/assets/logo/logo houzz vector.svg" alt="Houzz"
      /></a>
      <a :href="urlInstagram" target="_blank"
        ><img src="@/assets/logo/logo instagram vector.svg" alt="Instagram"
      /></a>
      <a :href="urlPinterest" target="_blank"
        ><img src="@/assets/logo/logo pinterest vector.svg" alt="Pinterest"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      urlFacebook: 'https://www.facebook.com/mbstudioarchitectedinterieur/',
      urlHouzz:
        'https://www.houzz.fr/professionnels/architecte-d-interieur/mb-studio-pfvwfr-pf~347501581',
      urlInstagram: 'https://www.instagram.com/mb.studio_architecture/',
      urlPinterest: 'https://www.pinterest.fr/margauxbonfils/_created/',
    }
  },
}
</script>

<style>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #2f2e2e;
  bottom: 0;
  min-height: 350px;
  width: 100%;
}

.coord {
  color: white;
  max-width: 500px;
  height: fit-content;
}

.linkreseaux {
  display: flex;
  justify-content: space-between;
  width: 180px;
  height: fit-content;
}

.footer div {
  margin-top: 60px;
}

.linkreseaux img {
  width: 40px;
  height: 40px;
  transition: transform 0.3s;
}

.linkreseaux a :hover {
  transform: scale(1.1);
}

.link_credits {
  color: white;
}
</style>
