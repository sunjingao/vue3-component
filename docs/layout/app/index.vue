<template>
  <div class="root">
    <div class="main-wrapper">
      <!--左侧菜单-->
      <div ref="sidebar" class="main-wrapper-sidebar scroll">
        <ul class="menu-root">
          <li>
            <div>
              <a
                class="main-wrapper-sidebar-link"
                href="javascript:javascript:void(0);"
                >Introduce</a
              >
              <ul class="menu-sub">
                <li>
                  <router-link to="/instructions">开发说明</router-link>
                </li>
                <li>
                  <router-link to="/change-log">更新日志</router-link>
                </li>
              </ul>
            </div>

            <div>
              <a
                class="main-wrapper-sidebar-link"
                href="javascript:javascript:void(0);"
                >Basic</a
              >
              <ul class="menu-sub">
                <li>
                  <router-link to="/button">Button 按钮</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/link">Link 文字链接</router-link>
                </li>
              </ul>
            </div>

            <div>
              <a
                class="main-wrapper-sidebar-link"
                href="javascript:javascript:void(0);"
                >Form</a
              >
              <ul class="menu-sub">
                <li>
                  <router-link to="/radio">Radio 单选框</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/checkbox">Checkbox 多选框</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/input">Input 输入框</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/textarea">Textarea 文本框</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/autocomplete">
                    Autocomplete 搜索提示
                  </router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/inputNumber">
                    InputNumber 计数器
                  </router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/select">Select 选择器</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/cascader">Cascader 级联选择器</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/switch">Switch 开关</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/slider">Slider 滑块</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/timePicker"
                    >TimePicker 时间选择器
                  </router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/datePicker"
                    >DatePicker 日期选择器
                  </router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/rate">Rate 评分</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/transfer">Transfer 穿梭框</router-link>
                </li>
              </ul>
            </div>

            <div>
              <a
                class="main-wrapper-sidebar-link"
                href="javascript:javascript:void(0);"
                >Data</a
              >
              <ul class="menu-sub">
                <li>
                  <router-link to="/tag">Tag 标签</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/progress">Progress 进度条</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/tree">Tree 树形控件</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/pagination">Pagination 分页</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/badge">Badge 标记</router-link>
                </li>
              </ul>
            </div>

            <div>
              <a
                class="main-wrapper-sidebar-link"
                href="javascript:javascript:void(0);"
                >Notice</a
              >
              <ul class="menu-sub">
                <li>
                  <router-link to="/alert">Alert 警告</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/loading">Loading 加载</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/message">Message 消息提示</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/messageBox">MessageBox 弹框</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/notification"
                    >Notification 通知
                  </router-link>
                </li>
              </ul>
            </div>

            <div>
              <a
                class="main-wrapper-sidebar-link"
                href="javascript:javascript:void(0);"
                >Navigation</a
              >
              <ul class="menu-sub">
                <li>
                  <router-link to="/navMenu">NavMenu 导航菜单</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/tabs">Tabs 标签页</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/breadcrumb">Breadcrumb 面包屑</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/pageHeader">PageHeader 页头</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/dropdown">Dropdown 下拉菜单</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/steps">Steps 步骤条</router-link>
                </li>
              </ul>
            </div>

            <div>
              <a
                class="main-wrapper-sidebar-link"
                href="javascript:javascript:void(0);"
                >Others</a
              >
              <ul class="menu-sub">
                <li>
                  <router-link to="/dialog">Dialog 对话框</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/tooltip"> Tooltip 文字提示</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/popover">Popover 弹出框</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/card">Card 卡片</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/carousel">Carousel 走马灯</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/collapse">Collapse 折叠面板</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/timeline">Timeline 时间线</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/divider">Divider 分割线</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/image">Image 图片</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/backTop"> Backtop 回到顶部</router-link>
                </li>
              </ul>
              <ul class="menu-sub">
                <li>
                  <router-link to="/infiniteScroll"
                    >InfiniteScroll 无限滚动
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <!--主体内容 Start-->
      <div class="main-wrapper-container scroll">
        <router-view />
      </div>
      <!--主体内容 End-->
    </div>

    <!--回到顶部-->
    <v-back-top selector=".main-wrapper-container"></v-back-top>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'App',

  setup() {
    const router = useRouter();

    router.afterEach(() => {
      document.querySelector('.main-wrapper-container').scrollTop = 0;
    });
  },
});
</script>

<style scoped lang="scss" src="./css/index.scss" />
