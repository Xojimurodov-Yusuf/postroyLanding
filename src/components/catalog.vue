<template>
    <main>
        <section>
            <div class="container">
                <div class="catalog-input-section">
                    <div class="catalog">
                        <img src="/images/Chart.svg" alt="chart">
                        <p class="catalog-text">Каталог</p>
                    </div>

                    <select class="select-location">
                        <option value="tashkent">Ташкент</option>
                        <option value="buxoro">Бухара</option>
                    </select>
                    <div class="search-div">
                        <input class="input-search" type="text" placeholder="Что вы ищите">
                        <svg class="search-icon" width="22" height="22" viewBox="0 0 22 22" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10.7665" cy="10.7666" r="8.98856" stroke="#130F26" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.0183 17.4851L20.5423 21" stroke="#130F26" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="catalog-items-section">
                    <div class="items-catalog">
                        <div class="strelka-item">
                            <p class="items-text">Инструменты для ремонта</p>
                            <img src="/images/strelka.svg" alt="strelka">
                        </div>
                        <div class="strelka-item">
                            <p class="items-text">Доски</p>
                            <img src="/images/strelka.svg" alt="strelka">
                        </div>
                        <p class="items-text">Доски искуственные</p>

                        <div class="res-item">
                            <img src="/images/arrow.svg" alt="arrow">
                            <RouterLink to="/" class="res-item-text">Категория</RouterLink>
                        </div>
                    </div>

                    <div class="format">
                        <svg class="format-svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M3 6.5C3 3.87479 3.02811 3 6.5 3C9.97189 3 10 3.87479 10 6.5C10 9.12521 10.0111 10 6.5 10C2.98893 10 3 9.12521 3 6.5Z"
                                stroke="#AFAFAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M14.001 6.5C14.001 3.87479 14.0291 3 17.501 3C20.9729 3 21.001 3.87479 21.001 6.5C21.001 9.12521 21.012 10 17.501 10C13.9899 10 14.001 9.12521 14.001 6.5Z"
                                stroke="#AFAFAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M3 17.5C3 14.8748 3.02811 14 6.5 14C9.97189 14 10 14.8748 10 17.5C10 20.1252 10.0111 21 6.5 21C2.98893 21 3 20.1252 3 17.5Z"
                                stroke="#AFAFAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M14.001 17.5C14.001 14.8748 14.0291 14 17.501 14C20.9729 14 21.001 14.8748 21.001 17.5C21.001 20.1252 21.012 21 17.501 21C13.9899 21 14.001 20.1252 14.001 17.5Z"
                                stroke="#AFAFAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <svg class="format-svg-none" width="18" height="20" viewBox="0 0 18 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1 4.5C1 1.87479 1.06425 1 9 1C16.9357 1 17 1.87479 17 4.5C17 7.12521 17.0253 8 9 8C0.974691 8 1 7.12521 1 4.5Z"
                                stroke="#AFAFAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1 15.5C1 12.8748 1.06425 12 9 12C16.9358 12 17 12.8748 17 15.5C17 18.1252 17.0253 19 9 19C0.974691 19 1 18.1252 1 15.5Z"
                                stroke="#AFAFAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <svg class="format-svg-res" width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M2.56517 1C1.70108 1 1 1.71286 1 2.5904V3.52644C1 4.17647 1.24719 4.80158 1.68936 5.27177L6.5351 10.4243L6.53723 10.4211C7.47271 11.3788 7.99905 12.6734 7.99905 14.0233V18.5952C7.99905 18.9007 8.31869 19.0957 8.58399 18.9516L11.3436 17.4479C11.7602 17.2204 12.0201 16.7784 12.0201 16.2984V14.0114C12.0201 12.6691 12.539 11.3799 13.466 10.4243L18.3117 5.27177C18.7528 4.80158 19 4.17647 19 3.52644V2.5904C19 1.71286 18.3 1 17.4359 1H2.56517Z"
                                stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>


                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="catalog-products">
                    <div class="products-set">
                        <div class="products-set-div">
                            <p class="set-item">Регион</p>
                            <div class="chart-input">
                                <select class="set-select">
                                    <option value="setRegion">Выберите регион</option>
                                    <option value="tashkent">Ташкент</option>
                                    <option value="buxara">Бухара</option>
                                    <option value="andijon">Андижан</option>
                                </select>
                                <img class="chart-select" src="/images/Chart.svg" alt="chart">
                            </div>
                        </div>

                        <div class="products-set-div">
                            <p class="set-item">Категория</p>
                            <div class="chart-input">
                                <select class="set-select">
                                    <option value="setRegion">Выберите категорию</option>
                                    <option value="tashkent">Ташкент</option>
                                    <option value="buxara">Бухара</option>
                                    <option value="andijon">Андижан</option>
                                </select>
                                <img class="chart-select" src="/images/Chart.svg" alt="chart">
                            </div>
                        </div>

                        <div class="products-set-div">
                            <p class="set-item">Тип</p>
                            <div class="chart-input">
                                <select class="set-select">
                                    <option value="setRegion">Выберите тип</option>
                                    <option value="tashkent">Ташкент</option>
                                    <option value="buxara">Бухара</option>
                                    <option value="andijon">Андижан</option>
                                </select>
                                <img class="chart-select" src="/images/Chart.svg" alt="chart">
                            </div>
                        </div>

                        <div class="products-set-div">
                            <p class="set-item">Способ оплаты</p>
                            <div class="chart-input">
                                <select class="set-select">
                                    <option value="setRegion">Выберите способ оплаты</option>
                                    <option value="tashkent">Ташкент</option>
                                    <option value="buxara">Бухара</option>
                                    <option value="andijon">Андижан</option>
                                </select>
                                <img class="chart-select" src="/images/Chart.svg" alt="chart">
                            </div>
                        </div>

                        <div class="range-input">
                            <p class="set-item">Цена</p>
                            <div class="price-values">
                                <div>
                                    <p class="inputPrice">200.000</p>
                                </div>
                                <div>
                                    <p class="inputPrice">1.500.000</p>
                                </div>
                            </div>
                            <div class="slider-bar">
                                <div class="slider-fill"></div>
                                <div class="slider-thumb left"></div>
                                <div class="slider-thumb right"></div>
                            </div>
                        </div>

                        <button class="accept-btn">Применить</button>
                    </div>

                    <div class="products-catalog">
                        <div v-for="product in products" :key="product.id" class="product">
                            <div class="product-images">
                                <img class="product-image" :src="product.image" alt="product" />
                                <img class="icon-top" src="/images/icon_top.svg" alt="icon-top" />
                            </div>

                            <div class="product-items">
                                <p class="product-name">{{ product.name }}</p>
                                <div class="star-price">
                                    <p class="price">{{ product.price }}</p>
                                    <button class="star-btn" @click="favorites(product)">
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

                <p class="products-cards-name">Схожие товары</p>
                <Products />
            </div>
        </section>
    </main>

    <Footer />
