<template>
  <header class="header relative">
    <div
      class="header-inner flex items-center py-[19px] xl:py-0 z-50 transition-all left-0 top-0 w-full h-auto absolute bg-white dark:bg-[#161821]">
      <div
        class="public-container grid grid-flow-col xl:grid-cols-[22%_minmax(56%,_1fr)_22%] items-center px-3.8 3xl:px-37">
        <a href="/">
          <img class="w-full h-auto max-h-20" :src="
            darkMode
              ? '/images/logo/dark-logo.png'
              : '/images/logo/light-logo.png'
          " alt="Logo" />
        </a>
        <nav aria-label="Main Menu" class="relative mx-auto hidden xl:block">
          <ul aria-label="Main Menu" role="menubar">
            <li class="inline-block px-2.5 2xl:px-[17px] py-[29px] group" role="none">
              <a rel="noopener noreferrer"
                class="font-medium 2xl:text-[16px] flex items-center leading-snug text-secondary dark:text-white"
                href="#!" id="nav-1" role="menuitem" tabindex="0" aria-haspopup="true" aria-expanded="false">Home<i
                  class="fa fa-chevron-down ml-2 text-xs"></i></a>
              <div
                class="w-[1170px] flex flex-wrap absolute z-20 top-full mt-5 invisible opacity-0 pt-7.5 pb-[34px] px-3.8 shadow-2md shadow-black/5 bg-white border-b-4 border-b-primary transition-all duration-300 left-1/2 -translate-x-1/2 group-hover:visible group-hover:opacity-100 group-hover:mt-0 group-hover:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-focus-within:mt-0 group-focus-within:pointer-events-auto dark:bg-[#161821] dark:text-white">
                <div class="px-3.8 shrink-0 grow-0 w-1/4 basis-1/4">
                  <h2 class="sr-only">Group 01</h2>
                  <ul>
                    <li class="relative">
                      <a class="leading-relaxed block font-medium py-2 hover:text-heading dark:hover:text-primary"
                        href="/">MaxCoach Education<span
                          class="inline-flex justify-center items-center leading-none text-white bg-strawGradient pt-1 px-2 pb-[3px] text-[11px] rounded-sm ml-2.5 font-bold tracking-wide uppercase">hot</span></a>
                    </li>
                    <li class="relative">
                      <a class="leading-relaxed block font-medium py-2 hover:text-heading dark:hover:text-primary"
                        href="/home/courseportal">Course Portal</a>
                    </li>
                    <li class="relative">
                      <a class="leading-relaxed block font-medium py-2 hover:text-heading dark:hover:text-primary"
                        href="/home/distantlearning">Distant Learning<span
                          class="inline-flex justify-center items-center leading-none text-white bg-strawGradient pt-1 px-2 pb-[3px] text-[11px] rounded-sm ml-2.5 font-bold tracking-wide uppercase">hot</span></a>
                    </li>
                    <li class="relative">
                      <a class="leading-relaxed block font-medium py-2 hover:text-heading dark:hover:text-primary"
                        href="/home/multimediapedagogy">Multimedia Pedagogy</a>
                    </li>
                    <li class="relative">
                      <a class="leading-relaxed block font-medium py-2 hover:text-heading dark:hover:text-primary"
                        href="/home/modernschooling">Modern Schooling</a>
                    </li>
                    <li class="relative">
                      <a class="leading-relaxed block font-medium py-2 hover:text-heading dark:hover:text-primary"
                        href="/home/remotetraining">Remote Training</a>
                    </li>
                  </ul>
                </div>
                <div class="px-3.8 shrink-0 grow-0 w-1/4 basis-1/4">
                  <h2 class="sr-only">Group 02</h2>
                  <ul>
                    <li class="relative">
                      <a class="leading-relaxed block font-medium py-2 hover:text-heading pointer-events-none"
                        href="/">Health Coaching<span
                          class="inline-flex justify-center items-center leading-none text-white bg-primary pt-1 px-2 pb-[3px] text-[11px] rounded-sm ml-2.5 font-bold tracking-wide uppercase">coming
                          soon</span></a>
                    </li>
                    <li class="relative">
                      <a class="leading-relaxed block font-medium py-2 hover:text-heading pointer-events-none"
                        href="/">Gym Coaching<span
                          class="inline-flex justify-center items-center leading-none text-white bg-primary pt-1 px-2 pb-[3px] text-[11px] rounded-sm ml-2.5 font-bold tracking-wide uppercase">coming
                          soon</span></a>
                    </li>
                    <li class="relative">
                      <a class="leading-relaxed block font-medium py-2 hover:text-heading pointer-events-none"
                        href="/">Business<span
                          class="inline-flex justify-center items-center leading-none text-white bg-primary pt-1 px-2 pb-[3px] text-[11px] rounded-sm ml-2.5 font-bold tracking-wide uppercase">coming
                          soon</span></a>
                    </li>
                    <li class="relative">
                      <a class="leading-relaxed block font-medium py-2 hover:text-heading pointer-events-none"
                        href="/">Artist<span
                          class="inline-flex justify-center items-center leading-none text-white bg-primary pt-1 px-2 pb-[3px] text-[11px] rounded-sm ml-2.5 font-bold tracking-wide uppercase">coming
                          soon</span></a>
                    </li>
                    <li class="relative">
                      <a class="leading-relaxed block font-medium py-2 hover:text-heading pointer-events-none"
                        href="/">Kitchen Coach<span
                          class="inline-flex justify-center items-center leading-none text-white bg-primary pt-1 px-2 pb-[3px] text-[11px] rounded-sm ml-2.5 font-bold tracking-wide uppercase">coming
                          soon</span></a>
                    </li>
                    <li class="relative">
                      <a class="leading-relaxed block font-medium py-2 hover:text-heading pointer-events-none"
                        href="/">Motivation<span
                          class="inline-flex justify-center items-center leading-none text-white bg-primary pt-1 px-2 pb-[3px] text-[11px] rounded-sm ml-2.5 font-bold tracking-wide uppercase">coming
                          soon</span></a>
                    </li>
                  </ul>
                </div>
                <div class="px-3.8 shrink-0 grow-0 w-1/2 basis-1/2">
                  <h2 class="sr-only">Banner</h2>
                  <a href="/"><img src="/images/menu/mega-menu.jpg" alt="Banner" /></a>
                </div>
              </div>
            </li>
            <li class="inline-block px-2.5 2xl:px-[17px] py-[29px] group relative" role="none">
              <a rel="noopener noreferrer"
                class="font-medium 2xl:text-[16px] flex items-center leading-snug text-secondary dark:text-white"
                href="#!" id="nav-2" role="menuitem" tabindex="0" aria-haspopup="true" aria-expanded="false">Pages<i
                  class="fa fa-chevron-down ml-2 text-xs"></i></a>
              <ul
                class="absolute z-20 top-full left-0 w-60 mt-5 py-4 transition-all duration-400 bg-white border-b-4 border-b-primary shadow-2md shadow-black/5 visible opacity-0 pointer-events-none group-hover:visible group-hover:opacity-100 group-hover:mt-0 group-hover:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-focus-within:mt-0 group-focus-within:pointer-events-auto dark:bg-[#161821] text-secondary dark:text-white"
                role="menu">
                <li role="none" class="relative">
                  <a class="flex items-center px-7.5 py-2" role="menuitem" href="/about/aboutme">About me</a>
                </li>

              </ul>
            </li>
            <li class="inline-block px-2.5 2xl:px-[17px] py-[29px] group relative" role="none">
              <a rel="noopener noreferrer"
                class="font-medium 2xl:text-[16px] flex items-center leading-snug text-secondary dark:text-white"
                href="#!" id="nav-3" role="menuitem" tabindex="0" aria-haspopup="true" aria-expanded="false">Courses<i
                  class="fa fa-chevron-down ml-2 text-xs"></i></a>
              <ul
                class="absolute z-20 top-full left-0 w-60 mt-5 py-4 transition-all duration-400 bg-white border-b-4 border-b-primary shadow-2md shadow-black/5 visible opacity-0 pointer-events-none group-hover:visible group-hover:opacity-100 group-hover:mt-0 group-hover:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-focus-within:mt-0 group-focus-within:pointer-events-auto dark:bg-[#161821] dark:text-white"
                role="menu">
                <li role="none" class="relative">
                  <a class="flex items-center px-7.5 py-2" role="menuitem" href="/courses/coursegridone">All Courses</a>
                </li>
                <li role="none" class="relative">
                  <a class="flex items-center text-secondary px-7.5 py-2" role="menuitem"
                    href="/courses/membership">Membership Levels</a>
                </li>
                <li role="none" class="relative">
                  <a class="flex items-center text-secondary px-7.5 py-2" role="menuitem"
                    href="/courses/becomeateacher">Become a Teacher</a>
                </li>
                <li role="none" class="relative">
                  <a class="flex items-center text-secondary px-7.5 py-2" role="menuitem"
                    href="/courses/profile">Profile</a>
                </li>
              </ul>
            </li>
            <li class="inline-block px-2.5 2xl:px-[17px] py-[29px] group relative" role="none">
              <a rel="noopener noreferrer"
                class="font-medium 2xl:text-[16px] flex items-center leading-snug text-secondary dark:text-white"
                href="#!" id="nav-4" role="menuitem" tabindex="0" aria-haspopup="true" aria-expanded="false">Event<i
                  class="fa fa-chevron-down ml-2 text-xs"></i></a>
              <ul
                class="absolute z-20 top-full left-0 w-60 mt-5 py-4 transition-all duration-400 bg-white border-b-4 border-b-primary shadow-2md shadow-black/5 visible opacity-0 pointer-events-none group-hover:visible group-hover:opacity-100 group-hover:mt-0 group-hover:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-focus-within:mt-0 group-focus-within:pointer-events-auto dark:bg-[#161821] text-secondary dark:text-white"
                role="menu">
                <li role="none" class="relative">
                  <a class="flex items-center px-7.5 py-2" role="menuitem" href="/event/events">Event</a>
                </li>
                <li role="none" class="relative">
                  <a class="flex items-center px-7.5 py-2" role="menuitem" href="/event/zoommeetings">Zoom Meetings</a>
                </li>
              </ul>
            </li>
            <li class="inline-block px-2.5 2xl:px-[17px] py-[29px] group relative" role="none">
              <a rel="noopener noreferrer"
                class="font-medium 2xl:text-[16px] flex items-center leading-snug text-secondary dark:text-white"
                href="#!" id="nav-5" role="menuitem" tabindex="0" aria-haspopup="true" aria-expanded="false">Blog<i
                  class="fa fa-chevron-down ml-2 text-xs"></i></a>
              <ul
                class="absolute z-20 top-full left-0 w-60 mt-5 py-4 transition-all duration-400 bg-white border-b-4 border-b-primary shadow-2md shadow-black/5 visible opacity-0 pointer-events-none group-hover:visible group-hover:opacity-100 group-hover:mt-0 group-hover:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-focus-within:mt-0 group-focus-within:pointer-events-auto dark:bg-[#161821] text-secondary dark:text-white"
                role="menu">
                <li role="none" class="relative">
                  <a class="flex items-center px-7.5 py-2" role="menuitem" href="/blog/bloggrid">Blog Grid</a>
                </li>
                <!-- <li role="none" class="relative">
                  <a
                    class="
                      flex
                      items-center
                      text-secondary
                      px-7.5
                      py-2
                    "
                    role="menuitem"
                    href="/event/events"
                    >Blog Grid Sidebar</a
                  >
                </li> -->
                <li role="none" class="relative">
                  <a class="flex items-center px-7.5 py-2" role="menuitem" href="/blog/blogclassic">Blog Classic</a>
                </li>
                <!-- <li role="none" class="relative">
                  <a
                    class="
                      flex
                      items-center
                      text-secondary
                      px-7.5
                      py-2
                    "
                    role="menuitem"
                    href="/blogs/blog-list"
                    >Blog List</a
                  >
                </li> -->
              </ul>
            </li>
            <li class="inline-block px-2.5 2xl:px-[17px] py-[29px] group" role="none">
              <a class="font-medium 2xl:text-[16px] flex items-center leading-snug text-secondary dark:text-white"
                id="nav-6" role="menuitem" tabindex="0" href="/contactus">Contact Us</a>
            </li>
          </ul>
        </nav>

        <div class="flex justify-end items-center">
          <div class="inline-block px-2.5 py-1.5 dark:text-white text-dark-50">
            <div @click="setDarkMode(false)">
              <svg v-show="darkMode" class="feather feather-sun" stroke-linejoin="round" stroke-linecap="round"
                stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24"
                xmlns="http://www.w3.org/2000/svg" alt="light icon">
                <circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="5"></circle>
                <line xmlns="http://www.w3.org/2000/svg" x1="12" y1="1" x2="12" y2="3"></line>
                <line xmlns="http://www.w3.org/2000/svg" x1="12" y1="21" x2="12" y2="23"></line>
                <line xmlns="http://www.w3.org/2000/svg" x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line xmlns="http://www.w3.org/2000/svg" x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line xmlns="http://www.w3.org/2000/svg" x1="1" y1="12" x2="3" y2="12"></line>
                <line xmlns="http://www.w3.org/2000/svg" x1="21" y1="12" x2="23" y2="12"></line>
                <line xmlns="http://www.w3.org/2000/svg" x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line xmlns="http://www.w3.org/2000/svg" x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            </div>
            <i @click="setDarkMode(true)" v-show="!darkMode" class="far fa-moon text-lg"></i>
            <!-- <i @click="setDarkMode(false)" v-show="darkMode" class="far fa-sunrise text-lg"></i> -->
          </div>

          <a class="inline-block px-2.5 py-1.5 text-dark-50 dark:text-white" aria-label="User Profile" href="/profile"><i
              class="far fa-user-circle text-lg"></i></a>

          <div class="hidden md:block md:max-w-[250px] md:pl-2.5">
            <form class="relative">
              <label for="search" class="sr-only">Search For</label><input type="text"
                class="form-control block w-full h-14 rounded py-[0.188rem] px-5 text-base text-body border border-gray-200 dark:border-gray-500 placeholder-body focus:shadow-none focus:outline-0 focus:text-body focus:bg-white focus:border-primary bg-gray-200 max-h-[48px] pr-[50px] dark:bg-black dark:text-white"
                id="search" name="search" placeholder="Search..." value="" /><button type="submit" aria-label="Search"
                class="absolute right-0 top-0 w-12 h-12 rounded-tr rounded-br transition-colors text-primary flex justify-center items-center hover:bg-primary hover:text-white">
                <i class="fas fa-search"></i>
              </button>
            </form>
          </div>
          <div class="md:hidden overflow-hidden">
            <button type="button" class="inline-block px-2.5 py-1.5 md:hidden text-dark-50" aria-label="Search Toggle">
              <i class="far fa-search text-lg"></i>
            </button>
          </div>
          <button aria-label="Toggle Menu" type="button" class="toggle group pl-5 xl:hidden">
            <i
              class="icon-top relative block overflow-hidden w-6 h-0.5 before:absolute before:content-[''] before:top-0 before:left-0 before:flex-100 before:w-full before:h-full before:scale-x-[1px] before:transition-transform before:duration-600 before:ease-in-expo after:absolute after:content-[''] after:top-0 after:left-0 after:flex-100 after:w-full after:h-full after:scale-x-0 after:transition-transform after:duration-600 after:ease-in-expo before:origin-right after:origin-left group-hover:before:scale-x-0 group-hover:before:transition-transform group-hover:before:duration-600 group-hover:before:ease-in-expo group-hover:after:scale-x-[1px] group-hover:after:transition-transform group-hover:after:duration-600 group-hover:after:delay-200 group-hover:after:ease-in-expo before:bg-dark group-hover:before:bg-primary after:bg-dark group-hover:before:bg-primary"></i><i
              class="icon-middle mt-1.5 relative block overflow-hidden w-6 h-0.5 before:absolute before:content-[''] before:top-0 before:left-0 before:flex-100 before:w-full before:h-full before:scale-x-[1px] before:transition-transform before:duration-600 before:ease-in-expo after:absolute after:content-[''] after:top-0 after:left-0 after:flex-100 after:w-full after:h-full after:scale-x-0 after:transition-transform after:duration-600 after:ease-in-expo before:origin-left after:origin-right group-hover:before:scale-x-0 group-hover:before:transition-transform group-hover:before:duration-600 group-hover:before:ease-in-expo group-hover:after:scale-x-[1px] group-hover:after:transition-transform group-hover:after:duration-600 group-hover:after:delay-200 group-hover:after:ease-in-expo before:bg-dark group-hover:before:bg-primary after:bg-dark group-hover:before:bg-primary"></i><i
              class="icon-bottom mt-1.5 relative block overflow-hidden w-6 h-0.5 before:absolute before:content-[''] before:top-0 before:left-0 before:flex-100 before:w-full before:h-full before:scale-x-[1px] before:transition-transform before:duration-600 before:ease-in-expo after:absolute after:content-[''] after:top-0 after:left-0 after:flex-100 after:w-full after:h-full after:scale-x-0 after:transition-transform after:duration-600 after:ease-in-expo before:origin-right after:origin-left group-hover:before:scale-x-0 group-hover:before:transition-transform group-hover:before:duration-600 group-hover:before:ease-in-expo group-hover:after:scale-x-[1px] group-hover:after:transition-transform group-hover:after:duration-600 group-hover:after:delay-200 group-hover:after:ease-in-expo before:bg-dark group-hover:before:bg-primary after:bg-dark group-hover:before:bg-primary"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="h-20"></div>
  </header>
</template>

<script setup>
import { useStyleStore } from "@/stores/style";
import { storeToRefs } from "pinia";
const styleStore = useStyleStore();
const { darkMode } = storeToRefs(styleStore);
const { setDarkMode } = styleStore;
</script>

<style>
.header-inner {
  min-height: 80px;
}

.header-section.header-shadow .header-inner {
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.05);
}
</style>
