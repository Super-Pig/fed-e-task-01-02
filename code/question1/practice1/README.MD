使用函数组合 fp.flowRight() 重新实现下面这个函数

```
let isLastInStock = function(cars){
    //获取最后一条数据
    let last_car = fp.last(cars)

    //获取最后一条数据的 in_stock 属性值

    return fp.prop('instock', last_car)
}
```