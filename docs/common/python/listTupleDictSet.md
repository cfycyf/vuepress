---
title: 'list, tuple, dict, set'
date: 2018-09-05 10:14:48
tags: "随笔"
categories: pyhton
---

# python中列表(list)，元组(tuple)，字典(dict)，集合(set)的区别

Django 整理

---

## 列表(list)
 1.任意对象的有序集合列表是一组任意类型的值，按照一定顺序组合而成的   
 2.通过偏移读取组成列表的值叫做元素(Elements)。每一个元素被标识一个索引，第一个索引是0，序列的功能都能实现   
 3.**可变长度，异构以及任意嵌套**列表中的元素可以是任意类型，甚至是列表类型，也就是说列表可以嵌套   
 4.**可变的序列** 支持索引、切片、合并、删除等等操作，它们都是在原处进行修改列表   
 5.对象引用数组列表可以当成普通的数组，每当用到引用时，Python总是会将这个引用指向一个对象，所以程序只需处理对象的操作。当把一个对象赋给一个数据结构元素或变量名时，Python总是会存储对象的引用，而不是对象的一个拷贝。  
``` python
# 可用list()函数建立
list1 = list((1, 2))
# 用[]建立，可包含不同数据类型
list2 = [1, 3, 'hello', 3.5]
# 可用下标访问
print(list1[1])
# 切片
print(list2[1:3])
    
# 结果
    2
    [3, 'hello']
```
### list 方法
>操作 	解释
list.append(): 	追加成员
list.count(x): 	计算列表中参数x出现的次数
list.extend(L): 	向列表中追加另一个列表L
list.index(x): 	获得参数x在列表中的位置
list.insert(): 	向列表中插入数据
list.pop(): 	删除列表中的成员（通过下标删除）
list.remove(): 	删除列表中的成员（直接删除）
list.reverse(): 	将列表中成员的顺序颠倒
list.sort(): 	将列表中成员排序

## 元组(tuple)
	1.任意对象的有序集合与列表相同 
	2.通过偏移存取与列表相同 
	3.属于不可变序列类型类似于字符串，但元组是不可变的，不支持在列表中任何原处修改操作，不支持任何方法调用 
	4.**固定长度、异构、任意嵌套**固定长度即元组不可变，在不被拷贝的情况下长度固定，其他同列表 
	5.对象引用的数组与列表相似，元祖是对象引用的数组

	和list相比 
	1.比列表操作速度快 
	2.对数据“写保护“ 
	3.可用于字符串格式化中 
	4.可作为字典的key

```python
# 可用tuple()函数创建
tuple1 = tuple([1, 2])
# 用()建立，可包含不同数据类型
tuple2 = (1, 3, 'hello', 3.5)
# 可用下标访问
print(tuple1[1])
# 可切片
print(tuple2[1:3])
# 不可以修改元素
tuple1[1] = 10
# 结果
2
(3, 'hello')
TypeError: 'tuple' object does not support item assignment
```
### tuple 方法
>操作 	解释
cmp(tuple1, tuple2) 	比较两个元组元素。
len(tuple) 	计算元组元素个数。
max(tuple) 	返回元组中元素最大值。
min(tuple) 	返回元组中元素最小值。
tuple(seq) 	将列表转换为元组。

## 字典 (dict)

1.通过键而不是偏移量来读取 
字典就是一个关联数组，是一个通过关键字索引的对象的集合，使用键-值（key-value）进行存储，查找速度快 
2.任意对象的无序集合 
字典中的项没有特定顺序，以“键”为象征 
3.可变长、异构、任意嵌套 
同列表，嵌套可以包含列表和其他的字典等 
4.属于可变映射类型 
因为是无序，故不能进行序列操作，但可以在远处修改，通过键映射到值。字典是唯一内置的映射类型（键映射到值的对象） 
5.对象引用表 
字典存储的是对象引用，不是拷贝，和列表一样。字典的key是不能变的，list不能作为key，字符串、元祖、整数等都可以

