/**
 * @Date 2021-06-18 10:27:08
 * @Remark
 */

interface AccessoryDto {
  accessoriesManagementId: string;
  accessoryName: string;
  enable: boolean;
  price: number;
  quantityUnit: string;
  remark: string;
  type: string;
}

type Accessory = AccessoryDto;
