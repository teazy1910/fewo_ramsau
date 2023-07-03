  <template>
    <div class="bg-[#e7d9cd] p-3">
      <div id="header">
        <h1 class="header">Preise</h1>
      </div>
      <div class="container">
        <div class="card card-1">
          <div class="card-image">
            <img src="/Haus-Drohne.jpg" />
          </div>
          <div class="card-text">
            <p class="card-type">Hauptsaison</p>
            <h2 class="card-title">Sommer 2023</h2>
            <p class="card-body">
              Juni bis Mitte Oktober <br />& über Silvester
            </p>
            <p>ab 76,-€ pro Unterkunft</p>
            <button class="card-btn">Jetzt buchen</button>     
          </div>
        </div>
        </div>
      </div>
  </template>
  
  <style scoped>
  #header {
    /* background: url("/bg-timber.jpeg");
    background-size: cover;
    background-position: right;
    background-attachment: fixed; */
    margin: 5em;
   }

  #header > h1 {
    font-family: 'Architects Daughter';
    text-align: center;
    font-size: 4rem;
    color: #1d1c20;
  }
  #header > p {
    text-align: center;
    font-size: 1rem;
    font-style: italic;
    color: #1d1c20;
  }

  .container {  
    width: 100vw;
    display: flex;
    justify-content: flex-end;
    /* padding: 90px 90px; */
    margin: 0 auto;
  }
  .card {
    display: flex;
    flex-direction: column;
    width: 500px;
    flex-wrap: wrap;
    margin-bottom: 6em;
  }
  
  .card-1 {
    margin-right: 3em;
  }
  
  .card > div {
    box-shadow: 0 15px 20px 0 #3333;
    margin-bottom: 5em;
  }

  .card-image {
    width: 400px;
    height: 300px;
  }
  .card-image > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .card-text {
    margin: -150px auto;
    font-family: "Amiri";
    /* margin-bottom: -50px; */
    /* height: 300px; */
    width: 350px;
    background-color: #fff;
    color: rgb(71,14,14);
    padding: 3.6em;
  }
  .card-type {
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
    font-family: "Great-Vibes";
    width: 6em;
    height: 6em;
    background-color: rgb(71, 14, 14);
    color: #fff;
    margin-left: auto;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-btn{
    margin-top: 3em; 
    color: white;
    width: 120px;
    height: 40px;
    background-color: #6a0002;
  }

</style>


