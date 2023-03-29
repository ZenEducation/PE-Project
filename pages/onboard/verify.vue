<template>
    <div class="w-12/12">
        <div class="pt-[100px] bg-[#111]">
            <div class="text-center flex flex-col justify-center items-center pb-[100px]">
                <div class="text-[34px] font-bold text-white mb-[30px] leading-[1.3]">
                    We are getting you all set up just one step before we verify you </div>
                <button @click="verify"
                    class="text-[14px] text-white font-bold px-20 py-4 bg-[#20ad96] hoverr:bg-[#3F3A64] rounded-md">
                    Verify
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>

definePageMeta({
    layout: 'frontend',
})
const router = useRouter()
function verify() {
    router.push({ path: '/onboard/detailed-requirement' })
}
</script>
