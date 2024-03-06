<template>
    <ul>
        <li v-for="resource in storedResourses" :key="resource.id">
            <h2>{{ resource.title }}</h2>
            <p>{{ resource.description }}</p>
            <a :href="resource.link">Link</a>
        </li>
    </ul>
</template>
<script>
export default {
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