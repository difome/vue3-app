import dayjs from "dayjs";

export function formatPublishDate(date) {
  return dayjs(date).format("MMMM DD, YYYY, h:mm A");
}
