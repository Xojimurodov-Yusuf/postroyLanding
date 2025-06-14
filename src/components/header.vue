<template>
    <div class="container">
        <nav class="header-nav">
            <div class="header-left">
                <img class="logo" src="/images/logo.svg" alt="">
                <a class="number" href="tel:+ 998 (96) 000 00 00">+ 998 (96) 000 00 00</a>
            </div>

            <div class="header-right">
                <svg @click="create" class="plus-svg" width="54" height="54" viewBox="0 0 54 54" fill="none"
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

                <select class="select-laungage">
                    <option value="ru">Ру</option>
                    <option value="uz">Uz</option>
                    <option value="eng">Eng</option>
                </select>
            </div>
        </nav>
    </div>
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

header {
    box-shadow: 0px 1px 9px 0px #301CA81A;
}

.header-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.4rem;
}

.header-left {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
}

.header-right {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6.8rem;
}

.number {
    font-size: 1.8rem;
    color: black;
    padding: 1rem;
    font-weight: 500;
}

.number:hover {
    border-bottom: 1px solid black;
}

.plus-svg:hover {
    fill: #FECA07;
    transition: 450ms ease;
    cursor: pointer;
}

.star-svg:hover {
    transition: 450ms ease;
    fill: #FECA07;
    cursor: pointer;

    path {
        stroke: #FECA07;
    }
}

.accaount-svg:hover {
    fill: black;
    cursor: pointer;
}

.info-svg:hover {
    fill: black;
    cursor: pointer;

    .info-logo {
        stroke: white;
        fill: white;
    }
}

.select-laungage {
    width: 6.1rem;
    padding: 0.2rem;
    font-size: 1.8rem;
    font-weight: 500;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
}

@media (max-width: 1024px) {
    .number {
        font-size: 1.2rem;
    }
}

@media (max-width: 768px) {
    .header-left {
        gap: 1rem;
    }

    .logo {
        width: 12rem;
    }

    .number {
        font-size: 1.2rem;
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
}
</style>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

function favorite() {
    router.push('/favorite')
}

function create() {
    router.push('/create')
}

function accaount() {
    router.push('/accaount')
}
</script>