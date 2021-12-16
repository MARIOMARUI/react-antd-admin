/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-08-16 11:42:32
 * @LastEditTime: 2021-11-01 16:44:34
 */
/**
 * @Date 2021-06-18 10:27:08
 * @Remark
 */

interface BatteryDto {
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

type Battery = BatteryDto;
