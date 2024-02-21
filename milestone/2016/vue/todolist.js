Vue.component('sidebar', {
  name: 'sidebar',
  data(){
    return {
      todoList: []
    }
  },
  template: `<div v-for="item in todoList" @click="showItemTitle(item.title)">{{item.name}}</div>`,
  methods:{
    loadTodoList(){
      setTimeout(() => {
        this.todoList = [
          {
            name: '吃饭',
            tile: ''
          },
          {
            name: '睡觉',
            tile: ''
          },
          {
            name: '写代码',
            tile: ''
          },
        ]
      }, 1000);

      
    },
    showItemTitle(title){
      alert(title)

      // 或者用title做其他事情
    }
  }
})