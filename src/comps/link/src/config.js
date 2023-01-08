import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-link`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {
  CLICK: 'click',
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  type: {
    required: false,
    type: String,
    default: 'default',
  },
  disabled: {
    required: false,
    type: Boolean,
    default: false,
  },
  underline: {
    required: false,
    type: Boolean,
    default: true,
  },
  href: {
    required: false,
    type: String,
    default: '',
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
