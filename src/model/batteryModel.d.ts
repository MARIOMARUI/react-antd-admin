/**
 * @Date 2021-06-18 10:27:08
 * @Remark
 */

interface BatteryModelDto {
  batteryAmperage: number;
  batteryModelId: string;
  batteryShape: string;
  batteryType: string;
  costPrice: number;
  enable: boolean;
  gmtCreate: string;
  modelName: string;
  numberOfBatteries: number;
}

type BatteryModel = BatteryModelDto;
