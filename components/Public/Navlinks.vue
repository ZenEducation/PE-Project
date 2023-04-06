<template>
  <div>
    <div>
      <ul>
        <li>
          <p>Home</p>
          <icon class="icon" name="uil:angle-down" />
        </li>
        <li>
          <p>Pages</p>
          <icon class="icon" name="uil:angle-down" />
        </li>
        <li>
          <p>Courses</p>
          <icon class="icon" name="uil:angle-down" />
        </li>
        <li>
          <p>Event</p>
          <icon class="icon" name="uil:angle-down" />
        </li>
        <li>
          <p>Blogs</p>
          <icon class="icon" name="uil:angle-down" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
ul {
  display: flex;
}

li {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  margin: 2px;
  color: white;
  padding: 28px 12px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

ul li:hover {
  color: #20c997;
}
</style>