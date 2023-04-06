<template>
  <div>
    <div class="w-full">
      <div class="flex justify-center">
        <button
          class="
            flex
            justify-center
            items-center
            text-[#20ad96] text-[14px]
            font-bold
            py-3
            px-20
            rounded-md
            border
            dark:border-white
            shadow
          "
        >
          Load More
          <i class="fa fa-ramp-loading h-5 w-5"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
data(){
    return{}
},


}
</script>

<style>
button::after {
  content: "";
}
</style>