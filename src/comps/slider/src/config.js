import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-slider`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {
  UPDATE_MODEL_VALUE: 'update:modelValue',
  CHANGE: 'change',
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  modelValue: {
    require: false,
    type: Number,
    default: 0,
  },
  min: {
    require: false,
    type: Number,
    default: 0,
  },
  max: {
    require: false,
    type: Number,
    default: 100,
  },
  step: {
    require: false,
    type: Number,
    default: 1,
  },
  showTooltip: {
    require: false,
    type: Boolean,
    default: true,
  },
  formatTooltip: {
    require: false,
    type: Function,
  },
  showStops: {
    require: false,
    type: Boolean,
    default: false,
  },
  marks: {
    require: false,
    type: Array,
    default: function () {
      return [];
    },
  },
  disabled: {
    require: false,
    type: Boolean,
    default: false,
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
