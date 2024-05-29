const {createApp}= Vue;
createApp({
    data(){
        return{
            numIndirizzi:10,
            emails:[],
        }
    },
    methods:{
        getMail(){
            console.log("fin qui tutto ok")
            for(let i=0;i<this.numIndirizzi;i++){
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((risultato)=>{
                    this.emails.push(risultato.data.response)
                })
            }
        }
    },
    mounted(){
        this.getMail();
    }
    
}).mount('#app')