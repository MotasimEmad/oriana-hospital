<template>

   <div id="app" :class="[currentPage == 'en' ? 'font-roboto' : 'font-tajawal' ,isDark ? 'dark' : '']" Class="bg-white dark:bg-gray-900" :dir="currentPage == 'en' ? 'ltr' : 'rtl'">
    <div id="nav" Class="bg-white dark:bg-gray-800">
      <div class="flex items-center mx-9" name="langs">
        <select name="langs" id="" @change="handleChange($event)" v-model="lang" class="bg-green-800 text-white rounded-b-md py-1 px-2">
          <option value="en" class="bg-green_ori text-white rounded-b-md py-1 px-2">English</option>
          <option value="ar" class="bg-green_ori text-white rounded-b-md py-1 px-2">عربي</option>
        </select>
        <button class="ml-2 mt-4 md:mt-0 px-6 font-medium tracking-wider leading-5 text-gray-900 dark:text-white rounded-md transition md:inline-block hover:shadow-lg" @click="isDark =! isDark">
          <svg v-if="isDark" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
        </button> 
      </div>
    </div>
    <HeaderComponent />
    <AboutComponent />
    <ViedoComponent />
    <DoctorComponent />
    <SocialComponent />
    <OfferComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import AboutComponent from './components/About.vue';
import ViedoComponent from './components/Video.vue';
import DoctorComponent from './components/Doctors.vue';
import SocialComponent from './components/Social.vue';
import OfferComponent from './components/Offer.vue';
import i18n from './i18n';


export default {
  components: {
   HeaderComponent,
   AboutComponent,
   ViedoComponent,
   DoctorComponent,
   SocialComponent,
   OfferComponent
  },
  data: function() {
    const lang = localStorage.getItem('lang') || 'en';
    return {
      lang: lang,
      isDark: false,
    }
  },
  methods: {
    handleChange(event) {
      localStorage.setItem('lang', event.target.value);
      window.location.reload();
    }
  },
  computed: {
    currentPage() {
      return i18n.locale;
    }
  },
}
</script>
