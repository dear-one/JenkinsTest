<template>
  <div class="cv-list-container">
    <span>{{text}}</span>
    <hello-world :userInformation="userInformation"></hello-world>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '../../components/HelloWorld.vue';
import { IUser } from '../../components/HelloWorld.vue';
export default defineComponent({
  name: 'cvIndex',
  components: {
    HelloWorld
  },
  setup() {
    let userInformation: Record<string, IUser> = {
      value: {
        name: '舒克',
        age: 8,
        gender: '未知',
        profession: '直升机驾驶员'
      }
    }
    return {
      text: '这是简历列表页面',
      userInformation: userInformation.value
    }
  }
})
</script>

<style>

</style>