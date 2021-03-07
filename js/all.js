/***   作業 1 填答區開始   **/

let obj = {
  myName: 'Tom',
  age: 18,
  pets: ['John', 'Mike'],
  isWakeUp: false
};
console.log(obj);


/***   作業 1 填答區結束   **/

/***   作業 2 填答區開始   **/
let colors = ['red', 'black', 'yellow'];
//增加
colors.push('black');
//印出
console.log(colors);
//印出長度(資料筆數)
console.log(colors.length);

/***   作業 2 填答區結束   **/

/***   作業 3 填答區開始   **/
let motherStatus = [
  {
    name: 'Mary',
    age: 31,
    sons: ['Tom', 'Bob'],
  }
];
//增加媽媽歲數
motherStatus[0].age += 1;
//增加小孩
motherStatus[0].sons.push('John');
//印出
console.log(motherStatus);

/***   作業 3 填答區結束   **/

/***   作業 4 填答區開始   **/
//由於資料太多,選取前三筆來帶入
let kaohsiungTraveData = {
  contentType: "application/json; charset=utf-8",
  isImage: false,
  data: {
    XML_Head: {
      Listname: "1",
      Language: "C",
      Orgname: "397000000A",
      Updatetime: "2021/02/24 15:42:14",
      Infos: {
        Info: [
          {
            Id: "C1_397000000A_000623",
            Status: "2",
            Name: "澄清湖棒球場",
            Zone: "",
            Toldescribe: "澄清湖棒球場位於風光明媚的澄清湖畔，是全臺灣設備最先進，規模最大的棒球場，2001年第34屆世界盃棒球錦標賽預賽台美之戰，場內湧進25000名觀眾，寫下我國棒球場史上單場比賽進場觀眾人數最多紀錄，也是職棒在南部重要的賽事場地。澄清湖棒球場符合國際標準的場地與相關設施，在完善體貼的人性化空間中，共享棒球迷人的魅力。欣賞激情的比賽之後，順道瀏覽澄清湖的湖光山色，身心同時獲得釋放，已是相當受到歡迎的全國重要觀光休憩中心之一，平日也是附近居民運動休閒的好去處。",
            Description: "澄清湖棒球場位於風光明媚的澄清湖畔，是全臺灣設備最先進，規模最大的棒球場，2001年第34屆世界盃棒球錦標賽預賽台美之戰，場內湧進25000名觀眾，寫下我國棒球場史上單場比賽進場觀眾人數最多紀錄，也是職棒在南部重要的賽事場地。澄清湖棒球場符合國際標準的場地與相關設施，在完善體貼的人性化空間中，共享棒球迷人的魅力。欣賞激情的比賽之後，順道瀏覽澄清湖的湖光山色，身心同時獲得釋放，已是相當受到歡迎的全國重要觀光休憩中心之一，平日也是附近居民運動休閒的好去處，隨著義大犀牛落腳高雄，可望成為吸引職棒球迷的新戰場。",
            Tel: "886-7-7229449#213",
            Add: "高雄市833鳥松區鳥松村大埤路113號",
            Zipcode: "833",
            Travellinginfo: "公車：搭乘30路、70路、217路、橘7路、紅33路至「棒球場站」。接駁車：區間接駁車：70路公車(三多幹線)。搭乘站點建議：大遠百站、衛武營站 (球賽期間原三多路上車點移至中正路上捷運站2號出口)。車班訊息：球賽前1.5小時，每小時有6台車班次加密區間車。費用：搭車費用依交通局規定，並可用一卡通支付。澄清湖球場站訊息：球場下車點於大埤路(廣場前)，散場搭車處於公園路上站牌。",
            Opentime: "全天候開放",
            Map: "",
            Gov: "397000000A",
            Px: "120.35905",
            Py: "22.65460",
            Orgclass: "",
            Level: "",
            Website: "",
            Parkinginfo: "",
            Parkinginfo_px: "",
            Parkinginfo_py: "",
            Ticketinfo: "",
            Remarks: "",
            Keyword: "",
            Changetime: "2021/02/24 15:42:14",
            Class1: "13",
            Class2: "",
            Class3: "",
            Picture1: "https://khh.travel/image/111/640x480",
            Picdescribe1: "澄清湖棒球場01",
            Picture2: "",
            Picdescribe2: "",
            Picture3: "",
            Picdescribe3: ""
          },
          {
            Id: "C1_397000000A_000182",
            Status: "2",
            Name: "高雄燈塔",
            Zone: "",
            Toldescribe: "雄踞旗后山頂，以雪白耀眼之姿守護高雄港的高雄燈塔是港都的象徵。1860年英法聯軍之役後臺灣開放打狗港(高雄港)通商，船隻通行日漸繁多，直至1883年英國人建立方型磚造燈塔供船隻安全照明使用，日治時期又在1918年於原塔旁興建八角型圓頂磚塔，白底黑頂、外有環繞陽台，塔高15.2公尺非常醒目耀眼。旗后燈塔自建立至今已有百年歷史，從無間斷地照耀海上的船隻，確保航海安全，歷史意義與重要地位使它成為國家三級古蹟。高雄燈塔簡潔美麗的建築是無可取代的港都歷史文化意象，其位於旗后山上的壯闊視野讓臺灣海峽與高雄市區景緻一覽無遺，俯瞰海岸大船入港榮景及燦爛的金色夕照，懷想港都悠悠百年歲月，是趟抒情美麗的文化旅行。",
            Description: "以雪白耀眼之姿守護高雄港的高雄燈塔是港都的象徵，壯闊視野讓台灣海峽與高雄市區景緻一覽無遺",
            Tel: "886-7-5715021",
            Add: "高雄市805旗津區旗下巷34號 ",
            Zipcode: "805",
            Travellinginfo: "搭高鐵至左營站下或搭臺鐵至高雄站下 → 轉搭高雄捷運至草衙站下 → 轉搭高雄市公車(紅9A路、紅9B路)至旗津輪渡站。搭高鐵至左營站下或搭臺鐵至高雄站下 → 轉搭高雄捷運至西子灣站下 → 轉搭渡輪至旗津輪渡站下。",
            Opentime: "11月至3月：09:00–17:004月至10月：09:00–18:00(週一公休)",
            Map: "",
            Gov: "397000000A",
            Px: "120.26471",
            Py: "22.61552",
            Orgclass: "",
            Level: "",
            Website: "",
            Parkinginfo: "",
            Parkinginfo_px: "",
            Parkinginfo_py: "",
            Ticketinfo: "",
            Remarks: "",
            Keyword: "",
            Changetime: "2021/02/23 11:04:05",
            Class1: "3",
            Class2: "",
            Class3: "",
            Picture1: "https://khh.travel/image/1118/640x480",
            Picdescribe1: "旗后燈塔01",
            Picture2: "",
            Picdescribe2: "",
            Picture3: "",
            Picdescribe3: ""
          },
          {
            Id: "C1_397000000A_000086",
            Status: "2",
            Name: "高雄清真寺",
            Zone: "",
            Toldescribe: "高雄清真寺為臺灣第二座清真寺，創建於1949年，是當時隨政府遷台的軍、公、教人員並篤信伊斯蘭教的穆斯林倡議籌款所設立，由於穆民日眾不敷使用，又於1990年動工興建如今的規模。高雄清真寺外觀是典型的伊斯蘭教風格，清新的綠色方型建築、中有圓拱尖頂及叫拜塔樓，內部則有寬敞明亮的禮拜大廳，是南部最大的回教信仰中心。",
            Description: "高雄清真寺為臺灣第二座清真寺，創建於1949年，是當時隨政府遷台的軍、公、教人員並篤信伊斯蘭教的穆斯林倡議籌款所設立，由於穆民日眾不敷使用，又於1990年改建如今的規模。高雄清真寺外觀是典型的伊斯蘭教風格，清新的綠色方型建築、中有圓拱尖頂及叫拜塔樓，內部則有寬敞明亮的禮拜大廳，是南部最大的回教信仰中心。",
            Tel: "886-7-7496812",
            Add: "高雄市802苓雅區建軍路11號",
            Zipcode: "802",
            Travellinginfo: "",
            Opentime: "08:30–20:30",
            Map: "",
            Gov: "397000000A",
            Px: "120.34195",
            Py: "22.62800",
            Orgclass: "",
            Level: "",
            Website: "",
            Parkinginfo: "",
            Parkinginfo_px: "",
            Parkinginfo_py: "",
            Ticketinfo: "",
            Remarks: "",
            Keyword: "",
            Changetime: "2021/02/22 09:56:58",
            Class1: "4",
            Class2: "",
            Class3: "",
            Picture1: "https://khh.travel/image/1018/640x480",
            Picdescribe1: "高雄清真寺01",
            Picture2: "",
            Picdescribe2: "",
            Picture3: "",
            Picdescribe3: ""
          }
        ]
      }
    }
  }
};
NeedAttractionName = kaohsiungTraveData.data.XML_Head.Infos.Info[0].Name;
NeedXAxisCoordinates = kaohsiungTraveData.data.XML_Head.Infos.Info[1].Px;
//第一筆資料的景點名稱
console.log(`第一筆資料景點名稱:${NeedAttractionName}。`);
//第二筆資料的景點X軸座標
console.log(`第二筆資料的X軸座標:${NeedXAxisCoordinates}。`);


