import { useConfig } from '@/hooks/useConfig';

const { COMP_PRE, CLS_PRE } = useConfig();

const COMP_NAME = `${COMP_PRE}-tree`;
const PROVIDE_KEY = COMP_NAME;

const EMITS = {
  SELECT: 'select',
  CHECK: 'check',
  EXPAND: 'expand',
};

const EMITS_DEC = Object.values(EMITS);

const PROPS_DES = {
  nodeList: {
    required: true,
    type: Object,
  },
  expandOps: {
    required: false,
    type: Object,
    default() {
      return {
        expandAll: true,
        defaultExpandedKeys: [],
      };
    },
  },
  checkedOps: {
    required: false,
    type: Object,
    default() {
      return {
        isShow: false,
        checkedAll: false,
        defaultCheckedKeys: [],
      };
    },
  },
  selectedOps: {
    required: false,
    type: Object,
    default() {
      return {
        parentSelected: false,
        defaultSelectedKeys: [],
      };
    },
  },
};

const CHECK_TYPES = {
  ALL: 2,
  PART: 1,
  NONE: 0,
};

export {
  COMP_NAME,
  CLS_PRE,
  EMITS,
  EMITS_DEC,
  PROPS_DES,
  PROVIDE_KEY,
  CHECK_TYPES,
};
