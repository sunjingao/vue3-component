# Dropdown 下拉菜单

提供下拉提示

#### 基本用法

基本用法

:::demo 基本用法

```html

<template>
  <div class="vDropdownDoc">
    <v-dropdown @command="command">
          <span class="v-dropdown-link">
            下拉菜单
          </span>
      <template #dropdown>
        <v-dropdown-menu>
          <v-dropdown-item command="黄金糕">黄金糕</v-dropdown-item>
          <v-dropdown-item command="狮子头">狮子头</v-dropdown-item>
          <v-dropdown-item command="螺蛳粉">螺蛳粉</v-dropdown-item>
          <v-dropdown-item disabled command="双皮奶">双皮奶</v-dropdown-item>
          <v-dropdown-item divided command="蚵仔煎">蚵仔煎</v-dropdown-item>
        </v-dropdown-menu>
      </template>
    </v-dropdown>
  </div>
</template>
<script>
  export default {
    setup() {
      function command(command, event) {
        console.log('command:', command, 'event:', event);
      }

      return {
        command
      }
    }
  }
</script>
```

:::

#### 触发下拉方式

通过hover触发下拉

:::demo 设置hoverTrigger属性

```html

<template>
  <div class="vDropdownDoc">
    <v-dropdown hoverTrigger @command="command">
          <span class="v-dropdown-link">
            下拉菜单
          </span>
      <template #dropdown>
        <v-dropdown-menu>
          <v-dropdown-item command="a">黄金糕</v-dropdown-item>
          <v-dropdown-item command="b">狮子头</v-dropdown-item>
          <v-dropdown-item command="c">螺蛳粉</v-dropdown-item>
          <v-dropdown-item disabled command="d">双皮奶</v-dropdown-item>
          <v-dropdown-item divided command="e">蚵仔煎</v-dropdown-item>
        </v-dropdown-menu>
      </template>
    </v-dropdown>
  </div>
</template>
<script>
  export default {
    setup() {
      function command(command, event) {
        console.log('command:', command, 'event:', event);
      }

      return {
        command
      }
    }
  }
</script>
```

:::

#### 禁止菜单关闭

点击时可禁止菜单关闭

:::demo 设置hideOnClick属性

```html

<template>
  <div class="vDropdownDoc">
    <v-dropdown hoverTrigger :hideOnClick="false" @command="command">
          <span class="v-dropdown-link">
            下拉菜单
          </span>
      <template #dropdown>
        <v-dropdown-menu>
          <v-dropdown-item command="a">黄金糕</v-dropdown-item>
          <v-dropdown-item command="b">狮子头</v-dropdown-item>
          <v-dropdown-item command="c">螺蛳粉</v-dropdown-item>
          <v-dropdown-item disabled command="d">双皮奶</v-dropdown-item>
          <v-dropdown-item divided command="e">蚵仔煎</v-dropdown-item>
        </v-dropdown-menu>
      </template>
    </v-dropdown>
  </div>
</template>
<script>
  export default {
    setup() {
      function command(command, event) {
        console.log('command:', command, 'event:', event);
      }

      return {
        command
      }
    }
  }
</script>
```

:::

#### 回调

通过回调完善展示

:::demo 设置相关回调

```html

<template>
  <div class="vDropdownDoc">
    <v-dropdown @command="command">
          <span class="v-dropdown-link">
            下拉菜单
          </span>
      <template #dropdown>
        <v-dropdown-menu>
          <v-dropdown-item command="a">黄金糕</v-dropdown-item>
          <v-dropdown-item command="b">狮子头</v-dropdown-item>
          <v-dropdown-item command="c">螺蛳粉</v-dropdown-item>
          <v-dropdown-item command="d" disabled>双皮奶</v-dropdown-item>
          <v-dropdown-item command="e" divided>蚵仔煎</v-dropdown-item>
        </v-dropdown-menu>
      </template>
    </v-dropdown>
  </div>
</template>
<script>
  import { getCurrentInstance } from 'vue';

  export default {
    setup() {
      const ins = getCurrentInstance();

      function command(command, event) {
        const message = ins.appContext.config.globalProperties.$message({
          title: '这是一条消息提示'
        });
        message.open();
        console.log('command:', command, 'event:', event);
      }

      return {
        command
      }
    }
  }
</script>
```

:::

#### 按钮类型

左侧按钮触发click回调，右侧下拉

:::demo 设置splitButton属性

```html

<template>
  <div class="vDropdownDoc">
    <v-dropdown splitButton type="primary" @command="command" @click="click">
          <span>
            下拉菜单
          </span>
      <template #dropdown>
        <v-dropdown-menu>
          <v-dropdown-item command="a">黄金糕</v-dropdown-item>
          <v-dropdown-item command="b">狮子头</v-dropdown-item>
          <v-dropdown-item command="c">螺蛳粉</v-dropdown-item>
          <v-dropdown-item disabled command="d">双皮奶</v-dropdown-item>
          <v-dropdown-item divided command="e">蚵仔煎</v-dropdown-item>
        </v-dropdown-menu>
      </template>
    </v-dropdown>
  </div>
</template>
<script>
  export default {
    setup() {
      function click(event) {
        console.log('click:', event);
      }

      function command(command, event) {
        console.log('command:', command, 'event:', event);
      }

      return {
        click,
        command
      }
    },
  }
</script>
```

:::

#### 按钮的其它属性

按钮的其它属性

:::demo 设置宽高等属性

```html

<template>
  <div class="vDropdownDoc">
    <v-dropdown
      splitButton
      type="primary"
      width="100px"
      height="60px"
      @command="command"
      @click="click"
    >
          <span>
            下拉菜单
          </span>
      <template #dropdown>
        <v-dropdown-menu>
          <v-dropdown-item command="a">黄金糕</v-dropdown-item>
          <v-dropdown-item command="b">狮子头</v-dropdown-item>
          <v-dropdown-item command="c">螺蛳粉</v-dropdown-item>
          <v-dropdown-item disabled command="d">双皮奶</v-dropdown-item>
          <v-dropdown-item divided command="e">蚵仔煎</v-dropdown-item>
        </v-dropdown-menu>
      </template>
    </v-dropdown>
  </div>
</template>
<script>
  export default {
    setup() {
      function click(event) {
        console.log('click:', event);
      }

      function command(command, event) {
        console.log('command:', command, 'event:', event);
      }

      return {
        click,
        command
      }
    },
  }
</script>
```

:::

### API

#### dropdown props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| splitButton | 下拉触发元素呈现为按钮组 | Boolean | - | false |
| hoverTrigger | 以hover方式触发下拉框展示 | Boolean | - | false |
| hideOnClick | 点击时隐藏下拉框 | Boolean | - | true |
| placement | 下拉框初始位置 | String | - | bottom-end |

#### dropdown event

| 名称 | 说明 | 回调函数 |
|---------- |-------- |-------- |
| command | 选中item后回调 | 给v-dropdown-item赋的command, event |

#### dropdown-item props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| disabled | 是否禁止选中 | Boolean | - | false |
| divided | 是否展示分割线 | Boolean | - | false |

