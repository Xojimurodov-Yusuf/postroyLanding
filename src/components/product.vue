<template>
    <main>
        <section>
            <div class="container">
                <p class="empty-text">{{ empty }}</p>
                <div class="productsFavorite">
                    <div v-for="product in favoriteProducts" :key="product.id" class="product">
                        <div class="product-images">
                            <img class="product-image" :src="product.image" alt="product" />
                            <img class="icon-top" src="/images/icon_top.svg" alt="icon-top" />
                        </div>

                        <div class="product-items">
                            <p class="product-name">{{ product.name }}</p>
                            <div class="star-price">
                                <p class="price">{{ product.price }}</p>
                                <button class="star-btn" @click="delFavorites(product)">
                                    <svg class="star" width="20" height="20" viewBox="0 0 20 20"
                                        :fill="product.isFavorite ? '#FECA07' : 'none'"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M11.1043 2.17701L12.9317 5.82776C13.1108 6.18616 13.4565 6.43467 13.8573 6.49218L17.9453 7.08062C18.9554 7.22644 19.3573 8.45055 18.6263 9.15194L15.6702 11.9924C15.3797 12.2718 15.2474 12.6733 15.3162 13.0676L16.0138 17.0778C16.1856 18.0698 15.1298 18.8267 14.227 18.3574L10.5732 16.4627C10.215 16.2768 9.78602 16.2768 9.42679 16.4627L5.773 18.3574C4.87023 18.8267 3.81439 18.0698 3.98724 17.0778L4.68385 13.0676C4.75257 12.6733 4.62033 12.2718 4.32982 11.9924L1.37368 9.15194C0.642715 8.45055 1.04464 7.22644 2.05466 7.08062L6.14265 6.49218C6.54354 6.43467 6.89028 6.18616 7.06937 5.82776L8.89574 2.17701C9.34765 1.27433 10.6523 1.27433 11.1043 2.17701Z"
                                            :stroke="product.isFavorite ? 'none' : 'black'" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { ref } from 'vue'

const empty = ref("")
const favoriteProducts = ref(JSON.parse(localStorage.getItem("product") || "[]"))
if (favoriteProducts.value.length === 0) {
    empty.value = "У вас нет понравившихся товаров :("
}

function delFavorites(product) {
    favoriteProducts.value = favoriteProducts.value.filter(delProduct => delProduct.id !== product.id)
    localStorage.setItem("product", JSON.stringify(favoriteProducts.value))
    alert("Товар удалён из списка избранного")
}
</script>

<style>
html {
    font-size: 10px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.container {
    max-width: 100%;
    width: 78%;
    margin: 0 auto;
}

.empty-text {
    font-size: 3.2rem;
    text-align: center;
    font-weight: 500;
    margin-top: 2rem;
}

.productsFavorite {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    gap: 2rem;
    margin-top: 1.6rem;
}

.product {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 1.2rem;
    width: 26.4rem;
    padding: 0.8rem;
    border-radius: 0.8rem;
    box-shadow: 0px 3px 6px 0px #EDEDF2;
}

.product-items {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 1.3rem;
}

.product-images {
    position: relative;
}

.icon-top {
    position: absolute;
    top: 0;
    left: 0;
}

.product-name {
    font-size: 1.6rem;
    font-weight: 500;
    width: 23.2rem;
}

.star-price {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;
}

.star-btn {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
}

.price {
    font-size: 1.8rem;
    font-weight: 700;
}

.download-all-btn {
    width: 20rem;
    padding: 2rem;
    border-radius: 0.8rem;
    border: 2px solid #FECA07;
    font-size: 1.8rem;
    color: black;
    font-weight: 500;
    cursor: pointer;
    background: none;
    margin: 0 auto;
    transition: 450ms ease;
}

.download-all-btn:hover {
    background-color: #FECA07;
}

@media (max-width: 768px) {
    .product {
        width: 22rem;
    }

    .product-image {
        width: 100%;
    }

    .product-name {
        font-size: 1.4rem;
    }

    .price {
        font-size: 1.2rem;
    }
}

@media (max-width: 450px) {
    .product {
        width: 15.6rem;
        height: 21rem;
        margin-top: 2.5rem;
    }

    .product-image {
        width: 14.6rem;
        height: 11rem;
    }

    .product-name {
        font-size: 1.6rem;
        width: 15rem;
        font-weight: bold;
    }

    .icon-top {
        width: 4rem;
    }

    .products-section {
        margin-top: 16px;
    }

    .products {
        justify-content: center;
        gap: 0;
        margin-top: 0px;
    }

    .product-items {
        gap: 1.5rem;
    }

    .star-price {
        gap: 4.5rem;
    }

    .star {
        width: 1.5rem;
    }

    .price {
        font-size: 1.2rem;
    }

    .download-all-btn {
        width: 19.4rem;
        font-size: 1.7rem;
        padding: 1.7rem;
        margin-top: 3.3rem;
    }

    .empty-text {
        font-size: 1.6rem;
    }
}
</style>