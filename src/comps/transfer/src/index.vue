<template>
  <div :class="[`${CLS_PRE}-transfer`]">
    <div :class="[`transfer-content`]">
      <div
        :class="[`title`]"
        @click="handleChangeAllSel(sourceDataRf, sourceSettingCp)"
      >
        <v-checkbox
          :isIndeterminate="
            getSelectedType(sourceSettingCp) === CHECKBOX_TYPE.PART
          "
          :modelValue="getSelectedType(sourceSettingCp) === CHECKBOX_TYPE.ALL"
        >
        </v-checkbox>
        <div :class="[`title-value`]">{{ titles[0] }}</div>
        <div :class="[`select-num`]">
          <span>{{ sourceSettingCp.checkedNum }}</span>
          <span>/</span>
          <span>{{ sourceSettingCp.amount }}</span>
        </div>
      </div>
      <template v-if="sourceDataRf.length === 0">
        <div :class="[`no-data`]">暂无数据</div>
      </template>
      <template v-else>
        <ul :class="[`${CLS_PRE}-hover-show-scrollbar`, `content`]">
          <div v-if="filterable" class="input-content">
            <v-input
              height="30px"
              v-model="filterSettingRt.source"
              @input="(val) => handleFilter(val, 'source')"
            ></v-input>
          </div>
          <li
            v-for="(item, index) in sourceFilterDataCp"
            :class="[{ disabled: item.disabled }]"
            @click="handleItemSelect(item)"
            :key="index"
          >
            <v-checkbox :modelValue="item.checked"></v-checkbox>
            <div
              :class="[
                `content-value`,
                { checked: item.checked, disabled: item.disabled },
              ]"
            >
              {{ item.label }}
            </div>
          </li>
        </ul>
        <slot name="source-footer"></slot>
      </template>
    </div>

    <div :class="[`transfer-icon`]">
      <v-button
        type="primary"
        :class="[`mb10`]"
        @click="handleTransfer(targetDataRf, targetSettingCp)"
        :disabled="getSelectedType(targetSettingCp) === CHECKBOX_TYPE.NONE"
      >
        <span v-if="buttonTexts">{{ buttonTexts[0] }}</span>
        <span v-else>&#60;</span>
      </v-button>
      <br />
      <v-button
        type="primary"
        @click="handleTransfer(sourceDataRf, sourceSettingCp)"
        :disabled="getSelectedType(sourceSettingCp) === CHECKBOX_TYPE.NONE"
      >
        <span v-if="buttonTexts">{{ buttonTexts[1] }}</span>
        <span v-else>&#62;</span>
      </v-button>
    </div>

    <div :class="[`transfer-content`]">
      <div
        :class="[`title`]"
        @click="handleChangeAllSel(targetDataRf, targetSettingCp)"
      >
        <v-checkbox
          :isIndeterminate="
            getSelectedType(targetSettingCp) === CHECKBOX_TYPE.PART
          "
          :modelValue="getSelectedType(targetSettingCp) === CHECKBOX_TYPE.ALL"
        >
        </v-checkbox>
        <div :class="[`title-value`]">
          {{ titles[1] }}
        </div>
        <div :class="[`select-num`]">
          <span>{{ targetSettingCp.checkedNum }}</span>
          <span>/</span>
          <span>{{ targetSettingCp.amount }}</span>
        </div>
      </div>
      <template v-if="targetDataRf.length === 0">
        <div :class="[`no-data`]">暂无数据</div>
      </template>
      <template v-else>
        <ul :class="[`${CLS_PRE}-hover-show-scrollbar`, `content`]">
          <div v-if="filterable" class="input-content">
            <v-input
              height="30px"
              v-model="filterSettingRt.target"
              @input="(val) => handleFilter(val, 'target')"
            ></v-input>
          </div>
          <li
            v-for="(item, index) in targetFilterDataCp"
            :class="[{ disabled: item.disabled }]"
            @click="handleItemSelect(item)"
            :key="index"
          >
            <v-checkbox :modelValue="item.checked"></v-checkbox>
            <div
              :class="[
                `content-value`,
                { checked: item.checked, disabled: item.disabled },
              ]"
            >
              {{ item.label }}
            </div>
          </li>
        </ul>
      </template>
      <slot name="target-footer"></slot>
    </div>
  </div>
</template>

<script>
import vCheckbox from '@/comps/checkbox/index.js';
import vButton from '@/comps/button/index.js';
import vInput from '@/comps/input/index.js';

import { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES } from './config';

import { defineComponent, toRef } from 'vue';
import { useCheckbox } from './compos/useCheckbox';
import { useData } from './compos/useData';

export default defineComponent({
  name: COMP_NAME,

  components: {
    vCheckbox,
    vButton,
    vInput,
  },

  emits: EMITS_DEC,

  props: PROPS_DES,

  setup(props, { emit, expose }) {
    const {
      sourceDataRf,
      targetDataRf,
      sourceSettingCp,
      targetSettingCp,
      filterSettingRt,
      sourceFilterDataCp,
      targetFilterDataCp,
    } = useData(toRef(props, 'sourceData'), toRef(props, 'targetData'));

    const {
      CHECKBOX_TYPE,
      getSelectedType,
      handleItemSelect,
      handleChangeAllSel,
    } = useCheckbox();

    function handleFilter(val, type) {
      emit(EMITS.INPUT, val, type);
    }

    function handleTransfer(dataRfArr, settingCpObj) {
      if (getSelectedType(settingCpObj) === CHECKBOX_TYPE.NONE) {
        return;
      }

      const anOtherDataRf =
        dataRfArr === sourceDataRf.value ? targetDataRf : sourceDataRf;

      const remainArr = [];
      const needMoveArr = [];

      dataRfArr.forEach((item) => {
        if (item.checked && !item.disabled) {
          item.checked = false;
          needMoveArr.push(item);
        } else {
          remainArr.push(item);
        }
      });

      dataRfArr.length = 0;
      dataRfArr.push(...remainArr);
      anOtherDataRf.value.push(...needMoveArr);
      anOtherDataRf.value.sort((a, b) => a.order - b.order);

      emit(EMITS.CHANGE, sourceDataRf, targetDataRf);
    }

    expose();

    return {
      CLS_PRE,
      CHECKBOX_TYPE,
      sourceDataRf,
      targetDataRf,
      sourceSettingCp,
      targetSettingCp,
      sourceFilterDataCp,
      targetFilterDataCp,
      filterSettingRt,
      handleChangeAllSel,
      getSelectedType,
      handleItemSelect,
      handleTransfer,
      handleFilter,
    };
  },
});
</script>

<style lang="scss" src="./css/index.scss" scoped></style>
