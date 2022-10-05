<template>
  <div>
    <div>
      <section>
        <div></div>
        <div></div>
        <div></div>
      </section>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
section {
  justify-content: center;;
  display: flex;
  width: 100%;
  background-color: brown;

  > div {
    margin: 15px 0;
    flex-basis: 250px;
    height: 150px;
    background: rgb(255, 255, 0);
  }
  div:nth-child(2) {
    margin: 15px 15px;

  }
}
</style>