</template>

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

.catalog-input-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3.2rem;
}

.catalog {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.8rem;
    width: 16.6rem;
    padding: 2rem;
    border-radius: 0.8rem;
    box-shadow: 0px 1px 9px 0px #301CA81A;
    cursor: pointer;
}

.catalog-text {
    font-size: 1.8rem;
    font-weight: 500;
}

.select-location {
    width: 26.4rem;
    padding: 2rem;
    font-size: 1.8rem;
    font-weight: 500;
    border-radius: 0.8rem;
    box-shadow: 0px 1px 9px 0px #301CA81A;
    border: none;
    outline: none;
    cursor: pointer;
}

.search-div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.input-search {
    width: 65.6rem;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0px 1px 9px 0px #301CA81A;
    font-size: 1.8rem;
    color: black;
    outline: none;
    border: none;
    font-weight: 500;
}

.input-search::placeholder {
    font-size: 1.8rem;
    color: #AFAFAF;
    font-weight: 500;
}

.search-icon {
    position: absolute;
    right: 4%;
}

.catalog-items-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3.2rem;
}

.items-catalog {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.1rem;
}

.strelka-item {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
}

.res-item {
    display: none;
}

.items-text {
    font-size: 1.8rem;
    font-weight: 500;
}

.format {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.8rem;
}

.format-svg:hover {
    cursor: pointer;

    path {
        stroke: #FECA07;
    }
}

.format-svg-none:hover {
    cursor: pointer;

    path {
        stroke: #FECA07;
    }
}

.format-svg-res {
    display: none;
}

.catalog-products {
    margin-top: 3.2rem;
    display: flex;
    justify-content: start;
    align-items: start;
    gap: 3rem;
}

.products-set {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    gap: 1.6rem;
    width: 26.4rem;
    height: 94.5rem;
    border-radius: 0.8rem;
    box-shadow: 0px 1px 9px 0px #301CA81A;
    padding: 2.8rem 0rem 0rem 0rem;
}

.inputPrice {
    font-size: 1.6rem;
}

.products-set-div {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 0.7rem;
}

.set-item {
    font-size: 1.6rem;
    font-weight: 500;
    margin-left: 1.3rem;
}

.chart-input {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.chart-select {
    position: absolute;
    right: 4%;
    width: 1.6rem;
    height: 1.6rem;
}

.set-select {
    appearance: none;
    width: 23.4rem;
    height: 6.1rem;
    padding: 1.6rem;
    outline: none;
    border-radius: 0.8rem;
    border: 2px solid #F5F5F5;
    font-size: 1.6rem;
    color: #AFAFAF;
    cursor: pointer;
}


.price-wrapper {
    width: 320px;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
}

.price-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 12px;
}

.price-values {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;
    font-weight: 500;
    color: #ffcc00;
    margin-bottom: 2rem;
}

.slider-bar {
    position: relative;
    height: 0.2rem;
    background-color: #eee;
    border-radius: 0.3rem;
}

