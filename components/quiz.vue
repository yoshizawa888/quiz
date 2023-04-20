<script lang="ts" setup>
import quizJson from '~/assets/quiz.json';

let random = Math.floor(Math.random() * quizJson.length);
const choiseQuiz = ref(quizJson[random]);
const selectedAnswer = ref<string>();

const counterStore = quizCounter();
const { coutntState } = counterStore;
const answerStore = quizeAnswer();
const { answerState } = answerStore;

let quizArray: Array<number> = [];

const router = useRouter();

const amswerClick = () => {
  console.log(coutntState.value.count);
  if (coutntState.value.count < 2) {
    quizArray.push(random);

    let fl = false;
    while (fl === false) {
      random = Math.floor(Math.random() * quizJson.length);
      fl = quizArray.includes(random) ? false : true;
    }
    choiseQuiz.value = quizJson[random];

  } else {
    router.push({ path: '/result' });
  }
}

const checkAnswer = () => {
  // answerStore.pushStatementr(choiseQuiz.value.question);
  const counter = coutntState.value.count;
  // console.log(answerState.value);
  // console.log(counter);
  if (selectedAnswer.value === choiseQuiz.value.answer) {
    console.log('正解');
    answerStore.pushAnswer(counter, choiseQuiz.value.question, '正解');
  } else {
    console.log('不正解');
    answerStore.pushAnswer(counter, choiseQuiz.value.question, '不正解');
  }
  counterStore.countUp();
  selectedAnswer.value = undefined;
}
</script>
<template>
  <div class="quiz-wrap">
    <client-only>
      <p class="quiz-statement">{{ choiseQuiz.question }}</p>
      <ul>
        <li v-for="(choice, index) in choiseQuiz.choices">
          <input type="radio" :id="'choice' + index" :value="choice" v-model="selectedAnswer">
          <label :for="'choice' + index">
            {{ choice }}
          </label>
        </li>
      </ul>
      <!-- <p>{{ selectedAnswer }}</p> -->
      <button class="btn" @click="checkAnswer(), amswerClick()">回答</button>
    </client-only>
  </div>
</template>
<style lang="scss" scoped>
@import '~/assets/scss/quiz.scss';
</style>
