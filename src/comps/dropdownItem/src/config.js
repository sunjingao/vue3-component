import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-dropdown-item`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  // 禁止选中
  disabled: {
    require: false,
    type: Boolean,
    default: false,
  },
  // 展示分割线
  divided: {
    require: false,
    type: Boolean,
    default: false,
  },
  // 点击时上传的内容
  command: {
    require: false,
  },
};

export { COMP_NAME, CLS_PRE, EMITS, EMITS_DEC, PROPS_DES, PROVIDE_KEY };
