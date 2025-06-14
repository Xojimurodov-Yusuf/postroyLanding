<template>
    <main>
        <section>
            <div class="container">
                <div class="catalog-input-section">
                    <div @click="catalog" class="catalog">
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

        <section class="reklama-section">
            <div class="container">
                <img class="reklama-banner" src="/images/reklama-banner.svg" alt="reklama">
                <img class="reklama-banner-res" src="/images/reklama-banner2.svg" alt="reklama">
            </div>
        </section>

        <section class="section-categori">
            <div class="container">
                <div class="section-name">
                    <p class="name-item">Категории</p>
                    <div class="item-icon">
                        <p class="all-item">Все</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.2744 19.75L12.2744 4.75" stroke="#1F2022" stroke-width="2.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.2988 13.7002L12.2748 19.7502L6.24976 13.7002" stroke="#1F2022"
                                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>

                <div class="categori-cards">
                    <div class="categori-card">
                        <p class="categori-card-name">Заборы</p>
                        <img class="categori-image" src="/images/zabor.svg" alt="zabor">
                    </div>

                    <div class="categori-card">
                        <p class="categori-card-name">Строй материалы</p>
                        <img class="categori-image" src="/images/material.svg" alt="zabor">
                    </div>

                    <div class="categori-card">
                        <p class="categori-card-name">Лестницы</p>
                        <img class="categori-image" src="/images/narvon.svg" alt="zabor">
                    </div>

                    <div class="categori-card">
                        <p class="categori-card-name">Пиломатериалы</p>
                        <img class="categori-image" src="/images/taxta.svg" alt="zabor">
                    </div>

                    <div class="categori-card">
                        <p class="categori-card-name">Метал</p>
                        <img class="categori-image" src="/images/metal.svg" alt="zabor">
                    </div>

                    <div class="categori-card">
                        <p class="categori-card-name">Стекло</p>
                        <img class="categori-image" src="/images/shisha.svg" alt="zabor">
                    </div>

                    <div class="categori-card">
                        <p class="categori-card-name">Трубы</p>
                        <img class="categori-image" src="/images/truba.svg" alt="zabor">
                    </div>
                </div>
            </div>
        </section>

        <section class="products-section">
            <div class="container">
                <p class="name-item">Рекомендованные</p>
                <ProductsCard />
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

.reklama-section {
    margin-top: 3.2rem;
}

.reklama-banner {
    width: 100%;
}

.reklama-banner-res {
    display: none;
}

.section-name {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.name-item {
    font-size: 3.2rem;
    font-weight: 500;
}

.item-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.all-item {
    font-size: 1.8rem;
    font-weight: 700;
}

.categori-cards {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
    margin-top: 1.6rem;
}

.categori-card {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 1.6rem;
    width: 16.6rem;
    padding: 1.6rem;
    border-radius: 2rem;
    box-shadow: 0px 1px 9px 0px #301CA81A;
    cursor: pointer;
}

.categori-card-name {
    font-size: 1.6rem;
    font-weight: 500;
}

.categori-image {
    position: relative;
    left: 50%;
}

.products-section {
    margin-top: 10.9rem;
}

@media (max-width: 1920px) {
    .container {
        max-width: 100%;
        width: 50%;
        margin: 0 auto;
    }
}

@media (max-width:1720px) {
    .container {
        max-width: 100%;
        width: 78%;
        margin: 0 auto;
    }
}

@media (max-width:1440px) {
    .container {
        max-width: 100%;
        width: 78%;
        margin: 0 auto;
    }
}

@media (max-width: 1024px) {
    .container {
        max-width: 100%;
        width: 95%;
        margin: 0 auto;
    }

    .logo {
        width: 12rem;
    }

    .header-right {
        gap: 3.8rem;
    }

    .plus-svg {
        width: 35px;
        height: 35px;
    }

    .info-svg {
        width: 18px;
        height: 18px;
    }

    .star-svg {
        width: 18px;
        height: 18px;
    }

    .accaount-svg {
        width: 18px;
        height: 18px;
    }

    .select-laungage {
        font-size: 1.5rem;
    }

    .search-div {
        width: 100%;
    }

    .reklama-banner {
        width: 100%;
    }

    .categori-card {
        width: 45%;
    }

    .search-div {
        width: 40%;
    }

    .input-search {
        width: 40%;
        font-size: 1rem;
    }

}

@media (max-width:768px) {
    .container {
        max-width: 100%;
        width: 95%;
        margin: 0 auto;
    }

    .catalog-input-section {
        gap: 2rem;
    }

    .search-div {
        width: 40%;
    }

    .input-search {
        width: 40%;
        font-size: 1rem;
    }

    .input-search::placeholder {
        font-size: 1rem;
    }

    .catalog {
        width: 30%;
    }

    .select-location {
        width: 30%;
    }

    .reklama-banner {
        width: 100%;
    }

    .categori-card {
        width: 45%;
    }
}

@media (max-width: 450px) {
    .container {
        max-width: 100%;
        width: 77%;
        margin: 0 auto;
    }

    .products-section {
        margin-top: 1.6rem;
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

    .reklama-banner {
        display: none;
    }

    .reklama-banner-res {
        display: block;
        margin: 0 auto;
    }

    .section-categori {
        margin-top: 1.6rem;
    }

    .name-item {
        font-size: 1.6rem;
        margin-left: 1.5%;
    }

    .all-item {
        font-size: 1.6rem;
    }

    .categori-cards {
        justify-content: space-between;
        align-items: start;
        gap: 3.5rem;
    }

    .categori-card {
        width: 14rem;
    }

    .categori-card-name {
        font-size: 1.2rem;
    }

    .categori-image {
        left: 40%;
    }
}

@media (max-width: 400px) {
    .container {
        max-width: 100%;
        width: 98%;
        margin: 0 auto;
    }

    .categori-card {
        width: 13rem;
    }

    .categori-card-name {
        font-size: 1.1rem;
    }

    .categori-image {
        width: 58px;
        height: 58px;
    }
}
</style>

<script setup>
import { useRouter } from "vue-router";
import ProductsCard from "./products.vue"
import Footer from './footer.vue'

const routerCatalog = useRouter()
function catalog() {
    routerCatalog.push("/catalog")
}

</script>