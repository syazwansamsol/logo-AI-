/**
 * Data and Knowledge Base for:
 * Isu Harta Intelek: Logo Sekolah Dijana AI
 * Diciptakan oleh Kumpulan 4
 */

export interface RiskItem {
  id: number;
  title: string;
  tagline: string;
  description: string;
  impactLevel: 'Tinggi' | 'Sederhana' | 'Kritikal';
  mitigation: string;
  iconName: string;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
  details: string;
  tips: string[];
}

export interface TrademarkClass {
  classNumber: number;
  name: string;
  subtitle: string;
  relevanceToSchool: string;
  examples: string[];
  mockupContext: string;
}

export const IP_DATA = {
  meta: {
    title: "Isu Harta Intelek: Logo Sekolah Dijana AI",
    subQuestions: [
      "Sesuaikah?",
      "Boleh didaftarkan?",
      "Apa risikonya?",
      "Perlukah atribusi?"
    ],
    creator: "Kumpulan 4",
    disclaimer: "Bukan nasihat undang-undang. Rujuk Perbadanan Harta Intelek Malaysia (MyIPO) atau peguam harta intelek bertauliah.",
    summary: "Panduan komprehensif dan interaktif untuk pihak pentadbir sekolah, guru, dan pereka grafik dalam mengemudi sempadan perundangan hak cipta, cap dagangan MyIPO, serta risiko etika penjanaan logo sekolah berasaskan kecerdasan buatan (AI)."
  },

  suitability: {
    title: "Sesuaikah Guna AI?",
    suitable: {
      title: "Sesuai Sebagai Alat Bantu",
      points: [
        {
          heading: "Menjana konsep dan idea",
          desc: "AI amat berkuasa untuk percambahan idea visual awal (ideation), palet warna sekolah, dan mood board dalam beberapa saat."
        },
        {
          heading: "Pereka manusia mengolah & melukis semula",
          desc: "Sentuhan tangan manusia mengubah draf mentah menjadi karya seni berstruktur dengan identiti tempatan yang bermakna."
        },
        {
          heading: "Muktamad dalam format vektor",
          desc: "Diperkemaskan dalam format SVG atau AI (Adobe Illustrator) bagi ketajaman skala tanpa had untuk cetakan fizikal."
        }
      ]
    },
    unsuitable: {
      title: "Kurang Sesuai Jika Mentah-mentah",
      points: [
        {
          heading: "Mungkin mirip logo sedia ada",
          desc: "Model AI dilatih daripada jutaan imej internet sedia ada, berpotensi meniru secara tidak sengaja logo institusi atau jenama lain."
        },
        {
          heading: "Sukar dilindungi dan tidak unik",
          desc: "Output mentah AI tidak mempunyai keunikan proprietari yang kukuh di sisi mahkamah serta mudah dijana semula oleh sesiapa sahaja."
        },
        {
          heading: "Fail raster tidak sesuai untuk cetakan",
          desc: "Output AI lazimnya berformat piksel (PNG/JPG 72–96 DPI). Apabila dibesarkan untuk papan tanda atau bendera sekolah, imej pecah dan kabur."
        }
      ]
    }
  },

  copyright: {
    title: "Hak Cipta: Isu Utama",
    lawBasis: "Akta Hak Cipta 1987 (Malaysia)",
    pillars: [
      {
        number: "1",
        title: "Pengarang Manusia (Human Authorship)",
        description: "Akta Hak Cipta 1987 secara konsisten mengaitkan hak cipta dengan 'orang yang layak' (human creator). Output AI tulen tanpa campur tangan manusia yang signifikan mungkin tidak dilindungi oleh hak cipta secara automatik.",
        highlight: "Output AI tulen tidak diiktiraf sebagai 'karya pengarang'."
      },
      {
        number: "2",
        title: "Sumbangan Pereka Manusia",
        description: "Olahan kreatif pereka manusia (menterjemah konsep AI ke dalam lukisan vektor asal, pemilihan komposisi, penyesuaian elemen manual) lebih mudah dipertahankan di mahkamah sebagai karya berhak cipta.",
        highlight: "Nilai tambah manusia mewujudkan perlindungan sah."
      },
      {
        number: "3",
        title: "Undang-undang Belum Jelas",
        description: "Setakat pengetahuan dan rekod semasa, Malaysia belum mempunyai peruntukan undang-undang spesifik atau preseden kes mahkamah rasmi yang menetapkan status hak cipta mutlak untuk karya jana AI.",
        highlight: "Keadaan kelabu undang-undang memerlukan langkah berwaspada."
      },
      {
        number: "4",
        title: "Pemilikan Dalaman (Assignment of Rights)",
        description: "Jika pereka luar, alumni, atau guru menghasilkan logo, pastikan ada perjanjian bertulis (Deed of Assignment) yang memindahkan hak cipta secara rasmi kepada pihak sekolah atau Lembaga Pengelola Sekolah.",
        highlight: "Perjanjian bertulis wajib elak pertikaian masa depan."
      }
    ]
  },

  trademark: {
    title: "Cap Dagangan: Perlindungan Praktikal",
    lawBasis: "Akta Cap Dagangan 2019 (Trademarks Act 2019) & MyIPO",
    keyPrinciple: "Pendaftaran cap dagangan menilai TANDA itu sendiri dari sudut fungsi komersial/identiti awam, bukan siapa atau apa yang mencipta reka bentuk asalnya.",
    conditions: [
      {
        title: "Tersendiri (Distinctive)",
        desc: "Mempunyai daya pembezaan yang jelas dan bukan semata-mata bentuk geometri generik seperti bulatan kosong atau perisai asas tanpa identiti unik."
      },
      {
        title: "Tidak Sama atau Mengelirukan",
        desc: "Tidak boleh mengelirukan orang awam atau menyerupai tanda perniagaan, lambang universiti, atau sekolah sedia ada yang berdaftar."
      },
      {
        title: "Bukan Lambang / Emblem yang Dilarang",
        desc: "Tidak dibenarkan menggunakan lambang Diraja, Jata Negara, jata negeri, bendera kebangsaan, lambang PBB, atau palang merah tanpa kebenaran rasmi Yang di-Pertuan Agong/Kerajaan."
      },
      {
        title: "Tidak Menyinggung Orang Ramai",
        desc: "Bebas daripada simbol keagamaan yang diputarbelitkan, unsur perkauman, diskriminasi, atau kandungan bertentangan dengan ketenteraman awam dan moraliti."
      }
    ],
    classes: [
      {
        classNumber: 41,
        name: "Pendidikan & Latihan",
        subtitle: "Aktiviti Pembelajaran & Kebudayaan",
        relevanceToSchool: "Kelas paling kritikal untuk institusi pendidikan; melindungi nama dan lambang sekolah untuk perkhidmatan pengajaran, seminar, sukan dan kokurikulum.",
        examples: ["Sijil peperiksaan & persekolahan", "Buku rekod aktiviti", "Laman web rasmi sekolah", "Penganjuran kejohanan sukan sekolah"],
        mockupContext: "Sijil Digital & Majalah Sekolah"
      },
      {
        classNumber: 25,
        name: "Pakaian Seragam & Aksesori",
        subtitle: "Pakaian Pelajar & Busana Rasmi",
        relevanceToSchool: "Melindungi logo pada pakaian seragam rasmi, lencana berjahit (embroidered badge), baju sukan sekolah, topi, tali leher, dan jaket.",
        examples: ["Lencana sulam poket kemeja", "T-shirt rumah sukan", "Tali leher rasmi", "Tracksuit sekolah"],
        mockupContext: "Lencana Poket Baju & Baju Sukan"
      },
      {
        classNumber: 16,
        name: "Alat Tulis & Penerbitan",
        subtitle: "Buku, Barangan Pejabat & Kertas",
        relevanceToSchool: "Melindungi logo pada buku tulis rasmi, fail pentadbiran sekolah, kepala surat (letterhead), pelekat meja, dan risalah panduan.",
        examples: ["Buku latihan berlogo sekolah", "Kepala surat rasmi (letterhead)", "Diari dan perancang guru", "Brosur PIBG"],
        mockupContext: "Kulit Buku Tulis & Surat Rasmi"
      }
    ]
  },

  risks: [
    {
      id: 1,
      title: "Persamaan Tidak Sengaja",
      tagline: "Risiko Pelanggaran Hak Cipta Pihak Ketiga",
      description: "Model AI menjana imej berdasarkan corak data latihan. AI boleh menghasilkan lambang yang sangat mirip dengan logo sekolah lain, institusi swasta, atau korporat tanpa disedari. Pengguna logo (sekolah) tetap menanggung risiko liabiliti undang-undang.",
      impactLevel: "Kritikal",
      mitigation: "Lakukan carian imej terbalik (Google Lens) dan carian pangkalan data awam MyIPO sebelum memuktamadkan logo.",
      iconName: "AlertTriangle"
    },
    {
      id: 2,
      title: "Terma Alat AI (Terms of Service)",
      tagline: "Sekatan Lesen Percuma vs Komersial",
      description: "Kebanyakan pelan percuma platform AI (contohnya Bing Image Creator, Midjourney pelan percuma lama) melarang penggunaan komersial atau pemilikan penuh hak. Sesetengah terma menyatakan hak pemilikan tetap pada platform.",
      impactLevel: "Tinggi",
      mitigation: "Gunakan akaun berbayar dengan lesen komersial yang jelas, cetak dan simpan terma penggunaan pada tarikh penjanaan dibuat.",
      iconName: "FileText"
    },
    {
      id: 3,
      title: "Tiada Keeksklusifan (Non-Exclusivity)",
      tagline: "Imej Serupa Boleh Dijana Pengguna Lain",
      description: "Di bawah terma kebanyakan platform AI generatif, anda tidak memiliki hak cipta eksklusif terhadap output mentah. Pengguna lain di seluruh dunia yang memasukkan prompt serupa boleh memperoleh reka bentuk yang hampir sama.",
      impactLevel: "Tinggi",
      mitigation: "Jadikan output AI hanya sebagai papan idea; wajibkan pereka melukis semula dengan elemen tersendiri yang unik untuk sekolah.",
      iconName: "Copy"
    },
    {
      id: 4,
      title: "Kelemahan Fail Raster",
      tagline: "Resolusi Terhad & Imej Pecah",
      description: "Imej janaan AI dikeluarkan dalam format bitmap/raster (JPG atau PNG) dengan resolusi terhad (biasanya 1024x1024 piksel). Fail ini tidak boleh dibesarkan untuk kain rentang (banner), papan tanda gerbang sekolah, atau sulaman lencana tanpa pecah.",
      impactLevel: "Sederhana",
      mitigation: "Wajibkan fail akhir ditukar kepada vektor (AI, EPS, SVG) oleh pereka grafik profesional dengan standard warna CMYK/Pantone.",
      iconName: "Maximize2"
    },
    {
      id: 5,
      title: "Sensitiviti Budaya & Agama",
      tagline: "Tafsiran Simbol yang Tersasar",
      description: "AI sering mencampuradukkan simbol keagamaan, kaligrafi jawi/arab yang salah susunan huruf, atau motif etnik yang tidak tepat secara sejarah dan budaya tempatan Malaysia.",
      impactLevel: "Kritikal",
      mitigation: "Bentuk jawatankuasa penilaian sekolah (melibatkan guru seni, guru sejarah, dan pentadbir) untuk meneliti setiap elemen makna sebelum kelulusan.",
      iconName: "Globe"
    },
    {
      id: 6,
      title: "Isu Data Latihan AI (Training Data)",
      tagline: "Gugatan Tuntutan Mahkamah Antarabangsa",
      description: "Beberapa pembina model AI kini sedang berdepan tuntutan saman hak cipta di mahkamah antarabangsa kerana menggunakan karya seni artis tanpa kebenaran dalam set data latihan mereka.",
      impactLevel: "Sederhana",
      mitigation: "Gunakan alat AI yang telus dengan sumber latihan berlesen (contohnya Adobe Firefly yang dilatih dengan Adobe Stock bebas royalti).",
      iconName: "ShieldAlert"
    }
  ] as RiskItem[],

  attribution: {
    title: "Perlukah Atribusi?",
    coreRule: "Undang-undang Malaysia (Akta Hak Cipta 1987) tidak mewajibkan atribusi untuk output yang dihasilkan oleh AI.",
    rules: [
      {
        number: "1",
        title: "Semak Terma Alat AI",
        description: "Walaupun undang-undang negara tidak mewajibkan atribusi, pelan percuma platform tertentu mungkin memerlukan pautan kredit atau melarang penggunaan komersial/rasmi institusi. Sentiasa semak 'Terms of Use'."
      },
      {
        number: "2",
        title: "Fon & Ikon Tambahan",
        description: "Jika pereka menambah elemen luaran seperti fon tipografi (typography font) atau ikon grafik sedia ada, pastikan lesen fon tersebut (OFL, komersial, atau percuma) dipatuhi secara sah."
      },
      {
        number: "3",
        title: "Dokumentasikan Proses & Bersikap Telus",
        description: "Simpan rekod jelas mengenai bagaimana logo dihasilkan. Sekiranya timbul pertanyaan daripada Pejabat Pendidikan Daerah (PPD), JPN, atau MyIPO, sekolah mampu membuktikan ketelusan proses reka bentuk secara berintegriti."
      }
    ]
  },

  steps: [
    {
      number: 1,
      title: "Guna AI untuk Beberapa Konsep Sahaja",
      description: "Jana 3 hingga 5 draf konsep visual sebagai inspirasi awal dan perbincangan meja bulat, bukan mengambil bulat-bulat 1 output mentah.",
      details: "Gunakan arahan prompt yang memperincikan falsafah sekolah (contoh: obor ilmu, buku terbuka, warna rasmi sekolah) tanpa meniru jenama lain.",
      tips: [
        "Elak gunakan nama sekolah lain dalam prompt",
        "Eksperimen dengan pelbagai gaya rekaan heraldik/moden",
        "Jadikan output sebagai papan mood (mood board)"
      ]
    },
    {
      number: 2,
      title: "Pereka Melukis Semula Sebagai Vektor",
      description: "Pereka grafik manusia melukis semula setiap garisan secara manual dalam perisian vektor (Adobe Illustrator, Inkscape, Affinity Designer).",
      details: "Langkah ini mencipta sentuhan pengarang manusia (human authorship) yang penting untuk tuntutan hak cipta dan menjamin ketajaman cetakan.",
      tips: [
        "Simpan dalam format master (.AI, .EPS, .SVG, .PDF)",
        "Tentukan kod warna rasmi (CMYK, RGB, kod Hex, Pantone)",
        "Perkemaskan geometri dan simetri simbol"
      ]
    },
    {
      number: 3,
      title: "Carian Cap Dagangan MyIPO & Imej Terbalik",
      description: "Buat semakan keunikan menyeluruh untuk memastikan tiada logo serupa yang telah didaftarkan terlebih dahulu.",
      details: "Gunakan sistem carian rasmi pangkalan data MyIPO IP Online Search dan buat carian Google Lens / TinEye terhadap imej logo baharu.",
      tips: [
        "Semak kelas 41, 25, dan 16 di portal MyIPO",
        "Lakukan carian fonetik bagi nama moto/slogan sekolah",
        "Ambil tangkap layar hasil carian sebagai rekod keselamatan"
      ]
    },
    {
      number: 4,
      title: "Semak Terma Alat AI, Fon dan Ikon",
      description: "Pastikan semua komponen digital yang digabungkan memiliki hak penggunaan sah untuk organisasi bukan keuntungan atau pendidikan.",
      details: "Periksa lesen perisian fon yang digunakan untuk slogan dan nama sekolah bagi mengelakkan tuntutan pelanggaran hak cipta fon.",
      tips: [
        "Gunakan fon terbuka seperti Google Fonts (SIL Open Font License)",
        "Simpan salinan invois atau terma lesen akaun AI",
        "Pastikan tiada larangan penggunaan komersial / institusi"
      ]
    },
    {
      number: 5,
      title: "Simpan Rekod Proses (Arahan, Versi, Olahan)",
      description: "Dokumentasikan diari reka bentuk dari mula hingga akhir (prompts yang ditaip, lakaran asas, draf vektor, catatan mesyuarat jawatankuasa).",
      details: "Dokumentasi ini adalah bukti kukuh di sisi undang-undang bahawa logo sekolah terhasil daripada sumbangan intelek manusia dan olahan sah.",
      tips: [
        "Cipta satu folder arkib digital bertarikh",
        "Lampirkan minit mesyuarat pemilihan logo oleh pentadbir",
        "Sediakan 'Design Dossier' ringkas untuk simpanan arkib sekolah"
      ]
    },
    {
      number: 6,
      title: "Mohon Pendaftaran Cap Dagangan di MyIPO",
      description: "Daftarkan logo rasmi sekolah sebagai Cap Dagangan di bawah Akta Cap Dagangan 2019 melalui portal rasmi MyIPO.",
      details: "Pendaftaran ini memberikan hak eksklusif di bawah undang-undang kepada sekolah untuk menghalang pihak ketiga meniru atau menjual cenderahati tidak sah.",
      tips: [
        "Daftarkan sekurang-kurangnya Kelas 41 (Pendidikan) dan Kelas 25 (Pakaian Seragam)",
        "Sediakan permohonan melalui sistem IP Online MyIPO atau ejen cap dagangan",
        "Perlindungan cap dagangan sah selama 10 tahun dan boleh diperbaharui"
      ]
    },
    {
      number: 7,
      title: "Dapatkan Kelulusan Sekolah dan KPM / JPN",
      description: "Dapatkan kelulusan rasmi daripada Lembaga Pengelola Sekolah, Persatuan Ibu Bapa dan Guru (PIBG), serta Jabatan Pendidikan Negeri jika berkaitan.",
      details: "Bagi sekolah kerajaan dan bantuan kerajaan, sebarang pertukaran identiti atau lencana sekolah tertakluk kepada garis panduan dan surat pekeliling KPM yang berkuat kuasa.",
      tips: [
        "Bentangkan dalam Mesyuarat Agung PIBG dan Mesyuarat Pengurusan Sekolah",
        "Kemukakan permohonan rasmi kepada PPD dan JPN jika melibatkan pindaan rasmi",
        "Gazetkan dalam buku panduan pengurusan sekolah baharu"
      ]
    }
  ] as StepItem[],

  comparisonData: [
    {
      feature: "Perlindungan Hak Cipta (Akta 1987)",
      rawAi: "Sangat Lemah / Tiada (Tiada pengarang manusia)",
      hybrid: "Kukuh (Diiktiraf melalui olahan kreatif pereka)",
      traditional: "Sangat Kukuh (Karya asal manusia 100%)"
    },
    {
      feature: "Pendaftaran Cap Dagangan MyIPO",
      rawAi: "Boleh mohon tetapi berisiko ditolak jika mirip",
      hybrid: "Tinggi & Selamat (Memenuhi kriteria keunikan)",
      traditional: "Tinggi & Selamat (Memenuhi kriteria keunikan)"
    },
    {
      feature: "Kesesuaian Cetakan & Skala (Vektor)",
      rawAi: "Gagal (Hanya fail raster JPG/PNG beresolusi rendah)",
      hybrid: "Sempurna (Fail vektor SVG/AI tajam tanpa had)",
      traditional: "Sempurna (Fail vektor SVG/AI tajam tanpa had)"
    },
    {
      feature: "Masa & Kos Penjanaan Konsep",
      rawAi: "Pantas & Sangat Murah (Beberapa saat)",
      hybrid: "Seimbang (Pantas untuk draf, teliti untuk vektor)",
      traditional: "Memerlukan masa lebih panjang & kos lebih tinggi"
    },
    {
      feature: "Risiko Tuntutan Mahkamah / Saman",
      rawAi: "Tinggi (Boleh menyerupai karya berhak cipta lain)",
      hybrid: "Rendah (Telah ditapis & dibuat semakan carian)",
      traditional: "Sangat Rendah (Rekaan asli sepenuhnya)"
    }
  ]
};

