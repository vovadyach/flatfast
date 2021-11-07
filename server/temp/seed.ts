require("dotenv").config();

import { ObjectId } from 'mongodb';
import { connectDatabase } from "../src/database";
import { Listing, ListingType, User } from "../src/lib/types";

const listings: Listing[] = [
  {
    _id: new ObjectId("5d378db94e84753160e08b30"),
    title: "Видовая 2-комнатная квартира с раздельными комнатами на 21 этаже",
    description:
        "2 комнаты, 1 кровать и 1 диван(расскладной) и 1 санузел в шикарном месте в центре столицы.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1635855075/bbca2b48391f866a4c29d86141f0b2e2_gprtuj.jpg",
    host: "5d378db94e84753160e08b57",
    type: ListingType.Apartment,
    address: "Леси Украинки бульв., 7-б, Печерский р-н, Киев",
    country: "Украина",
    admin: "Киевская",
    city: "Киев",
    bookings: [],
    bookingsIndex: {},
    price: 1400,
    numOfGuests: 4
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b31"),
    title: "Пропоную вишукану квартиру в престижному будинку з підземним паркінгом",
    description:
        "Чистая и ухоженная квартира в центра замечательного города с большой историей.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1635855148/1714057264399004_lu6wnu.jpg",
    host: "5d378db94e84753160e08b55",
    type: ListingType.Apartment,
    address: "Леси Украинки бульв., 7-б, Печерский р-н, Киев",
    country: "Украина",
    admin: "Киевская",
    city: "Киев",
    bookings: [],
    bookingsIndex: {},
    price: 1300,
    numOfGuests: 4
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b32"),
    title: "Подобова аренда, Лесі Українки бул., 7б, 7-й поверх",
    description:
        "Чудова та затищна квартира у 10 хвилин від центру міста.",
    image:
        "https://res.cloudinary.com/tiny-house/image/upload/v1560641352/mock/Toronto/toronto-listing-3_eyftou.jpg",
    host: "5d378db94e84753160e08b57",
    type: ListingType.House,
    address: "Бульвар Леси Украинки 7б, Київ(Печерський)",
    country: "Україна",
    admin: "Київська",
    city: "Київ",
    bookings: [],
    bookingsIndex: {},
    price: 1200,
    numOfGuests: 3
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b33"),
    title: "Аренда квартиры 3-х комнатной. в Київ, Лесі Українки бул., 7б",
    description:
        "Велика квартира для тиї хто подорожує не наодинці. 3 світлі кімнати та два санвузла.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1635855558/b09fa001081a9569fd70fce53e99825e_q72xcs.jpg",
    host: "5d378db94e84753160e08b59",
    type: ListingType.Apartment,
    address: "Бульвар Леси Украинки 7б, Київ(Печерський)",
    country: "Canada",
    admin: "Ontario",
    city: "Toronto",
    bookings: [],
    bookingsIndex: {},
    price: 1400,
    numOfGuests: 6
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b34"),
    title: "Квартира на Французском",
    description:
        "Новая, двухкомнатная уютная квартира на Французском бульваре, 5 спальных мест. Расположена в элитном районе, дом сдан в 2012.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636208526/24989_329119_580x440_dobovo_sqafd8.jpg",
    host: "5d378db94e84753160e08b57",
    type: ListingType.House,
    address: "бул. Французский 22/1, Малый Фонтан, Приморский район, Одесса",
    country: "Украина",
    admin: "Одесская",
    city: "Одесса",
    bookings: [],
    bookingsIndex: {},
    price: 1300,
    numOfGuests: 4
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b35"),
    title: "Квартира рядом с пляжем Дельфин",
    description:
        "\n" +
        "Квартира находится рядом с Шампанским переулком. Рядом пляжи Дельфин, Отрада и Аркадия.",
    image:
        "https://static-new.dobovo.com/img/apts/217/21793/21793_699015_580x440_dobovo.jpg",
    host: "5d378db94e84753160e08b57",
    type: ListingType.House,
    address: "бул. Французский 22/2, Малый Фонтан, Приморский район, Одесса",
    country: "Украина",
    admin: "Одесская",
    city: "Одесса",
    bookings: [],
    bookingsIndex: {},
    price: 100,
    numOfGuests: 4
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b36"),
    title: "Квартира в новом доме",
    description:
        "Местоположение: Французский бульвар угол Шампанского переулка. Новый дом. Квартира располагается на 7 этаже. Море видно из лоджии.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636209044/mock/Odessa/32843_450791_580x440_odessa_francuzskiy.jpg",
    host: "5d378db94e84753160e08b57",
    type: ListingType.House,
    address: "бул. Французский 26/1, Малый Фонтан, Приморский район, Одесса",
    country: "Украина",
    admin: "Одесская",
    city: "Одесса",
    bookings: [],
    bookingsIndex: {},
    price: 100,
    numOfGuests: 1
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b37"),
    title: "Vintage в Одессе",
    description:
        "Explore downtown Toronto by staying at this beautiful chic 1 bedroom condo. Access to a lap pool, gym, and sauna at all times.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636209224/mock/Odessa/23708_340021_580x440_odessa_franzuskiy.jpg",
    host: "5d378db94e84753160e08b56",
    type: ListingType.Apartment,
    address: "бул. Французский 13, Малый Фонтан, Приморский район, Одесса",
    country: "Украина",
    admin: "Одесская",
    city: "Одесса",
    bookings: [],
    bookingsIndex: {},
    price: 1000,
    numOfGuests: 4
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b38"),
    title: "Апартаменты в новом элитном ЖК Листопад",
    description:
        "Предлагаем вам квартиру-студию напротив ресторана Легенда, в новом элитном ЖК Листопад. Дизайнерский евроремонт - рекомендуется для проведения фотосессий. Автономное отопление. В каждой из комнат кондиционеры, в ванной душевая кабина. В квартире новая мебель и техника, есть балкон. Телевизор Bravis (цифровое ТВ), скоростной интернет Wi-Fi, стиральная машина с сушкой, посудомоечная машина, холодильник, электрический утюг, электрочайник, микроволновая печь, фен, комплект посуды (на 6 персон), постельное белье, полотенца. Есть 2+2 спальных места: диван (двуспальный) и двуспальная кровать.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636228679/mock/Frankisvk/49658_721116_580x440_dobovo_p2q24j.jpg",
    host: "5d378db94e84753160e08b56",
    type: ListingType.Apartment,
    address: "ул. Ивасюка 86, Ивано-Франковск",
    country: "Украина",
    admin: "Ивано-франковская",
    city: "Ивано-франковск",
    bookings: [],
    bookingsIndex: {},
    price: 50,
    numOfGuests: 4
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b39"),
    title: "Люкс-апартаменты",
    description:
        "Элитная комфортная квартира находится в тихом районе города, охраняемая территория, въезд по пропускам. 3,9 км до центра города, 10 минут до аэропорта. Возле дома бесплатное место для парковки. Удобное расположение, рядом находятся: продуктовый супермаркет АТБ, кофейня, кафе, пиццерия, детские площадки, пикник зона у озера, детские игровые комнаты. Квартира оборудована всем новым и необходимым. Большая и уютная квартира с евроремонтом, автономное отопление, подогрев полов, фильтр для очистки питьевой воды, интернет Wi-Fi, кабельное ТВ, стиральная машина, плазменный телевизор, холодильник, постельное белье и полотенца, посуда, фен, микроволновая печь, электрочайник, газовая плита. В ванной комнате есть душевая кабина.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636228801/mock/Frankisvk/48139_694023_580x440_dobovo_sceswn.jpg",
    host: "5d378db94e84753160e08b59",
    type: ListingType.Apartment,
    address: "ул. Дворская 9, Ивано-Франковск",
    country: "Украина",
    admin: "Ивано-франковская",
    city: "Ивано-франковск",
    bookings: [],
    bookingsIndex: {},
    price: 50,
    numOfGuests: 4
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b3a"),
    title: "Family apartments",
    description:
        "Отличные, уютные, 3 комнатные апартаменты.\n" +
        "Расположены в самом красивом, экологически чистом и удобном районе Ивано-Франковска, Калиновая Слобода. 700 метров до городского озера, 1,5 км до парка имени Шевченка и 4 км до центра города.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636228891/mock/Frankisvk/51821_764650_580x440_dobovo_y0fwdy.jpg",
    host: "5d378db94e84753160e08b56",
    type: ListingType.Apartment,
    address: "ул. Слободская 19, Ивано-Франковск",
    country: "Украина",
    admin: "Ивано-франковская",
    city: "Ивано-франковск",
    bookings: [],
    bookingsIndex: {},
    price: 50,
    numOfGuests: 8
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b3b"),
    title: "Kalinova Sloboda Лофт",
    description:
        "Уютная квартира в стиле Лофт. Современный дизайн и качественное выполнение ремонта позволят вам расслабиться в этих апартаментах. Здесь есть все необходимое для краткосрочного проживания.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636229085/mock/Frankisvk/54507_813576_580x440_dobovo_nrjkrf.jpg",
    host: "5d378db94e84753160e08b56",
    type: ListingType.House,
    address: "ул. Слободская 48, Ивано-Франковск",
    country: "Украина",
    admin: "Ивано-франковская",
    city: "Ивано-франковск",
    bookings: [],
    bookingsIndex: {},
    price: 50,
    numOfGuests: 3
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b3c"),
    title: "Киевская | Киев | Печерский | Михайловская 16А",
    description:
        "Пентхаус в стиле лофт в самом сердце столицы Украины. Апартаменты расположены на одной из самых старых улиц Киева в непосредственной близости от Площади Независимости и Михайловской площади, Михайловского Собора. Идеальное месторасположение для любителей посетить исторические места города, старинные церкви, главные площади и галереи.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636244007/mock/Kiev/zal_zjmewz.jpg",
    host: "5d378db94e84753160e08b57",
    type: ListingType.House,
    address: "Киевская | Киев | Печерский | Михайловская 16А",
    country: "Украина",
    admin: "Киевская",
    city: "Киев",
    bookings: [],
    bookingsIndex: {},
    price: 16843,
    numOfGuests: 4
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b3d"),
    title: "VIP квартира рядом с парком (Арена Сити)",
    description:
        "Квартира VIP класса c 3 раздельными спальнями и гостиной - 160 м2. Расположена на 5 этаже 6-этажного дома в самом центре Киева.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636243828/mock/Kiev/55263_828028_580x440_dobovo_db2ftk.jpg",
    host: "5d378db94e84753160e08b56",
    type: ListingType.Apartment,
    address: "ул. Антоновича 9, Центр, Печерский район, Киев",
    country: "Украина",
    admin: "Киевская",
    city: "Киев",
    bookings: [],
    bookingsIndex: {},
    price: 230,
    numOfGuests: 6
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b3e"),
    title: "Здам подобово 1к квартиру на плато Гагаринское, кв. 13",
    description:
        "Апартаменты класса Lux. 3 спальных комнаты. 2 ванные комнаты , одна из которых оборудованна сауной. Общая площадь квартиры 130 кв.м. Апартаменты находятся в самом престижном районе города Одесса.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636243506/mock/Odessa/arenda-posutochnaya-kvartira-odessa-primorskiy__166183601xg_vv0ygh.webp",
    host: "5d378db94e84753160e08b57",
    type: ListingType.Apartment,
    address: "ЖК Гагарин Плаза Одеса  ·  район Приморськи",
    country: "Украина",
    admin: "Одесская",
    city: "Одесса",
    bookings: [],
    bookingsIndex: {},
    price: 250,
    numOfGuests: 6
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b3f"),
    title: "3-комн. кв., 150 м2, 4/12 этаж",
    description:
        "В Период С 15.09 ПО 30.04 (летом сдается только посуточно). Просторные апартаменты в Ж/К «Аркадийский дворец», ул. Гагаринское плато 5/3, 4/12 эт. дома, общая площадь 150 кв. м. Две отдельные спальни, гостиная мягкой мебелью, отдельная кухня. Со спальни и гостиной выход на большую террасу с летней мебелью и шикарным видом на море. Два санузла - душевая кабина и угловая ванна.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636243252/mock/Odessa/big_4446053_qasr8b.jpg",
    host: "5d378db94e84753160e08b58",
    type: ListingType.House,
    address: "Одесса, приморский, ул. Гагаринское плато, 5/3 ",
    country: "Украина",
    admin: "Одесская",
    city: "Одесса",
    bookings: [],
    bookingsIndex: {},
    price: 275,
    numOfGuests: 2
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b40"),
    title: "2-комн. + студия кв., 180 м2, 10/10 этаж",
    description:
        "В Период С 01.10 ПО 30.04 (летом сдается только посуточно). Стильные апартаменты в центре Одессы, пер. Ониловый 18, общая площадь 180 кв. м. Квартира находится в новом доме, сделан эксклюзивный ремонт: кухня-студия и две отдельные спальни (всего 6 спальных места: 2+2+2), два санузла, есть большая терраса (75 кв. м.) с мебелью и видом на город и море.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636243108/mock/Odessa/big_4865040_ajoa2z.jpg",
    host: "5d378db94e84753160e08b58",
    type: ListingType.House,
    address: "Одесса, Приморский, пер. Ониловый, 18 ",
    country: "Украина",
    admin: "Одесская",
    city: "Одесса",
    bookings: [],
    bookingsIndex: {},
    price: 280,
    numOfGuests: 6
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b41"),
    title: "Трехкомнатная квартира посуточно в Киеве, Печерский район, ул. Ивана Фёдорова",
    description:
        "ЖК  «Тетрис Холл» находится в центре Киева, рядом со станицей метро Олимпийская. До улицы Крещатик всего 15 минут ходьбы.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636242983/mock/Kiev/0F56A643_DEA4_4FE7_8CAC_3EB5886F5E1E_iutjxa.jpg",
    host: "5d378db94e84753160e08b56",
    type: ListingType.House,
    address: "Киев, ул. Ивана Фёдорова, 2а",
    country: "Украина",
    admin: "Киевская",
    city: "Киев",
    bookings: [],
    bookingsIndex: {},
    price: 260,
    numOfGuests: 6
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b42"),
    title: "Квартира возле Дерибасовской и Горсада.",
    description: "Расположение: центр, улица Дерибасовская/Греческая площадь, 2 этаж 3-этажного дома - памятника архитектуры в самом центре Дерибасовской, на пересечении с главной площадью города - Греческой. Самое сердце Одессы, яркое пешеходное место с фонтанами и клумбой в середине, со множеством достопримечательностей, потрясающей архитектурой, с десятками кафе и ресторанов под открытым небом. Напротив дома, в центре Греческой площади, расположен большой торговый центр Афина, под ним - подземный паркинг. Вход в дом - железные ворота с домофоном.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636242779/mock/Odessa/12027_680156_580x440_dobovo_kr3brj.jpg",
    host: "5d378db94e84753160e08b59",
    type: ListingType.Apartment,
    address: "ул. Дерибасовская 27, Центр, Приморский район, Одесса",
    country: "Украина",
    admin: "Одесская",
    city: "Одесса",
    bookings: [],
    bookingsIndex: {},
    price: 280,
    numOfGuests: 10
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b43"),
    title: "Дерибасовская 200 метров, VIP Горсад Оперный театр",
    description:
        "Ремонт февраль 2016 года! Абсолютно новая квартира расположена в 200 метрах от ул. Дерибасовской (Ланжероновская/Гаванная), 3 этаж 3-этажного дома. Площадь 100 м2, четыре комнаты, три отдельные спальни, два санузла (в одном джакузи, во втором - душевая кабина), два уровня, дизайн-проект в ультрасовременном стиле с использованием фактурной штукатурки, декоративных элементов, мозаики, зеркал, металла, бетона, стекла, многоуровневого разнопланового освещения.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636241368/mock/Odessa/20226_680168_580x440_dobovo_ib2sbb.jpg",
    host: "5d378db94e84753160e08b56",
    type: ListingType.Apartment,
    address: "ул. Ланжероновская 21, Центр, Приморский район, Одесса",
    country: "Украина",
    admin: "Одесская",
    city: "Одесса",
    bookings: [],
    bookingsIndex: {},
    price: 250,
    numOfGuests: 8
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b44"),
    title: "5-ти Комнатная квартира Vip - уровня в центе города",
    description:
        "5-ти Комнатная квартира Vip - уровня в центе города ,С балкона открывается прекрасный вид на Киев. Квартира находится на 6 этаже с лифтом, в подъезде консьерж Планировка квартиры очень удобная: 3 раздельные спальни с большими двуспальными кроватями и кухня студио, два сан. узла. Здесь есть 4 кондиционера (по одному в каждой комнате и на кухне) Укомплектована всей необходимой техникой, постельными и банными принадлежностями, интернет WI-FI. закрытый охраняемый двор",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636235431/mock/Kiev/1_2016_09_29_16_45_08_wzxpp6.jpg",
    host: "5d378db94e84753160e08b58",
    type: ListingType.House,
    address: "Печерский | Красноармейская 40",
    country: "Украина",
    admin: "Киевская",
    city: "Киев",
    bookings: [],
    bookingsIndex: {},
    price: 270,
    numOfGuests: 9
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b45"),
    title: "Видовая квартира в центре с двумя спальнями",
    description:
        "Квартира элит-класса в исторической части города. Трехкомнатная квартира с двумя спальнями площадью 150 м2. Расположена на 8 этаже нового дома клубного типа. Из окон открывается панорамный вид на Киев.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636235259/mock/Kiev/56311_846984_580x440_dobovo_sv2rrk.jpg",
    host: "5d378db94e84753160e08b59",
    type: ListingType.House,
    address: "ул. Жилянская 30А, Центр, Печерский район, Киев",
    country: "Украина",
    admin: "Киевская",
    city: "Киев ",
    bookings: [],
    bookingsIndex: {},
    price: 280,
    numOfGuests: 4
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b46"),
    title: "Royal Sky Penthouse",
    description: "Роскошный пентхаус в городе Одессе. Находится в исторической части города, на 11 этаже нового дома. Эксклюзивный дизайн и огромное пространство позволяет чувствовать себя комфортно компании из восьми человек. Три просторные спальни, два больших санузла. Огромная зона гостиной и две невероятные террасы. Апартаменты предназначены для людей с изысканным вкусом и высокими требованиями к сервису.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636233514/mock/Odessa/55076_828897_580x440_dobovo_oxylww.jpg",
    host: "5d378db94e84753160e08b59",
    type: ListingType.House,
    address: "пер. Ониловой 18, Центр, Приморский район, Одесса",
    country: "Украина",
    admin: "Одесская",
    city: "Одесса",
    bookings: [],
    bookingsIndex: {},
    price: 300,
    numOfGuests: 8
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b47"),
    title: "Двухкомнатная квартира посуточно в Ужгороде, ул. Александра Духновича",
    description:
        "2х комнатная  квартира LUX класса с дизайнерским ремонтом‚расположена в самом сердце исторической части г.Ужгорода.Полностью оборудована всем необходимым для комфортного проживания: стиральная  и сушильная машины, посуда, холодильник,посудомоечная машина‚ микроволновая печь, электрочайник, утюг и гладильная доска, фен, кондиционер",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636229837/mock/Uzchgorod/850_2180_ekobsv.jpg",
    host: "5d378db94e84753160e08b57",
    type: ListingType.Apartment,
    address: "Ужгород, ул. Александра Духновича , 13",
    country: "Украина",
    admin: "Закарпатская область",
    city: "Ужгород",
    bookings: [],
    bookingsIndex: {},
    price: 50,
    numOfGuests: 4
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b48"),
    title: "Трехкомнатная квартира посуточно в Ужгороде, ул. Капитульная",
    description:
        "Великолепная 3х комнатная квартира в центре города прямо на Замке - что является местной достопримечательностью. Выход в городской центр, где Вы выберете любимое кафе или ресторан из столь большого выбора. Лучшая Возможность Шопинга также в Центре. Детские Развлечения.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636229744/mock/Uzchgorod/8BB974F4_BBFB_4F39_8D67_106F0C396D08_lu31up.jpg",
    host: "5d378db94e84753160e08b57",
    type: ListingType.Apartment,
    address: "Ужгород, ул. Капитульная, 28",
    country: "Украина",
    admin: "Закарпатская область",
    city: "Ужгород",
    bookings: [],
    bookingsIndex: {},
    price: 50,
    numOfGuests: 7
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b49"),
    title: "Двухкомнатная квартира посуточно в Ужгороде, ул. Ирены Невицкой",
    description:
        "Стильная квартира с дизайнерским ремонтом в новом доме. Расположена в респектабельном тихом районе г. Ужгорода, в 10 минутах ходьбы от исторического центра города.",
    image:
        "https://res.cloudinary.com/tiny-house/image/upload/v1560645409/mock/London/london-listing-2_mtfogm.jpg",
    host: "5d378db94e84753160e08b59",
    type: ListingType.Apartment,
    address: "Ужгород, ул. Ирены Невицкой, 9Б",
    country: "Украина",
    admin: "Закарпатская область",
    city: "Ужгород",
    bookings: [],
    bookingsIndex: {},
    price: 50,
    numOfGuests: 4
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b4a"),
    title: "Однокомнатная квартира посуточно в Ужгороде, ул. Александра Духновича",
    description:
        "V.I.P квартира-студия с дизайнерским ремонтом‚расположена в самом сердце исторической части г.Ужгорода. С просторного  балкона которой открывается вид на Крестовоздвиженский собор и непосредственно улицу Духновича. Полностью оборудована всем необходимым для комфортного проживания: стиральная  и сушильная машины, посуда, холодильник, микроволновая печь, электрочайник, утюг и гладильная доска, фен, кондиционер.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636229405/mock/Uzchgorod/850_2059_nos8hf.jpg",
    host: "5d378db94e84753160e08b56",
    type: ListingType.House,
    address: "Ужгород, ул. Александра Духновича , 13",
    country: "Украина",
    admin: "Закарпатская область",
    city: "Ужгород",
    bookings: [],
    bookingsIndex: {},
    price: 50,
    numOfGuests: 4
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b4b"),
    title: "Отель в центре города",
    description:
        "Львов - город который захватит своей красотой, историческими достопримечательностями и вкусной кухней. Отель Oysters&Bubbles GastroHotel. Rynok square поможет вам незабываемо провести время.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636209549/mock/Lviv/52972_786964_580x440_dobovo_xyfpev.jpg",
    host: "5d378db94e84753160e08b55",
    type: ListingType.House,
    address: "пл. Рынок 35, Центр,",
    country: "Украина",
    admin: "Львовская",
    city: "Львов",
    bookings: [],
    bookingsIndex: {},
    price: 11349,
    numOfGuests: 5
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b4c"),
    title: "Shelter",
    description:
        "Эти апартаменты с бесплатным Wi-Fi расположены в центре Львова, в 2 минутах ходьбы от Оперного театра. Номера отделаны красным кирпичом и деревом. Ванные комнаты и душевые расположены в коридорах. Гости могут пользоваться кухней и обеденной зоной.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636209680/mock/Lviv/54873_820744_580x440_dobovo_arhwev.jpg",
    host: "5d378db94e84753160e08b55",
    type: ListingType.House,
    address: "ул. Курбаса 8, Центр, Галицкий район, Львов",
    country: "Украина",
    admin: "Львовская",
    city: "Львов",
    bookings: [],
    bookingsIndex: {},
    price: 250,
    numOfGuests: 4
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b4d"),
    title: "ЧЕТЫРЕХКОМНАТНАЯ КВАРТИРА ПОСУТОЧНО, ЛЬВОВ, ГАЛИЦКИЙ РАЙОН",
    description:
        "Для посуточной аренды предлагается четырехкомнатная квартира с фантастическим видом. Апартаменты расположены на 5 этаже исторического дома в самом центре Львова. Уникальность жилья заключается в выигрышном сочетании правильной планировки квартиры (три изолированных спальни, раздельный санузел, отдельная кухня с балконом), великолепного вида (за счет высоты здания, панорамных окон и трех фасадных балконов), наличия лифта в доме, что является редкостью в историческом центре Львова.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636209871/mock/Lviv/0003-20160809-162227-29199800_zfmuwz.webp",
    host: "5d378db94e84753160e08b57",
    type: ListingType.House,
    address: "УЛ., БРАТЬЕВ РОГАТИНЦЕВ, 10",
    country: "Украина",
    admin: "Львовская",
    city: "Львов",
    bookings: [],
    bookingsIndex: {},
    price: 300,
    numOfGuests: 11
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b4e"),
    title: "Номер люкс",
    description:
        "В двухкомнатном номере люкс есть всё, что может Вам понадобиться. Номер рассчитан на 4 гостей, в нём есть двуспальная кровать в спальне и двуспальный раскладной диван в гостиной. В ванной комнате есть туалет, умывальник, душевая кабина, фен. Гостям предоставляются полотенца, тапочки, халаты, средства гигиены. В номере есть кондиционер, шкаф, кухонный уголок, мини-бар и электрочайник. Мультимедиа и интернет: телефон, телевизор со Смарт-ТВ Т2, бесплатный Wi-Fi. Есть возможность предоставить детскую кроватку и столик для кормления.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636209931/mock/Lviv/37783_531881_580x440_dobovo_lunv08.jpg",
    host: "5d378db94e84753160e08b59",
    type: ListingType.Apartment,
    address: "ул. Герцена 3, Центр - Парк культуры, Галицкий район, Львов",
    country: "Украина",
    admin: "Львовская",
    city: "Львов",
    bookings: [],
    bookingsIndex: {},
    price: 200,
    numOfGuests: 4
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b4f"),
    title: "Большая уютная квартира",
    description:
        "В этом доме у нас представлено 9 (7 трехкомнатных, 2 двухкомнатных) квартир разных планировок с евроремонтом. Можем разместить большую группу людей до 50 человек. Паркинг, стоянка, видеонаблюдение, охрана, закрытая территория.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636210910/mock/Kharkiv/56902_857291_580x440_dobovo_g4k8pt.jpg",
    host: "5d378db94e84753160e08b59",
    type: ListingType.Apartment,
    address: "ул. Клочковская 258, Алексеевка, Шевченковский район, Харьков",
    country: "Украина",
    admin: "Харьковская",
    city: "Харьков",
    bookings: [],
    bookingsIndex: {},
    price: 100,
    numOfGuests: 4
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b50"),
    title: "Большая уютная квартира в центре",
    description:
        "В этом доме у нас представлено 10 (двухкомнатные - 6, трехкомнатные - 4) квартир разных планировок с евроремонтом. Можем разместить большую группу людей до 48 человек.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636211091/mock/Kharkiv/57538_870565_580x440_dobovo_usg7xf.jpg",
    host: "5d378db94e84753160e08b56",
    type: ListingType.Apartment,
    address: "ул. Рогатинская Левада 12, Центр, Шевченковский район, Харьков",
    country: "Украина",
    admin: "Харьковская",
    city: "Харьков",
    bookings: [],
    bookingsIndex: {},
    price: 80,
    numOfGuests: 6
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b51"),
    title: "Квартира Вивальди в Мост-Сити с балконом с видом на реку",
    description:
        "Большая (110 м2) видовая квартира в элитном доме Мост-Сити, центр Днепра. В доме рецепция и охрана. Есть 3 скоростных лифта, платная стоянка - 200 метров от дома, торговый центр с множеством магазинов, ресторанов и зон для отдыха - 150 метров от дома.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636211474/mock/Dnepr/42246_595537_580x440_dobovo_wlslaq.jpg",
    host: "5d378db94e84753160e08b56",
    type: ListingType.Apartment,
    address: "ул. Глинки 2, Центр, Центральный район, Днепр",
    country: "Украина",
    admin: "Днепропетровская",
    city: "Днепропетровск",
    bookings: [],
    bookingsIndex: {},
    price: 150,
    numOfGuests: 5
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b52"),
    title: "Шикарная квартира в Мост-Сити с джакузи\n",
    description:
        "Шикарная видовая трехкомнатная квартира в Мост-Сити-Центре с джакузи (в самом сердце Днепра, ул. Глинки 2).",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636211589/mock/Dnepr/20464_530626_580x440_dobovo_rhfl7h.jpg",
    host: "5d378db94e84753160e08b59",
    type: ListingType.Apartment,
    address: "ул. Глинки 2, Центр, Центральный район, Днепр",
    country: "Украина",
    admin: "Днепропетровская",
    city: "Днепропетровск",
    bookings: [],
    bookingsIndex: {},
    price: 150,
    numOfGuests: 6
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b53"),
    title: "Фешенебельная квартира в Мост-Сити",
    description:
        "Фешенебельная трехкомнатная квартира (103 м2) расположена в здании ТЦ Мост-Сити. Из окон квартиры открывается шикарный панорамный вид на город и реку Днепр. В квартире имеется уютный французский балкончик.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636211638/mock/Dnepr/34705_479068_580x440_dobovo_o5xdau.jpg",
    host: "5d378db94e84753160e08b56",
    type: ListingType.House,
    address: "ул. Глинки 2, Центр, Центральный район, Днепр",
    country: "Украина",
    admin: "Днепропетровская",
    city: "Днепропетровск",
    bookings: [],
    bookingsIndex: {},
    price: 24842,
    numOfGuests: 4
  },
  {
    _id: new ObjectId("5d378db94e84753160e08b54"),
    title: "Квартира в Мост-Сити",
    description:
        "Большая видовая трехкомнатная квартира в Мост-Сити. Из окон квартиры открывается шикарный панорамный вид на город Днепропетровск и реку Днепр. В квартире имеется уютный французский балкончик.",
    image:
        "https://res.cloudinary.com/flatfast/image/upload/v1636211716/mock/Dnepr/29235_560437_580x440_dobovo_phqg2t.jpg",
    host: "5d378db94e84753160e08b56",
    type: ListingType.Apartment,
    address: "ул. Глинки 2, Центр, Центральный район, Днепр",
    country: "Украина",
    admin: "Днепропетровская",
    city: "Днепропетровск",
    bookings: [],
    bookingsIndex: {},
    price: 150,
    numOfGuests: 6
  }
];
const users: User[] = [
  {
    _id: "5d378db94e84753160e08b55",
    token: "token_************",
    name: "Владимир Д.",
    avatar:
        "https://res.cloudinary.com/flatfast/image/upload/v1636211872/mock/users/photo_2_rcltbx.jpg",
    contact: "diachenko.vladimir@gmail.com",
    walletId: "acct_************",
    income: 723796,
    bookings: [],
    listings: [
      new ObjectId("5d378db94e84753160e08b31"),
      new ObjectId("5d378db94e84753160e08b4b"),
      new ObjectId("5d378db94e84753160e08b4c")
    ]
  },
  {
    _id: "5d378db94e84753160e08b56",
    token: "token_************",
    name: "Владимир Д.",
    avatar:
        "https://res.cloudinary.com/flatfast/image/upload/v1636211872/mock/users/photo_2_rcltbx.jpg",
    contact: "diachenko.vladimir@gmail.com",
    walletId: "acct_************",
    income: 256144,
    bookings: [],
    listings: [
      new ObjectId("5d378db94e84753160e08b37"),
      new ObjectId("5d378db94e84753160e08b38"),
      new ObjectId("5d378db94e84753160e08b3a"),
      new ObjectId("5d378db94e84753160e08b3b"),
      new ObjectId("5d378db94e84753160e08b3d"),
      new ObjectId("5d378db94e84753160e08b41"),
      new ObjectId("5d378db94e84753160e08b43"),
      new ObjectId("5d378db94e84753160e08b4a"),
      new ObjectId("5d378db94e84753160e08b50"),
      new ObjectId("5d378db94e84753160e08b51"),
      new ObjectId("5d378db94e84753160e08b53"),
      new ObjectId("5d378db94e84753160e08b54")
    ]
  },
  {
    _id: "5d378db94e84753160e08b57",
    token: "token_************",
    name: "Владимир Д.",
    avatar:
        "https://res.cloudinary.com/flatfast/image/upload/v1636211872/mock/users/photo_2_rcltbx.jpg",
    contact: "diachenko.vladimir@gmail.com",
    walletId: "acct_************",
    income: 272359,
    bookings: [],
    listings: [
      new ObjectId("5d378db94e84753160e08b30"),
      new ObjectId("5d378db94e84753160e08b32"),
      new ObjectId("5d378db94e84753160e08b34"),
      new ObjectId("5d378db94e84753160e08b35"),
      new ObjectId("5d378db94e84753160e08b36"),
      new ObjectId("5d378db94e84753160e08b3c"),
      new ObjectId("5d378db94e84753160e08b3e"),
      new ObjectId("5d378db94e84753160e08b47"),
      new ObjectId("5d378db94e84753160e08b48"),
      new ObjectId("5d378db94e84753160e08b4d")
    ]
  },
  {
    _id: "5d378db94e84753160e08b58",
    token: "token_************",
    name: "Владимир Д.",
    avatar:
        "https://res.cloudinary.com/flatfast/image/upload/v1636211872/mock/users/photo_2_rcltbx.jpg",
    contact: "diachenko.vladimir@gmail.com",
    walletId: "acct_************",
    income: 465043,
    bookings: [],
    listings: [
      new ObjectId("5d378db94e84753160e08b3f"),
      new ObjectId("5d378db94e84753160e08b40"),
      new ObjectId("5d378db94e84753160e08b44")
    ]
  },
  {
    _id: "5d378db94e84753160e08b59",
    token: "token_************",
    name: "Владимир Д.",
    avatar:
        "https://res.cloudinary.com/flatfast/image/upload/v1636211872/mock/users/photo_2_rcltbx.jpg",
    contact: "diachenko.vladimir@gmail.com",
    walletId: "acct_************",
    income: 104347,
    bookings: [],
    listings: [
      new ObjectId("5d378db94e84753160e08b33"),
      new ObjectId("5d378db94e84753160e08b39"),
      new ObjectId("5d378db94e84753160e08b42"),
      new ObjectId("5d378db94e84753160e08b45"),
      new ObjectId("5d378db94e84753160e08b46"),
      new ObjectId("5d378db94e84753160e08b49"),
      new ObjectId("5d378db94e84753160e08b4e"),
      new ObjectId("5d378db94e84753160e08b4f"),
      new ObjectId("5d378db94e84753160e08b52")
    ]
  }
];

const seed = async () => {
  try {
    console.log("[seed] : running...");

    const db = await connectDatabase();

    for (const listing of listings) {
      await db.listings.insertOne(listing);
    }

    for (const user of users) {
      await db.users.insertOne(user);
    }


    console.log("[seed] : completed");
  } catch (error) {
    throw new Error('failed to seed database');
  }
};

seed();
