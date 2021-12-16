/**
 * @Date 2021-06-18 10:27:08
 * @Remark
 */

interface SupplierDto extends AreaCode {
  address: string; //
  businessLicense: string; //
  businessLicenseImg: string; // 做链接
  contactDetails: string; //
  contactPerson: string; //
  factoryName: string; //
  gmtCreate: string; //
  productTypeId: string;
  remark: string; //
  serialNumber: number; //
  supplierId: string; // 主键
}

type Supplier = SupplierDto;
