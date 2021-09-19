<template>
  <div class="hello-world-container">
    <input v-model="counter" />
    <div>{{counter}}</div>
    <div>{{counterGetter}}</div>
    <button @click="changeCounterValue('hello, qyw')">changeCounterValue</button>
    <p>{{`${user.value.name + user.value.gender}是一个非常优秀的${user.value.profession}，TA今年${user.value.age}岁咯。`}}</p>
    <button @click="changeUserInfo({ name: '房旭', age: 17, gender: '先生', profession: '前端工程师' })">CHANGE_USER_INFO_F</button>
    <button @click="changeUserInfo({ name: '马晨晨', age: 16, gender: '女士', profession: '设计师' })">CHANGE_USER_INFO_M</button>
    <button @click="changeUserInfo({ name: '贺光宝', age: 18, gender: '先生', profession: '产品经理' })">CHANGE_USER_INFO_H</button>
  </div>
</template>

<script lang="ts">
import { ref, watch, computed, reactive, onMounted, onBeforeMount, onBeforeUnmount } from 'vue';
let Timer: any;
export interface IUser {
  name: string;
  age: number;
  gender: string;
  profession?: string;
}
export default {
  name: 'HelloWorld',
  props: {
    userInformation: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup(props) {
    // const { userInformation } = props;
    // data
    const counter = ref('hello, qyf'); 

    let user: Record<string, IUser> = reactive({
      value: {
        name: '贺光宝',
        age: 18,
        gender: '先生',
        profession: '产品经理'
      }
    })

    // beforeMount
    onBeforeMount(() => {
      console.log('beforeMount');
    }); 

    // mounted
    onMounted(() => {
      console.log('Mounted')
    });

    // computed
    const counterGetter = computed(() => {
      return `${counter.value}, 你真的很不错噢！努力向前冲吧！Go！Go！Go！`
    });

    // watch
    watch(counter, (newVal: string, oldVal: string) => {
      console.log(newVal, oldVal);
    })

    // watch(() => userInformation, (newVal: IUser, oldVal: IUser) => {
    //   Timer = setTimeout(() => {
    //     user.value = newVal;
    //   }, 1500);
    // }, { immediate: true })

    // methods
    const changeCounterValue = (val: string) => {
      counter.value = val;
    }

    const changeUserInfo = (info: IUser) => {
      user.value = info;
    }

    onBeforeUnmount(() => {
      clearTimeout(Timer);
    }) 

    return {
      counter,
      user,
      counterGetter,
      changeCounterValue,
      changeUserInfo
    }
  }
}
</script>

