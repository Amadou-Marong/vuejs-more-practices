<template>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal">
    <button @click="setGoal">Set Goal</button>
    <error-alert v-if="invalidInput">
        <p>Input must not be empty</p>
        <button @click="invalidInput = false">OK</button>
    </error-alert>
</template>
<script>
    import ErrorAlert from './ErrorAlert.vue';
    export default {
        components: {
            ErrorAlert
        },
        data() {
            return {
                invalidInput: false
            }
        },
        methods: {
            setGoal() {
                const enteredValue = this.$refs.goal.value;
                if (enteredValue.trim() === '') {
                    this.invalidInput = true;
                }  
            },
        },
    }
</script>