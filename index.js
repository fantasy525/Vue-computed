import {observe,defineReactive} from './Observer.js'
class V {
  constructor(options) {
    this.options = options;
    this._initData()
  }
  _initData() {
      var data = this._data = this.options.data
      var keys = Object.keys(data)
      var i, key;
      i = keys.length;
      while (i--) {
        key = keys[i]
        this._proxy(key)
      }
      observe(data)
      
    }
    /**
     * 代理data到vm实例上
     * @param {string} key data的属性值
     */
  _proxy(key) {
    var self = this;
    Object.defineProperty(self, key, {
      configurable: true,
      enumerable: true,
      get: function proxyGetter() {
        return self._data[key]
      },
      set: function proxySetter(val) {
        self._data[key] = val
      }
    })
  }
}
const vm=new V({
  data:{
    name:'zxf',
    person:{
      name:'name',
      age:34
    }
  }
})
console.log(vm)

