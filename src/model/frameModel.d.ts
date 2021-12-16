/**
 * @Date 2021-06-18 10:27:08
 * @Remark
 */

interface FrameModelDto {
  frameModelId: string; //
  costPrice: number; //
  enable: boolean; //
  managementType: string; //
  modelName: string; //
  owner: number;
  remark: string;
}

type FrameModel = FrameModelDto;
