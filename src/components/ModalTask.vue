<template lang="">
    <div>
        <h2>{{ title }}</h2>
        <p>{{ msg }}</p>
        <button class="btn btn-primary" @click="isOpen = false">Close</button>
    </div>
</template>
<script>
export default {
    props: {
        title: String,
        msg: String,
    }
}
</script>
<style lang="">
    
</style>