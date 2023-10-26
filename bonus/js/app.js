const { createApp} = Vue;

createApp({
    data() {
        return {
            taskName: "",
        //    isCorrectInput: true,
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ]
        }
    },
    methods: {
        deleteTask(indexTask){
            this.todos.splice(indexTask, 1)
        },
        addTask(name){
           this.todos.unshift({
            text: name,
            done: false
           }) 
           this.taskName = "";
        },
        // isCompliteTask(done, index){  
        //     if(done === true){
        //         this.todos[index].done = false;
        //     } else {
        //         this.todos[index].done = true;
        //     }
        // }
        isCompliteTask(object){
            console.log("iniziale", object)
            object.done = !object.done;
            // if(object.done === true){
            //     object.done = false;
            // } else {
            //     object.done = true;
            // }
            console.log("finale", object)
        },
        // controllInput(){
        //     const text = this.taskName.trim()
        //     if( text.lenght < 5){
        //         console.log(this.taskName.lenght)
        //         isCorrectInput = true
        //     } else {
        //         isCorrectInput = false
        //     }
        // }
    },
}).mount('#app')