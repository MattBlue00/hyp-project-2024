<script setup lang="ts">
useSeoMeta({
  title: 'SheRise | Home',
  description: 'This is the home page of SheRise with aggregated information about the company\'s activities.',
});
</script>

<template>
  <main>
    <!-- SheRise logo -->
    <section>
      <div class="logo-container">
        <img class="logo-img" src="assets/img/logo.jpg" alt="SheRise logo"/>
        <div class="logo-text-container">
          <div class="logo-text"> SheRise </div>
        </div>
      </div>
      <div class="logo-caption"> Always by your side </div>
    </section>

    <!-- home body -->
    <section>
      <div>
        <div class="home-container">
          <img class="home-img" src="assets/img/home-img-1.jpg" alt="">
          <p class="home-text">
            In a quiet village nestled between rolling hills and a sparkling river, life moved at a gentle pace. The villagers were known for their warmth and hospitality, always ready to lend a hand or share a meal. Each season brought its own charm: spring adorned the fields with wildflowers, summer filled the air with the scent of ripe fruit, autumn painted the trees in hues of gold and crimson, and winter blanketed the landscape in a serene layer of snow.
          </p>
        </div>
        <div class="home-container">
          <p class="home-text">
            Amelia, a young woman with a passion for storytelling, often wandered through the village, capturing its essence in her notebook. She believed that every corner of the village held a story waiting to be told. One day, while exploring the outskirts, she stumbled upon an old, abandoned cottage. Curiosity piqued, she ventured inside, finding remnants of a life once lived—dusty photographs, yellowed letters, and forgotten trinkets.
          </p>
          <img class="home-img" src="assets/img/home-img-2.jpg" alt="">
        </div>
      </div>
    </section>

    <!-- witnesses -->
    <section>
      <div class="witnesses-container">
        <p class="witnesses-text"> Witnesses</p>
        <!-- PROTOTYPE -->
        <div class="wit-container-prototype">
          <div class="wit-img-prototype"></div>
          <div class="wit-content-prototype"></div>
        </div>
        <div class="wit-container-prototype">
          <div class="wit-img-prototype"></div>
          <div class="wit-content-prototype"></div>
        </div>
        <div class="wit-container-prototype">
          <div class="wit-img-prototype"></div>
          <div class="wit-content-prototype"></div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.logo-container{
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.logo-img{
  display: flex;
  height: 10rem;
  width: 7rem;
}

.logo-text-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
}

.logo-text{
  display: flex;
  font-size: 5rem;
  color: #DA0E5F;
}

.logo-caption{
  text-align: center;
  color: #DA0E5F;
  font-size: 1.25rem;
  margin-bottom: 4rem;
}

.home-container{
  display: flex;
  justify-content: center;
  margin-left: 8rem;
  margin-right: 8rem;
  margin-bottom: 4rem;
  background-color: #FFE4EB;
}

.home-img{
  display: flex;
  height: 20rem;
  width: 20rem;
}

.home-text{
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #400E2A;
  font-size: 1.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

.witnesses-container{
  margin-bottom: 4rem;
}
.witnesses-text{
  text-align: center;
  font-size: 1.5rem;
  color: #400E2A;
}

.wit-container-prototype{
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.wit-img-prototype{
  display: flex;
  background-color: #DA0E5F;
  width: 6rem;
  height: 6rem;
}

.wit-content-prototype{
  display: flex;
  background-color: #FFE4EB;
  width: 20rem;
  height: 6rem;
}


</style>