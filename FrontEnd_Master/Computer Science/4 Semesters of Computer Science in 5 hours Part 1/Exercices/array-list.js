

class ArrayList {
    constructor(){
        this.length = 0
        this.data = {}
    }

    unshift(value){
            if(this.length === 0){
                this.data[0] = value
                this.length++
            } else {
                let tmp = this.data[0]
                this.data[0] = value
                for( let key = 0; key < this.length; key++){
                    let tmp2 = this.data[key+1]
                    this.data[key + 1] = tmp
                    tmp = tmp2
                }
                this.length++
            }

    }

    push(value){
        this.data[this.length] = value
        this.length ++
    }

    pop(){
        delete this.data[this.length - 1]
        this.length --
    }

    get(index){
        return this.data[index]
    }

    delete(index){
        let ans =  this.data[index] 
        this._collapseTo(index)
        return ans
    }

    _collapseTo(index){
        for( let key = index; key < this.length; key++){
            this.data[key] = this.data[key + 1]
        }
        delete this.data[this.length - 1]
        this.length--
    }
}

const myArrayList = new ArrayList

myArrayList.push(1)
myArrayList.push(10)
myArrayList.push(12)
myArrayList.push(11)
myArrayList.push(13)
myArrayList.push(14)
console.log(myArrayList.data)
console.log(myArrayList.get(3))
myArrayList.delete(2)
myArrayList.pop()

console.log(myArrayList.data)