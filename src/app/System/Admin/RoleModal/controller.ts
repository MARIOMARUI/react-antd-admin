/**
 * @Date 2020-07-02 16:13:11
 * @Remark
 */

// lib
// config
// script & methods & public
import toast from "cts/toast";
// store
import { stateRoleModal } from "./state";
import { dictState } from "state/global";
// service
import { editAdminRoleService, getAdminRolesService } from "biz/admin/service";
// interface && type && class
import { TransferItem } from "antd/lib/transfer";
// 其它

export function createModalTransferData() {
  const result = dictState.roles.map((el) => {
    const item: TransferItem = {
      key: el.id.toString(),
      title: el.name,
      description: el.description,
    };
    return item;
  });
  return result;
}

export async function getAdminRoleList(model: Admin) {
  stateRoleModal.setTargetKeys([]);
  // 调用服务
  const result = await getAdminRolesService(model.userId);
  // 成功
  if (result.payload) {
    const list = result.payload.map((el) => el.id.toString());
    stateRoleModal.setTargetKeys(list);
  }
}

export async function letAdminRoleUpdate() {
  const user = stateRoleModal.getModal();
  if (!user) return;
  // 开始前
  stateRoleModal.setModalLoading(true);
  // 调用服务
  const result = await editAdminRoleService(
    user.userId,
    stateRoleModal.getTargetKeys(),
  );
  // 结束后
  stateRoleModal.setModalLoading(false);
  // 成功
  if (result.payload) {
    toast.success("设置成功");
    stateRoleModal.setModal(null);
    stateRoleModal.setTargetKeys([]);
  }
}

export async function showRoleModal(model: Admin) {
  stateRoleModal.setModal(model);
  getAdminRoleList(model);
}
