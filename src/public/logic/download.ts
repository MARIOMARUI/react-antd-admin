/**
 * @Date 2021-06-30 14:20:21
 * @Remark
 */

export function downloadFileFromUrl(url: string) {
  // 时间戳
  const linkElement = document.createElement("a");
  const href = url;
  linkElement.href = href;
  document.body.appendChild(linkElement);
  linkElement.click();
  document.body.removeChild(linkElement);
  window.URL.revokeObjectURL(href);
}
