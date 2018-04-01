import Dep from './Dep'
class Observer {
  constructor(value) {
    this.value = value // data数据
    this.walk(this.value)
  }
  walk(obj) { //遍历data数据转换成setter和getter
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i])
    }
  }
}
/**
 * 创建一个Observer实例，返回新的 实例
 * @param {any} value 
 */
export function observe(value) {
  console.log('执行observe',value)
  let ob
  if (typeof value === 'object' && !Array.isArray(value)) {
    ob = new Observer(value)
  }
  return ob
}

export function defineReactive(obj, key, val) {
  let dep=new Dep()
  val = obj[key]
  let childOb = observe(val) //  递归属性的值 
  console.log(key,val,childOb)
 
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function () {
    
      if ({}.toString.call(val) === '[object Function]') {
        return val.call(data)
      } else {
        console.log('get')
        return val
      }
    },
    set: function (newVal) {
      console.log('set')
      if (val === newVal) {
        return
      }
      
      val = newVal
      childOb = observe(val)//当重新设置值时给新值设置set和get
      dep.notify()
    }
  })
}
