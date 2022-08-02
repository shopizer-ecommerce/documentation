---
title: Country and Zones model
---


# Country and Zones

## Country codes

Country codes are defined in shopizer sm-core SchemaConstants (com.salesmanager.core.constants.SchemaConstants)
 
```sh
	public static final String[] COUNTRY_ISO_CODE = { "AF","AX","AL","DZ",
		"AS","AD","AO","AI","AQ","AG","AR","AM","AW","AU","AT","AZ","BS","BH",
		"BD","BB","BY","BE","BZ","BJ","BM","BT","BO","BA","BW","BV","BR","IO",
		"BN","BG","BF","BI","KH","CM","CA","CV","KY","CF","TD","CL","CN","CX",
		"CC","CO","KM","CG","CD","CK","CR","CI","HR","CU","CY","CZ","DK","DJ",
		"DM","DO","EC","EG","SV","GQ","ER","EE","ET","FK","FO","FJ","FI","FR",
		"GF","PF","TF","GA","GM","GE","DE","GH","GI","GR","GL","GD","GP","GU",
		"GT","GG","GN","GW","GY","HT","HM","VA","HN","HK","HU","IS","IN","ID",
		"IR","IQ","IE","IM","IL","IT","JM","JP","JE","JO","KZ","KE","KI","KP",
		"KR","KW","KG","LA","LV","LB","LS","LR","LY","LI","LT","LU","MO","MK",
		"MG","MW","MY","MV","ML","MT","MH","MQ","MR","MU","YT","MX","FM","MD",
		"MC","MN","ME","MS","MA","MZ","MM","NA","NR","NP","NL","AN","NC","NZ",
		"NI","NE","NG","NU","NF","MP","NO","OM","PK","PW","PS","PA","PG","PY",
		"PE","PH","PN","PL","PT","PR","QA","RE","RO","RU","RW","SH","KN","LC",
		"PM","VC","WS","SM","ST","SA","SN","RS","SC","SL","SG","SK","SI","SB",
		"SO","ZA","GS","ES","LK","SD","SR","SJ","SZ","SE","CH","SY","TW","TJ",
		"TZ","TH","TL","TG","TK","TO","TT","TN","TR","TM","TC","TV","UG","UA",
		"AE","GB","US","UM","UY","UZ","VU","VE","VN","VG","VI","WF","EH",
	    "YE","ZM","ZW" };
```

Country description are derived from java Locale class and then saved to
CountryDescription table

## Zones List

Zones are loaded from **sm-core/src/main/resources/zoneconfig.json** file which contains zones codes and names per country and language. This file is loaded during initial startup and is performed only once during the application life cycle.


![Country and Zones](/images/documentation/country-zones.png "Country and zones refernece data")

