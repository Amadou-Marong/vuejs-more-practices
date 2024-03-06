<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')">Add Resource</base-button>
    </base-card>
    <component :is="selectedTab"></component>
</template>
<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
export default {
    components: {
        StoredResources,
        AddResource
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            storedResources: [
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
        };
    },
    provide() {
        return {
            resources: this.storedResources
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab
        }
    }
}
</script>