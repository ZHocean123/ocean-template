<template>
  <div class="app-navbar">
    <el-menu class="nav-box"
             theme="dark"
             :default-active="$route.path"
             :style="{ width:'180px', maxHeight: navHeight }">
      <NavBarItem :routes="list"></NavBarItem>
    </el-menu>
  </div>
</template>

<script>
import routes from '../router/routes';
import NavBarItem from './navbarItem';

export default {
  components: {
    NavBarItem,
  },
  data() {
    return {
      list: [],
    };
  },
  computed: {
    openedIndexList() {
      const len = this.list.length || 0;
      const indexList = [];
      for (let i = 0; i < len; i += 1) {
        indexList.push(this.list[i].path);
      }
      return indexList;
    },
    navHeight() {
      return `${window.innerHeight - 68}px`;
    },
  },
  methods: {
    handleToggle(item) {
      /* eslint-disable no-param-reassign */
      item.show = !item.show;
    },
    change(value) {
      this.$router.push({
        name: value,
      });
    },
    initMenu() {
      const list = [];
      routes.forEach((item) => {
        if (item.menu === false || !item.name) {
          return;
        }
        const children = item.children || [];
        const childList = [];
        children.forEach((child) => {
          if (!child.name || child.menu === false) {
            return;
          }
          childList.push({
            label: (child.meta && child.meta.label) || child.name,
            value: child.name,
            path: child.path,
            icon: child.icon || '',
          });
        });
        const menuItem = {
          show: true,
          label: (item.meta && item.meta.label) || item.name,
          icon: item.icon,
          path: item.path,
          list: childList,
        };
        list.push(menuItem);
      }, this);
      this.list = list;
    },
  },
  created() {
    // this.initMenu();
    this.list = routes;
  },
};
</script>

<style lang="less">
.app-navbar {
  z-index: 9999;
  .welcome-box {
    padding: 12px 0px;
    text-align: center;
    border-bottom: 1px solid #efefef;
  }
  .nav-box {
    overflow: auto;
  }
}
</style>
