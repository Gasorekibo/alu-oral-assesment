class ListNode<T> {
  data: T;
  next: ListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  private head: ListNode<T> | null = null;
  private tail: ListNode<T> | null = null;
  private size: number = 0;


  public add(data: T): void {
    const newNode = new ListNode(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
    }
    
  public remove(data: T): boolean {
    if (!this.head) return false;

    if (this.head.data === data) {
      this.head = this.head.next;
      if (!this.head) this.tail = null;
      this.size--;
      return true;
    }

    let currentNode = this.head!;
    while (currentNode.next) {
      if (currentNode.next.data === data) {
        currentNode.next = currentNode.next.next;
        if (!currentNode.next) this.tail = currentNode;
        this.size--;
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  public find(data: T): ListNode<T> | null {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
}

