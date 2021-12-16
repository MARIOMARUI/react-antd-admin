/**
 * @Date 2021-06-18 10:27:08
 * @Remark
 */

interface PermissionDto {
  gmtCreate: string;
  id: number;
  name: string;
  sort: number;
  status: number;
  uri: string;
  value: string;
}

type Permission = PermissionDto;
