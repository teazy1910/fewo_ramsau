<template>
    <div id="kontakt">
        <h1 class="font-Lato mt-24 text-center text-3xl">Kontakt</h1>
        <p class="font-Lato md:text-3xl text-2xl mt-12 text-center">
            Bestpreisgarantie bei Buchung per E-Mail oder Telefon!
        </p>
        <p class="font-Lato md:text-3xl text-2xl mt-12 text-center">
            Der Kurbeitrag wird extra berechnet und an die Kurverwaltung abgeführt.
        </p>
    </div>
    <div class="flex justify-center align-baseline">
        <div class="bg-[#3C4937] text-center font-Lato pt-36 text-white w-1/2 h-[550px] mt-36">
            <h1 class="md:text-3xl text-2xl pb-12">So kontaktieren Sie uns:</h1>
            <h3 class="md:text-4xl text-xl pb-4">Tel.: +49 (0) 8657 983666</h3>
            <h3 class="md:text-4xl text-xl pb-4">Mobil: +49 (0) 160 2821721</h3>
            <h3 class="md:text-4xl text-xl pb-4">fewo.am.kurpark@gmx.de</h3>
        </div>

        <section class="bg-[#D6DBD4] w-1/2" id="contact">
            <div class="py-8 lg:py-16 px-4 mx-auto">
                <h2 class="mb-4 text-4xl tracking-tight text-center text-gray-900">
                    Kontakformular
                </h2>
                <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
                    Hier haben Sie die Möglichkeit uns eine Nachricht zukommen zu lassen.
                    Wir freuen uns
                </p>
                <form action="#" class="space-y-8">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-grey-400">eMail Adresse</label>
                        <input type="email" id="email"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            placeholder="name@email.de" required />
                    </div>
                    <div>
                        <label for="subject"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Betreff</label>
                        <input type="text" id="subject"
                            class="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Betreff" required />
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Ihre
                            Nachricht an uns</label>
                        <textarea id="message" rows="6"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Ihre Nachricht an uns..."></textarea>
                    </div>
                    <button type="submit"
                        class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">
                        Nachricht absenden
                    </button>
                </form>
            </div>
        </section>
    </div>
</template>
<script></script>
