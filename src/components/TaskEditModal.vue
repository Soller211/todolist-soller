<template>
    <div class="modal" tabindex="-1" role="dialog" style="display: block;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Editar Tarea</h5>
                    <button type="button" class="close" @click="closeModal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="updateTask">
                        <input type="text" v-model="editedTask.title" placeholder="Title" required>
                        <textarea v-model="editedTask.description" placeholder="Description" required></textarea>
                        <button type="submit" class="btn btn-primary">Actualizar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            editedTask: {
                title: '',
                description: ''
            },
            taskId: '' 
        };
    },
    methods: {
        closeModal() {
            this.taskId = '';
            this.editedTask.title = '';
            this.editedTask.description = '';
        },
        updateTask() {
            axios.put(`/tasks/update/${this.taskId}`, this.editedTask)
                .then(response => {
                    console.log('Tarea actualizada correctamente:', response.data);
                    this.closeModal();
                })
                .catch(error => {
                    console.error('Error al actualizar la tarea:', error);
                });
        }
    }
};
</script>
<style scoped>

</style>