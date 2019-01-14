const users = [
  {
    country: "Italy",
    city: "Aquila d'Arroscia",
    street: "695-5645 Ornare, Rd.",
    email: "sit.amet.luctus@dignissimMaecenasornare.ca",
    password: "JVW65SSY1WU",
    zip: "92631",
    fullName: "Urielle Buckley",
    birthday: "Feb 11, 1951",
    role: "manager",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNpdC5hbWV0Lmx1Y3R1c0BkaWduaXNzaW1tYWVjZW5hc29ybmFyZS5jYSIsInJvbGUiOiJtYW5hZ2VyIiwiY291bnRyeSI6Ikl0YWx5IiwiaWF0IjoxNTQ3MjAwNTU0fQ.BgTnbh4XuBi6V0ZyAijsx1qRVOjIRKUv0O5VBZe-3X8"
  },
  {
    country: "Italy",
    city: "Macerata",
    street: "P.O. Box 795, 6988 Vehicula. St.",
    email: "consectetuer.adipiscing@natoquepenatibuset.ca",
    password: "PZN36SRG5NQ",
    zip: "69794",
    fullName: "Tucker Abbott",
    birthday: "Jan 25, 1951",
    role: "manager",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNvbnNlY3RldHVlci5hZGlwaXNjaW5nQG5hdG9xdWVwZW5hdGlidXNldC5jYSIsInJvbGUiOiJtYW5hZ2VyIiwiY291bnRyeSI6Ikl0YWx5IiwiaWF0IjoxNTQ3MjAwNzI1fQ.eZZN6LfI354X6NfgoZjvHbrc95v61vI2us6zHpg4g7o"
  },
  {
    country: "Austria",
    city: "Stockerau",
    street: "P.O. Box 386, 8236 Rhoncus Rd.",
    email: "lectus.pede@Duis.org",
    password: "TXF77STV9XC",
    zip: "8858",
    fullName: "Zachary Jennings",
    birthday: "May 5, 1983",
    role: "manager",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxlY3R1cy5wZWRlQGR1aXMub3JnIiwicm9sZSI6Im1hbmFnZXIiLCJjb3VudHJ5IjoiQXVzdHJpYSIsImlhdCI6MTU0NzIwMDgyMn0.lbw7boWi4vmLK5o3-Cnayu_2Asp0BF8T4jyVquKkvo4"
  },
  {
    country: "United States",
    city: "Erie",
    street: "633-2138 Vulputate Av.",
    email: "pede.nec.ante@Crasdolordolor.co.uk",
    password: "KQH90CHW9MX",
    zip: "23182",
    fullName: "Allen Landry",
    birthday: "Jan 7, 1952",
    role: "manager",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBlZGUubmVjLmFudGVAY3Jhc2RvbG9yZG9sb3IuY28udWsiLCJyb2xlIjoibWFuYWdlciIsImNvdW50cnkiOiJVbml0ZWQgU3RhdGVzIiwiaWF0IjoxNTQ3MjAwODkxfQ.Ov5Dj4NrbRv_g2akq49lxb3JQytPASplCzB2WpdaSGo"
  },
  {
    country: "France",
    city: "Le Petit-Quevilly",
    street: "303-7334 Scelerisque Street",
    email: "orci@penatibusetmagnis.co.uk",
    password: "IOS99CDC7AF",
    zip: "84938",
    fullName: "Mariam Wagner",
    birthday: "Feb 9, 1977",
    role: "manager",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9yY2lAcGVuYXRpYnVzZXRtYWduaXMuY28udWsiLCJyb2xlIjoibWFuYWdlciIsImNvdW50cnkiOiJGcmFuY2UiLCJpYXQiOjE1NDcyMDEwMjh9.GxYnTiW6JZSRK_IXlEnCz97BNsivEiVgh52vJk9s1BI"
  },
  {
    country: "France",
    city: "Thionville",
    street: "P.O. Box 988, 9802 Nec, Road",
    email: "gravida.Praesent.eu@duinec.co.uk",
    password: "JOZ07JPO3ET",
    zip: "26891",
    fullName: "Bruno Greer",
    birthday: "Mar 24, 1998",
    role: "manager",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYXZpZGEucHJhZXNlbnQuZXVAZHVpbmVjLmNvLnVrIiwicm9sZSI6Im1hbmFnZXIiLCJjb3VudHJ5IjoiRnJhbmNlIiwiaWF0IjoxNTQ3MjAxMTI1fQ.RloT55Hgc6GtPVEpfS2xbD5B_vllC5K26uFVFXyZlkA"
  },
  {
    country: "France",
    city: "Limoges",
    street: "2914 Nunc Rd.",
    email: "feugiat@luctussit.org",
    password: "HZN42YDW9KV",
    zip: "26646",
    fullName: "Rahim Bishop",
    birthday: "Jun 11, 1985",
    role: "client",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZldWdpYXRAbHVjdHVzc2l0Lm9yZyIsInJvbGUiOiJjbGllbnQiLCJjb3VudHJ5IjoiRnJhbmNlIiwiaWF0IjoxNTQ3MjAxMzQ3fQ.zXYuBtQQ5CHxtpLsH9ulnNTaXhPPpKUKb4c-29TA0oE"
  },
  {
    country: "Italy",
    city: "Fratta Todina",
    street: "Ap #885-7071 Vehicula Road",
    email: "montes.nascetur@inlobortis.ca",
    password: "IRR04GAI3RO",
    zip: "83410",
    fullName: "Carol Hampton",
    birthday: "Dec 3, 1940",
    role: "client",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vbnRlcy5uYXNjZXR1ckBpbmxvYm9ydGlzLmNhIiwicm9sZSI6ImNsaWVudCIsImNvdW50cnkiOiJJdGFseSIsImlhdCI6MTU0NzIwMTM3NH0.D6_OBuxEkatDrDmhzB6xNsysXqlp-yeEMpml5TbG9V0"
  },
  {
    country: "Italy",
    city: "Giarratana",
    street: "768-7628 Nascetur St.",
    email: "Quisque.libero@sagittis.com",
    password: "TYH53JVZ2JU",
    zip: "23569",
    fullName: "Sawyer Osborne",
    birthday: "May 27, 1988",
    role: "client",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InF1aXNxdWUubGliZXJvQHNhZ2l0dGlzLmNvbSIsInJvbGUiOiJjbGllbnQiLCJjb3VudHJ5IjoiSXRhbHkiLCJpYXQiOjE1NDcyMDE0MTB9.klxWZXhv2-Ks2AEBvBKLDAoI6gQeJELtdUocUyMT6Zo"
  },
  {
    country: "Austria",
    city: "Knittelfeld",
    street: "9590 Sapien Road",
    email: "auctor.odio@etultrices.org",
    password: "XUY41RHQ2TF",
    zip: "9640",
    fullName: "Nasim Dawson",
    birthday: "Nov 17, 1952",
    role: "client",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF1Y3Rvci5vZGlvQGV0dWx0cmljZXMub3JnIiwicm9sZSI6ImNsaWVudCIsImNvdW50cnkiOiJBdXN0cmlhIiwiaWF0IjoxNTQ3MjAxNDM5fQ.Z6CiS711Dfk8YP3u3E_KFclMDvasdjUMke8pId__Exg"
  },
  {
    country: "Austria",
    city: "Vienna",
    street: "6024 Fringilla. Street",
    email: "ipsum.primis.in@massaQuisqueporttitor.org",
    password: "BLV51XCL8YE",
    zip: "5680",
    fullName: "Kaitlin Zamora",
    birthday: "Sep 2, 1939",
    role: "client",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imlwc3VtLnByaW1pcy5pbkBtYXNzYXF1aXNxdWVwb3J0dGl0b3Iub3JnIiwicm9sZSI6ImNsaWVudCIsImNvdW50cnkiOiJBdXN0cmlhIiwiaWF0IjoxNTQ3MjAxNDc3fQ.IwbcfkSPoO3xquR5HW-KDvr2Tm75kPd6u8Cdte1nK5k"
  },
  {
    country: "United Kingdom",
    city: "New Radnor",
    street: "640-9949 Ac St.",
    email: "amet@cubilia.net",
    password: "RUE06OZK8GZ",
    zip: "NW5 4TP",
    fullName: "Ali Elliott",
    birthday: "Dec 25, 1995",
    role: "client",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtZXRAY3ViaWxpYS5uZXQiLCJyb2xlIjoiY2xpZW50IiwiY291bnRyeSI6IlVuaXRlZCBLaW5nZG9tIiwiaWF0IjoxNTQ3MjAxNTA2fQ.E0ydeya9qCFZCywfMUhq8txiVif6iEbNx7EF4IgpJ94"
  },
  {
    country: "France",
    city: "Illkirch-Graffenstaden",
    street: "3445 In Av.",
    email: "ornare.elit@Nullamfeugiat.edu",
    password: "YTB63PPD6MG",
    zip: "31803",
    fullName: "Willa Barrett",
    birthday: "Sep 3, 1977",
    role: "client",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9ybmFyZS5lbGl0QG51bGxhbWZldWdpYXQuZWR1Iiwicm9sZSI6ImNsaWVudCIsImNvdW50cnkiOiJGcmFuY2UiLCJpYXQiOjE1NDcyMDE1NTB9.S38VFa1YGg-GS0ru4eFtfw4XMExjkbQ6Ls6JmPf0qrM"
  },
  {
    country: "United Kingdom",
    city: "Ipswich",
    street: "272-4741 Aliquam Ave",
    email: "Donec.egestas@Aliquamtinciduntnunc.ca",
    password: "JMA39ENT3VK",
    zip: "V5 8MS",
    fullName: "Kiona Burgess",
    birthday: "Feb 23, 1979",
    role: "client",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvbmVjLmVnZXN0YXNAYWxpcXVhbXRpbmNpZHVudG51bmMuY2EiLCJyb2xlIjoiY2xpZW50IiwiY291bnRyeSI6IlVuaXRlZCBLaW5nZG9tIiwiaWF0IjoxNTQ3MjAxNTgyfQ.hJCPTn_VWKl0t7l9Iv_0SiJqRHF8lsypeMpfKj0l8a8"
  },
  {
    country: "United States",
    city: "Henderson",
    street: "P.O. Box 642, 9878 Eleifend, Av.",
    email: "at.auctor@Proinnonmassa.com",
    password: "CTX60YWQ3VQ",
    zip: "70067",
    fullName: "Hammett House",
    birthday: "Oct 29, 1940",
    role: "client",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF0LmF1Y3RvckBwcm9pbm5vbm1hc3NhLmNvbSIsInJvbGUiOiJjbGllbnQiLCJjb3VudHJ5IjoiVW5pdGVkIFN0YXRlcyIsImlhdCI6MTU0NzIwMTYyNH0.CLac_g6U8hS7dl3JYM9TVbiZrgQj7UvRwCF1dxWwwWE"
  },
  {
    country: "Italy",
    city: "Davoli",
    street: "4159 Magna. St.",
    email: "Donec@eu.edu",
    password: "UCB94WSX1XK",
    zip: "16628",
    fullName: "Ian Morales",
    birthday: "Jul 22, 1938",
    role: "client",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvbmVjQGV1LmVkdSIsInJvbGUiOiJjbGllbnQiLCJjb3VudHJ5IjoiSXRhbHkiLCJpYXQiOjE1NDcyMDE2NTB9.fNzEiJ7UOML6AWXoaZDgEU09-Z7cfcl-vYZiX-U6v6g"
  },
  {
    country: "France",
    city: "Saint-Louis",
    street: "344-2488 Gravida. Road",
    email: "elit.fermentum@eu.org",
    password: "JFY85PSE6QG",
    zip: "54059",
    fullName: "Miranda Kerr",
    birthday: "Feb 14, 1965",
    role: "client",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVsaXQuZmVybWVudHVtQGV1Lm9yZyIsInJvbGUiOiJjbGllbnQiLCJjb3VudHJ5IjoiRnJhbmNlIiwiaWF0IjoxNTQ3MjAxNjc1fQ.E--_gNN7Lj_6C_PVkeVZr2bBM_pUJEjM-NpKB-qWk8k"
  },
  {
    country: "United States",
    city: "Fresno",
    street: "P.O. Box 404, 7321 Imperdiet Ave",
    email: "ut.nisi.a@elit.edu",
    password: "JKS94KNQ3GV",
    zip: "73210",
    fullName: "Mallory Long",
    birthday: "Mar 22, 1956",
    role: "client",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InV0Lm5pc2kuYUBlbGl0LmVkdSIsInJvbGUiOiJjbGllbnQiLCJjb3VudHJ5IjoiVW5pdGVkIFN0YXRlcyIsImlhdCI6MTU0NzIwMTcxNX0.ssh8mH6BP18hoCbFudzynTcgwy3SiYXTLOJ3g6T-jao"
  },
  {
    country: "United Kingdom",
    city: "Linton",
    street: "150-4299 Aliquam Ave",
    email: "purus@mollisnon.com",
    password: "XDU12NKM8CW",
    zip: "NZ1L 7AB",
    fullName: "Adrian White",
    birthday: "Dec 4, 1966",
    role: "client",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InB1cnVzQG1vbGxpc25vbi5jb20iLCJyb2xlIjoiY2xpZW50IiwiY291bnRyeSI6IlVuaXRlZCBLaW5nZG9tIiwiaWF0IjoxNTQ3MjAxNzM5fQ.MGwXEth21EGUwuKl2-XDo-1iNfb6J1E-PgMC0-CH-2s"
  },
  {
    country: "France",
    city: "Biarritz",
    street: "P.O. Box 784, 1998 Pede. Road",
    email: "nec@acrisus.co.uk",
    password: "FCS73RFK1JV",
    zip: "29080",
    fullName: "Holmes Carter",
    birthday: "Feb 13, 1976",
    role: "client",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5lY0BhY3Jpc3VzLmNvLnVrIiwicm9sZSI6ImNsaWVudCIsImNvdW50cnkiOiJGcmFuY2UiLCJpYXQiOjE1NDcyMDE3NjJ9.KZqoxngY3kuaUeoZnHN3MA8DVbVH4NunZJN4yGT-_7U"
  },
  {
    country: "France",
    city: "Castres",
    street: "P.O. Box 596, 8228 Lobortis St.",
    email: "Morbi.accumsan.laoreet@gravida.net",
    password: "BOE51OXC8ZL",
    zip: "07217",
    fullName: "Jasmine Hester",
    birthday: "Sep 14, 1947",
    role: "client",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vcmJpLmFjY3Vtc2FuLmxhb3JlZXRAZ3JhdmlkYS5uZXQiLCJyb2xlIjoiY2xpZW50IiwiY291bnRyeSI6IkZyYW5jZSIsImlhdCI6MTU0NzIwMTc4OX0.fbyX_kBdao9dS3s2wAq_V68DEFhI6hqg_4bx6A_eEko"
  },
  {
    country: "France",
    city: "Saint-Louis",
    street: "Ap #713-4335 Vulputate, Avenue",
    email: "a.malesuada@cursus.ca",
    password: "VFN88LOR1JQ",
    zip: "33093",
    fullName: "Jade Dalton",
    birthday: "Nov 20, 1943",
    role: "client",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImEubWFsZXN1YWRhQGN1cnN1cy5jYSIsInJvbGUiOiJjbGllbnQiLCJjb3VudHJ5IjoiRnJhbmNlIiwiaWF0IjoxNTQ3MjAxODE0fQ.i9y0L9o9g0kUeT6213j-sbn9MFD7SViBnfMJ3PXrX3w"
  },
  {
    country: "France",
    city: "Dole",
    street: "3611 Ante Rd.",
    email: "mi.enim.condimentum@feugiat.com",
    password: "RXM53WRO0UZ",
    zip: "94586",
    fullName: "Damian West",
    birthday: "Jan 26, 1942",
    role: "client",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pLmVuaW0uY29uZGltZW50dW1AZmV1Z2lhdC5jb20iLCJyb2xlIjoiY2xpZW50IiwiY291bnRyeSI6IkZyYW5jZSIsImlhdCI6MTU0NzIwMTg0Mn0.t200UyfICtWeYpBvmY-_OkanCkAjTPOg7oUwBc89yTo"
  },
  {
    country: "Austria",
    city: "Velden am Wörther See",
    street: "4041 Tempor Road",
    email: "nonummy@Donec.com",
    password: "ASL47BHC0JQ",
    zip: "9621",
    fullName: "Skyler Hughes",
    birthday: "Mar 14, 1970",
    role: "client",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vbnVtbXlAZG9uZWMuY29tIiwicm9sZSI6ImNsaWVudCIsImNvdW50cnkiOiJBdXN0cmlhIiwiaWF0IjoxNTQ3MjAxODY3fQ.oHdZitn1d_--gPNnJsnbnLL-4Ca6wZj3bmaBU_ps2Us"
  },
  {
    country: "United Kingdom",
    city: "Durness",
    street: "1659 Vulputate Rd.",
    email: "eu.elit.Nulla@ornarelibero.edu",
    password: "AJO05PQJ2WN",
    zip: "J3 4AS",
    fullName: "Maris Stein",
    birthday: "Dec 16, 1973",
    role: "client",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV1LmVsaXQubnVsbGFAb3JuYXJlbGliZXJvLmVkdSIsInJvbGUiOiJjbGllbnQiLCJjb3VudHJ5IjoiVW5pdGVkIEtpbmdkb20iLCJpYXQiOjE1NDcyMDE4OTB9.3uhVeGLwRkPbe6ME9JkMyLn845ChE55HHgmoeeZJbR0"
  },
  {
    country: "Italy",
    city: "Bondo",
    street: "Ap #876-7315 Integer Rd.",
    email: "libero.dui.nec@nuncacmattis.net",
    password: "FBD32PEA8MI",
    zip: "26770",
    fullName: "Leigh Leblanc",
    birthday: "Sep 3, 1958",
    role: "client",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxpYmVyby5kdWkubmVjQG51bmNhY21hdHRpcy5uZXQiLCJyb2xlIjoiY2xpZW50IiwiY291bnRyeSI6Ikl0YWx5IiwiaWF0IjoxNTQ3MjAxOTQyfQ.EclDwgwlaQlAo6XiZGHnjkVSJU4bCgIHPv1a1ayN-GY"
  },
  {
    country: "Italy",
    city: "Milena",
    street: "P.O. Box 787, 759 Lectus. Av.",
    email: "pretium.neque.Morbi@estarcuac.org",
    password: "ACG77DMQ4TJ",
    zip: "40547",
    fullName: "Zelda Chapman",
    birthday: "Feb 13, 1991",
    role: "admin",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByZXRpdW0ubmVxdWUubW9yYmlAZXN0YXJjdWFjLm9yZyIsInJvbGUiOiJhZG1pbiIsImNvdW50cnkiOiJJdGFseSIsImlhdCI6MTU0NzIwMjA3NX0.1MEqTp6K9CVnLH_mg5xYNVBlWTVmjmEvp8yQZOyz5zA"
  }
];
export default users;
