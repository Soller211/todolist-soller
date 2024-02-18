<template>
    <nav class="nav-body">
        <div class="nav-group">
            <div class="input-search">
                <button type="button" class="btn btn-primary" data-mdb-ripple-init>
                    <i class="bi bi-search"></i>
                </button>
                <div class="form-outline" data-mdb-input-init>
                    <input type="search" id="form1" class="form-control" placeholder="Buscar" />
                </div>
            </div>
            <div class="ordenamiento">
                <select class="form-select">
                    <option value="fechaCreacion">Fecha de Creación</option>
                    <option value="fechaEdicion">Fecha de Edición</option>
                    <option value="titulo">Título</option>
                </select>
            </div>
            <div class="button-group">
                <div class="tasks-buttons">
                    <button class="btn btn-primary">Pending Tasks</button>
                    <button class="btn btn-primary">Complete Tasks</button>
                </div>
                <button class="btn btn-primary">Add Task</button>
            </div>
        </div>
    </nav>
</template>
<script>
export default {

}
</script>
<style scoped>
.nav-body {
    margin-top: 10px;
    display: flex;
    align-items: center;
    color: white;
    font-size: 20px;
    flex-direction: row;
}

.nav-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin: 5px;
    width: 100%;
}

.button-group {
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 10px;
}

.button-group button {
    background-color: #4cad4c;
    border: none;
}

@media (max-width: 768px) {
    .nav-body {
        flex-direction: column;
    }

    .button-group {
        flex-direction: column;
    }
}

.tasks-buttons {
    display: flex;
    justify-content: left;
    align-items: left;
    gap: 10px;
}

.tasks-buttons button {
    background-color: #5589c4;
    border: none;
}


.input-search {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
}

.input-search input {
    margin-left: 10px;
    border-top-right-radius: 0%;
    border-bottom-right-radius: 0%;
}

.input-search button {
    background-color: #5589c4;
    border: none;
    border-bottom-left-radius: 0%;
    border-top-left-radius: 0%;
}
</style>