# Input 输入框

输入框相关操作

#### 宽高及字体大小

对输入框的宽高及字体大小进行设置

:::demo 设置width，height，fz

```html

<template>
  <v-input
    v-model="modelValue"
    @input="input"
    @change="change"
    @enter="enter"
    width="300px"
    height="50px"
    fz="20px"
  ></v-input>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      let inputValue = ref(111);
      const modelValue = ref('');

      function input(val) {
        console.log('input', val);
      }

      function change(val) {
        console.log('change', val);
      }

      function enter(val) {
        console.log('enter', val);
      }

      return {
        modelValue,
        inputValue,
        input,
        change,
        enter,
      }
    }
  }
</script>
```

:::

#### 禁止输入

禁止输入

:::demo disabled 禁止输入

```html

<template>
  <v-input
    placeholder="请输入数据"
    v-model="inputValue"
    disabled
  ></v-input>
</template>
<script>
  import { ref } from 'vue';

  export default {
    setup() {
      let inputValue = ref('内容');
      return {
        inputValue
      }
    }
  }
</script>
```

:::

#### 允许清空

展示清空按钮

:::demo 设置 clearable 属性

```html

<template>
  <v-input
    placeholder="请输入数据"
    v-model="inputValue"
    clearable
    @input="input"
  ></v-input>
</template>
<script>
  import { ref } from 'vue'

  export default {
    setup() {
      let inputValue = ref('');

      function input(val) {
        console.log(val);
      }

      return {
        inputValue,
        input
      }
    }
  }
</script>
```

:::

#### 密码类型

可以对密码的显示和隐藏进行控制

:::demo

```html

<template>
  <v-input
    v-model="inputValue"
    placeholder="请输入数据"
    showPassword
    @input="input"
  ></v-input>
</template>
<script>
  import { ref } from 'vue'

  export default {
    setup() {
      let inputValue = ref('');

      function input(val) {
        console.log(val);
      }

      return {
        inputValue,
        input
      }
    }
  }
</script>
```

:::

#### 输入长度限制

可对输入的长度进行控制

:::demo

```html

<template>
  <v-input
    placeholder="请输入数据"
    showWordLimit
    :maxLength="10"
    v-model="inputValue"
    @input="input"
  ></v-input>
</template>
<script>
  import { ref } from 'vue'

  export default {
    setup() {
      let inputValue = ref('');

      function input(val) {
        console.log(val);
      }

      return {
        inputValue,
        input
      }
    }
  }
</script>
```

:::

#### 数字类型

仅允许输入数字

:::demo

```html

<template>
  <v-input
    placeholder="请输入数据"
    v-model="inputValue"
    type="number"
    @input="input"
  ></v-input>
</template>
<script>
  import { ref } from 'vue'

  export default {
    setup() {
      let inputValue = ref('');

      function input(val) {
        console.log(val);
      }

      return {
        inputValue,
        input
      }
    }
  }
</script>
```

:::

#### 最大最小值

type为number数字类型时，可设置最大最小值，下面展示内容为只允许输入-9999~9999之间数据数字

:::demo

```html

<template>
  <v-input
    placeholder="请输入数据"
    v-model="inputValue"
    type="number"
    :max="9999"
    :min="-9999"
    @input="input"
  ></v-input>
</template>
<script>
  import { ref } from 'vue'

  export default {
    setup() {
      let inputValue = ref('');

      function input(val) {
        console.log(val);
      }

      return {
        inputValue,
        input
      }
    }
  }
</script>
```

:::

#### 整数

type为number数字类型时，可设置仅允许输入整数

:::demo

```html

<template>
  <v-input
    placeholder="请输入数据"
    v-model="inputValue"
    type="number"
    numberInt
    @input="input"
  ></v-input>
</template>
<script>
  import { ref } from 'vue'

  export default {
    setup() {
      let inputValue = ref('');

      function input(val) {
        console.log(val);
      }

      return {
        inputValue,
        input,
      }
    }
  }
</script>
```

:::

#### 必填

type为number数字类型时，提供必填功能，当离开输入框并且内容为空时，展示numberRequiredDefault设置的值。

