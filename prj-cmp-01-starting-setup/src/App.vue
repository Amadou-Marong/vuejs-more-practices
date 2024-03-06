<template>
    <ul>
        <learning-resource 
            v-for="res in storedResourses" 
            :key="res.id" :title="res.title" 
            :description="res.description"
            :link="res.link">
        </learning-resource>
    </ul>
</template>
<script>
import LearningResource from './Components/learning-resources/LearningResource.vue';
export default {
    components: {
        LearningResource
    },
    data() {
        return {
            storedResourses: [
                {
                    id: 'official-guide',
                    title: 'The Official Guide',
                    description: 'The Official Vuejs Documentation',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'The Official Google Homepage',
                    link: 'https://google.com'
                }
            ]
        }
    }
}
</script>