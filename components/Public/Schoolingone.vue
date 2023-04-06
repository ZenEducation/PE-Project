<template>
  <div>
    <div
      class="bg-[#111] h-auto w-12/12 flex justify-center content-center items-center p-2 md:p-10 xl:p-20"
    >
      <div class="w-12/12 grid grid-cols-1 md:grid-cols-2 items-center">
        <div>
          <div class="p-3 mb-[30px] text-center md:text-left">
            <h1 class="landingtext text-[40px] md:text-[48px] text-white">
              Complete Your Dreams in<br />
              Java Programming
            </h1>
            <p class="text-[16px] lg:text-[18px] text-[#ddd] w-10/12 mx-2">
              Learn any coding program in distance and for a reasonable fee. You
              don't have to struggle alone, you've got our assistance and help.
            </p>

            <span>
              <button class="flex items-center">
                <Icon class="icon mr-3" name="uil:download-alt" />
                Download free E-book
              </button>
            </span>
          </div>
        </div>

        <div class="w-12/12 flex items-center justify-center lg:justify-end">
          <!-- ? -->
          <div
            class="col max-mb-30 scene"
            style="
              transform: translate3d(0px, 0px, 0px) rotate(0.0001deg);
              transform-style: preserve-3d;
              backface-visibility: hidden;
              position: relative;
              pointer-events: none;
            "
          >
            <div
              class="intro5-image"
              data-depth="0.4"
              style="
                transform: translate3d(10.4px, -11.4px, 0px);
                transform-style: preserve-3d;
                backface-visibility: hidden;
                position: relative;
                display: block;
                left: 0px;
                top: 0px;
              "
            >
              <img
                src="/images/intro/intro5/home-5-hero-image.png"
                alt="hero"
              />
            </div>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon {
  color: white;
}
.rot {
  transform: rotate(180deg);
}

h5 {
  font-weight: 700;
  line-height: 2;
  display: block;
  margin-bottom: 18px;
  letter-spacing: 4px;
  text-transform: uppercase;
}

h1 {
  font-weight: 700;
  line-height: 1.13;
  margin-bottom: 8px;
}

p {
  color: #ddd;
  font-weight: 500;
  line-height: 1.67;
}

button {
  display: flex;
  background: #20ad96;
  padding: 0px 20px;
  color: white;
  font-size: 14px;
  font-weight: 700;
  line-height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  margin-top: 28px;
}

button:hover {
  background: #3f3a64;
}
</style>