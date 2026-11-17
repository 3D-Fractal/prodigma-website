// Svenskt innehåll för ProDigma.
// Sidor refererar till varandra med id (t.ex. "erbjudanden"). Filnamnet styrs av `slug`.

const quotes = [
  ["Jag kom hem så fulladdad med energi, som ett solmoget granatäpple.", "Deltagare, retreat på Sicilien"],
  ["Jag hittade tillbaka till det som verkligen är jag, och det som är viktigt för mig.", "Deltagare, retreat på Sicilien"],
  ["Det var underbart att bara få lov att vara tyst i perioder.", "Deltagare, retreat på Sicilien"],
];

const yogaStats = {
  type: "stats",
  kicker: "Ledningsgruppsutveckling på yogamatta",
  heading: "Mätbar effekt på stress, fokus och beslut.",
  items: [
    ["30 %", "lägre stress"],
    ["30 %", "högre koncentration"],
    ["25 %", "högre kreativitet"],
    ["40 %", "effektivare ledningsgrupp"],
  ],
  note: "Genomsnitt efter tio veckor, respektive deltagarnas egen skattning av ledningsgruppens effektivitet efter en åttaveckorskurs. Deltagarna skattade även att de strategiska beslutsprocesserna förbättrats med 65 %.",
};

export default {
  lang: "sv",
  hreflang: "sv",
  locale: "sv_SE",
  dir: "",
  short: "SV",
  label: "Svenska",

  ui: {
    skip: "Hoppa till innehållet",
    menu: "Meny",
    close: "Stäng",
    mainNav: "Huvudmeny",
    homeLabel: "ProDigma startsida",
    tagline: "Neuroledarskap & förändring",
    langNav: "Välj språk",
    readMore: "Läs mer",
    related: "Läs vidare",
    newTab: "öppnas i ny flik",
    email: "E-post",
    phone: "Telefon",
    footerAbout: "Ledarskap, strategi och hållbar förändring för ledning och styrelse.",
    credit: "Webbplats av",
    siteName: "ProDigma",
    seaLabel: "Medelhavet",
    defaultCta: {
      heading: "Vill ni skapa mer klarhet i nästa viktiga förändring?",
      text: "Börja med ett förutsättningslöst samtal om var ni står och vilken effekt ni behöver se.",
      href: "kontakt",
      label: "Kontakta ProDigma",
    },
    signup: {
      kicker: "Så anmäler du intresse",
      heading: "Ett mejl räcker.",
      steps: [
        ["Skicka en intresseanmälan.", "Knappen öppnar ett färdigt mejl i ditt e-postprogram – fyll i namn, telefon och eventuella frågor."],
        ["Vi återkommer.", "Du får datum, pris och upplägg så snart nästa retreat är planerat."],
        ["Din plats bekräftas.", "Anmälan blir bindande och platsen garanterad när anmälningsavgiften är betald."],
      ],
      button: "Skicka intresseanmälan",
      questions: "Frågor?",
      subject: "Intresseanmälan",
      body: (retreat) => `Hej!\n\nJag vill anmäla intresse för ${retreat}.\n\nNamn:\nTelefon:\nÖnskemål om boende:\nFrågor:\n\nVänliga hälsningar`,
    },
  },

  nav: [
    { label: "Vad vi gör", id: "vad-vi-gor", match: ["vad-vi-gor", "tjansteomraden"] },
    { label: "Erbjudanden", id: "erbjudanden" },
    { label: "GreenLight MAP™", id: "greenlight-map" },
    { label: "Retreat", id: "retreat", match: ["retreat", "retreat-skogsbad", "retreat-sicilien", "anmalan-skogsbad", "anmalan-sicilien"] },
    { label: "Vilka vi är", id: "vilka-vi-ar" },
    { label: "Media", id: "media" },
    { label: "Kontakt", id: "kontakt", cta: true },
  ],

  footer: [
    ["Vad vi gör", [["vad-vi-gor", "Vad vi gör"], ["tjansteomraden", "Tjänsteområden"], ["erbjudanden", "Erbjudanden"], ["greenlight-map", "GreenLight MAP™"]]],
    ["Retreat", [["retreat", "Yogaretreat för ledare"], ["retreat-skogsbad", "Yogaretreat och skogsbad"], ["retreat-sicilien", "Yogaretreat på Sicilien"], ["anmalan-skogsbad", "Anmälan skogsbad"], ["anmalan-sicilien", "Anmälan Sicilien"]]],
    ["ProDigma", [["vilka-vi-ar", "Vilka vi är"], ["media", "Media"], ["kontakt", "Kontakt"]]],
  ],

  people: {
    lovisa: { role: "VD och grundare, managementkonsult" },
    marianne: { role: "Verksamhetsutvecklare och värdinna på Sicilien" },
  },

  home: {
    title: "ProDigma | Ledarskap, strategi och hållbar förändring",
    description: "ProDigma hjälper ledning och styrelse till tydligare riktning, bättre beslut och hållbar energi i förändring – med strategi, neuroledarskap och yoga.",
    hero: {
      eyebrow: "För ledning och styrelse",
      title: "Tydligare riktning när förändringen måste lyckas.",
      lead: "ProDigma hjälper ledning och styrelse att samla riktningen, minska friktionen och skapa beslutskraft i förändring med strategi, neuroledarskap, GreenLight MAP™ och Management by Yoga.",
      primary: "Starta ett samtal",
      secondary: "Se vad ni kan få på plats",
    },
    results: {
      kicker: "Kärnan i erbjudandet",
      heading: "Klarare vägval. Starkare genomförande. Hållbarare ledarskap.",
      lead: "När tempot ökar och vägvalen blir svårare behöver organisationen mer än en plan. Den behöver gemensam förståelse, trygga forum för svåra frågor och ledare som kan fatta kloka beslut även under press.",
      items: [
        ["Tydlig riktning", "En gemensam bild av nuläge, målbild och prioriteringar så att styrelse, ledning och organisation drar åt samma håll."],
        ["Bättre beslut", "Beslutsmiljöer där stress, otydlighet och invanda mönster blir synliga innan de styr utfallet."],
        ["Tryggare förändring", "Förändringar som går att genomföra i vardagen, med tydliga steg och människor som förstår varför de är viktiga."],
        ["Hållbar energi", "Mer återhämtad beslutskraft, färre onödiga stresskostnader och ledarskap som håller även när trycket ökar."],
      ],
    },
    method: {
      kicker: "Arbetssätt",
      heading: "Affärsskärpa med förståelse för hur människor fungerar.",
      lead: "ProDigma kombinerar strategi, neuroledarskap och faciliterade samtal för att göra komplexa frågor begripliga, prioriterbara och möjliga att agera på.",
      alt: "Ledare i ett lugnt strategisamtal nära naturen",
      caption: "Reflektion som arbetsmetod, inte paus från arbetet.",
      panel: "Arbetet börjar ofta med att skapa ett tryggt men ambitiöst rum: tillräckligt lugnt för att se mönster, tillräckligt tydligt för att välja väg och tillräckligt konkret för att nästa steg ska bli gjort.",
      steps: [
        ["Förstå nuläget", "Var uppstår friktion, stress, otydlighet och beslut som inte riktigt landar?"],
        ["Samla riktningen", "Gör målbild, vägval, risker och ansvar synliga för dem som ska leda förändringen."],
        ["Gör det genomförbart", "Översätt insikt till beslut, samtal, vanor och uppföljning som märks i organisationen."],
      ],
    },
    services: {
      kicker: "Erbjudanden",
      heading: "Flera ingångar till samma mål: klarhet, närvaro och bättre beslut.",
      items: [
        ["Strategi & förändring", "Strategi- och affärsplanearbete, second opinion, bolagsstyrning, kulturresa, aktivitetsbaserat arbetssätt och faciliterade workshops som leder framåt.", "vad-vi-gor", "Utforska området"],
        ["Stress & beslutsförmåga", "GreenLight MAP™ analyserar stressdrivare på individ-, kultur- och organisationsnivå så att beslutskraft, hälsa och struktur kan stärkas samtidigt.", "greenlight-map", "Se GreenLight MAP™"],
        ["Management by Yoga", "Yogaretreat, skogsbad och ledningsgruppsutveckling på yogamatta där andning, stillhet och reflektion blir verktyg för strategisk skärpa.", "retreat", "Se retreaterna"],
      ],
    },
    founder: {
      kicker: "Möt grundaren",
      heading: "Lovisa Mellgren – från ledningsrummet till yogamattan.",
      body: [
        "Civilingenjör med drygt 20 år i ledande befattningar i privata och kommunala bolag, senast som marknads- och försäljningsdirektör. I dag coachar hon styrelser och ledningsgrupper, lotsar företag genom förändring och använder yoga och andning som ett konkret verktyg för bättre beslut.",
        "Diplomerad coach, certifierad CTT Practitioner och yogalärare inom My Spirit Yoga och Yinyoga.",
      ],
      link: "Mer om oss och våra partners",
    },
    press: {
      kicker: "Uppmärksammad i",
      label: "I media",
      items: ["Göteborgs-Posten", "Ny Teknik", "Sveriges Radio", "Chef & Karriär", "Ingenjören"],
      link: "Läs artiklarna",
    },
    quote: {
      text: "När människor får total närvaro i rummet blir strategisamtalen skarpare och besluten mer förankrade.",
      sub: "Det är kärnan i ProDigmas särprägel: management, hjärnforskning och yoga som praktiskt verktyg för bättre resultat.",
    },
    contact: {
      kicker: "Nästa steg",
      heading: "Vill ni skapa mer klarhet i nästa viktiga förändring?",
      text: "Börja med ett samtal om var ni står, vad som skaver och vilken effekt ni behöver se i ledning, styrelse eller organisation.",
    },
  },

  pages: {
    "vad-vi-gor": {
      slug: "vad-vi-gor",
      name: "Vad vi gör",
      description: "ProDigma stödjer ledning och styrelse i stora förändringar – med strategisk skärpa och kunskap om hur hjärnan fungerar under press.",
      hero: {
        kicker: "Vad vi gör",
        title: "Förändring som människor förstår och orkar genomföra.",
        lead: "ProDigma stödjer ledning och styrelse i stora förändringar – med strategisk skärpa och kunskap om hur hjärnan fungerar under press.",
        image: "strategy-map",
        alt: "Ledningsgrupp som arbetar runt en strategikarta",
      },
      sections: [
        {
          type: "prose",
          kicker: "Neuroledarskap",
          heading: "Ett lite annorlunda managementbolag.",
          body: [
            "ProDigma arbetar utifrån ett neuroledarskapsperspektiv. Det betyder att vi använder aktuell forskning om hjärnan – hur vi fattar beslut, hur stress påverkar tänkandet och vad som får människor att ändra beteenden – för att förändringsarbetet ska ge verkliga resultat.",
            "Vi kombinerar klassiskt strategi- och affärsplanearbete med reflektion, närvaro och tydliga forum för uppföljning. Det ger beslut som är bättre förankrade och förändringar som håller i vardagen.",
          ],
        },
        {
          type: "grid",
          tone: "cream",
          kicker: "Där vi ofta börjar",
          heading: "Fyra frågor som förtjänar tid.",
          items: [
            ["Rätt riktning", "När tog ni senast tid att reflektera över mål och vision? I dagens förändringstakt behövs regelbundna forum för att pröva den strategiska riktningen."],
            ["Utvärdering", "Hur gick den senaste förändringen? Vi hjälper er att följa upp resultatet och ta fram en handlingsplan för det som ännu inte har hänt."],
            ["Stress och beslutskraft", "Stressade hjärnor fattar sämre beslut – och det kostar. GreenLight MAP™ gör stressdrivarna synliga och hanterbara."],
            ["Hållbar och digital framtid", "En ny generation ställer nya krav som kunder och medarbetare. Hur ser en cirkulär och digital strategi ut för just er verksamhet?"],
          ],
        },
        {
          type: "steps",
          kicker: "Arbetssätt",
          heading: "Från insikt till handling.",
          items: [
            ["Förstå nuläget", "Samtal, intervjuer och mätningar som visar var friktion, stress och otydlighet uppstår."],
            ["Samla riktningen", "Faciliterade workshops där ledning och styrelse landar i gemensamma vägval och prioriteringar."],
            ["Gör det genomförbart", "En konkret handlingsplan med tydligt ansvar, forum för reflektion och uppföljning över tid."],
          ],
        },
        {
          type: "split",
          image: "reflection-retreat",
          alt: "Två ledare i ett lugnt samtal utomhus nära skogen",
          kicker: "Management by Yoga",
          heading: "Stillhet som strategiskt verktyg.",
          body: [
            "Ledningsgrupper blir märkbart mer fokuserade när strategidiskussioner varvas med korta övningar i andning och närvaro. När stressen släpper får vi tillgång till hela vår kapacitet – och samtalen blir skarpare.",
            "ProDigma har tagit fram visioner, värdegrunder och affärsplaner med en yogisk approach, i allt från en enskild workshop till längre uppdrag.",
          ],
          link: ["erbjudanden", "Se alla erbjudanden"],
        },
      ],
      related: ["erbjudanden", "greenlight-map", "tjansteomraden"],
    },

    tjansteomraden: {
      slug: "tjansteomraden",
      name: "Tjänsteområden",
      description: "Strategi och förändring, stress och beslutsförmåga, Management by Yoga – tre vägar till klarhet, närvaro och bättre beslut.",
      hero: {
        kicker: "Tjänsteområden",
        title: "Tre vägar till samma mål.",
        lead: "Klarhet, närvaro och bättre beslut – oavsett om ni börjar i strategin, i stressen eller i stillheten.",
        image: "leadership-workshop",
        alt: "Ledningsgrupp i samtal runt ett bord",
      },
      sections: [
        {
          type: "features",
          items: [
            {
              image: "strategy-map",
              alt: "Ledningsgrupp som arbetar med en strategikarta",
              kicker: "01 · Strategi & förändring",
              heading: "När riktningen behöver bli tydlig.",
              text: "Strategi- och affärsplanearbete, hållbar och digital strategi, styrning av kommunala bolag, kulturresor och aktivitetsbaserat arbetssätt.",
              link: ["erbjudanden", "Se erbjudanden"],
            },
            {
              image: "stress-decision-map",
              alt: "Två ledare som går igenom en kartläggning",
              kicker: "02 · Stress & beslutsförmåga",
              heading: "När trycket påverkar besluten.",
              text: "GreenLight MAP™ analyserar stressdrivare på individ-, kultur- och organisationsnivå och ger en gemensam handlingsplan för hållbar prestation.",
              link: ["greenlight-map", "Om GreenLight MAP™"],
            },
            {
              image: "reflection-retreat",
              alt: "Ledare i lugnt samtal i naturen",
              kicker: "03 · Management by Yoga",
              heading: "När ni behöver landa för att se klart.",
              text: "Strategidagar med yoga, ledningsgruppsutveckling på yogamatta och retreater för ledare – i skogen eller vid Medelhavet.",
              link: ["retreat", "Om retreaterna"],
            },
          ],
        },
        {
          type: "grid",
          tone: "cream",
          kicker: "Vi arbetar med",
          heading: "Dem som bär ansvaret för förändringen.",
          items: [
            ["Ledningsgrupper", "Som behöver samla riktningen, prioritera och leda genom förändring tillsammans."],
            ["Styrelser", "Som vill ha inspiration, en second opinion eller stöd i strategiska vägval."],
            ["Ägare och kommunala bolag", "Som vill stärka styrningen och skapa mer värde för invånare och verksamhet."],
            ["Enskilda ledare", "Som behöver perspektiv, coachning eller tid att hitta tillbaka till sin inre kompass."],
          ],
        },
      ],
      related: ["vad-vi-gor", "vilka-vi-ar", "kontakt"],
    },

    erbjudanden: {
      slug: "erbjudanden",
      name: "Erbjudanden",
      description: "Strategi och affärsplanearbete, organisation och ledarskap, kulturresor, facilitering och Management by Yoga.",
      hero: {
        kicker: "Erbjudanden",
        title: "Stöd när förändringen är stor.",
        lead: "Strategi och affärsplanearbete, organisation och ledarskap – från en enskild workshop till längre uppdrag.",
        image: "strategy-map",
        alt: "Ledningsgrupp som arbetar runt en strategikarta",
      },
      sections: [
        {
          type: "checklist",
          kicker: "Känner ni igen er?",
          heading: "Vanliga lägen där vi kommer in.",
          intro: "De flesta uppdrag börjar med en konkret fråga. Här är några av de vanligaste.",
          items: [
            "Ni behöver en second opinion på er befintliga affärsplan.",
            "Ni ska lägga fast en helt ny riktning och vill ha handfast vägledning i strategi- och affärsplaneprocessen.",
            "Ni står inför en större kulturresa och vet inte riktigt hur ni ska börja.",
            "Ni ska införa – eller utvärdera – ett aktivitetsbaserat arbetssätt.",
            "Ni vill kartlägga och förebygga stress i organisationen eller arbetsgruppen.",
            "Ni har genomfört en stor förändring och behöver utvärdera den och ta fram en ny handlingsplan.",
            "Ni vill veta mer om riktlinjerna för styrning av kommun- och regionägda bolag.",
            "Ni vill ha det senaste om digitalisering och nya generationers krav på nästa styrelsekonferens.",
          ],
        },
        {
          type: "offers",
          tone: "cream",
          kicker: "Erbjudanden",
          heading: "Det här kan vi hjälpa er med.",
          groups: [
            ["Strategi och styrning", [
              ["Strategi- och affärsplanearbete", "En ny vision eller strategi i ett överskådligt format som är enkelt att genomföra och följa upp."],
              ["Kommun- och regionägda bolag", "Nulägeskartläggning av hur styrprinciperna tillämpas, och en handlingsplan för ökad koncernnytta och värde för invånarna."],
              ["Hållbarhetsstrategi", "Ett önskat läge och en genomarbetad strategi utifrån FN:s globala mål eller Economy for the Common Good – och vad hållbart ledarskap betyder hos er."],
              ["Digital strategi", "Vision och målbild med ett helhetsperspektiv på digitaliseringens möjligheter och påverkan på verksamheten."],
            ]],
            ["Organisation och kultur", [
              ["Organisation och ledarskap", "Handledning av förändringsresor för enskilda ledare, ledningsgrupper eller hela organisationen – nya värderingar, stresshantering eller coachande ledarskap."],
              ["Kulturresa med CTT", "Starka värderingar är en konkurrensfördel. En mätning med Cultural Transformation Tools visar vilka värderingar ni har i dag och vilka ni önskar."],
              ["Aktivitetsbaserat arbetssätt", "Konkreta råd vid införande, eller utvärdering av ett arbetssätt som redan är på plats."],
              ["Stressförebyggande med GreenLight MAP™", "En kultur där signalerna syns i tid och där ni aktivt bygger en välmående, värdebaserad och högpresterande organisation."],
            ]],
            ["Möten och inspiration", [
              ["Facilitering av workshops och möten", "Möten där energi och kreativitet frigörs för att nå syftet – och där besluten faktiskt blir fattade."],
              ["Föreläsningar", "Inspiration vid uppstart av strategiarbete i ledningsgruppen eller på styrelsekonferensen."],
              ["Strategidagar med yoga", "En föreläsning om hur yoga, meditation och mindfulness skapar bättre ledare, ett kort avslappnande pass – och sedan strategidiskussioner med ny skärpa."],
              ["Ledningsgruppsutveckling på yogamatta", "Reflektion kring hur yogafilosofiska begrepp kan tillämpas i modernt ledarskap, följt av en timmes lugn My Spirit Yoga. Skräddarsys för varje grupp."],
            ]],
          ],
        },
        yogaStats,
      ],
      related: ["greenlight-map", "retreat", "kontakt"],
    },

    "greenlight-map": {
      slug: "greenlight-map",
      name: "GreenLight MAP™",
      description: "GreenLight MAP™ – Green Light Mindful Antistress Program. Stressförebyggande arbete som stärker hälsa, kultur och resultat.",
      hero: {
        kicker: "GreenLight MAP™",
        title: "Stressförebyggande arbete som stärker både hälsa och resultat.",
        lead: "Green Light Mindful Antistress Program – ett helhetsgrepp om individ, kultur och struktur.",
        image: "stress-decision-map",
        alt: "Två ledare som går igenom en kartläggning av stressfaktorer",
      },
      sections: [
        {
          type: "prose",
          kicker: "Varför",
          heading: "Stress är en kostnad som sällan syns.",
          body: [
            "Det finns förvånansvärt lite kunskap om stress och stressrelaterade kostnader i näringslivet. Kanske för att ledarna själva är för stressade för att märka att allt inte fungerar optimalt.",
            "Stress påverkar vår kognitiva och kreativa förmåga. Beslut som fattas av stressade hjärnor blir sämre – och det kostar organisationen stora summor. GreenLight MAP™ gör det synligt, och möjligt att förändra.",
          ],
          aside: "Programmet kombinerar österländska mentala metoder med modernt västerländskt ledarskap – och ser hälsa, företagskultur och struktur som en samverkande helhet.",
        },
        {
          type: "steps",
          tone: "cream",
          kicker: "Metoden",
          heading: "En grön tråd från ord till handling.",
          items: [
            ["Analysera nuläget", "Vi mäter kulturen och de faktorer som driver stress och kostnader i just er verksamhet."],
            ["Definiera önskat läge", "Tillsammans beskriver vi den kultur och de förutsättningar ni vill skapa."],
            ["Ta fram er MAP", "En handlingsplan för individen, avdelningen och hela organisationen – med skräddarsydda metoder och verktyg."],
            ["Följ upp", "Vi följer gruppens upplevda stressnivå och stöttar cheferna i att hålla fokus på kulturförändringen."],
          ],
        },
        {
          type: "split",
          image: "stress-decision-map",
          alt: "Ledare som diskuterar en kartläggning vid ett bord",
          kicker: "Innehåll",
          heading: "Verktyg som går att använda varje dag.",
          body: [
            "Programmet ger er ett gemensamt språk och ett gemensamt sätt att skapa en långsiktigt hållbar kultur. Varje deltagare får även individuell coachning för att sätta personliga mål, metoder och uppföljning.",
          ],
          list: [
            "Mätning av företagets kultur, inklusive stressfaktorer",
            "Metoder för mer fokus och motivation",
            "Metoder för att minska stresspåslag",
            "Mindfulnesstekniker och andningsövningar",
            "Mentala modeller för vardagen",
            "Uppföljning av gruppens upplevda stressnivå",
          ],
        },
      ],
      related: ["erbjudanden", "vad-vi-gor", "kontakt"],
    },

    "vilka-vi-ar": {
      slug: "vilka-vi-ar",
      name: "Vilka vi är",
      description: "Lovisa Mellgren, Marianne Fröberg och ProDigmas nätverk av samarbetspartners inom coaching, styrelsearbete, digitalisering och hållbarhet.",
      hero: {
        kicker: "Vilka vi är",
        title: "Erfarenhet från ledningsrummet – och från yogamattan.",
        lead: "ProDigma kombinerar lång erfarenhet av ledarskap och strategi med neuroledarskap, coachning och yoga.",
        image: "consultant-network",
        alt: "Grupp av ledare i ett avslappnat samtal",
      },
      sections: [
        {
          type: "profile",
          person: "lovisa",
          initials: "LM",
          heading: "Lovisa Mellgren",
          role: "VD, managementkonsult och grundare av ProDigma AB",
          body: [
            "Lovisa har arbetat i ledande befattningar inom marknadsföring och försäljning, liksom i företagsövergripande roller, i både privata och kommunala bolag under drygt 20 år – senast som marknads- och försäljningsdirektör på Göteborg Energi. Hon har även erfarenhet från flera styrelseuppdrag.",
            "Hon har gedigen erfarenhet av strategiskt arbete, affärsplanearbete, omorganisationer och förändringsarbete. I dag är yoga och andning ett naturligt verktyg i hennes arbete med ledningsgrupper och styrelser.",
          ],
          credentials: ["Civilingenjör", "Diplomerad coach", "Certifierad CTT Practitioner", "Yogalärare My Spirit Yoga (500 h)", "Yinyogalärare", "Andningsinstruktör"],
        },
        {
          type: "profile",
          person: "marianne",
          initials: "MF",
          reverse: true,
          heading: "Marianne Fröberg",
          role: "Internationell verksamhets- och konceptutvecklare, business coach",
          body: [
            "Marianne har lång erfarenhet av att bygga upp företag, organisationer, affärsstrategier och processer – och bygger i dag framtidens affärsmodeller med stöd av cirkulär ekonomi. Som delägare i flera mindre bolag hjälper hon individer att växa med organisationen och möta strategiska förändringar.",
            "Hon har arbetat internationellt i 18 år, bor i Milano och är värdinna för ProDigmas retreat på Sicilien.",
          ],
          credentials: ["Civilingenjör, Industriell ekonomi", "Diplomerad coach"],
        },
        {
          type: "people",
          tone: "cream",
          kicker: "Samarbetspartners",
          heading: "Rätt kompetens när uppdraget kräver det.",
          intro: "ProDigma samarbetar med några av de skarpaste personerna i Sverige inom coaching, kommunikation, digitalisering, styrelsearbete och finansiering av tillväxtbolag – alla med samma värdegrund.",
          items: [
            ["Anja Lindberg", "Coachutbildning Sverige AB", "PCC- och ICC-certifierad coach, KBT-terapeut och fil.mag. i organisationspsykologi. Författare till Livbåt för ledare och Coachboken."],
            ["Susanne Olofsson", "Susanne Olofsson AB", "Lång erfarenhet av styrelsearbete, rådgivning och finansiering av tillväxtbolag. Fokuserar på förändring och revitalisering av små och medelstora företag."],
            ["Thomas Pedersén", "Trignite", "Verksamhetsutveckling och digitalisering i över 13 år – supply chain, strategi, digitala arbetsplatser och datadriven analys."],
            ["Emma Dalväg", "Coest", "Strategiskt hållbarhetsarbete sedan 2010 och en av de första i Sverige att arbeta med cirkulär ekonomi och industriell symbios."],
            ["Elif Koman André", "Koman Kompetens", "Hållbarhetschef i kommunala ledningar och koncernbolag sedan 2007. Certifierad i GRI, styrelsearbete och kvalitetsarbete."],
          ],
        },
        {
          type: "partner",
          kicker: "Strategisk IT-rådgivare & digital partner",
          heading: "3D Fractal",
          body: [
            "3D Fractal är ProDigmas strategiska IT-rådgivare och digitala partner. Det norska produkt- och investeringsbolaget bygger digitala produkter, nischplattformar och innovationskoncept – och hjälper utvalda partners att omsätta idéer i webbplatser, prototyper och strukturerade digitala lösningar.",
            "Bakom finns lång erfarenhet av produktledning, verksamhetsarkitektur, affärssystem, systemintegration och digital transformation. För ProDigma står 3D Fractal för den digitala strategin och har tagit fram den här webbplatsen – med fokus på tydlighet, produkttänk och långsiktigt värde.",
          ],
          tags: ["Strategisk IT-rådgivning", "Digital strategi", "Webb & innovation", "Norge"],
          url: "https://3dfractal.no/",
          linkLabel: "Besök 3dfractal.no",
        },
      ],
      related: ["media", "erbjudanden", "kontakt"],
    },

    media: {
      slug: "media",
      name: "Media",
      description: "Artiklar och intervjuer med Lovisa Mellgren om yoga som verktyg i ledar- och strategiutveckling.",
      hero: {
        kicker: "Media",
        title: "Management by Yoga i media.",
        lead: "Artiklar och intervjuer om hur yoga, andning och stillhet blir verktyg i ledar- och strategiutveckling.",
        image: "media-insights",
        alt: "Skrivbord med anteckningsbok, mikrofon och bärbar dator",
      },
      sections: [
        {
          type: "prose",
          kicker: "Perspektiv",
          heading: "Total närvaro ger skarpare strategisamtal.",
          body: [
            "Det räcker inte att en ledningsgrupp är fysiskt närvarande när strategier ska processas. Ett enkelt sätt att nå full närvaro är att inleda med lätta andningsövningar och en stunds stillhet – efter det har gruppen ett helt annat fokus.",
            "Stress blockerar de delar av hjärnan som vi behöver för att fungera som ledare. Om det är yoga, mindfulness eller skogspromenader som ger oss det inre lugnet spelar mindre roll. Det viktiga är att vi ger oss själva chansen.",
          ],
          aside: "Ett av Lovisas tips: börja med andningsövningar. Tjugo minuter om dagen ger snart en tydlig effekt.",
        },
        {
          type: "checklist",
          tone: "cream",
          kicker: "Åtta effekter",
          heading: "Vad yoga kan ge dig som ledare.",
          items: [
            "Minskad stress och ökad stresstålighet",
            "Bättre koncentration",
            "Beslut som är bättre förankrade i dina grundvärderingar",
            "Tydligare kommunikation",
            "Bättre fysisk och psykisk återhämtning",
            "Starkare immunförsvar",
            "Ökad empatisk förmåga",
            "Lugn och fokus även under press",
          ],
        },
        {
          type: "press",
          kicker: "I media",
          heading: "Artiklar och intervjuer.",
          items: [
            ["Sveriges Radio P4 Sjuhärad", "Augusti 2021", "Yoga skapar bättre chefer", ""],
            ["Chef & Karriär", "Maj 2020", "Reportage om yoga i ledarskapet", ""],
            ["Affärskoll, Allabolag.se", "April 2019", "Därför gör yoga dig till en bättre chef", "https://www.allabolag.se/affarskoll/darfor-gor-yoga-dig-till-en-battre-chef"],
            ["Ny Teknik", "Mars 2018", "Stillheten i yoga gör chefen bättre", "https://www.nyteknik.se/karriar/stillheten-i-yoga-gor-chefen-battre/490030"],
            ["Womengineer", "November 2017", "Yoga i chefsutveckling", "https://womengineer.org/2017/11/25/lovisa-mellgren-yoga-chefsutveckling/"],
            ["Ingenjören", "Oktober 2017", "Management by Yoga", "https://www.ingenjoren.se/media/2017/10/Ingenj%C3%B6ren-4-17_enkelsidor.pdf"],
            ["Coachutbildning Sverige", "Juni 2017", "Ett hållbart inre för en hållbar samhällsutveckling", ""],
            ["Göteborgs-Posten", "Juni 2017", "Civilingenjören som använder yoga i ledarutveckling", "https://www.gp.se/ekonomi/ingenjoren-som-anvander-yoga-i-chefsutveckling.8f21862a-c7cd-4b62-afe0-2dbf89812ed6"],
          ],
        },
      ],
      related: ["vilka-vi-ar", "retreat", "erbjudanden"],
    },

    kontakt: {
      slug: "kontakt",
      name: "Kontakt",
      description: "Kontakta ProDigma för ett förutsättningslöst samtal om strategi, förändring, GreenLight MAP™ eller retreat.",
      hero: {
        kicker: "Kontakt",
        title: "Börja med ett samtal.",
        lead: "Berätta var ni står och vad som behöver hända. Det första samtalet är förutsättningslöst.",
        image: "contact-corner",
        alt: "Lugnt mötesrum med runt bord, kaffekoppar och anteckningsbok",
      },
      sections: [
        {
          type: "contacts",
          kicker: "Kontaktpersoner",
          heading: "Hör av dig direkt.",
          items: [
            ["lovisa", "Strategi, förändring, GreenLight MAP™, föreläsningar och retreat."],
            ["marianne", "Retreat på Sicilien och internationella uppdrag."],
          ],
        },
        {
          type: "steps",
          tone: "cream",
          kicker: "Så går det till",
          heading: "Enkelt att komma igång.",
          items: [
            ["Ett första samtal", "Vi pratar om nuläget, vad som skaver och vilken effekt ni vill se i ledning, styrelse eller organisation."],
            ["Ett förslag", "Du får ett förslag på upplägg – från en enskild workshop eller föreläsning till ett längre uppdrag."],
            ["Vi sätter igång", "Arbetet anpassas efter er verksamhet, ert tempo och de beslut som behöver fattas."],
          ],
        },
      ],
      related: ["erbjudanden", "vilka-vi-ar", "retreat"],
      hideCta: true,
    },

    retreat: {
      slug: "retreat",
      name: "Yogaretreat för ledare",
      description: "Yogaretreat för ledare på Sicilien och i skogen hos Urnatur – återhämtning, reflektion och nytt perspektiv på ledarskapet.",
      hero: {
        kicker: "Yogaretreat för ledare",
        title: "Landa, återhämta och se klart igen.",
        lead: "Retreater där yoga, natur och reflektion ger ledare tid att hitta tillbaka till sin inre kompass.",
        image: "reflection-retreat",
        alt: "Två ledare i ett lugnt samtal utomhus vid skogen",
      },
      sections: [
        {
          type: "prose",
          kicker: "Varför retreat",
          heading: "Tid som sällan ryms i vardagen.",
          body: [
            "Den yttre världen blir alltmer komplex, och tiden för att reflektera över vad man vill lägga sin kraft på blir allt mindre. Ett retreat ger utrymme att stanna upp, fylla på med energi och se på ledarskapet med nya ögon.",
            "Många deltagare beskriver efteråt att de fått kropp och själ på samma plats – att de landat, upplevt en nystart och fått ny kraft att utöva sitt ledarskap.",
          ],
        },
        {
          type: "retreats",
          tone: "cream",
          kicker: "Två miljöer",
          heading: "Välj ditt retreat.",
          items: [
            {
              id: "retreat-sicilien",
              tone: "sea",
              kicker: "Sicilien · Höst",
              heading: "Yogaretreat på Sicilien",
              text: "Mjuk yoga på takterrassen med utsikt över Medelhavet, ayurvedisk mat och vandring längs kusten. Villa med pool, ca 100 meter från stranden.",
            },
            {
              id: "retreat-skogsbad",
              image: "reflection-retreat",
              alt: "Ledare i samtal i naturen",
              kicker: "Östergötland · Vår",
              heading: "Yogaretreat och skogsbad",
              text: "Yinyoga och My Spirit Yoga i skogen och vid sjön, skogsbad och boende i handbyggda trähus uppe i trädtopparna hos Urnatur.",
            },
          ],
        },
        {
          type: "checklist",
          kicker: "Gemensamt för retreaterna",
          heading: "Det här ger vi dig.",
          items: [
            "Mjuk och avslappnande My Spirit Yoga och Yinyoga, ledd av Lovisa Mellgren",
            "Reflektion kring hur yogafilosofiska begrepp kan tillämpas i ledarskapet",
            "Näringsrik, vegetarisk och närodlad mat",
            "Tid i tystnad, natur och stillhet",
            "En liten grupp med ledare från olika branscher",
            "Utrymme att upptäcka var du står – och hur du vill komma vidare",
          ],
        },
        { type: "quotes", tone: "forest", items: quotes },
      ],
      related: ["retreat-sicilien", "retreat-skogsbad", "vilka-vi-ar"],
      cta: { heading: "Vill du följa med på nästa retreat?", text: "Inga datum är satta just nu. Anmäl ditt intresse så hör vi av oss när nästa retreat planeras.", href: "anmalan-sicilien", label: "Anmäl intresse" },
    },

    "retreat-sicilien": {
      slug: "retreat-sicilien",
      name: "Yogaretreat på Sicilien",
      description: "Yogaretreat för ledare i Alcamo Marina på Sicilien – yoga, reflektion, ayurvedisk mat och Medelhavet.",
      hero: {
        kicker: "Retreat · Sicilien",
        title: "Yogaretreat för ledare på Sicilien.",
        lead: "Tid bara för dig – att vara, fylla på med energi och landa i medvetenhet vid Medelhavet.",
        tone: "sea",
      },
      sections: [
        {
          type: "prose",
          kicker: "Retreatet",
          heading: "Stillhet, värme och nya perspektiv.",
          body: [
            "Retreatet ägnas åt mjuk och avslappnande My Spirit Yoga, ledd av yogaläraren och managementkonsulten Lovisa Mellgren. Passen varvas med reflektioner kring hur yogafilosofiska begrepp kan tillämpas i ledarskapet och för att utveckla den egna potentialen.",
            "Vi utövar yoga och mindfulness på takterrassen med utsikt över Medelhavet, samtalar vid poolen och tillbringar tid på stranden. Parallellt får du tillfälle att upptäcka var du står i livet och som ledare – och hur du vill komma vidare.",
          ],
          list: [
            "Tillåt dig att bara vara och finna stillhet",
            "Lär dig lyssna till din inre kompass",
            "Få energi och inspiration att utveckla ditt ledarskap",
            "Upplev skillnaden i kroppen med renande ayurvedisk mat",
            "Njut av Medelhavet och milslånga stränder",
          ],
        },
        {
          type: "facts",
          tone: "cream",
          kicker: "Upplägg",
          heading: "Praktisk information.",
          intro: "Så har retreatet varit upplagt. Datum, pris och detaljer för nästa tillfälle får du vid intresseanmälan.",
          items: [
            ["Plats", "Alcamo Marina, cirka 30 minuter från Palermo"],
            ["Boende", "Mariannes nybyggda villa med trädgård, pool och takterrasser – cirka 100 meter till stranden"],
            ["Yoga", "Cirka tre pass per dag med meditation och ledarutveckling"],
            ["Mat", "Helpension med vegetarisk, näringsrik och närodlad mat, lagad av en ayurvedisk kock"],
            ["Utflykter", "Vandring i ett naturreservat vid havet och besök i en olivlund och fruktodling"],
            ["Även möjligt", "Individuell coachning och behandlingar"],
            ["Grupp", "6–10 deltagare"],
            ["Resa", "Flyg till Palermo bokas av dig, grupptransfer ingår"],
          ],
        },
        { type: "quotes", tone: "forest", items: quotes },
      ],
      related: ["anmalan-sicilien", "retreat-skogsbad", "retreat"],
      cta: { heading: "Varmt välkomna, hälsar Lovisa och Marianne.", text: "Anmäl ditt intresse så hör vi av oss med datum, pris och upplägg för nästa retreat.", href: "anmalan-sicilien", label: "Anmäl intresse" },
    },

    "retreat-skogsbad": {
      slug: "retreat-skogsbad",
      name: "Yogaretreat och skogsbad",
      description: "Yogaretreat och skogsbad hos Urnatur i Ödeshög – yoga utomhus, skogsbad och boende i handbyggda trähus.",
      hero: {
        kicker: "Retreat · Skogsbad",
        title: "Yogaretreat och skogsbad.",
        lead: "Möt våren i skogen med yoga, meditation och skogsbad – och sov i små trähus uppe i trädtopparna.",
        image: "reflection-retreat",
        alt: "Två ledare i ett lugnt samtal utomhus vid skogen",
      },
      sections: [
        {
          type: "prose",
          kicker: "Retreatet",
          heading: "Enkelhet, natur och närvaro.",
          body: [
            "Retreatet ägnas åt Yinyoga och mjuk My Spirit Yoga, ledd av Lovisa Mellgren, och varvas med reflektioner kring hur yogafilosofiska begrepp kan tillämpas i ledarskapet. All yoga och alla övningar hålls utomhus – i skogen och vid sjön.",
            "Vi samtalar på skogspromenader, lagar näringsrik mat tillsammans i uteköket och njuter av lugnet i naturen. I den rogivande miljön och enkelheten i stugorna får du tillfälle att upptäcka var du står – och hur du vill komma vidare.",
          ],
        },
        {
          type: "split",
          tone: "cream",
          image: "reflection-retreat",
          alt: "Ledare i samtal i skogsmiljö",
          kicker: "Shinrin-yoku",
          heading: "Vad är skogsbad?",
          body: [
            "Skogsbad kommer från japanskans shinrin-yoku – att ta in skogsatmosfären med alla sinnen. Det är en mycket långsam vandring på mjuka stigar, med guidade övningar som öppnar sinnena för att uppleva naturen på ett nytt sätt.",
            "Metoden växte fram i Japan på 1980-talet som ett svar på stressrelaterad ohälsa, och i dag finns ett sextiotal etablerade hälsoparker där. Att vistas i skogen på ett närvarande sätt sänker tempot och ger kroppen tid att återhämta sig.",
          ],
        },
        {
          type: "facts",
          kicker: "Upplägg",
          heading: "Praktisk information.",
          intro: "Så har retreatet varit upplagt. Datum, pris och detaljer för nästa tillfälle får du vid intresseanmälan.",
          items: [
            ["Plats", "Urnatur i Ödeshög, Östergötland"],
            ["Boende", "Enkla, handbyggda trähus och luftslott i trädtopparna – utan el, med kaminer och fotogenlampor"],
            ["Yoga", "Yinyoga och My Spirit Yoga utomhus, med meditation och avslappning"],
            ["Skogsbad", "Vägledda skogspromenader och skogsbad"],
            ["Mat", "Helpension med vegetarisk, näringsrik och närodlad mat som vi lagar tillsammans"],
            ["Grupp", "6–9 deltagare"],
          ],
        },
      ],
      related: ["anmalan-skogsbad", "retreat-sicilien", "retreat"],
      cta: { heading: "Vill du följa med ut i skogen?", text: "Anmäl ditt intresse så hör vi av oss med datum, pris och upplägg för nästa retreat.", href: "anmalan-skogsbad", label: "Anmäl intresse" },
    },

    "anmalan-skogsbad": {
      slug: "anmalan-skogsbad",
      name: "Anmälan – Yogaretreat och skogsbad",
      description: "Anmäl intresse för ProDigmas yogaretreat och skogsbad hos Urnatur.",
      hero: {
        kicker: "Intresseanmälan",
        title: "Anmäl intresse – yogaretreat och skogsbad.",
        lead: "Skicka en intresseanmälan så hör vi av oss med datum, pris och upplägg för nästa retreat.",
        tone: "forest",
      },
      sections: [{ type: "signup", retreat: "Yogaretreat och skogsbad", people: ["lovisa"] }],
      related: ["retreat-skogsbad", "retreat-sicilien", "retreat"],
      hideCta: true,
    },

    "anmalan-sicilien": {
      slug: "anmalan-sicilien",
      name: "Anmälan – Yogaretreat på Sicilien",
      description: "Anmäl intresse för ProDigmas yogaretreat för ledare på Sicilien.",
      hero: {
        kicker: "Intresseanmälan",
        title: "Anmäl intresse – yogaretreat på Sicilien.",
        lead: "Skicka en intresseanmälan så hör vi av oss med datum, pris och upplägg för nästa retreat.",
        tone: "sea",
      },
      sections: [{ type: "signup", retreat: "Yogaretreat på Sicilien", people: ["lovisa", "marianne"] }],
      related: ["retreat-sicilien", "retreat-skogsbad", "retreat"],
      hideCta: true,
    },
  },
};
