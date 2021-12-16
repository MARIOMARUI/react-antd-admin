/**
 * @Date 2021-07-22 10:40:40
 * @Remark
 */

interface UserDto {
  gmtCreate: string;
  headPortrait: null | string;
  holdIDCard: null | string;
  identityNumber: string;
  mobile: string;
  nationalEmblem: null | string;
  nickName: string;
  portraitFace: string;
  statusEnum: string;
  typeEnum: string;
  userId: string;
  userName: string;
}

type User = UserDto;
