// nav
const navData = [
   {title:"BBBが選ばれる理由", link:"#reason"},
   {title:"受講生の声", link:"#voice"},
   {title:"スクールの概要", link:"#summary"},
];

// voice

const voiceData = [
  {
    image: "student_voice-1.png",
    caption: "田中さん<br>大学生", // <br>を \n に変更
    alt: "海外旅行を楽しむために英会話を学び始めた大学生の田中さんの画像",
    comment: "海外旅行をもっと楽しむために英会話を始めました。実際に外国の方と話せる機会が増え、自信がついてきました！"
  },
  {
    image: "student_voice-2.png",
    caption: "佐藤さん<br>会社員",
    alt: "仕事で英語が必要になり、英会話を学び始めた会社員の佐藤さんの画像",
    comment: "仕事で英語が必要になり、ここで学び始めました。実践的なフレーズが身につき、会議やメールでスムーズに対応できるようになりました。"
  },
  {
    image: "student_voice-3.png",
    caption: "高橋さん<br>自営業",
    alt: "海外のお客様とのやり取りが増え、英会話を学び始めた自営業の高橋さんの画像",
    comment: "海外のお客様とのやり取りが増え、英会話を学び始めました。スムーズにコミュニケーションが取れるようになり、ビジネスチャンスも広がっています！"
  }
];


// reason

const reasonData = [
    {title:"レッスン内容",subtitle:"LESSON",text:"初心者から上級者まで対応。実践的なカリキュラムで会話力を磨けます。"},
    {title:"料金プラン",subtitle:"PRICE",text:"ライフスタイルに合わせた柔軟な料金設定。月額・短期プランも選べます。"},
    {title:"講師のご紹介",subtitle:"TEACHER",text:"経験豊富な講師が指導。自然な発音や表現が身につきます。"},
    {title:"BBBのQ&A",subtitle:"Q&A",text:"レッスンや料金についての質問にお答えします。お気軽にどうぞ！"}
]

const footerData = [
  {
    id: "courses",
    title: "コース一覧",
    links: [
      { title: "スタンダードプラン", link: "#" },
      { title: "プレミアムプラン", link: "#" },
      { title: "短期集中プラン", link: "#" },
      { title: "日常英会話コース", link: "#" },
      { title: "ビジネス英会話コース", link: "#" }
    ]
  },
  {
    id: "lecturers",
    title: "講師紹介",
    links: [
      { title: "講師について", link: "#" },
      { title: "講師一覧", link: "#" },
      { title: "講師を探す", link: "#" }
    ]
  },
  {
    id: "company",
    title: "会社情報",
    links: [
      { title: "会社概要", link: "#" },
      { title: "採用情報", link: "#" }
    ]
  },
  {
    id: "bbb",
    title: "BBBについて",
    links: [
      { title: "よくあるご質問", link: "#" },
      { title: "ご利用規約", link: "#" },
      { title: "プライバシーポリシー", link: "#" },
      { title: "お問い合わせ", link: "#" }
    ]
  }
];


module.exports = { navData, voiceData,reasonData,footerData };