**和list比较**，dict有以下几个特点： 
1**.查找和插入的速度极快，不会随着key的增加而增加** 
2.**需要占用大量的内存，内存浪费多** 
而list相反： 
1.查找和插入的时间随着元素的增加而增加 
2.占用空间小，浪费内存很少 
所以，**dict是用空间来换取时间的一种方法**

```python
# 用dict()函数创建
dict1 = dict([('name', 'kyda'), ('e', 10)])
# 用{}创建
dict2 = {'name': 'lin', 'age': 21}
print(dict1)
# 使用键（key）来访问元素
print(dict2['name'])
# 使用键（key）来访问元素，并修改元素的值
dict2['age'] = 23
print(dict2)
# 结果
(3, 'hello')
{'name': 'kyda', 'age': 10}
lin
{'name': 'lin', 'age': 23}
```
### dict 方法
>操作 	解释
adict.keys() 	返回一个包含字典所有KEY的列表；
adict.values() 	返回一个包含字典所有value的列表；
adict.items() 	返回一个包含所有（键，值）元祖的列表；
adict.clear() 	删除字典中的所有项或元素；
adict.copy() 	返回一个字典浅拷贝的副本；
adict.fromkeys(seq, val=None) 	创建并返回一个新字典，以seq中的元素做该字典的键，val做该字典中所有键对应的初始值（默认为None）；
adict.get(key, default = None) 	返回字典中key对应的值，若key不存在字典中，则返回default的值（default默认为None）；
adict.has_key(key) 	如果key在字典中，返回True，否则返回False。 现在用 in 、 not in；
adict.iteritems() adict.iterkeys() adict.itervalues() 	与它们对应的非迭代方法一样，不同的是它们返回一个迭代子，而不是一个列表；
adict.pop(key[,default]) 	和get方法相似。如果字典中存在key，删除并返回key对应的vuale；如果key不存在，且没有给出default的值，则引发keyerror异常；
adict.setdefault(key, default=None) 	和set()方法相似，但如果字典中不存在Key键，由 adict[key] = default 为它赋值；
adict.update(bdict) 	将字典bdict的键值对添加到字典adict中。

## 集合(set)

1.是一组key的集合，但不存储value，并且key不能重复 
创建一个set，需要提供一个list作为输入集合,s = set([1,2,3]),注意，传入的参数 [1, 2, 3] 是一个list，而显示的 set([1, 2, 3]) 只是告诉你这个set内部有1，2，3这3个元素，显示的[ ]不表示这是一个list 
2.重复元素在set中自动被过滤 
set可以看成数学意义上的无序和无重复元素的集合，因此，两个set可以做数学意义上的交集、并集等操作

还有一种集合是forzenset( )，是冻结的集合，它是不可变的，存在哈希值，好处是它可以作为字典的key，也可以作为其它集合的元素。缺点是一旦创建便不能更改，没有add，remove方法

和dict对比 
1.set和dict的唯一区别仅在于**没有存储对应的value** 
2.set的原理和dict一样，同样不可以放入可变对象，因为无法判断两个可变对象是否相等，也就无法保证set内部**“不会有重复元素”**
 
``` python
    # 两种方法创建
    set1 = set('kydaa')
    set2 = {'abc', 'jaja', 'abc', 'kyda'}
    print(set1)
    print(set2)
    # 结果
    {'a', 'y', 'd', 'k'}
    {'jaja', 'abc', 'kyda'}
```
### set方法:
>操作 	解释
s.issubset(t)，s <= t 	测试是否 s 中的每一个元素都在 t 中
s.issuperset(t)，s >= t 	测试是否 t 中的每一个元素都在 s 中
s.union(t)，s | t 	返回一个新的 set 包含 s 和 t 中的每一个元素
s.intersection(t)，s & t 	返回一个新的 set 包含 s 和 t 中的公共元素
s.difference(t),s - t 	返回一个新的 set 包含 s 中有但是 t 中没有的元素
s.symmetric_difference(t),s ^ t 	返回一个新的 set 包含 s 和 t 中不重复的元素
s.copy() 	返回 set “s”的一个浅复制
## 总结
### 列表和元组

