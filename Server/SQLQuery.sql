create table SpaceManage(UserID int,SpaceNo int,SurplusSpace decimal(16,2))
create table Menu(Mname nvarchar(128),Image nvarchar(512),Ingredients nvarchar(1024) ,Step nvarchar(4000) )
create table userfood(fname nvarchar(256),image nvarchar(4000), s_life nvarchar(64))
create table CommodityBarCode(Code varchar(32),Fname nvarchar(256),UseSpace decimal(16,2))

alter table SpaceManage add MAXSpace decimal(16,2)
alter table SpaceManage add image  varchar(4096)

insert into userfood values(N'ƻ��','http://47.95.221.147:8080/icon?name=1.jpg','2020-07-23')
insert into userfood values(N'�㽶','http://47.95.221.147:8080/icon?name=2.jpg','2020-07-24')
insert into userfood values(N'����','http://47.95.221.147:8080/icon?name=3.jpg','2020-08-15')
insert into userfood values(N'����','http://47.95.221.147:8080/icon?name=4.jpg','2020-08-11')
insert into userfood values(N'��ݮ','http://47.95.221.147:8080/icon?name=5.jpg','2020-09-02')
insert into userfood values(N'�ཷ','https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1586160898&di=a6142c53ec802c973dd7563c752a00b5&src=http://masmas.cn/images/201603/goods_img/15636_G_1457565151656.jpg','2020-08-09')

insert into SpaceManage values(1,1,7.98,24,'http://47.95.221.147:8080/icon?name=b1_1.jpg')
insert into SpaceManage values(1,2,14.98,20,'http://47.95.221.147:8080/icon?name=b1_2.jpg')
insert into SpaceManage values(1,3,22.48,40,'http://47.95.221.147:8080/icon?name=b1_3.jpg')
update SpaceManage set SurplusSpace = 16.98 where UserId = 1 and SpaceNo = 1

insert into CommodityBarCode values('6920075801897',N'ӭ������ɽ������ţ�� 500ml',0.54)
insert into CommodityBarCode values('6954767412573',N'�ɿڿ���ƿװ 500ml',0.54)
insert into CommodityBarCode values('6926234720610',N'���ֶ� 100ml',0.1)
insert into CommodityBarCode values('6902083881085',N'�۹���AD���� 220ml ',0.22)
select * from CommodityBarCode
delete from CommodityBarCode where Fname = N'�ɿڿ���ƿװ 500ml'

select * from userfood order by s_life
select * from SpaceManage
select * from Menu
select * from CommodityBarCode

select * from Menu where Ingredients like N'%�ཷ%' union select * from Menu where Ingredients like N'%����%'
select * from CommodityBarCode where Code = '4971710789836'

select * from Menu where Ingredients LIKE N'%ƻ��%' union select * from Menu where Ingredients LIKE N'%�㽶%' union select * from Menu where Ingredients LIKE N'%����%' union select * from Menu where Ingredients LIKE N'%����%' union select * from Menu where Ingredients LIKE N'%��ݮ%' union select * from Menu where Ingredients LIKE N'%����%' union select * from Menu where Ingredients LIKE N'%�ཷ%'


drop table Menu
delete from userfood
delete from CommodityBarCode