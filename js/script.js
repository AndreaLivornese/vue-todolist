// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto :temporale_nuvola_e_pioggia:, formato da due proprietà:
// text, una stringa che indica il testo del todo
// done, un booleano (true/false) che indica se il todo è stato fatto oppure no





const { createApp } = Vue

  createApp({
    data() {
        return {

            newTask:'',

            // lista di oggetti delle mansioni da fare
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
    },
    methods: {

        removeToDo(index){

            // rimozione dell'oggetto in posizione index 
            this.listaMansioni.splice(index,1);

        },



        addTask(){
            // controllo se la casella di testo non è vuota
            if(this.newTask != ""){

                // inizializzo un nuovo oggetto
                const newItem = {

                    // do il valore della casella di testo all'attributo text
                    text: this.newTask,
    
                    done: false,
    
                };
    
                // inserisco il nuovo oggetto nell'array
                this.listaMansioni.push(newItem);
    
                // resetto la casella di testo
                this.newTask='';

            }

            console.log(this.listaMansioni)
        },

        doneOrNot(statusTask, index){

            // nego il valore "done" dell'oggetto selezionato  da true a false o viceversa
            this.listaMansioni[index].done = !statusTask;
        }

    }
  }).mount('#app');