<template>
    <dialog open>
        <slot></slot>
    </dialog>
</template>
<style scoped>
    dialog {
        position: fixed;
        top: 20%;
        left: 25%;
        width: 40%;
        border: 1px solid #ccc;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        margin: 10px;
    }

    
</style>