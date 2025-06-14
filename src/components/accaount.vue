<template>
    <main>
        <section>
            <div class="container">
                <div class="accaount-reg">
                    <p class="accaount-text">Введите свой номер телефона для того
                        что бы пройти авторизацию</p>
                    <input :class="{ falseNumber: !trueNumber && regexNumber.length > 0 }" v-model="regexNumber"
                        class="numberInput" type="text" placeholder="+ 998 90 000 00 00">

                    <div class="img-btn-reg">
                        <img src="/images/register-ac.svg" alt="img">
                        <button @click="sms" class="next-btn"><svg width="18" height="15" viewBox="0 0 18 15"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.75 7.72607L1.75 7.72607" stroke="#1F2022" stroke-width="2.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10.7002 1.70149L16.7502 7.72549L10.7002 13.7505" stroke="#1F2022"
                                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
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

.numberInput {
    width: 36rem;
    padding: 2.4rem;
    border-radius: 0.8rem;
    border: none;
    box-shadow: 0px 1px 9px 0px #301CA81A;
    outline: none;
    font-size: 1.6rem;
    font-weight: 500;
    border: 1px solid transparent;
}

.numberInput::placeholder {
    color: gray;
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

.falseNumber {
    border: 1px solid red;
}
</style>

<script setup>
import router from '@/router';
import { ref, computed } from 'vue';
import Footer from './footer.vue'

const regexNumber = ref('')

const trueNumber = computed(() => {
    const regex = /^\+998\d{9}$/
    return regex.test(regexNumber.value)
})

function sms() {
    if (!trueNumber.value) {
        alert("Введите номер в указанном формате")
    } else {
        router.push('/sms')
    }
}
</script>