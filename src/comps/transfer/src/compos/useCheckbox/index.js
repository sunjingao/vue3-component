const CHECKBOX_TYPE = {
  ALL: 'all',
  PART: 'part',
  NONE: 'none',
};

export function useCheckbox() {
  // type:
  // 0：一个选中的都没有
  // 1：有选中，但不是所有的都被选中
  // 2：所有的都被选中
  function getSelectedType(settingCpObj) {
    if (
      settingCpObj.amount === 0 ||
      settingCpObj.canCheckedNum === 0 ||
      settingCpObj.checkedNotDisabledNum === 0
    ) {
      return CHECKBOX_TYPE.NONE;
    }

    if (settingCpObj.checkedNotDisabledNum < settingCpObj.canCheckedNum) {
      return CHECKBOX_TYPE.PART;
    }

    return CHECKBOX_TYPE.ALL;
  }

  function handleItemSelect(item) {
    if (item.disabled) {
      return;
    }
    item.checked = !item.checked;
  }

  function handleChangeAllSel(dataRf, settingCpObj) {
    if (dataRf.length === 0) {
      return;
    }

    const type = getSelectedType(settingCpObj);
    if (type === CHECKBOX_TYPE.ALL) {
      dataRf.forEach((item) => {
        if (!item.disabled) {
          item.checked = false;
        }
      });
    } else {
      dataRf.forEach((item) => {
        if (!item.disabled) {
          item.checked = true;
        }
      });
    }
  }

  return {
    CHECKBOX_TYPE,
    getSelectedType,
    handleItemSelect,
    handleChangeAllSel,
  };
}
