"use strict";

const siege = require('siege');

siege()
	.on(3000)
	.for(1000).times
	.get('/games-list?%20cacheKiller=1475708149032&compId=comp-itxihrc1&deviceType=desktop&instance=Q5zpKbzozdmm6MBoCmaBL3l5zi6EM5JlDOcmB8R4mwU.eyJpbnN0YW5jZUlkIjoiM2ZjYjdhYjMtZWI4MC00ODZkLWIzNmMtNDgwMzRlYzU3ODRmIiwic2lnbkRhdGUiOiIyMDE2LTEwLTA1VDIyOjU1OjQxLjY5OFoiLCJ1aWQiOm51bGwsImlwQW5kUG9ydCI6IjUuMTg5Ljg1LjE4Mi81NDQwNCIsInZlbmRvclByb2R1Y3RJZCI6bnVsbCwiZGVtb01vZGUiOmZhbHNlLCJhaWQiOiJmZGE1ZWI1My1hOGU0LTRjYWUtYWY3Mi1jMTA3M2EwMjg2MTYiLCJzaXRlT3duZXJJZCI6IjE1MDM5Yzc1LWJkNTItNGQ5ZC04OTZiLTU4YWNlN2Q4Yzg5MCJ9&locale=ru&viewMode=site&width=1172')
	.attack()
;