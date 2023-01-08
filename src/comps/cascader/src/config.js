import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-cascader`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {
  AUTO_SELECTED: 'autoSelected',
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  // 说明：提示框数据内容
  tipsArray: {
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
    default: '请选择',
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
    type: Number,
    default: 210,
  },
  // 自动提示组件中每条数据的宽度
  itemWidth: {
    required: false,
    type: Number,
    default: 150,
  },
  // 自动提示组件中每条数据的高度
  itemHeight: {
    required: false,
    type: Number,
    default: 30,
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
