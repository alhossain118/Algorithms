function LinkedList(){
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev){
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value){
  var newNode = new Node(value, this.head, null);
  if(this.head) {this.head.prev = newNode;
    console.log('hit')
  }
  else { this.tail = newNode;
    console.log('hit2')
  }
  this.head = newNode;
}

var ll = new LinkedList();
ll.addToHead(10);
ll.addToHead(10);
ll.addToHead(20);
console.log(ll)
