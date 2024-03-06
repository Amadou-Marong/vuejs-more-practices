<template>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal">
    <button @click="setGoal">Set Goal</button>
    <teleport to='body'>
        <error-alert v-if="invalidInput">
            <p>Input must not be empty</p>
            <button @click="invalidInput = false">Okay</button>
        </error-alert>
        <success-alert v-if="validInput">
            <p>Goal set successfully</p>
            <button @click="validInput = false">Okay</button>
        </success-alert>
    </teleport>
    
</template>
<script>
    import ErrorAlert from './ErrorAlert.vue';
    import SuccessAlert from './SuccessAlert.vue';
    
    export default {
        components: {
            ErrorAlert,
            SuccessAlert
        },
        data() {
            return {
                invalidInput: false,
                validInput: false
            }
        },
        methods: {
            setGoal() {
                const enteredValue = this.$refs.goal.value;
                if (enteredValue.trim() === '') {
                    this.invalidInput = true;
                } else {
                    this.validInput = true;
                }
            },
        },
    }
</script>