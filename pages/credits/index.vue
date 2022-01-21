<template>
  <div id="credits_container">
    <h1 id="mentions_legales">Mentions légales</h1>
    <br />
    <br />
    <h2 id="editeur">Editeur</h2>
    <p>
      Ce site internet est édité par Léo VERBEKE. <br />
      <br />
      Pour le cabinet d'architecture - Mb studio <br />
      Margaux Bonfils<br />
      25 rue du Moulin <br />08000 Charleville-Mézières<br />
      <br />
      SIRET : 82756540900048<br />
      Code APE : 7111Z
    </p>
    <br />
    <h2 id="hebergement">Hébergement</h2>
    <p>GITHUB</p>
    <br />
    <h2 id="copyright">Droit d'auteur - Copyright</h2>
    <p>
      Ce site internet est édité par Léo VERBEKE. <br />
      <br />
      Pour le cabinet d'architecture - Mb studio <br />
      Margaux Bonfils<br />
      25 rue du Moulin <br />08000 Charleville-Mézières<br />
      <br />
      SIRET : 82756540900048<br />
      Code APE : 7111Z
    </p>
  </div>
</template>

<script>
export default {
  name: 'Credits',
  mounted() {
    window.scrollTo(0, 0)
  },
}
</script>

<style>
#credits_container {
  margin-top: 150px;
  margin-bottom: 100px;
  margin-left: 20vw;
  font-size: large;
}
</style>
