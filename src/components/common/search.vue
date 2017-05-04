<template>
  <div class="weui-search">
    <div class="search_main" >
      <header class="search-header">
        <div class="search_head">
          <i class="iconfont icon-xiangzuo" @click="goBack()"></i><p><i class="iconfont icon-sousuo_sousuo"></i><input type="text" class="seach-text" placeholder="搜索"><i class="iconfont icon-yuyin"></i></p>
        </div>
      </header>
      <section class="search_section">
      <div class="search-title clearfix">
          <h2>搜索指定内容</h2>
          <ul>
            <li>朋友圈</li>
            <li>文章</li>
            <li>公众号</li>
            <li>小说</li>
            <li>音乐</li>
            <li>表情</li>
          </ul>
      </div>

      </section>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'app',
    data() {
      return {

      }
    },
    components: {

    },
    computed:{
      getDetails:function(){
        var wxid = this.$route.query.wxid,
          detailsList=[],
          users=this.$store.state.allContacts;
        users.map(function( item, key, arr){
          if (wxid === item.wxid) {
            detailsList.push(item)
          }
        });
        return detailsList;
      }
    },
    methods: {
      goBack(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
  .weui-search{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #ffffff;
  }
  .search-header{
    position: fixed;
    top: 0;
    width: 100%;
    height: 46px;
    background-color: #303036;
    color: #ffffff;
    z-index: 6;
  }
  .search_head{
    height: 46px;
    line-height: 46px;
    font-size: 16px;
  }
  .search_head i{
    margin-left: 10px;
    margin-right: 14px;
  }
  .search_section{
    margin-top: 66px;
  }
  .search_head p{
    display: inline-block;
    height: 40px;
    width: 86%;
    border-bottom: 1px solid #7bd339;
  }
  .seach-text{
    border: none;
    color: #ffffff;
    font-size: 16px;
    background: #303036;
  }
  .icon-yuyin{
    float: right;
    margin-right: 4px !important;
  }
  .search-title{
    text-align: center;
    padding-top: 80px;
  }
  .search-title h2{
    color: #888888;
    margin-bottom: 30px;
  }
  .search-title li{
    float: left;
    width: 33.33%;
    color: #7bd339;
  }
</style>
