import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-dialog`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {
  UPDATE_MODEL_VALUE: 'update:modelValue',
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  // 是否展示
  modelValue: {
    required: false,
    type: Boolean,
    default: false,
  },
  title: {
    required: false,
    type: String,
    default: '',
  },
  // title 和 footer 是否居中
  center: {
    required: false,
    type: Boolean,
    default: false,
  },
  // 是否展示关闭按钮
  showClose: {
    require: false,
    type: Boolean,
    default: true,
  },
  // 宽度
  width: {
    require: false,
    type: String,
    default: '50%',
  },
  // 点击关闭按钮前的回调
  closeCallBack: {
    required: false,
    type: Function,
    default: function () {
      return function () {
        return true;
      };
    },
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
