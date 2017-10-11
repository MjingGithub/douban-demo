<template>
  <div class="bookIndex">
    <loading :isOpen="isOpen"></loading>
    <header>
      <div class="search">
        <input name="booktag" value="小王子" v-model="searchTag" />
         <a href="javascript:;" @click="searchBook" >
         <i class="fa fa-search"></i>
         </a>
&nbsp;&nbsp;共{{total}}本
      </div>
      
    </header>
    <div v-show="searchList&&searchList.length">

      <div class="m-wrap">
        <div v-for="item in searchList">
           <a :href="item.alt">
              <img :src="item.images.medium" :alt="item.alt_title">
              <div class="right">
              <h3 class="m-title">{{item.title}}</h3>
              <i v-for="n in Math.floor(item.rating.average/2.0)" class="fa fa-star" ></i><i v-for="n in 5-Math.floor(item.rating.average/2.0)" class="fa fa-star-half-empty" ></i><span :class="{'high' : item.rating.average >= 8, 'low':item.rating.average <= 6}">{{item.rating.average | handleNoStar}}</span><span class="rate">({{item.rating.numRaters}}人评价)</span>
              <br>
              <span>{{item.author[0]}}/{{item.translator[0]}}/{{item.publisher}}/{{item.pubdate}}/{{item.price}}</span>
              <p>{{item.summary|subSummary}}...</p>
          </div>
           </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loading from './Loading'
export default {
  name: 'bookIndex',
  components: {loading},
  data () {
    return {
      searchTag:'小王子',
      isOpen: true,
      total:0,
      searchList:[],
      starArr:[]
    }
  },
  mounted() {
    this.searchBook();
  },
  methods:{
    searchBook(){

      if(!this.searchTag){
        this.searchList = [] ;
        return  ;
      }
      this.isOpen = true;
      this.$http.jsonp(
        'https://api.douban.com/v2/book/search',
        {
          params:{
            q:this.searchTag,
            count:30
          }
        }
      ).then(function (res) {
        let data = res.body;
        console.log(data) ;
        this.searchList = data.books ;
        this.total = this.searchList.length;
        this.isOpen = false;
      })
    }

  },
 
 filters: {
    handleNoStar(v) {
      if (v === 0) {
        return '暂无评分'
      } else {
        return v
      }
    },
    subSummary(v){
      if(v.length>50){
        return v.substring(0,50) ;
      }else{
        return v ;
      }
    }
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.search{
  text-align:center;
}
.search input{
  width:15rem;
  height:1.5rem;
  border:1px solid #1ABC9C;
}
.search i {
  font-size: 1.8rem;
  margin-top:.5rem;
  color: #1ABC9C;
  
}
.m-wrap {
  margin: 3.3rem 0;
}
.m-wrap div a {
  display: block;
  overflow: hidden;
  padding: 1rem 1rem 1rem 0;
  text-decoration: none;
}
.m-wrap div a img {
  display: inline-block;
  float: left;
  margin:0 2rem;
}
.m-wrap div .right {
  margin-top: -.8rem;
  color: #2C3E50;
  height:5rem;
}
.m-wrap i{
  color:#FFAC2D;
}
.m-wrap p{
  font-size:.6rem;
  overflow:hidden;
}
.m-wrap span.rate{
  color:#2c3e50;
}
.high {
  color:#FF4949;
}
.low {
  color: #13CE66;
}
.right span {
  font-size: .6rem;
}
h3.m-title{
  font-size:0.85rem;
}
</style>
