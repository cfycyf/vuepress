---
title: NAND flash operation
date: 2020-03-25 16:08:01
tags: ""
categories: ""
---

## NAND flash 指令集

### ubi fs 介绍预留大小 
[ubi fs introduce](http://linux-mtd.infradead.org/doc/ubi.html#L_max_beb) 
17. Reserved blocks for bad block handling (only for NAND chips)
### flash_erase
```shell
flash_erase /dev/mtdx 0 0 
flash_erase --help有详细用法，这个擦除不会擦除标记在oob中的坏块标记
```
### uboot下nand 操作
```shel
nand scrub -y 0x000001000000 0x100000 会擦除坏块标记 
nand erase 0x000001000000 0x100000 不会 

consile log:
0x000000000000-0x000000100000 : "0:SBL1"
0x000000100000-0x000000200000 : "0:MIBIB"
0x000000200000-0x000000300000 : "0:BOOTCONFIG"
0x000000300000-0x000000400000 : "0:QSEE"
0x000000400000-0x000000500000 : "0:QSEE_1"
0x000000500000-0x000000580000 : "0:CDT"
0x000000580000-0x000000600000 : "0:CDT_1"
0x000000600000-0x000000680000 : "0:BOOTCONFIG1"
0x000000680000-0x000000700000 : "0:APPSBLENV"
0x000000700000-0x000000900000 : "0:APPSBL"
0x000000900000-0x000000b00000 : "0:APPSBL_1"
0x000000b00000-0x000000b80000 : "0:ART"
0x000000b80000-0x000000c00000 : "0:ART.bak"
0x000000c00000-0x000001000000 : "reserved4qca"
0x000001000000-0x000001100000 : "config"
0x000001100000-0x000001200000 : "boarddata1"
0x000001200000-0x000001300000 : "boarddata2"
0x000001300000-0x000002000000 : "dnidata"
0x000002000000-0x000005200000 : "firmware"
0x000002000000-0x0000023c0000 : "kernel"
0x0000023c0000-0x000005200000 : "rootfs"
```

