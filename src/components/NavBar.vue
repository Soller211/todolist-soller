<template>
    <nav class="nav-body">
        <button class="btn btn-primary">Pending Tasks</button>
        <button class="btn btn-primary">Complete Tasks</button>
        <button class="btn btn-primary">Add Task</button>
    </nav>
    <div class="input-group">
        <button type="button" class="btn btn-primary" data-mdb-ripple-init>
            <i class="bi bi-search"></i>
        </button>
        <div class="form-outline" data-mdb-input-init>
            <input type="search" id="form1" class="form-control" placeholder="Buscar" />
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.nav-body {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
    flex-direction: row;
    margin: 0 10px;
    gap: 10px;
}

.nav-body span {
    margin: 0 10px;
    cursor: pointer;
    background-color: #51abcb;
    padding: 10px;
    border-radius: 10px;
}

</style>