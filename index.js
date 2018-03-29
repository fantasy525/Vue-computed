import Observer from './Observer.js'
let V=function(){
  function V(options){
   this.options=options;
   this._initData()
  }
  V.prototype={
    _initData:function(){
      var data=this._data=this.options.data
      var keys=Object.keys(data)
      var i,key;
      i=keys.length;
      while(i--){
        key=keys[i]
        this._proxy(key)
      }
    },
    /**
     * 代理data到vm实例上
     * @param {string} key data的属性值
     */
    _proxy:function(key){
      var self=this;
      Object.defineProperty(self,key,{
        configurable: true,
        enumerable: true,
        get: function proxyGetter () {
          return self._data[key]
        },
        set: function proxySetter (val) {
          self._data[key] = val
        }
      })
    }
  }
  return V
}()
// function defineReactive(vm,prop,value){
 
//   Object.defineProperty(vm,prop,{
//     get:function(){
//       console.log('get')
//       if({}.toString.call(value)==='[object Function]'){
//         return value.call(data) 
//       }
//      else{
//        return value
//      }
//     },
//     set:function(newVal){
//       console.log('set')
//         if(value===newVal){
//           return
//         }
//        value=newVal
//     }
//   })
// }
// function initData(){
//   var data=vm.data
// }

// var data=vm.data
// for(var k in data){
//   if(data.hasOwnProperty(k)){
//     defineReactive(vm,k,data[k])
//   }
// }
var vm=new V({
  data:{
    name:'苹果'
  },
  computed:{
    food:function(){
      return this.name
    }
  }
})

