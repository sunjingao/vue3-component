import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-cascader`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {
  UPDATE_MODEL_VALUE: 'update:modelValue',
  SELECT: 'select',
  CLEAR: 'clear',
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  modelValue: {
    required: false,
    type: Array,
    default: function () {
      return [];
    },
  },
  // 说明：配置内容
  options: {
    required: false,
    type: Array,
    default: function () {
      return [];
    },
  },
  // 说明：input宽度
  width: {
    required: false,
    type: String,
    default: '170px',
  },
  // 说明：input高度
  height: {
    required: false,
    type: String,
    default: '40px',
  },
  // 说明：input默认展示文字
  placeholder: {
    required: false,
    type: String,
    default: '',
  },
  // 说明：input是否清空输入框
  clearable: {
    required: false,
    type: Boolean,
    default: false,
  },
  // 提示框是否显示全部级别
  showAllLevels: {
    required: false,
    type: Boolean,
    default: true,
  },
  // hover 触发
  hoverTrigger: {
    required: false,
    type: Boolean,
    default: false,
  },
  // 自动提示组件的高度
  popperMaxHeight: {
    required: false,
    type: String,
    default: '210px',
  },
  // 自动提示组件中每条数据的宽度
  itemWidth: {
    required: false,
    type: String,
    default: '150px',
  },
  // 自动提示组件中每条数据的高度
  itemHeight: {
    required: false,
    type: String,
    default: '30px',
  },
  // 自动提示组件中每条数据的高度
  separator: {
    required: false,
    type: String,
    default: ' / ',
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
