<template>
  <div class="bg-[#161821] w-12/12">
    <div class="h-[100vh] relative flex justify-center items-center">
      <div
        class="overlay absolute top-0 bottom-0 left-0 right-0 w-full h-full py-[100px]"
      ></div>

      <div class="absolute w-full px-24">
        <h2
          class="text-[15px] uppercase text-center text-white font-bold tracking-[4px] mb-7"
        >
          DECEMBER 25
        </h2>
        <courseheader class="mb-5">
          <template #title>International Art Fair 2023</template>
        </courseheader>

        <div class="w-full flex justify-center items-center">
          <ul class="pro-countdown-1">
            <li>
              <span id="days" class="text-[28px] md:text-[56px]"></span>
              Days
            </li>
            <li>
              <span id="hours" class="text-[28px] md:text-[56px]"></span>
              Hours
            </li>
            <li>
              <span id="minutes" class="text-[28px] md:text-[56px]"></span>
              Mins
            </li>
            <li>
              <span id="seconds" class="text-[28px] md:text-[56px]"></span>
              Secs
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="px-5 py-24 lg:px-[100px]">
      <div class="pb-[60px]">
        <courseheader class="mb-5">
          <template #title>About The Event</template>
        </courseheader>

        <div
          class="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <div class="detail">
            <icon class="icon w-5 h-5 mr-1" name="uil:map-marker" />
            <p>Hamburg, Germany</p>
          </div>

          <div class="detail">
            <icon class="icon w-5 h-5 mr-1" name="uil:calender" />
            <p>Nov 23, 2020</p>
          </div>

          <div class="detail">
            <icon class="icon w-5 h-5 mr-1" name="uil:clock" />
            <p>2:00 pm - 4:00 pm</p>
          </div>
        </div>
      </div>

      <div class="relative flex flex-col md:flex-row gap-4 lg:gap-10">
        <div class="w-12/12 md:w-8/12 h-[85vh] pb-10 md:pb-0">
          <iframe
            class="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2136.986005919501!2d-73.9685579655238!3d40.75862446708152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e4a1c884e5%3A0x24fe1071086b36d5!2sThe%20Atrium!5e0!3m2!1sen!2sbd!4v1585132512970!5m2!1sen!2sbd"
          ></iframe>
          <div class="text-white flex justify-center items-center py-4">
            <icon class="icon w-5 h-5 mr-1" name="uil:map-marker" />
            Betahaus Hamburg Schanze, Eifflerstraße 43
          </div>
        </div>
        <div>
          <eventsidebar />
        </div>
      </div>

      <div class="py-12">
        <eventdetailstext />
      </div>
    </div>

    <div class="px-5 py-24 lg:mx-[100px] border-y-[0.3px] border-[#696969]">
      <div class="">
        <courseheader class="mb-5">
          <template #title>Our Speakers</template>
        </courseheader>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-center items-center text-white text-center"
        >
          <div
            v-for="speaker in speakers"
            :key="speaker.name"
            class="flex flex-col justify-center items-center lg:mr-[30px] mb-10"
          >
            <img
              class="min-w-[150px] min-h-[150px] rounded-full mb-[28px]"
              src="/images/speaker/speaker-6.jpg"
              alt="speaker"
            />
            <div>
              <h6 class="mb-[6px]">{{ speaker.name }}</h6>
              <p>{{ speaker.description }}</p>
            </div>
          </div>
        </div>

        <div class="speakertext">
          Register online, get your ticket, meet up with our inspirational
          speakers and specialists in the field to share your ideas.
        </div>
      </div>
    </div>

    <div
      class="px-5 py-24 lg:mx-[100px] w-12/12 flex flex-col justify-center items-center"
    >
      <courseheader class="mb-20">
        <template #title>Leave your thought here</template>
      </courseheader>

      <form class="w-12/12 md:w-8/12" @submit.prevent="submitform">
        <div
          class="flex flex-col md:flex-row justify-between items-center w-12/12 mb-2"
        >
          <input
            id=""
            v-model="registration.name"
            class="inputstyle w-full md:w-6/12 mb-4 md:mb-0 md:mr-2"
            type="text"
            placeholder="Your Name"
          />
          <input
            id=""
            v-model="registration.email"
            class="inputstyle w-full md:w-6/12 md:ml-2"
            type="email"
            placeholder="Email"
          />
        </div>

        <textarea
          v-model="registration.message"
          class="inputstyle w-full text-white my-2 min-h-[220px]"
          placeholder="Your Mesage"
        ></textarea>

        <div class="check">
          <input
            id="comment-cookies-consent"
            class="w-4 h-4 bg-white mr-1"
            name="comment-cookies-consent"
            type="checkbox"
            value="yes"
          />

          <label for="comment-cookies-consent" class="text-[#ddd]">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>

        <div class="w-full flex justify-center">
          <button
            class="text-[14px] text-white font-bold px-12 py-4 bg-[#20ad96] rounded-md mt-12"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'frontend',
    data() {
      return {
        registration: { name: '', email: '', message: '' },

        speakers: [
          {
            image: '',
            name: 'Solomon',
            description: '/Designer',
          },
          {
            image: '',
            name: 'Emerson',
            description: '/Developer',
          },
          {
            image: '',
            name: 'Bellezza',
            description: '/Content Writer',
          },
          {
            image: '',
            name: 'Lilybelle',
            description: '/Office Manager',
          },
          {
            image: '',
            name: 'Lucinda',
            description: '/Manager',
          },
        ],
      }
    },

    mounted() {
      const sec = 1000
      const min = sec * 60
      const hour = min * 60
      const day = hour * 24
      const end = new Date('Dec 25, 2023').getTime()
      setInterval(() => {
        const current = new Date().getTime()
        const remaining = end - current
        const day2 = Math.floor(remaining / day)
        const hour2 = Math.floor((remaining % day) / hour)
        const minute = Math.floor((remaining % hour) / min)
        const second = Math.floor((remaining % min) / sec)
        document.getElementById('days').innerText = day2 > 9 ? day2 : `0${day2}`
        document.getElementById('hours').innerText =
          hour2 > 9 ? hour2 : `0${hour2}`
        document.getElementById('minutes').innerText =
          minute > 9 ? minute : `0${minute}`
        document.getElementById('seconds').innerText =
          second > 9 ? second : `0${second}`
      }, 1000)
    },

    methods: {
      submitform() {
        console.log('Registration', this.registration)
      },
    },
  }
</script>

<style scoped>
  .check {
    margin-top: 30px;
    color: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .speakertext {
    color: #dddddd;
    width: 80%;
    text-align: center;
    font-size: 18px;
    line-height: 1.67;
    width: 630px;
    max-width: 100%;
    text-align: center;
    margin: 54px auto 0;
  }

  ul li {
    list-style: none;
    display: flex;
    flex-direction: column;
    flex: 1 1 0;
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #fff;
    padding: 10px;
  }

  ul li #days,
  ul li #hours,
  ul li #minutes,
  ul li #seconds {
    line-height: 1.15;
    font-weight: 400;
    color: #ffffff;
    margin-bottom: 20px;
  }

  .overlay {
    background-image: url('/images/page-banner/artist-event.jpg');
  }

  .overlay::before {
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
  }

  .detail {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #dddddd;
    margin: 0px 10px;
    font-size: 15px;
    font-weight: 400;
    font-style: normal;
    line-height: 1.74;
  }

  .icon {
    color: #20ad96;
  }
</style>
