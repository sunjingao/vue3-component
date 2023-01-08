import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-image`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  src: {
    require: false,
    type: String,
    default: '',
  },
  alt: {
    require: false,
    type: String,
    default: '',
  },
  error: {
    require: false,
    type: String,
    default: '',
  },
  fit: {
    require: false,
    type: String,
    validator(val) {
      return ['fill', 'contain', 'cover', 'none', 'scale-down'].includes(val);
    },
    default: 'fill',
  },
  lazy: {
    require: false,
    type: Boolean,
    default: false,
  },
  scrollContainer: [String, Object],
  updateTimer: {
    require: false,
    type: Number,
    default: 500,
  },
  showHeight: {
    require: false,
    type: Number,
    default: 50,
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
