import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-picker`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  range: {
    required: true,
    type: Object,
  },
  modelValue: {
    required: true,
    type: Object,
  },
  itemWidth: {
    require: false,
    type: Number,
    default: 50,
  },
  itemHeight: {
    required: false,
    type: Number,
    default: 30,
  },
  isShowPopper: {
    required: false,
    type: Boolean,
    default: false,
  },
};

const START_TIME = {
  HOUR: '00',
  MINUTE: '00',
  SECOND: '00',
};

export {
  COMP_NAME,
  CLS_PRE,
  EMITS,
  EMITS_DEC,
  PROPS_DES,
  PROVIDE_KEY,
  START_TIME,
};
