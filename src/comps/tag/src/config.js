import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-tag`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {
  CLOSE: 'close',
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  type: {
    type: String,
    required: false,
    default: '',
  },
  closeable: {
    type: Boolean,
    required: false,
    default: false,
  },
  width: {
    type: [Number, String],
    required: false,
    default: 'auto',
  },
  height: {
    type: Number,
    required: false,
    default: 32,
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
