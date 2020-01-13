---
title: Shell Command
date: 2019-11-19 16:08:01
tags: "suibi"
categories: "suibi"
---

## sed
```shell
sed -i 's/<old>/<new>/g' <filename> #全局替换
```
## awk
```shell
awk -F "," '{print $1}' #以","分割

```
## git
```shell
git status | grep modified: | cut -d: -f2 | xargs git add
git reflog -> git reset <id> #可以回到rest之前的位置
git feth -> git rebase <branch>
git branch -r --contains commitid  #查看commit id在哪个branch
git archive-format=tar --prefix=Orbi-Outdoor-V2.1.2.6_gpl_src/ HEAD | bzip2 -z >Orbi-Outdoor-V2.1.2.6_gpl_src.tar.bz2 #git compress
```
## vim
```shell
#vim 打开二进制文件编辑
vim -b <filename>
:%!xxd 转成16进制操作
:%!xxd -r 转回二进制保存

```
## quilt
```shell
#在模块下用quilt生成patch
quilt new 0001.-patch-name.patch
quilt add <file> #加入要改动的文件
<edit the added file>
quilt refresh
```

