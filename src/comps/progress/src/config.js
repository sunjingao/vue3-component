import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-progress`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  percentage: {
    require: true,
    type: Number,
  },
  type: {
    require: false,
    type: String,
    validator(val) {
      return ['line', 'circle'].includes(val);
    },
    default: 'line',
  },
  width: {
    require: false,
    type: Number,
    default: 400,
  },
  spacing: {
    require: false,
    type: Number,
    default: 6,
  },
  format: {
    require: false,
    type: Function,
  },
  textWidth: {
    require: false,
    type: Number,
    default: 30,
  },
  textInside: {
    require: false,
    type: Boolean,
    default: false,
  },
  bgColor: {
    require: false,
    type: [String, Array, Function],
    default: '#409eff',
  },
  // 圆的直径
  diameter: {
    require: false,
    type: Number,
    default: 150,
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
