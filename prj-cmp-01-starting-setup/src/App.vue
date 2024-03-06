<template>
    <ul>
        <stored-resourses :resourses="storedResourses"></stored-resourses>
    </ul>
</template>
<script>
import StoredResourses from './Components/learning-resources/StoredResources.vue';
export default {
    components: {
        StoredResourses
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
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
