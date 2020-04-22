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
# 查看AllConfig是否做完的一个依据
cat /tmp/soapclient/soap_auth_mac
BC:A5:11:BA:68:F6= 0 完成， 1 未完成
```
## 6.查看scan result wpa_cli
```shell
iwpriv athX sendprobereq 1
#get scan_result:
wpa_cli -p /var/run/wpa_supplicant-ath21 scan_result 
wpa_cli -p /var/run/wpa_supplicant-ath21 status #查看sta的状态
wpa_cli -p /var/run/wpa_supplicant-ath21 enable 0 #enable this iface
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
## 13.反汇编
一般遇到空指针或者数组,变量越界。相应的程序会crash,一般如下地址:  
::: warning 地址长度限制
**PC is at 0x15c2c**  
**LR is at 0x3a**   
LR或者PC的地址值不能太大,超过5位数或6位数就没办法了 
:::
```shell{6,7,8}
pgd = d60f4000
[30687471] *pgd=00000000

CPU: 1 PID: 1527 Comm: attached-device Tainted: P             3.14.77 #1
task: d60e3180 ti: d69a0000 task.ti: d69a0000
PC is at 0x15c2c
LR is at 0x3a
pc : [<00015c2c>]    lr : [<0000003a>]    psr: 60000010
sp : bec80520  ip : 0001c670  fp : bec807e4
r10: 0002dc64  r9 : 00000006  r8 : 000e9010
r7 : 30687465  r6 : 000e9058  r5 : 000e9058  r4 : bec8054a
r3 : bec80538  r2 : 00000001  r1 : bec80538  r0 : 30687470
Flags: nZCv  IRQs on  FIQs on  Mode USER_32  ISA ARM  Segment user
Control: 10c5387d  Table: 960f406a  DAC: 00000015
CPU: 1 PID: 1527 Comm: attached-device Tainted: P             3.14.77 #1
[<c021ea2c>] (unwind_backtrace) from [<c021bb24>] (show_stack+0x10/0x14) 
```
::: tip 反汇编: objdump -D -S binary
staging_dir/toolchain-arm_cortex-a7_gcc-5.2.0_uClibc-1.0.14_eabi/bin/arm-openwrt-linux-uclibcgnueabi-objdump -D -S net-scan
:::
然后找到对应的地址位置,结合上下文可以找到相应的代码
```shell{9,16}
char *ether_etoa(uint8 *e, char *a)
{
	int i, k;

	for (k = 0, i = 0; i < 6; i++) {
		a[k++] = hexbuf[(e[i] >> 4) & 0xF];
		a[k++] = hexbuf[(e[i]) & 0xF];
		a[k++]=':';
   15c28:	e3a0e03a 	mov	lr, #58	; 0x3a
	static char hexbuf[] = "0123456789ABCDEF";

	int i, k;

	for (k = 0, i = 0; i < 6; i++) {
		a[k++] = hexbuf[(e[i] >> 4) & 0xF];
   15c2c:	e5f02001 	ldrb	r2, [r0, #1]!
   15c30:	e2833003 	add	r3, r3, #3
   15c34:	e7dc2222 	ldrb	r2, [ip, r2, lsr #4]
   15c38:	e5432003 	strb	r2, [r3, #-3]
		a[k++] = hexbuf[(e[i]) & 0xF];
   15c3c:	e5d02000 	ldrb	r2, [r0]
		a[k++]=':';
   15c40:	e543e001 	strb	lr, [r3, #-1]

	int i, k;

	for (k = 0, i = 0; i < 6; i++) {
		a[k++] = hexbuf[(e[i] >> 4) & 0xF];
		a[k++] = hexbuf[(e[i]) & 0xF];
}
```



















