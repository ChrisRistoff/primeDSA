export default function bubble_sort(arr: number[]): void {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    len--;
    for (let j = 0; j < len; j++) {

      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}


export function reverse_bubble_sort(arr: number[]): void {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    len--;
    for (let j = 0; j < len; j++) {

      if (arr[j] < arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
