<template>
  <div class="py-[100px]">
    <div class="flex flex-col md:flex-row gap-8 items-center">
      <div class="lg:mr-6 flex-1">
        <img
          class="w-12/12 md:10/12"
          src="/images/profile/profile.jpeg"
          alt="profile"
        />
      </div>

      <div class="flex-1">
        <h2 class="mt-10 lg:mt-0">Maggie Strickland</h2>
        <p>/Advanced Educator</p>
        <p>
          Maggie is a brilliant educator, whose life was spent for computer
          science and love of nature. Being a female, she encountered a lot of
          obstacles and was forbidden to work in this field by her family. With
          a true spirit and talented gift, she was able to succeed and set an
          example for others.
        </p>

        <h2 class="text-[18px] mt-[36px] mb-[10px] font-bold">Contact</h2>
        <div class=""></div>
        <p>Phone number: <span class="font-bold">(+88) - 1990 - 8668</span></p>
        <p>Email: <span class="font-bold">example@gmail.com</span></p>

        <div class="flex items-center mt-5">
          <span class="span"><icon name="uil:twitter" /></span>
          <span class="span"><icon name="uil:facebook-f" /></span>
          <span class="span"><icon name="uil:instagram" /></span>
          <span class="span"><icon name="uil:parking-circle" /></span>
          <span class="span"><icon name="uil:youtube" /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.span {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 8px;
  margin: 0px 4px;
  line-height: 40px;
  border: 1px solid #ededed;
  border-radius: 50%;
  text-align: center;
}

h2 {
  font-size: 30px;
  line-height: 1.3;
  font-weight: 700;
  margin-bottom: 18px;
  color: #ffffff;
}

p {
  font-size: 15px;
  line-height: 1.74;
  font-weight: 400;
  color: #ddd;
}
</style>