<template>
    <div class="text">
        <h2>Active User</h2>
        <h2>Name: {{ user.name }}</h2>
        <h3>Age: {{ user.age }}</h3>
    </div>
</template>
<script>
    export default {
        props: {
           user:{
            type: Object,
            required: true
           }
        }
    }
</script>
<style scoped>
    .text{
        text-align: center;
    }
</style>