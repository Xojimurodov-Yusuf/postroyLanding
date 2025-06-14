<template>
    <h1>Ваши избранные товары ⭐</h1>
    <Product />
</template>

<script setup>
import Product from "./product.vue"
</script>

<style>
html {
    font-size: 10px;
}

h1 {
    text-align: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 3.8rem;
    margin-top: 1.5rem;
}

@media (max-width: 450px) {
    h1 {
        font-size: 1.8rem;
    }
}
</style>
