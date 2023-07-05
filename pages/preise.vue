<template>
<h1 class="font-Lato mb-24 text-center text-4xl">Preisliste pro Übernachtung <br/><span class="text-2xl">bei Belegung mit 2 Personen</span></h1>
<div class="grid md:grid-cols-2 justify-items-center bg-[#D6DBD4]">
<div>
 <table class="min-w-full border-collapse mr-24 mt-24"> 
    <thead class="block md:table-header-group">
      <tr class="border border-grey-500 md:border-none md:table-row absolute -top-full md:top-auto md:left-auto md:relative">
        <th class="border text-lg p-4 border-b-slate-700">Preise</th>
        <th class="border text-lg p-4 border-b-slate-700">Hauptsaison</th>
        <th class="border text-lg p-4 border-b-slate-700">Nebensaison</th>
        <th class="border text-lg p-4 border-b-slate-700">Kurbeitrag</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border text-lg border-b-slate-700 p-3">Erwachsene (ab 16 Jahre)</td>
        <td class="border text-lg text-center border-b-slate-700">76,-€</td>
        <td class="border text-lg text-center border-b-slate-700">74,-€</td>
        <td class="border text-lg text-center border-b-slate-700 p-3">3,10 € / p.P + Tag</td>
      </tr>
      <tr>
        <td class="border text-lg border-b-slate-700 p-3">Kind (7-16 Jahre)</td>
        <td class="border text-lg text-center border-b-slate-700">20,-€</td>
        <td class="border text-lg text-center border-b-slate-700">20,-€</td>
        <td class="border text-lg text-center border-b-slate-700 p-3">1,55 € / p.P + Tag</td>
      </tr>
      <tr>
        <td class="border text-lg border-b-slate-900 p-3">Kind (3-6 Jahre)</td>
        <td class="border text-lg text-center border-b-slate-700">15,-€</td>
        <td class="border text-lg text-center border-b-slate-700">15,-€</td>
        <td class="border text-lg text-center border-b-slate-700">frei</td>
      </tr>
      <tr>
        <td class="border text-lg border-b-slate-700 p-3">Kind bis 2 Jahre</td>
        <td class="border text-lg text-center border-b-slate-700">frei</td>
        <td class="border text-lg text-center border-b-slate-700">frei</td>
        <td class="border text-lg text-center border-b-slate-700">frei</td>
      </tr>
    </tbody>
  </table> 
  <p class="mt-8 text-center text-2xl font-Amiri">Mindestaufenthaltsdauer außerhalb der Saison: 5 Tage</p>
  <p class="text-2xl text-center font-Amiri">Mindestaufenthaltsdauer in der Saison: 7 bzw. 14 Tage</p>
</div>
  <div class="bg-[#50614b] justify-center text-white w-full h-[550px]">
    <h1 class="font-Lato text-5xl text-center mb-4 mt-36">Hauptsaison</h1>
    <p class="text-xl text-center">1. Januar bis 30. Mai</p>
    <p class="text-xl text-center mb-12">15. Oktober bis 30. Dezember</p>
    <h1 class="font-Lato text-5xl mb-4 text-center">Nebensaison</h1>
    <p class="text-xl text-center">1. Juni bis 14. Oktober</p>
    <p class="text-xl text-center">31. Dezember bis 1. Januar</p>
  </div>
<div>
</div>
  </div>

<Kontakt/>

</template>