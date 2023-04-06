<template>
  <div class="padding-responsive blue pt-[100px]">
    <div>
      <headers class="text-center">
        <template v-slot:headerone
          ><div class="text-[#6ac5f1] normal-case tracking-normal">
            Testimonials
          </div></template
        >
        <template v-slot:headertwo><div>Why do people love me?</div></template>
      </headers>
    </div>

    <div class="py-[50px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <div
        v-for="message in messages"
        :key="message.name"
        class="relative rounded-md bg-[#111] px-[50px] pt-[41px] pb-[36px] w-full xl:max-w-[372px] mr-[30px] mb-[30px]"
      >
        <div class="absolute right-[40px] top-[30px] rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="50px"
            height="40px"
            viewBox="0 0 50 40"
            fill="#FFF0F0"
          >
            <path
              d="M21.8750977,2.18046875 C22.4503906,2.18046875 22.9167969,1.7140625 22.9167969,1.13876953 C22.9167969,0.563476562 22.4503906,0.0970703125 21.8750977,0.0970703125 C9.79960938,0.110839844 0.0138671875,9.89658203 2.76635467e-06,21.9720703 L2.76635467e-06,28.2220703 C-0.01796875,34.56875 5.11230469,39.728418 11.4588867,39.7465793 C17.8055664,39.7645508 22.9652344,34.6342773 22.9833957,28.2876953 C23.0013672,21.9410156 17.8710938,16.7813477 11.5245117,16.7632813 C7.77705078,16.7526367 4.25966797,18.5698242 2.10009766,21.6325195 C2.29296875,10.8446289 11.0853516,2.19580078 21.8750977,2.18046875 Z"
            ></path>
            <path
              d="M38.5416992,16.7638672 C34.8157227,16.7667969 31.3244141,18.5832031 29.1833984,21.6326172 C29.3763672,10.8446289 38.16875,2.19580078 48.9583984,2.18056641 C49.5336914,2.18056641 50.0000977,1.71416016 50.0000977,1.13886719 C50.0000977,0.563574219 49.5336914,0.0971679688 48.9583984,0.0971679688 C36.8829102,0.1109375 27.097168,9.89667969 27.0833984,21.972168 L27.0833984,28.222168 C27.0833984,34.5503906 32.2134766,39.6804687 38.5416992,39.6804687 C44.8699219,39.6804687 50.0000977,34.5503906 50.0000977,28.222168 C50.0000977,21.8939453 44.8700195,16.7638672 38.5416992,16.7638672 Z"
            ></path>
          </svg>
        </div>
        <h4 class="mb-[15px] text-[20px] text-white leading-[1.6] font-bold">
          {{ message.title }}
        </h4>
        <p
          class="mb-[15px] text-[18px] text-[#dddddd] leading-[1.67] font-[500] italic"
        >
          {{ message.comment }}
        </p>

        <div class="flex items-center pt-[40px]">
          <img
            class="rounded-[50%] mr-[20px]"
            src="/images/testimonial/70/testimonial-1.jpeg"
            alt="Florence Themes"
          />
          <div class="flex flex-col">
            <span class="uppercase text-[15px] tracking-[1px] text-white">{{
              message.name
            }}</span>
            <span class="text-[14px] tracking-[1px] text-[#8C89A2] mt-[10px]">{{
              message.job
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data (){
        return {
            messages: [
                {
                    title: 'Great Quality!',
                    comment: "I'm CEO of Mina Kitchen Coach, I made my website by MaxCoach and I love that. The support team is helpful &amp; nice.",
                    image: '',
                    name: 'mina hollace',
                    job: '/CEO'
                },
                    {
                    title: 'Code Quality',
                    comment: 'Thanks for always keeping MaxCoach theme up to date. Your level of support and dedication is second to none.',
                    image: '',
                    name: 'madley pondor',
                    job: '/IT Specialist'
                },
                    {
                    title: ' Customer Support',
                    comment: 'Deserves 5 star for theme’s features, design quality, flexibility, customizability and support service!',
                    image: '',
                    name: 'luvic dubble',
                    job: '/Private Tutor'
                }
            ]
        }
    }
}
</script>


<h4 class="title"></h4>

__