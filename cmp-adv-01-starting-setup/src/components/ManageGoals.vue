<template>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal">
    <button @click="setGoal">Set Goal</button>
</template>
<script>
    export default {
        methods: {
            setGoal() {
                const enteredValue = this.$refs.goal.value;
                if (enteredValue.trim() === '') {
                    alert('Input must not be empty')
                }
            }
        },
    }
</script>