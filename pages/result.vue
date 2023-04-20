<script lang="ts" setup>
const counterStore = quizCounter();
counterStore.resetCount();
const answerStore = quizeAnswer();
const { answerState } = answerStore;
console.log(answerState.value.answer);

onBeforeRouteLeave((to, from) => {
  answerStore.resetAnswer();
  console.log('leave')

});
</script>
<template>
  <div>
    <ul>
      <li v-for="(answer, index) in answerState.answer" :key="answer[0]">
        <div class="index">{{ index + 1 }}問目</div>
        <div class="question">{{ answer[0] }}</div>
        <div class="answer">{{ answer[1] }}</div>
      </li>
    </ul>
    <NuxtLink to="/" class="btn">スタート画面に戻る</NuxtLink>
  </div>
</template>
<style lang="scss" scoped>
@import '~/assets/scss/result.scss';
</style>