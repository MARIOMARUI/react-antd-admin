/**
 * @Date 2021-06-11 11:17:14
 * @Remark block1
 */

import UrlParse from "url-parse";
import { RouteComponentProps } from "react-router-dom";

// 获得UrlParse对象
function getParseUrl(url: string, parser: boolean = true) {
  return new UrlParse(url, parser);
}

// 获得id
function getUrlQueryId(location: any) {
  const url = getParseUrl(`${location.pathname}${location.search}`);
  const { id } = url.query;

  return id;
}

// 获得携带参数
function getUrlQuery(location: any) {
  const url = getParseUrl(`${location.pathname}${location.search}`);
  return url.query;
}

// 获得id
function getUrlId(props: RouteComponentProps<any>): number {
  const { match } = props;
  const { id } = match.params;
  const params = parseInt(id, 10);
  return params;
}

export default {
  getParseUrl,
  getUrlQuery,
  getUrlQueryId,
  getUrlId,
};
