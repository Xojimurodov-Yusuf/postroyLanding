<template>
    <main>
        <section>
            <div class="container">
                <div class="accaount-reg">
                    <p class="accaount-text">Введите свой номер телефона для того
                        что бы пройти авторизацию</p>
                    <div class="sms-inputs">
                        <input class="numberInputSms" @input="cheklov" v-model="sms" type="number">
                        <input class="numberInputSms" @input="cheklovTwo" v-model="smsTwo" type="number">
                        <input class="numberInputSms" @input="cheklovThree" v-model="smsThree" type="number">
                        <input class="numberInputSms" @input="cheklovFour" v-model="smsFour" type="number">
                        <input class="numberInputSms" @input="cheklovFive" v-model="smsFive" type="number">
                        <input class="numberInputSms" @input="cheklovSix" v-model="smsSix" type="number">
                    </div>

                    <div class="img-btn-reg">
                        <img src="/images/register-ac.svg" alt="img">
                        <button @click="homeSms" class="next-btn"><svg width="18" height="15" viewBox="0 0 18 15"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.75 7.72607L1.75 7.72607" stroke="#1F2022" stroke-width="2.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10.7002 1.70149L16.7502 7.72549L10.7002 13.7505" stroke="#1F2022"
                                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <RouterLink class="routerLink" to="/">Я не получил (ла) код</RouterLink>
                    <RouterLink class="routerLink" to="/">Отправить заново</RouterLink>
                </div>
            </div>
        </section>
    </main>

    <Footer />
</template>

<style>
.accaount-reg {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2.4rem;
    margin-top: 17.4rem;
    margin-bottom: 20rem;
}

.accaount-text {
    font-size: 1.6rem;
    font-weight: 500;
    text-align: center;
    width: 30rem;
}

.sms-inputs {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

.numberInputSms {
    width: 5.1rem;
    height: 6.4rem;
    border-radius: 0.8rem;
    border: none;
    box-shadow: 0px 1px 9px 0px #301CA81A;
    outline: none;
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
}

.img-btn-reg {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.7rem;
}

.next-btn {
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #FECA07;
    background: none;
    cursor: pointer;
    transition: 450ms ease;
}

.next-btn:hover {
    background-color: #FECA07;
}

.routerLink {
    color: black;
    font-size: 1.6rem;
    font-weight: 700;
}

@media (max-width: 400px) {
    .numberInputSms {
        width: 4.5rem;
        height: 5.9rem;
    }
}
</style>

<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue'
import router from '@/router';
import Footer from './footer.vue'

const sms = ref("")

function cheklov(e) {
    let valueInput = e.target.value

    if (valueInput.length > 1) {
        e.target.value = valueInput.slice(0, 1)
        sms.value = e.target.value
    }
}

const smsTwo = ref("")

function cheklovTwo(e) {
    let valueInput = e.target.value

    if (valueInput.length > 1) {
        e.target.value = valueInput.slice(0, 1)
        smsTwo.value = e.target.value
    }
}

const smsThree = ref("")

function cheklovThree(e) {
    let valueInput = e.target.value

    if (valueInput.length > 1) {
        e.target.value = valueInput.slice(0, 1)
        smsThree.value = e.target.value
    }
}

const smsFour = ref("")

function cheklovFour(e) {
    let valueInput = e.target.value

    if (valueInput.length > 1) {
        e.target.value = valueInput.slice(0, 1)
        smsFour.value = e.target.value
    }
}

const smsFive = ref("")

function cheklovFive(e) {
    let valueInput = e.target.value

    if (valueInput.length > 1) {
        e.target.value = valueInput.slice(0, 1)
        smsFive.value = e.target.value
    }
}

const smsSix = ref("")

function cheklovSix(e) {
    let valueInput = e.target.value

    if (valueInput.length > 1) {
        e.target.value = valueInput.slice(0, 1)
        smsSix.value = e.target.value
    }
}

function homeSms() {
    if (sms.value.length === 0) {
        alert("Введите 6-значный PIN-код, отправленный на ваш телефон")
    } else if (smsTwo.value.length === 0) {
        alert("Введите 6-значный PIN-код, отправленный на ваш телефон")
    } else if (smsThree.value.length === 0) {
        alert("Введите 6-значный PIN-код, отправленный на ваш телефон")
    } else if (smsFour.value.length === 0) {
        alert("Введите 6-значный PIN-код, отправленный на ваш телефон")
    } else if (smsFive.value.length === 0) {
        alert("Введите 6-значный PIN-код, отправленный на ваш телефон")
    } else if (smsSix.value.length === 0) {
        alert("Введите 6-значный PIN-код, отправленный на ваш телефон")
    } else {
        router.push('/')
    }
}
</script>