// Knowledge base specifically crafted for the Free Client-Side AI Chatbot
export const CHATBOT_KNOWLEDGE_BASE = [
  {
    triggers: ["sesuaikah", "sesuai", "guna ai", "boleh ke guna", "patut ke guna"],
    answer: `**Kesesuaian Penggunaan AI untuk Logo Sekolah:**
- **Sesuai sebagai alat bantu**: Sangat bagus untuk menjana konsep, idea pantas, mood board dan palet warna pada fasa awal.
- **TIDAK sesuai jika digunakan mentah-mentah (raw output)**:
  1. Berisiko tinggi mirip logo sedia ada tanpa disedari.
  2. Sukar dilindungi di bawah undang-undang dan tiada keunikan eksklusif.
  3. Format gambar raster (PNG/JPG) tidak berkualiti untuk cetakan lencana sulam, bendera, atau papan tanda sekolah.

👉 **Syor Kumpulan 4**: Gunakan pendekatan **Hibrid** — jana idea melalui AI, kemudian lantik pereka manusia melukis semula dalam format vektor.`
  },
  {
    triggers: ["myipo", "daftar", "pendaftaran", "boleh daftar", "cap dagangan", "trademark", "akta 2019"],
    answer: `**Pendaftaran Cap Dagangan di MyIPO (Akta Cap Dagangan 2019):**
Ya, undang-undang menilai **TANDA (logo)** itu sendiri, bukan siapa atau apa yang menjananya!

Namun, untuk diluluskan MyIPO, logo mesti memenuhi 4 syarat utama:
1. **Tersendiri (Distinctive)** — bukan bentuk asas/generik.
2. **Tidak Mengelirukan** — tidak serupa dengan tanda berdaftar lain.
3. **Bukan Lambang Dilarang** — tidak menggunakan Jata Negara, jata negeri, atau lambang diraja tanpa izin Agong/Kerajaan.
4. **Tidak Menyinggung** — bebas unsur sensitif atau melanggar moraliti.

📌 **3 Kelas Penting untuk Sekolah:**
- **Kelas 41**: Pendidikan & Sijil
- **Kelas 25**: Pakaian Seragam & Baju Sukan
- **Kelas 16**: Buku Tulis & Alat Tulis`
  },
  {
    triggers: ["hak cipta", "akta 1987", "copyright", "pengarang manusia", "human authorship"],
    answer: `**Isu Hak Cipta di bawah Akta Hak Cipta 1987:**
1. **Prinsip Pengarang Manusia**: Akta Hak Cipta Malaysia mengaitkan perlindungan hak cipta dengan ciptaan manusia (*human author*). Output AI tulen tanpa olahan manusia mungkin tidak mendapat perlindungan hak cipta automatik.
2. **Sumbangan Pereka**: Jika pereka manusia mengubahsuai, melukis semula vektor, dan menambah elemen kreatif sendiri, karya tersebut lebih mudah dipertahankan sebagai karya berhak cipta.
3. **Undang-undang Belum Jelas**: Setakat ini tiada undang-undang khusus atau kes mahkamah di Malaysia berkaitan hak cipta seni AI. Oleh itu, langkah keselamatan amat dituntut!`
  },
  {
    triggers: ["risiko", "bahaya", "apa risiko", "saman", "masalah"],
    answer: `**6 Risiko Utama Logo Sekolah Dijana AI:**
1. **Persamaan Tidak Sengaja**: AI boleh tiru lambang sedia ada tanpa sengaja. Sekolah yang guna menanggung liabiliti.
2. **Terma Alat AI**: Sesetengah pelan percuma melarang penggunaan komersial atau tidak memberi hak milik penuh.
3. **Tiada Keeksklusifan**: Pengguna lain boleh dapat imej serupa guna prompt yang sama.
4. **Fail Raster**: Gambar beresolusi rendah, pecah bila dicetak pada papan tanda atau lencana.
5. **Sensitiviti Budaya**: Simbol, kaligrafi jawi atau motif etnik mungkin salah atau janggal.
6. **Data Latihan AI**: Risiko model AI yang disaman artis di mahkamah antarabangsa.`
  },
  {
    triggers: ["atribusi", "kredit", "perlukah atribusi", "credit ai", "kena sebut ai"],
    answer: `**Adakah Perlu Meletakkan Atribusi (Kredit AI)?**
- **Undang-undang Malaysia**: Akta Hak Cipta 1987 **TIDAK mewajibkan** atribusi untuk output AI.
- **Tetapi sila perhatikan 3 perkara**:
  1. *Terma Platform AI*: Sesetengah pelan percuma meletakkan syarat menyebut kredit jika digunakan secara umum.
  2. *Lesen Fon & Ikon*: Jika pereka guna fon luaran (Google Fonts/komersial), semak syarat lesen fon tersebut.
  3. *Ketelusan & Integriti*: Dokumentasikan proses dan bersikap telus jika disoal oleh pentadbir atau MyIPO.`
  },
  {
    triggers: ["langkah", "cara", "proses", "workflow", "buat macam mana", "garis panduan"],
    answer: `**7 Langkah Garis Panduan Praktikal Logo Sekolah (Kumpulan 4):**
1. Guna AI untuk 3-5 konsep sahaja (inspirasi).
2. Pereka melukis semula dalam format vektor (.SVG / .AI).
3. Buat carian pangkalan data MyIPO dan carian imej terbalik (Google Lens).
4. Semak terma akaun AI, lesen fon dan ikon.
5. Simpan arkib rekod proses (prompt, lakaran, versi rekaan).
6. Mohon pendaftaran Cap Dagangan di MyIPO (Kelas 41, 25, 16).
7. Dapatkan kelulusan pentadbir sekolah, PIBG dan KPM/JPN.`
  },
  {
    triggers: ["kumpulan 4", "siapa cipta", "tentang", "pencipta"],
    answer: `**Mengenai Kumpulan 4:**
Aplikasi interaktif ini dibangunkan oleh **Kumpulan 4** sebagai inisiatif pendidikan dan kesedaran harta intelek di Malaysia. 

Tujuannya adalah membantu komuniti pendidik, pentadbir sekolah, alumni, dan pereka grafik memahami implikasi undang-undang Akta Hak Cipta 1987 dan Akta Cap Dagangan 2019 berkaitan karya janaan kecerdasan buatan (AI).`
  },
  {
    triggers: ["kelas", "kelas 41", "kelas 25", "kelas 16", "klasifikasi"],
    answer: `**3 Kelas Cap Dagangan Utama untuk Sekolah:**
- **Kelas 41 (Pendidikan & Sijil)**: Melindungi identiti sekolah dalam perkhidmatan pengajaran, kursus, kokurikulum, sijil penghargaan, dan penganjuran sukan.
- **Kelas 25 (Pakaian Seragam)**: Melindungi logo pada lencana sulam baju sekolah, kemeja, tali leher, baju PJ, dan jersi sukan.
- **Kelas 16 (Buku & Alat Tulis)**: Melindungi logo pada buku latihan sekolah, kertas ujian berlogo, kepala surat rasmi (*letterhead*), dan risalah PIBG.`
  },
  {
    triggers: ["vektor", "raster", "resolusi", "svg", "png", "ai file"],
    answer: `**Kenapa Format Vektor Sangat Penting?**
- Fail janaan AI (raster PNG/JPG) tersusun daripada piksel statik. Apabila dibesarkan untuk banner gerbang sekolah atau mesin sulam lencana, ia akan menjadi kabur dan pecah (*pixelated*).
- Fail vektor (SVG/AI/EPS) dibina berasaskan matematik garisan. Ia boleh dibesarkan ke saiz bangunan sekalipun dengan ketajaman 100% sempurna serta boleh dieksport ke kod warna CMYK/Pantone untuk kilang cetakan!`
  },
  {
    triggers: ["perjanjian", "surat", "borang", "serah hak", "assignment of rights"],
    answer: `**Perjanjian Pemilikan Dalaman (Deed of Assignment):**
Jika logo direka oleh pereka luar, bekas pelajar (alumni), atau guru, sekolah disarankan menandatangani **Surat Perjanjian Penyerahan Hak Cipta (Deed of Assignment of Copyright)**.

Perjanjian ini menyatakan dengan jelas bahawa segala hak cipta dan pemilikan komersial logo dipindahkan secara mutlak kepada pihak sekolah bagi mengelakkan pertikaian hak milik sekiranya individu tersebut meninggalkan sekolah.`
  }
];
