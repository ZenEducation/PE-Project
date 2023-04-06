<template>
  <div class="flex justify-center items-center">
    <div class="px-[6px]">
      <Icon class="icon w-8 h-8" name="uil:sun" />
    </div>
    <div class="py-[6px] px-[10px]">z
      <icon class="icon w-6 h-6" name="uil:user-circle" />
    </div>
    <div
      class="
        flex
        items-center
        h-[52px]
        bg-[#222]
        rounded-md
        border-[1px] border-[#333]
        relative
        px-[12px]
      "
    >
      <input
        type="search"
        name="searchinput"
        placeholder="Search..."
        class="bg-[#222] w-[230px] pl-2 placeholder:font-light"
      />
      <button
        class="
          absolute
          right-0
          top-0
          bottom-0
          h-[100%]
          w-[48px]
          bg-[#222]
          hover:bg-[#20c997]
          rounded-r-md
          hover:text-white
        "
      >
        <icon class="w-4 h-4 text-[#20c997]" name="uil:search" />
      </button>
    </div>
  </div>
</template>
 
<style>
.icon:hover {
  color: #20c997;
  transition: all 0.5s ease-in-out;
}

input {
  text-decoration: none;
  outline: none;
  color: white;
  appearance: none;
}
</style>