列表和元组有很多相似的地方，操作也差不多。不过**列表是可变序列，元组为不可变序列**。也就是说列表主要用于对象长度不可知的情况下，而元组用于对象长度已知的情况下，而且**元组元素一旦创建变就不可修改**。 
例如我们在打开一个文本时，并不知道里面有多少行文字，所以用列表来保存。
``` python
    with open('test.txt', 'r') as f:
        print(f.readlines())
    # 结果：
    # ['hello world\n', 'hi kyda\n', 'this is my program']
```
 而我们在储存一个人的信息（名字，年龄，性别，假定只需要这三种信息，所以对象长度为3）的时候，就可以用元组来实现。
``` python
    id = ('kyda', 19, 'man')
    print(id)
    # 结果：
    # ('kyda', 19, 'man')
```
### 字典 
字典主要应用于需要对元素进行标记的对象，这样在使用的时候便不必记住元素列表中或者元组中的位置，只需要利用键来进行访问对象中相应的值。
``` python 
    id = {'name': 'kyda', 'age': 19, ‘sex': 'man')
    print(id['age'])
    # 结果：
    # 19
```
### 集合 
集合中的元素不可重复的特点使它被拿来去重。比如我在爬去糗事百科全站的文章链接(存放与列表中）的时候，不可避免的会遇到重复的链接。这是我们只需将列表转换为集合便能有效的去除重复部分。 
比如上面的例程。

在海量数据中查找元素时，最好将数据创建为字典，或者是集合

这是由于字典和集合背后的查找原理是散列（哈希）表。由于散列表在查找元素时的时间复杂度基本是O(1),这使查找时间很短。

## 灵活运用推导来创建 
推导可以说是python最灵活的特性之一。
``` python
# list 
list1 = [x for x in range(1, 10)]

# 字典
# 用双重推导（笛卡尔积）来创建
list1 = ['name', 'age', 'sex']
list2 = ['kyda', 19, 'man']
ID = {x: y for x in list1 for y in list2}
print(ID)
# {'name': 'man', 'age': 'man', 'sex': 'man'}
# 还可以运用zip()函数简化
ID = {x: y for x, y in zip(list1, list2)}

# 列表和元组也可以运用双重推导（笛卡尔积）来创建。比如我们要生成一个二维坐标数组：
coordinate = [(x, y) for x in range(2) for y in range(2)]
print(coordinate)
# [(0, 0), (0, 1), (1, 0), (1, 1)]
```
## 枚举元素

``` python
# 对于列表， 集合，集合都可以运用for…in…来进行枚举
set1 = {'name', 'age', 'sex'}
 
for tmp in set1:
    print(tmp)
 
# 结果
# name
# age
# sex

# 有时候，我们需要用到元素的索引：
index = 0
for tmp in set1:
    print(tmp, index)
    index += 1
    
#  这样写太过于冗余，我可以用enumerate()函数来帮组我们实现：
for index, tmp in enumerate(set1):
    print(tmp, index)
```
 而对于字典，我们要枚举时就有点麻烦。不过还好，字典的方法中有三个方法帮助我们解决这个问题：
>操作 	解释
adict.keys() 	返回一个包含字典所有KEY的列表；
adict.values() 	返回一个包含字典所有value的列表；
adict.items() 	返回一个包含所有（键，值）元祖的列表；
``` python
ist1 = ['name', 'age', 'sex']
list2 = ['kyda', 19, 'man']
 
ID = {x: y for x, y in zip(list1, list2)}
for tmp in ID.items():
    print(tmp)
# 结果：
# ('age', 19)
# ('sex', 'man')
# ('name', 'kyda')
```
