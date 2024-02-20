<template >
    <div class="root">
        <button class="btn btn-primary" @click="isOpen">Open</button>
        <teleport to="body">
            <div class="modal" v-if="isOpen">
                <div>
                    <ModalTask 
                    title="Title" 
                    msg="Message"
                />
                </div>
            </div>
        </teleport>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import ModalTask from './ModalTask.vue';

const isOpen = ref(false);
</script>
<style >
.root {
    position: relative;
}

.modal {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal>div {
    background-color: white;
    padding: 50px;
    border-radius: 10px;
}
</style>