---
title: '操作的指令笔记'
date: 2019-11-19 16:08:01
tags: "操作指令"
categories: "shell"
---

## 1.qpio read output
```shell
cat /proc/simple_config/gpio_state  #qpio read output
```
## 2.get consle log at telnet
```shell
cat sys/devices/platform/serial8250/console #console log
```
## 3.FTRACE版本FW:
```shell
cat /proc/sys/kernel/ftrace_enabled # 检查是否打开
# 1
echo c > /proc/sysrq-trigger #手动crash
```
## 4.强制连接ssid
```shell
config set force_daisy=1;
config set force5g_mac=B2:39:56:99:61:34; 
config set force2g_mac=BA:39:56:99:61:31;
config commit;
wlan updateconf;
wlan restart;

cat /proc/sys/net/ath21/status #查看是否是AP
```
## 5.Base发soap
```shell
config set config_timestamp=1574163363 # a diff times_stamp
config set soap_setting=AllConfig #soap group
killall -SIGUSR1 soap_agent
```
## 6.查看scan result wpa_cli
```shell
iwpriv athX sendprobereq 1
#get scan_result:
wpa_cli -p /var/run/wpa_supplicant-ath21 scan_result 
```
## 7.远程没有权限登录192.168.1.10
- 1.开始->运行 regedit
  注册表中，导航到HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\MSLicensing
  选中MSLicensing，将其删除就可以了！ 
- 2.管理员权限登录远程。
## 8.Outdoor get uboot version
```shell
strings `part_dev uboot` |  grep "orbi-outdoor uboot" | cut -d ' ' -f 3
```
## 9.拨号NTGR
```shell
+886-2-2650-2952
112*0 2650-2952 
```
## 10.切AP route mode  
```shell
config set ap_mode=1;
cfgapply extmode
```
## 11.Valgrind 
```shell
valgrind --tool=memcheck --leak-check=full ./test
```
## 12.bd_account
```shell
/usr/share/armor/bd_account retrieve qa/prod #查看bd是哪个server，账号是什么
/usr/share/armor/bd_account reset qa/prod #重置相应的账号，重置之后，联网静置6小时以上
# MR2.5后面的版本有移除这个脚本
```




















