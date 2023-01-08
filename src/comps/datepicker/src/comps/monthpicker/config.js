import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-month-picker`;
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

// 对应年份的展示名称
const RELATE_MONTH = {
  0: '一月',
  1: '二月',
  2: '三月',
  3: '四月',
  4: '五月',
  5: '六月',
  6: '七月',
  7: '八月',
  8: '九月',
  9: '十月',
  10: '十一月',
  11: '十二月',
};

export {
  COMP_NAME,
  CLS_PRE,
  EMITS,
  EMITS_DEC,
  PROPS_DES,
  PROVIDE_KEY,
  RELATE_MONTH,
  DEFAULT_YEAR,
};
