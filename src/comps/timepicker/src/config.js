import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-timepicker`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {
  SELECT: 'select',
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  width: {
    required: false,
    type: String,
  },
  height: {
    required: false,
    type: String,
    default: '40px',
  },
  // 是否展示结束时间
  showEndTime: {
    required: false,
    type: Boolean,
    default: false,
  },
  // 说明：默认展示文字
  placeholder: {
    required: false,
    type: String,
    default: '',
  },
  // 说明：是否清空输入框
  clearable: {
    required: false,
    type: Boolean,
    default: false,
  },
  // 自动提示组件中每条数据的高度
  itemHeight: {
    required: false,
    type: Number,
    default: 30,
  },
  itemWidth: {
    require: false,
    type: Number,
    default: 50,
  },
  // 时间范围
  startRange: {
    required: false,
    type: Object,
  },
  startDefaultTime: {
    required: false,
    type: Object,
  },
  // 时间范围
  endRange: {
    required: false,
    type: Object,
  },
  endDefaultTime: {
    required: false,
    type: Object,
  },
  editable: {
    required: false,
    type: Boolean,
    default: false,
  },
  separator: {
    required: false,
    type: String,
    default: ':',
  },
};

const TIME_SEPARATOR = ' 至 ';

export {
  COMP_NAME,
  CLS_PRE,
  EMITS,
  EMITS_DEC,
  PROPS_DES,
  PROVIDE_KEY,
  TIME_SEPARATOR,
};
