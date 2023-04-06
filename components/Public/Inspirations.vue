<template>
  <div class="w-12/12 mx-[100px]">
    <headers class="flex flex-col items-center justify-center text-center">
      <template v-slot:headerone>The guys behind the curtains</template>
      <template v-slot:headertwo>
        <div class="text-[48px]">
          Whose
          <span class="text-[#20AD96] font-[400]">Inspirations</span>
          You Love
        </div>
      </template>
    </headers>

    <div class="grid grid-cols-2 md:grid-cols-3 mt-14">
      <div
        v-for="speaker in speakers"
        :key="speaker.name"
        class="max-w-[350px]"
      >
        <div>
          <div @mouseover="show = !show" class="relative flex justify-center">
            <img
              class="img-fluid"
              src="/images/team/350/team-member-01.jpg"
              alt="Merrie Lewis Thumbnail"
            />

            <Transition>
              <div
                v-if="show"
                class="w-10/12 mx-4 bg-white py-2 absolute bottom-6 flex justify-center"
              >
                <icon class="socials" name="uil:facebook-f" />
                <icon class="socials" name="uil:twitter" />
                <icon class="socials" name="uil:instagram" />
                <icon class="socials" name="uil:youtube" />
              </div>
            </Transition>
          </div>

          <div class="text-center pt-10">
            <div class="font-bold text-[24px] text-white leading-[1.3]">
              {{ speaker.name }}
            </div>
            <div class="text-[15px] mt-[8px] text-[#ddd]">
              {{ speaker.job }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-0 pt-0">
      <aboutmail />
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{

          show: false,

            speakers:[
                {
                    name: 'Merrie Lewis',
                    job: 'General Director'
                },
                 {
                    name: 'Mariana Buenos',
                    job: 'CEO & Chief Manager'
                },
                 {
                    name: 'Parks Missie',
                    job: 'Course Researcher'
                },
                 {
                    name: 'Merrie Lewis',
                    job: 'General Director'
                },
                 {
                    name: 'Merrie Lewis',
                    job: 'General Director'
                },
                 {
                    name: 'Merrie Lewis',
                    job: 'General Director'
                },
                 {
                    name: 'Merrie Lewis',
                    job: 'General Director'
                },
            ]
        }
    }
}
</script>

<style>
.socials {
  color: #696969;
  margin: 0px 10px;
  transition: all 0.3s ease-in-out;
}

.socials:hover {
  color: #20ad96;
}
</style>