/***   作業 4 填答區結束   **/

/***   作業 5 填答區開始   **/
let familyPhoto = {
  monterName: 'Jane',
  faterName: 'Bill',
  daughterName: 'Rose',
  sonName: 'Howard',
  dogsName: ['Bobo', 'Koko']
};
//印出
console.log(familyPhoto);


/***   作業 5 填答區結束   **/

/***   作業 6 填答區開始   **/
const hexVilla = {
  city: 'Kaohsiung',
  title: '六角大別墅',
  items: [{
    price: 280000000,
    pingsNum: 900,
    haveSwimmingPool: false,
    haveBasement: true,
    floorNum: 5,
    bathroomNum: 3,
    haveHousekeeper: false,
    isSell: true,
  },
  {
    price: 320000000,
    pingsNum: 1200,
    haveSwimmingPool: true,
    haveBasement: true,
    floorNum: 7,
    bathroomNum: 4,
    haveHousekeeper: true,
    isSell: false,
  }
  ]
}
//印出
console.log(hexVilla);


/***   作業 6 填答區結束   **/

/***   作業 7 填答區開始   **/

/*let roomDetail = {
  "success": true,
  "items": [
    {
      "id": "3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
      "normalDayPrice": 1380,
      "holidayPrice": 1500,
      "name": "Single Room"
    },
    {...},
   ]
};*/

