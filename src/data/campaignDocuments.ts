// Client-supplied October 8, 2026 documents. Wording and emphasis are preserved.
// HTML is escaped document text with only strong, em, and u formatting tags.
export interface CampaignParagraph { text: string; html: string; cite?: string; }
export interface CampaignFactSection { title: string; paragraphs: CampaignParagraph[]; }
export interface CampaignFaq { id: string; question: string; paragraphs: CampaignParagraph[]; }
export const paragraphText = (paragraphs: CampaignParagraph[]) => paragraphs.map(p => p.text).join(' ');

export const factSheetSections: CampaignFactSection[] = [
  {
    "title": "We Support Pasadena’s Firefighters. We Oppose an Unfair Tax.",
    "paragraphs": [
      {
        "text": "Pasadena’s firefighters and paramedics deserve strong support. They respond to every call, from a heart attack on Colorado Boulevard to a brush fire in the foothills. Emergency services protect the entire community. Measure PFD is the WRONG solution. City Hall wants a 19-cent-per-square-foot parcel tax, locked in for 14 years, to generate about $22.1 million a year. A typical 1,600-square-foot home would pay about $304 a year, or $4,256 before the tax expires. A 20,000-square-foot apartment building would owe about $3,800 a year. Supporting firefighters does not require approving every tax.",
        "html": "Pasadena’s firefighters and paramedics deserve strong support. They respond to every call, from a heart attack on Colorado Boulevard to a brush fire in the foothills. <strong>Emergency services protect the entire community.</strong> <strong>Measure PFD </strong><strong>i</strong><strong>s the WRONG solution.</strong> City Hall wants a 19-cent-per-square-foot parcel tax, locked in for 14 years, to generate about $22.1 million a year. <strong>A typical 1,600-square-foot home would pay about $304 a year, or $4,256 before the tax expires.</strong> A 20,000-square-foot apartment building would owe about $3,800 a year. Supporting firefighters does not require approving every tax."
      }
    ]
  },
  {
    "title": "Everyone Relies on Firefighters. Only Property Owners Pay.",
    "paragraphs": [
      {
        "text": "Firefighters and paramedics serve homeowners and renters, workers and commuters, tourists, Rose Bowl crowds, and people experiencing homelessness. Measure PFD sends the bill to one group: property owners. Square footage has nothing to do with who calls 911. Emergency medical calls, not building fires, account for most Fire Department responses. In 2021, the Department answered more than 17,000 calls, of which more than 13,000 were medical. A bigger building does not mean more 911 calls. A citywide service deserves a citywide, fairer funding plan.",
        "html": "<strong>Firefighters and paramedics serve homeowners and renters, workers and commuters, tourists, Rose Bowl</strong> <strong>crowds</strong><strong>,</strong><strong> and people experiencing homelessness.</strong> <u><em><strong>Measure PFD sends the bill to one group: property owners.</strong></em></u> Square footage has nothing to do with who calls 911. Emergency medical calls, not building fires, account for most Fire Department responses. In 2021, the Department answered more than 17,000 calls, of which more than 13,000 were medical. A bigger building does not mean more 911 calls. A citywide service deserves a citywide, fairer funding plan."
      }
    ]
  },
  {
    "title": "A City That Keeps Getting More Expensive",
    "paragraphs": [
      {
        "text": "Pasadena families already face some of the country's highest housing costs. Insurance, utilities, groceries, and property taxes are rising faster than paychecks. Voters have stepped up before. Pasadena approved parcel taxes for the Central Library and the school district. City and school measures since 2020 already add more than $1,700 in new taxes for many. On October 1, a half-cent county sales tax hike, passed by L.A. County voters in June, reaches every checkout counter. Politicians talk about affordability but pass policies and taxes that make Pasadena less affordable. Measure PFD piles on. Enough is enough.",
        "html": "Pasadena families already face some of the country&#x27;s highest housing costs. Insurance, utilities, groceries, and property taxes are rising faster than paychecks. Voters have stepped up before. Pasadena approved parcel taxes for the Central Library and the school district. <strong>City and school measures since 2020 already add more than $1,700 in new taxes</strong><strong> for many</strong><strong>.</strong> On October 1, a half-cent county sales tax hike, passed by L.A. County voters in June, reaches every checkout counter. Politicians talk about affordability but pass policies and taxes that make Pasadena less affordable. Measure PFD piles on. Enough is enough."
      }
    ]
  },
  {
    "title": "The Forgotten Middle Pays the Most",
    "paragraphs": [
      {
        "text": "For wealthy homeowners, $304 a year is a rounding error. For a retiree on a fixed income, a young family stretching to cover a mortgage, or a longtime homeowner watching every bill climb, Measure PFD can mean the difference between staying in Pasadena and getting priced out. These neighbors earn too much to qualify for assistance and too little to absorb another tax increase. Only qualifying low-income seniors receive an exemption. Apartment properties, small housing providers, businesses, and other owners receive no comparable protection.",
        "html": "For wealthy homeowners, $304 a year is a rounding error. <strong>For a retiree on a fixed income, a young family stretching to cover a mortgage</strong><strong>,</strong><strong> or a longtime homeowner watching every bill climb, Measure PFD can mean the difference between staying in Pasadena and getting priced out.</strong> These neighbors earn too much to qualify for assistance and too little to absorb another tax increase. Only qualifying low-income seniors receive an exemption. Apartment properties, small housing providers, businesses, and other owners receive no comparable protection."
      }
    ]
  },
  {
    "title": "Renters Pay, Too",
    "paragraphs": [
      {
        "text": "Most Pasadena households rent. Renters will never see a Measure PFD bill, yet they live in the buildings that must pay it. Measure PFD taxes apartment buildings on every improved square foot. Family-owned small housing providers keep Pasadena’s older, more affordable apartments running on thin margins. Rent control limits what they collect. Taxes, insurance, and repairs keep rising anyway. The pressure lands somewhere: deferred repairs, fewer upgrades, higher rents on new leases or buildings sold to bigger investors. Pasadena should fight fires without fueling the housing crisis.",
        "html": "Most Pasadena households rent. Renters will never see a Measure PFD bill, yet they live in the buildings that must pay it. Measure PFD taxes apartment buildings on every improved square foot. Family-owned small housing providers keep Pasadena’s older, more affordable apartments running on thin margins. Rent control limits what they collect. Taxes, insurance, and repairs keep rising anyway. The pressure lands somewhere: deferred repairs, fewer upgrades, higher rents on new leases or buildings sold to bigger investors. <strong>Pasadena should fight fires without fueling the housing crisis.</strong>"
      }
    ]
  },
  {
    "title": "The Eaton Fire Deserves Better Than a Sales Pitch",
    "paragraphs": [
      {
        "text": "The Eaton Fire devastated our neighbors. We honor every firefighter who fought it.",
        "html": "The Eaton Fire devastated our neighbors. We honor every firefighter who fought it."
      },
      {
        "text": "Proponents cite the Eaton Fire to push an inequitable tax. County and state fire investigators determined that electrical arcing from utility equipment caused the disaster. Honoring our firefighters does not require a 14-year tax on only one slice of the community.",
        "html": "Proponents cite the Eaton Fire to push an inequitable tax. <strong>County and state fire investigators determined that electrical arcing from utility equipment caused the disaster. Honoring our firefighters does not require a 14-year tax on only one slice of the community.</strong>"
      }
    ]
  },
  {
    "title": "A 14-Year Check With No Strings Attached",
    "paragraphs": [
      {
        "text": "Measure PFD guarantees tax collections. The measure does lock in seismic retrofits at two fire stations. Beyond those two, nothing in Measure PFD guarantees completed repairs at the other stations, faster response times, successful recruitment, or fewer overlapping emergencies. Annual audits merely track spending after the money leaves taxpayers’ pockets. Voters deserve a project schedule, performance standards, protection for existing fire funding, a housing-impact study and a midterm public review. Measure PFD offers none of them.",
        "html": "Measure PFD guarantees tax collections. The measure does lock in seismic retrofits at two fire stations. <strong>Beyond those two, nothing in Measure PFD guarantees completed repairs at the other stations, faster response times, successful recruitment</strong><strong>,</strong><strong> or fewer overlapping emergencies.</strong> Annual audits merely track spending after the money leaves taxpayers’ pockets. Voters deserve a project schedule, performance standards, protection for existing fire funding, a housing-impact study and a midterm public review. Measure PFD offers none of them."
      }
    ]
  },
  {
    "title": "You Already Paid for Fire Stations. Now They Want You to Pay Again.",
    "paragraphs": [
      {
        "text": "Pasadena voters paid once already. In 2018, they approved Measure I, a permanent three-quarter-cent sales tax, sold in part to “keep fire stations open.” Today, Measure I brings in about $32 million. About $10.7 million goes to PUSD under Measure J. The city’s share goes to the general fund, with no lock on fire stations. In June 2019, the capital budget recommended $1.5 million to design a replacement for Station 37, at 3430 East Foothill, then estimated at $21.3 million. On June 12, Mayor Tornek said those dollars would be better used for short-term repairs. On June 17, the Council voted to make that transfer. Stations 33 and 37, the two facilities named in Measure PFD, remain unfunded. Voters paid for the upgrades once. City Hall moved the design money and left both stations waiting. Now City Hall wants voters to pay again.",
        "html": "<strong>Pasadena voters paid once already. In 2018, they approved Measure I, a permanent three-quarter-cent sales tax, sold in part to “keep fire stations open.”</strong> Today, Measure I brings in about $32 million. About $10.7 million goes to PUSD under Measure J. The city’s share goes to the general fund, with no lock on fire stations. In June 2019, the capital budget recommended $1.5 million to design a replacement for Station 37, at 3430 East Foothill, then estimated at $21.3 million. On June 12, Mayor Tornek said those dollars would be better used for short-term repairs. On June 17, the Council voted to make that transfer. <strong>Stations 33 and 37, the two </strong><strong>facilities</strong><strong> named in Measure PFD, remain unfunded. Voters paid for the upgrades once. City Hall moved the design money and left both stations waiting. Now City Hall wants voters to pay again.</strong>"
      }
    ]
  },
  {
    "title": "Pasadena Leaders Say: Not This Plan",
    "paragraphs": [
      {
        "text": "Former Mayor Bill Paparian, who served on the City Council from 1987 to 1999, put the case plainly in the Pasadena Star-News on September 25, 2026:",
        "html": "Former Mayor Bill Paparian, who served on the City Council from 1987 to 1999, put the case plainly in the Pasadena Star-News on September 25, 2026:"
      },
      {
        "text": "“I am recommending that Pasadenans vote No on Measure PFD. I say that we need to see the results of the recent telephone poll and hear about the consultant strategy. I say to the current City Council: Put station upgrades and wildfire work at the front of the budget you have. Then talk to us about another levy.”",
        "html": "<em><strong>“I am recommending that Pasadenans vote No on Measure PFD</strong></em><em><strong>. I say that we need to see the results of the recent telephone poll and hear about the consultant strategy. I say to the current City Council: Put station upgrades and wildfire work at the front of the budget you have. Then talk to us about another levy.”</strong></em>",
        "cite": "https://www.pasadenastarnews.com/2026/09/25/william-paparian-pasadena-should-have-funded-fire-first/"
      }
    ]
  },
  {
    "title": "A Better Plan Is Within Reach",
    "paragraphs": [
      {
        "text": "A NO vote does not leave Pasadena unprotected. Firefighters continue to respond. City Hall needs to return with a fairer plan that shares costs among everyone who benefits, sets measurable performance standards, and protects existing fire funding. A better plan starts with a housing-impact study, a project schedule, and response-time benchmarks. It pairs response funding with fire prevention, including encampment-related fire risk. Then City Hall can ask voters again.",
        "html": "<strong>A NO vote does not leave Pasadena unprotected. Firefighters continue to respond</strong>. City Hall needs to return with a fairer plan that shares costs among everyone who benefits, sets measurable performance standards, and protects existing fire funding. A better plan starts with a housing-impact study, a project schedule, and response-time benchmarks. It pairs response funding with fire prevention, including encampment-related fire risk. Then City Hall can ask voters again."
      }
    ]
  }
];

