function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
// tooltip-map.js

document.addEventListener("DOMContentLoaded", () => {
    // Create tooltip element
    const tooltip = document.createElement("div");
    tooltip.id = "tooltip";
    tooltip.style.position = "absolute";
    tooltip.style.pointerEvents = "none";
    tooltip.style.background = "rgba(0,0,0,0.75)";
    tooltip.style.color = "#fff";
    tooltip.style.padding = "4px 8px";
    tooltip.style.borderRadius = "4px";
    tooltip.style.fontSize = "0.9em";
    tooltip.style.whiteSpace = "nowrap";
    tooltip.style.display = "none";
    tooltip.style.zIndex = "1000";
    document.body.appendChild(tooltip);
  
    // Problems map for every country code in the SVG
    const countryProblems = {
      
    'AE': 'Water scarcity, Traffic congestion, High living costs',
    'AF': 'War and instability, Corruption, Lack of infrastructure',
    'AI': 'Limited access to healthcare, High unemployment, Environmental degradation',
    'AL': 'Political instability, Corruption, Air pollution',
    'AM': 'Unemployment, Economic instability, Environmental issues',
    'AT': 'Aging population, Housing shortages, Traffic congestion',
    'AW': 'Limited freshwater supply, Tourism dependence, Environmental degradation',
    'BA': 'Ethnic tensions, Corruption, Unemployment',
    'BB': 'High crime rates, Traffic accidents, Pollution',
    'BD': 'Flooding, Overpopulation, Poverty',
    'BE': 'High taxes, Political division, Social inequality',
    'BF': 'Drought, Political instability, Limited education access',
    'AZ': 'Corruption, Energy dependency, Pollution',
    'AUSTRALIA': 'Bushfires, Water shortages, Indigenous rights issues',
    'PNG': 'Health issues (e.g., malaria), Infrastructure deficits, Corruption',
    'INDONESIA': 'Deforestation, Terrorism, Corruption',
    'MALAYSIA': 'Traffic congestion, Corruption, Environmental degradation',
    'JAPAN': 'Aging population, Natural disasters, Economic stagnation',
    'NZE': 'High house prices, Environmental degradation, Mental health issues',
    'PHI': 'Corruption, Poverty, Natural disasters',
    'BG': 'Corruption, Political instability, Air pollution',
    'BH': 'High unemployment, Corruption, Traffic congestion',
    'BI': 'Political instability, Poverty, Lack of infrastructure',
    'BJ': 'Poverty, Corruption, Political instability',
    'TM': 'Authoritarianism, Economic instability, Human rights violations',
    'BL': 'Limited employment opportunities, High cost of living, Tourism dependence',
    'BM': 'Economic dependence on tourism, High living costs, Traffic congestion',
    'BN': 'Lack of economic diversification, High living costs, Limited job opportunities',
    'BO': 'Corruption, Poverty, Drug trafficking',
    'BR': 'Deforestation, Crime rates, Corruption',
    'BS': 'Hurricanes, High crime rates, Poverty',
    'BT': 'Economic dependence on tourism, Pollution, Social isolation',
    'BW': 'Drought, High unemployment, Health crises',
    'BY': 'Authoritarianism, Corruption, Lack of press freedom',
    'BZ': 'Deforestation, Corruption, High unemployment',
    'ca': 'High cost of living, Housing crisis, Mental health issues',
    'CD': 'Political instability, Poverty, Corruption',
    'CF': 'Civil war, Poverty, Food insecurity',
    'UK': 'Brexit fallout, Political division, Housing crisis',
    'CG': 'Poverty, Corruption, Political instability',
    'CH': 'High cost of living, Aging population, Environmental issues',
    'CI': 'Corruption, Political instability, Health crises',
    'GL': 'Climate change, Economic dependence on fishing, Isolation',
    'denmark': 'High taxes, Aging population, Immigration debates',
    'CL': 'Economic inequality, Pollution, Political instability',
    'CM': 'Corruption, Poverty, Health issues',
    'CN': 'Censorship, Pollution, Overpopulation',
    'CO': 'Drug trafficking, Corruption, Violence',
    'CR': 'Deforestation, Traffic congestion, Pollution',
    'CU': 'Economic sanctions, Political repression, Health crises',
    'CV': 'Limited natural resources, Economic instability, Poverty',
    'CY': 'Economic instability, Unemployment, Political division',
    'CZ': 'Corruption, Political instability, Environmental issues',
    'DE': 'Housing crisis, Aging population, Political division',
    'DJ': 'Poverty, Corruption, Limited education access',
    'DK': 'High taxes, Aging population, Immigration debates',
    'DM': 'Economic dependency, Corruption, Natural disasters',
    'DO': 'Corruption, Poverty, Hurricanes',
    'DZ': 'Political repression, Corruption, Economic instability',
    'EC': 'Poverty, Corruption, Natural disasters',
    'EE': 'Aging population, Economic dependency, Housing crisis',
    'EG': 'Political instability, Corruption, Water scarcity',
    'ER': 'Human rights violations, Economic instability, Corruption',
    'ES': 'Unemployment, Corruption, Political instability',
    'ET': 'Poverty, Corruption, Political instability',
    'FI': 'Aging population, Economic slowdown, Immigration issues',
    'FJ': 'Climate change, Economic dependence on tourism, Poverty',
    'FM': 'Economic instability, Health crises, Limited infrastructure',
    'FR': 'Terrorism, Unemployment, Social inequality',
    'GA': 'Corruption, Political instability, Health crises',
    'GB': 'Brexit fallout, Housing crisis, Political instability',
    'GD': 'Natural disasters, High unemployment, Corruption',
    'GE': 'Political instability, Corruption, Economic inequality',
    'GH': 'Poverty, Corruption, Health issues',
    'GM': 'Poverty, Corruption, Political instability',
    'GN': 'Corruption, Health crises, Poverty',
    'GQ': 'Political instability, Corruption, Oil dependency',
    'GR': 'Economic instability, Corruption, Refugee crisis',
    'GT': 'Corruption, Poverty, Drug violence',
    'GW': 'Corruption, Poverty, Drug trafficking',
    'GY': 'Corruption, Economic dependence on oil, Political instability',
    'HN': 'Poverty, Corruption, Natural disasters',
    'HR': 'Economic instability, Corruption, Aging population',
    'HT': 'Poverty, Corruption, Political instability',
    'HU': 'Economic stagnation, Political division, Corruption',
    'ID': 'Deforestation, Corruption, Terrorism',
    'IE': 'Housing crisis, Brexit fallout, Economic inequality',
    'IL': 'Political tensions, Security concerns, High cost of living',
    'IN': 'Overpopulation, Pollution, Corruption',
    'IQ': 'War and instability, Corruption, Unemployment',
    'IR': 'Political repression, Economic instability, Environmental degradation',
    'IS': 'Aging population, Environmental issues, High cost of living',
    'IT': 'Corruption, Economic stagnation, Political instability',
    'JM': 'High crime rates, Poverty, Unemployment',
    'JO': 'Political instability, Corruption, Water scarcity',
    'JP': 'Natural disasters, Aging population, Economic stagnation',
    'KE': 'Corruption, Poverty, Health issues',
    'KG': 'Corruption, Political instability, Economic dependency',
    'KH': 'Corruption, Human trafficking, Poverty',
    'KM': 'Political instability, Poverty, Health issues',
    'KN': 'Economic instability, Limited infrastructure, High unemployment',
    'KP': 'Authoritarianism, Economic collapse, Human rights violations',
    'KR': 'Aging population, Political division, Economic dependence on exports',
    'KW': 'High cost of living, Labor rights issues, Economic dependence on oil',
    'KZ': 'Corruption, Political repression, Economic inequality',
    'LA': 'Poverty, Political instability, Corruption',
    'LB': 'Political instability, Corruption, Refugee crisis',
    'LC': 'Economic dependency, Tourism vulnerability, High unemployment',
    'LI': 'Economic dependency on finance, Corruption, Limited workforce diversity',
    'LK': 'Corruption, Political instability, Ethnic tensions',
    'LR': 'Poverty, Corruption, Health crises',
    'LS': 'Water scarcity, Poverty, Political instability',
    'LT': 'Corruption, Aging population, Economic inequality',
    'LU': 'Economic dependency on finance, High cost of living, Limited diversity',
    'LV': 'Economic instability, Corruption, Aging population',
    'LY': 'Civil war, Corruption, Oil dependence',
    'MA': 'Corruption, Unemployment, Water scarcity',
    'MC': 'High cost of living, Tourism dependency, Limited workforce opportunities',
    'MD': 'Corruption, Poverty, Political instability',
    'ME': 'Economic instability, Corruption, Social inequality',
    'MG': 'Poverty, Deforestation, Health crises',
    'MH': 'Environmental issues, Economic dependence on fishing, Limited infrastructure',
    'MK': 'Economic instability, Corruption, Ethnic tensions',
    'ML': 'Poverty, Corruption, Political instability',
    'MM': 'Political repression, Corruption, Human rights violations',
    'MN': 'Corruption, Economic instability, Limited infrastructure',
    'MR': 'Poverty, Corruption, Health issues',
    'MT': 'Tourism dependency, Corruption, High cost of living',
    'MU': 'Corruption, Economic dependency on tourism, High unemployment',
    'MV': 'Climate change, Tourism dependence, Water scarcity',
    'MW': 'Poverty, Corruption, Health crises',
    'MX': 'Drug violence, Corruption, Economic inequality',
    'MY': 'Corruption, Environmental degradation, Traffic congestion',
    'MZ': 'Poverty, Corruption, Health crises',
    'NA': 'Drought, High unemployment, Political instability',
    'NE': 'Poverty, Corruption, Health issues',
    'NG': 'Corruption, Terrorism, Poverty',
    'NI': 'Political instability, Corruption, Economic dependency',
    'NL': 'Housing crisis, High cost of living, Environmental issues',
    'NO': 'Aging population, High cost of living, Immigration issues',
    'NP': 'Poverty, Political instability, Corruption',
    'NZ': 'Housing affordability, Environmental degradation, Mental health crises',
    'OM': 'Political repression, Economic instability, Limited political freedom',
    'PA': 'Poverty, Corruption, Unemployment',
    'PE': 'Corruption, Political instability, Natural disasters',
    'PG': 'Health issues (e.g., malaria), Limited infrastructure, Corruption',
    'PH': 'Corruption, Poverty, Natural disasters',
    'PK': 'Corruption, Terrorism, Political instability',
    'PL': 'Political division, Aging population, Economic inequality',
    'PT': 'Corruption, Economic stagnation, Aging population',
    'PY': 'Corruption, Political instability, Deforestation',
    'QA': 'High cost of living, Labor rights issues, Economic dependence on oil',
    'RO': 'Corruption, Economic instability, Political instability',
    'RS': 'Political instability, Corruption, Ethnic tensions',
    'RU': 'Corruption, Political repression, Economic inequality',
    'RW': 'Poverty, Corruption, Health issues',
    'SA': 'Political repression, Economic dependency on oil, Social inequality',
    'SB': 'Limited infrastructure, Economic instability, Health crises',
    'SC': 'Tourism dependence, Environmental degradation, Limited employment opportunities',
    'SD': 'Political instability, Corruption, Poverty',
    'SE': 'Aging population, Immigration debates, Social inequality',
    'SG': 'High cost of living, Limited political freedom, Economic dependency on exports',
    'SI': 'Economic instability, Aging population, Corruption',
    'SK': 'Corruption, Economic stagnation, Aging population',
    'SL': 'Poverty, Corruption, Health crises',
    'SN': 'Corruption, Poverty, Political instability',
    'SO': 'Terrorism, Political instability, Corruption',
    'SR': 'Corruption, Economic instability, Social inequality',
    'SS': 'Civil war, Political instability, Humanitarian crisis',
    'ST': 'Economic dependency on cocoa, Poverty, Limited infrastructure',
    'SV': 'Gang violence, Corruption, Unemployment',
    'SY': 'Civil war, Political instability, Refugee crisis',
    'SZ': 'Political instability, Poverty, Unemployment',
    'TC': 'Tourism dependence, Limited infrastructure, High cost of living',
    'TD': 'Corruption, Poverty, Political instability',
    'TF': 'Environmental issues, Isolation, Limited infrastructure',
    'TG': 'Poverty, Corruption, Political instability',
    'TH': 'Traffic congestion, Corruption, Environmental degradation',
    'TJ': 'Corruption, Political instability, Economic instability',
    'TM': 'Authoritarianism, Economic instability, Human rights violations',
    'TN': 'Corruption, Economic instability, Political instability',
    'TO': 'Economic dependency on tourism, Limited infrastructure, High unemployment',
    'TR': 'Political instability, Corruption, Refugee crisis',
    'TT': 'Crime rates, Economic inequality, Limited job opportunities',
    'TV': 'Isolation, Limited infrastructure, Economic dependency on fishing',
    'TZ': 'Poverty, Corruption, Health crises',
    'UA': 'Corruption, Political instability, Economic dependency on exports',
    'UG': 'Poverty, Corruption, Health crises',
    'us': 'Income inequality, Healthcare access, Political polarization',
    'UY': 'Economic inequality, Political division, Aging population',
    'UZ': 'Corruption, Economic instability, Human rights violations',
    'VA': 'Lack of political power, Limited resources, Small population',
    'VC': 'High unemployment, Corruption, Limited healthcare',
    'VE': 'Political instability, Hyperinflation, Crime rates',
    'VG': 'Economic dependence on tourism, High cost of living, Limited infrastructure',
    'VI': 'Economic dependency on tourism, Limited job opportunities, High cost of living',
    'VN': 'Corruption, Pollution, Economic inequality',
    'VU': 'Environmental issues, Limited infrastructure, High cost of living',
    'WF': 'Isolation, Limited infrastructure, Dependency on imports',
    'WS': 'Limited infrastructure, Vulnerability to natural disasters, High unemployment',
    'YE': 'Political instability, Poverty, Health crises',
    'ZA': 'High crime rates, Economic inequality, Unemployment',
    'ZM': 'Poverty, Corruption, Health crises',
    'ZW': 'Economic instability, Corruption, Political repression'
    
    };
  
    // Attach hover handlers
    document.querySelectorAll("svg path").forEach(el => {
      const key = el.id;
      if (!key || !countryProblems[key]) return;
      el.style.cursor = "pointer";
  
      el.addEventListener("mousemove", e => {
        tooltip.textContent = countryProblems[key];
        tooltip.style.left = e.pageX + 10 + "px";
        tooltip.style.top = e.pageY + 10 + "px";
        tooltip.style.display = "block";
      });
  
      el.addEventListener("mouseout", () => {
        tooltip.style.display = "none";
      });
    });
  });
  