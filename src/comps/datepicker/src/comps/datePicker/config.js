import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-date-picker`;
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

const DEFAULT_VAL = {
  YEAR: new Date().getFullYear(),
  MONTH: new Date().getMonth(),
};

// 可以改顺序及label，对应的tip会有显示改变
const WEEK_SEQ = [
  { value: 1, label: '一' },
  { value: 2, label: '二' },
  { value: 3, label: '三' },
  { value: 4, label: '四' },
  { value: 5, label: '五' },
  { value: 6, label: '六' },
  { value: 0, label: '日' },
];

export {
  COMP_NAME,
  CLS_PRE,
  EMITS,
  EMITS_DEC,
  PROPS_DES,
  PROVIDE_KEY,
  DEFAULT_VAL,
  WEEK_SEQ,
};
