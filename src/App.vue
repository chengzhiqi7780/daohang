<template>
  <div id="app">
    <avue-crud
    :data="data"
    :option="option"
    v-model="form"
    @row-update="rowUpdate"
    @row-save="rowSave"
    @row-del="rowDel">
      <template slot="menuLeft" slot-scope="{size}">
        <el-button type="primary" :size="size" @click="$router.push('/login')">自定义按钮</el-button>
      </template>
    </avue-crud>
    <router-view />
  </div>
</template>

<script>
// 封装好的方法
// import {} from './api'
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      form:{},
      // 表格中渲染的数据来源
      data: [
        {
          name:'张三',
          sex:'男'
        }, {
          name:'李四',
          sex:'女'
        }, {
          name:'王五',
          sex:'女'
        }, {
          name:'赵六',
          sex:'男'
        }
      ],
      option:{
        align:'center',
        menuAlign:'center',
        column:[
            {
            label:'姓名',
            prop:'name'
          },
          {
            label:'性别',
            prop:'sex'
          }
        ]
      }
    }
  },
  watch: {

  },
  mounted () {},
  methods:{
    // 编辑表格调用的方法
    rowUpdate (row,index,done) {
      console.log(row)
      done()
    },
    // 新增表格调用的方法
    rowSave (row,index,done) {
      console.log(row)
      done()
    },
    // 删除表格调用的方法
    rowDel (row,index,done) {
      // 这是封装好的一个删除确认框，封装好的删除api放到.then后边即可
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // deleteOganizations(row.id).then((res) => {
          //   // console.log(res)
          //   this.$message({
          //     type: 'success',
          //     message: '删除成功!'
          //   });
          // })
          done()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      console.log(row)
      
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
