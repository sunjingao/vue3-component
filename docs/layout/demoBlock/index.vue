<template>
  <div class="demo-block" ref="demoBlockD">
    <div class="demo-wrap" :class="{ show: isShow }">
      <div class="demo-source">
        <slot name="source"></slot>
      </div>
      <div class="demo-highlight" style="margin-top: 20px">
        <div class="demo-icon">
          <i
            class="iconfont icon-v-codePanelCopy demo-icon__item"
            @click="handleCopy"
          ></i>
          <i
            :class="[
              'iconfont',
              isShow ? 'icon-v-codePanelOpen' : 'icon-v-codePanelClose',
              'demo-icon__item',
            ]"
            @click="handleCode"
          ></i>
        </div>

        <div v-show="isShow">
          <slot name="highlight"></slot>
          <div class="close-content" @click="handleCode">
            <i class="iconfont icon-v-scrollTop"></i>
            &nbsp;
            <span>隐藏代码</span>
          </div>
        </div>
      </div>
      <!--      <div class="tag-detail">-->
      <!--        <slot></slot>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script>
import { ref, getCurrentInstance, onMounted } from 'vue';

export default {
  setup(props, { slots }) {
    const demoBlockD = ref(null);
    const instance = getCurrentInstance();
    const globalProperties = instance.appContext.config.globalProperties;

    const handleCopy = useCopy.bind(this, {
      slots,
      globalProperties,
    });

    const isShow = ref(false);
    const handleCode = () => {
      isShow.value = !isShow.value;
    };

    onMounted(() => {
      setSticky(demoBlockD);
    });

    return {
      demoBlockD,
      isShow,
      handleCode,
      handleCopy,
    };
  },
};

const useCopy = ({ slots, globalProperties }) => {
  const html = slots.highlight()[0].children[0].children;
  globalProperties
    .$message({
      title: '代码复制成功',
      type: 'success',
    })
    .open();
  copy(html);
};

function copy(value) {
  const oInput = document.createElement('textarea');
  document.body.appendChild(oInput);
  oInput.style.width = '0';
  oInput.style.height = '0';
  oInput.style.position = 'fixed';
  oInput.style.opacity = '0';
  oInput.value = value;

  const ua = window.navigator.userAgent;

  if (ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    oInput.focus();
    oInput.setSelectionRange(0, 9999);
    document.execCommand('copy');
  } else if (ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1) {
    oInput.select();
    document.execCommand('copy');
  } else {
    oInput.focus();
    oInput.setSelectionRange(0, 9999);
    document.execCommand('copy');
  }
  document.body.removeChild(oInput);
}

function setSticky(demoBlockD) {
  const stickyDom = demoBlockD.value.querySelector('.close-content');
  const scrollParentDom = document.querySelector('.main-wrapper-container');
  const parentPaddingTop = getComputedStyle(scrollParentDom).paddingTop;
  stickyDom.style.position = 'sticky';
  stickyDom.style.bottom = `-${parentPaddingTop}`;
}
</script>

<style lang="scss" src="./css/index.scss"></style>
