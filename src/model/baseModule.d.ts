/**
 * @Date 2021-06-18 10:27:08
 * @Remark
 */

interface BaseModuleDto {
  communicationAbnormal: number;
  equipmentNum: number;
  factoryName: string;
  gprs: number;
  positionAbnormal: number;
  positionStatus: string;
  positionE: number;
  positionN: number;
  positionSpeed: number;
  productNumber: string;
  supplierId: number;
  supplierProductId: number;
  typeId: number;
  typeName: string;
}

type BaseModule = BaseModuleDto;
