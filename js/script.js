// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto :temporale_nuvola_e_pioggia:, formato da due proprietà:
// text, una stringa che indica il testo del todo
// done, un booleano (true/false) che indica se il todo è stato fatto oppure no





const { createApp } = Vue

  createApp({
    data() {
        return {

            listaMansioni: [
                {
                    text: "Fare la spesa",
                    done: false,
                },
                {
                    text: "Pagare le bollette",
                    done: true,
                },
                {
                    text: "Lavare i piatti",
                    done: false,
                },
                {
                    text: "Passare l'aspirapolvere",
                    done: true,
                },
                {
                    text: "Portare fuori la spazzatura",
                    done: false,
                },
            ],

        }
    }
  }).mount('#app');