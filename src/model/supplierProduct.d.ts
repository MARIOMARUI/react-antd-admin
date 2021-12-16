/**
 * @Date 2021-06-18 10:27:08
 * @Remark
 */

interface SupplierProductDto {
  contactDetails: string; //
  contactPerson: string; //
  endOfCodeSegment: number | null;
  factoryName: string; //
  gmtCreate: string; //
  productName: string; //
  productNumber: string; //
  productTypeId: string; //
  remark: string;
  serialNumber: number; //
  startOfCodeSegment: number | null;
  supplierId: string; //
  supplierProductId: string; // 主键
  typeName: string; //
}

type SupplierProduct = SupplierProductDto;
