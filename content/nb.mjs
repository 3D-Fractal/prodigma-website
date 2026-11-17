// Norsk innhold (bokmål) for ProDigma. Samme struktur og samme side-id-er som sv.mjs.

const quotes = [
  ["Jeg kom hjem så fulladet med energi, som et solmodent granateple.", "Deltaker, retreat på Sicilia (oversatt fra svensk)"],
  ["Jeg fant tilbake til det som virkelig er meg, og det som er viktig for meg.", "Deltaker, retreat på Sicilia (oversatt fra svensk)"],
  ["Det var fantastisk å bare få lov til å være stille i perioder.", "Deltaker, retreat på Sicilia (oversatt fra svensk)"],
];

const yogaStats = {
  type: "stats",
  kicker: "Lederutvikling på yogamatten",
  heading: "Målbar effekt på stress, fokus og beslutninger.",
  items: [
    ["30 %", "lavere stress"],
    ["30 %", "høyere konsentrasjon"],
    ["25 %", "høyere kreativitet"],
    ["40 %", "mer effektiv ledergruppe"],
  ],
  note: "Gjennomsnitt etter ti uker, og deltakernes egen vurdering av ledergruppens effektivitet etter et åtte ukers kurs. Deltakerne vurderte også at de strategiske beslutningsprosessene ble 65 % bedre.",
};

