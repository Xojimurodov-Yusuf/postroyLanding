<template>
    <div class="res-phone-header">
        <input class="search-input-res" type="text" placeholder="Что Вы ищите?">
        <svg class="search-icon" width="22" height="22" viewBox="0 0 22 22" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="10.7665" cy="10.7666" r="8.98856" stroke="#130F26" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            <path d="M17.0183 17.4851L20.5423 21" stroke="#130F26" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>

        <div :class="{ activeburger: activeBurger }" class="res-burger-ul">
            <div class="header-right-res">
                <svg @click="createProduct" class="plus-svg" width="54" height="54" viewBox="0 0 54 54" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_i_1_293)">
                        <circle cx="27" cy="27" r="26.5" stroke="#FECA07" />
                    </g>
                    <path d="M26.9925 19.0068V34.9937" stroke="black" stroke-width="3" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M35.0009 27.0019L18.999 27.0003" stroke="black" stroke-width="3" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <defs>
                        <filter id="filter0_i_1_293" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="8.5" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_293" />
                        </filter>
                    </defs>
                </svg>

                <svg class="info-svg" width="22" height="22" viewBox="0 0 22 22" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M15.3341 1.7501H6.66512C3.64412 1.7501 1.75012 3.8891 1.75012 6.9161V15.0841C1.75012 18.1111 3.63512 20.2501 6.66512 20.2501H15.3331C18.3641 20.2501 20.2501 18.1111 20.2501 15.0841V6.9161C20.2501 3.8891 18.3641 1.7501 15.3341 1.7501Z"
                        stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path class="info-logo" d="M10.9962 15.0001V11.0001" stroke="black" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path class="info-logo" d="M10.9912 7.2042H11.0012" stroke="black" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <svg @click="favorite" class="star-svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.1046 2.17707L12.932 5.82782C13.1111 6.18622 13.4568 6.43474 13.8577 6.49225L17.9457 7.08068C18.9557 7.2265 19.3577 8.45061 18.6267 9.15201L15.6705 11.9925C15.38 12.2718 15.2478 12.6734 15.3165 13.0677L16.0142 17.0779C16.186 18.0699 15.1301 18.8267 14.2274 18.3574L10.5736 16.4627C10.2154 16.2769 9.78639 16.2769 9.42715 16.4627L5.77337 18.3574C4.8706 18.8267 3.81476 18.0699 3.98761 17.0779L4.68421 13.0677C4.75294 12.6734 4.6207 12.2718 4.33018 11.9925L1.37405 9.15201C0.643081 8.45061 1.04501 7.2265 2.05503 7.08068L6.14302 6.49225C6.5439 6.43474 6.89064 6.18622 7.06974 5.82782L8.89611 2.17707C9.34802 1.2744 10.6527 1.2744 11.1046 2.17707Z"
                        stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <svg @click="accaount" class="accaount-svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.983 15.3462C8.11536 15.3462 4.8125 15.9309 4.8125 18.2728C4.8125 20.6147 8.0944 21.2205 11.983 21.2205C15.8506 21.2205 19.1525 20.6347 19.1525 18.2938C19.1525 15.9528 15.8715 15.3462 11.983 15.3462Z"
                        stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.9827 12.0059C14.5208 12.0059 16.5779 9.94779 16.5779 7.40969C16.5779 4.8716 14.5208 2.81445 11.9827 2.81445C9.4446 2.81445 7.3865 4.8716 7.3865 7.40969C7.37793 9.93922 9.42174 11.9973 11.9503 12.0059H11.9827Z"
                        stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>
        <button @click="burger" class="burger">
            <svg class="burger" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="2" width="22" height="3" rx="1.5" fill="#1F2022" />
                <rect x="1" y="19" width="22" height="3" rx="1.5" fill="#1F2022" />
                <rect x="1" y="10.5" width="22" height="3" rx="1.5" fill="#1F2022" />
            </svg>
        </button>

    </div>
</template>

<style>
.res-burger-ul {
    display: none;
}

.res-phone-header {
    display: none;
}

@media (max-width: 450px) {
    .header-nav {
        display: none;
    }

    .burger {
        background: none;
        border: none;
        position: relative;
        right: 4%;
    }

    .res-phone-header {
        display: block;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .res-burger-ul {
        display: block;
        width: 100%;
        max-width: 75%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: -450px;
        z-index: 99;
        background-color: white;
        opacity: 0.9;
        box-shadow: 0px 1px 9px 0px #301CA81A;
        transition: 450ms ease;
    }

    .header-right-res {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
        padding: 6rem 0rem;
    }

    .activeburger {
        left: 0;
    }

    .search-icon {
        position: absolute;
        left: 82%;
        top: 32%;
    }

    .search-div {
        display: none;
    }

    .search-input-res {
        width: 100%;
        padding: 2.6rem;
        border: none;
        outline: none;
        font-size: 1.4rem;
        color: black;
        border-radius: 0.8rem;
    }

    .search-input-res::placeholder {
        color: #BCBCBC;
    }
}
</style>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

function favorite() {
    router.push("/favorite")
}

const activeBurger = ref(false)

function burger() {
    activeBurger.value = !activeBurger.value
}

function accaount() {
    router.push('/accaount')
}

function createProduct() {
    router.push("/create")
}
</script>