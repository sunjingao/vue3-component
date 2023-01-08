/*
 * checkbox改变规则：
 * 初始化时：子节点的check优先级更高，如果没设置check，默认是false
 * disabled 只受自己的nodeList的状态影响，不会受父节点状态的影响，即使设置checkedAll，也不会收父节点的影响
 *
 * 状态说明：
 *         0：自己及子元素都没被选中，
 *         1：除disabled为true的节点外，子节点非全选（一种情况是全部选，另一种情况是选了一部分），
 *         2：除disabled为true的节点外，子节点全选，
 *         3：自己及子元素全被选中
 *
 *
 * */

export function useCheckbox(setting) {
  let noNodeListNodeArr = [];

  /*
   * 初始化时从根节点开始添加checked状态
   * 工作就是给各个node的checked赋值，并给最里面的树节点的checkboxType赋值
   * */
  function initNodeCheckedUpToDown(node) {
    node.forEach((x) => {
      if (x.nodeList && x.nodeList.length > 0) {
        x.nodeList.forEach((v) => {
          if (!v.disabled) {
            v.checked = x.checked;
          }
        });
        initNodeCheckedUpToDown(x.nodeList);
      } else if (!x.nodeList || x.nodeList.length === 0) {
        if (x.checked) {
          x.checkboxType = 3;
        } else {
          x.checkboxType = 0;
        }
        if (
          !noNodeListNodeArr.some((v) => {
            return v.parent === x.parent;
          })
        ) {
          noNodeListNodeArr.push(x);
        }
      }
    });
  }

  /*
   * 自下而上改变状态
   * 更改各个节点的checkboxType
   * */
  function initNodeCheckedDownToUp(nodeList) {
    const nodeListArr = [];
    nodeList.forEach((x) => {
      if (!x.parent) {
        return;
      }
      if (
        x.parent.nodeList.every((v) => {
          return v.checkboxType === 0;
        })
      ) {
        x.parent.checkboxType = 0;
      } else if (
        x.parent.nodeList.every((v) => {
          return v.checkboxType === 3;
        })
      ) {
        x.parent.checkboxType = 3;
      } else if (
        x.parent.nodeList
          .filter((v) => !v.disabled)
          .every((v) => {
            return v.checkboxType === 3 || v.checkboxType === 2;
          })
      ) {
        x.parent.checkboxType = 2;
      } else {
        x.parent.checkboxType = 1;
      }

      if (
        !!x.parent &&
        !nodeListArr.some((v) => {
          return v.parent === x.parent;
        })
      ) {
        nodeListArr.push(x.parent);
      }
    });

    if (nodeListArr.length > 0) {
      initNodeCheckedDownToUp(nodeListArr);
    }
  }

  /*
   * 初始化checkbox节点状态 */
  function initCheckboxType() {
    if (!setting.viewSetting || !setting.viewSetting.showCheckBox) {
      return;
    }

    noNodeListNodeArr = [];
    // checkboxOperate  数据初始化后对全部节点的checkbox进行修改
    if (setting.viewSetting.checkedAll) {
      setting.nodeList.forEach((x) => {
        if (!x.disabled) {
          x.checked = true;
        }
      });
    }

    noNodeListNodeArr = [];
    initNodeCheckedUpToDown(setting.nodeList);
    initNodeCheckedDownToUp(noNodeListNodeArr);
  }

  /*
   * 当用户点击checkbox引发状态改变时 */
  function changeCheckbox(item) {
    if (!setting.viewSetting.showCheckBox) {
      return;
    }

    item.checked = item.checkboxType === 1 || item.checkboxType === 0;

    if (!!item.nodeList && item.nodeList.length > 0) {
      item.nodeList.forEach((x) => {
        if (!x.disabled) {
          x.checked = item.checked;
        }
      });
      initNodeCheckedUpToDown(item.nodeList);
    } else {
      initNodeCheckedUpToDown([item]);
    }

    initNodeCheckedDownToUp(noNodeListNodeArr);
  }

  return {
    initCheckboxType,
    changeCheckbox,
  };
}
