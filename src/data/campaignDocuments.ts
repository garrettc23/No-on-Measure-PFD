// Website copy based on client-supplied October 8, 2026 documents and factual review.
// Original PDFs and attributed quotations remain separate. HTML includes reviewed formatting and guide links.
export const campaignCopyReviewedDate = '2026-10-28';

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
    "title": "What Measure PFD Would Add",
    "paragraphs": [
      {
        "text": "Measure PFD would add a parcel tax of $0.19 per taxable square foot annually, subject to exemptions. For 1,600 taxable square feet, that is $304 a year or $4,256 over 14 years if the taxable area stays the same. Existing property-tax charges vary by property and applicable exemptions; this example does not calculate a household’s combined city, school, or county taxes.",
        "html": "Measure PFD would add a parcel tax of $0.19 per taxable square foot annually, subject to exemptions. For 1,600 taxable square feet, that is $304 a year or $4,256 over 14 years if the taxable area stays the same. Existing property-tax charges vary by property and applicable exemptions; this example does not calculate a household’s combined city, school, or county taxes."
      }
    ]
  },
  {
    "title": "The Forgotten Middle Pays the Most",
    "paragraphs": [
      {
        "text": "For wealthy homeowners, $304 a year is a rounding error. For a retiree on a fixed income, a young family stretching to cover a mortgage, or a longtime homeowner watching every bill climb, Measure PFD can mean the difference between staying in Pasadena and getting priced out. These neighbors earn too much to qualify for assistance and too little to absorb another tax increase. Measure PFD includes exemptions for qualifying low-income owners, owners receiving specified Pasadena senior or disability utility-tax exemptions, government property, and qualifying religious or community-service property. Eligibility depends on the ordinance’s requirements.",
        "html": "For wealthy homeowners, $304 a year is a rounding error. <strong>For a retiree on a fixed income, a young family stretching to cover a mortgage</strong><strong>,</strong><strong> or a longtime homeowner watching every bill climb, Measure PFD can mean the difference between staying in Pasadena and getting priced out.</strong> These neighbors earn too much to qualify for assistance and too little to absorb another tax increase. Measure PFD includes exemptions for qualifying low-income owners, owners receiving specified Pasadena senior or disability utility-tax exemptions, government property, and qualifying religious or community-service property. Eligibility depends on the ordinance’s requirements."
      }
    ]
  },
  {
    "title": "How Measure PFD Could Affect Renters",
    "paragraphs": [
      {
        "text": "The proposed tax would apply to taxable improved rental property, subject to exemptions. Its effect on rents, maintenance, or ownership decisions would depend on individual circumstances and applicable rental rules.",
        "html": "The proposed tax would apply to taxable improved rental property, subject to exemptions. Its effect on rents, maintenance, or ownership decisions would depend on individual circumstances and applicable rental rules."
      }
    ]
  },
  {
    "title": "Wildfire Readiness and the Eaton Fire",
    "paragraphs": [
      {
        "text": "The Eaton Fire devastated our neighbors. We honor every firefighter who fought it. This guide does not make a finding about the fire’s cause. Our campaign believes the City should prioritize wildfire readiness within its existing resources.",
        "html": "The Eaton Fire devastated our neighbors. We honor every firefighter who fought it. This guide does not make a finding about the fire’s cause. Our campaign believes the City should prioritize wildfire readiness within its existing resources."
      }
    ]
  },
  {
    "title": "What the Ordinance Requires",
    "paragraphs": [
      {
        "text": "The proposed ordinance includes reconstruction of Stations 33 and 37 within the first ten years. It restricts spending to specified purposes and requires annual independent audits and public reports. The ordinance defines a service baseline and describes enhancements above it, but capital-improvement prioritization does not require the City to maintain a specific General Fund appropriation. It does not set a guaranteed emergency-response time. Our campaign seeks stronger performance commitments.",
        "html": "The proposed ordinance includes reconstruction of Stations 33 and 37 within the first ten years. It restricts spending to specified purposes and requires annual independent audits and public reports. The ordinance defines a service baseline and describes enhancements above it, but capital-improvement prioritization does not require the City to maintain a specific General Fund appropriation. It does not set a guaranteed emergency-response time. Our campaign seeks stronger performance commitments."
      }
    ]
  },
  {
    "title": "How Does Existing Fire Funding Relate to Measure PFD?",
    "paragraphs": [
      {
        "text": "Measure I’s ballot question included fire services and keeping stations open among several general City services. The City’s adopted capital plan records funded renovations and completed improvements at some stations. It separately lists full replacements of Stations 33 and 37 as unfunded. Our campaign believes existing revenues should have been prioritized for those replacements before asking property owners to pay another tax. Read the funding timeline for the project history and official records.",
        "html": "Measure I’s ballot question included fire services and keeping stations open among several general City services. The City’s adopted capital plan records funded renovations and completed improvements at some stations. It separately lists full replacements of Stations 33 and 37 as unfunded. Our campaign believes existing revenues should have been prioritized for those replacements before asking property owners to pay another tax. Read the <a href=\"/measure-pfd-vs-measure-i/#funding-timeline\">funding timeline</a> for the project history and official records."
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
        "text": "Rejecting Measure PFD would mean the proposed parcel tax is not adopted. Future service and capital-funding decisions would remain subject to the City’s budgets and other applicable requirements.",
        "html": "Rejecting Measure PFD would mean the proposed parcel tax is not adopted. Future service and capital-funding decisions would remain subject to the City’s budgets and other applicable requirements."
      },
      {
        "text": "Our campaign asks City Hall to return with a fairer funding plan, measurable performance standards, and protection for existing fire funding. We support a housing-impact study, a project schedule, and response-time benchmarks. A No vote would not itself enact those proposals.",
        "html": "Our campaign asks City Hall to return with a fairer funding plan, measurable performance standards, and protection for existing fire funding. We support a housing-impact study, a project schedule, and response-time benchmarks. A No vote would not itself enact those proposals."
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
    "question": "How does Measure PFD relate to existing property taxes?",
    "paragraphs": [
      {
        "text": "Measure PFD would add a parcel tax of $0.19 per taxable square foot annually, subject to exemptions. For 1,600 taxable square feet, that is $304 a year or $4,256 over 14 years if the taxable area stays the same. Existing property-tax charges vary by property and applicable exemptions; this example does not calculate a household’s combined city, school, or county taxes.",
        "html": "Measure PFD would add a parcel tax of $0.19 per taxable square foot annually, subject to exemptions. For 1,600 taxable square feet, that is $304 a year or $4,256 over 14 years if the taxable area stays the same. Existing property-tax charges vary by property and applicable exemptions; this example does not calculate a household’s combined city, school, or county taxes."
      }
    ]
  },
  {
    "id": "who-is-exempt",
    "question": "Who is exempt from Measure PFD?",
    "paragraphs": [
      {
        "text": "Measure PFD includes exemptions for qualifying low-income owners, owners receiving specified Pasadena senior or disability utility-tax exemptions, government property, and qualifying religious or community-service property. Eligibility depends on the ordinance’s requirements.",
        "html": "Measure PFD includes exemptions for qualifying low-income owners, owners receiving specified Pasadena senior or disability utility-tax exemptions, government property, and qualifying religious or community-service property. Eligibility depends on the ordinance’s requirements."
      }
    ]
  },
  {
    "id": "does-it-affect-renters",
    "question": "How could Measure PFD affect renters?",
    "paragraphs": [
      {
        "text": "The proposed tax would apply to taxable improved rental property, subject to exemptions. Its effect on rents, maintenance, or ownership decisions would depend on individual circumstances and applicable rental rules.",
        "html": "The proposed tax would apply to taxable improved rental property, subject to exemptions. Its effect on rents, maintenance, or ownership decisions would depend on individual circumstances and applicable rental rules."
      }
    ]
  },
  {
    "id": "eaton-fire",
    "question": "Didn’t the Eaton Fire prove we need this tax?",
    "paragraphs": [
      {
        "text": "The Eaton Fire devastated our neighbors. We honor every firefighter who fought it. This guide does not make a finding about the fire’s cause. Our campaign believes the City should prioritize wildfire readiness within its existing resources.",
        "html": "The Eaton Fire devastated our neighbors. We honor every firefighter who fought it. This guide does not make a finding about the fire’s cause. Our campaign believes the City should prioritize wildfire readiness within its existing resources."
      }
    ]
  },
  {
    "id": "what-oversight-is-required",
    "question": "What oversight and funding requirements does Measure PFD include?",
    "paragraphs": [
      {
        "text": "The proposed ordinance includes reconstruction of Stations 33 and 37 within the first ten years. It restricts spending to specified purposes and requires annual independent audits and public reports. The ordinance defines a service baseline and describes enhancements above it, but capital-improvement prioritization does not require the City to maintain a specific General Fund appropriation. It does not set a guaranteed emergency-response time. Our campaign seeks stronger performance commitments.",
        "html": "The proposed ordinance includes reconstruction of Stations 33 and 37 within the first ten years. It restricts spending to specified purposes and requires annual independent audits and public reports. The ordinance defines a service baseline and describes enhancements above it, but capital-improvement prioritization does not require the City to maintain a specific General Fund appropriation. It does not set a guaranteed emergency-response time. Our campaign seeks stronger performance commitments."
      }
    ]
  },
  {
    "id": "fire-station-upgrades",
    "question": "How does existing fire funding relate to Measure PFD?",
    "paragraphs": [
      {
        "text": "Measure I’s ballot question included fire services and keeping stations open among several general City services. The City’s adopted capital plan records funded renovations and completed improvements at some stations. It separately lists full replacements of Stations 33 and 37 as unfunded. Our campaign believes existing revenues should have been prioritized for those replacements before asking property owners to pay another tax. Read the funding timeline for the project history and official records.",
        "html": "Measure I’s ballot question included fire services and keeping stations open among several general City services. The City’s adopted capital plan records funded renovations and completed improvements at some stations. It separately lists full replacements of Stations 33 and 37 as unfunded. Our campaign believes existing revenues should have been prioritized for those replacements before asking property owners to pay another tax. Read the <a href=\"/measure-pfd-vs-measure-i/#funding-timeline\">funding timeline</a> for the project history and official records."
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
        "text": "Rejecting Measure PFD would mean the proposed parcel tax is not adopted. Future service and capital-funding decisions would remain subject to the City’s budgets and other applicable requirements.",
        "html": "Rejecting Measure PFD would mean the proposed parcel tax is not adopted. Future service and capital-funding decisions would remain subject to the City’s budgets and other applicable requirements."
      },
      {
        "text": "Our campaign asks City Hall to develop a fairer funding plan with measurable performance standards and protection for existing fire funding. A No vote would not itself enact that alternative.",
        "html": "Our campaign asks City Hall to develop a fairer funding plan with measurable performance standards and protection for existing fire funding. A No vote would not itself enact that alternative."
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
