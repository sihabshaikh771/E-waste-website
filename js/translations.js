const TRANSLATIONS = {
  en: {
    // NAV
    nav_home: "Home",
    nav_problem: "Problem",
    nav_solution: "Solution",
    nav_centers: "Centers",
    nav_awareness: "Awareness",
    nav_report: "Report",
    nav_pickup: "Pickup",
    nav_rewards: "Rewards",
    nav_cta: "Book Pickup",

    // HERO
    hero_eyebrow: "Solapur's First Smart E-Waste Platform",
    hero_h1_1: "Dispose",
    hero_h1_em: "E-Waste",
    hero_h1_2: "The Right Way",
    hero_p: "A digital platform connecting Solapur citizens with certified e-waste collection centers, doorstep pickup, and real-time illegal dumping reporting — making responsible disposal effortless.",
    hero_btn1: "Find Centers Near You",
    hero_btn2: "Learn About E-Waste",
    hstat1_n: "50L+",
    hstat1_l: "Solapur Population",
    hstat2_n: "2MT",
    hstat2_l: "India's E-Waste/Year",
    hstat3_n: "12+",
    hstat3_l: "Toxic Chemicals",
    hstat4_n: "0",
    hstat4_l: "Apps Before This",

    // PROBLEM
    prob_tag: "The Problem",
    prob_h2_1: "Why E-Waste is a",
    prob_h2_em: "Crisis",
    prob_h2_2: "in Solapur",
    prob_desc: "Solapur generates thousands of tonnes of electronic waste annually with no structured digital system for safe disposal.",
    prob1_title: "No Digital Disposal System",
    prob1_text: "Citizens have no easy way to find certified collection centers, schedule pickups, or learn about safe disposal methods in Solapur.",
    prob1_badge: "Critical Gap",
    prob2_title: "Toxic Chemical Contamination",
    prob2_text: "Improper disposal of phones, laptops & batteries releases lead, mercury, and cadmium — poisoning soil, groundwater & causing serious health hazards.",
    prob2_badge: "Health Risk",
    prob3_title: "Illegal Dumping Rampant",
    prob3_text: "E-waste is dumped in open areas, lakes, and landfills across Solapur without any monitoring or enforcement mechanism to track and act on violations.",
    prob3_badge: "Environmental Damage",
    prob4_title: "Zero Public Awareness",
    prob4_text: "Most citizens don't know what qualifies as e-waste, how to dispose of it properly, or that improper disposal is illegal under India's E-Waste Management Rules 2016.",
    prob4_badge: "Awareness Gap",

    // SOLUTION
    sol_tag: "Our Solution",
    sol_h2_1: "One Platform.",
    sol_h2_em: "Complete",
    sol_h2_2: "Solution.",
    sol_desc: "EcoSolapur combines location-based services, citizen education, doorstep pickup, and community reporting into one seamless digital experience.",
    feat1_title: "Find Nearby Centers",
    feat1_p: "GPS-powered map shows all certified e-waste collection centers near you in real-time",
    feat2_title: "Book Doorstep Pickup",
    feat2_p: "Schedule a free pickup at your home or office — we come to you at your preferred time slot",
    feat3_title: "Report Illegal Dumping",
    feat3_p: "Spot illegal e-waste dumping? Report it with a photo and location — authorities are notified instantly",
    feat4_title: "Earn Reward Points",
    feat4_p: "Get points for every kg disposed. Redeem for mobile recharges, coupons, and local offers",
    feat5_title: "Track Your Impact",
    feat5_p: "See exactly how much CO₂ you've saved, how many devices diverted from landfill, and your city rank",
    mock_title: "EcoSolapur",
    mock_live: "Live",
    mock_centers: "3 centers nearby",
    mock_center_name: "MPCB Collection Center",
    mock_center_dist: "1.2 km away · Open Now",
    mock_pts_label: "Your Points",
    mock_btn: "Book Pickup →",

    // HOW IT WORKS
    how_tag: "How It Works",
    how_h2_1: "Simple.",
    how_h2_em: "7 Steps",
    how_h2_2: "to Responsible Disposal.",
    step1_h: "Open App",     step1_p: "Register & create profile",
    step2_h: "Detect Location", step2_p: "GPS auto-detects your area",
    step3_h: "See Centers",  step3_p: "Map of nearby drop points",
    step4_h: "Book Pickup",  step4_p: "Choose time & date slot",
    step5_h: "Waste Collected", step5_p: "Handed to certified recyclers",
    step6_h: "Earn Points",  step6_p: "Rewards added to wallet",
    step7_h: "Track Impact", step7_p: "See your eco contribution",

    // CENTERS
    cen_tag: "Collection Centers",
    cen_h2_1: "E-Waste Centers",
    cen_h2_em: "in Solapur",
    cen_desc: "Find certified collection centers near you. All centers are registered under India's E-Waste Management Rules 2016.",
    c1_name: "MPCB Authorized Center",
    c1_addr: "Mangalwar Peth, Near Solapur Municipal Corporation, Solapur – 413001",
    c1_hours: "Mon–Sat 9am–6pm",
    c2_name: "GreenTech Recyclers Pvt. Ltd.",
    c2_addr: "Industrial Area, Hotgi Road, Near MIDC Gate, Solapur – 413224",
    c2_hours: "Mon–Fri 8am–5pm",
    c3_name: "Swachh Bharat E-Point",
    c3_addr: "Station Road, Near Solapur Railway Station, Solapur – 413001",
    c3_hours: "All Days 8am–8pm",
    c4_name: "Eco Disposal Hub — North",
    c4_addr: "Akkalkot Road, Vijapur Colony, North Solapur – 413008",
    c4_hours: "Closed · Opens Mon 9am",
    c5_name: "Shivaji University E-Cell",
    c5_addr: "Vidyanagar Campus, Near Main Gate, Solapur University Rd – 413255",
    c5_hours: "Mon–Sat 10am–5pm",
    c6_name: "South Solapur Community Drop",
    c6_addr: "Pune-Solapur Highway, Near Kamgar Chowk, South Solapur – 413002",
    c6_hours: "All Days 7am–9pm",
    btn_directions: "Get Directions",
    btn_book: "Book Pickup",
    open_text: "Open",
    closed_text: "Closed",

    // AWARENESS
    aware_tag: "Awareness Hub",
    aware_h2_1: "Know Your",
    aware_h2_em: "E-Waste",
    aware_desc: "Education is the first step. Learn what e-waste is, why it's dangerous, and how you can make a difference.",
    aw1_title: "Toxic Chemicals in E-Waste",
    aw1_p: "Electronic devices contain hazardous materials that leach into soil and water when improperly disposed.",
    aw2_title: "What Counts as E-Waste?",
    aw2_p: "Any electronic device at end-of-life is e-waste. Here's what you should never throw in regular trash:",
    aw2_items: ["Mobile phones, tablets, laptops","Televisions, monitors, printers","Washing machines, ACs, refrigerators","Batteries (all types), chargers, cables","Cameras, calculators, keyboards","Light bulbs (CFL, LED), circuit boards"],
    aw3_title: "India's E-Waste Law",
    aw3_p: "India has strict regulations — illegal disposal can result in heavy fines and penalties.",
    aw3_items: ["E-Waste Management Rules 2016 (amended 2022)","Producers must have take-back programs","Citizens can face fines for illegal dumping","Certified dismantlers only can process e-waste","CPCB monitors compliance nationwide"],
    aw4_title: "Health Impacts on Citizens",
    aw4_p: "Exposure to e-waste toxins — especially from burning electronics — causes severe health damage:",
    aw4_items: ["Neurological damage from lead exposure","Kidney and lung disease from cadmium","Cancer risk from arsenic and beryllium","Endocrine disruption from flame retardants","Children most vulnerable to toxic effects"],
    aw5_title: "Environmental Damage",
    aw5_p: "Improper e-waste disposal harms Solapur's ecosystem at multiple levels:",
    aw5_items: ["Soil contamination from heavy metals","Groundwater poisoning near dump sites","Air pollution from burning plastic casings","Food chain contamination through crops","Sijaganj lake area at high risk"],
    aw6_title: "Do's & Don'ts",
    aw6_do: "DO:",
    aw6_do_items: ["Use certified collection centers only","Wipe personal data before disposal","Keep original packaging when returning"],
    aw6_dont: "DON'T:",
    aw6_dont_items: ["Never throw in regular dustbin","Don't burn or break open batteries","Don't sell to informal kabadiwalla"],

    // REPORT
    rep_tag: "Report Illegal Dumping",
    rep_h2_1: "See It?",
    rep_h2_em: "Report It.",
    rep_desc: "Spotted illegal e-waste dumping in Solapur? Report it here and help authorities take action within 48 hours.",
    rep_form_title: "Submit a Report",
    rep_loc_label: "Location of Dumping",
    rep_loc_ph: "e.g. Near Saat Rasta, Mangalwar Peth",
    rep_area_label: "Area / Landmark",
    rep_area_opts: ["Select area...","Mangalwar Peth","Hotgi Road / MIDC","Station Road","Akkalkot Road","Vijay Nagar","Bhuinj / Rural Solapur","Other"],
    rep_type_label: "Type of E-Waste",
    rep_type_ph: "e.g. Old TVs, wires, batteries...",
    rep_sev_label: "Severity Level",
    rep_low: "Low", rep_med: "Medium", rep_high: "High",
    rep_detail_label: "Additional Details",
    rep_detail_ph: "Describe the situation — size of dump, any hazards visible, access route...",
    rep_name_label: "Your Name (Optional)",
    rep_name_ph: "Anonymous by default",
    rep_submit: "Submit Report to Authorities →",
    rep_recent_title: "Recent Community Reports",
    rep_what_title: "What Happens After You Report?",
    rep_step1_h: "Verification", rep_step1_p: "Our team verifies the report within 6 hours using satellite imagery & citizen data",
    rep_step2_h: "Authority Alert", rep_step2_p: "Solapur Municipal Corporation & MPCB are notified immediately",
    rep_step3_h: "Cleanup Action", rep_step3_p: "Certified team dispatched within 48 hours to collect and safely dispose the waste",
    tag_pending: "Pending", tag_resolved: "Resolved", tag_urgent: "Urgent",

    // REWARDS
    rew_tag: "Rewards Program",
    rew_h2_1: "Dispose Responsibly,",
    rew_h2_em: "Earn Rewards",
    rew_desc: "Every kilogram of e-waste you dispose through EcoSolapur earns you points redeemable for real benefits.",
    rew1_pts: "50", rew1_ptslabel: "points per kg disposed", rew1_title: "Eco Starter",
    rew1_perks: ["Mobile recharge vouchers","Local café discounts","Community leaderboard","Impact certificate"],
    rew2_pts: "200", rew2_ptslabel: "bonus for first pickup booking", rew2_title: "Green Champion",
    rew2_perks: ["₹100 Flipkart/Amazon voucher","Free priority pickup service","City newspaper feature","NGO partnership certificate","School awareness badge"],
    rew3_pts: "500", rew3_ptslabel: "monthly top disposer bonus", rew3_title: "EcoHero",
    rew3_perks: ["₹500 cashback reward","Municipal Corporation award","EcoSolapur Hall of Fame","Annual sustainability report credit"],
    btn_get_started: "Get Started",
    btn_unlock: "Unlock Now",
    btn_aim: "Aim for This",

    // SDG
    sdg_tag: "Sustainability Goals",
    sdg_h2_1: "Aligned with",
    sdg_h2_em: "SDGs & Green",
    sdg_h2_2: "Chemistry",
    sdg_desc: "EcoSolapur is designed around United Nations Sustainable Development Goals and Green Chemistry Principles.",
    sdg1_title: "Responsible Consumption", sdg1_p: "Promotes sustainable disposal patterns, reduces waste to landfill, and creates circular economy for electronic materials in Solapur.",
    sdg2_title: "Sustainable Cities", sdg2_p: "Helps Solapur become a smart, clean, and environmentally responsible city through digital waste infrastructure.",
    sdg3_title: "Good Health & Well-being", sdg3_p: "Prevents toxic heavy metal exposure to citizens, especially children and waste workers in informal sectors.",
    gcp_title: "Green Chemistry Principles Applied",
    gcp_h1: "Principle", gcp_h2: "How EcoSolapur Applies It", gcp_h3: "Impact",
    gcp_rows: [
      ["Waste Prevention","Platform actively reduces illegal dumping via reporting & collection","↓ Landfill waste"],
      ["Safer Disposal","Channels all e-waste to certified recyclers who use safe dismantling","↓ Toxic exposure"],
      ["Reduce Toxicity","Prevents hazardous materials from entering soil & water systems","↓ Contamination"],
      ["Energy Efficiency","Digital-first platform eliminates paper-based systems, optimizes routes","↓ Carbon footprint"],
      ["Env. Protection","Safeguards Solapur's water bodies, farmland & urban green spaces","↓ Ecosystem damage"],
    ],

    // PICKUP
    pu_tag: "Book a Pickup",
    pu_h2_1: "We Come to",
    pu_h2_em: "Your Doorstep",
    pu_desc: "Schedule a free doorstep pickup for your e-waste anywhere in Solapur. Our certified agents will collect, verify, and safely transport your devices.",
    pu_form_title: "Schedule Pickup",
    pu_addr_label: "Full Address",
    pu_addr_ph: "House no., Street, Area, Solapur",
    pu_type_label: "Select E-Waste Type(s)",
    etype_btns: ["📱 Phones & Tablets","💻 Laptops & PCs","📺 TVs & Monitors","🔋 Batteries","❄ Appliances","🖨 Printers"],
    pu_date_label: "Preferred Date",
    pu_slot_label: "Preferred Time Slot",
    pu_slots: ["Morning (9am – 12pm)","Afternoon (12pm – 3pm)","Evening (3pm – 6pm)"],
    pu_phone_label: "Contact Number",
    pu_phone_ph: "+91 98XXXXXXXX",
    pu_submit: "Book Free Pickup →",
    pu_what_title: "What Happens at Pickup?",
    pu_s1_h: "Confirmation SMS", pu_s1_p: "You receive SMS + WhatsApp confirmation within 1 hour of booking",
    pu_s2_h: "Agent Arrival", pu_s2_p: "Our certified agent arrives at your address in the selected time slot",
    pu_s3_h: "Weighing & Verification", pu_s3_p: "E-waste is weighed and categorized on-site. Receipt issued to you.",
    pu_s4_h: "Rewards Credited", pu_s4_p: "Points are automatically credited to your EcoSolapur wallet within 2 hours",
    pu_free_title: "Pickup is 100% FREE",
    pu_free_p: "No charges for doorstep collection anywhere in Solapur. We earn through recycler partnerships so citizens always get free service. Data on your devices is securely wiped before processing.",

    // FOOTER
    foot_tagline: "Solapur's first digital e-waste management platform — making responsible disposal effortless for every citizen.",
    foot_mpcb: "MPCB Registered",
    foot_platform: "Platform",
    foot_solution: "Our Solution",
    foot_centers: "Collection Centers",
    foot_pickup: "Book Pickup",
    foot_rewards: "Rewards",
    foot_report: "Report Dumping",
    foot_learn: "Learn",
    foot_what: "What is E-Waste?",
    foot_health: "Health Hazards",
    foot_laws: "India's E-Waste Laws",
    foot_gcp: "Green Chemistry",
    foot_sdg: "SDG Goals",
    foot_contact: "Contact",
    foot_copy: "© 2026 EcoSolapur. Built for AS-1201 Course Project (PFA).",
    foot_ref: "References: E-Waste Management Rules India 2016 · CPCB Reports · SDG Framework",

    // MODAL & TOAST
    modal_title: "Book Doorstep Pickup",
    modal_p: "Enter your details below and our team will contact you within 2 hours to confirm your free pickup slot.",
    modal_name_label: "Your Name", modal_name_ph: "Full name",
    modal_phone_label: "Phone Number", modal_phone_ph: "+91 98XXXXXXXX",
    modal_addr_label: "Address", modal_addr_ph: "Area, Solapur",
    modal_btn: "Confirm Pickup Request →",
    toast_pickup_booked: "Pickup booked! You'll receive a confirmation SMS shortly.",
    toast_directions: "Directions opened in Maps!",
    toast_report_ok: "Report submitted! Authorities notified within 6 hours.",
    toast_pickup_scheduled: "Pickup scheduled! Confirmation SMS on its way.",
    toast_enter_loc: "Please enter the dump location first.",
    toast_enter_date: "Please select a pickup date.",
  },

  mr: {
    // NAV
    nav_home: "मुखपृष्ठ",
    nav_problem: "समस्या",
    nav_solution: "उपाय",
    nav_centers: "केंद्रे",
    nav_awareness: "जागरूकता",
    nav_report: "तक्रार",
    nav_pickup: "पिकअप",
    nav_rewards: "बक्षीस",
    nav_cta: "पिकअप बुक करा",

    // HERO
    hero_eyebrow: "सोलापूरचे पहिले स्मार्ट ई-कचरा व्यासपीठ",
    hero_h1_1: "योग्य प्रकारे",
    hero_h1_em: "ई-कचरा",
    hero_h1_2: "विल्हेवाट लावा",
    hero_p: "एक डिजिटल व्यासपीठ जे सोलापूरच्या नागरिकांना प्रमाणित ई-कचरा संकलन केंद्रांशी, घरपोच पिकअपशी आणि बेकायदेशीर टाकाऊ कचऱ्याच्या रिअल-टाइम तक्रारीशी जोडते — जबाबदार विल्हेवाट सहज करते.",
    hero_btn1: "जवळचे केंद्र शोधा",
    hero_btn2: "ई-कचऱ्याबद्दल जाणून घ्या",
    hstat1_n: "५०L+",
    hstat1_l: "सोलापूर लोकसंख्या",
    hstat2_n: "२MT",
    hstat2_l: "भारताचा ई-कचरा/वर्ष",
    hstat3_n: "१२+",
    hstat3_l: "विषारी रसायने",
    hstat4_n: "०",
    hstat4_l: "आधी कोणते अॅप नव्हते",

    // PROBLEM
    prob_tag: "समस्या",
    prob_h2_1: "सोलापुरात ई-कचरा हे",
    prob_h2_em: "संकट",
    prob_h2_2: "का आहे",
    prob_desc: "सोलापूर दरवर्षी हजारो टन इलेक्ट्रॉनिक कचरा निर्माण करतो पण सुरक्षित विल्हेवाटीसाठी कोणतीही डिजिटल प्रणाली नाही.",
    prob1_title: "डिजिटल विल्हेवाट प्रणाली नाही",
    prob1_text: "नागरिकांना प्रमाणित संकलन केंद्रे शोधणे, पिकअप शेड्यूल करणे किंवा सुरक्षित विल्हेवाटीच्या पद्धती जाणून घेणे कठीण आहे.",
    prob1_badge: "गंभीर कमतरता",
    prob2_title: "विषारी रसायने दूषित करतात",
    prob2_text: "फोन, लॅपटॉप व बॅटरीजची अयोग्य विल्हेवाट शिसे, पारा आणि कॅडमियम सोडते — माती, भूजल दूषित करते व आरोग्यास धोका निर्माण करते.",
    prob2_badge: "आरोग्य धोका",
    prob3_title: "बेकायदेशीर टाकाऊ कचरा",
    prob3_text: "सोलापूरभर खुल्या जागा, तलाव आणि लँडफिल्समध्ये ई-कचरा टाकला जातो, कोणत्याही देखरेख किंवा अंमलबजावणीशिवाय.",
    prob3_badge: "पर्यावरण हानी",
    prob4_title: "सार्वजनिक जागरूकता नाही",
    prob4_text: "बहुतेक नागरिकांना ई-कचरा म्हणजे काय, तो कसा विल्हेवाट लावायचा, किंवा अयोग्य विल्हेवाट बेकायदेशीर आहे हे माहित नाही.",
    prob4_badge: "जागरूकता कमी",

    // SOLUTION
    sol_tag: "आमचा उपाय",
    sol_h2_1: "एक व्यासपीठ.",
    sol_h2_em: "संपूर्ण",
    sol_h2_2: "उपाय.",
    sol_desc: "EcoSolapur स्थान-आधारित सेवा, नागरिक शिक्षण, घरपोच पिकअप आणि समुदाय तक्रार एकत्र करते.",
    feat1_title: "जवळचे केंद्र शोधा",
    feat1_p: "GPS-आधारित नकाशा तुमच्या जवळील सर्व प्रमाणित ई-कचरा संकलन केंद्रे रिअल-टाइममध्ये दाखवतो",
    feat2_title: "घरपोच पिकअप बुक करा",
    feat2_p: "तुमच्या घरी किंवा कार्यालयात मोफत पिकअप शेड्यूल करा — आम्ही तुमच्या पसंतीच्या वेळी येतो",
    feat3_title: "बेकायदेशीर टाकाऊ कचरा तक्रार करा",
    feat3_p: "बेकायदेशीर ई-कचरा टाकाऊ दिसला? फोटो व स्थानासह तक्रार करा — अधिकाऱ्यांना तत्काळ सूचित केले जाते",
    feat4_title: "बक्षीस गुण मिळवा",
    feat4_p: "प्रत्येक किलो विल्हेवाटीसाठी गुण मिळवा. मोबाइल रिचार्ज, कूपन आणि स्थानिक ऑफरसाठी रिडीम करा",
    feat5_title: "तुमचा प्रभाव ट्रॅक करा",
    feat5_p: "तुम्ही किती CO₂ वाचवले, किती उपकरणे लँडफिलपासून वाचवली आणि शहरातील तुमचा क्रमांक पाहा",
    mock_title: "EcoSolapur",
    mock_live: "थेट",
    mock_centers: "३ केंद्रे जवळपास",
    mock_center_name: "MPCB संकलन केंद्र",
    mock_center_dist: "१.२ किमी दूर · उघडे आहे",
    mock_pts_label: "तुमचे गुण",
    mock_btn: "पिकअप बुक करा →",

    // HOW IT WORKS
    how_tag: "हे कसे कार्य करते",
    how_h2_1: "सोपे.",
    how_h2_em: "७ पायऱ्या",
    how_h2_2: "जबाबदार विल्हेवाटीसाठी.",
    step1_h: "अॅप उघडा",     step1_p: "नोंदणी करा व प्रोफाइल तयार करा",
    step2_h: "स्थान शोधा",   step2_p: "GPS आपोआप तुमचे क्षेत्र ओळखते",
    step3_h: "केंद्रे पाहा", step3_p: "जवळील ड्रॉप पॉइंट्सचा नकाशा",
    step4_h: "पिकअप बुक करा",step4_p: "वेळ व तारीख निवडा",
    step5_h: "कचरा गोळा केला",step5_p: "प्रमाणित पुनर्वापरकर्त्यांना दिला",
    step6_h: "गुण मिळवा",   step6_p: "बक्षीस वॉलेटमध्ये जमा",
    step7_h: "प्रभाव ट्रॅक करा", step7_p: "तुमचे पर्यावरण योगदान पाहा",

    // CENTERS
    cen_tag: "संकलन केंद्रे",
    cen_h2_1: "ई-कचरा केंद्रे",
    cen_h2_em: "सोलापूरमध्ये",
    cen_desc: "जवळचे प्रमाणित संकलन केंद्र शोधा. सर्व केंद्रे भारताच्या ई-कचरा व्यवस्थापन नियम २०१६ अंतर्गत नोंदणीकृत आहेत.",
    c1_name: "MPCB अधिकृत केंद्र",
    c1_addr: "मंगळवार पेठ, सोलापूर महानगरपालिकेजवळ, सोलापूर – ४१३००१",
    c1_hours: "सोम–शनि सकाळी ९ – संध्या ६",
    c2_name: "GreenTech Recyclers Pvt. Ltd.",
    c2_addr: "औद्योगिक क्षेत्र, होटगी रोड, MIDC गेटजवळ, सोलापूर – ४१३२२४",
    c2_hours: "सोम–शुक्र सकाळी ८ – दुपारी ५",
    c3_name: "स्वच्छ भारत ई-पॉइंट",
    c3_addr: "स्टेशन रोड, सोलापूर रेल्वे स्थानकजवळ, सोलापूर – ४१३००१",
    c3_hours: "सर्व दिवस सकाळी ८ – रात्री ८",
    c4_name: "Eco Disposal Hub — उत्तर",
    c4_addr: "अक्कलकोट रोड, विजयपूर कॉलनी, उत्तर सोलापूर – ४१३००८",
    c4_hours: "बंद · सोमवारी सकाळी ९ ला उघडते",
    c5_name: "शिवाजी विद्यापीठ ई-सेल",
    c5_addr: "विद्यानगर कॅम्पस, मुख्य गेटजवळ, सोलापूर विद्यापीठ रोड – ४१३२५५",
    c5_hours: "सोम–शनि सकाळी १० – दुपारी ५",
    c6_name: "दक्षिण सोलापूर सामुदायिक ड्रॉप",
    c6_addr: "पुणे-सोलापूर महामार्ग, कामगार चौकजवळ, दक्षिण सोलापूर – ४१३००२",
    c6_hours: "सर्व दिवस सकाळी ७ – रात्री ९",
    btn_directions: "दिशा मिळवा",
    btn_book: "पिकअप बुक करा",
    open_text: "उघडे",
    closed_text: "बंद",

    // AWARENESS
    aware_tag: "जागरूकता केंद्र",
    aware_h2_1: "तुमचा",
    aware_h2_em: "ई-कचरा",
    aware_desc: "शिक्षण हे पहिले पाऊल आहे. ई-कचरा म्हणजे काय, तो का धोकादायक आहे ते जाणून घ्या.",
    aw1_title: "ई-कचऱ्यातील विषारी रसायने",
    aw1_p: "इलेक्ट्रॉनिक उपकरणांमध्ये धोकादायक पदार्थ असतात जे अयोग्य विल्हेवाटीने माती व पाण्यात मिसळतात.",
    aw2_title: "ई-कचरा काय आहे?",
    aw2_p: "आयुष्य संपलेले कोणतेही इलेक्ट्रॉनिक उपकरण ई-कचरा आहे. हे कधीही नियमित कचऱ्यात टाकू नका:",
    aw2_items: ["मोबाइल फोन, टॅबलेट, लॅपटॉप","टेलिव्हिजन, मॉनिटर, प्रिंटर","वॉशिंग मशीन, AC, रेफ्रिजरेटर","सर्व प्रकारच्या बॅटरी, चार्जर, केबल","कॅमेरे, कॅल्क्युलेटर, कीबोर्ड","CFL, LED दिवे, सर्किट बोर्ड"],
    aw3_title: "भारताचा ई-कचरा कायदा",
    aw3_p: "भारतात कठोर नियम आहेत — बेकायदेशीर विल्हेवाटीवर मोठा दंड होऊ शकतो.",
    aw3_items: ["ई-कचरा व्यवस्थापन नियम २०१६ (सुधारित २०२२)","उत्पादकांनी परत घेण्याचे कार्यक्रम असणे आवश्यक","नागरिकांना बेकायदेशीर टाकाऊसाठी दंड होऊ शकतो","केवळ प्रमाणित विघटक ई-कचरा प्रक्रिया करू शकतात","CPCB देशभर अनुपालन निरीक्षण करते"],
    aw4_title: "नागरिकांवर आरोग्य परिणाम",
    aw4_p: "ई-कचरा विषारी पदार्थांच्या संपर्कामुळे — विशेषतः इलेक्ट्रॉनिक्स जाळल्यामुळे — गंभीर आरोग्य हानी होते:",
    aw4_items: ["शिशाच्या संपर्कामुळे मज्जासंस्था नुकसान","कॅडमियममुळे मूत्रपिंड व फुफ्फुसाचे आजार","आर्सेनिक व बेरिलियममुळे कर्करोगाचा धोका","ज्वाला मंदकांमुळे अंतःस्रावी व्यत्यय","मुले विषारी परिणामास सर्वात असुरक्षित"],
    aw5_title: "पर्यावरणीय नुकसान",
    aw5_p: "अयोग्य ई-कचरा विल्हेवाट सोलापूरच्या परिसंस्थेस अनेक स्तरांवर हानी पोहोचवते:",
    aw5_items: ["जड धातूंमुळे माती दूषित","डंप साइट्सजवळ भूजल विषबाधा","प्लास्टिक जाळल्यामुळे वायू प्रदूषण","पिकांद्वारे अन्न साखळी दूषण","सिजगंज तलाव परिसर उच्च जोखमीत"],
    aw6_title: "करा आणि करू नका",
    aw6_do: "करा:",
    aw6_do_items: ["केवळ प्रमाणित संकलन केंद्रे वापरा","विल्हेवाटीपूर्वी वैयक्तिक डेटा मिटवा","परत करताना मूळ पॅकेजिंग ठेवा"],
    aw6_dont: "करू नका:",
    aw6_dont_items: ["नियमित कचऱ्याच्या डब्यात टाकू नका","बॅटरी जाळू नका किंवा तोडू नका","अनौपचारिक कबाडीवाल्याला विकू नका"],

    // REPORT
    rep_tag: "बेकायदेशीर टाकाऊ तक्रार",
    rep_h2_1: "पाहिलेत?",
    rep_h2_em: "तक्रार करा.",
    rep_desc: "सोलापूरमध्ये बेकायदेशीर ई-कचरा टाकाऊ दिसला? येथे तक्रार करा आणि अधिकाऱ्यांना ४८ तासांत कारवाई करण्यास मदत करा.",
    rep_form_title: "तक्रार सादर करा",
    rep_loc_label: "टाकाऊचे स्थान",
    rep_loc_ph: "उदा. सात रस्ता, मंगळवार पेठजवळ",
    rep_area_label: "क्षेत्र / खूण",
    rep_area_opts: ["क्षेत्र निवडा...","मंगळवार पेठ","होटगी रोड / MIDC","स्टेशन रोड","अक्कलकोट रोड","विजय नगर","भुईंज / ग्रामीण सोलापूर","इतर"],
    rep_type_label: "ई-कचऱ्याचा प्रकार",
    rep_type_ph: "उदा. जुने TV, तारा, बॅटरी...",
    rep_sev_label: "गांभीर्य पातळी",
    rep_low: "कमी", rep_med: "मध्यम", rep_high: "जास्त",
    rep_detail_label: "अधिक तपशील",
    rep_detail_ph: "परिस्थिती वर्णन करा — टाकाऊचा आकार, कोणते धोके दिसतात, प्रवेश मार्ग...",
    rep_name_label: "तुमचे नाव (ऐच्छिक)",
    rep_name_ph: "डीफॉल्टनुसार अनामिक",
    rep_submit: "अधिकाऱ्यांना तक्रार सादर करा →",
    rep_recent_title: "अलीकडील समुदाय तक्रारी",
    rep_what_title: "तक्रार केल्यानंतर काय होते?",
    rep_step1_h: "पडताळणी", rep_step1_p: "आमची टीम ६ तासांत सॅटेलाइट प्रतिमा व नागरिक डेटा वापरून तक्रार पडताळते",
    rep_step2_h: "प्राधिकरण सतर्कता", rep_step2_p: "सोलापूर महानगरपालिका व MPCB ला तत्काळ सूचित केले जाते",
    rep_step3_h: "स्वच्छता कारवाई", rep_step3_p: "४८ तासांत प्रमाणित टीम पाठवली जाते",
    tag_pending: "प्रलंबित", tag_resolved: "निराकरण झाले", tag_urgent: "तातडीचे",

    // REWARDS
    rew_tag: "बक्षीस कार्यक्रम",
    rew_h2_1: "जबाबदारीने विल्हेवाट लावा,",
    rew_h2_em: "बक्षीस मिळवा",
    rew_desc: "EcoSolapur द्वारे विल्हेवाट लावलेल्या प्रत्येक किलोसाठी गुण मिळतात जे वास्तविक फायद्यांसाठी रिडीम केले जाऊ शकतात.",
    rew1_pts: "५०", rew1_ptslabel: "प्रति किलो गुण", rew1_title: "Eco Starter",
    rew1_perks: ["मोबाइल रिचार्ज व्हाउचर","स्थानिक कॅफे सवलत","समुदाय लीडरबोर्ड","प्रभाव प्रमाणपत्र"],
    rew2_pts: "२००", rew2_ptslabel: "पहिल्या पिकअप बुकिंगसाठी बोनस", rew2_title: "Green Champion",
    rew2_perks: ["₹१०० Flipkart/Amazon व्हाउचर","मोफत प्राधान्य पिकअप सेवा","शहर वृत्तपत्र वैशिष्ट्य","NGO भागीदारी प्रमाणपत्र","शाळा जागरूकता बॅज"],
    rew3_pts: "५००", rew3_ptslabel: "मासिक शीर्ष विल्हेवाट बोनस", rew3_title: "EcoHero",
    rew3_perks: ["₹५०० कॅशबॅक बक्षीस","महानगरपालिका पुरस्कार","EcoSolapur हॉल ऑफ फेम","वार्षिक टिकाऊपणा अहवाल श्रेय"],
    btn_get_started: "सुरू करा",
    btn_unlock: "आता अनलॉक करा",
    btn_aim: "हे लक्ष्य ठेवा",

    // SDG
    sdg_tag: "टिकाऊपणाची उद्दिष्टे",
    sdg_h2_1: "जुळवले",
    sdg_h2_em: "SDGs व हरित",
    sdg_h2_2: "रसायनशास्त्राशी",
    sdg_desc: "EcoSolapur संयुक्त राष्ट्रांच्या शाश्वत विकास उद्दिष्टे आणि हरित रसायनशास्त्र तत्त्वांभोवती डिझाइन केले आहे.",
    sdg1_title: "जबाबदार उपभोग", sdg1_p: "शाश्वत विल्हेवाट पद्धती प्रोत्साहित करते, लँडफिलमधील कचरा कमी करते आणि सोलापूरमध्ये इलेक्ट्रॉनिक सामग्रीसाठी चक्रीय अर्थव्यवस्था तयार करते.",
    sdg2_title: "शाश्वत शहरे", sdg2_p: "डिजिटल कचरा पायाभूत सुविधांद्वारे सोलापूरला स्मार्ट, स्वच्छ आणि पर्यावरणीयदृष्ट्या जबाबदार शहर बनवण्यास मदत करते.",
    sdg3_title: "चांगले आरोग्य व कल्याण", sdg3_p: "नागरिकांना, विशेषतः मुलांना आणि अनौपचारिक क्षेत्रातील कचरा कामगारांना विषारी जड धातूंच्या संपर्कापासून वाचवते.",
    gcp_title: "लागू केलेली हरित रसायनशास्त्र तत्त्वे",
    gcp_h1: "तत्त्व", gcp_h2: "EcoSolapur कसे लागू करते", gcp_h3: "प्रभाव",
    gcp_rows: [
      ["कचरा प्रतिबंध","व्यासपीठ तक्रारी व संकलनाद्वारे बेकायदेशीर टाकाऊ सक्रियपणे कमी करते","↓ लँडफिल कचरा"],
      ["सुरक्षित विल्हेवाट","सर्व ई-कचरा सुरक्षित विघटन वापरणाऱ्या प्रमाणित पुनर्वापरकर्त्यांकडे पाठवते","↓ विषारी संपर्क"],
      ["विषाक्तता कमी करा","धोकादायक पदार्थांना माती व जल प्रणालींमध्ये प्रवेश करण्यापासून रोखते","↓ दूषण"],
      ["ऊर्जा कार्यक्षमता","डिजिटल-प्रथम व्यासपीठ कागद-आधारित प्रणाली दूर करते, मार्ग अनुकूल करते","↓ कार्बन फूटप्रिंट"],
      ["पर्यावरण संरक्षण","सोलापूरचे जलाशय, शेतजमीन व शहरी हरित जागा सुरक्षित ठेवते","↓ परिसंस्था नुकसान"],
    ],

    // PICKUP
    pu_tag: "पिकअप बुक करा",
    pu_h2_1: "आम्ही येतो",
    pu_h2_em: "तुमच्या दारापाशी",
    pu_desc: "सोलापूरमध्ये कुठेही तुमच्या ई-कचऱ्यासाठी मोफत घरपोच पिकअप शेड्यूल करा. आमचे प्रमाणित एजंट तुमची उपकरणे गोळा करतील, पडताळतील आणि सुरक्षितपणे वाहतूक करतील.",
    pu_form_title: "पिकअप शेड्यूल करा",
    pu_addr_label: "पूर्ण पत्ता",
    pu_addr_ph: "घर क्रमांक, रस्ता, क्षेत्र, सोलापूर",
    pu_type_label: "ई-कचऱ्याचा प्रकार निवडा",
    etype_btns: ["📱 फोन व टॅबलेट","💻 लॅपटॉप व PC","📺 TV व मॉनिटर","🔋 बॅटरी","❄ उपकरणे","🖨 प्रिंटर"],
    pu_date_label: "पसंतीची तारीख",
    pu_slot_label: "पसंतीचा वेळ",
    pu_slots: ["सकाळ (सकाळी ९ – दुपारी १२)","दुपार (दुपारी १२ – ३)","संध्याकाळ (दुपारी ३ – ६)"],
    pu_phone_label: "संपर्क क्रमांक",
    pu_phone_ph: "+91 98XXXXXXXX",
    pu_submit: "मोफत पिकअप बुक करा →",
    pu_what_title: "पिकअपवेळी काय होते?",
    pu_s1_h: "पुष्टी SMS", pu_s1_p: "बुकिंगनंतर १ तासाच्या आत SMS + WhatsApp पुष्टी मिळते",
    pu_s2_h: "एजंट आगमन", pu_s2_p: "आमचा प्रमाणित एजंट निवडलेल्या वेळेत तुमच्या पत्त्यावर येतो",
    pu_s3_h: "वजन व पडताळणी", pu_s3_p: "ई-कचरा साइटवर वजन केला जातो आणि वर्गीकृत केला जातो. तुम्हाला पावती दिली जाते.",
    pu_s4_h: "बक्षीस जमा", pu_s4_p: "२ तासांत गुण EcoSolapur वॉलेटमध्ये आपोआप जमा होतात",
    pu_free_title: "पिकअप १००% मोफत",
    pu_free_p: "सोलापूरमध्ये कुठेही घरपोच संकलनासाठी कोणतेही शुल्क नाही. आम्ही पुनर्वापरकर्त्यांच्या भागीदारीतून कमावतो त्यामुळे नागरिकांना नेहमी मोफत सेवा मिळते.",

    // FOOTER
    foot_tagline: "सोलापूरचे पहिले डिजिटल ई-कचरा व्यवस्थापन व्यासपीठ — प्रत्येक नागरिकासाठी जबाबदार विल्हेवाट सहज करते.",
    foot_mpcb: "MPCB नोंदणीकृत",
    foot_platform: "व्यासपीठ",
    foot_solution: "आमचा उपाय",
    foot_centers: "संकलन केंद्रे",
    foot_pickup: "पिकअप बुक करा",
    foot_rewards: "बक्षीस",
    foot_report: "टाकाऊ तक्रार करा",
    foot_learn: "जाणून घ्या",
    foot_what: "ई-कचरा म्हणजे काय?",
    foot_health: "आरोग्य धोके",
    foot_laws: "भारताचे ई-कचरा कायदे",
    foot_gcp: "हरित रसायनशास्त्र",
    foot_sdg: "SDG उद्दिष्टे",
    foot_contact: "संपर्क",
    foot_copy: "© २०२६ EcoSolapur. AS-1201 कोर्स प्रोजेक्ट (PFA) साठी बनवले.",
    foot_ref: "संदर्भ: ई-कचरा व्यवस्थापन नियम भारत २०१६ · CPCB अहवाल · SDG फ्रेमवर्क",

    // MODAL & TOAST
    modal_title: "घरपोच पिकअप बुक करा",
    modal_p: "खालील तपशील भरा आणि आमची टीम २ तासांत तुमच्या मोफत पिकअप स्लॉटची पुष्टी करण्यासाठी संपर्क करेल.",
    modal_name_label: "तुमचे नाव", modal_name_ph: "पूर्ण नाव",
    modal_phone_label: "फोन नंबर", modal_phone_ph: "+91 98XXXXXXXX",
    modal_addr_label: "पत्ता", modal_addr_ph: "क्षेत्र, सोलापूर",
    modal_btn: "पिकअप विनंती पुष्टी करा →",
    toast_pickup_booked: "पिकअप बुक झाले! लवकरच पुष्टी SMS येईल.",
    toast_directions: "Maps मध्ये दिशा उघडल्या!",
    toast_report_ok: "तक्रार सादर झाली! ६ तासांत अधिकाऱ्यांना सूचित केले जाईल.",
    toast_pickup_scheduled: "पिकअप शेड्यूल झाले! पुष्टी SMS येत आहे.",
    toast_enter_loc: "कृपया आधी टाकाऊचे स्थान प्रविष्ट करा.",
    toast_enter_date: "कृपया पिकअपची तारीख निवडा.",
  }
};

