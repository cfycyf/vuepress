---
title: netfilter iptables ebtables
date: 2019-12-12 16:08:01
tags: "server"
categories: "server"
---

## netfilter

## Q&A
不知道为何 **iptables/ebtable** 无法DROP pppoe/dhcp 等的包，设备拨号依旧可以拿到地址
```shell
#:/ sudo iptables -L
Chain INPUT (policy DROP)
target     prot opt source               destination
Chain FORWARD (policy DROP)
target     prot opt source               destination
Chain OUTPUT (policy DROP)
target     prot opt source               destination
```
