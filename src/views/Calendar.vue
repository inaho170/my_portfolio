<template>
  <!-- ここにコンポーネントの HTML を記述 -->
  <div class="calendar">
  <!-- 自分で作成したコンポーネントのタグは使用しないとエラーになる（eslintに引っかかる） -->
  <calendar></calendar>
  </div>
</template>

<script>
// @ is an alias to /src
import Calendar from "@/components/Calendar.vue";

// ここに JavaScript で Vueオブジェクトを定義 
export default {
  name: "calendar",
  components: {
    Calendar    // 表示させたい自作コンポーネントを記述（今回はcomponentsフォルダーのCalendarコンポーネント）
  }
};
</script>