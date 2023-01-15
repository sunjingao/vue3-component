import { useConfig } from '@/hooks/useConfig';

const { CLS_PRE } = useConfig();

const COMP_NAME = `auto`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {
  SELECT: 'select',
  MOUSE_ENTER: 'mouseEnter',
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  modelValue: {
    required: false,
    type: Array,
    default: function () {
      return [];
    },
  },
  // 说明：配置内容
  options: {
    required: false,
    type: Array,
    default: function () {
      return [];
    },
  },
  popperMaxHeight: {
    required: true,
    type: String,
  },
  itemWidth: {
    required: false,
    type: String,
  },
  itemHeight: {
    required: false,
    type: String,
  },
  hoverTrigger: {
    required: false,
    type: Boolean,
    default: false,
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