.slider-fill {
    position: absolute;
    height: 0.2rem;
    background-color: #ffcc00;
    border-radius: 0.3rem;
    left: 10%;
    right: 20%;
    top: 0;
}

.slider-thumb {
    position: absolute;
    width: 1.3rem;
    height: 1.3rem;
    background-color: #ffcc00;
    border-radius: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 4px 8px 0px #E9B90566;
}

.slider-thumb.left {
    left: 10%;
}

.slider-thumb.right {
    left: 80%;
}

.accept-btn {
    width: 20rem;
    padding: 2rem;
    border: 1px solid #1F2022;
    background: none;
    border-radius: 0.8rem;
    font-size: 1.8rem;
    font-weight: 500;
    transition: 450ms ease;
    cursor: pointer;
    margin-top: 5rem;
}

.accept-btn:hover {
    background-color: #1F2022;
    color: white;
}

.products-catalog {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
    width: 88rem;
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

.products-cards-name {
    font-size: 3.2rem;
    font-weight: 500;
    margin-top: 8.8rem;
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
    .container {
        max-width: 100%;
        width: 85%;
        margin: 0 auto;
    }

    .product {
        width: 14.6rem;
        height: 20rem;
        margin-top: 1.9rem;
    }

    .product-image {
        width: 13.4rem;
        height: 10rem;
    }

    .product-name {
        font-size: 1.2rem;
        width: 14rem;
        font-weight: bold;
    }

    .icon-top {
        width: 4rem;
    }

    .products {
        justify-content: space-between;
        gap: 0;
        margin-top: 0px;
    }

    .product-items {
        gap: 1.5rem;
    }

    .star-price {
        gap: 3.5rem;
    }

    .star {
        width: 1.5rem;
    }

    .price {
        font-size: 1.2rem;
    }

    .search-div {
        display: none;
    }

    .format-svg-none {
        display: none;
    }

    .format-svg-res {
        display: block;
    }

    .format-svg-res:hover {
        cursor: pointer;


        path {
            stroke: #FECA07;
        }
    }

    .res-item {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.7rem;
    }

    .res-item-text {
        font-size: 1.6rem;
        font-weight: 500;
        color: black;
    }

    .catalog-input-section {
        display: flex;
        justify-content: center;
        gap: 2rem;
    }

    .catalog {
        width: 15.6rem;
    }

    .select-location {
        width: 15.6rem;
    }

    .strelka-item {
        display: none;
    }

    .items-text {
        display: none;
    }

    .products-catalog {
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
    }

    .products-set {
        display: none;
    }
}

@media (max-width:400px) {
    .container {
        max-width: 100%;
        width: 95%;
        margin: 0 auto;
    }

    .product {
        width: 13.6rem;
    }

    .product-image {
        width: 12.6rem;
        height: 9.5rem;
    }

    .star-price {
        gap: 2.5rem;
    }
}
</style>

<script setup>
import Products from './products.vue';
import { ref } from 'vue'
import Footer from './footer.vue'
const products = ref([
    {
        id: 1,
        image: "./images/product 1.svg",
        name: "Плитка Tiger Кафель мозаика (8,2x8,2) 25x25",
        price: "1.000.000 cум"
    },

    {
        id: 2,
        image: "./images/products 2.svg",
        name: "Плитка Tiger Кафель мозаика (8,2x8,2) 25x25",
        price: "1.000.000 cум"
    },

    {
        id: 3,
        image: "./images/product 3.svg",
        name: "Плитка Tiger Кафель мозаика (8,2x8,2) 25x25",
        price: "1.000.000 cум"
    },

    {
        id: 4,
        image: "./images/product 4.svg",
        name: "Плитка Tiger Кафель мозаика (8,2x8,2) 25x25",
        price: "1.000.000 cум"
    },

    {
        id: 5,
        image: "./images/product 5.svg",
        name: "Плитка Tiger Кафель мозаика (8,2x8,2) 25x25",
        price: "1.000.000 cум"
    },

    {
        id: 6,
        image: "./images/products 6.svg",
        name: "Плитка Tiger Кафель мозаика (8,2x8,2) 25x25",
        price: "1.000.000 cум"
    },

    {
        id: 7,
        image: "./images/product 7.svg",
        name: "Плитка Tiger Кафель мозаика (8,2x8,2) 25x25",
        price: "1.000.000 cум"
    },

    {
        id: 8,
        image: "./images/product 8.svg",
        name: "Плитка Tiger Кафель мозаика (8,2x8,2) 25x25",
        price: "1.000.000 cум"
    },

    {
        id: 9,
        image: "./images/product 9.svg",
        name: "Плитка Tiger Кафель мозаика (8,2x8,2) 25x25",
        price: "1.000.000 cум"
    },
])


function favorites(product) {
    product.isFavorite = !product.isFavorite;
    let favorites = JSON.parse(localStorage.getItem("product")) || [];
    const index = favorites.findIndex(item => item.id === product.id);

    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(product);
    }
    localStorage.setItem("product", JSON.stringify(favorites));

    alert("Товар в списке избранного🤩");
}
</script>