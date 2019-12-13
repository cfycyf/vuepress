---
title: 一些容易忘记的内容
tags: "work record"
categories: "note"
---

## MAC ACL, ACL, Block sites, Block Services
MAC ACL, ACL都是通过内核中net/bridge/netfilter/br_input.c做的，gp_driver只是在block之后做重定向的页面
Block sites, Block Service 是在三层tcp/ip用iptables做的，调用的kmod-netgear-reject模块。  
这个模块里是调用netfilter的库函数，但基本是三层的函数，不好修改到二层，其实也可以移植到bridge 
这个模块由于是block字符串，所以无法block https数据。

