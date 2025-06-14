<template>
    <div class="products">
        <div v-for="product in blockProducts" :key="product.id" class="product">
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
                            :fill="product.isFavorite ? '#FECA07' : 'none'" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M11.1043 2.17701L12.9317 5.82776C13.1108 6.18616 13.4565 6.43467 13.8573 6.49218L17.9453 7.08062C18.9554 7.22644 19.3573 8.45055 18.6263 9.15194L15.6702 11.9924C15.3797 12.2718 15.2474 12.6733 15.3162 13.0676L16.0138 17.0778C16.1856 18.0698 15.1298 18.8267 14.227 18.3574L10.5732 16.4627C10.215 16.2768 9.78602 16.2768 9.42679 16.4627L5.773 18.3574C4.87023 18.8267 3.81439 18.0698 3.98724 17.0778L4.68385 13.0676C4.75257 12.6733 4.62033 12.2718 4.32982 11.9924L1.37368 9.15194C0.642715 8.45055 1.04464 7.22644 2.05466 7.08062L6.14265 6.49218C6.54354 6.43467 6.89028 6.18616 7.06937 5.82776L8.89574 2.17701C9.34765 1.27433 10.6523 1.27433 11.1043 2.17701Z"
                                :stroke="product.isFavorite ? 'none' : 'black'" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>


        <button v-if="!allProductShow" @click="showAll" class="download-all-btn">
            Загрузить ещё
        </button>
    </div>
</template>

<style>
.products {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
    width: 100%;
    margin-top: 1.6rem;
}

.noneBtn {
    display: block;
}

.product {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 1.2rem;
    width: 30.4rem;
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
        width: 13.6rem;
        height: 11rem;
    }

    .product-name {
        font-size: 1.2rem;
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
        justify-content: space-between;
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
}
</style>

<script setup>
import { computed, ref } from 'vue'
import router from '@/router';
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

    {
        id: 10,
        image: "./images/product 10.svg",
        name: "Плитка Tiger Кафель мозаика (8,2x8,2) 25x25",
        price: "1.000.000 cум"
    },

    {
        id: 11,
        image: "./images/product 11.svg",
        name: "Плитка Tiger Кафель мозаика (8,2x8,2) 25x25",
        price: "1.000.000 cум"
    },

    {
        id: 12,
        image: "./images/product 1.svg",
        name: "Плитка Tiger Кафель мозаика (8,2x8,2) 25x25",
        price: "1.000.000 cум"
    },

    {
        id: 13,
        image: "./images/product 1.svg",
        name: "Плитка Tiger Кафель мозаика (8,2x8,2) 25x25",
        price: "1.000.000 cум"
    },

    {
        id: 14,
        image: "./images/product 8.svg",
        name: "Плитка Tiger Кафель мозаика (8,2x8,2) 25x25",
        price: "1.000.000 cум"
    },

    {
        id: 15,
        image: "./images/product 3.svg",
        name: "Плитка Tiger Кафель мозаика (8,2x8,2) 25x25",
        price: "1.000.000 cум"
    },

    {
        id: 16,
        image: "./images/product 4.svg",
        name: "Плитка Tiger Кафель мозаика (8,2x8,2) 25x25",
        price: "1.000.000 cум"
    },

    {
        id: 17,
        image: "./images/product 7.svg",
        name: "Плитка Tiger Кафель мозаика (8,2x8,2) 25x25",
        price: "1.000.000 cум"
    },

    {
        id: 18,
        image: "./images/product 5.svg",
        name: "Плитка Tiger Кафель мозаика (8,2x8,2) 25x25",
        price: "1.000.000 cум"
    },

    {
        id: 19,
        image: "./images/product 4.svg",
        name: "Плитка Tiger Кафель мозаика (8,2x8,2) 25x25",
        price: "1.000.000 cум"
    },

    {
        id: 20,
        image: "./images/product 10.svg",
        name: "Плитка Tiger Кафель мозаика (8,2x8,2) 25x25",
        price: "1.000.000 cум"
    },

    {
        id: 21,
        image: "./images/product 1.svg",
        name: "Плитка Tiger Кафель мозаика (8,2x8,2) 25x25",
        price: "1.000.000 cум"
    },

    {
        id: 22,
        image: "./images/product 8.svg",
        name: "Плитка Tiger Кафель мозаика (8,2x8,2) 25x25",
        price: "1.000.000 cум"
    },

    {
        id: 23,
        image: "./images/products 6.svg",
        name: "Плитка Tiger Кафель мозаика (8,2x8,2) 25x25",
        price: "1.000.000 cум"
    },

    {
        id: 24,
        image: "./images/product 1.svg",
        name: "Плитка Tiger Кафель мозаика (8,2x8,2) 25x25",
        price: "1.000.000 cум"
    },
])

const allProductShow = ref(false)
const blockProducts = computed(() => {
    return allProductShow.value ? products.value : products.value.slice(0, 12)
})

function showAll() {
    allProductShow.value = true
}

function favorites(product) {
    product.isFavorite = !product.isFavorite;
    let favorites = JSON.parse(localStorage.getItem("product")) || [];
    const index = favorites.findIndex(item => item.id === product.id);

    if (index > -1) {
        favorites.splice(index, 1);
        alert("Товар удалён из списка избранного")
    } else {
        favorites.push(product);
        alert("Товар в списке избранного🤩");
    }

    localStorage.setItem("product", JSON.stringify(favorites));
}

const showDownloadBtn = ref(true)

async function handleClick() {
    showDownloadBtn.value = false
    router.push('/allProduct')
}

</script>