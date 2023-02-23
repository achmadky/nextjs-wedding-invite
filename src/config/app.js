const baseConfig = {
  weddingDay: "Saturday",
  weddingTime: "19.00 - 21.00",
  weddingDate: "Feb 25, 2023",
  showBuiltWithInfo: true,
  showQrCode: false,
  calendarInfo: {
    timeStartISO: "2023-02-25T19:00:00+08:00",
    timeEndISO: "2023-02-25T21:00:00+08:00"
  },
  coupleInfo: {
    brideName: "Tania",
    groomName: "Dhiki",
    coupleNameFormat: "GROOM_FIRST"
  },
  venue: {
    name: "Golden City Ballroom",
    addressLine1: "Villa Bukit Mas, Mayjend Sungkono",
    addressLine2: "Jl. Abdul Wahab Siamin No. 2-8 Surabaya",
    city: "Surabaya",
    country: "Indonesia",
    mapUrl: "https://goo.gl/maps/kpbL46cVLWHLu76t6"
  },
  logo: {
    headerLogo: "/assets/images/ring-svg1.png",
    footerLogo: "/assets/video/dt2.mp4",
    footerLogoType: "mp4"
  },
  ogTags: {
    logo: "/assets/images/dt-ring-logo.png",
    siteName: "wedding.wzulfikar.com",
    publishedTime: "2023-02-22"
  }
};

const lang = {
  id: {
    weddingDay: "Sabtu",
    weddingDate: "25 Februari 2023",
    venue: {
      ...baseConfig.venue,
      name: "Golden City Ballroom",
      addressLine2: "Surabaya, Jawa Timur, 60225,",
    }
  }
};

export default {
  ...baseConfig,
  lang
};