//第七題完整資料開始
let roomDetail = {
  "success": true,
  "items": [
    {
      "id": "3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
      "normalDayPrice": 1380,
      "holidayPrice": 1500,
      "name": "Single Room"
    },
    {
      "id": "g0mYhN6ignMz4VYW7eiWsXZN8DHolHzH8LuVmM6hq5h6BrrqrLMw4aJgHv7LZ3RQ",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1564182379166-8fcfdda80151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
      "normalDayPrice": 1899,
      "holidayPrice": 2000,
      "name": "Deluxe Single Room"
    },
    {
      "id": "RA8NhExaXXZB7EODVALSDvFFQzj1JP0a4C1pwZ1acPaieRBwiWoCb0FE0KUbXaxg",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1526913621366-a4583840d736?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "normalDayPrice": 2460,
      "holidayPrice": 2500,
      "name": "Double Room"
    },
    {
      "id": "kICyWhZ5XsfI4n1d4gBOsDjIyIxNozwgmxYKyZpzi5pjLcU2Nl4RhiGrn6zaPuTJ",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1519710889408-a67e1c7e0452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
      "normalDayPrice": 2888,
      "holidayPrice": 3000,
      "name": "Deluxe Double Room"
    },
    {
      "id": "VCxbQq1vLeUtxW781k9Dlq3mHBRNl5YP19Lhq8k5TbIr2BeH58gRpnNKGoEgkysz",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1558976825-6b1b03a03719?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "normalDayPrice": 3350,
      "holidayPrice": 3500,
      "name": "Twin Room"
    },
    {
      "id": "YovqNpFDaal598jbpd1A14gXwDE6gekTqJgxOAGcq78B8YnP7claymQVFy2GTwgb",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1552902019-ebcd97aa9aa0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
      "normalDayPrice": 3899,
      "holidayPrice": 4000,
      "name": "Deluxe Twin Room"
    }
  ]
};
//第七題完整資料結束
let totalBill = roomDetail.items[0].normalDayPrice + roomDetail.items[1].normalDayPrice + roomDetail.items[2].normalDayPrice + roomDetail.items[3].normalDayPrice + roomDetail.items[4].normalDayPrice + roomDetail.items[5].normalDayPrice;
//印出
console.log(totalBill);

/***   作業 7 填答區結束   **/

/***   作業 8 填答區開始   **/
let salaryData = {
  company: 'circle center',
  bossName: 'casper',
  staff: [
    {
      name: 'Bob',
      salary: 32000
    },
    {
      name: 'Jack',
      salary: 28000
    }
  ]
};
//第一位員工加薪邏輯
if (salaryData.staff[0].salary <= 40000) {
  //第一位員工加薪程式碼
  salaryData.staff[0].salary += 40000 - salaryData.staff[0].salary;
};
//第二位員工加薪邏輯
if (salaryData.staff[1].salary <= 40000) {
  //第二位員工加薪程式碼
  salaryData.staff[1].salary += 40000 - salaryData.staff[1].salary;
};
//目前Bob薪水
console.log(`目前Bob薪水為${salaryData.staff[0].salary}元`);
//目前Jack薪水
console.log(`目前jack薪水為${salaryData.staff[1].salary}元`);

/***   作業 8 填答區結束   **/

/***   作業 9 填答區開始   **/
//以輕軌車站出入口基本資料為例,位外層是一個物件,包含了isImage與data屬性,isImage值為false,data屬性內包含了陣列,陣列內又包含了許多物件,每個物件內都有seq,站序,車站代碼,車站中文站名,車站英文站名,站位地點,備註以上這些屬性,第一個物件的seq屬性值為1,站序屬性值為'1',車站代碼屬性值為'C1',車站中文站名屬性值為'籬仔內',車站英文站名屬性值為'Lizihnei',站位地點屬性值為'凱旋四路、一心路及瑞隆路交會路口南側',備註屬性值為空值

/***   作業 9 填答區結束   **/

/***   作業 10 填答區開始   **/

//https://whimsical.com/js-MFrga6rAPo3u69uCLF5Yuw


/***   作業 10 填答區結束   **/

