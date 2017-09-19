<template>
  <section class="app-levelbar clearfix">
    <h4 class="router-name fl">{{label}}</h4>
    <el-breadcrumb class="breadcrumb fr">
      <el-breadcrumb-item v-for="(item, index) in list"
                          :key="item.id"
                          :active="index == list.length - 1">
        <router-link :to="item.path">
          {{item.meta && item.meta.label || item.name}}
        </router-link>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </section>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  computed: {
    label() {
      return (this.$route.meta && this.$route.meta.label) || this.$route.name;
    },
  },
  methods: {
    getList() {
      let matched = this.$route.matched.filter(item => item.name);
      const first = matched[0];
      if (first && (first.name !== '首页' || first.path !== '/index')) {
        matched = [{ name: '首页', path: '/' }].concat(matched);
      }
      this.list = matched;
    },
  },
  watch: {
    $route() {
      this.getList();
    },
  },
  created() {
    this.getList();
  },
};
</script>

<style lang="less">
.app-levelbar {
  background: #fff;
  height: 30px;
  border-bottom: 1px solid #dedede;
  .breadcrumb {
    line-height: 30px;
    padding-right: 20px;
  }
  .router-name {
    padding: 8px 12px;
  }
}
</style>
