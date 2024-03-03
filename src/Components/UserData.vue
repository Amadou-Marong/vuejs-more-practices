<template>
    <div>
        <h2>User Data</h2>
        <div class="content">
            <label for="name">Name</label>
            <input type="text" v-model="setName" @input="setUserName">
        </div>
        <div class="content">
            <label for="age">Age</label>
            <input type="text" v-model.number="setAge" @input="setUserAge">
        </div>

    </div>
</template>
<script>
    export default {
        data(){
            return{
                setName: this.user.name,
                setAge: this.user.age
            }
        },
        props:{
            user:{
                type: Object,
                required: true
            }
        },
        methods:{
            setUserName(){
                // this.$emit('set-name', this.user.name, this.setName);
                this.$emit('set-name', this.setName);
            },
            setUserAge(){
                // this.$emit('set-age', this.user.age, this.setAge)
                this.$emit('set-age', this.setAge)
            }
        },
        emits:['set-name', 'set-age']
    }

</script>

<style scoped>
    .content{
        padding: 20px;
        text-align: center;
    }
    .content input{
        padding: 10px;
        min-width: 70%;
    }
    .content label{
        font-weight: bold;
        margin-right: 1rem;
        width: 3rem;
        display: inline-block;
    }
</style>