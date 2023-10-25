const { createApp} = Vue;

createApp({
    data() {
        return {
            taskName: "",
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
        },
        isCompliteTask(done, index){
            console.log("iniziale", done)
            if(done === true){
                this.todos[index].done = false;
            } else {
                this.todos[index].done = true;
            }
            console.log("finale", done)
            return done;
        }
    }
}).mount('#app')