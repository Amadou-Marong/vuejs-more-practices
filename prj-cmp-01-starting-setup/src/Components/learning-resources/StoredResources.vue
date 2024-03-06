<template>
    <ul>
        <learning-resource 
            v-for="res in resourses" 
            :key="res.id" 
            :title="res.title" 
            :description="res.description"
            :link="res.link">
        </learning-resource>
    </ul>
</template>
<script>
import LearningResource from './LearningResource.vue';
    export default {
        components: {
            LearningResource
        },

        props: ['resourses']
    }
</script>
<style scoped>
    
</style>