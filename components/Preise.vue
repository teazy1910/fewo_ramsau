<template>
 
 <div class="flex flex-col justify-items-center my-12 bg-[#D6DBD4]">
  <h1 class="font-Lato mt-12 sm:mb-24 text-center text-lg mb-8">Preisliste pro Übernachtung <br /><span class="text-sm">bei Belegung mit 2 Personen</span>
  </h1>
  <div class="mx-7 overflow-auto flex flex-col">
      <table class="">
        <thead class="text-xs md:text-lg">
          <tr>
            <th class="border p-4 border-b-slate-700">Preise</th>
            <th class="border p-4 border-b-slate-700">Hauptsaison</th>
            <th class="border p-4 border-b-slate-700">Nebensaison</th>
            <th class="border p-4 border-b-slate-700">Kurbeitrag</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border p-2 text-sm border-b-slate-700">Erwachsene (ab 16 Jahre)
            </td>
            <td class="border text-sm text-center border-b-slate-700">76,-€</td>
            <td class="border text-sm text-center border-b-slate-700">74,-€</td>
            <td class="border text-sm text-center border-b-slate-700">
              3,10 € / p.P + Tag
            </td>
          </tr>
          <tr>
            <td class="border p-2 text-sm border-b-slate-700">
              Kind (7-16 Jahre)
            </td>
            <td class="border text-sm text-center border-b-slate-700">20,-€</td>
            <td class="border text-sm text-center border-b-slate-700">20,-€</td>
            <td class="border text-sm text-center border-b-slate-700">
              1,55 € / p.P + Tag
            </td>
          </tr>
          <tr>
            <td class="border p-2 text-sm border-b-slate-900">
              Kind (3-6 Jahre)
            </td>
            <td class="border text-sm text-center border-b-slate-700">15,-€</td>
            <td class="border text-sm text-center border-b-slate-700">15,-€</td>
            <td class="border text-sm text-center border-b-slate-700">frei</td>
          </tr>
          <tr>
            <td class="border p-2 text-sm border-b-slate-700">
              Kind bis 2 Jahre
            </td>
            <td class="border text-sm text-center border-b-slate-700">frei</td>
            <td class="border text-sm text-center border-b-slate-700">frei</td>
            <td class="border text-sm text-center border-b-slate-700">frei</td>
          </tr>
        </tbody>
      </table> 
    </div>
    <h3 class="text-center md-text-xl text-lg mt-8">Mindestaufenthaltsdauer:</h3>
    <p class="text-center md:text-lg text-sm">
        außerhalb der Saison: 5 Tage
      </p>
      <p class="text-center md:text-lg text-sm md:mb-24 mb-8">
        in der Saison: 7 bzw. 14 Tage
      </p>
      <div class="bg-[#50614b] flex flex-col justify-center align-middle md:pt-24 text-white w-screen">
        <span class="material-symbols-outlined pt-5 self-center">calendar_month</span>
        <h1 class="font-Lato md:text-5xl text-xl font-bold self-center mb-4">Hauptsaison</h1>
        <p class="md:text-xl self-center">1. Januar bis 30. Mai</p>
        <p class="md:text-xl self-center">15. Oktober bis 30. Dezember</p>
        <h1 class="md:text-5xl text-xl font-bold self-center mt-10 mb-4" >Nebensaison</h1>
        <p class="md:text-xl self-center">1. Juni bis 14. Oktober</p>
        <p class="md:text-xl self-center pb-10 md:pb-24">31. Dezember bis 1. Januar</p>
      </div>
    </div>
</template>

<style scoped>
.material-symbols-outlined {
font-size: 80px;
opacity: 40%;
}
</style>
