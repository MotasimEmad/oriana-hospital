<template>
    <section class="bg-white dark:bg-gray-800 py-8 md:py-14">
        <div class="container px-6 py-16 mx-auto text-center">
            <div class="max-w-lg mx-auto flex flex-col">
                <div class="mx-auto flex justify-center">
                    <img src="../assets/svg/oriana_logo.svg" alt="" />
                </div>
                <p class="mt-6 text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique
                    obcaecati illum mollitia.</p>
                <button
                    class="px-6 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-primary rounded-md hover:bg-green-500 md:mx-0 md:w-auto focus:outline-none">
                   {{ $t('whatsapp') }}
                </button>
                <button
                    class="px-6 py-2 mt-2 text-sm font-medium leading-5 text-center text-white capitalize bg-secondray rounded-md hover:bg-yellow-500 md:mx-0 md:w-auto focus:outline-none">
                    {{ $t('call_us') }}
                </button>
            </div>
        </div>
    </section>
</template>