export default {
  lang: "nb",
  hreflang: "nb",
  locale: "nb_NO",
  dir: "no",
  short: "NO",
  label: "Norsk",

  ui: {
    skip: "Hopp til innholdet",
    menu: "Meny",
    close: "Lukk",
    mainNav: "Hovedmeny",
    homeLabel: "ProDigma forside",
    tagline: "Nevroledelse & endring",
    langNav: "Velg språk",
    readMore: "Les mer",
    related: "Les videre",
    newTab: "åpnes i ny fane",
    email: "E-post",
    phone: "Telefon",
    footerAbout: "Ledelse, strategi og bærekraftig endring for ledelse og styre.",
    credit: "Nettsted av",
    siteName: "ProDigma",
    seaLabel: "Middelhavet",
    defaultCta: {
      heading: "Vil dere skape mer klarhet i neste viktige endring?",
      text: "Start med en uforpliktende samtale om hvor dere står og hvilken effekt dere trenger å se.",
      href: "kontakt",
      label: "Kontakt ProDigma",
    },
    signup: {
      kicker: "Slik melder du interesse",
      heading: "En e-post er nok.",
      steps: [
        ["Send en interessemelding.", "Knappen åpner en ferdig e-post i e-postprogrammet ditt – fyll inn navn, telefon og eventuelle spørsmål."],
        ["Vi tar kontakt.", "Du får dato, pris og opplegg så snart neste retreat er planlagt."],
        ["Plassen din bekreftes.", "Påmeldingen blir bindende og plassen garantert når påmeldingsavgiften er betalt."],
      ],
      button: "Send interessemelding",
      questions: "Spørsmål?",
      subject: "Interessemelding",
      body: (retreat) => `Hei!\n\nJeg vil melde interesse for ${retreat}.\n\nNavn:\nTelefon:\nØnsker om overnatting:\nSpørsmål:\n\nVennlig hilsen`,
    },
  },

  nav: [
    { label: "Hva vi gjør", id: "vad-vi-gor", match: ["vad-vi-gor", "tjansteomraden"] },
    { label: "Tilbud", id: "erbjudanden" },
    { label: "GreenLight MAP™", id: "greenlight-map" },
    { label: "Retreat", id: "retreat", match: ["retreat", "retreat-skogsbad", "retreat-sicilien", "anmalan-skogsbad", "anmalan-sicilien"] },
    { label: "Hvem vi er", id: "vilka-vi-ar" },
    { label: "Media", id: "media" },
    { label: "Kontakt", id: "kontakt", cta: true },
  ],

  footer: [
    ["Hva vi gjør", [["vad-vi-gor", "Hva vi gjør"], ["tjansteomraden", "Tjenesteområder"], ["erbjudanden", "Tilbud"], ["greenlight-map", "GreenLight MAP™"]]],
    ["Retreat", [["retreat", "Yogaretreat for ledere"], ["retreat-skogsbad", "Yogaretreat og skogsbad"], ["retreat-sicilien", "Yogaretreat på Sicilia"], ["anmalan-skogsbad", "Påmelding skogsbad"], ["anmalan-sicilien", "Påmelding Sicilia"]]],
    ["ProDigma", [["vilka-vi-ar", "Hvem vi er"], ["media", "Media"], ["kontakt", "Kontakt"]]],
  ],

  people: {
    lovisa: { role: "Daglig leder og grunnlegger, managementkonsulent" },
    marianne: { role: "Virksomhetsutvikler og vertinne på Sicilia" },
  },

  home: {
    title: "ProDigma | Ledelse, strategi og bærekraftig endring",
    description: "ProDigma hjelper ledelse og styre til tydeligere retning, bedre beslutninger og bærekraftig energi i endring – med strategi, nevroledelse og yoga.",
    hero: {
      eyebrow: "For ledelse og styre",
      title: "Tydeligere retning når endringen må lykkes.",
      lead: "ProDigma hjelper ledelse og styre med å samle retningen, redusere friksjon og skape beslutningskraft i endring – med strategi, nevroledelse, GreenLight MAP™ og Management by Yoga.",
      primary: "Start en samtale",
      secondary: "Se hva dere kan få på plass",
    },
    results: {
      kicker: "Kjernen i tilbudet",
      heading: "Klarere veivalg. Sterkere gjennomføring. Mer bærekraftig ledelse.",
      lead: "Når tempoet øker og veivalgene blir vanskeligere, trenger organisasjonen mer enn en plan. Den trenger felles forståelse, trygge arenaer for vanskelige spørsmål og ledere som kan ta kloke beslutninger også under press.",
      items: [
        ["Tydelig retning", "Et felles bilde av nåsituasjon, målbilde og prioriteringer, slik at styre, ledelse og organisasjon trekker i samme retning."],
        ["Bedre beslutninger", "Beslutningsmiljøer der stress, uklarhet og innarbeidede mønstre blir synlige før de styrer utfallet."],
        ["Tryggere endring", "Endringer som lar seg gjennomføre i hverdagen, med tydelige steg og mennesker som forstår hvorfor de er viktige."],
        ["Bærekraftig energi", "Mer uthvilt beslutningskraft, færre unødvendige stresskostnader og ledelse som holder også når presset øker."],
      ],
    },
    method: {
      kicker: "Arbeidsmåte",
      heading: "Forretningsforståelse med innsikt i hvordan mennesker fungerer.",
      lead: "ProDigma kombinerer strategi, nevroledelse og fasiliterte samtaler for å gjøre komplekse spørsmål forståelige, prioriterbare og mulige å handle på.",
      alt: "Ledere i en rolig strategisamtale nær naturen",
      caption: "Refleksjon som arbeidsmetode, ikke pause fra arbeidet.",
      panel: "Arbeidet starter ofte med å skape et trygt, men ambisiøst rom: rolig nok til å se mønstre, tydelig nok til å velge vei og konkret nok til at neste steg blir gjort.",
      steps: [
        ["Forstå nåsituasjonen", "Hvor oppstår friksjon, stress, uklarhet og beslutninger som ikke helt lander?"],
        ["Samle retningen", "Gjør målbilde, veivalg, risiko og ansvar synlige for dem som skal lede endringen."],
        ["Gjør det gjennomførbart", "Oversett innsikt til beslutninger, samtaler, vaner og oppfølging som merkes i organisasjonen."],
      ],
    },
    services: {
      kicker: "Tilbud",
      heading: "Flere innganger til samme mål: klarhet, tilstedeværelse og bedre beslutninger.",
      items: [
        ["Strategi & endring", "Strategi- og forretningsplanarbeid, second opinion, eierstyring, kulturreise, aktivitetsbasert arbeidsform og fasiliterte workshops som fører fremover.", "vad-vi-gor", "Utforsk området"],
        ["Stress & beslutningsevne", "GreenLight MAP™ analyserer stressdrivere på individ-, kultur- og organisasjonsnivå, slik at beslutningskraft, helse og struktur kan styrkes samtidig.", "greenlight-map", "Se GreenLight MAP™"],
        ["Management by Yoga", "Yogaretreat, skogsbad og lederutvikling på yogamatten der pust, stillhet og refleksjon blir verktøy for strategisk skarphet.", "retreat", "Se retreatene"],
      ],
    },
    founder: {
      kicker: "Møt grunnleggeren",
      heading: "Lovisa Mellgren – fra styrerommet til yogamatten.",
      body: [
        "Sivilingeniør med drøyt 20 år i ledende stillinger i private og kommunale selskaper, sist som markeds- og salgsdirektør. I dag coacher hun styrer og ledergrupper, loser virksomheter gjennom endring og bruker yoga og pust som et konkret verktøy for bedre beslutninger.",
        "Diplomert coach, sertifisert CTT Practitioner og yogalærer innen My Spirit Yoga og Yinyoga.",
      ],
      link: "Mer om oss og våre partnere",
    },
    press: {
      kicker: "Omtalt i",
      label: "I media",
      items: ["Göteborgs-Posten", "Ny Teknik", "Sveriges Radio", "Chef & Karriär", "Ingenjören"],
      link: "Les artiklene",
    },
    quote: {
      text: "Når mennesker er helt til stede i rommet, blir strategisamtalene skarpere og beslutningene bedre forankret.",
      sub: "Det er kjernen i ProDigmas egenart: management, hjerneforskning og yoga som praktisk verktøy for bedre resultater.",
    },
    contact: {
      kicker: "Neste steg",
      heading: "Vil dere skape mer klarhet i neste viktige endring?",
      text: "Start med en samtale om hvor dere står, hva som skurrer og hvilken effekt dere trenger å se i ledelse, styre eller organisasjon.",
    },
  },

  pages: {
    "vad-vi-gor": {
      slug: "hva-vi-gjor",
      name: "Hva vi gjør",
      description: "ProDigma støtter ledelse og styre i store endringer – med strategisk skarphet og kunnskap om hvordan hjernen fungerer under press.",
      hero: {
        kicker: "Hva vi gjør",
        title: "Endring som mennesker forstår og orker å gjennomføre.",
        lead: "ProDigma støtter ledelse og styre i store endringer – med strategisk skarphet og kunnskap om hvordan hjernen fungerer under press.",
        image: "strategy-map",
        alt: "Ledergruppe som arbeider rundt et strategikart",
      },
      sections: [
        {
          type: "prose",
          kicker: "Nevroledelse",
          heading: "Et litt annerledes rådgivningsselskap.",
          body: [
            "ProDigma arbeider ut fra et nevroledelsesperspektiv. Det betyr at vi bruker oppdatert forskning om hjernen – hvordan vi tar beslutninger, hvordan stress påvirker tenkningen og hva som får mennesker til å endre atferd – for at endringsarbeidet skal gi reelle resultater.",
            "Vi kombinerer klassisk strategi- og forretningsplanarbeid med refleksjon, tilstedeværelse og tydelige arenaer for oppfølging. Det gir beslutninger som er bedre forankret og endringer som holder i hverdagen.",
          ],
        },
        {
          type: "grid",
          tone: "cream",
          kicker: "Der vi ofte starter",
          heading: "Fire spørsmål som fortjener tid.",
          items: [
            ["Riktig retning", "Når tok dere sist tid til å reflektere over mål og visjon? I dagens endringstakt trengs faste arenaer for å prøve den strategiske retningen."],
            ["Evaluering", "Hvordan gikk den siste endringen? Vi hjelper dere med å følge opp resultatet og lage en handlingsplan for det som ennå ikke har skjedd."],
            ["Stress og beslutningskraft", "Stressede hjerner tar dårligere beslutninger – og det koster. GreenLight MAP™ gjør stressdriverne synlige og håndterbare."],
            ["Bærekraftig og digital fremtid", "En ny generasjon stiller nye krav som kunder og medarbeidere. Hvordan ser en sirkulær og digital strategi ut for akkurat deres virksomhet?"],
          ],
        },
        {
          type: "steps",
          kicker: "Arbeidsmåte",
          heading: "Fra innsikt til handling.",
          items: [
            ["Forstå nåsituasjonen", "Samtaler, intervjuer og målinger som viser hvor friksjon, stress og uklarhet oppstår."],
            ["Samle retningen", "Fasiliterte workshops der ledelse og styre lander felles veivalg og prioriteringer."],
            ["Gjør det gjennomførbart", "En konkret handlingsplan med tydelig ansvar, arenaer for refleksjon og oppfølging over tid."],
          ],
        },
        {
          type: "split",
          image: "reflection-retreat",
          alt: "To ledere i en rolig samtale utendørs nær skogen",
          kicker: "Management by Yoga",
          heading: "Stillhet som strategisk verktøy.",
          body: [
            "Ledergrupper blir merkbart mer fokuserte når strategidiskusjoner veksles med korte øvelser i pust og tilstedeværelse. Når stresset slipper, får vi tilgang til hele vår kapasitet – og samtalene blir skarpere.",
            "ProDigma har utviklet visjoner, verdigrunnlag og forretningsplaner med en yogisk tilnærming, fra en enkelt workshop til lengre oppdrag.",
          ],
          link: ["erbjudanden", "Se alle tilbud"],
        },
      ],
      related: ["erbjudanden", "greenlight-map", "tjansteomraden"],
    },

    tjansteomraden: {
      slug: "tjenesteomrader",
      name: "Tjenesteområder",
      description: "Strategi og endring, stress og beslutningsevne, Management by Yoga – tre veier til klarhet, tilstedeværelse og bedre beslutninger.",
      hero: {
        kicker: "Tjenesteområder",
        title: "Tre veier til samme mål.",
        lead: "Klarhet, tilstedeværelse og bedre beslutninger – uansett om dere starter i strategien, i stresset eller i stillheten.",
        image: "leadership-workshop",
        alt: "Ledergruppe i samtale rundt et bord",
      },
      sections: [
        {
          type: "features",
          items: [
            {
              image: "strategy-map",
              alt: "Ledergruppe som arbeider med et strategikart",
              kicker: "01 · Strategi & endring",
              heading: "Når retningen må bli tydelig.",
              text: "Strategi- og forretningsplanarbeid, bærekraftig og digital strategi, eierstyring i kommunale selskaper, kulturreiser og aktivitetsbasert arbeidsform.",
              link: ["erbjudanden", "Se tilbud"],
            },
            {
              image: "stress-decision-map",
              alt: "To ledere som går gjennom en kartlegging",
              kicker: "02 · Stress & beslutningsevne",
              heading: "Når presset påvirker beslutningene.",
              text: "GreenLight MAP™ analyserer stressdrivere på individ-, kultur- og organisasjonsnivå og gir en felles handlingsplan for bærekraftige prestasjoner.",
              link: ["greenlight-map", "Om GreenLight MAP™"],
            },
            {
              image: "reflection-retreat",
              alt: "Ledere i rolig samtale i naturen",
              kicker: "03 · Management by Yoga",
              heading: "Når dere må lande for å se klart.",
              text: "Strategidager med yoga, lederutvikling på yogamatten og retreater for ledere – i skogen eller ved Middelhavet.",
              link: ["retreat", "Om retreatene"],
            },
          ],
        },
        {
          type: "grid",
          tone: "cream",
          kicker: "Vi arbeider med",
          heading: "Dem som bærer ansvaret for endringen.",
          items: [
            ["Ledergrupper", "Som trenger å samle retningen, prioritere og lede gjennom endring sammen."],
            ["Styrer", "Som ønsker inspirasjon, en second opinion eller støtte i strategiske veivalg."],
            ["Eiere og kommunale selskaper", "Som vil styrke eierstyringen og skape mer verdi for innbyggere og virksomhet."],
            ["Enkeltledere", "Som trenger perspektiv, coaching eller tid til å finne tilbake til sitt indre kompass."],
          ],
        },
      ],
      related: ["vad-vi-gor", "vilka-vi-ar", "kontakt"],
    },

    erbjudanden: {
      slug: "tilbud",
      name: "Tilbud",
      description: "Strategi og forretningsplanarbeid, organisasjon og ledelse, kulturreiser, fasilitering og Management by Yoga.",
      hero: {
        kicker: "Tilbud",
        title: "Støtte når endringen er stor.",
        lead: "Strategi og forretningsplanarbeid, organisasjon og ledelse – fra en enkelt workshop til lengre oppdrag.",
        image: "strategy-map",
        alt: "Ledergruppe som arbeider rundt et strategikart",
      },
      sections: [
        {
          type: "checklist",
          kicker: "Kjenner dere dere igjen?",
          heading: "Vanlige situasjoner der vi kommer inn.",
          intro: "De fleste oppdrag starter med et konkret spørsmål. Her er noen av de vanligste.",
          items: [
            "Dere trenger en second opinion på den eksisterende forretningsplanen.",
            "Dere skal legge en helt ny retning og ønsker konkret veiledning i strategi- og forretningsplanprosessen.",
            "Dere står foran en større kulturreise og vet ikke helt hvordan dere skal starte.",
            "Dere skal innføre – eller evaluere – en aktivitetsbasert arbeidsform.",
            "Dere vil kartlegge og forebygge stress i organisasjonen eller arbeidsgruppen.",
            "Dere har gjennomført en stor endring og trenger å evaluere den og lage en ny handlingsplan.",
            "Dere vil vite mer om god eierstyring i kommunalt og regionalt eide selskaper.",
            "Dere ønsker det siste om digitalisering og nye generasjoners krav på neste styreseminar.",
          ],
        },
        {
          type: "offers",
          tone: "cream",
          kicker: "Tilbud",
          heading: "Dette kan vi hjelpe dere med.",
          groups: [
            ["Strategi og styring", [
              ["Strategi- og forretningsplanarbeid", "En ny visjon eller strategi i et oversiktlig format som er enkelt å gjennomføre og følge opp."],
              ["Kommunalt og regionalt eide selskaper", "Kartlegging av hvordan eierstyringsprinsippene praktiseres i dag, og en handlingsplan for økt konsernnytte og verdi for innbyggerne."],
              ["Bærekraftsstrategi", "Et ønsket målbilde og en gjennomarbeidet strategi basert på FNs bærekraftsmål eller Economy for the Common Good – og hva bærekraftig ledelse betyr hos dere."],
              ["Digital strategi", "Visjon og målbilde med et helhetsperspektiv på digitaliseringens muligheter og påvirkning på virksomheten."],
            ]],
            ["Organisasjon og kultur", [
              ["Organisasjon og ledelse", "Veiledning i endringsreiser for enkeltledere, ledergrupper eller hele organisasjonen – nye verdier, stressmestring eller coachende ledelse."],
              ["Kulturreise med CTT", "Sterke verdier er et konkurransefortrinn. En måling med Cultural Transformation Tools viser hvilke verdier dere har i dag og hvilke dere ønsker."],
              ["Aktivitetsbasert arbeidsform", "Konkrete råd ved innføring, eller evaluering av en arbeidsform som allerede er på plass."],
              ["Stressforebygging med GreenLight MAP™", "En kultur der signalene oppdages i tide, og der dere aktivt bygger en sunn, verdibasert og høytpresterende organisasjon."],
            ]],
            ["Møter og inspirasjon", [
              ["Fasilitering av workshops og møter", "Møter der energi og kreativitet frigjøres for å nå målet – og der beslutningene faktisk blir tatt."],
              ["Foredrag", "Inspirasjon ved oppstart av strategiarbeid i ledergruppen eller på styreseminaret."],
              ["Strategidager med yoga", "Et foredrag om hvordan yoga, meditasjon og mindfulness skaper bedre ledere, en kort avslappende økt – og deretter strategidiskusjoner med ny skarphet."],
              ["Lederutvikling på yogamatten", "Refleksjon rundt hvordan yogafilosofiske begreper kan brukes i moderne ledelse, etterfulgt av en time med rolig My Spirit Yoga. Skreddersys for hver gruppe."],
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
      description: "GreenLight MAP™ – Green Light Mindful Antistress Program. Stressforebyggende arbeid som styrker helse, kultur og resultater.",
      hero: {
        kicker: "GreenLight MAP™",
        title: "Stressforebyggende arbeid som styrker både helse og resultater.",
        lead: "Green Light Mindful Antistress Program – et helhetsgrep om individ, kultur og struktur.",
        image: "stress-decision-map",
        alt: "To ledere som går gjennom en kartlegging av stressfaktorer",
      },
      sections: [
        {
          type: "prose",
          kicker: "Hvorfor",
          heading: "Stress er en kostnad som sjelden synes.",
          body: [
            "Det finnes overraskende lite kunnskap om stress og stressrelaterte kostnader i næringslivet. Kanskje fordi lederne selv er for stresset til å merke at ikke alt fungerer optimalt.",
            "Stress påvirker vår kognitive og kreative evne. Beslutninger tatt av stressede hjerner blir dårligere – og det koster organisasjonen store summer. GreenLight MAP™ gjør det synlig, og mulig å endre.",
          ],
          aside: "Programmet kombinerer østlige mentale metoder med moderne vestlig ledelse – og ser helse, bedriftskultur og struktur som en samvirkende helhet.",
        },
        {
          type: "steps",
          tone: "cream",
          kicker: "Metoden",
          heading: "En grønn tråd fra ord til handling.",
          items: [
            ["Analyser nåsituasjonen", "Vi måler kulturen og faktorene som driver stress og kostnader i akkurat deres virksomhet."],
            ["Definer ønsket situasjon", "Sammen beskriver vi kulturen og forutsetningene dere vil skape."],
            ["Lag deres MAP", "En handlingsplan for individet, avdelingen og hele organisasjonen – med skreddersydde metoder og verktøy."],
            ["Følg opp", "Vi følger gruppens opplevde stressnivå og støtter lederne i å holde fokus på kulturendringen."],
          ],
        },
        {
          type: "split",
          image: "stress-decision-map",
          alt: "Ledere som diskuterer en kartlegging ved et bord",
          kicker: "Innhold",
          heading: "Verktøy som kan brukes hver dag.",
          body: [
            "Programmet gir dere et felles språk og en felles måte å skape en langsiktig bærekraftig kultur på. Hver deltaker får også individuell coaching for å sette personlige mål, metoder og oppfølging.",
          ],
          list: [
            "Måling av bedriftens kultur, inkludert stressfaktorer",
            "Metoder for mer fokus og motivasjon",
            "Metoder for å redusere stressreaksjoner",
            "Mindfulnessteknikker og pusteøvelser",
            "Mentale modeller for hverdagen",
            "Oppfølging av gruppens opplevde stressnivå",
          ],
        },
      ],
      related: ["erbjudanden", "vad-vi-gor", "kontakt"],
    },

    "vilka-vi-ar": {
      slug: "hvem-vi-er",
      name: "Hvem vi er",
      description: "Lovisa Mellgren, Marianne Fröberg og ProDigmas nettverk av samarbeidspartnere innen coaching, styrearbeid, digitalisering og bærekraft.",
      hero: {
        kicker: "Hvem vi er",
        title: "Erfaring fra styrerommet – og fra yogamatten.",
        lead: "ProDigma kombinerer lang erfaring fra ledelse og strategi med nevroledelse, coaching og yoga.",
        image: "consultant-network",
        alt: "Gruppe av ledere i en avslappet samtale",
      },
      sections: [
        {
          type: "profile",
          person: "lovisa",
          initials: "LM",
          heading: "Lovisa Mellgren",
          role: "Daglig leder, managementkonsulent og grunnlegger av ProDigma AB",
          body: [
            "Lovisa har hatt ledende stillinger innen markedsføring og salg, og i selskapsovergripende roller, i både private og kommunale selskaper i drøyt 20 år – sist som markeds- og salgsdirektør i Göteborg Energi. Hun har også erfaring fra flere styreverv.",
            "Hun har solid erfaring med strategisk arbeid, forretningsplanarbeid, omorganiseringer og endringsarbeid. I dag er yoga og pust et naturlig verktøy i arbeidet hennes med ledergrupper og styrer.",
          ],
          credentials: ["Sivilingeniør", "Diplomert coach", "Sertifisert CTT Practitioner", "Yogalærer My Spirit Yoga (500 t)", "Yinyogalærer", "Pusteinstruktør"],
        },
        {
          type: "profile",
          person: "marianne",
          initials: "MF",
          reverse: true,
          heading: "Marianne Fröberg",
          role: "Internasjonal virksomhets- og konseptutvikler, business coach",
          body: [
            "Marianne har lang erfaring med å bygge opp selskaper, organisasjoner, forretningsstrategier og prosesser – og bygger i dag fremtidens forretningsmodeller basert på sirkulær økonomi. Som medeier i flere mindre selskaper hjelper hun mennesker å vokse med organisasjonen og møte strategiske endringer.",
            "Hun har arbeidet internasjonalt i 18 år, bor i Milano og er vertinne for ProDigmas retreat på Sicilia.",
          ],
          credentials: ["Sivilingeniør, industriell økonomi", "Diplomert coach"],
        },
        {
          type: "people",
          tone: "cream",
          kicker: "Samarbeidspartnere",
          heading: "Riktig kompetanse når oppdraget krever det.",
          intro: "ProDigma samarbeider med noen av de skarpeste fagpersonene i Sverige innen coaching, kommunikasjon, digitalisering, styrearbeid og finansiering av vekstselskaper – alle med samme verdigrunnlag.",
          items: [
            ["Anja Lindberg", "Coachutbildning Sverige AB", "PCC- og ICC-sertifisert coach, KAT-terapeut og master i organisasjonspsykologi. Forfatter av Livbåt för ledare og Coachboken."],
            ["Susanne Olofsson", "Susanne Olofsson AB", "Lang erfaring med styrearbeid, rådgivning og finansiering av vekstselskaper. Fokuserer på endring og revitalisering av små og mellomstore bedrifter."],
            ["Thomas Pedersén", "Trignite", "Virksomhetsutvikling og digitalisering i over 13 år – supply chain, strategi, digitale arbeidsplasser og datadrevet analyse."],
            ["Emma Dalväg", "Coest", "Strategisk bærekraftsarbeid siden 2010 og en av de første i Sverige som arbeidet med sirkulær økonomi og industriell symbiose."],
            ["Elif Koman André", "Koman Kompetens", "Bærekraftssjef i kommunale ledelser og konsernselskaper siden 2007. Sertifisert i GRI, styrearbeid og kvalitetsarbeid."],
          ],
        },
        {
          type: "partner",
          kicker: "Strategisk IT-rådgiver & digital partner",
          heading: "3D Fractal",
          body: [
            "3D Fractal er ProDigmas strategiske IT-rådgiver og digitale partner. Det norske produkt- og investeringsselskapet bygger digitale produkter, nisjeplattformer og innovasjonskonsepter – og hjelper utvalgte partnere med å gjøre idéer om til nettsteder, prototyper og strukturerte digitale løsninger.",
            "Bak ligger lang erfaring fra produktledelse, virksomhetsarkitektur, ERP, systemintegrasjon og digital transformasjon. For ProDigma står 3D Fractal for den digitale strategien og har utviklet dette nettstedet – med fokus på klarhet, produkttenkning og langsiktig verdi.",
          ],
          tags: ["Strategisk IT-rådgivning", "Digital strategi", "Web & innovasjon", "Norge"],
          url: "https://3dfractal.no/",
          linkLabel: "Besøk 3dfractal.no",
        },
      ],
      related: ["media", "erbjudanden", "kontakt"],
    },

    media: {
      slug: "media",
      name: "Media",
      description: "Artikler og intervjuer med Lovisa Mellgren om yoga som verktøy i leder- og strategiutvikling.",
      hero: {
        kicker: "Media",
        title: "Management by Yoga i media.",
        lead: "Artikler og intervjuer om hvordan yoga, pust og stillhet blir verktøy i leder- og strategiutvikling.",
        image: "media-insights",
        alt: "Skrivebord med notatbok, mikrofon og bærbar datamaskin",
      },
      sections: [
        {
          type: "prose",
          kicker: "Perspektiv",
          heading: "Full tilstedeværelse gir skarpere strategisamtaler.",
          body: [
            "Det er ikke nok at en ledergruppe er fysisk til stede når strategier skal bearbeides. En enkel måte å oppnå full tilstedeværelse på er å starte med lette pusteøvelser og et øyeblikk med stillhet – etterpå har gruppen et helt annet fokus.",
            "Stress blokkerer de delene av hjernen vi trenger for å fungere som ledere. Om det er yoga, mindfulness eller skogturer som gir oss den indre roen, betyr mindre. Det viktige er at vi gir oss selv sjansen.",
          ],
          aside: "Et av Lovisas tips: start med pusteøvelser. Tjue minutter om dagen gir snart en tydelig effekt.",
        },
        {
          type: "checklist",
          tone: "cream",
          kicker: "Åtte effekter",
          heading: "Hva yoga kan gi deg som leder.",
          items: [
            "Redusert stress og økt stressmestring",
            "Bedre konsentrasjon",
            "Beslutninger som er bedre forankret i dine grunnverdier",
            "Tydeligere kommunikasjon",
            "Bedre fysisk og psykisk restitusjon",
            "Sterkere immunforsvar",
            "Økt empatisk evne",
            "Ro og fokus også under press",
          ],
        },
        {
          type: "press",
          kicker: "I media",
          heading: "Artikler og intervjuer.",
          intro: "Artiklene er publisert på svensk.",
          items: [
            ["Sveriges Radio P4 Sjuhärad", "August 2021", "Yoga skapar bättre chefer", ""],
            ["Chef & Karriär", "Mai 2020", "Reportasje om yoga i ledelse", ""],
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
      description: "Kontakt ProDigma for en uforpliktende samtale om strategi, endring, GreenLight MAP™ eller retreat.",
      hero: {
        kicker: "Kontakt",
        title: "Start med en samtale.",
        lead: "Fortell hvor dere står og hva som må skje. Den første samtalen er uforpliktende.",
        image: "contact-corner",
        alt: "Rolig møterom med rundt bord, kaffekopper og notatbok",
      },
      sections: [
        {
          type: "contacts",
          kicker: "Kontaktpersoner",
          heading: "Ta kontakt direkte.",
          items: [
            ["lovisa", "Strategi, endring, GreenLight MAP™, foredrag og retreat."],
            ["marianne", "Retreat på Sicilia og internasjonale oppdrag."],
          ],
        },
        {
          type: "steps",
          tone: "cream",
          kicker: "Slik foregår det",
          heading: "Enkelt å komme i gang.",
          items: [
            ["En første samtale", "Vi snakker om nåsituasjonen, hva som skurrer og hvilken effekt dere vil se i ledelse, styre eller organisasjon."],
            ["Et forslag", "Du får et forslag til opplegg – fra en enkelt workshop eller et foredrag til et lengre oppdrag."],
            ["Vi setter i gang", "Arbeidet tilpasses deres virksomhet, deres tempo og beslutningene som må tas."],
          ],
        },
      ],
      related: ["erbjudanden", "vilka-vi-ar", "retreat"],
      hideCta: true,
    },

    retreat: {
      slug: "retreat",
      name: "Yogaretreat for ledere",
      description: "Yogaretreat for ledere på Sicilia og i skogen hos Urnatur i Sverige – restitusjon, refleksjon og nytt perspektiv på ledelse.",
      hero: {
        kicker: "Yogaretreat for ledere",
        title: "Land, hent deg inn og se klart igjen.",
        lead: "Retreater der yoga, natur og refleksjon gir ledere tid til å finne tilbake til sitt indre kompass.",
        image: "reflection-retreat",
        alt: "To ledere i en rolig samtale utendørs ved skogen",
      },
      sections: [
        {
          type: "prose",
          kicker: "Hvorfor retreat",
          heading: "Tid som sjelden får plass i hverdagen.",
          body: [
            "Verden rundt oss blir stadig mer kompleks, og tiden til å reflektere over hva man vil bruke kreftene sine på blir stadig mindre. Et retreat gir rom til å stoppe opp, fylle på med energi og se på lederskapet med nye øyne.",
            "Mange deltakere forteller etterpå at de har fått kropp og sjel på samme sted – at de har landet, opplevd en ny start og fått ny kraft til å utøve lederskapet sitt.",
          ],
        },
        {
          type: "retreats",
          tone: "cream",
          kicker: "To miljøer",
          heading: "Velg ditt retreat.",
          items: [
            {
              id: "retreat-sicilien",
              tone: "sea",
              kicker: "Sicilia · Høst",
              heading: "Yogaretreat på Sicilia",
              text: "Myk yoga på takterrassen med utsikt over Middelhavet, ayurvedisk mat og turer langs kysten. Villa med basseng, ca. 100 meter fra stranden.",
            },
            {
              id: "retreat-skogsbad",
              image: "reflection-retreat",
              alt: "Ledere i samtale i naturen",
              kicker: "Östergötland, Sverige · Vår",
              heading: "Yogaretreat og skogsbad",
              text: "Yinyoga og My Spirit Yoga i skogen og ved sjøen, skogsbad og overnatting i håndbygde trehus oppe i tretoppene hos Urnatur.",
            },
          ],
        },
        {
          type: "checklist",
          kicker: "Felles for retreatene",
          heading: "Dette gir vi deg.",
          items: [
            "Myk og avslappende My Spirit Yoga og Yinyoga, ledet av Lovisa Mellgren",
            "Refleksjon rundt hvordan yogafilosofiske begreper kan brukes i ledelse",
            "Næringsrik, vegetarisk og kortreist mat",
            "Tid i stillhet, natur og ro",
            "En liten gruppe med ledere fra ulike bransjer",
            "Rom til å oppdage hvor du står – og hvordan du vil gå videre",
          ],
        },
        { type: "quotes", tone: "forest", items: quotes },
      ],
      related: ["retreat-sicilien", "retreat-skogsbad", "vilka-vi-ar"],
      cta: { heading: "Vil du være med på neste retreat?", text: "Ingen datoer er satt ennå. Meld interesse, så tar vi kontakt når neste retreat planlegges.", href: "anmalan-sicilien", label: "Meld interesse" },
    },

    "retreat-sicilien": {
      slug: "retreat-sicilia",
      name: "Yogaretreat på Sicilia",
      description: "Yogaretreat for ledere i Alcamo Marina på Sicilia – yoga, refleksjon, ayurvedisk mat og Middelhavet.",
      hero: {
        kicker: "Retreat · Sicilia",
        title: "Yogaretreat for ledere på Sicilia.",
        lead: "Tid bare for deg – til å være, fylle på med energi og lande i bevissthet ved Middelhavet.",
        tone: "sea",
      },
      sections: [
        {
          type: "prose",
          kicker: "Retreatet",
          heading: "Stillhet, varme og nye perspektiver.",
          body: [
            "Retreatet er viet myk og avslappende My Spirit Yoga, ledet av yogalærer og managementkonsulent Lovisa Mellgren. Øktene veksles med refleksjoner rundt hvordan yogafilosofiske begreper kan brukes i ledelse og for å utvikle eget potensial.",
            "Vi praktiserer yoga og mindfulness på takterrassen med utsikt over Middelhavet, samtaler ved bassenget og tilbringer tid på stranden. Samtidig får du anledning til å oppdage hvor du står i livet og som leder – og hvordan du vil gå videre.",
          ],
          list: [
            "Tillat deg selv å bare være og finne stillhet",
            "Lær å lytte til ditt indre kompass",
            "Få energi og inspirasjon til å utvikle lederskapet ditt",
            "Kjenn forskjellen i kroppen med rensende ayurvedisk mat",
            "Nyt Middelhavet og milelange strender",
          ],
        },
        {
          type: "facts",
          tone: "cream",
          kicker: "Opplegg",
          heading: "Praktisk informasjon.",
          intro: "Slik har retreatet vært lagt opp. Dato, pris og detaljer for neste gang får du ved interessemelding.",
          items: [
            ["Sted", "Alcamo Marina, ca. 30 minutter fra Palermo"],
            ["Overnatting", "Mariannes nybygde villa med hage, basseng og takterrasser – ca. 100 meter til stranden"],
            ["Yoga", "Ca. tre økter per dag med meditasjon og lederutvikling"],
            ["Mat", "Helpensjon med vegetarisk, næringsrik og kortreist mat, laget av en ayurvedisk kokk"],
            ["Utflukter", "Tur i et naturreservat ved havet og besøk i en olivenlund og frukthage"],
            ["Også mulig", "Individuell coaching og behandlinger"],
            ["Gruppe", "6–10 deltakere"],
            ["Reise", "Fly til Palermo bestiller du selv, felles transport er inkludert"],
          ],
        },
        { type: "quotes", tone: "forest", items: quotes },
      ],
      related: ["anmalan-sicilien", "retreat-skogsbad", "retreat"],
      cta: { heading: "Hjertelig velkommen, hilser Lovisa og Marianne.", text: "Meld interesse, så tar vi kontakt med dato, pris og opplegg for neste retreat.", href: "anmalan-sicilien", label: "Meld interesse" },
    },

    "retreat-skogsbad": {
      slug: "retreat-skogsbad",
      name: "Yogaretreat og skogsbad",
      description: "Yogaretreat og skogsbad hos Urnatur i Ödeshög, Sverige – yoga utendørs, skogsbad og overnatting i håndbygde trehus.",
      hero: {
        kicker: "Retreat · Skogsbad",
        title: "Yogaretreat og skogsbad.",
        lead: "Møt våren i skogen med yoga, meditasjon og skogsbad – og sov i små trehus oppe i tretoppene.",
        image: "reflection-retreat",
        alt: "To ledere i en rolig samtale utendørs ved skogen",
      },
      sections: [
        {
          type: "prose",
          kicker: "Retreatet",
          heading: "Enkelhet, natur og tilstedeværelse.",
          body: [
            "Retreatet er viet Yinyoga og myk My Spirit Yoga, ledet av Lovisa Mellgren, og veksles med refleksjoner rundt hvordan yogafilosofiske begreper kan brukes i ledelse. All yoga og alle øvelser foregår utendørs – i skogen og ved sjøen.",
            "Vi samtaler på skogturer, lager næringsrik mat sammen på uteskjøkkenet og nyter roen i naturen. I de rolige omgivelsene og enkelheten i hyttene får du anledning til å oppdage hvor du står – og hvordan du vil gå videre.",
          ],
        },
        {
          type: "split",
          tone: "cream",
          image: "reflection-retreat",
          alt: "Ledere i samtale i skogsmiljø",
          kicker: "Shinrin-yoku",
          heading: "Hva er skogsbad?",
          body: [
            "Skogsbad kommer fra japanske shinrin-yoku – å ta inn skogsatmosfæren med alle sanser. Det er en svært langsom vandring på myke stier, med veiledede øvelser som åpner sansene for å oppleve naturen på en ny måte.",
            "Metoden vokste frem i Japan på 1980-tallet som et svar på stressrelatert sykdom, og i dag finnes rundt seksti etablerte helseparker der. Å være i skogen på en tilstedeværende måte senker tempoet og gir kroppen tid til å hente seg inn.",
          ],
        },
        {
          type: "facts",
          kicker: "Opplegg",
          heading: "Praktisk informasjon.",
          intro: "Slik har retreatet vært lagt opp. Dato, pris og detaljer for neste gang får du ved interessemelding.",
          items: [
            ["Sted", "Urnatur i Ödeshög, Östergötland i Sverige"],
            ["Overnatting", "Enkle, håndbygde trehus og «luftslott» i tretoppene – uten strøm, med ovner og parafinlamper"],
            ["Yoga", "Yinyoga og My Spirit Yoga utendørs, med meditasjon og avspenning"],
            ["Skogsbad", "Veiledede skogturer og skogsbad"],
            ["Mat", "Helpensjon med vegetarisk, næringsrik og kortreist mat som vi lager sammen"],
            ["Gruppe", "6–9 deltakere"],
          ],
        },
      ],
      related: ["anmalan-skogsbad", "retreat-sicilien", "retreat"],
      cta: { heading: "Vil du bli med ut i skogen?", text: "Meld interesse, så tar vi kontakt med dato, pris og opplegg for neste retreat.", href: "anmalan-skogsbad", label: "Meld interesse" },
    },

    "anmalan-skogsbad": {
      slug: "pamelding-skogsbad",
      name: "Påmelding – Yogaretreat og skogsbad",
      description: "Meld interesse for ProDigmas yogaretreat og skogsbad hos Urnatur.",
      hero: {
        kicker: "Interessemelding",
        title: "Meld interesse – yogaretreat og skogsbad.",
        lead: "Send en interessemelding, så tar vi kontakt med dato, pris og opplegg for neste retreat.",
        tone: "forest",
      },
      sections: [{ type: "signup", retreat: "Yogaretreat og skogsbad", people: ["lovisa"] }],
      related: ["retreat-skogsbad", "retreat-sicilien", "retreat"],
      hideCta: true,
    },

    "anmalan-sicilien": {
      slug: "pamelding-sicilia",
      name: "Påmelding – Yogaretreat på Sicilia",
      description: "Meld interesse for ProDigmas yogaretreat for ledere på Sicilia.",
      hero: {
        kicker: "Interessemelding",
        title: "Meld interesse – yogaretreat på Sicilia.",
        lead: "Send en interessemelding, så tar vi kontakt med dato, pris og opplegg for neste retreat.",
        tone: "sea",
      },
      sections: [{ type: "signup", retreat: "Yogaretreat på Sicilia", people: ["lovisa", "marianne"] }],
      related: ["retreat-sicilien", "retreat-skogsbad", "retreat"],
      hideCta: true,
    },
  },
};
