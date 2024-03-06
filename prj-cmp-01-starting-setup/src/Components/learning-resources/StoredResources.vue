<template>
    <li v-for="res in resourses" :key="res.id">
        <div>
            <header>
                <h3>{{ res.title }}</h3>
                <button>Delete</button>
            </header>
        </div>
        <p>{{ res.description }}</p>
        <nav>
            <a :href="res.link">View Resource</a>
        </nav>
    </li>
</template>
<script>
    export default {
        props: ['resourses']
    }
</script>