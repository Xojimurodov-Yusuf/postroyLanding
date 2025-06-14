<template>
    <main>
        <section>
            <div class="container">
                <div class="create-product-section">
                    <div class="set-product-create">
                        <p class="set-product-create-item">Подача объявления</p>

                        <div class="create-set">
                            <div class="create-products-set">
                                <p class="create-set-item">Категория</p>
                                <div class="select-create-set">
                                    <select class="create-set-select">
                                        <option value="setRegion">Отделочные материалы</option>
                                        <option value="tashkent">Ташкент</option>
                                        <option value="buxara">Бухара</option>
                                        <option value="andijon">Андижан</option>
                                    </select>
                                    <img class="create-select-chart" src="/images/Chart.svg" alt="chart">
                                </div>
                            </div>

                            <div class="create-products-set">
                                <p class="create-set-item">Подкатегория</p>
                                <div class="select-create-set">
                                    <select class="create-set-select">
                                        <option value="setRegion">Отделочные материалы</option>
                                        <option value="tashkent">Ташкент</option>
                                        <option value="buxara">Бухара</option>
                                        <option value="andijon">Андижан</option>
                                    </select>
                                    <img class="create-select-chart" src="/images/Chart.svg" alt="chart">
                                </div>
                            </div>

                            <div class="create-products-set">
                                <p class="create-set-item">Подкатегория</p>
                                <div class="select-create-set">
                                    <select class="create-set-select">
                                        <option value="setRegion">Кафель декор</option>
                                        <option value="tashkent">Ташкент</option>
                                        <option value="buxara">Бухара</option>
                                        <option value="andijon">Андижан</option>
                                    </select>
                                    <img class="create-select-chart" src="/images/Chart.svg" alt="chart">
                                </div>
                            </div>

                            <div class="create-products-set">
                                <p class="create-set-item">Заголовок объявления</p>
                                <div class="select-create-set">
                                    <select class="create-set-select">
                                        <option value="setRegion">Кафель плитка</option>
                                        <option value="tashkent">Ташкент</option>
                                        <option value="buxara">Бухара</option>
                                        <option value="andijon">Андижан</option>
                                    </select>
                                    <img class="create-select-chart" src="/images/Chart.svg" alt="chart">
                                </div>
                            </div>

                            <div class="create-products-set">
                                <div class="textareaH">
                                    <p class="create-set-item">Описание</p>
                                    <p class="hisoblash-text">{{ hisoblatext }}</p>
                                </div>
                                <div class="select-create-set">
                                    <textarea v-model="textarea" class="textArea" maxlength="150"
                                        placeholder="Коментария"></textarea>
                                </div>
                            </div>

                            <div class="create-products-set">
                                <p class="create-set-item">Объем ( количество товара имеющегося в наличии )</p>
                                <div class="select-create-set">
                                    <input @input="shtuk" v-model="shtukInput" class="create-set-select" type="number"
                                        placeholder="Штук ( шт.)">
                                    <p class="create-select-chart"> ( шт.)</p>
                                </div>
                            </div>

                            <div class="create-products-set">
                                <p class="create-set-item">Сумма за 1 единицу товара</p>
                                <div class="select-create-set">
                                    <input @input="shtukTwo" v-model="shtukInputTwo" class="create-set-select"
                                        type="number" placeholder="Штук ( шт.)">
                                    <p class="create-select-chart">сум</p>
                                </div>
                            </div>

                            <div class="create-products-set">
                                <p class="create-set-item">Номер телефона</p>
                                <div class="select-create-set">
                                    <input :class="{ notogriNumber: !togriraqam && number.length > 0 }"
                                        @input="shtukThre" v-model="number" class="createNumber" type="tel"
                                        placeholder="+998 99 123 45 67">
                                    <img class="create-select-chart" src="/images/edit.svg" alt="edit">
                                </div>
                            </div>

                            <div class="create-products-set">
                                <p class="create-set-item">Регион</p>
                                <div class="select-create-set">
                                    <select class="create-set-select">
                                        <option value="setRegion">Ташкент</option>
                                        <option value="tashkent">Ташкент</option>
                                        <option value="buxara">Бухара</option>
                                        <option value="andijon">Андижан</option>
                                    </select>
                                    <img class="create-select-chart" src="/images/Chart.svg" alt="chart">
                                </div>
                            </div>

                            <div class="create-products-set">
                                <p class="create-set-item-res">Фото</p>
                                <div class="create-image-set">
                                    <img src="/images/tovar-photo.svg" alt="tovar-photo">
                                    <img src="/images/tovar-photo.svg" alt="tovar-photo">
                                    <img src="/images/tovar-photo.svg" alt="tovar-photo">
                                    <img src="/images/tovar-photo.svg" alt="tovar-photo">
                                    <img src="/images/add.svg" alt="add-photo">
                                </div>
                            </div>

                            <div class="create-products-set-res">
                                <p class="create-set-item">Фото</p>
                                <div class="create-image-set-res">
                                    <img src="/images/pic1.svg" alt="tovar-photo">
                                    <div class="res-images-right">
                                        <img src="/images/pic2.svg" alt="tovar-photo">
                                        <img src="/images/pic2.svg" alt="tovar-photo">
                                        <img src="/images/pic2.svg" alt="tovar-photo">
                                        <img src="/images/add (1).svg" alt="tovar-photo">
                                    </div>
                                </div>
                            </div>

                            <div class="create-products-set-res">
                                <p class="create-set-item">Регион</p>
                                <div class="select-create-set">
                                    <select class="create-set-select">
                                        <option value="setRegion">Ташкент</option>
                                        <option value="tashkent">Ташкент</option>
                                        <option value="buxara">Бухара</option>
                                        <option value="andijon">Андижан</option>
                                    </select>
                                    <img class="create-select-chart" src="/images/Chart.svg" alt="chart">
                                </div>
                            </div>

                            <div class="create-products-set-res">
                                <p class="create-set-item">Тип</p>
                                <div class="select-create-set">
                                    <select class="create-set-select">
                                        <option value="setRegion">Оптом</option>
                                        <option value="tashkent">Ташкент</option>
                                        <option value="buxara">Бухара</option>
                                        <option value="andijon">Андижан</option>
                                    </select>
                                    <img class="create-select-chart" src="/images/Chart.svg" alt="chart">
                                </div>
                            </div>

                            <div class="create-products-set-res">
                                <p class="create-set-item">Способ оплаты</p>
                                <div class="select-create-set">
                                    <select class="create-set-select">
                                        <option value="setRegion">Наличные</option>
                                        <option value="tashkent">Ташкент</option>
                                        <option value="buxara">Бухара</option>
                                        <option value="andijon">Андижан</option>
                                    </select>
                                    <img class="create-select-chart" src="/images/Chart.svg" alt="chart">
                                </div>
                            </div>

                            <button @click="tasdiqlandiBtn" class="ready-btn-res">Опубликовать</button>
                        </div>
                    </div>

                    <div class="create-product-left">
                        <p class="set-product-create-item">Предпросмотр</p>

                        <div class="create-product-watch">
                            <div class="product-images">
                                <img src="/images/create-image.svg" alt="create-img">
                                <div class="product-images-right-images">
                                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 8.5L8 1.5L15 8.5" stroke="#130F26" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <img src="/images/creaete-images-right.svg" alt="create-img">
                                    <img src="/images/creaete-images-right.svg" alt="create-img">
                                    <img src="/images/creaete-images-right.svg" alt="create-img">
                                    <img src="/images/creaete-images-right.svg" alt="create-img">

                                    <svg class="rotate-svg" width="16" height="10" viewBox="0 0 16 10" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 8.5L8 1.5L15 8.5" stroke="#130F26" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>

                            <div class="create-product-right-items">
                                <p class="create-product-name">Кафель плитка</p>

                                <div class="comentary-div">
                                    <p class="create-product-name">Описание</p>
                                    <p class="comentary">Lorem ipsum dolor sit amet, conctetur adipiscing elit, sed do
                                        eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud упражнения ullamco labouris nisi ut aliquip ex</p>
                                </div>

                                <div class="products-info">
                                    <p class="products-info-name">Username</p>
                                    <p class="products-info-text">ID0123456</p>
                                </div>

                                <div class="products-info">
                                    <p class="products-info-name">Объем ( количество товара имеющегося в наличии )</p>
                                    <p class="products-info-text">100 (шт. )</p>
                                </div>

                                <div class="products-info">
                                    <p class="products-info-name">Сумма за 1 единицу товара</p>
                                    <p class="create-products-price">1.000.000 сум</p>
                                </div>

                                <div class="products-info">
                                    <p class="products-info-name">Телефон</p>
                                    <p class="products-info-text">+ 998 96 000 00 00</p>
                                    <p class="products-info-text">+ 998 96 000 00 00</p>
                                </div>

                                <div class="products-info">
                                    <p class="products-info-name">Регион</p>
                                    <p class="products-info-text">Ташкент</p>
                                </div>

                                <button @click="tasdiqlandiBtn" class="ready-btn">Опубликовать</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer />
</template>

<script setup>
import { ref, computed } from "vue";
import Footer from './footer.vue'
import router from "@/router";

const textarea = ref('')

const hisoblatext = computed(() => textarea.value.trim().length)

const shtukInput = ref('')

const shtuk = (value) => {
    if (value.target.value.length > 5) {
        value.target.value = value.target.value.slice(0, 10)
        shtukInput.value = value.target.value
    }
}

const shtukInputTwo = ref('')

const shtukTwo = (valueTwo) => {
    if (valueTwo.target.value.length > 5) {
        valueTwo.target.value = valueTwo.target.value.slice(0, 10)
        shtukInput.value = value.target.value
    }
}

const number = ref('')

const shtukThre = (valueTwo) => {
    if (valueTwo.target.value.length > 13) {
        valueTwo.target.value = valueTwo.target.value.slice(0, 13)
        valueTwo.value = value.target.value
    }
}


const togriraqam = computed(() => {
    const regex = /^\+998\d{9}$/
    return regex.test(number.value)
})

function tasdiqlandiBtn() {
    if (!togriraqam.value) {
        alert(" Введите номер телефона в указанном формате.")
    } else {
        router.push('/')
    }
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

.create-product-section {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-top: 3.2rem;
}

.set-product-create {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
}

.create-set {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2.4rem;
    margin-top: 4.9rem;
}

.create-products-set {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 0.8rem;
}

.create-products-set-res {
    display: none;
}

.create-set-item {
    font-size: 1.6rem;
    font-weight: 500;
    margin-left: 3%;
}

.create-set-item-res {
    font-size: 1.6rem;
    font-weight: 500;
    margin-left: 3%;
}

.textareaH {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.hisoblash-text {
    color: #AFAFAF;
    font-size: 1.5rem;
}

.set-product-create-item {
    font-size: 1.8rem;
    font-weight: 500;
}

.select-create-set {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.textArea {
    resize: none;
    width: 42.8rem;
    height: 13.1rem;
    padding: 1.6rem;
    box-shadow: 0px 1px 9px 0px #301CA81A;
    border-radius: 0.8rem;
    border: none;
    outline: none;
    font-size: 1.6rem;
}

.create-select-chart {
    position: absolute;
    right: 4%;
    font-size: 1.6rem;
    font-weight: 500;
}

.create-set-select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 42.8rem;
    padding: 2.4rem;
    box-shadow: 0px 1px 9px 0px #301CA81A;
    border: none;
    outline: none;
    border-radius: 0.8rem;
    font-size: 1.6rem;
    font-weight: 500;
    cursor: pointer;
}

.createNumber {
    width: 42.8rem;
    padding: 2.4rem;
    box-shadow: 0px 1px 9px 0px #301CA81A;
    border: none;
    outline: none;
    border-radius: 0.8rem;
    font-size: 1.6rem;
    font-weight: 500;
    cursor: pointer;
    border: 1px solid transparent;
}

.create-image-set {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    width: 42.8rem;
    padding: 2rem;
    border-radius: 0.8rem;
    box-shadow: 0px 1px 9px 0px #301CA81A;
}

.notogriNumber {
    border: 1px solid red;
}


input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.create-product-watch {
    width: 65.5rem;
    height: 131rem;
    padding: 2.5rem 0rem 0rem 0.8rem;
    border-radius: 0.8rem;
    box-shadow: 0px 1px 9px 0px #301CA81A;
    margin-top: 3.2rem;
}

.product-images {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 6rem;
}

.product-images-right-images {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.1rem;
}

.rotate-svg {
    transform: rotate(180deg);
}

.create-product-right-items {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 1.6rem;
}

.create-product-name {
    font-size: 2.4rem;
    font-weight: 500;
}

.products-info {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 0.3rem;
}

.comentary-div {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 1.3rem;
}

.comentary {
    font-size: 1.6rem;
    width: 60.5rem;
}

.products-info-name {
    font-size: 1.6rem;
    color: #AFAFAF;
}

.products-info-text {
    font-size: 1.6rem;
    font-weight: 500;
}

.create-products-price {
    font-size: 2.4rem;
    font-weight: 700;
}

.ready-btn {
    width: 20rem;
    padding: 2rem;
    font-size: 1.8rem;
    font-weight: 500;
    border: 2px solid #FECA07;
    border-radius: 0.8rem;
    transition: 450ms ease;
    background: none;
    cursor: pointer;
    margin: 4.3rem auto;
}

.ready-btn:hover {
    background-color: #FECA07;
}

.ready-btn-res {
    display: none;
}

@media (max-width: 768px) {
    .create-set {
        margin: 0;
    }

    .create-product-section {
        justify-content: center;
    }

    .create-product-left {
        display: none;
    }

    .set-product-create-item {
        display: none;
    }

    .create-products-set-res {
        display: block;
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        gap: 0.8rem;
    }

    .create-image-set {
        display: none;
    }

    .create-set-item-res {
        display: none;
    }

    .create-image-set-res {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 42.8rem;
        padding: 2.4rem;
        box-shadow: 0px 1px 2px 0px #0000001A;
        border-radius: 0.8rem;
    }
}

@media (max-width: 450px) {
    .create-product-section {
        justify-content: center;
    }

    .create-product-left {
        display: none;
    }

    .set-product-create-item {
        display: none;
    }

    .create-set-item {
        font-size: 1.4rem;
        font-weight: 400;
    }

    .create-set-select {
        width: 33.2rem;
        padding: 2.2rem;
        font-size: 1.6rem;
    }

    .createNumber {
        width: 33.2rem;
        padding: 2.2rem;
        font-size: 1.6rem;
    }

    .textArea {
        width: 33.2rem;
        font-size: 1.6rem;
    }

    .create-set {
        margin-top: 0;
        display: flex;
        justify-content: start;
        align-items: start;
    }

    .create-image-set {
        display: none;
    }

    .create-products-set-res {
        display: block;
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        gap: 0.8rem;
    }

    .create-set-item-res {
        display: none;
    }

    .create-image-set-res {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 34.3rem;
        padding: 1.8rem;
        box-shadow: 0px 1px 2px 0px #0000001A;
        border-radius: 0.8rem;
    }

    .ready-btn-res {
        display: block;
        width: 20rem;
        padding: 2rem;
        font-size: 1.8rem;
        font-weight: 500;
        border: 2px solid #FECA07;
        border-radius: 0.8rem;
        transition: 450ms ease;
        background: none;
        cursor: pointer;
        margin: 4.3rem auto;
    }

    .ready-btn-res:hover {
        background-color: #FECA07;
    }
}
</style>