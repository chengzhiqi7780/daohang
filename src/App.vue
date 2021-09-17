<template>
  <div id="app">
    <!-- 内容 -->
    <div class="content">
      <div class="div1">

      </div>

      <div class="div2">

      </div>

      <div class="div3">

      </div>

      <div class="div4">

      </div>

      <div class="div5">

      </div>

    </div>
    <!--  -->
    
    <!--  -->
    <div class="navs" @click="scrollTo">
      <span :class="{active:active===1}" @click="scrollTo(1)">content1</span>
      <span :class="{active:active===2}" @click="scrollTo(2)">content2</span>
      <span :class="{active:active===3}" @click="scrollTo(3)">content3</span>
      <span :class="{active:active===4}" @click="scrollTo(4)">content4</span>
      <span :class="{active:active===5}" @click="scrollTo(5)">content5</span>
    </div>
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
      active: 1,
    }
  },
  watch: {

  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  destroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods:{
   onScroll (e) {
     const navContens = document.querySelectorAll('.content div')
     const offsetTopArr = []
     navContens.forEach((v) => {
      offsetTopArr.push(v.offsetTop)
     })
     const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
     if (scrollTop>=0 && scrollTop<600 ) {
       this.active = 1
     } else if (scrollTop>=600 && scrollTop<1200) {
       this.active = 2
     } else if (scrollTop>=1200 && scrollTop<1800) {
       this.active = 3
     } else if (scrollTop>=1800 && scrollTop<2400) {
       this.active = 4
     } else if (scrollTop>=2400 && scrollTop<3000) {
       this.active = 5
     } 
   },
   scrollTo (index) {
    //  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    //  console.log(scrollTop)
     if (index === 1) {
       document.scrollingElement.scrollTop = 0
     } else if (index === 2) {
       document.scrollingElement.scrollTop =  600
     } else if (index === 3) {
       document.scrollingElement.scrollTop =  1200
     } else if (index === 4) {
       document.scrollingElement.scrollTop =  1800
     } else if (index === 5) {
       this.active = 5
       document.scrollingElement.scrollTop =  2400
     }
   }
  }
}
</script>

<style>
@import url('./assets/style/base.css');
html,body,#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: aquamarine;
}
.content {
  width: 80%;
  height: 100%;
  background-color: chartreuse;
}
.navs {
  width: 20%;
  height: 100%;
  background-color: crimson;
  display: flex;
  flex-direction:column;
  position: fixed;
}

.div1 {
  width: 100%;
  background-color: cyan;
  height: 600px;
}
.div2 {
  width: 100%;
  background-color: red;
  height: 600px;
}
.div3 {
  width: 100%;
  background-color: wheat;
  height: 600px;
}
.div4 {
  width: 100%;
  background-color: yellow;
  height: 600px;
}
.div5 {
  width: 100%;
  background-color: pink;
  height: 600px;
}
span {
  margin-top: 20px;
}
span:hover {
  cursor: pointer;
}
.active {
  color: aqua;
  background-color: floralwhite;
}
</style>
