# fed-e-task-01-02 简答题答案

# 1. 描述引用计数的原理和优缺点

## 答：

引用计数算法核心思想：

- 通过引用计数器来维护对象的引用数，判断当前引用数是否为0。如果对象引用数为0，则GC对该对象占用的空间进行释放和回收

- 当某个对象的引用关系改变时修改引用数字，每当一个新的变量指向一个对象，该对象的引用计数就 +1；每当一个引用被移除，该对象的引用计数就 -1；当引用数字为0时立即回收

优点：

发现垃圾时立即回收
最大限度减少程序暂停（由于发现垃圾立即回收，所以降低了内存爆满的几率）


缺点：

无法回收循环引用的对象
由于需要时刻监控并维护对象的引用，因此时间开销大

# 2. 描述标记整理算法的工作流程

## 答：

第一步：遍历所有对象，对活动对象（可达对象）进行标记

第二步：对活动对象进行整理，移动对象位置，使活动对象占用的内存地址变成连续的

第三步：对活动对象所占用之外的内存地址进行整体的回收

# 3. 描述 V8 中新生代存储区垃圾回收的流程

## 答：

V8 内存空间一分为二，小空间（64位操作系统 32M, 32位操作系统 16M）用于存储新生代对象（即存活时间较短的对象，比如局部所用域中的对象）

新生代对象回收采用复制算法 + 标记整理算法，回收流程：

- 新生代内存区分为二个等大小的空间，使用空间为 From, 空闲空间为 To

- 当触发 GC 操作时，对 From 中的活动对象进行标记整理

- 把标记整理过后的活动对象拷贝至 To

- From 和 To 交换空间，对 From 进行完全释放

回收过程中会存在对象晋升：新生代对象拷贝至老生代存储区

- 经过一轮 GC 还存活的新生代需要晋升

- To 空间的使用率超过 25%, 则新生代活动对象需要晋升

# 4. 描述增量标记算法在何时使用，及工作原理

## 答：

V8 在进行老生代对象回收时会使用标记清除、标记增量和增量标记算法

- 老生代对象 GC 主要采用标记清除算法

- 在对象晋升过程中，如果老生代空间中的碎片空间不足以存放晋升的新生代对象时，会对老生代空间进行标记整理

- 采用增量标记算法对回收效率进行优化

增量标记原理：

GC 工作时会阻塞 JavaScript 程序的执行，增量标记的目的是把 GC 在时间上进行分散，使 GC 和程序可以交替执行

在程序运行过程中，GC 先对直接可达对象进行标记，然后让程序继续执行一段时间，GC再对子对象进行标记；当程序执行完成后，GC 对标记的对象进行释放和回收