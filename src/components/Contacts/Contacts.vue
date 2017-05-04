<template>
  <div class="weui-Contacts">
    <div v-if="$route.path == '/Contacts'">
        <div class="weui-cells">

          <router-link tag="a" to="/Contacts/new-friend" class="weui-cell weui-cell_access" >
              <div class="weui-cell__hd"><img src="../../assets/images/contact_top-friend-notify.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
              <div class="weui-cell__bd">
                <p>新的朋友</p>
              </div>
          </router-link>
          <router-link tag="a" to="/Contacts/groupChat" class="weui-cell weui-cell_access" >
            <div class="weui-cell__hd"><img src="../../assets/images/contact_top-addgroup.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
            <div class="weui-cell__bd">
              <p>群聊</p>
            </div>
          </router-link>
          <router-link tag="a" to="/Contacts/label" class="weui-cell weui-cell_access" >
            <div class="weui-cell__hd"><img src="../../assets/images/contact_top-tag.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
            <div class="weui-cell__bd">
              <p>标签</p>
            </div>
          </router-link>
          <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__hd"><img src="../../assets/images/contact_top-offical.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
            <div class="weui-cell__bd">
              <p>公众号</p>
            </div>
           <!-- <div class="weui-cell__ft">说明文字</div>-->
          </a>

        </div>
        <div  v-for="(value,key) in contactsList">
          <div class="weui-cells__title">{{key}}</div>
          <div class="weui-cells">
            <router-link  :to="{path:'/Contacts/details',query:{wxid:item.wxid,name:item.remark}}" class="weui-cell weui-cell_access" v-for="(item,index) in value"  tag="div"  :key="item.id" >
              <div class="weui-cell__hd">
                <img :src="item.headerUrl" class="home__mini-avatar___1nSrW">
              </div>
              <div class="weui-cell__bd">
                {{item.remark?item.remark:item.nickname}}
              </div>
            </router-link>
          </div>
        </div>
    </div>
    <router-view ></router-view>
  </div>
</template>

<script>

  export default {
    name: 'app',
    components: {

    },
    computed: {
      //从好友名字中提取首字母，
      initialList: function() {
        var initialList = [],
          users = this.$store.state.allContacts;

          users.map(function( item, key, arr){
          if (initialList.indexOf(item.initial.toUpperCase()) == -1) {
            initialList.push(users[key].initial.toUpperCase())
          }
        });
        return initialList.sort()
      },
      // 根据首字母进行分类
      contactsList: function() {
        var contactsList = {},
          users = this.$store.state.allContacts,
          max = users.length;
        for (var i = 0; i < this.initialList.length; i++) {
          var protoTypeName = this.initialList[i]
          contactsList[protoTypeName] = []
          for (var j = 0; j < max; j++) {
            if (users[j].initial.toUpperCase() === protoTypeName) {
              contactsList[protoTypeName].push(users[j])
            }
          }
        }
        return contactsList
      }
    }
  }
</script>

<style>
  .weui-Contacts img{width:32px !important;height:32px ;display:block;margin-right:10px}
</style>