:::demo

```html

<template>
  <v-input
    placeholder="请输入数据"
    v-model="inputValue"
    type="number"
    numberRequired
    :numberRequiredDefault="100"
    @input="input"
  ></v-input>
</template>
<script>
  import { ref } from 'vue'

  export default {
    setup() {
      let inputValue = ref('');

      function input(val) {
        console.log(val);
      }

      return {
        inputValue,
        input
      }
    }
  }
</script>
```

:::

#### 支持原生属性

如使用 readonly

:::demo 支持原生属性

```html

<template>
  <v-input
    placeholder="请输入数据"
    v-model="inputValue"
    readonly
  ></v-input>
</template>
<script>
  import { ref } from 'vue'

  export default {
    setup() {
      let inputValue = ref('inputValue');
      return {
        inputValue
      };
    }
  }
</script>
```

:::

#### 支持前置和后置图片

通过插槽支持前后置图片

:::demo 前后置插槽分别为 front，behind

```html

<template>
  <v-input
    placeholder="请输入数据"
    v-model="inputValue"
    @input="input"
  >
    <template #front>
      <div class="vInputDoc"></div>
    </template>
    <template #behind>
      <div class="vInputDoc"></div>
    </template>
  </v-input>
</template>
<script>
  import { ref } from 'vue'

  export default {
    setup() {
      let inputValue = ref('');

      function input(val) {
        console.log(val);
      }

      return {
        inputValue,
        input,
      }
    }
  }
</script>
```

:::

#### 内置方法

内置 clear，select，focus，blur 等方法供外部调用

:::demo select 使用示例

```html

<template>
  <div>

    <v-input
      ref="inputRef"
      placeholder="请输入数据"
      v-model="inputValue"
      @input="input"
    ></v-input>

    <v-button
      type="primary"
      @click.native="select"
      class="v-ml20"
    >点击调用内置select方法
    </v-button>
  </div>
</template>
<script>
  import { ref } from 'vue'

  export default {
    setup() {
      let inputValue = ref('测试内容');
      let inputRef = ref(null);

      function select() {
        inputRef.value.select();
      }

      function input(val) {
        console.log(val);
      }

      return {
        inputRef,
        inputValue,
        select,
        input,
      }
    }
  }
</script>
```

:::

### API

#### props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| modelValue | 值 | - | - | - |
| width | 组件宽度 | String | - | 180px |
| height | 组件高度 | String | - | 40px |
| fz | 输入框的字体大小 | String | - | .85rem |
| disabled | 是否禁用状态 | Boolean | - | false |
| showPassword | 是否显示密码 | Boolean | - | false |
| showWordLimit | 是否显示字数限制 | Boolean | - | false |
| clearable | 是否清空输入框 | Boolean | - | false |
| type | 类型 | String | number/text/password | text |
| max| 设置好type为number后，可设置范围 | Number | - | Number.MAX_VALUE |
| min | 设置type为number后，可设置范围 | Number | - | -Number.MAX_VALUE |
| numberRequired | 设置type为number后，是否必输 | Boolean | - | false |
| numberRequiredDefault | 数字类型，必填时候的默认项 | Number | - | 0 |
| numberInt | 设置type为number后，是否为整数 | Boolean | - | false |
| textAlign | 对齐方式 | String | - | left |
| maxLength | 最大长度| Number | - | - |

#### event

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| input | 输入时触发 | 值 |
| change | 离开时触发 | event |
| enter | 回车 | event |
| focus | 聚焦 | event |
| blur | 失去焦点 | event |
| clear | 点击清除 | event |
| compositionstart | 中文输入开始 | event |
| compositionupdate | 中文输入中 | event |
| compositionend | 中文输入结束 | event |

#### attr

| 名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| focus | 聚焦 | - |
| blur | 脱离焦点 | - |
| select | 选中 | - |
| clear | 清空 | - |
| ref | input dom |  |

#### slot

| 名称 | 说明 |
|---------- |-------- |
| front | 前置插槽 |
| behind | 后置插槽 |
