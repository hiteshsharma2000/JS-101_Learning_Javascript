class customarray{
    constructor(...elements){
 
        this.size=elements.length;
        for(let i=0;i<this.size;i++){
            this[i]=elements[i]
        }
        console.log(this)
    }
 push(element){
        this[this.size]=element;
       this.size++
       console.log(this)
    }
    pop() {
        
        const removedElement = this[this.size - 1];
        delete this[this.size - 1];
        this.size--;
        
console.log(this)
      }
top(){
console.log(this[this.size-1])
}
print(){
    let arr2=[];
    for(let i=0;i<this.size;i++){
        arr2.push(this[i])
        
    }console.log(arr2)
}
reverse(){
    let arr2=[];
    for(let i=this.size-1;i>=0;i--){
        arr2.push(this[i])
       
    } console.log(arr2)
}
}
let arr=new customarray(1,5,6,15) ;

arr.push(41);
arr.pop();
arr.print();
arr.reverse();
arr.top();