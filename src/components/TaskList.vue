<template>
    <ul class="lista-tareas">
        <li class="tarea" v-for="(task, index) in tasks" :key="index">
            <div class="info-tarea">
                <h2>{{ task.title }}</h2>
                <p>{{ task.description }}</p>
                <div class="meta-tarea">
                    <span class="fecha-creacion">Created: {{ task.dateCreated }}</span>
                    <span class="fecha-edicion">Edited: {{ task.dateEdited }}</span>
                </div>
            </div>
            <div class="acciones-tarea">
                <i class="bi bi-trash3" @click="eliminarTarea(index)" style="color: #c94139;"></i>
                <i class="bi bi-pencil-fill" @click="editarTarea(index)" style="color: #5589c4;"></i>
                <i class="bi bi-check-lg" @click="completarTarea(index)" style="color: #2d8f2f;"></i>
            </div>
        </li>
    </ul>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            tasks: []
        };
    },
    mounted(){
        this.getTasks();
    },
    methods: {
        eliminarTarea(index) {
            this.tareas.splice(index, 1);
        },
        editarTarea(index) {
            console.log('Editar tarea:', this.tareas[index]);
        },
        completarTarea(index) {
            console.log('Completar tarea:', this.tareas[index]);
        },
        getTasks(){
            axios.get('http://localhost:3000/api/tasksActive')
            .then(response => {
                console.log(response.data);
                this.tasks = response.data;
            })
            .catch(error => {
                console.error(error);
            });
        }
    },
};
</script>
<style scoped>
body {
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 20px;
}

/* Encabezado */

h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

/* Lista de tareas */

.lista-tareas {
    margin-top: 15px;
    list-style: none;
    padding: 0;
}

.tarea {
    display: flex;
    justify-content: space-between;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;
}

.info-tarea {
    flex: 1;
}

.tarea h2 {
    font-size: 18px;
    margin-top: 0;
}

.tarea p {
    margin-bottom: 10px;
}

.meta-tarea {
    font-size: 0.8rem;
    color: #777;
}

.meta-tarea span {
    margin-right: 10px;
}

.acciones-tarea {
    display: flex;
    align-items: center;
}

.acciones-tarea i {
    margin: 0 10px;
    font-size: 24px;
    margin-left: 10px;
    cursor: pointer;
}
</style>