<template>
  <div>
    <h1 class="font-Playfair text-center text-xl md:text-4xl">
      Preisliste pro Übernachtung
    </h1>
    <h2 class="text-sm text-center md:text-lg">
      bei Belegung mit 2 Personen
    </h2>
    <h3 class="text-center text-2xl py-5">Saison 2023 / 2024</h3>
  </div>
  <div class="flex justify-center font-Roboto mb-24">
    <div class="flex md:flex-row flex-col overflow-auto">
      <table class="mr-6">
        <thead class="text-xs border-r-slate-700 md:text-xl">
          <tr>
            <th class="border p-4  border-l-slate-700 border-t-slate-700 border-r-slate-700 border-b-slate-700">Preise</th>
            <th class="border p-4  border-t-slate-700  border-r-slate-700 border-b-slate-700">Hauptsaison</th>
            <th class="border p-4  border-t-slate-700 border-r-slate-700 border-b-slate-700">Nebensaison</th>
            <th class="border p-4  border-t-slate-700 border-r-slate-700 border-b-slate-700">Kurbeitrag</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-1 border-l-slate-700 border text-lg  border-r-slate-700 border-b-slate-700">
              Erwachsene (ab 16 Jahre)
            </td>
            <td class="border text-lg text-center  border-r-slate-700 border-b-slate-700">76,-€</td>
            <td class="border text-lg text-center  border-r-slate-700 border-b-slate-700">74,-€</td>
            <td class="border text-lg text-center  border-r-slate-700 border-b-slate-700">
              3,10 € / p.P + Tag
            </td>
          </tr>
          <tr>
            <td class="border pl-1 border-l-slate-700 text-lg border-r-slate-700 border-b-slate-700">
              Kind (7-16 Jahre)
            </td>
            <td class="border text-lg text-center border-r-slate-700 border-b-slate-700">20,-€</td>
            <td class="border text-lg text-center border-r-slate-700 border-b-slate-700">20,-€</td>
            <td class="px-2 border text-lg text-center border-r-slate-700 border-b-slate-700">
              1,55 € / p.P + Tag
            </td>
          </tr>
          <tr>
            <td class="border pl-1 border-l-slate-700 text-lg border-r-slate-700 border-b-slate-900">
              Kind (3-6 Jahre)
            </td>
            <td class="border text-lg text-center  border-r-slate-700 border-b-slate-700">15,-€</td>
            <td class="border text-lg text-center  border-r-slate-700 border-b-slate-700">15,-€</td>
            <td class="border text-lg text-center  border-r-slate-700 border-b-slate-700">frei</td>
          </tr>
          <tr>
            <td class="border pl-1 border-l-slate-700 text-lg  border-r-slate-700 border-b-slate-700">
              Kind bis 2 Jahre
            </td>
            <td class="border text-lg text-center  border-r-slate-700 border-b-slate-700">frei</td>
            <td class="border text-lg text-center  border-r-slate-700 border-b-slate-700">frei</td>
            <td class="border text-lg text-center  border-r-slate-700 border-b-slate-700">frei</td>
          </tr>
        </tbody>
      </table>
      <div class="flex flex-col md:p-7 bg-[#4e5f4b] font-Roboto m-auto text-white p-24">
          <h1 class="md:text-2xl text-xl self-center">Nebensaison</h1>
          <p class="md:text-lg self-center font-light">1. Januar bis 30. Mai</p>
          <p class="md:text-ls self-center font-light md:pb-3">15. Oktober bis 30. Dezember
          </p>
          <h1 class="md:text-2xl text-xl self-center">Hauptsaison</h1>
          <p class="md:text-lg self-center font-light">1. Juni bis 14. Oktober</p>
          <p class="md:text-lg self-center font-light">31. Dezember bis 1. Januar</p>
       </div>
  </div>
</div>
</template>


