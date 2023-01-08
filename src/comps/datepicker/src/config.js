import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-date-picker`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {
  CHANGE: 'change',
  CLEAR: 'clear',
  ENTER: 'enter',
  BLUR: 'blur',
};

const EMITS_DEC = Object.values(EMITS);

const DATE_TYPES = {
  YEAR: 'year',
  MONTH: 'month',
  DATE: 'date',
};

const PROPS_DES = {
  // date类型
  type: {
    required: false,
    type: String,
    validate(val) {
      return Object.values(DATE_TYPES).includes(val);
    },
    default: 'year',
  },
  // 参数配置
  range: {
    required: false,
    type: Array,
  },
  // 说明：宽度
  width: {
    required: false,
    type: String,
    default: '170px',
  },
  // 说明：高度
  height: {
    required: false,
    type: String,
    default: '40px',
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
  editable: {
    required: false,
    type: Boolean,
    default: false,
  },
  defaultTime: {
    required: false,
    type: Object,
  },
  separator: {
    required: false,
    type: String,
    default: '-',
  },
};

export {
  COMP_NAME,
  CLS_PRE,
  EMITS,
  EMITS_DEC,
  PROPS_DES,
  PROVIDE_KEY,
  DATE_TYPES,
};
