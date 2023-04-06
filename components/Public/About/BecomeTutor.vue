<template>
  <div>
    <div class="card">
      <div class="front">
        <h2>Become a Tutor</h2>
      </div>
      <div class="back">
        <h2>Want to Become a Instructor?</h2>
        <p>Enjoy the convenience and the joy of teaching online from anywhere in the world.
          Join thousands of expert instructors and help revolutionize this day's education with Paathshala!</p>
        <button><NuxtLink to="/about/become_instructor">Get Started Now</NuxtLink></button>
      </div>
    </div>
  </div>
</template>
<style>
.card {
  width: 100%;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s;

}

.card:hover {
  transform: rotateY(180deg);
}

.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.front {
  background-color: #ab2330;
  color: white;
}

.front h2 {
  font-size: 30px;
}

.back h2 {
  font-size: 25px;
}
.back p {
  font-size: 20px;
  margin: 0 20rem;
  text-align: center;
}

.back button{
  border: 2px white solid;
  padding: 10px;
  background-color: #3f3a64;
  border-radius: 10px;
}

.back button:hover{
  background-color: #ab2330;
}

.back {
  background-color: #20ad96;
  transform: rotateY(180deg);
  color: white;
}
</style>