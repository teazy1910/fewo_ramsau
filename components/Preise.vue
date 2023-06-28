<!-- 
  <template>
    <div class="mx-auto w-full">
      <h1 class="font-Amiri md:text-3xl text-center">Unsere Preise</h1>
      <div class="img-wrapper flex flex-row w-full justify-evenly">
        <div class="card-1 items-start bg-gray-300 w-[420px] h-[420px]">
          <h1 class="text-center my-6 md:text-2xl">Hauptsaison</h1>
          <img
          src="/Haus-Drohne.jpg"
          alt="Hausansicht"
          class="h-48 mx-auto rounded-xl shadow-black shadow-md"
          />
          
          <p>Der Preis versteht sich pro Unterkunft</p>
          <a
          href="#"
          class="bg-emerald-900 text-center p-4 text-white flex-row justify-center"
          >Verfügbarkeit prüfen</a
          >
        </div>
        <div class="card-2 my-6 items-start bg-gray-300 w-[420px] h-[420px]">
          <h1 class="text-center md:text-2xl">Nebensaison</h1>
          <img
          src="/Balkon_Aussicht.jpg"
          alt="Hausansicht"
          class="h-48 mx-auto rounded-xl shadow-black shadow-md"
          />
          
          <p>Der Preis versteht sich pro Unterkunft</p>
          <a
          href="#"
          class="bg-emerald-900 text-center flex-column p-4 text-white"
          >Verfügbarkeit prüfen</a
          >
        </div>
      </div>
    </div>
  </template>
  <script></script>
  
-->

<template>
  <div id="header">
    <h1>La Saveur</h1>
    <p>The Traditional Fench Taste</p>
  </div>
  <div class="container">
    <div class="card">
      <div class="card-image">
        <img
          src="https://images.unsplash.com/photo-1604135307399-86c6ce0aba8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
        />
      </div>
      <div class="card-text">
        <p class="card-meal-type">Breakfast/Eggs</p>
        <h2 class="card-title">Délicieux Bénédicte</h2>
        <p class="card-body">
          Eggs Benedict with hollandaise sauce, crispy bacon and an assortment
          of garden herbs.
        </p>
      </div>
      <div class="card-price">$56</div>
    </div>
    <div class="card">
      <div class="card-image">
        <img
          src="https://images.unsplash.com/photo-1551782450-17144efb9c50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1769&q=80"
        />
      </div>
      <div class="card-text">
        <p class="card-meal-type">Lunch/Meat</p>
        <h2 class="card-title">Du bœuf Burger</h2>
        <p class="card-body">
          A beef burger with wholewheat patty, juicy lettuce and a side of
          gluten free fries
        </p>
      </div>
      <div class="card-price">$39</div>
    </div>
  </div>
</template>

<style scoped>
#header {
  background: url(https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1776&q=80);
  background-size: cover;
  background-position: right;
  background-attachment: fixed;
  margin: 20px;
}
#header > h1 {
  text-align: center;
  font-size: 3rem;
}
#header > p {
  text-align: center;
  font-size: 1.5rem;
  font-style: italic;
}
.container {
  width: 100vw;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 40px 20px;
}
.card {
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-bottom: 60px;
}
.card > div {
  box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.5);
}
.card-image {
  width: 400px;
  height: 250px;
}
.card-image > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
}
.card-text {
  margin: -30px auto;
  margin-bottom: -50px;
  height: 300px;
  width: 300px;
  background-color: #1d1c20;
  color: #fff;
  padding: 20px;
}
.card-meal-type {
  font-style: italic;
}
.card-title {
  font-size: 2.2rem;
  margin-bottom: 20px;
  margin-top: 5px;
}
.card-body {
  font-size: 1.25rem;
}
.card-price {
  width: 100px;
  height: 100px;
  background-color: #970c0a;
  color: #fff;
  margin-left: auto;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
