<template>
    <div class="container">
        <active-user :user="user"></active-user>
        <user-data :user="user" @set-name="setUserName" @set-age="setUserAge"></user-data>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                user: {
                    name: 'Ahmad',
                    age: 20
                }
            }
        },
        methods: {
            setUserName(setName){
                this.user.name = setName
            },
            setUserAge(setAge){
                this.user.age = setAge
            }
        },
    }
</script>
<style>
* {
    box-sizing: border-box;
  }
  html {
    font-family: sans-serif;
  }
  body {
    margin: 0;
  }
  .container {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 2rem auto;
    max-width: 40rem;
    padding: 1rem;
    border-radius: 12px;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }
  
  li {
    border-radius: 12px;
    border: 1px solid #ccc;
    padding: 1rem;
    width: 15rem;
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  h2 {
    margin: 0.75rem 0;
    text-align: center;
  }
  
  button {
    font: inherit;
    border: 1px solid #c70053;
    background-color: #c70053;
    color: white;
    padding: 0.75rem 2rem;
    border-radius: 30px;
    cursor: pointer;
  }
  
  button:hover,
  button:active {
    background-color: #e24d8b;
    border-color: #e24d8b;
  }
</style>