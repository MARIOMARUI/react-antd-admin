/**
 * @Date 2021-08-27 14:01:45
 * @Remark
 */

// config
// state
// controller
// script & methods & public
// 其它

export function chooseCheck(type: string, list: string[]): boolean {
  if (type !== "platformAccount") {
    return false;
  }
  // 平台 - 换电公司 业务逻辑死胡同 添加不了经销商的换电公司
  if (list.length === 1 && list.includes("changeTheBatteryCompany")) {
    return true;
  }
  // 平台 - 平台/换电公司 业务逻辑死胡同 可以添加非业务账号但添加不了经销商的换电公司
  if (
    list.length === 2 &&
    list.includes("platformAccount") &&
    list.includes("changeTheBatteryCompany")
  ) {
    return true;
  }
  // 平台 - 平台/经销商 不合现实的业务逻辑 可以添加非业务账号和经销商账号的账号
  if (
    list.length === 2 &&
    list.includes("platformAccount") &&
    list.includes("dealerAccount")
  ) {
    return true;
  }
  // 平台 - 全选
  // 平台 - 平台 非业务帐号
  // 平台 - 经销商 业务账号
  // 平台 - 换电公司/经销商 合逻辑但是不确定业务中有没有的类型,暂时算合法,用这个类型账号进入可以添加换电公司和经销商账号
  return false;
}

export function typeListFilter(list: Dict[], type: string): Dict[] {
  // 平台账号可以添加所有类型的账号
  if (type === "platformAccount") {
    return list;
  }
  // 换电公司账号能添加经销商账号
  // 经销商账号可以添加经销商账号
  if (type === "changeTheBatteryCompany" || type === "dealerAccount") {
    return list.filter((el) => el.statusCode === "dealerAccount");
  }
  return [];
}

// 一字段多多种用途
// companyId在账号是换电公司账号时是代表自己是什么公司,在账号是经销商账号时是代表所属是什么换电公司
// 无限子经销商
// 可能的错误场景: 换电公司账号设置为关联景区
