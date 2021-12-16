/**
 * @Date 2021-06-10 19:06:29
 * @Remark block2
 */

/**
 * api描述文件
 */
interface Api {
  title: string;
  path: string;
  method: "" | "GET" | "POST" | "STATIC" | "UPLOAD";
  prefix: "" | "api" | "li_dian";
  controller?: string;
  remark?: string;
}

/**
 * req
 */
interface ReqById {
  id: number;
}

interface ReqByStrId {
  id: string;
}

interface ReqByBizId {
  bizId: string;
}

interface ReqPage {
  pageNum: number;
  pageSize: number;
}

/**
 * res
 */

interface Res {
  result: number;
  message: string;
  data?: unknown;
}

type ResSimple = Res;

interface ResList<D> extends Res {
  data: null | D[];
}

interface ResPage<D> extends Res {
  data: {
    list: null | D[];
    total: number;
  };
}

interface ResObject<D> extends Res {
  data: D;
}

interface ResBoolean extends Res {
  data: boolean;
}

/**
 * service
 */
interface BagData<T> {
  fail: Res[];
  err: Res[];
  payload: T | null; // 最后返回和处理过的数据容器
}

interface PageData<T> {
  total: number;
  list: T[];
}

/**
 * model
 */
interface StrCodeMap<T> {
  [code: string]: T;
}
interface NumCodeMap<T> {
  [code: number]: T;
}

type StrMap = StrCodeMap<string>;
type NumStrMap = NumCodeMap<string>;
