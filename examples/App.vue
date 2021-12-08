<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ElTableX :columns="columns" :data="tableData"></ElTableX>
    <ElFormX></ElFormX>
  </div>
</template>

<script type="text/babel">
import ElFormX from 'packages/el-form-x'
import ElTableX from 'packages/el-table-x'

export default {
  name: 'App',
  components: {
    ElFormX,
    ElTableX,
  },

  data() {
    return {
      columns: [
        {
          prop: 'date',
          label: '日期',
        },
        {
          prop: 'name',
          label: '姓名',
        },
        {
          prop: 'address',
          label: '地址',
        },
      ],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
