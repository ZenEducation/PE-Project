<template>
  <div class="p-3 mb-4 text-center md:text-left">
    <h5 class="landingtext text-[13px] xl:text-[15px]">
      MaxCoach is the lifebuoy
    </h5>
    <h1 class="landingtext text-[40px] md:text-[48px] lg:text-[63px]">
      In Mentoring <br />
      2B a Better You.
    </h1>
    <p class="text-[16px] lg:text-[18px]">
      The right mentoring relationship can be a powerful tool for professional
      growth. Bark up the right tree.
    </p>

    <span>
      <button>Download free guide</button>
    </span>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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
  color: #696969;
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