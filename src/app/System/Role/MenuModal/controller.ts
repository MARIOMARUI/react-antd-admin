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
// service
import { editRoleMenuService, getRoleMenuService } from "biz/role/service";
// interface && type && class
// 其它

export async function getRoleMenu(model: Role) {
  stateRoleModal.setTargetKeys([]);
  // 调用服务
  const result = await getRoleMenuService(model.id);
  // 成功
  if (result.payload) {
    const list = result.payload.map((el) => el.id.toString());
    stateRoleModal.setTargetKeys(list);
  }
}

export async function editRoleMenu(value: string[]) {
  const role = stateRoleModal.getModal();
  if (!role) return;
  // 开始前
  stateRoleModal.setModalLoading(true);
  // 调用服务
  const result = await editRoleMenuService(role.id, value);
  // 结束后
  stateRoleModal.setModalLoading(false);
  // 成功
  if (result.payload) {
    toast.success("设置成功");
    stateRoleModal.setTargetKeys(value);
  }
}

export async function showMenuModal(model: Role) {
  stateRoleModal.setModal(model);
  getRoleMenu(model);
}