export const faqs: CampaignFaq[] = [
  {
    "id": "what-is-measure-pfd",
    "question": "What is Measure PFD?",
    "paragraphs": [
      {
        "text": "Measure PFD, officially the Pasadena 911 Firefighter/Paramedic Emergency Medical/Wildfire Preparedness/Response Measure, asks voters to approve a new parcel tax of 19 cents per square foot on every improved property in Pasadena. City Hall expects the tax to generate about $22.1 million annually for 14 years. Homes, apartment buildings, businesses, and other developed properties pay based on building square footage. Measure PFD is a special tax, so it requires a two-thirds vote to pass.",
        "html": "Measure PFD, officially the Pasadena 911 Firefighter/Paramedic Emergency Medical/Wildfire Preparedness/Response Measure, asks voters to approve a new parcel tax of 19 cents per square foot on every improved property in Pasadena. City Hall expects the tax to generate about $22.1 million annually for 14 years. Homes, apartment buildings, businesses, and other developed properties pay based on building square footage. <strong>Measure PFD is a special tax, so it requires a two-thirds vote to pass.</strong>"
      }
    ]
  },
  {
    "id": "why-vote-no",
    "question": "Do opponents support Pasadena’s firefighters?",
    "paragraphs": [
      {
        "text": "Yes, without reservation. Pasadena’s firefighters and paramedics deserve strong support. Public safety personnel respond to every call, from a heart attack on Colorado Boulevard to a brush fire in the foothills. Emergency services protect the entire community. We oppose the funding scheme, not the people who protect us. Measure PFD is the WRONG solution, and supporting firefighters does not require approving every tax.",
        "html": "Yes, without reservation. Pasadena’s firefighters and paramedics deserve strong support. <strong>Public safety personnel </strong><strong>respond to</strong><strong> every call, from a heart attack on Colorado Boulevard to a brush fire in the foothills.</strong> <strong>Emergency services protect the entire community.</strong> <u>We oppose the funding scheme, not the people who protect us. Measure PFD </u><u>i</u><u>s the WRONG solution, and supporting firefighters does not require approving every tax.</u>"
      }
    ]
  },
  {
    "id": "how-much-would-it-cost",
    "question": "How much will Measure PFD cost my family?",
    "paragraphs": [
      {
        "text": "Take your building’s square footage and multiply it by 19 cents. That amount appears on your property tax bill every year for 14 years. A typical 1,600-square-foot home would pay about $304 a year, roughly $25 a month, according to the City’s own math. Over the life of the tax, that same home pays $4,256. A 2,000-square-foot home pays about $380 a year. Apartment buildings pay on every improved square foot. A 20,000-square-foot building would owe about $3,800 a year. A 40,000-square-foot building would owe about $7,600.",
        "html": "Take your building’s square footage and multiply it by 19 cents. That amount appears on your property tax bill every year for 14 years. A typical 1,600-square-foot home would pay about $304 a year, roughly $25 a month, according to the City’s own math. <strong>Over the life of the tax, that same home pays $4,256.</strong> A 2,000-square-foot home pays about $380 a year. Apartment buildings pay on every improved square foot. A 20,000-square-foot building would owe about $3,800 a year. A 40,000-square-foot building would owe about $7,600."
      }
    ]
  },
  {
    "id": "why-square-footage-is-unfair",
    "question": "Why is a square-footage tax unfair?",
    "paragraphs": [
      {
        "text": "Everyone relies on firefighters. Only property owners pay. Firefighters and paramedics serve homeowners and renters, workers and commuters, tourists, Rose Bowl crowds, and people experiencing homelessness. Measure PFD shifts the entire bill to one group. Square footage has nothing to do with who calls 911. Emergency medical calls, not building fires, account for most Fire Department responses. In 2021, the Department answered more than 17,000 calls, and more than 13,000 were medical. A larger building does not mean more 911 calls. A citywide service deserves a citywide, fairer funding plan.",
        "html": "<strong>Everyone relies on firefighters. Only property owners pay.</strong> Firefighters and paramedics serve homeowners and renters, workers and commuters, tourists, Rose Bowl crowds, and people experiencing homelessness. Measure PFD shifts the entire bill to one group. Square footage has nothing to do with who calls 911. Emergency medical calls, not building fires, account for most Fire Department responses. In 2021, the Department answered more than 17,000 calls, and more than 13,000 were medical. A larger building does not mean more 911 calls. A citywide service deserves a citywide, fairer funding plan."
      }
    ]
  },
  {
    "id": "what-is-the-1700-estimate",
    "question": "Haven’t Pasadena voters already approved new taxes?",
    "paragraphs": [
      {
        "text": "Yes. Pasadena voters have stepped up again and again. Voters approved parcel taxes for the Central Library and the school district. Since 2020, city and school measures have already added more than $1,700 in new taxes for many. The hits keep coming. L.A. County voters raised the sales tax by half a cent in June, and the increase takes effect at every checkout counter on October 1, 2026. Meanwhile, insurance, utilities, groceries, and property taxes are rising faster than paychecks. Politicians talk about affordability but pass policies and taxes that make Pasadena less affordable. Measure PFD piles on.",
        "html": "Yes. Pasadena voters have stepped up again and again. Voters approved parcel taxes for the Central Library and the school district. Since 2020, city and school measures have already added more than $1,700 in new taxes for many. The hits keep coming. L.A. County voters raised the sales tax by half a cent in June, and the increase takes effect at every checkout counter on October 1, 2026. Meanwhile, insurance, utilities, groceries, and property taxes are rising faster than paychecks. Politicians talk about affordability but pass policies and taxes that make Pasadena less affordable. Measure PFD piles on."
      }
    ]
  },
  {
    "id": "who-is-exempt",
    "question": "Who is the “forgotten middle”?",
    "paragraphs": [
      {
        "text": "The forgotten middle includes retirees on fixed incomes, young families struggling to cover a mortgage, and longtime homeowners watching every bill climb. For wealthy homeowners, $304 a year is a rounding error. For the forgotten middle, Measure PFD can mean the difference between staying in Pasadena and being priced out. These neighbors earn too much to qualify for assistance and too little to absorb another tax increase. Only qualifying low-income seniors receive an exemption. Apartment properties, small housing providers, businesses, and other owners receive no comparable protection.",
        "html": "<strong>The forgotten middle includes retirees on fixed incomes, young families struggling to cover a mortgage,</strong> <strong>and longtime homeowners watching every bill climb</strong>. For wealthy homeowners, $304 a year is a rounding error. For the forgotten middle, Measure PFD can mean the difference between staying in Pasadena and being priced out. These neighbors earn too much to qualify for assistance and too little to absorb another tax increase. Only qualifying low-income seniors receive an exemption. Apartment properties, small housing providers, businesses, and other owners receive no comparable protection."
      }
    ]
  },
  {
    "id": "does-it-affect-renters",
    "question": "I rent. Why should I care?",
    "paragraphs": [
      {
        "text": "Most Pasadena households rent. Renters will never see a Measure PFD bill, yet they live in the buildings that must pay it. Measure PFD taxes apartment buildings on every improved square foot. Family-owned small housing providers keep Pasadena’s older, more affordable apartments running on thin margins. Rent control limits what they can collect. Taxes, insurance, and repairs keep rising anyway. The pressure will hit somewhere: deferred repairs, fewer upgrades, higher rents on new leases, or buildings sold to bigger investors. Pasadena can and should fight fires without fueling the housing crisis.",
        "html": "Most Pasadena households rent. Renters will never see a Measure PFD bill, yet they live in the buildings that must pay it. Measure PFD taxes apartment buildings on every improved square foot. Family-owned small housing providers keep Pasadena’s older, more affordable apartments running on thin margins. Rent control limits what they can collect. Taxes, insurance, and repairs keep rising anyway. <strong>The pressure </strong><strong>will hit</strong><strong> somewhere: deferred repairs, fewer upgrades, higher rents on new leases</strong><strong>,</strong><strong> or buildings sold to bigger investors. Pasadena </strong><strong>can and </strong><strong>should fight fires without fueling the housing crisis.</strong>"
      }
    ]
  },
  {
    "id": "eaton-fire",
    "question": "Didn’t the Eaton Fire prove we need this tax?",
    "paragraphs": [
      {
        "text": "The Eaton Fire devastated our neighbors. We honor every firefighter who fought it. Proponents cite the Eaton Fire to push an inequitable tax. County and state fire investigators determined that electrical arcing from utility equipment caused the disaster. Honoring our firefighters does not require a 14-year tax on a single slice of the community. Pasadena deserves a real plan for wildfire readiness, not a sales pitch built on tragedy.",
        "html": "The Eaton Fire devastated our neighbors. We honor every firefighter who fought it. <strong>Proponents cite the Eaton Fire to push an inequitable tax. County and state fire investigators determined that electrical arcing from utility equipment caused the disaster.</strong> Honoring our firefighters does not require a 14-year tax on a single slice of the community. Pasadena deserves a real plan for wildfire readiness, not a sales pitch built on tragedy."
      }
    ]
  },
  {
    "id": "what-oversight-is-required",
    "question": "Won’t annual audits keep the money honest?",
    "paragraphs": [
      {
        "text": "Audits count the money. They do not deliver results. Measure PFD guarantees tax collections. The measure does lock in seismic retrofits at two fire stations. Beyond those two, Measure PFD guarantees nothing about completed repairs at the other stations, faster response times, successful recruitment, or fewer overlapping emergencies. Annual audits merely track spending after the money leaves taxpayers’ pockets. Voters deserve a project schedule, performance standards, protection for existing fire funding, a housing-impact study, and a midterm public review. Measure PFD offers none of them.",
        "html": "Audits count the money. They do not deliver results. <strong>Measure PFD guarantees tax collections.</strong> The measure does lock in seismic retrofits at two fire stations. <strong>Beyond those two, Measure PFD guarantees </strong><strong>nothing about </strong><strong>completed repairs at the other stations, faster response times, successful recruitment</strong><strong>,</strong><strong> or fewer overlapping emergencies.</strong> Annual audits merely track spending after the money leaves taxpayers’ pockets. Voters deserve a project schedule, performance standards, protection for existing fire funding, a housing-impact study, and a midterm public review. Measure PFD offers none of them."
      }
    ]
  },
  {
    "id": "fire-station-upgrades",
    "question": "Haven’t voters already paid for fire station upgrades?",
    "paragraphs": [
      {
        "text": "Pasadena voters paid once already. In 2018, they approved Measure I, a permanent three-quarter-cent sales tax, sold in part to “keep fire stations open.” Today, Measure I brings in about $32 million. About $10.7 million goes to PUSD under Measure J. The city’s share goes to the general fund, with no lock on fire stations. In June 2019, the capital budget recommended $1.5 million to design a replacement for Station 37, at 3430 East Foothill, then estimated at $21.3 million. On June 12, Mayor Tornek said those dollars would be better used for short-term repairs. On June 17, the Council voted to make that transfer. Stations 33 and 37, the two houses named in Measure PFD, remain unfunded. Voters paid for the upgrades once. City Hall moved the design money and left both stations waiting. Now City Hall wants voters to pay again.",
        "html": "<strong>Pasadena voters paid once already. In 2018, they approved Measure I, a permanent three-quarter-cent sales tax, sold in part to “keep fire stations open.”</strong> Today, Measure I brings in about $32 million. About $10.7 million goes to PUSD under Measure J. The city’s share goes to the general fund, with no lock on fire stations. In June 2019, the capital budget recommended $1.5 million to design a replacement for Station 37, at 3430 East Foothill, then estimated at $21.3 million. On June 12, Mayor Tornek said those dollars would be better used for short-term repairs. On June 17, the Council voted to make that transfer. <strong>Stations 33 and 37, the two houses named in Measure PFD, remain unfunded. Voters paid for the upgrades once. City Hall moved the design money and left both stations waiting. Now City Hall wants voters to pay again.</strong>"
      }
    ]
  },
  {
    "id": "who-else-has-concerns",
    "question": "Who else has concerns about Measure PFD?",
    "paragraphs": [
      {
        "text": "Former Mayor Bill Paparian, who served on the City Council from 1987 to 1999, urged a NO vote in the Pasadena Star-News on September 25, 2026:",
        "html": "Former Mayor Bill Paparian, who served on the City Council from 1987 to 1999, urged a NO vote in the <em>Pasadena Star-News</em> on September 25, 2026:"
      },
      {
        "text": "“I am recommending that Pasadenans vote No on Measure PFD. I say that we need to see the results of the recent telephone poll and hear about the consultant strategy. I say to the current City Council: Put station upgrades and wildfire work at the front of the budget you have. Then talk to us about another levy.”",
        "html": "<em><strong>“I am recommending that Pasadenans vote No on Measure PFD</strong></em><em><strong>. I say that we need to see the results of the recent telephone poll and hear about the consultant strategy. I say to the current City Council: Put station upgrades and wildfire work at the front of the budget you have. Then talk to us about another levy.”</strong></em>",
        "cite": "https://www.pasadenastarnews.com/2026/09/25/william-paparian-pasadena-should-have-funded-fire-first/"
      }
    ]
  },
  {
    "id": "what-does-no-mean",
    "question": "What happens if Measure PFD fails?",
    "paragraphs": [
      {
        "text": "Firefighters keep responding. Every station stays open, and every 911 call still gets answered.",
        "html": "Firefighters keep responding. Every station stays open, and every 911 call still gets answered."
      },
      {
        "text": "A NO vote simply sends City Hall back to the drawing board for a better plan, one that shares costs among everyone who benefits, sets measurable performance standards, and protects existing fire funding.",
        "html": "A NO vote simply sends City Hall back to the drawing board for a better plan, one that shares costs among everyone who benefits, sets measurable performance standards, and protects existing fire funding."
      }
    ]
  },
  {
    "id": "what-should-the-city-do",
    "question": "What should the City do instead?",
    "paragraphs": [
      {
        "text": "Start with the budget City Hall already has. Fund station upgrades and wildfire work first. Then show voters the details before asking for more: a housing-impact study, a project schedule, and response-time benchmarks. Pair response funding with fire prevention, including encampment-related fire risk. Pasadena can strengthen emergency services through a fairer plan. Once City Hall does the homework, voters can take a fresh look.",
        "html": "Start with the budget City Hall already has. Fund station upgrades and wildfire work first. Then show voters the details before asking for more: a housing-impact study, a project schedule, and response-time benchmarks. Pair response funding with fire prevention, including encampment-related fire risk. Pasadena can strengthen emergency services through a fairer plan. Once City Hall does the homework, voters can take a fresh look."
      }
    ]
  }
];
