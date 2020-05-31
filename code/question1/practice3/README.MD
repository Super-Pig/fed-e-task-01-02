# 练习3:

使用帮助函数 _average 重构 averageDollarValue, 使用函数组合的方式实现

```
let _average = function(xs) {
    return fp.reduce(fp.add, 0, xs) / xs.length
}

let averageDollarValue = function(cars){
    let dollar_values = fp.map(function(car){
        return car.dollar_value
    }, cars)

    return _average(dollar_values)
}
```