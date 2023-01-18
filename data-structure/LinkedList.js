
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

    // Function to add the node at start of linked list
    append(newData) {
        /* 1 & 2: Allocate the Node &
                  Put in the data*/
        var newNode = new Node(newData);

        /* 3. Make next of new Node as head */
        newNode.next = head;

        /* 4. Move the head to point to new Node */
        head = newNode;
    }

    // Inserts a new node after the given prevNode
    insertAfter(prevNode, newData) {

        /* 1. Check if the given Node is null */
        if (prevNode == null) {
            document.write("The given previous node cannot be null");
            return;
        }

        /* 2. Allocate the Node & 
        3. Put in the data*/
        var new_node = new Node(newData);

        /* 4. Make next of new Node as next of prevNode */
        new_node.next = prevNode.next;

        /* 5. make next of prevNode as new_node */
        prevNode.next = new_node;
    }

    //Appends a new node at the end
    appendAtEnd(new_data) {
        /* 1. Allocate the Node &
           2. Put in the data
           3. Set next as null */
        var new_node = new Node(new_data);

        /* 4. If the Linked List is empty, then make the
               new node as head */
        if (head == null) {
            head = new Node(new_data);
            return;
        }

        /* 4. This new node is going to be the last node, so
             make next of it as null */
        new_node.next = null;

        /* 5. Else traverse till the last node */
        var last = head;
        while (last.next != null)
            last = last.next;

        /* 6. Change the next of last node */
        last.next = new_node;
        return;
    }


    // Function to delete the nth node from
    // given position linked list
    deleteNode(position) {

        // If linked list is empty 
        if (head == null)
            return;

        // Store head node 
        var temp = head;

        // If head needs to be removed 
        if (position == 0) {

            // Change head 
            head = temp.next;
            return;
        }

        // Find previous node of the node to be deleted 
        for (i = 0; temp != null && i < position - 1; i++)
            temp = temp.next;

        // If position is more than number of nodes 
        if (temp == null || temp.next == null)
            return;

        // Node temp->next is the node to be deleted 
        // Store pointer to the next of node to be deleted 
        var next = temp.next.next;

        // Unlink the deleted node from list 
        temp.next = next;
    }

    /*
    * Given a key, deletes the first occurrence of key in linked list
    */
    deleteNodeFromStart(key) {
        // Store head node
        var temp = head, prev = null;

        // If head node itself holds the key to be deleted
        if (temp != null && temp.data == key) {
            head = temp.next; // Changed head
            return;
        }

        // Search for the key to be deleted, keep track of
        // the previous node as we need to change temp.next
        while (temp != null && temp.data != key) {
            prev = temp;
            temp = temp.next;
        }

        // If key was not present in linked list
        if (temp == null)
            return;

        // Unlink the node from linked list
        prev.next = temp.next;
    }

    // Function to delete the nth node from
    // the end of the given linked list
    deleteNodeFromEnd(position) {

        // First pointer will point to
        // the head of the linked list
        var first = head;

        // Second pointer will point to the
        // Nth node from the beginning
        var second = head;
        for (i = 0; i < position; i++) {

            // If count of nodes in the given
            // linked list is <= N
            if (second.next == null) {

                // If count = N i.e. delete the head node
                if (i == position - 1)
                    head = head.next;
                return;
            }
            second = second.next;
        }

        // Increment both the pointers by one until
        // second pointer reaches the end
        while (second.next != null) {
            first = first.next;
            second = second.next;
        }

        // First must be pointing to the
        // Nth node from the end by now
        // So, delete the node first is pointing to
        first.next = first.next.next;
    }



}