let currentLang = "en";

function t(key) {
  const val = TRANSLATIONS[currentLang][key];
  return val !== undefined ? val : (TRANSLATIONS.en[key] || key);
}

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    const raw = t(key);
    if (typeof raw === "string") {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = raw;
      } else if (el.tagName === "OPTION") {
        // handled separately
      } else {
        el.textContent = raw;
      }
    }
  });

  // Update lang-html elements (allow inner HTML like <em>)
  document.querySelectorAll("[data-lang-html]").forEach(el => {
    const key = el.getAttribute("data-lang-html");
    const raw = t(key);
    if (typeof raw === "string") el.innerHTML = raw;
  });

  // Placeholders (input/textarea with data-lang-placeholder)
  document.querySelectorAll("[data-lang-placeholder]").forEach(el => {
    const key = el.getAttribute("data-lang-placeholder");
    const val = t(key);
    if (val) el.placeholder = val;
  });

  // Lists
  document.querySelectorAll("[data-lang-list]").forEach(ul => {
    const key = ul.getAttribute("data-lang-list");
    const arr = t(key);
    if (Array.isArray(arr)) {
      ul.innerHTML = arr.map(item => `<li>${item}</li>`).join("");
    }
  });

  // Select options
  document.querySelectorAll("[data-lang-opts]").forEach(sel => {
    const key = sel.getAttribute("data-lang-opts");
    const arr = t(key);
    if (Array.isArray(arr)) {
      const selected = sel.selectedIndex;
      sel.innerHTML = arr.map((opt, i) => `<option${i === selected ? " selected" : ""}>${opt}</option>`).join("");
    }
  });

  // E-waste type buttons
  const etypeBtns = document.querySelectorAll(".etype-btn");
  const etypeArr = t("etype_btns");
  if (Array.isArray(etypeArr)) {
    etypeBtns.forEach((btn, i) => {
      if (etypeArr[i]) btn.innerHTML = `${etypeArr[i]}`;
    });
  }

  // GCP table rows
  const tbody = document.getElementById("gcpTbody");
  if (tbody) {
    const rows = t("gcp_rows");
    if (Array.isArray(rows)) {
      tbody.innerHTML = rows.map(([p, a, imp]) =>
        `<tr><td><span class="gcp-dot" style="background:var(--dot-color,#4ecb9a)"></span>${p}</td><td>${a}</td><td>${imp}</td></tr>`
      ).join("");
      // restore dot colors
      const dotColors = ["4ecb9a","78aaf0","f0c840","c078f0","f08080"];
      tbody.querySelectorAll("tr").forEach((tr, i) => {
        const dot = tr.querySelector(".gcp-dot");
        if (dot && dotColors[i]) dot.style.background = "#" + dotColors[i];
      });
    }
  }

  // Update lang switcher active state
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.langCode === lang);
  });

  // Update html lang attribute
  document.documentElement.lang = lang === "mr" ? "mr" : "en";
}
