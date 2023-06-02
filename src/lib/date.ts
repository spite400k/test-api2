import { Timestamp } from "firebase/firestore";

export const formatDate = (date: Timestamp) =>
  date.toDate().toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
