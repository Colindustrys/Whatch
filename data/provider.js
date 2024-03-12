import WatchProvider from "../models/WatchProvider";

const providerArray = [
  {
    _displayPriority: 0,
    _id: 8,
    _label: "Netflix",
    _logoPath: "/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg",
  },
  {
    _displayPriority: 1,
    _id: 9,
    _label: "Amazon Prime Video",
    _logoPath: "/dQeAar5H991VYporEjUspolDarG.jpg",
  },
  {
    _displayPriority: 2,
    _id: 337,
    _label: "Disney Plus",
    _logoPath: "/7YPdUs60C9qQQQfOFCgxpnF07D9.jpg",
  },
  {
    _displayPriority: 3,
    _id: 350,
    _label: "Apple TV Plus",
    _logoPath: "/2E03IAZsX4ZaUqM7tXlctEPMGWS.jpg",
  },
  {
    _displayPriority: 5,
    _id: 30,
    _label: "WOW",
    _logoPath: "/9r5zFWuYnwjzO1JrNjSbLQwUc3P.jpg",
  },
  {
    _displayPriority: 6,
    _id: 283,
    _label: "Crunchyroll",
    _logoPath: "/mXeC4TrcgdU6ltE9bCBCEORwSQR.jpg",
  },
  {
    _displayPriority: 7,
    _id: 29,
    _label: "Sky Go",
    _logoPath: "/1UrT2H9x6DuQ9ytNhsSCUFtTUwS.jpg",
  },
  {
    _displayPriority: 9,
    _id: 531,
    _label: "Paramount Plus",
    _logoPath: "/h5DcR0J2EESLitnhR8xLG1QymTE.jpg",
  },
  {
    _displayPriority: 11,
    _id: 304,
    _label: "Joyn",
    _logoPath: "/tDnDBkSLLLQgFb03J9ttQhZQxZs.jpg",
  },
  {
    _displayPriority: 16,
    _id: 298,
    _label: "RTL+",
    _logoPath: "/jmR0t1kjzHcyV7raynzMbF87J9d.jpg",
  },
  {
    _displayPriority: 19,
    _id: 188,
    _label: "YouTube Premium",
    _logoPath: "/rMb93u1tBeErSYLv79zSTR07UdO.jpg",
  },
  {
    _displayPriority: 22,
    _id: 234,
    _label: "Arte",
    _logoPath: "/vPZrjHe7wvALuwJEXT2kwYLi0gV.jpg",
  },
  {
    _displayPriority: 26,
    _id: 219,
    _label: "ARD Mediathek",
    _logoPath: "/avItehPq07h5nKCJgwNTxl6OD0y.jpg",
  },
  {
    _displayPriority: 27,
    _id: 11,
    _label: "MUBI",
    _logoPath: "/fj9Y8iIMFUC6952HwxbGixTQPb7.jpg",
  },
  {
    _displayPriority: 29,
    _id: 175,
    _label: "Netflix Kids",
    _logoPath: "/kwVegvKCinXTPuzZmYT1J3i1HJz.jpg",
  },
  {
    _displayPriority: 41,
    _id: 392,
    _label: "wedotv",
    _logoPath: "/jAwT86Q0H9U8RESR3zR2FVKe83D.jpg",
  },
  {
    _displayPriority: 42,
    _id: 341,
    _label: "blutv",
    _logoPath: "/dqRpKX6vcos334v9huMpNPKHlD8.jpg",
  },
  {
    _displayPriority: 44,
    _id: 344,
    _label: "Rakuten Viki",
    _logoPath: "/5L2bwr9DhUg28oSMEPRCNwB2y7B.jpg",
  },
  {
    _displayPriority: 45,
    _id: 421,
    _label: "Joyn Plus",
    _logoPath: "/5aHLriu21FRDGlxY5zbzyEuoSvA.jpg",
  },
  {
    _displayPriority: 47,
    _id: 190,
    _label: "Curiosity Stream",
    _logoPath: "/oR1aNm1Qu9jQBkW4VrGPWhqbC3P.jpg",
  },
  {
    _displayPriority: 49,
    _id: 479,
    _label: "Home of Horror",
    _logoPath: "/ntvIffmJe7ZO1SSobwSx8ABAZFG.jpg",
  },
  {
    _displayPriority: 50,
    _id: 480,
    _label: "Filmtastic",
    _logoPath: "/eptSSZPhXJllBI8QywFDmgOMNkU.jpg",
  },
  {
    _displayPriority: 51,
    _id: 481,
    _label: "ArthouseCNMA",
    _logoPath: "/eBt8WXNGuJGBgQ28W88Y3eTAWsD.jpg",
  },
  {
    _displayPriority: 58,
    _id: 537,
    _label: "ZDF",
    _logoPath: "/ugus0p8BGGhE8sxhwAjJz2o8jyy.jpg",
  },
  {
    _displayPriority: 111,
    _id: 1796,
    _label: "Netflix basic with Ads",
    _logoPath: "/kICQccvOh8AIBMHGkBXJ047xeHN.jpg",
  },
  {
    _displayPriority: 132,
    _id: 1902,
    _label: "ARD Plus",
    _logoPath: "/qTybjmHLNcXZExZLBnm4muVCDzP.jpg",
  },
  {
    _displayPriority: 157,
    _id: 1994,
    _label: "TELE 5",
    _logoPath: "/a1zZJiOid4gG27xJtkcDaSVrQdb.jpg",
  },
  {
    _displayPriority: 165,
    _id: 2081,
    _label: "KiKA",
    _logoPath: "/5JkLub6H7HsWyLHbitnuXTzXmlJ.jpg",
  },
];

let providerObjects = [];
providerArray.forEach((providerJSON) => {
  let providerObject = new WatchProvider();
  providerObject.id = providerJSON._id;
  providerObject.label = providerJSON._label;
  providerObject.logoPath = providerJSON._logoPath;
  providerObject.displayPriority = providerJSON._displayPriority;
  providerObjects.push(providerObject);
});

export default providerObjects;
