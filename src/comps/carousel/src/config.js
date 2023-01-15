import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-carousel`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {
  CHANGE: 'change',
  PREV: 'prev',
  NEXT: 'next',
  LOCATE: 'locate',
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  initIndex: {
    require: false,
    type: Number,
    default: 1,
  },
  height: {
    require: false,
    type: String,
    default: '300px',
  },
  trigger: {
    require: false,
    type: String,
    validator(val) {
      return ['click', 'hover'].includes(val);
    },
    default: 'hover',
  },
  autoplay: {
    require: false,
    type: Boolean,
    default: true,
  },
  interval: {
    require: false,
    type: Number,
    default: 2000,
  },
  transition: {
    require: false,
    type: Number,
    default: 500,
  },
  indicator: {
    require: false,
    type: String,
    validator(val) {
      return ['outside', 'inside', 'none'].includes(val);
    },
    default: 'inside',
  },
  arrow: {
    require: false,
    type: String,
    validator(val) {
      return ['always', 'hover', 'never'].includes(val);
    },
    default: 'hover',
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
