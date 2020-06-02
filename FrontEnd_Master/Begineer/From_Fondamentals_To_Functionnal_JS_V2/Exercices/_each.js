let _ = {}
 
_.each = function(list,callback){
    if( Array.isArray(list)){
        for( item in list){
            callback(list[item], item, list)
        }
    } else {
        for ( key in obj){
            callback(list[key], key, list)
        }
    }
}

let myList = ['toto', 'titi', 'tata', 'tutu']


_.each(myList, function (name, index, list ){
    console.log('my name is '+name+ ' and im '+index+' years old toudoum a list appears = ' + list) 
})