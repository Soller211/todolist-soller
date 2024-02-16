<template lang="">
    <div class="taskList">
        <div class="task">
            <input type="checkbox" id="task1" name="task1" value="task1">
            <label for="task1">Tarea 1</label>
            <div class="editicons">
                <i class="bi bi-trash3"></i>
            </div>
        </div>
        <div class="task">
            <input type="checkbox" id="task2" name="task2" value="task2">
            <label for="task2">Tarea 2</label>
            <div class="editicons">
                <i class="bi bi-trash3"></i>
            </div>
        </div>
        <div class="task">
            <input type="checkbox" id="task2" name="task2" value="task2">
            <label for="task2">Tarea 2</label>
            <div class="editicons">
                <i class="bi bi-trash3"></i>
            </div>
        </div>
        <div class="task">
            <input type="checkbox" id="task2" name="task2" value="task2">
            <label for="task2">Tarea 2</label>
            <div class="editicons">
                <i class="bi bi-trash3"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.taskList {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
}
.task {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
}
.task input {
    margin-right: 10px;
}
.task label {
    font-size: 20px;
}
.editicons {
    margin-left: 10px;
}

i {
    cursor: pointer;
}
</style>