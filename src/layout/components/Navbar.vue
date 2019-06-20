<template>
  <div class="navbar">
    <hamburger
      :is-active="sidebar.opened"
      @toggleClick="toggleSideBar"
      class="hamburger-container"
    />

    <!-- <breadcrumb class="breadcrumb-container"/> -->
    <div class="admin-title">远景达微信后台管理系统</div>
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <!-- <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar"> -->
          <span>{{name}}</span>
          <i class="el-icon-caret-bottom"/>
        </div>
        <el-dropdown-menu class="user-dropdown" slot="dropdown">
          <el-dropdown-item divided>
            <span @click="changePwd" style="display:block;">修改密码</span>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <span @click="logout" style="display:block;">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  data() {
    return {}
  },
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters(['sidebar', 'avatar']),
    name() {
      const user = JSON.parse(localStorage.getItem('user'))
      this.$store.dispatch('user/getInfo')
      return user.adminName
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout').then(res => {
        window.location.href = `/login?redirect=${this.$route.fullPath}`
      })
    },
    changePwd() {
      console.log(123)
    }
  }
}
</script>

<style lang="scss" scoped>
.admin-title {
  position: relative;
  top: 16px;
  display: inline-block;
  font-size: 16px;
}
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;
      &:hover {
        cursor: pointer;
      }
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
