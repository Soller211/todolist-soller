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
    <div class="pagChanges">
        <button class="btn btn-primary" @click="previousPage" :disabled="page === 1">Anterior</button>
        <span>{{ page }}</span>
        <button class="btn btn-primary" @click="nextPage" :disabled="tasks.length < pageSize">Siguiente</button>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            tasks: [],
            page: 1,
            pageSize: 5
        };
    },
    mounted() {
        this.getTasks();
    },
    methods: {
        eliminarTarea(index) {
            this.tasks.splice(index, 1);
            axios.delete(`http://localhost:3000/api/tasks/delete/${this.tasks[index].id}`)
                .then(response => {
                    console.log('Tarea eliminada:', response.data);
                })
                .catch(error => {
                    console.error('Error al eliminar tarea:', error);
                });
        },
        editarTarea(index) {
            console.log('Editar tarea:', this.tasks[index]);
        },
        completarTarea(index) {
            console.log('Completar tarea:', this.tasks[index]);
        },
        getTasks() {
            axios.get(`http://localhost:3000/api/tasks/pending/?page=${this.page}&pageSize=${this.pageSize}`)
                .then(response => {
                    this.tasks = response.data;
                })
                .catch(error => {
                    console.error('Error al obtener tareas:', error);
                });
        },
        previousPage() {
            if (this.page > 1) {
                this.page--;
                this.fetchTasks();
            }
        },
        nextPage() {
            this.page++;
            this.fetchTasks();
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

h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

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

.pagChanges {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 10px;
}
</style>