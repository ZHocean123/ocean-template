<template>
  <div class='menu-wrapper'>
    <template v-for="item in routes">
      <!-- 顶层链接，无子画面 -->
      <router-link v-if="!item.hidden&&item.noDropdown&&item.children.length>0"
                   :key="item.path"
                   :to="toPath(item, item.children[0])">
        <el-menu-item :index="toPath(item, item.children[0])"
                      class='submenu-title-noDropdown'>
          <icon-svg v-if='item.icon'
                    :icon-class="item.icon"></icon-svg>
          <span>{{item.children[0].name}}</span>
        </el-menu-item>
      </router-link>
      <!-- 子菜单 -->
      <el-submenu :index="item.name"
                  :key="item.path"
                  v-if="!item.noDropdown&&!item.hidden">
        <template slot="title">
          <icon-svg v-if='item.icon'
                    :icon-class="item.icon"></icon-svg>
          <span>{{item.name}}</span>
        </template>
        <!-- 次级子菜单 -->
        <template v-for="child in item.children"
                  v-if='!child.hidden'>
          <!-- 循环设置 -->
          <navbar-item class='nest-menu'
                       :key="child.path"
                       v-if='child.children&&child.children.length>0'
                       :routes='[child]'>
          </navbar-item>
          <router-link v-else
                       :key="child.path"
                       :to="toPath(item, child)">
            <el-menu-item :index="item.path+'/'+child.path">
              <icon-svg v-if='child.icon'
                        :icon-class="child.icon"></icon-svg>
              <span>{{child.name}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: 'NavbarItem',
  props: {
    routes: {
      type: Array,
    },
  },
  methods: {
    toPath(item, child) {
      if (item.path === '/') {
        return `/${child.path}`;
      }
      return `${item.path}/${child.path}`;
    },
  },
};
</script>

