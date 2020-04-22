---
title: kernel
date: 2019-11-19 16:08:01
tags: ""
categories: ""
---

## kernel 的一些操作

### kernel log 等级 
```shell
echo '7       4      1       7' >/proc/sys/kernel/printk
#默认是 7	7	1	7, 7417一般会输出到console
```
