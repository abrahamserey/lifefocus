'use client'
import { useState } from 'react'

const clients = [
  'MLB',
  'Wells Fargo',
  'Honda',
  'Intel',
  'Microsoft',
  'NFL',
  'Nike',
  'Showtime',
  'EA',
  'Google',
  'Audi',
  'Sony',
  'Xbox',
  'Snapchat',
  'Riot Games',
]

const fullClientList = [
  'Activision',
  'Acura',
  'Aim Funds',
  'All Business',
  'Allsport',
  'Alpine',
  'American Airlines',
  'Amnesty International',
  'Archipelago',
  "Bally's",
  'Beringer',
  'Brodia.com',
  'Budweiser',
  'Buick',
  'Callaway',
  'Cellular South',
  'Chipshot',
  'Citra',
  'Comdisco',
  'DirecTv',
  'Dunkin Donuts',
  'Expedia.com',
  'Facebook',
  'Federated',
  'First National Bank',
  'Ford',
  'Hasbro',
  'Hifi.com',
  'Honda',
  'Intel',
  'JC Penney',
  'K Swiss',
  'K2 Skiis',
  'KBkids',
  'Kodak',
  'Kyocera',
  'LA Times',
  'Landrover',
  'Leisure Planet',
  'Lending Tree',
  'Lexus',
  'Lincoln/Mercury',
  'Lycos',
  "McDonald's",
  'Merrill Lynch',
  'Micron PC',
  'Microsoft',
  'Mitsubishi',
  'MSN',
  'Mophie',
  'Nextel',
  'Nike',
  'Nissan',
  'PDFA',
  'Pennzoil',
  'Playstation',
  'Polaris',
  'Pontiac',
  'Powertel',
  'Pringles',
  'Progressive Auto',
  'Quiksilver',
  'Qwest',
  'RIOT Games',
  'SBC',
  'Scion',
  'SCEE London Studio',
  'Snapchat',
  'Sony',
  'Specialized',
  'Subaru',
  'Subway',
  'Sears',
  'Toyota Tacoma/Solara',
  'Twix',
  'Unisys',
  'Voicestream',
  'Volkswagen',
  'Xbox',
]

export default function ClientsSection() {
  const [showFullList, setShowFullList] = useState(false)

  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl font-light text-center mb-16">Clients</h2>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-8 lg:gap-12 items-center mb-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center h-16">
              <span className="text-sm font-semibold text-gray-700 text-center">{client}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setShowFullList(!showFullList)}
            className="text-xs font-semibold tracking-wider uppercase hover:text-[#eb432b] transition"
          >
            {showFullList ? 'Hide' : 'Full Client List'}
          </button>

          {showFullList && (
            <div className="mt-12 max-w-4xl mx-auto">
              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                {fullClientList.map((client, index) => (
                  <li key={index} className="text-left">
                    {client}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
