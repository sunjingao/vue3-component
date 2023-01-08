import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-year-picker`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {
  SELECT: 'select',
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  // 参数配置
  range: {
    required: false,
    type: [Array, Boolean],
  },
  selectedDate: {
    required: false,
    type: Object,
  },
};

// 无选中时默认展示年份
const DEFAULT_YEAR = new Date().getFullYear();

export {
  COMP_NAME,
  CLS_PRE,
  EMITS,
  EMITS_DEC,
  PROPS_DES,
  PROVIDE_KEY,
  DEFAULT_YEAR,
};
