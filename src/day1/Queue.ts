type QNode<T> = {
  value: T; // value of node
  next?: QNode<T>; // next node in queue
};

export default class Queue<T> {
  public length: number; // length of queue
  private head?: QNode<T>; // head of queue (first item)
  private tail?: QNode<T>; // tail of queue (last item)



  constructor() {
    this.head = this.tail = undefined; // empty queue by default, it will change when we add items
    this.length = 0; // length of queue
  }

  enqueue(item: T): void {
    const node = {value: item} as QNode<T>; // create new node
    this.length++; // increment length
    if (!this.tail) {
      this.tail = this.head = node; // if tail doesn't exist, set tail and head to new node
      return;
    }

    this.tail.next = node; // set next node of tail to new node
    this.tail = node; // set tail to new node

}

  // add item to end of queue (tail)
  deque(): T | undefined {
    if (!this.head) return undefined; // if head doesn't exist return undefined

    const head = this.head; // get value of head
    this.head = this.head.next; // set head to next node
    this.length--; // decrement length

    head.next = undefined; // remove reference to next node

    if (!this.head) this.tail = undefined; // if head doesn't exist, set tail to undefined

    return head.value ; // return value of head

}
  peek(): T | undefined {
    return this.head?.value; // return value of head if it exists otherwise return undefined

}
}
