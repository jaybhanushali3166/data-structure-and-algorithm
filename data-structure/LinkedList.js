
class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}
// A class for Node which is basic building block in LL 
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }


    append(element) {
        let node = new Node(element)
    }
    deleteNode(element) {
        let temp = head, prev = null;

        // if head is key to be deleted
        if (temp != null && element.data == key) {
            head = temp.next;
            return;
        }

        // search and remove key
        while (temp != null && element.data !== key) {
            prev = temp;
            temp = temp.next;
        }
        // if key was not present in linked list
        if (temp == null)
            return;

        // unlink the node from linked list
        prev.next = temp.next;
    }
}

