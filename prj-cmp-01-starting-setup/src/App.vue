<template>
    <the-header title="Learning Resources"></the-header>
    <ul>
        <stored-resourses :resourses="storedResourses"></stored-resourses>
    </ul>
</template>
<script>
// import StoredResourses from './Components/learning-resources/StoredResources.vue';
import TheHeader from './Components/Layout/TheHeader.vue';

export default {
    components: {
        StoredResourses,
        TheHeader,
    },
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
