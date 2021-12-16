/**
 * @Date 2021-06-18 10:27:08
 * @Remark
 */

interface SupplierProductTypeDto {
  gmtCreate: string;
  remark: string;
  typeId: string; // 主键
  typeName: string;
}

type SupplierProductType = SupplierProductTypeDto;
